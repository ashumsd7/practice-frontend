import React from "react";
import ChildProfile from "./ChildClassBased";
class Profile extends React.Component {
  constructor(props) {
    console.log("IN CONSTRUCTOR");
    super(props);

    // create state
    this.state = {
      count: 29,
      totalMarks: 100,
    };
  }

  componentDidMount() {
    console.log(" parent : componentDidMount");
  }

  render() {
    console.log("IN RENDER");
    return (
      <>
        <h1>I am Class ClassBasedComponent</h1>
        <ChildProfile />
        <button
          onClick={() => {
            this.setState({ totalMarks: 12 });
          }}
        >
          Change mark
        </button>
        count {this.state.count}
        <br />
        totalMarks {this.state.totalMarks}
      </>
    );
  }
}

export default Profile;
