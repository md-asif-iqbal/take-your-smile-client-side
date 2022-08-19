import React from "react";
import { Route, Routes } from "react-router-dom";
import AllGallery from "./Pages/EventGallery/AllGallery";
import CorporateGallery from "./Pages/EventGallery/CorporateGallery";
import EventGallery from "./Pages/EventGallery/EventGallery";
import NonProfitGallery from "./Pages/EventGallery/NonProfitGallery";
import SocialGallery from "./Pages/EventGallery/SocialGallery";
import WeddingGallery from "./Pages/EventGallery/WeddingGallery";
import Events from "./Pages/Events/Events";
import HomeWithNav from "./Pages/Home/Home/HomeWithNav";
import Footer from "./Pages/shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./Pages/Contact/Contact";
import Weedings from "./Pages/Events/Weedings";
import Social from "./Pages/Events/Social";
import NonProfit from "./Pages/Events/NonProfit";
import OurStory from "./Pages/OurStory/OurStory";
import Booking from "./Pages/dashboard/Booking";
import Users from "./Pages/dashboard/Users";
import MakeAdmin from "./Pages/dashboard/MakeAdmin";
import AllBooking from "./Pages/dashboard/AllBooking";
import Update from "./Pages/dashboard/Profile/Update";
import Profile from "./Pages/dashboard/Profile/Profile";
import RequireAuth from "./Pages/shared/RequireAuth/RequireAuth";
import Login from "./Pages/Authentication/Login";
// import Blogs from './Pages/Blogs/Blogs';

