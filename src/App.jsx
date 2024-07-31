import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Libraries
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layouts
import { Main, mainLoader } from "./layouts/Main";

// Actions
import { logoutAction } from "./actions/logout";

// Routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import { Error } from "./pages/Error";
import ExpensesPage, { expensesPageLoader } from "./pages/ExpensesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "expense",
        element: <ExpensesPage />,
        loader: expensesPageLoader 
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
