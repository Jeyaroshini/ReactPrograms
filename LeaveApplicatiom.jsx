LeaveApplication.jsx :

import React from 'react';
class LeaveApplication extends React.Component
{
    constructor()
    {
        super()
       this.state = ({employeeName:" ", noOfDaysTakenLeave: "", numberOfDaysToGetLeave:"",fixedSalary:50000 })
    }

name = (event) =>
{
    this.setState({
        employeeName: event.target.value
    })
}

noOfDaysTakenLeave = (event) =>
{
    this.setState({
        noOfDaysTakenLeave: event.target.value
    })
}

calculate = (event) =>
{
    if(this.state.noOfDaysTakenLeave > 3)
    {
        alert("No more Leave")
    }
    else
    {
        alert("You can Proceed")
    }
    event.prevent.default()
}
numberOfDaysToGetLeave = (event) =>
{
    this.setState({
        numberOfDaysToGetLeave: event.target.value
    })
}
proceed = (event) =>
{
  if(this.state.numberOfDaysToGetLeave < 3) 
  {
    alert("You can proceed with leave")
  }
  
  event.prevent.default()
}
viewSalary = () =>
{
    alert("You Current salary is: " ,((this.state.fixedSalary) - (this.numberOfDaysToGetLeave + 1000)))
}


    render()
    {
        return(
            <div>
                <h1>Welcome to Employee Leave Application</h1>
                <form>
                    EmployeeName:<input value={this.state.employeeName} onChange={this.name}></input>
                    NoOfDaysTakenLeave:<input value={this.state.noOfDaysTakenLeave} onChange={this.noOfDaysTakenLeave}></input>
                    <button onClick={this.calculate}>Calculate</button>
                    <div>
                     Wanted Leave:   <input value={this.state.numberOfDaysToGetLeave} onChange={this.numberOfDaysToGetLeave}></input>
                    </div>
                    <div>
                        <button onClick={this.proceed}>Proceed</button>
                    </div>
                <button onClick={this.viewSalary}>View Salary</button>
                </form>
            </div>
        )
    }
}
export default LeaveApplication