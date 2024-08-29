import { UserDirectoryTable } from "../../components/PortalComponent/PortalTableComponent/UserDirectoryTable";
import { PortalPageBody, PortalPageHeader, PortalPageWrapper } from "../../components/PortalComponent/PortalPageComponent/PortalPageComponents";
import { AdminUserDirectoryTable } from "../../components/PortalComponent/PortalTableComponent/AdminUserDirectoryTable";
const AdminDirectoryPage = () => {
    return (
        <PortalPageWrapper
        pageTitle='Admin Users Table' pageDescription='See all administrators' 
        >
          

            <PortalPageBody>
                {/* send flag prop to directory table - admin vs member */}
                <AdminUserDirectoryTable/>
              
            </PortalPageBody>
        </PortalPageWrapper>
    );
}

export default AdminDirectoryPage;