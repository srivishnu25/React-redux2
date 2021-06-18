import React, { Component } from 'react';
import {createStore} from 'redux';
import Reducers from '../reducers';

const configureStore = createStore(Reducers)

export default configureStore;