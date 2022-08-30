import React from 'react';
class Calculator extends React.Component
{
    constructor()
    {
        super()
        this.state = {num1:"",num2:"",result:"" }
    }

    numberOne = (event) =>
    {
        this.setState = ({
            num1:event.target.value
        })
        event.prevent.default()
    }

    numberTwo = (event) =>
    {
        this.setState = ({
            num2:event.target.value
        })
    }

    addition = () =>
    {
        const Addition = this.state.num1 + this.state.num2
        alert("The Addition of Two Numbers are: ", Addition)
    }

    subtraction = () =>
    {
        const Subtraction = this.state.num2 - this.state.num2
        alert("The Subtraction of Two Numbers are: ",Subtraction)
    }

    multiplication = () =>
    {
        const Multiplication = this.state.num1 * this.state.num2
        alert("The Multiplication of Two Numbers are: ",Multiplication)
    }

    divsion = () =>
    {
        const Division = this.state.num1 / this.state.num2
        alert("The Division of Two Numbers are: ",Division)
    }
    render()
    {
        return(
            <div>
                <form>
                    Enter Number: <input value={this.state.num1} onChange={this.numberOne}></input>
                    Enter Number: <input value={this.state.num2} onChange={this.numberTwo}></input>
                    <div>
                    <button onclick={this.addition}>Addition</button>
                    <button onClick={this.subtraction}>Subtraction</button>
                    <button onClick={this.multiplication}>Multiplication</button>
                    <button onClick={this.division}>Division</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Calculator


