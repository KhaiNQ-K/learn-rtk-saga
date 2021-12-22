import { Button } from '@material-ui/core';
import { useAppDispatch } from 'app/hooks';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import { authActions } from 'features/auth/authSlice';
import LoginPage from 'features/auth/pages/LoginPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();
  const handleLogoutClick = () => {
    dispatch(authActions.logout());
  };
  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={handleLogoutClick}>
        Logout
      </Button>
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
