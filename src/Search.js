import React from "react";
import Transaction from "./Transaction";

function Search({handleSearch}) {
  return (
    <div className="ui large fluid icon input m-3 ">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
      
    </div>
      );
      <Transaction />
}

export default Search;