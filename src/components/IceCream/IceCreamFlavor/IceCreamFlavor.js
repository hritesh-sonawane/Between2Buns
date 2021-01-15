import React, { Component } from 'react';
import classes from './IceCreamFlavor.css';
import PropTypes from 'prop-types';

class IceCreamFlavor extends Component {
  render() {
    let flavor = null;

    switch (this.props.type) {
      case ('cup'):
        flavor = <div className={classes.Cup}></div>;
        break;

      case ('chocochip'):
        flavor = (
          <div className={classes.Chocochip}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;

      case ('grape'):
        flavor = <div className={classes.Grape}></div>;
        break;

      case ('unicorn'):
        flavor = <div className={classes.Unicorn}></div>;
        break;

      case ('blackcurrent'):
        flavor = <div className={classes.BlackCurrent}></div>;
        break;
      
      case ('strawberry'):
        flavor = <div className={classes.Strawberry}></div>;
        break;

      default:
        flavor = null;
    }

    return flavor;
  }
}

IceCreamFlavor.propTypes = {
  type: PropTypes.string.isRequired
}

export default IceCreamFlavor;
