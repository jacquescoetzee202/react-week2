import SignUp from "./lifting-state/SignUp";
import Squares from "./lifting-state/Squares";
import Button from "./passing-up-data/Button";
import FormCopy from "./passing-up-data/FormCopy";

function App() {
  return (
    <div className="container" >
      <h1 className="p-3 mb-2 bg-info text-white" >Hello World</h1>
      <Squares color="hotpink" />
      <SignUp minimumLength={ 5 }/>
      <Button handleUpdate={ (value) => console.log(value) } />
      <FormCopy
        handleSubmit={ (value) => console.log(value) }
        fields={ [
          { label: "Name", name: "name", type: "text" },
          { label: "E-mail", name: "email", type: "email" },
          { label: "Telephone Number", name: "telephone", type: "tel" },
          { label: "Date of Birth", name: "dob", type: "date" },
        ]}
      />
    </div>
  );
}

export default App;
