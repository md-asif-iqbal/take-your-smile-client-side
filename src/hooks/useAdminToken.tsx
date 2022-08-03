import { useEffect, useState } from "react"
const useAdminToken = (user:any, role:any) => {
const [token, setToken] = useState('');
useEffect(() => {
const email = user?.user?.email;
const name = user?.user?.displayName;
const currentUser = {email, name, role};

if (email) {
    fetch(`http://localhost:8000/admin/${email}`,{
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        const accessToken = data.token;
        localStorage.setItem('accessToken', accessToken);
        setToken(accessToken)
    })
}

},[user]);
return [token];
}
export default useAdminToken;