import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRegisterMutation } from '../../redux/slices/userApiSlice';
import { setCredentials } from '../../redux/slices/authSlice';
import {
  Container,
  Form,
  Title,
  FormControl,
  Label,
  Input,
  Button,
  Login,
} from './SignupElements';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const redirect = searchParams.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast('Votre mot de pass nest pas identique!');
      return;
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
        toast.success('Vous êtes inscri avec succès!');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Title>Inscription</Title>
        <FormControl>
          <Label>Nom</Label>
          <Input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Nom'
          />
        </FormControl>
        <FormControl>
          <Label>Email</Label>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
        </FormControl>
        <FormControl>
          <Label>Password</Label>
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
        </FormControl>
        <FormControl>
          <Label>Confirm Password</Label>
          <Input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
          />
        </FormControl>
        <Button type='submit' disabled={isLoading}>
          Inscription
        </Button>
        <Login>
          Already have an account?
          <Link
            to={redirect ? `/connexion?redirect=${redirect}` : '/connexion'}
          >
            Connexion
          </Link>
        </Login>
      </Form>
    </Container>
  );
};

export default Signup;
