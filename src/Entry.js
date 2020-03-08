import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from './App';

function Entry() {
  return (
    <div className="compro container-fluid" id="compro">
        <App />
    </div>
  );
}

export default Entry;