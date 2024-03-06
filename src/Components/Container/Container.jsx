import "./Container.css";
function Container(props) {
  return (
    <div id="Container">
      <h1>Tasty Receipe Finder</h1>
      <h2>Search for your favourite receipe</h2>
      <div class="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for Receipe"
        />
        <button
          onClick={props.handleClick}
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
