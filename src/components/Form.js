import React from "react";

const Form = ({ handleSubmit }) => {
    return (
        <div className="form-container">
            <p>Ingresa tus datos para finalizar tu compra:</p>
            <form action="" onSubmit={handleSubmit} className="form">
                <div className="datos">
                    <div className="dato">
                        <label>Nombre:</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="dato">
                        <label >Mail:</label>
                        <input type='email' name="email" ></input>
                    </div>
                </div>
                <input type="submit" value="Finalizar compra" className="button" />
            </form>
        </div>

    )
}

export default Form;