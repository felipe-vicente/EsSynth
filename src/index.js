import React from "react"
import ReactDOM from "react-dom"

const App = props => {
	return <div style={{
		color: props.color
	}}>teste</div>
}

ReactDOM.render(<App color="red" />, document.getElementById("root"))
