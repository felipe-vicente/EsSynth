import React from "react"
import { Oscillator } from "../oscillator/oscillator"
import injectSheet from "react-jss"

const styles = () => ({
	main: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center"
	}
})

export const Main = injectSheet(styles)(
	({ classes }) => (
		<main className={classes.main}>
			<Oscillator name="A" />
			<Oscillator name="B" />
		</main>
	)

)
