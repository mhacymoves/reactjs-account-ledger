import React, { Component } from 'react';

class ReactSurveyForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
          fullname: "",
          emailaddress: "",
          password: "",
          editor: "",
          message: "",
          terms: false,
          test: ""
        };
    }

    handleChange = (event) => {

        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        console.log(name, value);
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="post-container">
                <div className="field">
                  <label className="label">Date</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Amount</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      name="amount"
                      value={this.state.amount}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      type="submit"
                      value="Submit"
                      className="button is-primary"
                    />
                  </div>
                </div>

                <div>
                    <pre>
                        <code>
                        <p>Full Name: {this.state.fullname}</p>
                        <p>Email Address: {this.state.emailaddress}</p>
                        <p>Password: {this.state.password}</p>
                        <p>Choice in Editor: {this.state.editor}</p>
                        <p>Why React: {this.state.message}</p>
                        <p>Terms and Condition: {this.state.terms === true ? 'Agree' : 'Disagree'}</p>
                        <p>Do you test?: {this.state.test}</p>
                        </code>
                    </pre>
                </div>
            </div>
        );
    }
}

export default ReactSurveyForm;