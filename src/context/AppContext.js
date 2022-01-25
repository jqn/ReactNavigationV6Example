import React, {createContext} from 'react';

const AppContext = createContext();
/**
 * This context is for sharing the app store to the entire application.
 */
export const withStore = Component => props =>
  (
    <AppContext.Consumer>
      {store => <Component {...props} {...store} />}
    </AppContext.Consumer>
  );

export default AppContext;
