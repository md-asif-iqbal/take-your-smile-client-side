import NavBar from '../shared/NavBar/NavBar';
import  "./Profile.css";
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const Profiles = () => {
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit,reset} = useForm();
  const [user] = useAuthState(auth);
  const email = user?.email;
/*==========================================
      Get Profile info for display
========================================= */
const { isLoading, error, data:details, refetch } = useQuery(['details'], () =>
fetch(`https://secure-escarpment-79738.herokuapp.com/user/${email}`, {
    method: "GET",
     headers: {
       'content-type': 'application/json',
       'authorization': `Bearer ${localStorage.getItem('accessToken')}`
     }
}).then(res =>res.json())
)
if(isLoading){
  return <div className='h-40 mt-10'>{<Loading />}</div>
}
if(error){
   toast.error(error.message);
   signOut(auth);
   navigate('/login')
}
refetch();

/* =======================================
         profile update
 ========================================= */
  const imgStorageKey = '58d3c7355cf533547f2645e98915da5c';
  const onSubmit = data => {
    const name= user?.displayName;
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgStorageKey}`;
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(result => {
        if (result.success) {
            const img = result?.data?.url;
            let bio;
            if (data?.bio) {
              bio = data?.bio;
            }else{
              bio = details?.bio
            }
            let city;
            if (data?.city) {
              city = data?.city;
            }else{
              city = details?.city;
            }
            let postal;
            if (data?.postal) {
              postal = data?.postal;
            }else{
              postal = details?.postal;
            } 
            let country;
            if (data?.country) {
              country = data?.country;
            }else{
              country = details?.country;
            }
            const user = {
                name: name,
                email: email,
                image: img,
                userName: data?.userName,
                phone: data?.phone,
                country: country,
                city: city,
                postal: postal,
                bio: bio
            }

            //send fata on database
            fetch(`https://secure-escarpment-79738.herokuapp.com/user/${email}`, {
                method: "PUT",
                headers: {
                'content-type': "application/json",
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
              if (data?.result?.modifiedCount > 0) {
                const accessToken = data?.token;
                localStorage.setItem('accessToken', accessToken);
                toast.success('You are Successfully Update Profile!');
                refetch();
                reset()
              }
            
            })
        }
    })
}

return (
  <div>
      <NavBar />
  <div className="main-content">
    <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center bg-header" >
      <span className="mask bg-gradient-default opacity-8"></span>
      <div className="container-fluid d-flex align-items-center">
        <div className="row">
          <div className="col-lg-7 col-md-10">
            <h1 className="display-2 text-white text-2xl md:text-3xl">Hello {details?.userName ? details?.userName : details?.name},</h1>
            <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
            <button className="btn btn-info">Edit profile</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid mt--7" id='#edit'>
      <div className="row">
        <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  {
                    details?.image ? <img src={details?.image} className="rounded-circle" alt={user?.name} /> : <img src='https://i.ibb.co/rwGPsQ9/profile.jpg' className="rounded-circle" alt={details?.name} />
                  }
                </div>
              </div>
            </div>
           
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-3">
                    <div>
                      <span className="heading text-info">22</span>
                      <span className="description">Booking</span>
                    </div>
                    <div>
                      <span className="heading text-info">89</span>
                      <span className="description">Favorite</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className='text-xl font-bold capitalize text-info'>
                  {details?.userName ? details?.userName : details?.name}
                </h3>
                <div className="h5 font-weight-500">
                  {email}
                </div>
                <div className="h5 mt-4 ">
                  <i className="ni business_briefcase-24 mr-2 text-info">Phone: <a href="tel:{details?.phone}" className='text-info'>{details?.phone}</a></i>
                </div>
                <div>
                  {
                    details?.country && <i className="ni education_hat mr-2 text-info">{details?.country}, {details?.city}, {details?.postal}</i>
                  }
                  
                </div>
                <hr className="my-4" />
                {
                  details?.bio ?  <p className='text-info'>{details?.bio}</p> : <p className='text-info'>Add Your Bio</p>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 order-xl-1">
          <div className="card shadow">
            <div className="card-header  border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0 text-info">My account</h3>
                </div>
              
              </div>
            </div>
            <div className="card-body">
            <form className='items-stretch' onSubmit={handleSubmit(onSubmit)}>
                <h6 className="heading-small text-muted mb-4">User information</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-lg-6">
                   
                      <div className="form-group focused">
                  
                        <label className="fromControl-label" htmlFor="input-username">Username*</label>
                        
                        <input type="text" id="input-username" className="fromControl fromControl-alternative" placeholder="Username" {...register("userName", { required: {
                        value: true,
                        message: 'user name is required*'
                        } })} />
                      </div>
                      <p className='text-left text-red-500'>
                        {errors.userName?.type === 'required' && <span>{errors.userName.message}</span>}
                    </p>
                    </div>
                 
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="fromControl-label" htmlFor="input-email">Email address</label>
                        <input type="email" id="input-email" className="fromControl fromControl-alternative" value={user?.email} disabled />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="fromControl-label" for="input-fullname">Full name</label>
                        <input type="text" id="input-fullname" className="fromControl fromControl-alternative" value={user?.displayName} disabled  />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="fromControl-label" htmlFor="input-phone">Phone Number*</label>
                        <input type="text" id="input-phone" className="fromControl fromControl-alternative" placeholder="Phone Number" {...register("phone", { required: {
                          value: true,
                          message: 'Number is required*'
                      } })} />
                      </div>
                      <p className='text-left text-red-500'>
                        {errors.phone?.type === 'required' && <span>{errors.phone.message}</span>}
                    </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group focused">
                        <label className="fromControl-label" for="input-city">City</label>
                        <input type="text" id="input-city" className="fromControl fromControl-alternative" placeholder="City" {...register("city")}  />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group focused">
                        <label className="fromControl-label" for="input-country">Country</label>
                        <input type="text" id="input-country" className="fromControl fromControl-alternative" placeholder="Country" {...register("country")} />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="fromControl-label" for="input-country">Postal code</label>
                        <input type="number" id="input-postal-code" className="fromControl fromControl-alternative" placeholder="Postal code" {...register("postal")} />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">profile photo</h6>
                
                <div>
              <label className="fromControl-label capitalize">
                Upload Your profile photo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-secondary"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex">
                    <label className="relative cursor-pointer  rounded-md  px-3 py-2">
                      <span className="font-mono text-secondary">
                        Upload a file
                      </span>
                      <input 
                        id="file-upload"
                        type="file"
                        className="sr-only"
                        {...register("image", { required: {
                          value: true,
                          message: 'image is required*'
                          } })}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <p className='text-left text-red-500'>
                        {errors.image?.type === 'required' && <span>{errors.image.message}</span>}
                    </p>
            </div>
                
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">About me</h6>
                <div className="pl-lg-4">
                  <div className="form-group focused">
                    <label>About Me</label>
                    <textarea rows="6" className="fromControl fromControl-alternative" placeholder="A few words about you ..." {...register("bio")}></textarea>
                  </div>
                </div>
                <div className='text-center'>
                  <input type="submit" value="Update Profile" className='btn btn-primary ' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
    );
};

export default Profiles;