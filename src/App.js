import React from "react";
import Dealer from "./page/dealer";
import Monitor from "./page/monitor";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Winner from "./page/winner";
import Rank from "./page/rank";
const App = () => {
    return (
        <BrowserRouter>

            <Switch>
                <Route path="/dealer" component={Dealer}/>
                <Route path="/monitor" component={Monitor}/>
                <Route path="/winner" component={Winner}/>
                <Route path="/rank" component={Rank}/>
            </Switch>

        </BrowserRouter>

    )

};
export default App