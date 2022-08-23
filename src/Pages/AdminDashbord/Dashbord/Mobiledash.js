import React from 'react';

const Mobiledash = () => {
    return (
        <div class="drawer drawer-end md:pt-0 pt-40" >
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col font-mono">
                <div class="w-full h-20 lg:px-20">
                    <label
                        tabIndex="1"
                        for="dashboard-sidebar"
                        class="btn btn-ghost lg:hidden "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Mobiledash;