export const MarketSearch = (props) => {
  return (
    <div>
      <form className="form-inline">
        <label htmlFor="marketSearch">Enter market symbol here: </label>
        <input
          id="marketSearch"
          onChange={props.change}
          placeholder={props.market}
        ></input>
        <button className="btn btn-primary btn-sm" onClick={props.search}>
          Search
        </button>
      </form>
    </div>
  );
};
