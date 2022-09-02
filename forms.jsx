import React from 'react'
class Forms extends React.Component
{
    constructor()
    {
        super()
        this.state = {value:"C Language",amount:[]}
        this.handleInput=this.handleInput.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleInput = (event) =>
    {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit = (event) =>
    {
        console.log("Course You have Picked is: " +this.state.value)
        event.preventdefault()
    }
    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Pick a Course:</label>
                    <select value={this.state.value} onChange={this.handleInput}>
                    <option value="C Language">C Language</option>
                    <option value="Python">Python</option>
                    <option value="JAVA">JAVA</option>
                    <option value="JavaScript">JavaScript</option>
                    </select>
                    <button type="Submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Forms