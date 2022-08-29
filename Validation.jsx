Validation.jsx

import React from 'react';
class Validation extends React.Component
{
    constructor()
    {
        super()
        this.state = {name:"",password:"",passwordOne:""}
    }
    handleInput = (event) =>
    {
        this.setState({
            name:event.target.value
        })
        event.prevent.default()
    }
    handlePassword =(event) =>
    {
        this.setState(
            {
                password:event.target.value
            }
        )
        event.prevent.default()
    }
    handlePasswordOne = (event) =>
    {
        this.setState({
            passwordOne:event.target.value
        })
        event.prevent.default()
    }
 validate = (event) =>
    {
        
        if((this.state.password) === (this.state.passwordOne))
        {
           alert("Welcome")
        }
        else
        {
             alert("Try Again")
        }
        event.prevent.default()
        
    }

    render()
    {
        return(
        
            <div>
                <form onSubmit={this.validate}>UserName:
                    <input value={this.state.name} onChange={this.handleInput}></input>
                    Password:
                    <input value={this.state.password} onChange={this.handlePassword}></input>
                    passwordOne:
                    <input value={this.state.passwordOne} onChange={this.handlePasswordOne}></input>
                    <button type="submit">Validate</button>
                </form>
            </div>
        )
    }
}

export default Validation

