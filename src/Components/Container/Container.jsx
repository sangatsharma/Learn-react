import "./Container.css";
function Container(props) {

  
  const handleChange=(e)=>{
    console.log(e.target.value);
  }
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
        />
        <button
          onClick={props.handleSearch}
          title="Search"
          className="search-button"
        >
          🔍
        </button>
      </div>
    </div>
  );
}
export default Container;
