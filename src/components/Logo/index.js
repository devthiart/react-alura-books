import './style.css';
import logo from '../../imgs/logo.svg';

function Logo () {
  return (
    <div className="logo">
      <img 
        src={logo} 
        alt="Alura Books Logo" 
        className="logo-img"
      ></img>
      <p><strong>Alura</strong>Books</p>
    </div>
  );
}

export default Logo;
