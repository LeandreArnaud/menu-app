import menuContent from '../../assets/json/menuContent.json';
import Menu from '../menu/Menu';
import "./MenuContainer.scss";

function MenuContainer() {

    return (
        <div className='menu-container'>
            <div className='menu-container-visible-area' >
                <Menu menuContent={menuContent.content} />
            </div>
        </div>
  );
}

export default MenuContainer;
