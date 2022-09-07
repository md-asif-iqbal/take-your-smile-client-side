import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import useUser from "../../../hooks/User/UseUser";
import Loading from "../Loading/Loading";

function RequireAuth({ children }: { children: JSX.Element }) {
    const [user, loading, error] = useAuthState(auth);
    const [users, userLoading]:any = useUser(user);  
    let location = useLocation();

      if(!user){

        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    const role = users?.role;
if (loading || userLoading) {
    return <div className='h-40 mt-10'>{<Loading />}</div>
}
    if (user || role === "user") {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;


}
export default RequireAuth;