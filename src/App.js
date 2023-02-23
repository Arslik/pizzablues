import React from "react";
import {Navbar} from "./Navbar/Navbar";
import {Banner} from "./Banner/Banner";
import {Menu} from "./Menu/Menu";
import {FoodDialog} from "./FoodDialog/FoodDialog";
import {GlobalStyle} from "./Styles/GlobalStyle";
import {Order} from "./Order/Order";
import {useOpenFood} from "./Hooks/useOpenFood";
import {useOrders} from "./Hooks/useOrders";
import {useTitle} from "./Hooks/useTitle";
import {useAuthentication} from "./Hooks/useAuthentication";

const database = window.firebase.database();
const refTest = database.ref('testObj').push();
refTest.set({
    hello: 'world'
})
function App() {
    const  openFood = useOpenFood()
    const orders = useOrders();
    const auth = useAuthentication();
    useTitle({...openFood,orders})

  return (
      <>
        <GlobalStyle/>
          <FoodDialog {...openFood} {...orders}/>
          <Navbar {...auth}/>
          <Order {...orders} {...openFood} {...auth}/>
          <Banner/>
          <Menu {...openFood}/>
      </>
  );
}

export default App;
