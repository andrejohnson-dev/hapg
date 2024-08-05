import styles from './SearchPreviewCard.module.css';

import { useBuilderHook } from '../../../hooks/builder-hook';


import { Button } from '../../Button/Button';

import { GenerateProductURL } from '../../../utils/link-helper';


import { AddToListButton, RemoveFromListButton } from '../../Button/ProductButtons'
import { useSearchHook } from '../../../hooks/search-hook';

import { NavLink } from 'react-router-dom';
import { PageText } from '../../Text/Text';




export const SearchPreviewCard = ({ products }) => {
    const publicUrl = process.env.PUBLIC_URL;

    const { productsInList } = useBuilderHook();
    const { isMobileSearchState, setIsMobileSearchState, isDesktopSearchState } = useSearchHook();

    if (isMobileSearchState.isMobileSearch === true) {
        return (
            products && products.map((product, idx) => {
                const { title, subtitle, image, category } = product;

                const isProductInList = productsInList.some(p => p.title === product.title);
                const productURL = GenerateProductURL(category, title);
                return (
                    <div key={idx} className={styles.searchPreviewCardContainerM}>
                        <div className={styles.searchPreviewCardWrapperM}>
                            <div className={styles.searchPreviewCardImageWrapperM}>
                                <img 
                                className={styles.searchPreviewCardImageM} 
                                src={`${publicUrl}/assets/image/products/${image}`}
                                alt={`product ${title}`} 
                                
                                />
                            </div>

                            <div className={styles.searchPreviewCardTextWrapperM}>
                                <div >
                                    <NavLink to={productURL}>

                                        <div className={styles.searchPreviewCardTextM}>
                                            <div className={styles.searchPreviewTitle}>
                                                <PageText type='productSearchTitle' >{title}</PageText>
                                            </div>
                                            <div className={styles.searchPreviewSubtitle}>
                                                <PageText color='lightGrayText' type='productSearchSubtitle' >
                                                    <span className={styles.searchPreviewClampedSubtitleM}>{subtitle}</span>
                                                </PageText>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>

                            </div>
                            <div className={styles.searchPreviewButtonWrapperM}>
                                <div>
                                    {isProductInList ? (
                                        <RemoveFromListButton product={products} />
                                    ) : (
                                        <AddToListButton product={products} />
                                    )}
                                </div>
                                <NavLink to={productURL}>
                                    {/* <NavigationLink href={productURL}> */}
                                    <Button buttonStyleType="secondary" buttonTextType="action">
                                        See details
                                    </Button>
                                    {/* </NavigationLink> */}
                                </NavLink>
                            </div>

                        </div>
                    </div>
                )

            })

        );
    }
    if (isDesktopSearchState.isDesktopSearch === true) { }

    return (
        products && products.map((product, idx) => {
            const { title, subtitle, image, category } = product;

            const isProductInList = productsInList.some(p => p.title === product.title);
            const productURL = GenerateProductURL(category, title);
            return (
                <div className={styles.searchResultsPreviewCardContainer}>
                    <div className={styles.searchResultsPreviewCardImageWrapper}>
                        <img className={styles.searchResultsPreviewCardImage} src={`hapg/assets/image/products/${image}`} alt={`product ${title}`} />
                    </div>
                    <div className={styles.searchResultsPreviewCardTextWrapper}>
                        <div >
                            <NavLink to={productURL}></NavLink>
                            {/* <NavigationLink href={productURL}> */}
                            <div className={styles.searchResultsPreviewCardText}>
                                {/* <ProductText type='navSearchProductTitle' >{CapitalizeFirstLetter(category)}</ProductText> */}
                                <PageText color='lightGrayText' type='titleSearch' >
                                    {title}
                                </PageText>
                                {/* <ProductText type='navSearchProductTitle'></ProductText> */}
                                {/* <NakedIcon iconType='rightChevron' /> */}
                            </div>
                            {/* </NavigationLink> */}
                        </div>
                        {/* <ProductText type='navSearchProductSubtitle' >
                        <span className={styles.clampedSubtitle}>{subtitle}</span>
                    </ProductText> */}
                        <PageText color='lightGrayText' type='titleSearch' >
                            <span className={styles.searchPreviewClampedSubtitleM}>{subtitle}</span>
                        </PageText>
                    </div>

                    {isProductInList ? (<RemoveFromListButton product={product} />) : (<AddToListButton product={product} />)}

                </div>
            );

        })

    );
};
