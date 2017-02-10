import Inferno from 'inferno';
import bug from './bug.svg';
import './Header.css'

const Header = () => {
  return (
    <div>
      <h2 className="header-h2">Meet Ladybug</h2>
      <img className="header-img" src={bug} alt="bug" />
    </div>
  );
}

export default Header
