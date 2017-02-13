import Inferno from 'inferno';
import facebook from './facebook.ico';
import './Login.css'

const Login = () => {
  return (
    <div className="login">
      <img className="login-ico" src={facebook} alt="facebook login icon" />
    </div>
  );
};

export default Login
