import React from 'react'
import {useState} from 'react'
import './App.css'
import { connect } from 'react-redux';
import { guiTien,rutTien } from './Redux/Actions.ts';
function Banking(props) {

    const [input,setInput] = useState(0)
    const rut = ()=>{
        props.rutTien(Number(input))
    }
    const gui = ()=>{
        props.guiTien(Number(input))
    }
    return (
        <div id="Bank">
            <h1>React Redux</h1>
            <h2>Money:{props.money}$</h2>
            <input onChange={e=>{setInput(e.target.value)}}
            value={input}/>
            <button onClick={rut}>Rut</button>
            <button onClick={gui}>gui</button>

        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        money: state.money
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        guiTien: (e)=>{dispatch(guiTien(e))},
        rutTien: (e)=>{dispatch(rutTien(e))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Banking)
