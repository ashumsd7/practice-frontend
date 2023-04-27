
console.log(ReactDOM);

      const reactElement = React.createElement("div", {
        style: {
          background: "red",
        },
      }, [React.createElement('p', {},' I am Ashu'),React.createElement('p', {},' I am Ashu'),React.createElement('p', {},' I am Ashu')]);
      console.log("reactElement", reactElement);
  
      const root2 = ReactDOM.createRoot(document.getElementById("root"));
      root2.render(reactElement);