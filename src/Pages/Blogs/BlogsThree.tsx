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
        <div>
          <div className="w-8/12 mx-auto font-sans mt-20">
            <h1 className='text-3xl text-center mt-16 font-bold'>Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-10">
              {imageGallery.map((item) => (
          <div>
            
            <img className="hover:bg-primary" src={item.img} alt="" />
            <a href="" className='hover:text-red-500'>{item.text}</a>
           
            <p className='mt-2'><span>By</span> <a href="" className='hover:text-red-500'>Take Heart Events |</a> <a href="" className='hover:text-red-500'>Press |</a> <a href="" className='hover:text-red-500'>No Comments</a></p>
            <div className='flex'>
             <div>
             <p>{item.date}</p>
             </div>
            <div className='ml-20 hover:text-red-500'>
            <p ><AiOutlineHeart/></p>
            </div>
            </div>
            <p className='mt-5'>{item.p}</p>
          </div>
        ))}
      </div>
      <div className="btn-group m-5 gap-5 p-5 flex justify-center">
          <a href="http://localhost:3000/blog"><button className="btn hover:bg-red-500 btn-sm rounded-lg">« Previous</button></a>
         <a href="http://localhost:3000/blog"><button className="btn btn-sm btn-active rounded-sm bg-red-500 ">1</button></a>
          <a href="http://localhost:3000/blogs"><button className="btn btn-sm btn-active rounded-sm bg-red-500 ">2</button></a>
          <a href=""><button className="btn btn-sm btn-active rounded-sm bg-red-500 ">3</button></a>
          <a href="http://localhost:3000/blog"><button className="btn hover:bg-red-500 btn-sm rounded-lg"> Next»</button></a>
          
    </div>
        </div>
        <div className='bg-red-500 w-full h-64 rounded-box'>
            <h1 className='text-center p-20 text-3xl text-white font-bold'>Ready to get to planning? Get in touch! <br />
            <a className='text-2xl' href=""><button className='btn btn-outline p-5 m-3 hover:text-green-800 '>GET STARTED</button></a>
            </h1>
            
          </div>
        </div>
    );
};

export default BlogsThree;