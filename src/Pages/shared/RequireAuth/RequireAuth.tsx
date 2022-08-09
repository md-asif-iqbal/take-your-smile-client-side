import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

function RequireAuth({ children }: { children: JSX.Element }) {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
if (loading) {
    return <div className='h-40 mt-10'>{<Loading />}</div>
}
if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
export default RequireAuth;