import React from "react"
import classnames from "classnames"

export const OscillatorHeader = ({ classes, name, actions, state }) => {
  return (
    <div className={classes.osc_header}>
      <h1>OSC {name}</h1>
      <div className={classnames(classes.on_off, {
          "on": state.playing,
          "off": !state.playing
        })} onClick={() => {
          actions.toggleAmplifier()
        }}>
        <span className={classnames(classes.on_off_ball, {
            "on": state.playing,
            "off": !state.playing
          })}
        />
      </div>
    </div>
  )
}
