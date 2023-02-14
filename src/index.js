import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Register from './screens/register';
import Login from './screens/login';
import Home from './screens/home'
import Feed from './screens/feed/feed';
import SearchCreators from './screens/feed/searchCreators';
import Messages from './screens/feed/messages';
import Profile from './screens/profile';
import Settings from './screens/feed/settings';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
const handleScroll = event => {
  console.log("asd")
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "/searchCreators",
    element: <SearchCreators />
  },
  {
    path: "/messages",
    element: <Messages />
  },
  {
    path: "/:creatorName",
    element: <Profile />
  },
  {
    path: "/settings",
    element: <Settings />
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode onScroll={handleScroll}>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
