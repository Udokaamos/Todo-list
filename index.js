import React, {Component} from 'react'
import TodoHeader from './components/Nav/header'
import TodoList from './components/list'
import TodoForm from './components/form'
import './style.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';


var todoItems = [];

class TodoApp extends Component {
    constructor (props) {
      super(props);
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.markTodoDone = this.markTodoDone.bind(this);
      this.state = {todoItems: todoItems};
    }

    addItem(todoItem) {
      todoItems.unshift({
        index: todoItems.length+1, 
        value: todoItem.newItemValue, 
        done: false
      });
      this.setState({todoItems: todoItems});
    }

    removeItem (itemIndex) {
      todoItems.splice(itemIndex, 1);
      this.setState({todoItems: todoItems});
    }

    markTodoDone(itemIndex) {
      var todo = todoItems[itemIndex];
      todoItems.splice(itemIndex, 1);
      todo.done = !todo.done;
      todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
      this.setState({todoItems: todoItems});  
    }

    render() {
      return (
        <div id="main">
            <TodoHeader />
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Welcome!</h5>
                                <p className="card-text">To get started, add some items to your list:</p>
                                <div className="d-inline-block">
                                    <TodoForm addItem={this.addItem} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="content__todos">
                        <ul className="list-group content__todos__ul">
                            <TodoList items={this.state.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default TodoApp;