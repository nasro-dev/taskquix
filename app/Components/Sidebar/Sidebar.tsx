"use client"
import React from 'react'
import { styled } from 'styled-components'
import {useGlobalState} from "@/app/context/globalprovider"
import Image from "next/image"
import Link from 'next/link'
import menu from "@/app/utils/menu"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
function Sidebar() {
  const {theme} = useGlobalState();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string)=>{
    router.push(link);
  }
  return (
    <SidebarStyles theme={theme}>
      <div className="profile">
        <div className="profile-overlay">
        </div>
        <div className="profile-img">
          <Image  width={70} height={70} src="/nasro-ai.jpg" alt="profile-pic"/>
        </div>
        <h1>
          <span>Nasro</span>
          <span>Dev</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item)=>{
           const link = item.link;
           return (<li onClick={()=>{handleClick(link)}} 
                   className={`nav-item ${pathname === link ? "active" : ""}`}>
            {item.icon}
            <Link href={link}>{item.title}</Link>
           </li>)
        })}
      </ul>
      <button></button>

    </SidebarStyles>
  )
}

const SidebarStyles = styled.nav`
     position: relative;
     width: ${(props) => props.theme.sidebarWidth};
     background-color: ${(props)=> props.theme.colorBg2};
     border: 2px solid ${(props)=>props.theme.borderColor2};
     border-radius:1rem;

     display: flex;
     flex-direction: column; 
     justify-content: space-between;
     
     color: ${(props) => props.theme.colorGrey3};
     .profile{
        margin: 1.5rem;
        position:relative;
        padding: 1rem 0.8rem;
        border-radius: 1rem;
        cursor: pointer;
        font-weight: 500;
        color: ${(props) => props.theme.colorGrey0};
        display:flex;
        align-items: center;
        .profile-overlay{
            position: absolute;
            top:0;
            left:0;
            width:100%;
            height: 100%;
            background-filter: blur(10px);
            z-index: 0;
            background: ${(props) => props.theme.colorBg3};
            tansition: all 0.55s linaer;
            border-radius: 1rem;
            border: 2px solid  ${(props) => props.theme.borderColor2};
            opacity:0.2;
        }
       
     h1{
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      line-height: 1.5rem; 
     }
     .profile-img, h1{
      position:relative;
      z-index:1;
     }
     .profile-img {
        flex-shrink: 0;
        display: inline-block;
        oveflow: hidden;
        border-radius: 100%;

        img{
          border-radius: 100%;
          transition: all 0.5 ease;
          width:70px;
          height:70px;
        }
      }
      h1{
       margin-left :0.8rem;
       font-size: clamp(1.2rem, 4vw, 1.4rem);
       line-height: 100%;
      }
      &:hover{
        .profile-overlay{
          opacity:1;
          border: 2px solid ${(props) => props.theme.borderColor2}; 
        }
        img {
          transform: scale(1.1);
        }
      }
    
    
    
      }
   

      .nav-item{
        position: relative;
        display: grid;
        grid-template-columns: 40px 1fr;
        align-items: center;
        padding: 0.8rem 1rem 0.9rem 2.1rem;
        margin: 0.3rem 0 ;
        
        cursor: pointer;
        &::after{
          position:absolute;
          content: "";
          left:0;
          top:0;
          width: 0%;
          height: 100%;
          background-color: ${(props) => props.theme.activeNavLinkHover}; 
          z-index:1;
          transition: all 0.3s ease-in-out;
        }
        &::before {
          position: absolute;
          content: "";
          right:0;
          top:0;
          width: 0%;
          height: 100%;
          background-color: ${(props) => props.theme.colorGreenDark}; 
          border-button-left-radius: 5px;
          border-top-left-radius:5px;
        }

        a{
          font-weight: 500;
          transition: all 0.3s ease-in-out;
          z-index: 2;
        }

        i{
          display: flex;
          align-items: center;
          color: ${(props) => props.theme.colorIcons};
        }

        &:hover{
          &::after{
            width: 100%;
          }
        }
      }
      .active{
        background-color:  ${(props) => props.theme.activeNavLink};

        i, a {
          color:  ${(props) => props.theme.colorIcons2};
        }
      }
      .active::before{
        width:0.3rem;
      }
      > button {
        margin: 1.5rem;
      }
`

export default Sidebar