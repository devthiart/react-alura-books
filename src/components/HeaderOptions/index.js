import './style.css';

const textOptions = ['Categorias', 'Favoritos', 'Minha Estante'];

function HeaderOptions() {
  return (
    <ul className="options-list">
      {
        textOptions.map( (text, index) => ( 
          <li key={index} className="option"><p>{text}</p></li> 
        ) )
      }
    </ul>
  )
}

export default HeaderOptions;
