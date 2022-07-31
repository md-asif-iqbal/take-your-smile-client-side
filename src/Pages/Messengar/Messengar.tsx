
import React from 'react';
import {MessengerCustomerChat} from "typescript-react-facebook-messenger";
const Messengar = () => {
    console.log('yes');
    
    return (
        <div>
            <MessengerCustomerChat
                pageId="<101895019292258>"
                appId="<2086600954844655>"
            />
        </div>

    );
};

export default Messengar;