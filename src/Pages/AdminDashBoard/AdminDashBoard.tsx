import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';


const AdminDashBoard = () => {


	return (
		// <div className=''>
		// 	<div className="flex items-start justify-start  h-screen p-10 space-x-2 pb-20 bg-gray-300">

		// 		<div className="flex flex-col items-center w-16 h-full mt-10 overflow-hidden lg:hidden text-indigo-300 bg-indigo-900 rounded">
		// 			<a className="flex items-center justify-center mt-3" href="#">
		// 				<svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
		// 					<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
		// 				</svg>
		// 			</a>
		// 			<div className="flex flex-col items-center mt-3 border-t border-gray-700">
		// 				<a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700" href="#">
		// 					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
		// 					</svg>
		// 				</a>
		// 				<a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700" href="#">
		// 					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
		// 					</svg>
		// 				</a>
		// 				<a className="flex items-center justify-center w-12 h-12 mt-2 text-indigo-100 bg-indigo-700 rounded" href="#">
		// 					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
		// 					</svg>
		// 				</a>
		// 				<a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700" href="#">
		// 					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
		// 					</svg>
		// 				</a>
		// 			</div>
		// 			<div className="flex flex-col items-center mt-2 border-t border-gray-700">
		// 				<a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700" href="#">
		// 					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
		// 					</svg>
		// 				</a>
		// 				<a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700" href="#">
		// 					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
		// 					</svg>
		// 				</a>
		// 				<a className="relative flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700" href="#">
		// 					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
		// 					</svg>
		// 					<span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
		// 				</a>
		// 			</div>
		// 			<a className="flex items-center justify-center w-16 h-16 mt-auto bg-indigo-800 hover:bg-indigo-700" href="#">
		// 				<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
		// 				</svg>
		// 			</a>
		// 		</div>
		// 		{/* <!-- Component End  --> */}

		// 		{/* <!-- Component Start --> */}
		// 		<div className="flex flex-col items-center w-40 h-full mt-10  overflow-hidden hidden lg:block text-indigo-300 bg-indigo-900 rounded">
		// 			<a className="flex items-center w-full px-3 mt-3" href="#">
		// 				<svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
		// 					<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
		// 				</svg>
		// 				<span className="ml-2 text-sm font-bold">Admin</span>
		// 			</a>
		// 			<div className="w-full px-2">
		// 				<div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
		// 					<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700" href="#">
		// 						<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
		// 						</svg>
		// 						<span className="ml-2 text-sm font-medium">DashBoard</span>
		// 					</a>
		// 					<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700" href="#">
		// 						<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
		// 						</svg>
		// 						<span className="ml-2 text-sm font-medium">Blogs Post</span>
		// 					</a>
		// 					<a className="flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-indigo-700 text-indigo-100 rounded" href="#">
		// 						<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
		// 						</svg>
		// 						<span className="ml-2 text-sm font-medium">Gallery Post</span>
		// 					</a>
		// 					<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700" href="#">
		// 						<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
		// 						</svg>
		// 						<span className="ml-2 text-sm font-medium">All Bookings</span>
		// 					</a>
		// 				</div>
		// 				<div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
		// 					<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700" href="#">
		// 						<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
		// 						</svg>
		// 						<span className="ml-2 text-sm font-medium">Products</span>
		// 					</a>
		// 					<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700" href="#">
		// 						<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
		// 						</svg>
		// 						<span className="ml-2 text-sm font-medium">Settings</span>
		// 					</a>
		// 					<a className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700" href="#">
		// 						<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		// 							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
		// 						</svg>
		// 						<span className="ml-2 text-sm font-medium">Messages</span>
		// 						<span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
		// 					</a>
		// 				</div>
		// 			</div>
		// 		</div>


		// 	</div>
		// 	<div className='flex items-end justify-end  h-screen p-10 space-x-2 pb-20 bg-gray-300'>
		// 		<h1 className='pt-3 text-2xl' style={{ color: 'royalblue' }}>Welcome to your Dashboard</h1>
		// 		<Outlet></Outlet>
		// 	</div>
		// </div>
		<div>
			{/* <button className='mt-5 pl-5'>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
			</button> */}
			<div className="grid lg:grid-cols-[300px_minmax(900px,_1fr)_100px]">
				<div className='rounded-lg h-5/6 pb-16 mb-16 mx-auto w-3/5 mt-16  bg-indigo-800 px-2'>
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
							<p className='pl-2 text-gray-400 font-medium' style={{ display: 'flex', alignItems: 'center' }}><Link to='/admindashboard/settings'>Settings</Link></p>
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
					<h1 className='pt-3 text-4xl' style={{ color: 'royalblue' }}>Welcome to your Dashboard</h1>
					<Outlet></Outlet>
				</div>

			</div>
		</div>
	);
};

export default AdminDashBoard;