import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';


const AdminDashBoard = () => {


	return (
	
		<div>
			<NavBar/>
			{/* <button className='mt-5 pl-5'>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
			</button> */}
			<div className="grid bg-indigo-600 text-white lg:grid-cols-[300px_minmax(900px,_1fr)_100px]">
				<div className='rounded-lg h-auto pb-16 mb-16 mx-auto w-3/5 mt-28  bg-indigo-800 px-2'>
					<div className='pb-3 px-2 pt-3'>
						<div className=' bg-indigo-700 px-2 rounded-lg  py-1 mx-auto flex  '>
							<svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
							</svg>
							<p className='pl-2 text-gray-400 font-medium ' style={{ display: 'flex', alignItems: 'center' }}>Admin</p>
						</div>
					</div>
					<div className='bg-gray-400 w-2/3 mx-auto mb-3' style={{ height: '1px' }}></div>
					{/* <hr className='bg-gray-700 w-2/3 mx-auto mb-3' /> */}
					<div className='pb-2 px-2 pt-3'>
						<div className=' hover:bg-indigo-700 px-2 rounded-lg  py-2 mx-auto flex  '>
							<svg className="w-6 h-6 stroke-current " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
							</svg>
							<p className='pl-2 text-gray-400 font-medium' style={{ display: 'flex', alignItems: 'center' }}><Link to='/admindashboard' >Dashboard</Link></p>
						</div>
					</div>
					<div className='pb-2 px-2 '>
						<div className=' hover:bg-indigo-700 px-2 rounded-lg  py-2 mx-auto flex  '>
							<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
							<p className='pl-2 text-gray-400 font-medium' style={{ display: 'flex', alignItems: 'center' }}><Link to='/admindashboard/blogposts'>Blogs Post</Link></p>
						</div>
					</div>
					<div className='pb-2 px-2 '>
						<div className=' hover:bg-indigo-700 px-2 rounded-lg  py-2 mx-auto flex  '>
							<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
							<p className='pl-2 text-gray-400 font-medium' style={{ display: 'flex', alignItems: 'center' }}><Link to='/admindashboard/gallerypost'>Gallery Posts</Link></p>
						</div>
					</div>

					<div className='pb-2 px-2 '>
						<div className=' hover:bg-indigo-700 px-2 rounded-lg  py-2 mx-auto flex  '>
							<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
							</svg>
							<p className='pl-2 text-gray-400 font-medium' style={{ display: 'flex', alignItems: 'center' }}><Link to='/admindashboard/allbookings'>All Bookings</Link></p>
						</div>
					</div>

					<div className='pb-2 px-2 '>
						<div className=' hover:bg-indigo-700 px-2 rounded-lg  py-2 mx-auto flex  '>
							<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
							<p className='pl-2 text-gray-400 font-medium' style={{ display: 'flex', alignItems: 'center' }}><Link to='/admindashboard/allproducts'>Products</Link></p>
						</div>
					</div>
					<div className='pb-2 px-2 '>
						<div className=' hover:bg-indigo-700 px-2 rounded-lg  py-2 mx-auto flex  '>
							<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
							</svg>
							<p className='pl-2 text-gray-400 font-medium' style={{ display: 'flex', alignItems: 'center' }}><Link to='/admindashboard/articlepost'>Article Post</Link></p>
						</div>
					</div>
					<div className='pb-2 px-2 '>
						<div className=' hover:bg-indigo-700 px-2 rounded-lg  py-2 mx-auto flex  '>
							<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
							</svg>
							<p className='pl-2 text-gray-400 font-medium' style={{ display: 'flex', alignItems: 'center' }}><Link to='/admindashboard/messages'>Messages</Link></p>
						</div>
					</div>

				</div>
				<div>
					
					<h1 className=' mx-auto text-white pt-32 lg:ml-52 text-4xl'>Welcome to your Dashboard</h1>
					<Outlet></Outlet>
				</div>

			</div>
		</div>
	);
};

export default AdminDashBoard;