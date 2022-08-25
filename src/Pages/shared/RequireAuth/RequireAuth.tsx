import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import useUser from "../../../hooks/User/UseUser";
import Loading from "../Loading/Loading";

function RequireAuth({ children }: { children: JSX.Element }) {
    const [user, loading, error] = useAuthState(auth);
    const [users, userLoading]:any = useUser(user);    
    const role = users?.role;
    let location = useLocation();
if (loading || userLoading) {
    return <div className='h-40 mt-10'>{<Loading />}</div>
}
if (role === "user") {
    return children;
}
return <Navigate to="/login" state={{ from: location }} replace />;
}
export default RequireAuth;