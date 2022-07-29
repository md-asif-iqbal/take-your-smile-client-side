import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";

const Blogs = () => {
  const imageGallery = [
    {
      id: 1,
      date: "April 10, 2016",
      text: "Sustainable Tulsa Presents “Recharge”",
      p: "SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN’S BALLROOM 423 N. MAIN ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here",
      img: "https://avatars.mds.yandex.net/i?id=65605bf180c6004f568dae14f89c54c1-4390935-images-thumbs&n=13&exp=1",
    },
    {
      id: 2,
      date: "April 10, 2016",
      text: "Sustainable Tulsa gets set to ‘Recharge’ with fundraiser at Cain’s Ballroom",
      p: "SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN’S BALLROOM 423 N. MAIN ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here",
      img: "https://oasistravelclub.com/images/services/special-events.jpg",
    },
    {
      id: 3,
      date: "April 10, 2016",
      text: "WH Tulsa: Are You Smarter than a KIPPster? 2018",
      p: "SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN’S BALLROOM 423 N. MAIN ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here",
      img: "https://oasistravelclub.com/images/services/special-events.jpg",
    },
    {
      id: 4,
      date: "April 10, 2016",
      text: "1,000 walk to raise funds, awareness to find a cure for multiple sclerosis",
      p: "SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN’S BALLROOM 423 N. MAIN ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here",
      img: "https://avatars.mds.yandex.net/i?id=3d62fafafdc424bbac4df17aa7e2c5f7-5843049-images-thumbs&n=13&exp=1",
    },
    {
      id: 5,
      date: "April 10, 2016",
      text: "Inner Circle Vodka Bar to host all-ages Potter Fest on Oct. 29",
      p: "SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN’S BALLROOM 423 N. MAIN ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here",
      img: "https://www.bookeventz.com/blog/wp-content/uploads/2015/01/corporate2.jpg",
    },
    {
      id: 6,
      date: "April 10, 2016",
      text: "OK2Grow Redbud Celebration & Lip Sync Event",
      p: "SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN’S BALLROOM 423 N. MAIN ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here",
      img: "https://avatars.mds.yandex.net/i?id=1d1c0cf8143cf097b81ceff6503cd88b-5657221-images-thumbs&n=13&exp=1",
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="w-8/12 mx-auto font-sans mt-36">
        <h1 className="text-3xl text-center mt-16 font-bold">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-10">
          {imageGallery.map((item) => (
            <div>
              <img className="hover:bg-primary" src={item.img} alt="" />
              <a href="#" className="hover:text-red-500">
                {item.text}
              </a>

              <p className="mt-2">
                <span>By</span>{" "}
                <a href="" className="hover:text-red-500">
                  Take Heart Events |
                </a>{" "}
                <a href="" className="hover:text-red-500">
                  Press |
                </a>{" "}
                <a href="" className="hover:text-red-500">
                  No Comments
                </a>
              </p>
              <div className="flex">
                <div>
                  <p>{item.date}</p>
                </div>
                <div className="ml-20 hover:text-red-500">
                  <p>
                    <AiOutlineHeart />
                  </p>
                </div>
              </div>
              <p className="mt-5">{item.p}</p>
            </div>
          ))}
        </div>
        <div className="btn-group m-5 gap-5 p-5 flex justify-center">
          <div className="flex justify-center space-x-1 dark:text-gray-100">
            <button
              title="previous"
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              type="button"
              title="Page 1"
              className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400"
            >
              <Link to="/blogs">1</Link>{" "}
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
              title="Page 2"
            >
              <Link to="/blogsone">2</Link>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
              title="Page 3"
            >
              <Link to="/blogsthree">3</Link>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
              title="Page 4"
            >
              4
            </button>
            <button
              title="next"
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-red-500 w-full h-64 rounded-box">
        <h1 className="text-center p-20 text-3xl text-white font-bold">
          Ready to get to planning? Get in touch! <br />
          <a className="text-2xl" href="">
            <button className="btn btn-outline p-5 m-3 hover:text-green-800 ">
              GET STARTED
            </button>
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Blogs;
