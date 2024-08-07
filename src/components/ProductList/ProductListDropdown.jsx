import { NavLink } from "react-router-dom";
import { useBuilderHook } from "../../hooks/builder-hook";
import { useRoutingHook } from "../../hooks/routing-hook";
import Overlay from "../Overlay/Overlay";
import styles from './ProductListDropdown.module.css'
import { PageText } from "../Text/Text";
import { LGComponent } from "../Character/LGComponent";
import { Button } from "../Button/Button";
import { categoryLinks } from "../../utils/link-helper";
import { CountBubble } from "../CountBubble/CountBubble";
import { ProductListDropdownCard } from "../ProductCards/ProductLisDropdownCard/ProductListDropdownCard";
import { IconComponent } from "../Icon/IconComponent";
import Drawer from "../Drawer/Drawer";
import { GridSystem } from "../GridSystem/GridSystem";


const EmptyListScreen = () => {
    const { isRoutingState, setIsRoutingState } = useRoutingHook();

    const handleCloseListClick = () => setIsRoutingState(prevState => ({ ...prevState, isProductListDropdownOpen: false }))
    return (
        <Drawer>

            <div className={styles.a}>
                <GridSystem>
                    <div className={styles.b}>
                        <div className={styles.emptyProductListBodyMobile}>
                            <div className={styles.emptyProductListBodyContentMobile}>
                                <div onClick={handleCloseListClick} className={styles.mobileCloseIcon}>
                                    <IconComponent iconType='xClose' />
                                </div>
                                <div className={styles.mobileEmptyListHeaderText}>
                                    <PageText type="searchTitle">You forgot to add products!</PageText>
                                    <PageText type="searchSubtitle">Use search or explore appliance pages to find and add products to your list.</PageText>
                                </div>


                                <div className={styles.mobileEmptyListCharacterImage}>
                                    <LGComponent type='girlFull' />
                                </div>
                                <div className={styles.buttonsWrapper}>
                                    {categoryLinks.map(link =>
                                        // <NavigationLink href={link.href}>
                                        <NavLink>
                                            <Button buttonStyleType="primary">{link.text}</Button>
                                        </NavLink>
                                        // </NavigationLink>
                                    )};
                                </div>
                            </div>
                        </div>
                    </div>
                </GridSystem>
            </div>

        </Drawer>
    );
}

const PopulatedListScreen = () => {

    const { productsInList, listCount } = useBuilderHook();
    const { setIsRoutingState } = useRoutingHook();

    const handleProductListDropdownIconClick = () => {
        setIsRoutingState(prevState => ({ ...prevState, isProductListDropdownOpen: !prevState.isProductListDropdownOpen }))
    }

    return (
        <Drawer>
            <div className={styles.populatedListScreenContainer}>
                {/* <GridSystem> */}
                    <div className={styles.populatedListHeader}>
                        <div className={styles.populatedListBackIconWrapper}>
                            <IconComponent onClick={handleProductListDropdownIconClick} iconType='xClose' />
                        </div>

                        <PageText type="searchTitle">Product List Builder</PageText>

                        <div className={styles.productCountWrapper}>
                            <PageText type="searchSubtitle">Your Products</PageText>
                            <CountBubble itemCount={listCount} />
                        </div>
                    </div>
                    <div className={styles.populatedProductsList}>
                       
                            <div className={styles.scrollProductList}>

                                {productsInList && productsInList.map((product, idx) => (
                                    <div key={idx}>
                                        <ProductListDropdownCard product={product} />
                                    </div>
                                ))}

                            </div>
                    
                    </div>
                {/* </GridSystem> */}
            </div>
        </Drawer>

    );
};

export const ProductListDropdown = () => {
    const { productsInList } = useBuilderHook();

    if (productsInList.length !== 0) {

        // return <PopulatedListScreen />;
        return (

            <PopulatedListScreen />

        );


    }
    if (productsInList.length === 0) {
        return (


            <EmptyListScreen />

        );

        // return <EmptyListScreen />;
        // return <Overlay containerMarginTop='6rem'><EmptyListScreen /></Overlay>;
    }

}

