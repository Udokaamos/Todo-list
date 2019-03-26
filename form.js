import React, {Component} from 'react'
import 'bootswatch/dist/flatly/bootstrap.min.css';

class TodoForm extends Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
      this.refs.itemName.focus();
    }
    onSubmit(event) {
      event.preventDefault();
      var newItemValue = this.refs.itemName.value;
      
      if(newItemValue) {
        this.props.addItem({newItemValue});
        this.refs.form.reset();
      }
    }
    render () {
      return (
        <form ref="form" onSubmit={this.onSubmit} className="form-inline">
          <input type="text" ref="itemName" style={{marginRight: 20}} className="form-control" placeholder="add a new todo..."/>
          <button type="submit" className="btn btn-success">Submit</button> 
        </form>
      );   
    }
  }

  export default TodoForm