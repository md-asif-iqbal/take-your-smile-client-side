import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsChat, BsFillSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import auth from '../../firebase.init';
import NavBar from '../shared/NavBar/NavBar';

// type Inputs = {
//     name: string,
//     email: string,
//     phone: string,
//     company: string,
//     message: string,
//     date: string,
//     event: string
// };

interface UserData {

    input: number
}


const Liked = () => {


    const [user] = useAuthState(auth)
    const userEamil = user?.email;
    const [posts, setPosts] = useState<any[]>([]);

    const [display, setDisplay] = useState('block')
    const [display1, setDisplay1] = useState('none')
    const [likesQuantity, setQuantity] = useState();


    const [value, setValue] = useState<UserData | Number>(0);

    const [userdata, SetUserdata] = useState({})
    const [postId, setPostid] = useState('')
    const [post, setPost] = useState<any[]>([]);
    // console.log(user?.email)


    const url = `https://secure-escarpment-79738.herokuapp.com/posts/${postId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [])


    const handleComments = (id: any) => {
        setPostid(id)

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

    useEffect(() => {
        fetch('https://secure-escarpment-79738.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(filteredData => filteredData.like === "liked")
                const filter2 = filter.filter(filteredData => filteredData.email === userEamil)
                setPosts(filter)
                // console.log(filter2)
            });
    }, [posts, userEamil])

    // console.log(posts)
    let i = 0
    let j = 0

    const click = [''];

    const handleColor = (quantity: any, id: any, user: any, likeStatus: any) => {
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





        // setClicks((parseFloat(clicks)) + 1);
        // const onClick = click + 1
        // setClicks(onClick)



        // setDisplay('block')
        // if (display === 'block') {
        //     setDisplay('none')
        //     setDisplay1('block')
        //     // const click = clicks - 1;
        // }
        // else {
        //     setDisplay1('none')
        // }




    }


    return (
        <div>
            <NavBar />
            <div className=" mx-auto font-sans pt-36">
                <h1 data-aos="flip-down"
                data-aos-duration="3000" 
                className='text-3xl text-center pt-16 font-bold opacity-60 text-secondary'>All Blogs Here</h1>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 mx-auto  py-24 ">
                        <div className="flex gap-10 flex-wrap   w-full justify-around">
                            {
                                posts.map(post =>
                                    <div data-aos="zoom-in"
                                    data-aos-duration="3000"
                                     key={post['_id']} className="card w-96 shadow-xl">
                                        <figure><img src={post['image']} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-secondary">
                                                {post['name']}

                                            </h2>
                                            <p className='text-secondary'>{post['body']}</p>
                                            <div className="card-actions justify-end">
                                                <div className="flex gap-1">
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <button onClick={() => handleColor(post['likes'], post['_id'], user, post['like'])}>
                                                            {
                                                                post['like'] === 'liked' ?
                                                                    <BsFillSuitHeartFill style={{ color: 'FF014F' }}></BsFillSuitHeartFill> :
                                                                    <BsSuitHeart >
                                                                    </BsSuitHeart>
                                                            }

                                                        </button>
                                                    </div>
                                                    <span>{post['likes']}</span>
                                                </div>

                                                <div className="flex gap-1">
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <BsChat></BsChat>
                                                    </div>
                                                    <span>5K</span>
                                                </div>



                                            </div>
                                            <div style={{
                                                display: `${display1}`
                                            }}>
                                                {
                                                    post['comments'].map((c: any) =>
                                                        <div>
                                                            <div className='flex '>
                                                                <img className='rounded' style={{ width: '30px' }} src={c['img']} alt="" />
                                                                <p className='pl-3 ' style={{ display: 'flex', alignItems: 'center' }}> {c['userName']}</p>
                                                            </div>
                                                            <p className='mb-3' style={{ display: 'flex', alignItems: 'center' }}> {c['comment']}</p>
                                                        </div>)

                                                }
                                            </div>
                                            <button onClick={() => handleComments(post['_id'])}  className='text-right  text-secondary'>Show all comments</button>
                                        </div>

                                    </div>)
                            }

                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
}
export default Liked;