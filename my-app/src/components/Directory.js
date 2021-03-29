import React from 'react';
import Welcome from './Welcome';
import SearchBar from './SearchBar';
import Table from './Table.js';
import API from '../utils/API.js';


function Directory() {

  function searchAPI(){
    API.search()
    .then(res => console.log(res.data.results)) // HERE IS WHERE I STOPPED --> NEED ERROR, START WORKING WITH STATE
  }

  searchAPI()
  
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
