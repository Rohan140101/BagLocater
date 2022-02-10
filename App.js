import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import DrawerNavigator from "./components/DrawerNavigator";
import configureStore from "./components/redux/configureStore";
import { Provider } from "react-redux";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
        <NavigationContainer>
          <DrawerNavigator />
      </NavigationContainer>
    </Provider>
    

  )
}

export default App;