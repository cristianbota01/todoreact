import React from "react";
import { useRef } from "react";
import Middleware from "../middleware";

const Registration = () => {

    const ref1 = useRef()

    const sendReg = () => {
        const form_data = new FormData(ref1.current)
        Middleware.SendRequest(Object.fromEntries(form_data), "POST", "registration").then(json_response => {
            console.log(json_response)
        })
    }

    return(
        <form className="form-control" ref={ref1}>
            <h1>Registrazione</h1>
            <input name = "username" type="text" className="form-control" placeholder="Username"/>
            <input name = "password" type="password" className="form-control" placeholder="Password"/>
            <button onClick={sendReg} type="button" className="btn btn-outline-primary">Registrati</button>
        </form>
    )
}

export default Registration