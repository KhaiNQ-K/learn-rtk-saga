import React from 'react';
import { Navigate, Outlet, Route, RouteProps } from 'react-router-dom';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  //Check if user isLogged in
  //If yes, show route
  //Otherwise, redirect Login page
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoggedIn) return <Navigate to="/login" />;
  return children;
}
