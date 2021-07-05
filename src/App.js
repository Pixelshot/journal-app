import React, { Component } from 'react';
import User from './Components/User';
import './App.css';

class App extends Component {
  // constructor() {
  //   super();

  // //   this.state = {
  // //     users: [],
  // //   };
  // // }

  // // componentDidMount() {
  // //   this.setState(
  // //     {
  // //       users: users,
  // //     },
  // //     () => {
  // //       console.log(users);
  // //     }
  // //   );
  // }

  render() {
    // const { users } = this.state;
    // console.log(users.length);
    // return (
    //   <div className="App">
    //     <h1>Hello there. This will be a journal app</h1>
    //     {users.map((user) => (
    //       <h2 key={user.id}>{user.name}</h2>
    //     ))}
    //     {/* <h3>{title}</h3> */}
    //     {/* <p>{content}</p> */}
    //   </div>
    // );
    return <User />;
  }
}

export default App;
