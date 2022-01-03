import { GUI_TIEN, RUT_TIEN } from "./ActionTypes.ts"

export const rutTien = (amount:number)=>{

    return {
        type: RUT_TIEN,
        amount: amount
    }
}
export const guiTien = (amount:number)=>{
    
    return {
        type: GUI_TIEN,
        amount: amount
    }
}