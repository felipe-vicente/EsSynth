export const styles = theme => ({
  osc: {
    padding: 20,
    border: "2px solid #FFF",
    borderRadius: 6,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flex: 0,
    margin: "0 10px",
    "& h1": {
      margin: "0",
      display: "block",
      fontSize: "20px",
      textAlign: "center",
      lineHeight: "1",
      marginTop: "2px"
    },
    "& h2": {
      margin: "0 0 10px 0",
      fontSize: 14
    }
  },
  osc_header: {
    width: "100%",
    display: "flex",
    marginBottom: 10,
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center"
  },
  on_off: {
    color: "#FFF",
    width: 40,
    height: 20,
    position: "relative",
    transition: "all .1s linear",
    borderRadius: 20,
    "&.on": {
      backgroundColor: "#3A3A3A"
    },
    "&.off": {
      backgroundColor: "#000000"
    }
  },
  on_off_ball: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: theme.interfaceColor,
    transition: "all .1s linear",
    boxShadow: "inset 0px 0px 0px 4px rgba(0, 0, 0, 0.3)",
    "&.on": {
      right: 0
    },
    "&.off": {
      right: 20
    }
  },
  controls: {
    display: "flex",
    width: "100%"
  },
  fre: {
    // display: "block",
    // width: "60px",
    // padding: "0 20px",
    // borderColor: "#FFF",
    // borderStyle: "solid",
    // borderWidth: "0 1px 0 0",
    // margin: "20px 0",
    // textAlign: "center"
    width: "150px",
    margin: "20px 0",
    display: "block",
    padding: "0 20px",
    textAlign: "center",
    borderColor: "#FFF",
    borderStyle: "solid",
    borderWidth: "0 1px 0 0",
    boxSizing: "border-box"
  },
  slider: {
    backgroundImage: "url(/assets/img/slide_bg.png)",
    height: "200px",
    display: "block",
    margin: "0 auto",
    border: "none",
    padding: "0 7px",
    backgroundColor: "transparent",
    backgroundRepeat: "repeat-y",
    backgroundPosition: "center top",
    position: "relative",
    "& .ui-slider-handle": {
      border: 0,
      width: 42,
      left: 34,
      background: theme.interfaceColor,
      borderRadius: 8,
      height: 21,
      position: "absolute",
      boxShadow: "inset 0px 0px 0px 4px rgba(0, 0, 0, 0.3)",
    }
  },
  wav: {
    display: "block",
    width: "100px",
    padding: "0 20px",
    margin: "20px 0",
    textAlign: "center"
  },
  knob_out: {
    position: "relative",
    marginTop: "50px"
  },
  knob: {
    top: 25,
    left: 25,
    width: 50,
    height: 50,
    display: "block",
    position: "absolute",
    backgroundSize: 50,
    background: theme.interfaceColor,
    borderRadius: 30,
    boxShadow: "inset 0px 0px 0px 4px rgba(0, 0, 0, 0.3)",
    "&.sine": {
      transform: "rotate(270deg)",
    },
    "&.square": {
      transform: "rotate(0deg)",
    },
    "&.sawtooth": {
      transform: "rotate(90deg)",
    },
    "&.triangle": {
      transform: "rotate(180deg)",
    },
  },
  knob_marker: {
    top: 4,
    left: -2,
    border: "2px solid #FFFFFF",
    height: 6,
    position: "absolute",
    marginLeft: "50%",
    borderRadius: 2
  },
  type: {
    display: "block",
    cursor: "pointer",
    position: "absolute",
    width: "20px",
    height: "20px",
    backgroundImage: 'url("/assets/img/waves.png")',
    "&.sine": {
      backgroundPosition: "0 0",
      left: "0",
      top: "40px"
    },
    "&.square": {
      backgroundPosition: "-20px 0",
      left: "40px",
      top: "0"
    },
    "&.sawtooth": {
      backgroundPosition: "-40px 0",
      left: "80px",
      top: "40px"
    },
    "&.triangle": {
      backgroundPosition: "-60px 0",
      left: "40px",
      top: "80px"
    }
  },
})
