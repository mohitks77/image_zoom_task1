import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      height: null,
      width: null,
    };

    // Binding context
    this.upload = this.upload.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);

    // Creating reference to DOM object
    this.imgRef = React.createRef();
  }
  upload(event) {
    this.setState({
      // takes an object and creates a temporary local URL
      file: URL.createObjectURL(event.target.files[0]),
    });
  }

  zoomIn() {
    // Initializing current height and width of image
    const height = this.imgRef.current.clientHeight;
    const width = this.imgRef.current.clientWidth;

    this.setState({
      height: height + 10,
      width: width + 10,
    });
  }

  zoomOut() {
    const height = this.imgRef.current.clientHeight;
    const width = this.imgRef.current.clientWidth;

    this.setState({
      height: height - 10,
      width: width - 10,
    });
  }

  render() {
    // Assign height and width
    const imgSize = { height: this.state.height, width: this.state.width };
    return (
      <div className="image_upload">
        <h1 className="heading">Upload image here</h1>
        <input
          type="file"
          accept="image/*"
          onChange={this.upload}
          className="input_field"
        />

        {/* Assigning reference to DOM element */}
        <img style={imgSize} ref={this.imgRef} src={this.state.file} />
        <div className="button_div">
          <button className="zoomIn_button" onClick={this.zoomIn}>
            +
          </button>
          <button className="zoomOut_button" onClick={this.zoomOut}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default App;
