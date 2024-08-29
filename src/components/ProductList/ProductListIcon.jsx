import { IconComponent } from "../Icon/IconComponent";
import { useRoutingHook } from "../../hooks/routing-hook";
import { useBuilderHook } from "../../hooks/builder-hook";
import styles from './ProductListIcon.module.css';

export const ProductListIcon = () => {
    const { listCount } = useBuilderHook();
    const {  setIsRoutingState } = useRoutingHook();

    const handleIconClick = () => setIsRoutingState(
        prevState => ({ ...prevState, 
            isProductListDropdownOpen: true,
            isMobileNavOpen:false, 
        
        }))
 
    return (
        <div  onClick={handleIconClick} className={styles.iconContainer}>
            {listCount !== 0 && (
                <span className={styles.listCountBubble}>{listCount}</span>
            )}
            <IconComponent iconType='productList' />
            
        </div>
    )
}