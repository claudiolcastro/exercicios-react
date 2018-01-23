import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family'
import Member from './member';

ReactDOM.render(
  <Family lastName="Castro">
    <Member name="Claudio" />
    <Member name="Bernardo" />
    <Member name="Adriano" /> 
  </Family>,
  document.getElementById('app')
);
