import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "react-jss"
import { Main } from "./main/main"
import { theme } from "./theme"

const isNotSupoported = !window.AudioContext && !window.webkitAudioContext

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then(registration => {
      console.log("SW registered: ", registration)
    }).catch(registrationError => {
      console.log("SW registration failed: ", registrationError)
    })
  })
}


const NotSupported = () => (
	<div style={{
		width: "100vw",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignContent: "center"
	}}>
	<h1 style={{
		display: "flex",
		alignSelf: "center"
	}}>
		Seu navegador não tem suporte à <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/AudioContext">
			AudioContext
		</a>
	</h1>
	</div>
)

const App = () => {
	return (
		<ThemeProvider theme={theme}>
		{
			!isNotSupoported ? (
				<Main />
			) : (
				<NotSupported />
			)
		}
		</ThemeProvider>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
