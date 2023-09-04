import './Menu.scss';
import menuContent from '../../assets/json/menuContent.json';
import MenuItem from '../menuItem/MenuItem';
import { ItemType } from '../menuItem/MenuItemTypes';

function Menu() {
  return (
    <div className='menu-main-container'>
        {menuContent?.content?.map(elt => 
            <MenuItem key={elt.title} item={elt as ItemType} />
        )}
    </div>
  );
}

export default Menu;
