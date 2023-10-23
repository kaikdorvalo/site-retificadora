import logoDefault from '../img/logos/logo-ret-padrao.svg';
import whatsappBlue from '../img/icons/whatsapp-blue.svg';
import menuIcon from '../img/icons/menu.svg';

export const NavBar = () => {
    return (
        <header className='bg-primary flex justify-between px-5 pt-6'>
            <button>
                <img src={menuIcon}></img>
            </button>
            <h3>
                <img src={logoDefault} alt='Logo da Retificadora Maringá'></img>
            </h3>
            <h2>
                <button>
                    <img src={whatsappBlue} alt="icone do WhatsApp" />
                </button>
            </h2>
        </header>
    )
}