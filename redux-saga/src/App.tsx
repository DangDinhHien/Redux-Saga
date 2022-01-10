import React, { useEffect } from 'react';
import cityApi from 'api/cityApi';
import { Route, Switch } from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPage';
import { Admin } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';

function App() {
  useEffect(() => {
    cityApi.getAll().then(res => console.log(res))
  })

  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        
        {/* Not found */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
