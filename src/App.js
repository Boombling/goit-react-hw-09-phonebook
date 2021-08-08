import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'))
const RegisterView = lazy(() => import('./views/RegisterView'))
const LoginView = lazy(() => import('./views/LoginView'))
const ContactsView = lazy(() => import('./views/ContactsView'))

export default function App() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch])

    return (
      <>
        <AppBar />

        <Suspense fallback={<p>...Load</p>}>
        <Switch>
            <PublicRoute exact path="/" >
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/register" restricted redirectTo="/phonebook" >
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/phonebook" >
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/phonebook" redirectTo="/login" >
              <ContactsView /> 
            </PrivateRoute>
          </Switch>
          </Suspense>
      </>  
    );
  }