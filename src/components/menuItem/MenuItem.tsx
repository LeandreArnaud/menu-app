import './MenuItem.scss';
import { ItemType } from './MenuItemTypes';
import arrowIcon from '../../assets/icons/arrow.svg';

type MenuItemProps = {
    item?: ItemType;
    onClick?: () => void;
    isArrow?: boolean;
};

function MenuItem({item, onClick, isArrow=false}: MenuItemProps) {
  return (
    <div className={`menu-item-container ${isArrow? '' : 'is-not-arrow'}`} onClick={onClick}>
        {isArrow ? 
          <img src={arrowIcon} alt="arrow icon" className='arrow-icon reversed' />
        :(
          <>
            <h4>{item?.title}</h4>
            {item?.children?.length ? <img src={arrowIcon} alt="arrow icon" className='arrow-icon' /> : null}
          </>
        )}
        
    </div>
  );
}

export default MenuItem;
