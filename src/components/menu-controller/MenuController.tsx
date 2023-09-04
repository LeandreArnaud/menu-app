import menuContent from '../../assets/json/menuContent.json';
import { Key, useEffect, useState } from 'react';
import Menu from '../menu/Menu';
import "./MenuController.scss";
import { ItemType } from '../menuItem/MenuItemTypes';

function MenuController() {
    const [menuItemsSelected, setMenuItemsSelected] = useState<String[]>([]);
    const [lastSelectedItem, setLastSelectedItem] = useState<ItemType[]>([]);

    // triggered when we click on an item
    const addMenuItem = (itemName: String) => {
        if (lastSelectedItem.find(elt => elt.title === itemName)?.children?.length) {
            setMenuItemsSelected([...menuItemsSelected, itemName])
        } else {
            // TO FILL: action when clicking on a menu item without children
        }
    }

    // triggered when we click on the back arrow
    const removeItem = () => {
        if (menuItemsSelected.length <= 1) {
            setMenuItemsSelected([])
        } else {
            setMenuItemsSelected(menuItemsSelected.splice(0, menuItemsSelected.length-1))

        }  
    } 

    // get the current menu children data
    useEffect(() => {
        let tmpItem = menuContent.content
        menuItemsSelected.forEach(itemSelected => {
            const currentItem = tmpItem.find(elt => elt.title === itemSelected)
            if (currentItem?.children?.length) {
                tmpItem = currentItem.children
            }
        })
        setLastSelectedItem(tmpItem)
    } , [menuItemsSelected])


    const getNthItemContent = (N: number) => {
        let savedItem = menuContent.content;
        menuItemsSelected.forEach((elt, i) => {
            const itemFound = savedItem.find(item => item.title === elt)?.children
            if (i <= N && itemFound?.length) {
                savedItem = itemFound
            }
        })
        return savedItem
    }

    return (
        <div className='menu-controller-container'>
            <div className='menu-controller-visible-area' style={{transform: `translateX(-${menuItemsSelected.length*500}px)`}}>
                <Menu menuContent={menuContent.content} moveToMenuItem={addMenuItem} />
                {menuItemsSelected?.map((itemName, index) => 
                    <Menu
                        key={itemName as Key}
                        goBack={() => removeItem()}
                        menuContent={getNthItemContent(index)}
                        moveToMenuItem={addMenuItem}
                    />
                )}
            </div>
        </div>
  );
}

export default MenuController;
