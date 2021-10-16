import './App.css';
import { BrowserRouter as Router,Redirect , Switch, Route, Link, NavLink } from "react-router-dom";
import Home from './components/Home'
import TodoFeatera from './Feature/Todo';
import AlbumBox from './Feature/Album';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import productsApi from './api/productApi';
import CounterFeature from './Feature/Couter';
import Header from './components/Header';
import useApi from './api/userApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () =>{
      const params = {
        _limit:10,
      };
      const productList = await productsApi.getAll(params);
      console.log(productList);
    }
    fetchProducts();
  }, []);
  useEffect(() => {
    const fetchUser = async () =>{
      const params = {
        _limit:5,
      };
      const uerLish = await useApi.getAll(params);
      console.log(uerLish);
    }
    fetchUser();
  }, []);

  return (
    <div className="App">
      <div>
      <Header/>
        <p> <NavLink to="/">Home</NavLink> </p>
        <p> <NavLink to="/album">album</NavLink> </p>
        <p> <NavLink to="/todo">Todo</NavLink> </p>
        <p> <NavLink to="/couter">Couter</NavLink> </p>

        <Switch>
          <Redirect from="/home" to="/" exact />
          <Redirect from="/post-list/:postId" to="/host-list/:postId" exact />

          <Route path="/" component={Home} exact />
          <Route path="/couter" component={CounterFeature}  />
          <Route path="/album" component={AlbumBox}  />
          <Route path="/todo" component={TodoFeatera}  />

         {/* <Route component={NotFound} /> */}
         
        </Switch>

      Footer


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <User/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch> */}
      </div>

    </div>
  );
}


export default App;
