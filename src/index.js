import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Importing FontAwsome for Social Network icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
