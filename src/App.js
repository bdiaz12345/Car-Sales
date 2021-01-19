import React, { useReducer } from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import rootReducer, { initialState } from './reducers/index'

const App = (props) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  console.log(state)

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} dispatch={dispatch} />
      </div>
      <div className="box">
        <AdditionalFeatures dispatch={dispatch} additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
