import { useEffect, useState } from "react";
const useAdmin = adm => {
    const [admin, setAdmin] = useState({});
    const [adminLoading, setAdminLoading] = useState(true);
    const email = adm?.email;
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:8000/admin/${email}`,{
                methodd: "GET",
                headers: {
                    // 'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }

            })
            .then(res => res.json())
            .then(data => {
                if (data) { 
                 setAdmin(data);
                 setAdminLoading(false);
                }
                
            })
        }
    },[adm]);
    return [admin, adminLoading];
}
export default useAdmin;