import "./Container.css";
import {useState} from 'react';
export default function Container(props) {
  const [searchedText,setSearchText]=useState('');
  const [findText,setFindText]=useState('');

  
  let searchText = "";
  const handleChange = (e) => {
    searchText=e.target.value;
    setSearchText(searchText);
    setFindText("");
  };
  
  const handleSearch = (e) => {
    console.log(searchText);
    setFindText(searchedText==""?"...":`showing receipe for ${searchedText}`);
    setSearchText(searchText);
  
    //todo - call the API
  };
  
  return (
    <div id="Container">
      <h1>Tasty Receipe Finder</h1>
      <h2>Search for your favourite receipe</h2>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for Receipe"
          onChange={handleChange}
          value={searchedText}
         
        />
        <button onClick={handleSearch} title="Search" className="search-button">
          🔍
        </button> 
      </div>
      <span> {findText+" "+searchedText}</span>
     
    </div>
  );
}

