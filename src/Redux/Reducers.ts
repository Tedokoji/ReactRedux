import { GUI_TIEN, RUT_TIEN,CHECK_LS  } from "./ActionTypes.ts"

const initialState = {
    money: 69420,
    history: []
}
interface Action{type:string, amount:number,history:Array<any>}

export const reducer = (state:{money:number,history:Array<any>} = initialState, actions:Action) =>{
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
        case CHECK_LS:
            return{
                ...state,
                history: actions.history
            }
        default:
            return state
    }
}