import React, { Component } from 'react';

import './style.css';

export default class Loader extends Component {
  render() {
    return (
      <div class="lds-grid">
       <div class="circle"></div>
       <div class="circle"></div>
       <div class="circle"></div>
       <div class="circle"></div>
       <div class="circle"></div>
       <div class="circle"></div>
       <div class="circle"></div>
       <div class="circle"></div>
       <div class="circle"></div>
      </div>
    );
  }
}