import React from "react";
class ChildProfile extends React.Component {
  constructor(props) {
   super(props);
    console.log('in child constructor')
  
  }
  render() {
    return <h1>I am child ClassBasedComponent</h1>;
  }
}

export default ChildProfile;
