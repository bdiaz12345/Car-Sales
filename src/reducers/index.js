import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/index'

export const initialState = {
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
    ]
  }

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case ADD_FEATURE:
            console.log(action.payload.price)
            state.car.features = [...state.car.features, action.payload]
            state.additionalPrice = state.additionalPrice + action.payload.price
            console.log(state.additionalPrice)
            return {
                ...state
            }
        case REMOVE_FEATURE:
            console.log(action.payload)
            const index = state.car.features.indexOf(action.payload)
            state.car.features.splice(index, 1)
            state.additionalPrice = state.additionalPrice - action.payload.price
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}