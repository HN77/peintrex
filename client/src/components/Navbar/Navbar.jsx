import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiShoppingCart, CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../../redux/slices/userApiSlice';
import { setLogout } from '../../redux/slices/authSlice';
import { toast } from 'react-toastify';
import {
  Container,
  Logo,
  Cart,
  Badge,
  Search,
  Input,
  SearchIcon,
  Login,
  Register,
  Dropdown,
  Username,
  Profile,
  Logout,
} from './NavbarElements';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(setLogout({}));
      navigate('/connexion');

      toast.success('Vous êtes déconnecté avec succès!!');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Logo>
        <Link to='/'>Peintrex Art.</Link>
      </Logo>
      <Cart>
        <Link to='/cart'>
          <CiShoppingCart />
          {cartItems.length > 0 && (
            <Badge>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</Badge>
          )}
        </Link>
      </Cart>
      <Search>
        <SearchIcon>
          <CiSearch />
        </SearchIcon>
        <Input placeholder='Rechercher...' />
      </Search>
      {userInfo ? (
        <>
          <Username onClick={() => setIsOpen(!isOpen)}>
            {userInfo.name}
          </Username>
          {isOpen && (
            <Dropdown>
              <Profile>
                <Link to='/profile'>Profile</Link>
              </Profile>
              <Logout onClick={logoutHandler}>
                <Link to='/'>Déconnexion</Link>
              </Logout>
            </Dropdown>
          )}
        </>
      ) : (
        <>
          <Login>
            <Link to='connexion'>Connexion</Link>
          </Login>
          <Register>
            <Link to='inscription'>Inscription</Link>
          </Register>
        </>
      )}
    </Container>
  );
};

export default Navbar;
