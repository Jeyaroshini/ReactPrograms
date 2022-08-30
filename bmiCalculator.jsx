import React from 'react'
class Calculator extends React.Component
{
    constructor()
    {
        super()
        this.state={height:"",weight:"",bmi:"",bmiClass:""}
    }

    heightInput=(event) =>
    {
        this.setState({
           height:event.target.value 
        })
    }

    weightInput=(event) =>
    {
        this.setState({
            weight:event.target.value
        })
    }
    
    calculateBmi = ()=>
    {
        let bmiValue = ( this.state.weight / this.state.height) / this.state.height;
        this.setState({ bmi : bmiValue });
        let bmiClass = this.getBmi(bmiValue);
        this.setState({ bmiClass : bmiClass });
    }

     getBmi(bmi) {
            if(bmi < 18) {
                return "Underweight";
            }
            if(bmi >= 18 && bmi < 25) {
                return "Normal weight";
            }
            if(bmi >= 25 && bmi < 30) {
                return "Overweight";
            }
            if(bmi >= 30) {
                return "Obesity";
            }
        }
    
    render()
    {
        return(
            <div>
                <form>
                    Height:<input value={this.state.height} onChange={this.heightInput}></input>
                    Weight:<input value={this.state.weight} onChange={this.weightInput}></input>
                    <button onclick={this.calculateBmi}>Calculate</button>
                </form>
                <div>
                    <h2>BMI = {this.state.bmi}</h2>
                </div>
                <div>
                    {this.state.bmiClass}
                </div>
            </div>
        )
    }
}
export default Calculator