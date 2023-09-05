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
        <div style={!subMenuContent?.length ? {height : `${menuContent.length*60 + (goBack ? 60 : 0)}px`} : {}}>
            <div className={`menu-main-container ${subMenuContent?.length ? 'hidden' : ''} ${!goBack ? 'disable-appear-animation' : ''}`}>
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
        </div>
  );
}

export default Menu;
