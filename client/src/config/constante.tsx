declare global{
    interface window{
        _env_:{REACT_APP_API_URL? : string;

        };
    }
}
export const API_URL = 
 process.env.VITE_API_URL ??
 (window as any)._env_?.VITE_API_URL ??
  "http://localhost:4001/api/vehiculos";