import React, { useContext } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import { ApiContext } from "../../../Context/ApiContext";

function Search({ videos }) {
  const apicontext = useContext(ApiContext);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    apicontext.setresults(results);
    console.log(string, results);
  };
  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };
  const handleOnClear = () => {
    apicontext.setresults();

    console.log("Cleared");
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    apicontext.setresults();
    console.log("Focused");
  };

  const formatResult = (item) => {
    return item;
  };

  return (
    <>
      <div style={{ width: 300, padding: 3 }}>
        <ReactSearchAutocomplete
        
          items={videos}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          onClear={handleOnClear}
          formatResult={formatResult}
          fuseOptions={{ keys: ["title"], minMatchCharLength: 0 }}
          resultStringKeyName="title"
          styling={{
            height: "30px",
          }}
        />
      </div>
    </>
  );
}

export default Search;
