import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin" element={<PrivateRoute children={<AdminLayout />} />}>
          <Route element={<AdminLayout />} path="/admin" />
        </Route>
        <Route element={<NotFound />} path="*" />
      </Routes>
    </div>
  );
}

export default App;
