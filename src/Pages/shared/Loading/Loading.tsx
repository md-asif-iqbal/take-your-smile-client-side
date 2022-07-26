import React from 'react';

const Loading = () => {
    return (
        <div className='h-fit flex justify-center items-center'>
            <div className="w-24 h-24 border-b-2 border-primary rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;