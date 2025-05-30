import { combineReducers } from 'redux';

// Ejemplo de reducer (deberás adaptarlo a tu proyecto)
const vehicleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_VEHICLES':
      return { ...state, vehicles: action.payload };
    // Añade más casos según necesites
    default:
      return state;
  }
};

export default combineReducers({
  vehicles: vehicleReducer,
  // Puedes añadir más reducers aquí
});