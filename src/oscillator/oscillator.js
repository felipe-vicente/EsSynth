import React from "react"
import classnames from "classnames"
import injectSheet from "react-jss"
import * as jQuery from "jquery"
import "jquery-ui-bundle"
import "jquery-ui-touch-punch/jquery.ui.touch-punch/"
import { styles } from "./styles"
import { OscillatorHeader } from "./components/header"

export const Oscillator = injectSheet(styles)(
  class OscillatorClass extends React.PureComponent {
    constructor(props) {
      super(props)
      this.oscReference = React.createRef()

      // Set the Audio Context
      const AudioContext = window.AudioContext || window.webkitAudioContext
      const ctx = new AudioContext()
      this.oscillator = ctx.createOscillator()

      // Set Amplifier Properties
      this.amplifier = ctx.createGain()
      // Connects amp to output
      this.amplifier.connect(ctx.destination)
      // Connects oscillator to amp
      // this.oscillator.connect(this.amplifier)

      this.state = {
        frequency: 440,
        volume: 1,
        detune: 0,
        wave: "sine",
        playing: false,
        started: false
      }
    }

    toggleAmplifier() {
      const isPlaying = this.state.playing
      const hasStarted = this.state.started
      this.setState({
        playing: !isPlaying,
        started: true
      })
      isPlaying ? (
        this.oscillator.disconnect(this.amplifier)
      ) : (
        this.oscillator.connect(this.amplifier)
      )
      !hasStarted && (
        // Start oscillator only after user interaction, prevents browser to block sounds
        this.oscillator.start(0)
      )
    }

    toggleWaveform(wave) {
      this.setState({wave})
    }

    componentDidMount() {
      this.amplifier.gain.value = this.state.volume

      const theOSC = jQuery(this.oscReference.current)
      const _this = this
      theOSC.slider({
        orientation: "vertical",
        value: _this.state.frequency,
        min: 20,
        max: 4000,
        slide(_e, ui) {
          _this.setState({
            frequency: ui.value
          })
        }
      })
    }

    render() {
      const { classes } = this.props

      this.oscillator.frequency.value = this.state.frequency
      this.oscillator.detune.value = this.state.detune
      this.oscillator.type = this.state.wave

      return (
        <div className={classes.osc}>
          <OscillatorHeader
            {...this.props}
            state={this.state}
            actions={{
              toggleAmplifier: () => {
                this.toggleAmplifier()
              }
            }}
          />
          <div className={classes.controls}>
          <div className={classes.fre}>
            <h2>Frequency</h2>
            <div ref={this.oscReference} className={classes.slider} style={{
              height: 200
            }}
            />
          </div>
          <div className={classes.wav}>
            <h2>Wave</h2>
            <div className={classes.knob_out}>
              <a className={classnames(classes.type, "sine")} onClick={() => {
                this.toggleWaveform("sine")
              }}
              />
              <a className={classnames(classes.type, "square")} onClick={() => {
                this.toggleWaveform("square")
              }}
              />
              <a className={classnames(classes.type, "sawtooth")} onClick={() => {
                this.toggleWaveform("sawtooth")
              }}
              />
              <a className={classnames(classes.type, "triangle")} onClick={() => {
                this.toggleWaveform("triangle")
              }}
              />
              <div className={classnames(classes.knob, this.state.wave)}>
                <span className={classes.knob_marker} />
              </div>
            </div>
          </div>
          </div>
        </div>
      )
    }
  }
)
