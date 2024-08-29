import TableBody from "../../TableComponent/TableBody";
import TablePagination from "../../TableComponent/TablePagination";
import { useState, useEffect } from "react";
import styles from './TableComponent.module.css'
import { IconComponent } from "../../Icon/IconComponent";
import { useNavigate } from "react-router";

export const AdminUserDirectoryTable = () => {

    const redirect = useNavigate();

    const [isUsers, setIsUsers]=useState(false);
     const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const tableColumns = [
        { key: 'firstName', title: 'First Name' },
        { key: 'lastName', title: 'Last Name' },
        { key: 'email', title: 'Email' },
        { key: 'role', title: 'Role' },
        { key: 'status', title: 'Status' },
        {
            key: 'manage',
            title: 'Manage',
            render: row => (
                <div className={styles.actionIconContainer}>
                    <IconComponent onClick={()=> redirect(`/hapg/portal/edit-user/${row._id}`)} iconType='edit' />
                </div>
            )
        }
    ];
    const fetchUsers = async () => {
       
        try {
            const response = await fetch('http://localhost:3005/admin-users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log('data',data)
            setIsUsers(data.users);
        } catch (err) {
        console.log(`error ${err}`)
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

   
   

    console.log('dir', isUsers)

;

    return (
        isUsers &&
        <>
            <TableBody
                columns={tableColumns}
                data={isUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
            />
            <TablePagination
                itemsPerPage={itemsPerPage}
                tableData={isUsers}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    )



}