import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Team = () => {
    return (
        <div>
            <div className="w-full md:mx-8 mx-0">
                <table className="text-left w-full">
                    <thead className="bg-black flex text-white w-full">
                        <tr className="flex w-full mb-4">
                            <th className="p-4 w-1/4"><Link to="teamA">One</Link></th>
                            <th className="p-4 w-1/4"><Link to="teamB">Two</Link></th>
                            <th className="p-4 w-1/4"><Link to="teamC">Three</Link></th>
                            <th className="p-4 w-1/4"><Link to="teamD">Four</Link></th>
                        </tr>
                    </thead>
                </table>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Team;