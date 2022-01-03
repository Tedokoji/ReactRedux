import { GUI_TIEN, RUT_TIEN } from "./ActionTypes.ts"

const initialState = {
    money: 69420
}
interface Action{type:string, amount:number}

export const reducer = (state:{money:number} = initialState, actions:Action) =>{
    switch (actions.type) {
        case RUT_TIEN:
            return{
                ...state,
                money: state.money - actions.amount
            }
        case GUI_TIEN:
            return{
                ...state,
                money: state.money + actions.amount
            }
        default:
            return state
    }
}