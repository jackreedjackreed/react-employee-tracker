import React from 'react';
import Welcome from './Welcome';
import SearchBar from './SearchBar';
// import Table from './Table.js';
import GetEmployeeList from './GetEmployeeList.js'


function Directory() {
  
    return (
      <div>

        <Welcome/>
        <SearchBar/>
        {/* <Table/> */}
        <GetEmployeeList/>

      </div>
    );
  }
  
  export default Directory;