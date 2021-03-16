import React from 'react';

import { connect } from 'react-redux'
import { addPrice } from '../actions'

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.total}</h4>
    </div>
  );
};

const mapStateToProps = (state) =>{
  return{
    total: state.total,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {addPrice})(Total);
