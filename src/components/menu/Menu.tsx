import './Menu.scss';
import MenuItem from '../menuItem/MenuItem';
import { ItemType } from '../menuItem/MenuItemTypes';
import { Key, useState } from 'react';

type MenuProps = {
    menuContent: ItemType[];
    goBack?: () => void;
};

// recusif component
function Menu({menuContent, goBack}: MenuProps) {
    const [subMenuContent, setSubMenuContent] = useState<ItemType[]>([]);

    const onClickHandler = (title: String) => {
        const subMenu = menuContent.find(elt => elt.title === title)?.children
        if (subMenu?.length) {
            setSubMenuContent(subMenu)
        } else {
            setSubMenuContent([])
        }
    }

    return (
        <>
            <div className='menu-main-container'>
                {goBack ?
                    <MenuItem key="arrow" isArrow onClick={goBack} />
                : null}
                {menuContent?.map(elt => 
                    <MenuItem key={elt.title as Key} item={elt} onClick={() => onClickHandler(elt.title)} />
                )}
            </div>
            {subMenuContent?.length ? 
                <Menu menuContent={subMenuContent} goBack={() => setSubMenuContent([])} /> 
            : null}
        </>
  );
}

export default Menu;
