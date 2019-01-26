import React, { Component } from 'react';
import './App.css';

//Stateless function Component
const TodoItem = ({text}) => ( <li>{text}</li> );

class App extends Component {
  //constructor
  constructor(props){
    super(props);
    this.state = {
      todos : [],
      newTodo: ''
    };
    //bind with this object
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  //function for handling submit: preventing default values & add item & clear inbox
  handleSubmit(e){
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }
  
  //render
  render() {
    const {newTodo} = this.state;
    const todos = this.state.todos.map((t,i) => (
      <TodoItem key={i} text={t} />
      ));
    //return
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            name="newTodo"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e) => this.setState({[e.target.name]: e.target.value })}
          />
          <button
            type="submit"
            className="save-button"
          >
            SAVE
          </button>
        </form>
        <div className="todo-content">
          <ol>
            {todos}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
