import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

// if modal is shown, backdrop is shown
class Modal extends Component {

  // The shouldComponentUpdate method allows us to exit the complex react update life cycle to avoid calling it again and again on every re-render
  // It only updates the component if the props passed to it changes
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }   // actually not required

  // componentDidUpdate: called when a component got updated
  // This might happen if new props have been provided by a parent component or an internal state has been changed
  componentDidUpdate() {
    console.log('[Modal] DidUpdate');
  }

  render() {
    return (
      <Aux>
      <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
      <div
        className={classes.Modal}
        style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' : '0'
        }}
      >
        {this.props.children}
      </div>
    </Aux>
    )
  }
}

export default Modal;
