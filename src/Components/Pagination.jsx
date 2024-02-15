/* eslint-disable react/prop-types */
import { Component } from "react";

class Pagination extends Component {
    render() {
      const { currentPage, totalPages, onPageChange } = this.props;
      const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
  
      return (
        <div style={{marginTop:50}}>
          {pageNumbers.map((number) => (
            <span
              key={number}
              onClick={() => onPageChange(number)}
              style={{
                cursor: "pointer",
                marginRight: "5px",
                textDecoration: currentPage === number ? "underline" : "none",
              }}
            >
              {number}
            </span>
          ))}
        </div>
      );
    }
  }
  export default Pagination