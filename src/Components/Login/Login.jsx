import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='container'>
            <div className='container-div'>
                <div className='formsDiv'>
                    <span>Login</span>
                    <div className='form'>
                        <input className='login-input' type="text" placeholder='e-mail' />
                        <span className='form-border'></span>
                    </div>
                    <div className='form'>
                        <input className='login-input' type="text" placeholder='senha' />
                        <span className='form-border'></span>
                    </div>
                </div>
                <div className='loginDiv'>
                    <button style={{backgroundSize: "200%"}}>Login</button>
                    <a href="#">Esqueceu a senha?</a>
                </div>
            </div>
        </div>
    )
}

export default Login