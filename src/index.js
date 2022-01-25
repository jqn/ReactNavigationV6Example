import React, {useState} from 'react';
import AppNavigator from './navigators/AppNavigator';
import AppContext from './context/AppContext';

const App = () => {
  const [store, setStore] = useState({
    loggedIn: false,
    permissions: {settings: false, profile: false},
  });
  const _syncStore = data => {
    setStore(data);
  };
  return (
    <AppContext.Provider
      value={{
        store: store,
        syncStore: data => {
          _syncStore(data);
        },
      }}>
      <AppNavigator />
    </AppContext.Provider>
  );
};

export default App;
