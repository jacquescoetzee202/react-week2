import SignUp from "./lifting-state/SignUp";
import Squares from "./lifting-state/Squares";
import Button from "./passing-up-data/Button";
import Form from "./passing-up-data/Form";

function App() {
  return (
    <div className="container" >
      <h1 className="p-3 mb-2 bg-info text-white" >Hello World</h1>
      <Squares color="hotpink" />
      <SignUp minimumLength={ 5 }/>
      <Button handleUpdate={ (value) => console.log(value) } />
      <Form handleSubmit={ (value) => console.log(value) } />
    </div>
  );
}

export default App;
