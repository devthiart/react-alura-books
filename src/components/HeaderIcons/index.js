import './style.css';
import profile from '../../imgs/perfil.svg';
import bag from '../../imgs/sacola.svg';

const icons = [
  { src: profile, alt: 'Ícone de perfil' },  
  { src: bag, alt: 'Ícone da sacola' }
];

function HeaderIcons() {
  return (
    <ul className="icons-list">
      { 
        icons.map( (icon, index) => (
          <li key={index} className="icon"><img src={icon.src} alt={icon.alt}></img></li>
        )) 
      }
    </ul>
  )
}

export default HeaderIcons;
