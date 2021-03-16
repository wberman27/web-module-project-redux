import React from 'react';

import { connect } from 'react-redux'
import {addFeature, addPrice} from '../actions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick = {()=>{
          addFeature(props.feature.name)
          addPrice(props.feature.price)
          }}
          >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect(null, {addFeature, addPrice})(AdditionalFeature);
