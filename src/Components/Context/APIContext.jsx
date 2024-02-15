/* eslint-disable react/prop-types */
import axios from "axios";
import { Component, createContext } from "react";

export let APIData = createContext();

export class APIContext extends Component {
  constructor() {
    super();
    this.state = {
      productList: null,
    };
  }

  fetchProduct = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    this.setState({ productList: data });
  };

  componentDidMount() {
    this.fetchProduct();
  }

  render() {
    return (
      <APIData.Provider value={this.state.productList}>
        {this.props.children}
      </APIData.Provider>
    );
  }
}

export default APIContext;
