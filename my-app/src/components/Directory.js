import React from 'react';
import Welcome from './Welcome';
import SearchBar from './SearchBar';
import Table from './Table.js';


function Directory() {
    return (
      <div>

        <Welcome/>
        <SearchBar/>
        <Table/>
        <p> above is the welcome component </p>

      </div>
    );
  }
  
  export default Directory;
