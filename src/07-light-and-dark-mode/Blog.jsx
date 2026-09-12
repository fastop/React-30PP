import React, {useContext} from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { ThemeContext } from './context/theme-context';


export default function Blog() {

  const {theme, changeTheme} = useContext(ThemeContext);

  return (
    <div className="container p-1">

      {/* Boton */}
      <span style={{position:"absolute", top:10, right:10}}>
        <Button text={`${theme === 'light' ? 'Dark' : 'Light'}`} onClick={changeTheme} 
                btnClass={`${theme === 'light' ? 'btn-dark' : 'btn-light'}`}/>
      </span>

      <Title text={`My Blog with Theme ${theme}`}/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique laborum, nostrum fugit, unde harum nihil provident necessitatibus ipsam ea quaerat iure, ratione enim odio voluptate! Quibusdam ipsa itaque ut.
      </p>

    </div>
  );
}
