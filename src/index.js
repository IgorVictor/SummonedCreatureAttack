import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreaturesAttack from './CreaturesAttack';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CreaturesAttack />, document.getElementById('root'));

registerServiceWorker();
