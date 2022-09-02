import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsChat, BsFillSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import auth from '../../firebase.init';
import NavBar from '../shared/NavBar/NavBar';
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";
import { useOnClickOutside } from '../../hooks/UseClickOutSide/UseOutsideClick';
import ShareSocial from './ShareSocial';

import './Posts.css'
import axios from 'axios';
import { toast } from 'react-toastify';

interface UserData {

    input: number
}

const Posts = () => {


    const [user] = useAuthState(auth)
    // console.log(user?.photoURL);

    const [posts, setPosts] = useState<any[]>([]);

    const [display, setDisplay] = useState('block')
    const [display1, setDisplay1] = useState('none')
    const [likesQuantity, setQuantity] = useState();
    const [showComment, setShowComment] = useState('');
    const [comment, setComment] = useState('');


    const [value, setValue] = useState<UserData | Number>(0);

    const [userdata, SetUserdata] = useState({})
    const [postId, setPostid] = useState('');
    // console.log(postId)

    const [post, setPost]: any = useState({});


    useEffect(() => {
        fetch('https://secure-escarpment-79738.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [posts])

    const handleCommentPost = (e) => {
        e.preventDefault();

        const comment = e.target.comment.value;
        console.log(comment)
        setComment(comment)
        const name = user?.displayName;
        const img = user?.photoURL;
        var comments = {
            comment: comment,
            userName: name,
            img: img,
        };
        const update = { comments }
        console.log(update)


        const url = `https://secure-escarpment-79738.herokuapp.com/comments/${postId}`

        axios.post(`https://secure-escarpment-79738.herokuapp.com/comments/${postId}`, update)
            .then(function (response) {
                console.log(response);
                toast.success('Comment Added Successfully')
                e.target.reset();
            })

            .catch(function (error) {
                console.log(error);
            });
    }



    const handleComments = (id) => {
        console.log(id)
        setPostid(id)

        const url = `https://secure-escarpment-79738.herokuapp.com/posts/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));


        if (showComment !== 'show') {
            const visible = 'show';
            setShowComment(visible)
            const update = { showComment }
            const url = `https://secure-escarpment-79738.herokuapp.com/allposts/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'

                },
                body: JSON.stringify(update)

            })

                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    // alert('Quantity updated successfully');

                })
        }
        else {
            const visible = 'hidden';
            setShowComment(visible)
            const update = { showComment }
            const url = `https://secure-escarpment-79738.herokuapp.com/allposts/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'

                },
                body: JSON.stringify(update)

            })

                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    // alert('Quantity updated successfully');

                })
        }

        console.log(post)
        setDisplay('block')

        if (display1 === 'none') {
            setDisplay1('block')

            // const click = clicks - 1;
        }
        else {
            setDisplay1('none')
        }

    }



    // console.log(posts)
    let i = 0
    let j = 0

    const click = [''];

    const handleColor = (quantity, id, user, likeStatus) => {
        console.log(quantity, user.email, likeStatus)

        // const input = i + 1

        if (likeStatus === 'liked') {
            setValue(i + 1)
            console.log("i", value)
            if (value === 1) {
                setValue(0)
                console.log("i", value)
            }
        }

        else if (likeStatus === 'unliked') {
            setValue(j + 1)
            console.log("j", value)
            if (value === 1) {
                setValue(0)
                console.log("j", value)
            }
        }


        console.log('Value', value);


        click.push('1')
        console.log('array length', click.length)
        // click.pop()

        if (click.length % 2 === 0) {
            console.log('even')


        }
        else {
            console.log('odd')
        }

        setQuantity(quantity)
        console.log(likesQuantity)

        console.log(quantity);
        // const [user, loading, error] = useAuthState(auth);
        // const name = user.displayName;

        if ((value === 0 && likeStatus === 'liked') || likeStatus === 'unliked') {
            const email = user?.email;
            const totalLikes = quantity + 1;
            const liked = 'liked';

            const update = { totalLikes, email, liked }
            console.log(update);

            const url = `https://secure-escarpment-79738.herokuapp.com/posts/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'

                },
                body: JSON.stringify(update)

            })

                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    // alert('Quantity updated successfully');

                })

        }

        else if (likeStatus === 'liked') {
            const email = user?.email;
            const totalLikes = quantity - 1;
            const liked = 'unliked';

            const update = { totalLikes, email, liked }
            console.log(update);

            const url = `https://secure-escarpment-79738.herokuapp.com/posts/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'

                },
                body: JSON.stringify(update)

            })

                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    // alert('Quantity updated successfully');

                })

        }


    }


    return (
        <div>
            <NavBar />
            <div className="text-neutral overflow-x-hidden sm:overflow-x-hidden mx-auto font-sans  mt-36">
                <h1 className='text-black text-3xl text-center mt-16 font-bold opacity-60 underline'>All <span style={{ color: 'red' }}>Blogs</span> Here</h1>

                <section className=" body-font">
                    <div data-aos="fade-down-right" data-aos-duration="2000" data-aos-easing="ease-in-sine" className="container px-5 mx-auto  py-24 ">
                        <div className="flex gap-10 flex-wrap   w-full justify-around">
                            {
                                posts.map(post =>
                                    <div key={post?._id} className="card w-96 bg-base-100 shadow-xl">
                                        <figure><img data-aos="zoom-in" data-aos-duration="1700" data-aos-easing="ease-in-sine" src={post?.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 data-aos="fade-left" data-aos-duration="1400" data-aos-easing="ease-in-sine" className="card-title">
                                                {post?.name}


                                            </h2>
                                            <p data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in-sine">{post?.body}</p>
                                            <div className="card-actions justify-end relative">
                                                <div data-aos="fade-right" data-aos-duration="1800" data-aos-easing="ease-in-sine" className="flex gap-1">
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <button onClick={() => handleColor(post?.likes, post?._id, user, post?.like)}>
                                                            {
                                                                post?.like === 'liked' ?
                                                                    <BsFillSuitHeartFill style={{ color: 'FF014F' }}></BsFillSuitHeartFill> :
                                                                    <BsSuitHeart >
                                                                    </BsSuitHeart>
                                                            }

                                                        </button>
                                                    </div>
                                                    <span>{post?.likes}</span>
                                                </div>

                                                <div data-aos="fade-right" data-aos-duration="1600" data-aos-easing="ease-in-sine" className="flex gap-1">
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <BsChat></BsChat>
                                                    </div>
                                                    <span>5K</span>
                                                </div>

                                                {/* social share  */}
                                                <div data-aos="fade-right" data-aos-duration="1400" data-aos-easing="ease-in-sine" className='cursor-pointer'>
                                                    <ShareSocial
                                                        posts={posts}
                                                    ></ShareSocial>
                                                </div>

                                            </div>

                                            <label data-aos="fade-up" data-aos-duration="1400" data-aos-easing="ease-in-sine" onClick={() => handleComments(post?._id)} htmlFor="my-modal-6" className="modal-button text-right underlineText cursor-pointer">  Show all comments</label>


                                        </div>

                                    </div>)
                            }

                        </div>
                    </div>

                </section>
            </div>


            {
                < div className='text-neutral'>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle ">
                        <div className="modal-box relative" >
                            <label htmlFor="my-modal-6" className=" btn-sm btn-circle absolute right-2 top-2 cursor-pointer">✕</label>
                            <h3 className="font-bold text-lg">{post?.name}</h3>
                            <p className="py-4">{post?.body}</p>
                            <div className='bg-white rounded-md'>
                                {
                                    post?.comments?.map((c) =>
                                        <div >
                                            <div className='mb-2 rounded-md text-black py-1' style={{ borderBottom: '2px solid black' }}>
                                                <div className='flex px-2'>
                                                    <img className='rounded ' style={{ width: '30px' }} src={c['img']} alt="" />
                                                    <p className='pl-3 text-xl' style={{ display: 'flex', alignItems: 'center', fontFamily: "monospace" }}> {c['userName']}</p>
                                                </div>
                                                <p className='px-2' style={{ display: 'flex', alignItems: 'center' }}> {c['comment']}</p>

                                            </div>

                                        </div>
                                    )

                                }
                            </div>

                            <form className='p-0' style={{ alignItems: 'normal' }} onSubmit={handleCommentPost} action="">
                                <p className='w-3/4'><input type="text" placeholder="Type your comment here" name='comment' className="input input-bordered w-full max-w-xs" /></p>
                                <p className='text-right mt-2'>  <button type="submit" className=' py-3 px-2 rounded-md btn' style={{}}>POST</button></p>

                            </form>
                        </div>
                    </div>
                </div>
            }

        </div >
    );
}
export default Posts;