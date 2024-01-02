import {React} from 'react';
import {Link} from 'react-router-dom'
import './estiloHeader.css'
import miLogo from '../../imagenes/iconos/mi-logo-blanco.png'

const Header = _ =>{
    return (
        <header className='header'>

            

            <nav className='nadvar'>
                <div className="contenedorLogo">
                    <img src={miLogo} alt="" />
                </div>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="listaTareas">Lista de tareas</Link> </li>
                    <li> <Link to="">Otros</Link></li>
                    <li> <Link to="">Otros</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header