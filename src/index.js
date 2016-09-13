import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Controllux from 'controllux'

const app = {}

const { createStore, createController } = Controllux

const counterState = createStore({number: 0})

const counterStateActions = {
  UP: (state, num) => {
    const { number } = state.toObject()
    return state.set('number', number + 1)
  },
  DOWN: (state, num) => {
    const { number } = state.toObject()
    return state.set('number', number - 1)
  }
}

app.counter = createController(
  counterState,
  counterStateActions
)

const render = app => {
  ReactDOM.render(
    <App app={app} />,
    document.getElementById('root')
  )
}

app.counter.sub(render, app)
