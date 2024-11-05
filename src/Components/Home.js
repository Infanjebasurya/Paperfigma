import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

import './Home.scss'



import customer from "../Components/Assets/Group 531.png"
import en from "../Components/Assets/image 53.png"
import categories from "../Components/Assets/Group.png"
import customized from "../Components/Assets/untitled text 1 11.png"
import wallpaper from "../Components/Assets/untitled text 1 3.png"
import stickers from "../Components/Assets/untitled text 1 5.png"
import grass from "../Components/Assets/untitled text 1 8.png"
import Room from "../Components/Assets/untitled text 1 9.png"
import catology from "../Components/Assets/untitled text 1 10.png"


import stylih from "../Components/Assets/image 56.png"


import box from "../Components/Assets/Group 27241.png"
import box1 from "../Components/Assets/Group 27246.png"
import box2 from "../Components/Assets/Group 27247.png"
import box3 from "../Components/Assets/Group 281.png"

import box4 from "../Components/Assets/Group 27241 (1).png"
import box5 from "../Components/Assets/Group 27253.png"
import box6 from "../Components/Assets/Group 27251.png"
import box7 from "../Components/Assets/Group 27254.png"
import box8 from "../Components/Assets/Group 27248.png"
import box9 from "../Components/Assets/Group 27250.png"

import Sellers from "../Components/Assets/image 60.png"
import Sellers1 from "../Components/Assets/image 67.png"
import Sellers2 from "../Components/Assets/Rectangle 229.png"
import Sellers3 from "../Components/Assets/image 61.png"

import Sellers4 from "../Components/Assets/Rectangle 235.png"
import Sellers5 from "../Components/Assets/image 66.png"
import Sellers6 from "../Components/Assets/image 65.png"
import Sellers7 from "../Components/Assets/ty.png"
import Sellers8 from "../Components/Assets/unsplash_vC8wj_Kphak (1).png"
import Sellers9 from "../Components/Assets/image 62.png"
import Sellers10 from "../Components/Assets/Rectangle 230.png"


import New from "../Components/Assets/Rectangle 227.png"
import New1 from "../Components/Assets/Rectangle 228.png"
import New2 from "../Components/Assets/image 69.png"
import New3 from "../Components/Assets/image 68.png"

import Rooms from "../Components/Assets/image 71.png"
import Rooms1 from "../Components/Assets/Vector.png"
import Rooms2 from "../Components/Assets/iPhone 13 Pro.png"
import Rooms3 from "../Components/Assets/Group 27116.png"
import Rooms4 from "../Components/Assets/image 92.png"


