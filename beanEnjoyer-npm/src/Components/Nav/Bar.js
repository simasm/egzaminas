import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
 

const Bar = (props) => {



  //const { appState, setAppState } = useContext(UserContext);
  const [userState, setUser] = useState("");
  const [cartState, setCartState] = useState({ cart: [] });

  const handleInput = (e) => {
    setUser({ user: e.target.value });
    e.preventDefault();
  }

  useEffect(() => {


   // setAppState({ username: userState.user, cart: cartState.cart });

  }, [ ]);
  //login
  const login = async () => {

    let response2 = null;
    try {

     // const response = await axios.post(process.env.PUBLIC_URL + "/api/users", { username: userState.user });
      //response2 = await axios.get(process.env.PUBLIC_URL + "/api/carts/".concat(userState.user));

    }
    catch (err) {
      console.log(err);
    }
   // if (response2.data !== null)
    //  setCartState({ cart: response2.data });
    //else setCartState({ cart: [] });

  }
  
  return (

    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">

        <div className="navbar-brand">akad201.vakcina</div>



        <ul className="navbar-nav me-auto mb-lg-0">
          <li className="nav-item">
            <Link to="/"
              style={{ color: "white" }}
              className="text-decoration-none">
              <button className="btn btn-secondary m-2">
                Centrai
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/vac/"}
              style={{ color: "white" }}
              className="text-decoration-none">
              <button className="btn btn-secondary m-2">
                Vakcinos
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/loc/"
              style={{ color: "white" }}
              className="text-decoration-none">
              <button className="btn btn-secondary m-2">
                Vietos
              </button>
            </Link>
          </li>
        </ul>
  
 


      </div>

    </nav>



  );

}

export default Bar;