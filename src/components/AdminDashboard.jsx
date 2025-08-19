import ManageRoles from "./ManageRoles";
import ManageUsers from "./ManageUsers";

const AdminDashboard = () => {
    return (
    <div>
        <p>only admin can access </p>
        <ManageRoles/>
        <ManageUsers/>
    </div>);
};
export default AdminDashboard;