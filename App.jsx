import NavBar from './NavBar';
import Home from './Home';
import Create from './create';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            < Home/>
          </Route>
          <Route path="/Create">
            <Create/>
          </Route>
          <Route path="/Blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
