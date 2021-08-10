import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';
import SignIn from './Components/SignIn/SignIn';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SignUp from './Components/SignUp/SignUp';
import NoMatch from './Components/NoMatch/NoMatch';
import Edit from './Components/Edit/Edit';
import CartDetails from './Components/CartDetails/CartDetails';

export const UserContext = createContext();
export const CartContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState([]);


  return (
    <div className="App">
         <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
         <CartContext.Provider value={[cart, setCart]}>
        <Router>
        <Switch>
          
         <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <PrivateRoute path="/addProduct">
            <AddProduct />
          </PrivateRoute>

          <Route path="/signIn">
            <SignIn />
          </Route>

          <Route path="/signUp">
            <SignUp />
          </Route>

          <PrivateRoute path="/order">
            <CartDetails />
          </PrivateRoute>

          <Route path="/editProduct/:id">
            <Edit />
          </Route>
          
          <Route path="*">
              <NoMatch />
          </Route>

        </Switch>
        </Router>
        </CartContext.Provider>
        </UserContext.Provider>
    </div>
    
  );
}

export default App;
