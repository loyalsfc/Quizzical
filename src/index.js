import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LandingPage from './page/LandingPage';
import Instructions from './page/Instructions';
import { ContextProvider } from './Context';
import QuizPage from './page/QuizPage';
import Register from './page/Register';
import Login from './page/Login';
import LeaderBoard from './page/LeaderBoard';
import About from './page/About';
import Features from './page/Features';
import Profile from './page/Profile';

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
        path: "/instruction",
        element: <Instructions />,
    },
    {
        path:'/quiz',
        element: <QuizPage />
    },
    {
        path:'/register',
        element: <Register />
    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/leaderboard',
        element:<LeaderBoard />
    },
    {
        path:'/about-us',
        element: <About />
    },
    {
        path:'/features',
        element: <Features />
    },
    {
        path:'/profile',
        element: <Profile />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>
);
