import React from 'react';
import { removeFeature } from '../actions/index'
import { connect } from 'react-redux'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => {
        props.dispatch(removeFeature(props.feature))
      }} className="button">X</button>
      {props.feature.name}
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

export default connect(mapStateToProps, { removeFeature })(AddedFeature)
