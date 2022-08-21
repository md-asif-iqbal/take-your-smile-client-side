import { useEffect, useState } from "react"

const useAdminToken = (user:any, role:any) => {
const [token, setToken] = useState('');
useEffect(() => {
const email = user?.user?.email;
const name = user?.user?.displayName;

let  currentUser;
if(role.length > 1){
    currentUser = {email, name, role};
}else{
    currentUser = {email, name};
}

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