import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';
// import axios from 'axios';


// The higher-order component receives a WrappedComponent as an argument.
// Then it returns new component with props passed to it creating a React element.
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    // hook not recommended
    // componentWillMount: last function to be called immediately before the component is removed from the DOM
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    // to prevent memory leaks, mite become dead interceptors!
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({error: null});
    }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default withErrorHandler;