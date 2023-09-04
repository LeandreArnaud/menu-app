import './Menu.scss';
import MenuItem from '../menuItem/MenuItem';
import { ItemType } from '../menuItem/MenuItemTypes';
import { Key } from 'react';

type MenuProps = {
    menuContent: ItemType[] | undefined;
    moveToMenuItem: (itemName: String) => void;
    goBack?: () => void;
};

function Menu({menuContent, moveToMenuItem, goBack}: MenuProps) {
    return (
        <div className='menu-main-container'>
            {goBack ?
                <MenuItem key="arrow" isArrow onClick={goBack} />
            : null}
            {menuContent?.map(elt => 
                <MenuItem key={elt.title as Key} item={elt} onClick={() => moveToMenuItem(elt.title)} />
            )}
        </div>
  );
}

export default Menu;