function Home() {
    return (
        <div className='container'>
            <div className='container1'>

                <div className='common'>
                    <div className='common1'>
                        <h1>Paper<span>wall</span></h1>
                    </div>

                    <div className='common2'>
                        <form>
                            <input type='search' placeholder='search for art, kids,abstract wallpaper'></input>
                        </form>
                        <CiSearch className='search' />
                    </div>
                    <div className='custom'>
                        <img src={customer} height='25px'></img>
                    </div>


                    <div className='common3'>
                        <img src={en} height='10px'></img>
                    </div>
                    <div className='common4'>
                        <select>
                            <option>EN</option>
                            <option>EN</option>
                            <option>EN</option>
                        </select>
                    </div>

                    <div className='common5'>
                        <HiOutlineShoppingCart className='shop' />
                        <h5>Cart</h5>
                    </div>
                    <div className='common5'>
                        <button>Login</button>

                    </div>

                </div><hr></hr>

                <div className='overall'>
                    <div className='overall1'>
                        <img src={categories}></img>
                        <img src={customized}></img>
                        <img src={wallpaper}></img>
                        <img src={stickers}></img>
                        <img src={grass}></img>
                        <img src={Room}></img>
                        <img src={catology}></img>

                    </div>
                    <div className='overall2'>
                        <h5 className='Categories1'>Categories</h5>
                        <h5 className='Customized1'>Customized</h5>
                        <h5 className='Wallpaper1'>Wallpaper</h5>
                        <h5 className='Stickers1'>Stickers</h5>
                        <h5 className='Artificial1'>Artificial Grass</h5>
                        <h5 className='Visualizer1'>Room Visualizer</h5>
                        <h5 className='Catalouge1'>E-Catalouge</h5>
                    </div>
                </div>

                <div className='stylish'>
                    <img src={stylih} height='600px' width='1600px'></img>
                    <div className='most'>
                        <h1>Paper<span>wall</span></h1>
                        <h2>An Stylish and most beautiful Wallpaper</h2>
                    </div>

                </div>

                <div className='box'>

                    <div className='box1'>
                        <img src={box}></img>
                        <h4>Customized Wallpaper</h4>
                        <p>Lorem ipsum sit amet, consectetur adipiscing<br></br>sed do eiusmod tempor</p>
                        <button>Shop Now</button>
                    </div>

                    <div className='box2'>
                        <img src={box1}></img>
                        <h4>Normal Wallpaper</h4>
                        <p>Lorem ipsum sit amet, consectetur adipiscing<br></br>sed do eiusmod tempor</p>
                        <button>Shop Now</button>
                    </div>
                    <div className='box3'>
                        <img src={box2}></img>
                        <h4>Sticker Wallpaper</h4>
                        <p>Lorem ipsum sit amet, consectetur adipiscing<br></br>sed do eiusmod tempor</p>
                        <button>Shop Now</button>

                    </div>
                    <div className='box4'>
                        <img src={box3}></img>
                    </div>
                </div>


                <div>
                    <div className='back'>
                        <div className='boxi4'>
                            <img src={box4}></img>
                            <img src={box4}></img>
                            <img src={box4}></img>
                            <img src={box4}></img>
                            <img src={box4}></img>
                        </div>

                        <div className='boxi5'>
                            <img src={box5} className='b5'></img>
                            <img src={box6} className='b6'></img>
                            <img src={box7} className='b7'></img>
                            <img src={box8} className='b8'></img>
                            <img src={box9} className='b9'></img>
                        </div>

                        <div className='tags'>
                            <h3>1500+</h3>
                            <h3 className='years'>10 Years</h3>
                            <h3 className='million'>1 Million+</h3>
                            <h3 className='longs'>Long life</h3>
                            <h3 className='free'>Free+</h3>
                        </div>

                        <div className='tags1'>
                            <h5 className='collections'>Collections</h5>
                            <h5 className='of'>of innovation</h5>
                            <h5 className='mers'>Customers</h5>
                            <h5 className='durability'>Durability</h5>
                            <h5 className='delivery'>24*7 Delivery</h5>
                        </div>
                    </div>

                    <div className='seller'>
                        <div className='seller1'>
                            <h2>Best Sellers</h2>
                            <button>VIEW ALL</button>
                        </div>

                        <div className='sellers2'>
                            <img src={Sellers}></img>
                            <img src={Sellers1}></img>
                            <img src={Sellers2}></img>
                            <img src={Sellers3}></img>
                        </div>
                    </div>

                    <div className='design'>
                        <div className='design1'>
                            <h4>Bharat, Rich Indian Wallpaper<br></br>Design</h4>
                            <p>₹4000/Roll<br></br>included Tax | Free Shipping</p>
                        </div>

                        <div className='design2'>
                            <h4>Vincent Van Gough Almond<br></br>Blossom Wallpaper</h4>
                            <p>₹3500/Roll<br></br>included Tax | Free Shipping</p>
                        </div>

                        <div className='design3'>
                            <h4>Banaras, indian Carpet Design<br></br>Wallpaper</h4>
                            <p>₹4500/Roll<br></br>included Tax | Free Shipping</p>
                        </div>

                        <div className='design4'>
                            <h4>A Story by the Garden <br></br>Wallpaper</h4>
                            <p>₹4500/Roll<br></br>included Tax | Free Shipping</p>
                        </div>


                    </div>

                </div>



                <div className='main'>


                    <div className='Artificial'>
                        <h2 className='art'>Artificial Grass</h2>
                        <button className='viewbtn'>VIEW ALL</button>
                    </div>
                    <div className='space'>
                        <p>The art of green space for luxury interiors are mostly planned by using our quality artificial artificial grass in large sectors of corporate industry, residences , commercial shops and other<br></br> decorative elements. Some designers used to hung in walls to give a pleasant wall finish to their customers. </p>
                    </div>
                    <div className='seller4'>
                        <img src={Sellers4}></img>
                        <img src={Sellers5}></img>
                        <img src={Sellers6}></img>
                    </div>


                    <div className='designs'>
                        <div className='designs1'>
                            <h4>Vertical Gardens</h4>
                            <p>₹3500/Roll<br></br>included Tax | Free Shipping</p>
                        </div>
                        <div className='designs2'>
                            <h4>indoor Mats - Non UV</h4>
                            <p>₹3500/Roll<br></br>included Tax | Free Shipping</p>
                        </div>
                        <div className='designs3'>
                            <h4>Outdoor Mats - UV protect</h4>
                            <p>₹3500/Roll<br></br>included Tax | Free Shipping</p>
                        </div>
                    </div>


                </div>


                <div className='popular'>
                    <div className='most'>
                        <h2>Most Popular Wallpapers</h2>
                        <button>VIEW ALL</button>
                    </div>

                    <div className='sellrs7'>
                        <img src={Sellers7}></img>
                        <img src={Sellers8}></img>
                        <img src={Sellers9}></img>
                        <img src={Sellers10}></img>
                    </div>

                    <div className='designss'>
                        <div className='designss1'>
                            <h4>Bharat, Rich Indian Wallpaper<br></br>Design</h4>
                            <p>₹4000/Roll<br></br>included Tax | Free Shipping</p>
                        </div>
                        <div className='designss2'>
                            <h4>Vincent Van Gough Almond<br></br>Blossom Wallpaper</h4>
                            <p>₹3500/Roll<br></br>included Tax | Free Shipping</p>
                        </div>
                        <div className='designss3'>
                            <h4>Banaras, indian Carpet Design<br></br>Wallpaper</h4>
                            <p>₹4500/Roll<br></br>included Tax | Free Shipping</p>
                        </div>
                        <div className='designss4'>
                            <h4>A Story by the Garden <br></br>Wallpaper</h4>
                            <p>₹4500/Roll<br></br>included Tax | Free Shipping</p>
                        </div>
                    </div>
                </div>


                <div className='Araivel'>
                    <div className='NewA'>
                        <h2>New Arrivals</h2>
                        <button>VIEW ALL</button>
                    </div>
                    <div className='sellrs7'>
                        <img src={New}></img>
                        <img src={New1}></img>
                        <img src={New2}></img>
                        <img src={New3}></img>
                    </div>
                    <div className='designss'>
                        <div className='designss1'>
                            <h4>Bharat, Rich Indian Wallpaper<br></br>Design</h4>
                            <p>₹4000/Roll<br></br>included Tax | Free Shipping</p>
                        </div>
                        <div className='designss2'>
                            <h4>Vincent Van Gough Almond<br></br>Blossom Wallpaper</h4>
                            <p>₹3500/Roll<br></br>included Tax | Free Shipping</p>
                        </div>
                        <div className='designss3'>
                            <h4>Banaras, indian Carpet Design<br></br>Wallpaper</h4>
                            <p>₹4500/Roll<br></br>included Tax | Free Shipping</p>
                        </div>
                        <div className='designss4'>
                            <h4>A Story by the Garden <br></br>Wallpaper</h4>
                            <p>₹4500/Roll<br></br>included Tax | Free Shipping</p>
                        </div>
                    </div>
                </div>


                <div className='Rooms'>
                    <div className='visualizer'>
                        <h3>Room Visualizer</h3>
                        <p>Take inspiration to the next level with Room Visualizer<br></br>
                            Reinvent your room with new wallpaper using virtual design tool. Snap a<br></br> photo of your room and select the options in wallpaper in seconds.</p>
                    </div>
                    <div className='Rooms1'>
                        <img src={Rooms} className='candy'></img>
                        <img src={Rooms1} className='Hand'></img>
                        <img src={Rooms2} className='iphone'></img>
                        <button>Try Now</button>
                        <img src={Rooms3} className='play'></img>
                        <img src={Rooms4} className='scan'></img>
                        <h5>Also Download App</h5>
                        <h6>or</h6>
                       <h4>Scan QR</h4>
                    </div>
    
                </div>



                <div className='back1'>
                </div>



            </div>
        </div>
    )
}

export default Home