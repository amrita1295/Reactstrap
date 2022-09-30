// export default App;
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination} from "swiper";


const data=[
  {
    id:1,
    img:"https://user-images.githubusercontent.com/56605853/193028866-cb7bdd3c-cffd-406c-8e24-370f479c18a8.jpg" ,
    username: 'Alex',
    logo:"https://user-images.githubusercontent.com/56605853/193040300-178a17d2-57dd-48ad-8daf-7e2965544dfb.png",
    testimonial:"AlgoExpert is a good interview prep course that will help you learn about data structures & algorithms and coding. However, it's lacking in other important aspects of tech interviews (mainly systems design and soft skills), which doesn't allow me to fully recommend its use for software interview preparation"
  },
  {
    id:2,
    img:"https://user-images.githubusercontent.com/56605853/193033355-312911cf-0e0e-4e17-b9ee-f87cbb314445.jpg" ,
    username: 'Corbin',
    logo:"https://user-images.githubusercontent.com/56605853/193040300-178a17d2-57dd-48ad-8daf-7e2965544dfb.png",
    testimonial:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ."
  },
  {
    id:3,
    img:"https://user-images.githubusercontent.com/56605853/193033362-2552237e-b10d-4e22-9746-57ad075aaa74.jpg" ,
    username: 'Fernandez',
    logo:"https://user-images.githubusercontent.com/56605853/193040300-178a17d2-57dd-48ad-8daf-7e2965544dfb.png",
    testimonial:"LeetCode is a fine tool for honing your programming skills in preparation for your big tech interviews. However, because recruiters are looking for much more than just competent coders."
  },
  {
    id:4,
    img:"https://user-images.githubusercontent.com/56605853/193033366-665d0307-ab24-4772-b9ed-b88efc97e669.jpeg" ,
    username: 'Jonas',
    logo:"https://user-images.githubusercontent.com/56605853/193040300-178a17d2-57dd-48ad-8daf-7e2965544dfb.png",
    testimonial:"Registered users (commonly referred to as Redditors submit content to the site such as links, text posts, images, and videos, which are then voted up or down."
  }

]
export default function App() {
 
  return (
    <>
    <div className="tex" style={{color: "brown", fontSize:"50px",fontWeight:"bold"}} >TESTIMONIALS</div>

    <h3 style={{fontSize:"21px", fontWeight:"normal",textAlign:"center"}}>Subscribe easy tutorials YouTube channel to watch more videos.</h3>
   
    <div class="bg" ></div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
        {data.map(user=>(
          
          <SwiperSlide key={user.id}>
            
            <div> <img src={user.img} /> </div>  

            <div className="writing" 
            style={{ 
              border:"10px" , 
              fontSize:"25px", 
              fontFamily:'sans-serif'
              }}>
                {user.username}
            </div>
            
            <div style={{width:"180px",display:"block",marginTop:"-40px",border:"2px",marginLeft:"104px",marginRight:"150px"}}>
              <img  src={user.logo}/>
            </div>
            <div className="para"
             style={{
             
              maxHeight:"200px",
              maxWidth:"360px",
              right:"0px",
              marginTop:"-35px", 
              fontFamily:"initial",
              textAlign:"center"
            }}>
              
              {user.testimonial}
              
              </div>
            </SwiperSlide>
        ))
        }
   
      </Swiper>
    </>
  );
  
}


