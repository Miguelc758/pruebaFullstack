const axios = require('axios');
const xml2js = require('xml2js');
const { parseStringPromise } = xml2js;
require('dotenv').config();

class SoapService {
    async getVehiculoList() {
        const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" 
                          xmlns:web="http://sonaravl.com/webservices/">
            <soapenv:Header/>
            <soapenv:Body>
                <web:GET_MobileList>
                    <web:User>${process.env.SOAP_USER}</web:User>
                    <web:Password>${process.env.SOAP_PASSWORD}</web:Password>
                    <web:FleetId>${process.env.SOAP_FLEET_ID}</web:FleetId>
                </web:GET_MobileList>
            </soapenv:Body>
        </soapenv:Envelope>`;
        
        try {
            const response = await axios.post(process.env.SOAP_ENDPOINT, xml, {
                headers: {'Content-Type': 'text/xml'}
            });
            const result = await parseStringPromise(response.data);
            return this.processVehiculoList(result);
        } catch (error) {
            throw new Error(`SOAP Error: ${error.message}`);
        }
    }
     processVehicleList(xmlResult) {
        try {
            const vehicles = xmlResult['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]['ns1:GET_MobileListResponse'][0]['ns1:return'][0]['item'];
            
            return vehicles.map(vehicle => ({
                placa: vehicle['ns1:placa'][0],
                descripcion: vehicle['ns1:descripcion'][0],
                mId: vehicle['ns1:mId'][0],
                marca: 'Por definir', // Estos campos se pueden completar después
                linea: 'Por definir',
                modelo: 'Por definir'
            }));
        } catch (error) {
            throw new Error(`Error processing vehicle list: ${error.message}`);
        }
    }
     async getVehicleLocation(mId) {
        const xml = `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" 
                          xmlns:web="http://sonaravl.com/webservices/">
            <soapenv:Header/>
            <soapenv:Body>
                <web:GET_LastLocation>
                    <web:User>${process.env.SOAP_USER}</web:User>
                    <web:Password>${process.env.SOAP_PASSWORD}</web:Password>
                    <web:mId>${mId}</web:mId>
                </web:GET_LastLocation>
            </soapenv:Body>s
        </soapenv:Envelope>`;
        
        try {
            const response = await axios.post(process.env.SOAP_ENDPOINT, xml, {
                headers: {'Content-Type': 'text/xml'}
            });
            const result = await parseStringPromise(response.data);
            return this.processLocation(result);
        } catch (error) {
            throw new Error(`SOAP Error: ${error.message}`);
        }
    }
    
}
module.exports = new SoapService();