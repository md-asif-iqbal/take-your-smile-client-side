import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";

const Blogs = () => {

    const imageGallery = [
        {
          id: 1,
          date:'April 10, 2016',
          text:'Sustainable Tulsa Presents “Recharge”',
          p:'SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN’S BALLROOM 423 N. MAIN ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here',
          img: "https://avatars.mds.yandex.net/i?id=65605bf180c6004f568dae14f89c54c1-4390935-images-thumbs&n=13&exp=1",
        },
        {
          id: 2,
          date:'April 10, 2016',
          text:'Sustainable Tulsa gets set to ‘Recharge’ with fundraiser at Cain’s Ballroom',
          p:'SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN’S BALLROOM 423 N. MAIN ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here',
          img: "https://oasistravelclub.com/images/services/special-events.jpg",
        },
        {
          id: 3,
          date:'April 10, 2016',
          text:'WH Tulsa: Are You Smarter than a KIPPster? 2018',
          p:'SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN’S BALLROOM 423 N. MAIN ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here',
          img: "https://oasistravelclub.com/images/services/special-events.jpg",
        },
        {
          id: 4,
          date:'April 10, 2016',
          text:'1,000 walk to raise funds, awareness to find a cure for multiple sclerosis',
          p:'SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN’S BALLROOM 423 N. MAIN ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here',
          img: "https://avatars.mds.yandex.net/i?id=3d62fafafdc424bbac4df17aa7e2c5f7-5843049-images-thumbs&n=13&exp=1",
        },
        {
          id: 5,
          date:'April 10, 2016',
          text:'Inner Circle Vodka Bar to host all-ages Potter Fest on Oct. 29',
          p:'SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN’S BALLROOM 423 N. MAIN ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here',
          img: "https://www.bookeventz.com/blog/wp-content/uploads/2015/01/corporate2.jpg",
        },
        {
          id: 6,
          date:'April 10, 2016',
          text:'OK2Grow Redbud Celebration & Lip Sync Event',
          p:'SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN’S BALLROOM 423 N. MAIN ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here',
          img: "https://avatars.mds.yandex.net/i?id=1d1c0cf8143cf097b81ceff6503cd88b-5657221-images-thumbs&n=13&exp=1",
        },
      ];
    return (
        <div >
                <NavBar/>
            <div className=" mx-auto font-sans mt-36">
            <h1 className='text-3xl text-center mt-16 font-bold'>Blogs</h1>

            <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
            {
              imageGallery.map((item)=>(
                <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.img} alt="blog"/>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>
              </div>
            </div>
          </div>
              ))
            }
        </div>
      </div>
    </section>
           
      <div className="btn-group m-5 gap-5 p-5 flex justify-center">
        
          <div className="flex justify-center space-x-1 dark:text-gray-100">
	<button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
		<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	<button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400"><Link to='/blogs'>1</Link> </button>
	<button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800" title="Page 2"> <Link to='/blogsone'>2</Link></button>
	<button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800" title="Page 3"><Link to='/blogsthree'>3</Link></button>
	<button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800" title="Page 4">4</button>
	<button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
		<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
</div>
    </div>
</div>
</div>
  
  );
};

export default Blogs;
