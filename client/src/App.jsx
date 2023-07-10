import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/GlobalStyles';
import {
  Cart,
  Home,
  Payment,
  PlaceOrder,
  Product,
  Profile,
  Shipping,
  Signin,
  Signup,
} from './pages';
import { Footer, Navbar } from './components';

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'connexion',
          element: <Signin />,
        },
        {
          path: 'inscription',
          element: <Signup />,
        },
        {
          path: 'produit/:id',
          element: <Product />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'expedition',
          element: <Shipping />,
        },
        {
          path: 'profile',
          element: <Profile />,
        },
        {
          path: 'paiement',
          element: <Payment />,
        },
        {
          path: 'commande',
          element: <PlaceOrder />,
        },
      ],
    },
  ]);
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
