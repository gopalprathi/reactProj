import React from 'react'

export default function Login() {

    let style = {
        width: '60%',
        margin: '0 auto',
        border: '1px solid #999',
        padding: '20px'
    }
    return (
        <form className="formSection row" style={style}>
            <div className='col-9'>
                <label>Username: &nbsp;</label>
                <input type="text" />
            </div>
            <div className='col-9'>
                <label>Password: &nbsp;</label>
                <input type="password" />
            </div>
            <div className='col-9'>
                <button className="btn-primary">Login</button>
            </div>
        </form>
    )
}
