import "./App.css";
import SignInPage from "./pages/SignIn"; 
import SignUpPage from "./pages/SignUp";
import ErrorPage from "./pages/erorr";
import DashboardPage from "./pages/dashboard";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import BalancesPage from "./pages/Balances";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/balance",
      element: <BalancesPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;