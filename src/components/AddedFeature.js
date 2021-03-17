import React from 'react';

import {connect} from 'react-redux'
import {removeFeature } from '../actions'


const AddedFeature = props => {
  console.log(props.feature)

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      {props.feature.name}
      <button className="button" onClick = {()=>{
         props.removeFeature(props.feature)
        }}
        >Remove</button>
    </li>
  );
};

const mapStateToProps = (state) => {
  return{
    additionalFeatures: state.additionalFeatures,
    features: state.car.features
  }
}

export default connect(mapStateToProps, {removeFeature })(AddedFeature);
