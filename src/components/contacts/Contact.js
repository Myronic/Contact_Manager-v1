import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactinfo: false
  };

  displayInfo = () => {
    this.setState({ showContactinfo: !this.state.showContactinfo });

    document.getElementById("info").style.transform = this.state.showContactinfo
      ? "rotate(0deg)"
      : "rotate(180deg)";
  };

  onClickDelete = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      alert(e);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactinfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                <i
                  id="info"
                  onClick={this.displayInfo}
                  className="fas fa-chevron-circle-down"
                  style={{ cursor: "pointer", color: "#007bff" }}
                />
                &nbsp;
                {name}
                <div style={{ float: "right" }}>
                  <i
                    className="fas fa-times"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "grey"
                    }}
                    onClick={this.onClickDelete.bind(this, id, dispatch)}
                  />
                  &nbsp;&nbsp;
                  <Link to={`/contact/edit/${id}`}>
                    <i
                      className="fas fa-user-edit"
                      style={{
                        cursor: "pointer",
                        float: "left",
                        color: "#007bff"
                      }}
                    />
                  </Link>
                </div>
              </h4>
              {showContactinfo ? (
                <ul className="list-group">
                  <li className="list-group-item"> id : {id}</li>
                  <li className="list-group-item"> name : {name}</li>
                  <li className="list-group-item"> email : {email}</li>
                  <li className="list-group-item"> phone : {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
