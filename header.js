
import React, {Component} from 'react'
import './nav.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';

class TodoHeader extends Component {
    render () {
      return (
        <div className="header__container">

        <nav className='navbar'>
            <h1 className='header__span'>Todo List App</h1>
        </nav>
        </div>
      );
    }
}

export default TodoHeader