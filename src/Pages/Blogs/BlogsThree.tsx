import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
const BlogsThree = () => {
    const imageGallery = [
        {
          id: 1,
          date:'April 10, 2016',
          text:'Sustainable Tulsa Presents “Recharge”',
          p:'SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN’S BALLROOM 423 N. MAIN ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here',
          img: "https://patrickclarencemortel.files.wordpress.com/2017/11/123.jpg?w=1920&h=1280&crop=1",
        },
        {
          id: 2,
          date:'April 10, 2016',
          text:'Sustainable Tulsa gets set to ‘Recharge’ with fundraiser at Cain’s Ballroom',
          p:'SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN’S BALLROOM 423 N. MAIN ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here',
          img: "http://www.bluloft.com/wp-content/uploads/2016/01/img_blank_722012_9531632.jpg",
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
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
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
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog"/>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div className="flex items-center flex-wrap">
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
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog"/>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
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
        </div>
      </div>
    </section>
    );
};

export default BlogsThree;