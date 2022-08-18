import { useEffect, useState } from "react"

const useToken = (user:any) => {
    const [token, setToken] = useState('');
    useEffect( () =>{
        const email = user?.user?.email;
        const currentUser = {
                    email: email,
        };
        console.log(token);

if (email) {
    fetch(`https://secure-escarpment-79738.herokuapp.com/user/${email}`,{
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    }, [user]);
    return [token];
}
export default useToken;