import React from 'react';
import ReactDOM from 'react-dom';
import { baseProvided } from '../../testUtils';
import SearchBar from './SearchBar';

test('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(baseProvided(<SearchBar />), div);
});
