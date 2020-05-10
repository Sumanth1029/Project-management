import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import firebase from "../../config/fbconfig";

class CreateMedia extends Component {
  state = {
    title: "",
    content: "",
    // image: null,
  };
  handleFile = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);

      // this.setState({ image: e.target.files[0] });
    }
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };

  handleUpload = () => {
    console.log("hi");
    var file=this.state.image
    var storageRef=firebase.storage().ref()
    storageRef.child('images/imag1').put(file)
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="" onSubmit={this.handleSubmit}>
          <h5 className="white-text text-darken-3">Create a new post</h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Post Title</label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea eh"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content">Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Post</button>
          </div>

          <div>
            <input type="file" onChange={this.handleFile} />
            <button onClick={this.handleUpload}>Upload</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMedia);
