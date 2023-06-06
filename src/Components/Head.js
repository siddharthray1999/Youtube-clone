import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utlis/AppSlice";

const Head = () => {

const dispatch =useDispatch();
const toggleMenuHandler =()=>{
    dispatch(toggleMenu())
};

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
        onClick={()=>toggleMenuHandler()}
        className="h-10 cursor-pointer"
          alt="menu"
          src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/01/hamburger-menu.png?fit=1200%2C600&ssl=1"
        />
        <a href="/">
        <img
        className="h-10 mx-2"
          alt="youtube-logo"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        /></a>
          </div>
        <div className="col-span-10 text-center">
          <input type="text"className="w-1/2 p-2 border border-gray-400 rounded-l-full"/>
          <button className="border border-gray-400 p-2 rounded-r-full">search</button>{" "}
        </div>
        <div className="col-span-1">
          <img
          className="h-8"
            alt="user-icon"
            src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
          />
        </div>
    
    </div>
  );
};

export default Head;
