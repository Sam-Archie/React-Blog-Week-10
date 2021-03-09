import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Articles from "./news/Articles";
import Article from "./news/Article";

const App = () => (

<Router>
  <div className="container">
    
    <Route exact path="/news">
      <Articles />
    </Route>

    <Route exact path="/news/:id" render={ ({ match }) => (
        <Article id={ match.params.id }/>
    )}>
    </Route>

  </div>
</Router>

)
export default App;
