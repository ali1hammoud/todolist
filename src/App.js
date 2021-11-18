import React from "react";
import Form from "./components/Form";
import List from "./components/List";
const appTitle = "To-Do app";
function App() {
  return (
    <div className="ui container center aligned">
      <h1 style = {{marginTop: '1em', marginBottom: '2em'}}>{appTitle}</h1>
      <Form />
      <br/><br/>
      <List />
    </div>
  );
}

export default App;
