import React from 'react';
import NavBar from '../shared/NavBar/NavBar';

const AvailableJob = () => {
    const myStyle={
        backgroundImage: 
 "url('https://images.unsplash.com/photo-1619364726002-dfd4fdaee5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className='bg-white'>
            
            <NavBar/>
          
<section className="h-screen bg-cover" style={myStyle}>
  <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
    <div className="max-w-2xl text-center">
      <h1         data-aos="zoom-in-left"
                    data-aos-easing="gradient(0,0,1000)"
                    data-aos-duration="1700" className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-6xl">Hiring Employee job description</h1>

      <p data-aos="fade-up"
                    data-aos-easing="gradient(0,0,1200)"
                    data-aos-duration="1900"
					 className="mt-6 lg:text-lg text-white">Use this Hiring Employee job description template to attract and recruit qualified candidates for Event Management</p>

      <div className="mt-8 flex space-x-36 mx-auto flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
        <input id="email" type="text" className="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2" placeholder="Enter your CV link" />

        <button className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">Post this job</button>
      </div>
     
    </div>
    
  </div>
 
</section>
<section className="bg-primary-content mb-36">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div  className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
					<h3 data-aos="flip-down"
                data-aos-duration="3000"
				 className="text-3xl font-semibold text-secondary">Empolyees</h3>
					<p data-aos="flip-down"
                data-aos-duration="3000"><span  className="text-sm font-bold tracking-wider uppercase text-secondary">Event Management </span></p>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 ">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
						<h3 data-aos="zoom-out-right" 
          data-aos-duration="3000"
		   className="text-xl font-semibold tracking-wide text-secondary">Hiring Specialist Empolyees responsibilities include: </h3>
						<time className="text-xs tracking-wide uppercase text-gray-400">Dec 2020</time>
						<p className="mt-3">
                        <ul className="space-y-4">
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
              data-aos-duration="2400" className="font-medium text-sm text-gray-400">Overseeing all hiring stages from sourcing to onboarding</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
              data-aos-duration="2400" className="font-medium text-sm text-gray-400">Advertising open roles on various channels including job boards, professional social networks and our careers page</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
              data-aos-duration="2400" className="font-medium text-sm text-gray-400">Coordinating our internal hiring process</h4>
						</div>
						
					</li>
					
					
					
				</ul>
                        </p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
						<h3 data-aos="zoom-out-right" 
          data-aos-duration="3000" className="text-xl font-semibold tracking-wide text-secondary">Responsibilities</h3>
						<time className="text-xs tracking-wide uppercase text-gray-400">Jul 2019</time>
						<p className="mt-3">
                        <ul className="space-y-4">
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4  data-aos="zoom-out-left" 
                                 data-aos-duration="2400"
		   className="font-medium text-sm text-gray-400">Overseeing all hiring stages from sourcing to onboarding</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400"
								  className="font-medium text-sm text-gray-400">Advertising open roles on various channels including job boards, professional social networks and our careers page</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 
							data-aos="zoom-out-left" 
							data-aos-duration="2400"
							className="font-medium text-sm text-gray-400">Coordinating our internal hiring process</h4>
						</div>
						
					</li>
					
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4
							data-aos="zoom-out-left" 
							data-aos-duration="2400"
							 className="font-medium text-sm text-gray-400">Screen resumes and application forms based on essential criteria</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">Interview candidates via phone, video and in-person</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">Track key recruiting metrics like time-to-hire and source of hire</h4>
						</div>
						
					</li>
					
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">Reach out to potential candidates and build relationships for future job opportunities (for example via LinkedIn or email)</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">Send job offer letters and negotiate terms</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">Process employment forms</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">Liaise with hiring managers to forecast staffing needs</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">Host or participate in Event</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">Promote our company as a great place to work</h4>
						</div>
						
					</li>
					
				</ul>


                        </p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
						<h3 data-aos="zoom-out-right" 
          data-aos-duration="3000" className="text-xl font-semibold tracking-wide text-secondary">Requirements and skills</h3>
						<time className="text-xs tracking-wide uppercase text-gray-400">Jan 2016</time>
						<p className="mt-3">
                        <ul className="space-y-4">
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">Work experience as a Hiring Specialist, Recruiter or similar role</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">Experience with Human Resources Management Software and Applicant Tracking Systems</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">Familiarity using social networks to post job ads and source candidates</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">Knowledge of labor legislation</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">Excellent communication skills</h4>
						</div>
						
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">Good time management skills with the ability to juggle various open positions</h4>
						</div>
						
					</li>
					<li className="space-y-1">
                        
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 data-aos="zoom-out-left" 
                                 data-aos-duration="2400" className="font-medium text-sm text-gray-400">BSc in Human Resources Management or relevant field</h4>
						</div>
						
					</li>
					
					
					
				</ul>

                        </p>
					</div>
                    {/* <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-0 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
					</div> */}
				</div>
			</div>
		</div>
	</div>
</section>
<div className=" py-80  flex justify-center items-center w-screen h-screen bg-primary-content">

	<div className="container mx-auto  lg:px-20">

		<div className="w-full p-8  md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
			<div data-aos="flip-down"
                data-aos-duration="3000" className="flex">
				<h1 className="font-bold uppercase text-5xl pt-5 text-secondary">Send Your  <br /> Cv</h1>
			</div>
			<div data-aos="zoom-in"
                data-aos-duration="3000"
				 className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="First Name*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Last Name*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Phone*" />
        </div>
				<div data-aos="zoom-in-left"
			data-aos-duration="3000"
			 className="my-4">
					<input placeholder="Send your Cv Link here*" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"/>
					<textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div     data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
							 className="my-2 w-1/2 lg:w-1/4">
					<button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                    Apply
          </button>
				</div>
			</div>

			<div
			data-aos="zoom-in-left"
			data-aos-duration="3000"
				className="w-full lg:-mt-96 mb-60 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
				<div className="flex flex-col text-white">
					<h1  data-aos="flip-down"
                data-aos-duration="3000" 
				 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
					<p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						tincidunt arcu diam.
			
					</p>

					<div className="flex my-4 w-2/3 lg:w-1/2">
						<div className="flex flex-col">
							<i className="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Main Office</h2>
              <p className="text-gray-400">5555 Chekapura RD, Pleasant Grove, UT 73533</p>
            </div>
          </div>
          
          <div className="flex my-4 w-2/3 lg:w-1/2">
            <div className="flex flex-col">
              <i className="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Call Us</h2>
              <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
              <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>

</div>

        </div>
    );
};

export default AvailableJob;