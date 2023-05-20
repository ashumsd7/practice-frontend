import React from "react";
class ChildProfile extends React.Component {
  constructor(props) {
   super(props);
    console.log('in child constructor')
  
  }

  componentDidMount(){
    console.log('COMPONENT DID MOUNT CHILD WALA')
  }
  render() {
    console.log('in child render')
    return <h1>I am child ClassBasedComponent</h1>;
  }
}

export default ChildProfile;
