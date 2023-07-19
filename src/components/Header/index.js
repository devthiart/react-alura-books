import './style.css';
import Logo from '../Logo';
import HeaderOptions from '../HeaderOptions';
import HeaderIcons from '../HeaderIcons';

function Header() {
  return (
    <header className="header">
      <Logo />
      <HeaderOptions />
      <HeaderIcons />
    </header>
  )
}

export default Header;
