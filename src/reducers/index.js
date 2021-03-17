import { ADD_FEATURE, REMOVE_FEATURE, ADD_PRICE, REMOVE_PRICE } from "../actions";

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ],
    total: 26395
  };

export const reducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_FEATURE:
            return{
                //add action.payload to features array
                ...state,
                car: {...state.car,
                        features: [...state.car.features, action.payload] },
                total: state.total + action.payload.price
            }
        case REMOVE_FEATURE:
            return{
                //spread state object, filter features array by not adding action.payload to new array
                ...state,
                car: {...state.car,
                    features: state.car.features.filter(item => item !== action.payload)},
                total: state.total - action.payload.price
                }
        default:
            return state;
        
    }
}