import BlogsOne from "./Pages/Blogs/BlogsOne";
import BlogsThree from "./Pages/Blogs/BlogsThree";
// import SingleEvent from './Pages/EventGallery/SingleEvent';
// import Error from './Pages/shared/Error/Error';
// import Review from './Pages/dashboard/Review';
// import UploadEvents from './Pages/dashboard/UploadEvents';
// import Dashboard from './Pages/dashboard/Dashboard';
import Blogs from "./Pages/Blogs/Blogs";
import Likes from "./Pages/Likes/Posts";
import Posts from "./Pages/Likes/Posts";
import AdminDashBoard from "./Pages/AdminDashBoard/AdminDashBoard";
import DashboardAdmin from "./Pages/AdminDashBoard/DashboardAdmin";
import AllBookings from "./Pages/AdminDashbord/AllBookings";
import BlogPosts from "./Pages/AdminDashBoard/BlogPosts";
import GalleryPost from "./Pages/AdminDashBoard/GalleryPost";
import Messages from "./Pages/AdminDashBoard/Messages";
import Products from "./Pages/AdminDashBoard/Products";
import Settings from "./Pages/AdminDashBoard/Settings";
// import BlogsOne from "./Pages/Blogs/BlogsOne";
// import BlogsThree from "./Pages/Blogs/BlogsThree";
import SingleEvent from "./Pages/EventGallery/SingleEvent";
import Error from "./Pages/shared/Error/Error";
import Review from "./Pages/dashboard/Review";
import UploadEvents from "./Pages/dashboard/UploadEvents";
import Dashboard from "./Pages/dashboard/Dashboard";
// import Blogs from "./Pages/Blogs/Blogs";
import Profiles from "./Pages/Profiles/Profiles";
import Messenger from "./Pages/Messenger/Messenger";
import AdminLogin from "./Pages/Authentication/Admin/AdminLogin";
import AvailableJob from "./Pages/AvailableJob/AvailableJob";
import Location from "./Pages/Location/Location/Location";
import Decrations from "./Pages/Decrations/Decrations";
import Corporate from "./Pages/Events/Corporate";
import BirthdayParties from "./Pages/ServicesLocation/SocialEvents/BirthdayParties/BirthdayParties";
import Anniversary from "./Pages/ServicesLocation/WeddingEvents/AnniversaryEvents/Anniversary";
import AnniLocation from "./Pages/ServicesLocation/WeddingEvents/AnniversaryEvents/AnniLocation";
import Engagement from "./Pages/ServicesLocation/WeddingEvents/EngagementEvents/Engagement";
import Rehearsal from "./Pages/ServicesLocation/WeddingEvents/RehearsalEvents/Rehearsal";
import WeddingEven from "./Pages/ServicesLocation/WeddingEvents/WeddingLoc/WeddingEven";
import SeasonalEvents from "./Pages/ServicesLocation/SocialEvents/SeasonalEvent/SeasonalEvents";
import Religious from "./Pages/ServicesLocation/SocialEvents/ReligiousEvens/Religious";
import Holyday from "./Pages/ServicesLocation/SocialEvents/HolidayEvents/Holyday";
import RehearsalLoc from "./Pages/ServicesLocation/WeddingEvents/RehearsalEvents/RehearsalLoc";
// Decration part
import Decration from "./Pages/ServicesLocation/WeddingEvents/AnniversaryEvents/Decration";
import EngDecration from "./Pages/ServicesLocation/WeddingEvents/EngagementEvents/EngDecration";
// Order Form Here
import OrderFrom from "./Pages/ServicesLocation/WeddingEvents/AnniversaryEvents/OrderFrom";
import EnOrderForm from "./Pages/ServicesLocation/WeddingEvents/EngagementEvents/EnOrderForm";
import EngagementLoc from "./Pages/ServicesLocation/WeddingEvents/EngagementEvents/EngagementLoc";
import RehearsalDecration from "./Pages/ServicesLocation/WeddingEvents/RehearsalEvents/RehearsalDecration";
import WeddingLoc from "./Pages/ServicesLocation/WeddingEvents/WeddingLoc/WeddingLoc";
import WeddingDecration from "./Pages/ServicesLocation/WeddingEvents/WeddingLoc/WeddingDecration";
import WeddingForm from "./Pages/ServicesLocation/WeddingEvents/WeddingLoc/WeddingForm";
import BirthdayLoction from "./Pages/ServicesLocation/SocialEvents/BirthdayParties/BirthdayLoction";
import ReligiousLoc from "./Pages/ServicesLocation/SocialEvents/ReligiousEvens/ReligiousLoc";
import SeasonalLoc from "./Pages/ServicesLocation/SocialEvents/SeasonalEvent/SeasonalLoc";
import HolydayLoc from "./Pages/ServicesLocation/SocialEvents/HolidayEvents/HolydayLoc";
import RehearsalForm from "./Pages/ServicesLocation/WeddingEvents/RehearsalEvents/RehearsalForm";
import BirthdayDecration from "./Pages/ServicesLocation/SocialEvents/BirthdayParties/BirthdayDecration";
import BirthdayForm from "./Pages/ServicesLocation/SocialEvents/BirthdayParties/BirthdayForm";
import HolyDayDec from "./Pages/ServicesLocation/SocialEvents/HolidayEvents/HolyDayDec";
import HolydayFrom from "./Pages/ServicesLocation/SocialEvents/HolidayEvents/HolydayFrom";
import ReligiousDe from "./Pages/ServicesLocation/SocialEvents/ReligiousEvens/ReligiousDe";
import ReligiousForm from "./Pages/ServicesLocation/SocialEvents/ReligiousEvens/ReligiousForm";
import SeasonalDe from "./Pages/ServicesLocation/SocialEvents/SeasonalEvent/SeasonalDe";
import SeasonalFrom from "./Pages/ServicesLocation/SocialEvents/SeasonalEvent/SeasonalFrom";
import FashionCarnival from "./Pages/ServicesLocation/CorporateEvents/FashionCarnival/FashionCarnival";
import FashionCarLoc from "./Pages/ServicesLocation/CorporateEvents/FashionCarnival/FashionCarLoc";
import FashionCarDe from "./Pages/ServicesLocation/CorporateEvents/FashionCarnival/FashionCarDe";
import FashionFrom from "./Pages/ServicesLocation/CorporateEvents/FashionCarnival/FashionFrom";
import NewYearEvents from "./Pages/ServicesLocation/CorporateEvents/NewYearEvents/NewYearEvents";
import Educational from "./Pages/ServicesLocation/CorporateEvents/EducationalSemi/Educational";
import SalesEvents from "./Pages/ServicesLocation/CorporateEvents/SalesEvents/SalesEvents";
import EducationlLoc from "./Pages/ServicesLocation/CorporateEvents/EducationalSemi/EducationlLoc";
import EducationalDe from "./Pages/ServicesLocation/CorporateEvents/EducationalSemi/EducationalDe";
import Educationafrom from "./Pages/ServicesLocation/CorporateEvents/EducationalSemi/Educationafrom";
import NewYearLoc from "./Pages/ServicesLocation/CorporateEvents/NewYearEvents/NewYearLoc";
import NewYearDe from "./Pages/ServicesLocation/CorporateEvents/NewYearEvents/NewYearDe";
import NewYearFrom from "./Pages/ServicesLocation/CorporateEvents/NewYearEvents/NewYearFrom";
import SalesEventLoc from "./Pages/ServicesLocation/CorporateEvents/SalesEvents/SalesEventLoc";
import SalesDe from "./Pages/ServicesLocation/CorporateEvents/SalesEvents/SalesDe";
import SalesFrom from "./Pages/ServicesLocation/CorporateEvents/SalesEvents/SalesFrom";
import ConcertEvents from "./Pages/ServicesLocation/NonProfitEvents/ConcertEvents/ConcertEvents";
import FairsExpos from "./Pages/ServicesLocation/NonProfitEvents/Fairs&Expos/FairsExpos";
import WelcomeHome from "./Pages/ServicesLocation/NonProfitEvents/WelcomeHome/WelcomeHome";
import PaintJam from "./Pages/ServicesLocation/NonProfitEvents/Paintjam/PaintJam";
import FundrasingEvent from "./Pages/ServicesLocation/NonProfitEvents/Fundraising/FundrasingEvent";
import ConcertLoc from "./Pages/ServicesLocation/NonProfitEvents/ConcertEvents/ConcertLoc";
import PaintJamLoc from "./Pages/ServicesLocation/NonProfitEvents/Paintjam/PaintJamLoc";
import WelcomHomeLoc from "./Pages/ServicesLocation/NonProfitEvents/WelcomeHome/WelcomHomeLoc";
import FairExposLoc from "./Pages/ServicesLocation/NonProfitEvents/Fairs&Expos/FairExposLoc";
import FundrasingLoc from "./Pages/ServicesLocation/NonProfitEvents/Fundraising/FundrasingLoc";
import ConcertDe from "./Pages/ServicesLocation/NonProfitEvents/ConcertEvents/ConcertDe";
import FairsDe from "./Pages/ServicesLocation/NonProfitEvents/Fairs&Expos/FairsDe";
import PaintJamDe from "./Pages/ServicesLocation/NonProfitEvents/Paintjam/PaintJamDe";
import WelcomeDe from "./Pages/ServicesLocation/NonProfitEvents/WelcomeHome/WelcomeDe";
import Fundrasing from "./Pages/ServicesLocation/NonProfitEvents/Fundraising/Fundrasing";
import ConcertFrom from "./Pages/ServicesLocation/NonProfitEvents/ConcertEvents/ConcertFrom";
import FairsForm from "./Pages/ServicesLocation/NonProfitEvents/Fairs&Expos/FairsForm";
import FundrasingForm from "./Pages/ServicesLocation/NonProfitEvents/Fundraising/FundrasingForm";
import HomeFrom from "./Pages/ServicesLocation/NonProfitEvents/WelcomeHome/HomeFrom";
import PaintJamFrom from "./Pages/ServicesLocation/NonProfitEvents/Paintjam/PaintJamFrom";
import FloralDesign from "./Pages/ServicesLocation/WeddingEvents/FloralDesign/FloralDesign";
import FloralLoc from "./Pages/ServicesLocation/WeddingEvents/FloralDesign/FloralLoc";
import FloraDe from "./Pages/ServicesLocation/WeddingEvents/FloralDesign/FloraDe";
import FloralFrom from "./Pages/ServicesLocation/WeddingEvents/FloralDesign/FloralFrom";
import Retirement from "./Pages/ServicesLocation/SocialEvents/RetirementEvent/Retirement";
import RetirementLoc from "./Pages/ServicesLocation/SocialEvents/RetirementEvent/RetirementLoc";
import RetirementDe from "./Pages/ServicesLocation/SocialEvents/RetirementEvent/RetirementDe";
import RetirementFrom from "./Pages/ServicesLocation/SocialEvents/RetirementEvent/RetirementFrom";
import Product from "./Pages/ServicesLocation/CorporateEvents/ProductLaunches/Product";
import ProductLoc from "./Pages/ServicesLocation/CorporateEvents/ProductLaunches/ProductLoc";
import ProductDe from "./Pages/ServicesLocation/CorporateEvents/ProductLaunches/ProductDe";
import ProductForm from "./Pages/ServicesLocation/CorporateEvents/ProductLaunches/ProductForm";
import BlogPost from "./Pages/shared/BlogEditor/Article";
import Show from "./Pages/shared/BlogEditor/Show";
// import Blogs from "./Pages/Blogs/Blogs";
// import Posts from "./Pages/Likes/Posts";
// import AdminDashBoard from "./Pages/AdminDashBoard/AdminDashBoard";
import RequireAdmin from "./Pages/Authentication/RequireAdmin/RequireAdmin";
import Article from "./Pages/shared/BlogEditor/Article";
import Dashbord from "./Pages/AdminDashbord/Dashbord/Dashbord";
import Modal from "./Pages/shared/Modal/Modal";
import SponsorPost from "./Pages/shared/Sponsorship/SponsorPost";
import Home from "./Pages/Donation/Home";
import Admin from "./Pages/AdminDashbord/Dashbord/Admin";
import EventPost from "./Pages/AdminDashbord/EventPost";
import Blogposts from "./Pages/AdminDashbord/Blogposts";
import Alluser from "./Pages/AdminDashbord/Alluser";
import AllsBookings from "./Pages/AdminDashbord/AllsBookings/AllsBookings";
import PaymentDoneBook from "./Pages/AdminDashbord/AllsBookings/PaymentDoneBook";
import SingleBooking from "./Pages/MyBooking/SingleBooking";
function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Events />}></Route>
        <Route path="/myBook" element={<SingleBooking />}></Route>
        {/* New Dashbord  */}
        <Route path="/admin" element={<Dashbord></Dashbord>}>
          <Route index element={<Admin></Admin>}></Route>
          <Route path="eventpost" element={<EventPost></EventPost>}></Route>
          <Route path="blogPost" element={<Blogposts></Blogposts>}></Route>
          <Route path="user" element={<Alluser></Alluser>}></Route>
          <Route path="articlepost" element={<Article></Article>}></Route>
          <Route path="allbookings" element={<AllBookings></AllBookings>}>
            <Route
              path="bookings"
              element={<AllsBookings></AllsBookings>}
            ></Route>
            <Route path="payment" element={<PaymentDoneBook />}></Route>

            {/* here all bookings we made it */}
          </Route>
        </Route>
        {/* old dashbord  */}
        <Route
          path="/admindashboard"
          element={<AdminDashBoard></AdminDashBoard>}
        >
          <Route index element={<DashboardAdmin></DashboardAdmin>}></Route>
          <Route path="allbookings" element={<AllBookings></AllBookings>}>
            <Route
              path="bookings"
              element={<AllsBookings></AllsBookings>}
            ></Route>
            <Route path="payment" element={<PaymentDoneBook />}></Route>

            {/* here all bookings we made it */}
          </Route>
          <Route path="blogposts" element={<BlogPosts></BlogPosts>}></Route>
          <Route
            path="gallerypost"
            element={<GalleryPost></GalleryPost>}
          ></Route>
          <Route path="messages" element={<Messages></Messages>}></Route>
          <Route path="allproducts" element={<Products></Products>}></Route>
        </Route>

        <Route path="/home" element={<HomeWithNav />}></Route>

        <Route path="/donate" element={<Home></Home>}></Route>
        {/* <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route path='allbooking' element={<AllBooking></AllBooking>}></Route>
          <Route path='booking' element={<Booking></Booking>}></Route>
        <Route path="/" element={<Events />}></Route>
        <Route path="/home" element={<HomeWithNav />}></Route>
        <Route path="/admindashboard" element={<AdminDashBoard />}></Route> */}

        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route path="allbooking" element={<AllBooking></AllBooking>}></Route>
          <Route path="booking" element={<Booking></Booking>}></Route>
          {/* <Route path='profile' element={<UpdateProfile></UpdateProfile>}></Route> */}
          <Route path="reviews" element={<Review></Review>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="uploadEvents" element={<UploadEvents />}></Route>

          <Route path="admin" element={<MakeAdmin></MakeAdmin>}></Route>

          <Route index element={<Profile />} />
          <Route path="update" element={<Update />} />
        </Route>

        {/* <NavBar/> */}
        <Route path="/sponsorpost" element={<SponsorPost />} />
        <Route path="/articles" element={<Show />}></Route>
        <Route
          path="/article/:id"
          element={
            <RequireAdmin>
              <Blogs></Blogs>
            </RequireAdmin>
          }
        ></Route>

        <Route
          path="/posts"
          element={
            <RequireAuth>
              <BlogPost />
            </RequireAuth>
          }
        ></Route>
        {/* <Route path="/blogs" element={<Blogs></Blogs>}></Route> */}
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        {/* <Route path="/blogsone" element={<BlogsOne></BlogsOne>}></Route>
        <Route path="/blogsthree" element={<BlogsThree></BlogsThree>}></Route> */}

        <Route path="/home" element={<HomeWithNav />}></Route>
        <Route path="/ourstory" element={<OurStory />}></Route>
        <Route path="/weddings" element={<Weedings />}></Route>
        <Route path="/corporate" element={<Corporate />}></Route>
        <Route path="/social" element={<Social />}></Route>
        <Route path="/nonprofit" element={<NonProfit />}></Route>
        <Route
          path="/contactus"
          element={
            <RequireAdmin>
              <Contact />
            </RequireAdmin>
          }
        ></Route>
        <Route
          path="profiles"
          element={
            <RequireAuth>
              <Profiles />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/gallery" element={<EventGallery />}>
          <Route index element={<AllGallery />}></Route>
          <Route path="socialgallery" element={<SocialGallery />}></Route>
          <Route path="nonprofitgallery" element={<NonProfitGallery />}></Route>
          <Route path="weddinggallery" element={<WeddingGallery />}></Route>
          <Route path="corporategallery" element={<CorporateGallery />}></Route>
        </Route>

        <Route path="/singlegallery" element={<SingleEvent />}></Route>
        {/* available job */}
        <Route path="/availablejob" element={<AvailableJob />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/location/:id" element={<Location />}></Route>
        <Route path="/decretion/:id" element={<Decrations />}></Route>

        {/* Events Services Package Here  */}
        <Route path="/birthday/:id" element={<BirthdayParties />}></Route>
        <Route path="/anniversary/:id" element={<Anniversary />}></Route>
        <Route path="/engagement/:id" element={<Engagement />}></Route>
        <Route path="/rehearsal/:id" element={<Rehearsal />}></Route>
        <Route path="/wedding/:id" element={<WeddingEven />}></Route>
        <Route path="/floral/:id" element={<FloralDesign />}></Route>
        <Route path="/seasonal/:id" element={<SeasonalEvents />}></Route>
        <Route path="/retirement/:id" element={<Retirement />}></Route>
        <Route path="/religious/:id" element={<Religious />}></Route>
        <Route path="/holyday/:id" element={<Holyday />}></Route>
        <Route path="/fashionCar/:id" element={<FashionCarnival />}></Route>
        <Route path="/newYear/:id" element={<NewYearEvents />}></Route>
        <Route path="/educational/:id" element={<Educational />}></Route>
        <Route path="/salesEvent/:id" element={<SalesEvents />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/concert/:id" element={<ConcertEvents />}></Route>
        <Route path="/fairs/:id" element={<FairsExpos />}></Route>
        <Route path="/homeEvent/:id" element={<WelcomeHome />}></Route>
        <Route path="/paintJam/:id" element={<PaintJam />}></Route>
        <Route path="/Fundrasing/:id" element={<FundrasingEvent />}></Route>
        {/* Set Location  */}
        {/* Wedding Events Part  */}
        <Route path="/annilocation/:pack" element={<AnniLocation />}></Route>
        <Route path="/engLocation/:pack" element={<EngagementLoc />}></Route>
        <Route path="/rehearsalLoc/:pack" element={<RehearsalLoc />}></Route>
        <Route path="/weddingLoc/:pack" element={<WeddingLoc />}></Route>
        <Route path="/FloralLoc/:pack" element={<FloralLoc />}></Route>
        {/* Social Events Part  */}
        <Route path="/birthdayLoc/:pack" element={<BirthdayLoction />}></Route>
        <Route path="/religLoc/:pack" element={<ReligiousLoc />}></Route>
        <Route path="/seasonalLoc/:pack" element={<SeasonalLoc />}></Route>
        <Route path="/holdayLoc/:pack" element={<HolydayLoc />}></Route>
        <Route path="/retireLoc/:pack" element={<RetirementLoc />}></Route>
        {/* Corporet Events Part  */}
        <Route path="/fashionCarLoc/:pack" element={<FashionCarLoc />}></Route>
        <Route path="/educationalLoc/:pack" element={<EducationlLoc />}></Route>
        <Route path="/newYearLoc/:pack" element={<NewYearLoc />}></Route>
        <Route path="/salesLoc/:pack" element={<SalesEventLoc />}></Route>
        <Route path="/producLoc/:pack" element={<ProductLoc />}></Route>
        {/* NON Profit Events  */}
        <Route path="/concertLoc/:pack" element={<ConcertLoc />}></Route>
        <Route path="/painLoc/:pack" element={<PaintJamLoc />}></Route>
        <Route path="/HomeLoc/:pack" element={<WelcomHomeLoc />}></Route>
        <Route path="/fairsLoc/:pack" element={<FairExposLoc />}></Route>
        <Route path="/fundrasLoc/:pack" element={<FundrasingLoc />}></Route>
        {/* Decration  */}

        {/* Wedding Events Decration  */}
        <Route path="/decration/:pack/:id" element={<Decration />}></Route>
        <Route
          path="/Engdecration/:pack/:id"
          element={<EngDecration />}
        ></Route>
        <Route
          path="/Rehardecration/:pack/:id"
          element={<RehearsalDecration />}
        ></Route>
        <Route
          path="/weddingDecration/:pack/:id"
          element={<WeddingDecration />}
        ></Route>
        <Route path="/floralDe/:pack/:id" element={<FloraDe />}></Route>

        {/* Social Events  */}
        <Route
          path="/birthdayDecra/:pack/:id"
          element={<BirthdayDecration />}
        ></Route>
        <Route path="/holydayDec/:pack/:id" element={<HolyDayDec />}></Route>
        <Route path="/religiousDec/:pack/:id" element={<ReligiousDe />}></Route>
        <Route path="/seasonalDe/:pack/:id" element={<SeasonalDe />}></Route>
        <Route path="/retireDe/:pack/:id" element={<RetirementDe />}></Route>
        {/* Corporate Events  */}
        <Route path="/fashionDe/:pack/:id" element={<FashionCarDe />}></Route>
        <Route path="/educatDe/:pack/:id" element={<EducationalDe />}></Route>
        <Route path="/newYearde/:pack/:id" element={<NewYearDe />}></Route>
        <Route path="/salesDe/:pack/:id" element={<SalesDe />}></Route>
        <Route path="/producDe/:pack/:id" element={<ProductDe />}></Route>
        {/* Non Profit Events  */}
        <Route path="/concertde/:pack/:id" element={<ConcertDe />}></Route>
        <Route path="/fairsde/:pack/:id" element={<FairsDe />}></Route>
        <Route path="/paintJamde/:pack/:id" element={<PaintJamDe />}></Route>
        <Route path="/homede/:pack/:id" element={<WelcomeDe />}></Route>
        <Route path="/fundrasde/:pack/:id" element={<Fundrasing />}></Route>

        {/* Order Routes  */}
        <Route path="/order/:pack/:id/:anny" element={<OrderFrom />}></Route>
        <Route
          path="/enOrder/:pack/:id/:enng"
          element={<EnOrderForm />}
        ></Route>
        <Route
          path="/weddOrder/:pack/:id/:wedd"
          element={<WeddingForm />}
        ></Route>
        <Route
          path="/reharOrder/:pack/:id/:reh"
          element={<RehearsalForm />}
        ></Route>
        <Route
          path="/floralorder/:pack/:id/:flow"
          element={<FloralFrom />}
        ></Route>
        {/* Social Check Out form  */}
        <Route
          path="/birthOrder/:pack/:id/:birth"
          element={<BirthdayForm />}
        ></Route>
        <Route
          path="/holdayOrder/:pack/:id/:holy"
          element={<HolydayFrom />}
        ></Route>
        <Route
          path="/Religious/:pack/:id/:reli"
          element={<ReligiousForm />}
        ></Route>
        <Route
          path="/seasonal/:pack/:id/:sean"
          element={<SeasonalFrom />}
        ></Route>
        <Route
          path="/retirefrom/:pack/:id/:reti"
          element={<RetirementFrom />}
        ></Route>
        {/* Corporate Events  */}
        <Route
          path="/fashionfrom/:pack/:id/:fas"
          element={<FashionFrom />}
        ></Route>
        <Route
          path="/Educationfrom/:pack/:id/:edu"
          element={<Educationafrom />}
        ></Route>
        <Route
          path="/newYearfrom/:pack/:id/:newy"
          element={<NewYearFrom />}
        ></Route>
        <Route
          path="/SalesFrom/:pack/:id/:sale"
          element={<SalesFrom />}
        ></Route>
        <Route
          path="/productfrom/:pack/:id/:pro"
          element={<ProductForm />}
        ></Route>
        {/* Non Profit Bokking Form  */}
        <Route
          path="/concerfrom/:pack/:id/:con"
          element={<ConcertFrom />}
        ></Route>
        <Route
          path="/fairsFrom/:pack/:id/:fair"
          element={<FairsForm />}
        ></Route>
        <Route
          path="/fundrasFrom/:pack/:id/:fund"
          element={<FundrasingForm />}
        ></Route>
        <Route path="/WehomeDe/:pack/:id/:weh" element={<HomeFrom />}></Route>
        <Route
          path="/paintFrom/:pack/:id/:pain"
          element={<PaintJamFrom />}
        ></Route>
        <Route path="/blogslike" element={<Posts></Posts>}></Route>
      </Routes>

      <Footer />
      <ToastContainer />

      <Messenger />
      <Modal />
    </div>
  );
}

export default App;
