import styles from './SearchPreview.module.css';
import { useProductsHook } from '../../hooks/product-hook';
import { useSearchHook } from '../../hooks/search-hook';
import { IconComponent } from '../Icon/IconComponent';
import { SearchPreviewCard } from '../ProductCards/SearchPreview/SearchPreviewCard';

export const SearchPreview = () => {


    const { publicProducts } = useProductsHook();
    const { isMobileSearchState, setIsMobileSearchState, isDesktopSearchState } = useSearchHook();
    const productDataSearch = publicProducts;
    const mobileSearchResultsCount = isMobileSearchState.isSearchResults.length > 0 ? isMobileSearchState.isSearchResults.length : 0
    const desktopSearchResultsCount = isDesktopSearchState.isSearchResults.length > 0 ? isDesktopSearchState.isSearchResults.length : 0
    // console.log(isMobileSearchState)
    // if(isMobileSearchState === true){}

    if (isMobileSearchState.isMobileSearch === true) {
        return (
            isMobileSearchState.isSearchResults.length > 0 ? (
                <div className={styles.searchPreviewWithResults}>
                    <div className={styles.searchPreviewWithResultsInnerDiv}>
                        <p>{mobileSearchResultsCount} Results</p>
                        <SearchPreviewCard products={isMobileSearchState.isSearchResults && isMobileSearchState.isSearchResults} />
                    </div>
                </div>
            ) : (
                <div className={styles.searchPreview}>

                    <div className={styles.previewSectionBody}>
                        {/* <div className={styles.previewBodyTitle1}>
                <ProductText type='searchSectionTitle'>Search LG home appliances</ProductText>
                </div>
                <div className={styles.previewBodyTitle2}>
                <ProductText type='searchSectionSubtitle'>Explore by category</ProductText>
                </div> */}
                        <div className={styles.searchOptionButtonWrapper}>
                            <p>Buttons</p>
                            {/*                     
                    <Button buttonStyleType='secondary'>Cooking</Button>
                    <Button buttonStyleType='secondary'>Refrigeration</Button>
                    <Button buttonStyleType='secondary'>Air Care</Button>
                    <Button buttonStyleType='secondary'>Laundry</Button>

                    <Button buttonStyleType='secondary'>Signature</Button>
                    <Button buttonStyleType='secondary'>Studio</Button>
                    <Button buttonStyleType='secondary'>Vacuums</Button>
                    <Button buttonStyleType='secondary'>Dishwashers</Button> */}
                        </div>
                    </div>

                </div>
            )

        );
    }
    if (isDesktopSearchState.isDesktopSearch === true) {
        return (
            isDesktopSearchState.isSearchResults.length > 0 ? (
                <div className={styles.desktopSearchPreviewWithResults}>
                   
                        <div className={styles.desktopSearchPreviewWithResultsInnerDiv}>
                            <p>{desktopSearchResultsCount} Results</p>
                            <SearchPreviewCard products={isDesktopSearchState.isSearchResults && isDesktopSearchState.isSearchResults} />
                        </div>
                 
                </div>
            ) : null

        );
    }


};