import React, {Component} from 'react';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import TodoListItem from './listItem'



class TodoList extends Component {
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}

export default TodoList;
  



  

  
// class TodoApp extends React.Component {
//   constructor (props) {
//     super(props);
//     this.addItem = this.addItem.bind(this);
//     this.removeItem = this.removeItem.bind(this);
//     this.markTodoDone = this.markTodoDone.bind(this);
//     this.state = {todoItems: todoItems};
//   }
//   addItem(todoItem) {
//     todoItems.unshift({
//       index: todoItems.length+1, 
//       value: todoItem.newItemValue, 
//       done: false
//     });
//     this.setState({todoItems: todoItems});
//   }
//   removeItem (itemIndex) {
//     todoItems.splice(itemIndex, 1);
//     this.setState({todoItems: todoItems});
//   }
//   markTodoDone(itemIndex) {
//     var todo = todoItems[itemIndex];
//     todoItems.splice(itemIndex, 1);
//     todo.done = !todo.done;
//     todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
//     this.setState({todoItems: todoItems});  
//   }
//   render() {
//     return (
//       <div id="main">
//         <TodoHeader />
//         <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
//         <TodoForm addItem={this.addItem} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<TodoApp initItems={todoItems}/>, document.getElementById('app'));