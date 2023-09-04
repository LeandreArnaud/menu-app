import './MenuItem.scss';
import { ItemType } from './MenuItemTypes';
import arrowIcon from '../../assets/icons/arrow.svg';

type MenuItemProps = {
    item: ItemType;
};

function MenuItem({item}: MenuItemProps) {
  return (
    <div className='menu-item-container'>
        <h4>{item.title}</h4>
        {item.children?.length ? <img src={arrowIcon} alt="arrow icon" className='arrow-icon' /> : null}
    </div>
  );
}

export default MenuItem;
