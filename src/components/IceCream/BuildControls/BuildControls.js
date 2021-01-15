import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Grape', type: 'grape'},
  { label: 'Unicorn', type: 'unicorn'},
  { label: 'B-Current', type: 'blackcurrent'},
  { label: 'Strawberry', type: 'strawberry'}
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.flavorAdded(ctrl.type)}
        removed={() => props.flavorRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
    >Order Now</button>
  </div>
);

export default buildControls;
