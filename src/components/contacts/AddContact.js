import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
// import uuid from "uuid";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required!" } });
      return;
    }
    else if (email === "") {
      this.setState({ errors: { email: "Email is required!" } });
      return;
    }
    else if (phone === "") {
      this.setState({ errors: { phone: "Phone is required!" } });
      return;
    }

    //es6 stntax : if the key and value are the same you dont need to write it as name: name etc
    const newContact = {
      // id: uuid(),
      name,
      email,
      phone
    };

    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/users/`,
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    //clear state after adding
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    //redirect after adding
    this.props.history.push("../");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3 ">
              <div className="card-header ">
                <h3 className="card-title">Add Contact</h3>
                <h6 className="card-subtitle text-muted">
                  Enter contact details...
                </h6>
              </div>

              <div className="card-body">
                <form action="" onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="enter email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="enter phone number"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Add Contact "
                    className="btn btn-block btn-primary"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
