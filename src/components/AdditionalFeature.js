import React from 'react';
import { addFeature } from '../actions/index'
import { connect } from 'react-redux'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => {
        props.dispatch(addFeature(props.feature))
      }} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state, props) => {
  console.log(state)
  console.log(props.feature)
  return {
    ...state,
    feature: props.feature 
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
