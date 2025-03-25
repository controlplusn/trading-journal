import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import TradesPage from './pages/Trades Page/Trade';
import NotFoundPage from './pages/Error Page/NotFoundPage';
import CalendarPage from './pages/Calendar/CalendarPage';
import Sidebar from './pages/Sidebar/Sidebar';

function App() {

  const router = createBrowserRouter([
    {
      path: '/signup',
      element: <Signup />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/login',
      element: <Login/>,
      errorElement: <NotFoundPage />
    },
    {
      path: '/',
      element: <Sidebar />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/tradecollection',
      element: <TradesPage />,
      errorElement: <NotFoundPage />
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
