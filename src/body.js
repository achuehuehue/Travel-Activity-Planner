import { DISPLAY_IMAGES } from "./utils.js";
import { useEffect,useState } from "react";

let imageTagList=[];
const arrayLength=DISPLAY_IMAGES.length;
let imgLeftPct=[];


    
    const AppendImages=()=>{
    DISPLAY_IMAGES.forEach((img_link)=>
        imageTagList.push(<img id="slide" className="absolute w-[100%] h-[100%] object-cover transition-all duration-100" src={img_link}></img>)

    )

    
}
    AppendImages();
    const slides=document.querySelectorAll("#slide");
    slides.forEach((slide,index)=>{
    imgLeftPct.push(index*100);
    slide.style.left=`${index*100}%`;
})



const Body=()=>{
    let [counter,setCounter]=useState(0);
   
    setInterval(()=>{
        
        counter++;
            slides.forEach((slide,index)=>{
                slide.style.left=`${imgLeftPct[index]-100}%`;
                imgLeftPct[index]=imgLeftPct[index]-100;
               
            })
            console.log(imgLeftPct)
            setCounter(counter);
        
        
       
    },2000)


    return (
        <div className="flex justify-between items-center bg-[#27314A] m-4 h-[480px]  ">
            <div className="m-4 h-[100%] w-[33%] bg-[#1F325C] basis-1/3 flex flex-col ">
                <div className="flex flex-col items-start justify-center h-[70px] mt-6 pl-4">
                    <h2 className="text-white italic">Destination</h2>
                    <input className="mt-2  px-2 w-[80%] h-[100%]  rounded-md" type="textbox" placeholder="Enter Destination"></input>
                </div>
                <div className="flex flex-col items-start justify-center h-[70px] mt-4 pl-4">
                    <h2 className="text-white italic">Event</h2>
                    <input className="mt-2  px-2 w-[80%] h-[100%]  rounded-md" type="textbox" placeholder="Enter Event"></input>
                </div>
                <div className="flex flex-col items-start justify-center h-[70px] mt-4 pl-4">
                    <h2 className="text-white italic">Budget</h2>
                    <input className="mt-2  px-2 w-[80%] h-[100%]  rounded-md" type="textbox" placeholder="Enter Your Budget"></input>
                </div>
                <div className="flex flex-col items-start justify-center h-[70px] mt-4 pl-4">
                    <h2 className="text-white italic">Mode of Transport</h2>
                    <select className="mt-2  px-2 w-[80%] h-[100%]  rounded-md" type="select"  >
                        <option>Walking</option>
                        <option>Four-wheeler</option>
                        <option>Two-wheeler</option>
                        <option>Public-transport</option>
                    </select>
                </div>
                <button></button>
            </div>
            <div className="m-4 h-[100%] w-[33%] bg-[#1F325C] basis-2/3 relative overflow-hidden">
                {imageTagList}
            </div>
            
        </div>
    )
}

export default Body;