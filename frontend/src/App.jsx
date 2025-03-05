import './App.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Sidebar from './pages/Sidebar/Sidebar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TradeEntryButton from './pages/Trade Entry Form/TradeEntryButton';
import TradeFormParent from './pages/Trade Entry Form/TradeFormParent';
import Dashboard from './pages/Dashboard/Dashboard';
import Trade from './pages/Trade/Trade';
import NotFoundPage from './pages/Error Page/NotFoundPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Trade />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/signup',
      element: <Signup />,
      errorElement: <NotFoundPage />
    },
    {/* {
      path: 'tradesPage',
      element: <Trade />
    }, */}
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
