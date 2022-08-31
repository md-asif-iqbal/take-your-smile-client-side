import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Show = () => {
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  useEffect(()=>{
      fetch('https://secure-escarpment-79738.herokuapp.com/articles')
      .then(res => res.json())
      .then(data => setArticles(data))
  },[]);
    
      const getText = (data) => {
        const html = document.createElement("div")
        html.innerHTML = data
        const plenText = html.textContent ? html.textContent : html.innerText
        return plenText.slice(0,150)
      }
      const handlePost = (id) => {
        const path = `/article/${id}`;
        navigate(path)
      }
    return (
        <div >
        <NavBar/>
    <div className=" mx-auto font-sans pt-36">
    <h1
     data-aos="flip-down"
     data-aos-duration="3000" 
     className='text-3xl text-center mt-16 font-bold text-secondary uppercase'>All <span className="text-orange-600">Blogs</span></h1>

    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {
      articles.map((item)=>(
        <div className="p-4 md:w-1/3" key={item._id}>
    <div  className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
     {
         item.image ? <img 
         data-aos="zoom-in"
         data-aos-duration="3000" 
         className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.image} alt="blog"/> : <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='placeholder.png' alt="blog"/> 
    } 
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Admin</h2>
        <h2 data-aos="flip-down"
     data-aos-duration="3000" className="title-font text-3xl font-medium text-secondary mb-3">{item.title}</h2>
        <p data-aos="zoom-in-down"
     data-aos-duration="3000" className="leading-relaxed mb-3 text-secondary">{getText(item.body)}</p>
        <div className="flex items-center flex-wrap ">
          <button className="text-secondary inline-flex items-center md:mb-2 lg:mb-0"  onClick={() => handlePost(item._id)}>Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
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
{/* 
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
</div> */}
</div>
</div>
</div>
  
  );
};

export default Show;
