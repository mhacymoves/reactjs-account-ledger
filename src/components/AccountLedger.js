import React, { Component } from 'react';


class AccountLedger extends Component {

    constructor(props) {
        super(props);

        this.handleAddEvent = this.handleAddEvent.bind(this);

        this.state = {};

        this.state.accounts = [
            {
              date: '2018-10-23',
              title: 'demo',
              amount: 1000
            }
          ];

          //for debit credit balance

          this.state.debit = 0;
          this.state.credit = 0;
          this.state.balance = 0;

    }

    handleAddEvent(evt) {

        evt.preventDefault();

        let item = {
          date: this.date.value,
          title: this.title.value,
          amount: this.amount.value
        }
        this.state.accounts.push(item);
        this.setState(this.state.accounts);

        console.log(this.state.accounts);

        if(item.amount < 0 ){

            this.state.debit = item.amount;
        }

        else {

            this.state.credit = item.amount;
        }

        //let negAmt = this.state.debit

        this.state.balance = this.state.credit - this.state.credit;

       // this.setState(this.state.balance, this.state.credit,this.state.debit);
    
      }
    
    render() {
        return (
            <div className="post-container">

                    <div className="debit">
                        <h5>Debit</h5>
                        {this.state.debit}
                    </div>

                    <div className="credit">
                        <h5>Credit</h5>
                        {this.state.credit}
                    </div>

                    <div className="balance">
                        <h5>Balance</h5>
                        {this.state.balance}
                    </div>

                    <br /><br />

                <form onSubmit={this.handleAddEvent.bind(this)}>
                    <input type="text" placeholder="Date" ref={(date) => this.date = date} />
                    <input type="text" placeholder="Title" ref={(title) => this.title = title} />
                    <input type="text" placeholder="Amount" ref={(amount) => this.amount = amount} />
                    <input type="submit" value="Create Record" />
                </form>

                <br />

                <table>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Actions</th>
                    <tbody>

                        {this.state.accounts.map(item => (
                            <tr>
                                <td>{item.date}</td>
                                <td>{item.title}</td>
                                <td>{item.amount}</td>
                                <td><button>Edit</button><button>Delete</button></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default AccountLedger;