import React, { useEffect } from 'react';
import cityApi from 'api/cityApi';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPage';
import { Admin } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';

function App() {
  useEffect(() => {
    cityApi.getAll().then(res => console.log(res))
  })

  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />}>
        </Route>
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />}>
          </Route>
        </Route>
        
        {/* Not found */}
        <Route path="*" element={<NotFound />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
