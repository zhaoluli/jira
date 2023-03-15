import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { loadDevTools } from "jira-dev-tool";

const root = document.getElementById('root') as HTMLElement

loadDevTools(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  )
})

