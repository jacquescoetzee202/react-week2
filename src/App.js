import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import SignUp from "./lifting-state/SignUp";
import Squares from "./lifting-state/Squares";
import Button from "./passing-up-data/Button";
import Form from "./passing-up-data/Form";
import Articles from "./news/Articles";
import Article from "./news/Article";
import Header from "./Header";
import CreateArticle from "./news/CreateArticle";

function App() {
  return (
    <Router>
      <div className="container" >
        <Switch>
          <Route exact path="/">
            <Header text="Hello World" />
            <Squares color="hotpink" />
            <SignUp minimumLength={ 5 }/>
            <Button handleUpdate={ (value) => console.log(value) } />
            <Form
              handleSubmit={ (value) => console.log(value) }
              fields={ [
                { label: "Name", name: "name", type: "text" },
                { label: "E-mail", name: "email", type: "email" },
                { label: "Telephone Number", name: "telephone", type: "tel" },
                { label: "Date of Birth", name: "dob", type: "date" },
              ]}
            />
          </Route>
          <Route path="/news">
            <Header text="Blogtastic"/>
            <Switch>
              <Route exact path="/news">
                <Articles/>
              </Route>
              <Route exact path="/news/create" >
                <CreateArticle />
              </Route>
              <Route path="/news/:id" render={({ match }) => (
                <Article id={ match.params.id }/>
              )}/>
            </Switch>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
