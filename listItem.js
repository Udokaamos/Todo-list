import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


class TodoListItem extends Component {
    constructor(props) {
      super(props);
      this.onClickClose = this.onClickClose.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
    }
    onClickClose() {
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    }
    onClickDone() {
      var index = parseInt(this.props.index);
      this.props.markTodoDone(index);
    }
    render () {
      var todoClass = this.props.item.done ? 
          "done" : "undone";
      return(
        <li className="list-group-item ">
          <div className={todoClass}>
            <span className="btn btn-secondary" style={{marginRight: 50}} aria-hidden="true" onClick={this.onClickDone}>
            <FontAwesomeIcon icon={faCheck} size="sm"/>
            </span>
            {this.props.item.value}
            <button type="button" style={{color: 'red'}} className="close" onClick={this.onClickClose}>&times;</button>
          </div>
        </li>     
      );
    }
  }

  export default TodoListItem