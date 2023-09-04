import menuContent from '../../assets/json/menuContent.json';
import { useEffect, useState } from 'react';
import Menu from '../menu/Menu';
import "./MenuController.scss";

function MenuController() {
    const [menuItemsSelected, setMenuItemsSelected] = useState<String[]>([]);

    // triggered when we click on an item
    const addMenuItem = (itemName: String) => {
        if (menuContent.content.find(elt => elt.title === itemName)?.children?.length) {
            setMenuItemsSelected([...menuItemsSelected, itemName])
        } else {
            // action when clicking on a menu item without children
        }
    }

    // triggered when we click on the back arrow
    const removeItem = () => {
        console.log('coucou')
        if (menuItemsSelected.length <= 1) {
            setMenuItemsSelected([])
        } else {
            setMenuItemsSelected(menuItemsSelected.splice(0, menuItemsSelected.length-1))

        }  
    } 

    useEffect(() => {
        console.log('menuItemsSelected', menuItemsSelected);
    } , [menuItemsSelected])
    return (
        <div className='menu-controller-container'>
            <div className='menu-controller-visible-area' style={{transform: `translateX(-${menuItemsSelected.length*500}px)`}}>
                <Menu menuContent={menuContent.content} moveToMenuItem={addMenuItem} />
                {menuItemsSelected?.map((itemName) => <Menu
                    goBack={() => removeItem()}
                    menuContent={menuContent.content.find(elt => elt.title === itemName)?.children} 
                    moveToMenuItem={addMenuItem}
                />)}
            </div>
        </div>
  );
}

export default MenuController;
