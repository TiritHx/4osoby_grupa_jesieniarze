import React, { Component } from 'react';
class User extends React.Component {
        state = {
            isLoading: true,
            users: [],
            error: null
        };
        getFetchUsers() {
            this.setState({
                loading: true
            }, () => {
                fetch("http://localhost:3000/users").then(res => res.json()).then(result => this.setState({
                    loading: false,
                    users: result
                })).catch(console.log);
            });
        }
        componentDidMount() {
            this.getFetchUsers();
        }
        render() {
            const {
                users,
                error
            } = this.state;
            return (
              <React.Fragment>
              <h1>All User</h1>
              {
                error ? <p>
              {
                error.message
                } </p> : null}  {
                        users.map(user => {
                            const {
                                name,
                                surname
                            } = user;
                            return (
                            <div key={name}>
                                <p>Name: {name}</p>
                                <p>Surname: {surname}</p>

                                <hr />
                            </div>
                            );
                        })
                    } </React.Fragment> );
            }
        }
export default User;