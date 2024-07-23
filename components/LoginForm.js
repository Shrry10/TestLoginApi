import React from "react";

class LoginForm extends React.Component {
  state = {
    id: "",
    pass: "",
  };
  render() {
    return (
      <form
        className="row mt-5 mb-5"
        onSubmit={(evt) => {
          evt.preventDefault();
          this.props.handleSubmit(this.state.id, this.state.pass);
        }}
      >
        <div className="col-8">
          <label className="form-label">USER ID</label>
          <input
            className="form-control"
            style={{ borderColor: "#333" }}
            name="userId"
            onChange={(e) => {
              this.setState({ id: e.currentTarget.value });
            }}
            value={this.state.id}
          />
        </div>

        <div className="col-8">
          <label className="form-label">PASSWORD</label>
          <input
            className="form-control"
            style={{ borderColor: "#333" }}
            name="password"
            onChange={(e) => {
              this.setState({ pass: e.currentTarget.value });
            }}
            value={this.state.pass}
          />
        </div>
        <button type="submit" className="btn btn-dark col-4">
          Login
        </button>
      </form>
    );
  }
}

export default LoginForm;
