import './App.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Sidebar from './pages/Sidebar/Sidebar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TradeEntryButton from './pages/Trade Entry Form/TradeEntryButton';
import TradeFormParent from './pages/Trade Entry Form/TradeFormParent';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <TradeFormParent />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
