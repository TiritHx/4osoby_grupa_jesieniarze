import React, { Component } from 'react';
class Password extends React.Component {
        state = {
            isLoading: true,
            passwords: [],
            error: null
        };
        getFetchPasswords() {
            this.setState({
                loading: true
            }, () => {
                fetch("http://localhost:3000/passwords").then(res => res.json()).then(result => this.setState({
                    loading: false,
                    passwords: result
                })).catch(console.log);
            });
        }
        componentDidMount() {
            this.getFetchPasswords();
        }
        render() {
            const {
                passwords,
                error
            } = this.state;
            return (
              <React.Fragment>
              <h1>All Passwords</h1>
              {
                error ? <p>
              {
                error.message
                } </p> : null}  {
                        passwords.map(password => {
                            const {
                                id,
                                pass,
                                crypt
                            } = password;
                            return (
                            <div key={id}>
                                <p>Id: {id}</p>
                                <p>Pass: {pass}</p>
                                <p>Crypt: {crypt}</p>
                                <hr/>
                            </div>
                            );
                        })
                    } </React.Fragment> );
            }
        }
export default Password;