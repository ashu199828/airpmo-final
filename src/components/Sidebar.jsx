import './Sidebar.css'
import logo from '../images/logo.jpg'
import vector from '../images/Vector.jpg'
import job from '../images/job.jpg'
import master from '../images/master.jpg'
import timeline from '../images/timeline.jpg'
import dataInjestion from '../images/dataInjestion.jpg'
import needle from '../images/needle.jpg'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import {
    FaBars
   }from "react-icons/fa";


const Sidebar = ({children}) => {
    
 let navigate = useNavigate();
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);

    return (
        <>
        <div id='sideNavbar'>

        
            <div style={{width: isOpen ? "252px" : "55px"}} className="sideNav">
          <img style={{display: isOpen ? "block" : "none"}} className="logo" src={logo} alt=""/>  
          <div style={{marginLeft: isOpen ? "50px" : "-155px"}} className="bars">
                <FaBars className='bars' onClick={toggle}/>
            </div>
          <hr style={{display: isOpen ? "block" : "none"}}/>
            
            </div>
        
       
         <ul className='sahi'>
            <NavLink to='/dashboard' key='1' className="link">
            <li style={{width: isOpen ?'200px':'7px'}} className="first">
                <div>
                <img className="fImg"  src={vector} alt=""/>
                <p style={{display: isOpen ? "block" : "none"}} className="fP">Dashboard</p>
                
                </div>
              
            </li>
            </NavLink>
            <NavLink to='/jobcard' key='2' className="link">
            <li style={{width: isOpen ?'200px':'7px'}} id='two' className="second">
                <img className="sImg" src={job} alt=""/>
                <p style={{display: isOpen ? "block" : "none"}} className="sP">jobcard</p>
            </li>
            </NavLink>
            <NavLink to='/master' key='3' className="link" >
            <li style={{width: isOpen ?'200px':'7px'}} className="third">
                <img className="tImg" src={master} alt=""/>
                <p style={{display: isOpen ? "block" : "none"}} className="tP">Master</p>
            </li>
            </NavLink>
            <NavLink to='/timeline' key='4' className="link">
            <li style={{width: isOpen ?'200px':'7px'}} className="forth">
                <img className="forthImg" src={timeline} alt=""/>
                <p style={{display: isOpen ? "block" : "none"}} className="forthP">Timeline</p>
            </li>
            </NavLink>
            <NavLink to='/datainjestion' key='5' className="link">
            <li style={{width: isOpen ?'200px':'7px'}} className="fifth">
                <img className="fifthImg" src={dataInjestion} alt=""/>
                <img className="fifthImgTwo" src={needle} alt=""/>
                <p style={{display: isOpen ? "block" : "none"}} className="fifthP">Data Injestion</p>
            </li>
            </NavLink>
            <NavLink to='/qaqc' key='6' className="link" >
            <li style={{width: isOpen ?'200px':'7px'}} className="sixth">
                <p style={{display: isOpen ? "block" : "none"}} className="sixthP">QA/QC</p>
            </li>
            </NavLink>
            <NavLink to='/usermanagement' key='7' className="link" >
            <li style={{width: isOpen ?'200px':'7px'}} className="seventh">
                <p style={{display: isOpen ? "block" : "none"}} className="seventhP">User Management</p>
            </li>
            </NavLink>
            </ul>
            <button style={{display: isOpen ? "block" : "none"}} onClick={()=>navigate('/')} className='sSignout'>Sign Out</button>
            
        </div>
            <main>{children}</main>
        </>
    
         
         
         
         
         
         
         
         
         
        
    );
};

export default Sidebar;