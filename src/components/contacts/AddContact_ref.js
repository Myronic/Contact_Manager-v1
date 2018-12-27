import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: "Myron Cavalho",
    email: "myron@gmail.com",
    phone: "346362624345"
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3 ">
        <div className="card-header ">
          <h3 className="card-title">Add Contact</h3>
          <h6 className="card-subtitle text-muted">Enter contact details...</h6>
        </div>

        <div className="card-body">
          <form action="" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                placeholder="Enter name..."
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                placeholder="Enter email..."
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="phone"
                placeholder="Enter phone..."
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input
              type="submit"
              value="Add Contact "
              className="btn btn-block btn-info"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
