import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from './firebase';


class App extends Component {

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  constructor(){
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }


  render() {
    return (
      <div className='app'>
        <header>
          <div className='wrapper'>
            <h1>Barbacoa bebidas</h1>
          </div>
        </header>
        <div className='container'>
          <section className='add-item'>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="username" placeholder="Nombre?" onChange={this.handleChange} value = {this.state.username} />
              <input type="text" name="currentItem" placeholder="What?" onChange={this.handleChange} value ={this.state.currentItem} />
              <button>action BTn</button>
            </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
                {
                  this.state.items.map((item) => {
                    return (
                      <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>por cortesia de: {item.user}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}


export default App;
