import { useEffect, useState } from "react";
const useAdmin = user => {
    const [admin, setAdmin] = useState();
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://secure-escarpment-79738.herokuapp.com/admin/${email}`,{
                methodd: "GET",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }

            })
            .then(res => res.json())
            .then(data => {
                setAdmin(data);
                setAdminLoading(false);
            })
        }
    },[user]);

    return [admin, adminLoading];
}
export default useAdmin;