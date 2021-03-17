import React from 'react';

import { connect } from 'react-redux'

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.total}</h4>
    </div>
  );
};
//give state.total prop to Total
const mapStateToProps = (state) =>{
  return{
    total: state.total,
  }
}

export default connect(mapStateToProps)(Total);
