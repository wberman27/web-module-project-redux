import React from 'react';

import {connect} from 'react-redux'
import {removeFeature, removePrice} from '../actions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      {props.feature.name}
      <button className="button" onClick = {()=>{
          removeFeature(props.feature.name) 
          removePrice(props.feature.price)
        }}
        >Remove</button>
    </li>
  );
};


export default connect(null, {removeFeature, removePrice})(AddedFeature);
