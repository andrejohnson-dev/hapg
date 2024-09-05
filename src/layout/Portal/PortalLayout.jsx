import { Outlet } from 'react-router';
import styles from './PortalLayout.module.css';
import Modal from '../../components/Modal/Modal';
import { useNotificationHook } from '../../hooks/notification-hook';
import { PortalPageTopNav } from '../../components/PortalComponent/PortalPageComponent/PortalPageNav/PortalPageTopNav';
import { PortalPageSideNav } from '../../components/PortalComponent/PortalPageComponent/PortalSideNav/PortalPageSideNav';




export default function PortalLayout() {

    const { isAlert, setIsAlert, isModal, setIsModal } = useNotificationHook();

    return (
        <>
            {isModal.show &&

                <Modal
                    modalType={isModal.modalType}
                    iconType={isModal.iconType}
                    errorList={isModal.errorList}
                    show={isModal.show}
                    title={isModal.title}
                    message={isModal.message}
                    confirmText={isModal.confirmText}
                    cancelText={isModal.cancelText}
                    onConfirm={isModal.onConfirm}
                    onCancel={isModal.onCancel}
                />

            }
            <div className={styles.portalContainer}>
                <div className={styles.portalWrapper}>
                    <div className={styles.portalTopNavWrapper}>
                        <PortalPageTopNav />
                    </div>
                    <div className={styles.portalSideNavWrapper}>
                        <PortalPageSideNav />
                    </div>
                    <main className={styles.portalLayoutChildrenWrapper}>
                        <Outlet />
                    </main>
                </div>
            </div>

        </>
    );
}

