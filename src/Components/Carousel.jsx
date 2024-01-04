import React, {useState} from "react"
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
    {
        url: "https://images.unsplash.com/photo-1702498137770-145fccea4fb0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1702560830828-ebba6d6ad486?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
    },
    {
        url: "https://images.unsplash.com/photo-1702391120327-eb6c640f467a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
    }
   
]

const Carousel = () => {
    const [slide, setSlide] = useState(0)

    const length = sliderData.length
    // console.log(length)

    const prevSlide = () => {
        setSlide(slide === length -1 ? 0 : slide +1);
    };
    const nextSlide = () => {
        setSlide(slide == 0 ? length -1 : slide -1 )
    }


    return ( 
        <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
            <BsArrowLeftSquareFill onClick={prevSlide} className="absolute top-[50%] text-3xl text-black cursor-pointer left-8"/>
            <BsArrowRightSquareFill onClick={nextSlide} className="absolute top-[50%] text-3xl text-black cursor-pointer right-8"/>
            {sliderData.map( (item, index) => (
                <div className={index === slide ? "opacity-100" : "opacity-0"}>
                    {index === slide && <img className="w-full rounded-md" src={item.url} alt="/" />}
                    
                </div>
            ))}
        </div>
     );
}
 
export default Carousel;