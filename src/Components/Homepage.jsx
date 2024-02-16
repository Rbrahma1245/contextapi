import { Component } from "react";
import { APIData } from "./Context/APIContext";
import Pagination from "./Pagination";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      itemsPerPage: 5,
    };
  }
  static contextType = APIData;

  handlePageChange = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };

  render() {
    const { currentPage, itemsPerPage } = this.state;

    if (this.context == null) return <div>Loading...</div>;

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = this.context.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((e, i) => (
      <div key={i} style={{ textAlign: "left" }}>
        <ul>
          <li>{e.title}</li>
          <img style={{ width: 150, height: 150 }} src={e.image} />
        </ul>
      </div>
    ));

    return (
      <div>
        {renderItems}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(this.context.length / itemsPerPage)}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Homepage;
