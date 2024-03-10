import React from "react";

class SearchForm extends React.Component {
  render() {
    const inputStyle = {
      width: "130px",
      boxSizing: "border-box",
      border: "2px solid #ccc",
      borderRadius: "4px",
      fontSize: "16px",
      backgroundColor: "white",
      backgroundImage: `url(${process.env.PUBLIC_URL}/searchicon.png)`,
      backgroundPosition: "10px 10px",
      backgroundRepeat: "no-repeat",
      padding: "12px 20px 12px 40px",
      transition: "width 0.4s ease-in-out",
    };

    return (
      <div>
        <p>Animated search form:</p>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Search.."
            style={inputStyle}
            onFocus={(e) => (e.target.style.width = "100%")}
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;
