import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation} from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/Admin/useAdmin";
import Loading from "../../shared/Loading/Loading";

function RequireAdmin({ children }) {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
if (loading || adminLoading) {
    return <div className='h-40 mt-10'>{<Loading />}</div>
}
if (admin?.role === "Admin") {
    return children;
}
return <Navigate to="/admin/login" state={{ from: location }} replace />;
}
export default RequireAdmin;