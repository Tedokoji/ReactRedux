import { GUI_TIEN, RUT_TIEN,CHECK_LS } from "./ActionTypes.ts"
import { db } from "../Firebase/config"
import { collection, getDocs } from "firebase/firestore"; 
export const rutTien = (amount:number)=>{
   
    return {
        type: RUT_TIEN,
        amount: amount
    }
}
export const guiTien =(amount:number)=>{
   
    return {
        type: GUI_TIEN,
        amount: amount
    }
}
export const checkLs = (payload)=>{
    return {
        type: CHECK_LS,
        history: payload
    }
}
export const checkFetch = ()=>{
    return async(dispatch)=>{
        const querySnapshot = await getDocs(collection(db, "history"));
        dispatch(checkLs(querySnapshot))
    }
}