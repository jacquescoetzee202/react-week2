import SignUp from "./lifting-state/SignUp";
import Squares from "./lifting-state/Squares";

function App() {
  return (
    <div className="container" >
      <h1 className="p-3 mb-2 bg-info text-white" >Hello World</h1>
      <Squares color="hotpink" />
      <SignUp minimumLength={ 5 }/>
    </div>
  );
}

export default App;
