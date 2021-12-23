import React, { useState } from "react";
import './App.css';
 import Bar from "./Components/Nav/Bar";
 import AdminView from "./Components/Admin/AdminView";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import CenterContainer from "./Components/Center/CenterContainer";
 import Footer from "./Components/Footer";
 import { useEffect } from "react";
import LocationView from "./Components/Location/LocationView";
import VacView from "./Components/Vac/VacView";

export const UserContext = React.createContext({});



const App = () => {

    useEffect( () => {

        document.title="Vakcinacijos sistema";

    },[]);

    const [appState, setAppState] = useState();


    return (  
        <div className="container">
            <UserContext.Provider value={{ appState: appState, setAppState }}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>

                    <Bar />

                    <Switch>
                        <Route exact path="/">
                            <CenterContainer />
                        </Route>
                        <Route path="/vac">
                             <VacView />
                        </Route>
                        <Route path="/center/:id">
                              <CenterContainer />
                        </Route>
                        <Route path="/center">
                            <AdminView />
                        </Route>
                        <Route path="/loc">
                            <LocationView />
                        </Route>
                        <Route path="/:id">
                            <CenterContainer />
                        </Route>

                    </Switch>

                    <Footer />


                </BrowserRouter>
            </UserContext.Provider >
        </div>

    );

}
export default App;


