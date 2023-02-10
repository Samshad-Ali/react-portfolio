import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineEngineering } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { OpenClose } from "../slice";

const Header = () => {
  const dispatch = useDispatch();
    const data = useSelector(state=>state.hamburgerSlice.stage)
  const handleBtn = () => {
    dispatch(OpenClose(true))
  //  console.log(data)
  };

  return (
    <>
      <nav>
        <NavContent title="Portfolio" />
      </nav>
      <button onClick={handleBtn} className={`hamburger`}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export default Header;

export const PhoneHeader = () => {
  const dispatch=useDispatch();
  const data =useSelector(state=>state.hamburgerSlice.stage)
  return (
    <div className={`navPhone ${data ? "phoneNavCome" : ""}`}>
      <NavContent title="Samshad Ali" dispatch={dispatch} />
    </div>
  );
};

const NavContent = ({dispatch,title}) => (
  <>
    <h2>
      {title} <MdOutlineEngineering />
    </h2>
    <div>
      <a
    onClick={()=>{dispatch(OpenClose(true))}}
        href="#home"
      >
        Home
      </a>
      <a
      onClick={()=>{dispatch(OpenClose(true))}}
        href="#work"
      >
        Work
      </a>
      <a
     onClick={()=>{dispatch(OpenClose(true))}}
        href="#skills"
      >
        Skill
      </a>
      <a
       onClick={()=>{dispatch(OpenClose(true))}} 
        href="#contact"
      >
        Contact
      </a>
    </div>
    <a href="mailto: sam606166@gmail.com">
      <button>Email</button>
    </a>
  </>
);
