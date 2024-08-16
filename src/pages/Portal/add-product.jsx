

import { PortalProductForm } from '../../components/PortalComponent/PortalFormComponent/PortalProductForm';

import { PortalPageWrapper, PortalPageHeader, PortalPageBody } from '../../components/PortalComponent/PortalPageComponent/PortalPageComponents';
const AddProductPage = () => {
    return (
        <PortalPageWrapper>
            <PortalPageHeader pageTitle='Product Form' pageDescription='Create and add products to the product guide' />
            <PortalProductForm />
        </PortalPageWrapper>
    );
}


export default AddProductPage;