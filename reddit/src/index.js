import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import postReducer from './Slices/postSlice.js';
import commentReducer from './Slices/commentSlice.js';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store=
  {
    configureStore({
      reducer: {
          post: postReducer,
          comment: commentReducer,
      },
    })
  }>
    <App />
  </Provider>
);


