import React,{useEffect, useLayoutEffect} from 'react'
import {useState} from 'react'
import './App.css'
import { connect } from 'react-redux';
import { guiTien,rutTien,checkFetch } from './Redux/Actions.ts';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from './Firebase/config';
function Banking(props) {
    useLayoutEffect(() => {
       props.checkFetch()
    }, [])
    const [input,setInput] = useState(0)
    const [check,setCheck] = useState(false)
    const rut =async()=>{
        props.rutTien(Number(input))
        const docRef = await addDoc(collection(db, "history"), {
            money: `- ${input}`
          });
    }
    const gui =async()=>{
        props.guiTien(Number(input))   
        const docRef = await addDoc(collection(db, "history"), {
            money: `+ ${input}`
          });
        
    }
    useEffect(()=>{
        props.checkFetch()
    })
    return (
        <div id="Bank">
            <h1>React Redux</h1>
            <h2>Money:{props.money}$</h2>
            <input onChange={e=>{setInput(e.target.value)}}
            value={input}/>
            <button onClick={rut}>Rut</button>
            <button onClick={gui}>gui</button>
            <button onClick={()=>{
                  setCheck(!check)
            }}>check</button>
           {
               check && <ul>
                   {
                       props.history.docs.map(e=>{
                        return(
                            <li>{e.get('money')}</li>
                        )
                    })
                   }
               </ul>
           }
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        money: state.money,
        history: state.history
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        guiTien: (e)=>{dispatch(guiTien(e))},
        rutTien: (e)=>{dispatch(rutTien(e))},
        checkFetch: ()=>{dispatch(checkFetch())},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Banking)
