import { Component } from "react";
import { APIData } from "./Context/APIContext";

class Homepage extends Component {
  static contextType = APIData;

  render() {
    // let val =
    console.log(this.context);

    if (this.context == null) return <div>Loading...</div>;

    return (
      <div>
        {this.context.map((e, i) => {
          return <div key={i} style={{textAlign:"left"}}>
            <ul>
                <li>{e.title}</li>
            </ul>
          </div>;
        })}
      </div>
    );
  }
}

export default Homepage;
