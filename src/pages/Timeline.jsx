import React from 'react';
import coolicon from '../images/coolicon.jpg'
import user from '../images/user.jpg'
import remove from '../images/remove.jpg'
import edit from '../images/edit.png'
import search from '../images/searchicon.jpg'

import shadow from '../images/Shadow.jpg'
import './timeline.css'
import Sidebar from '../components/Sidebar';


const Timeline = () => {
    return (
        <>
        <Sidebar/>
         <h1 className='headT'>Timeline</h1>
        <input className="search" type="text" placeholder="search"/>
        <img className='timeS' src={search} alt="" />
        <img className="cool"  src={coolicon} alt="" srcSet=""/>
        <img className="user"  src={user} alt="" srcSet=""/>
        <hr className="main"></hr>
        <div className='timeline'>
            <img className='shadow' src={shadow} alt="" srcSet="" />
            <h1 className='users'>Users</h1>
            <input className='tSearch'placeholder='search' type="text" />
            <img className='searchIcon' src={search} alt="" />
            <div className='tTable'>
            <p className='tName'>Name</p>
            <p className='tCompany'>Company</p>
            <p className='tRole'>Role</p>
            <p className='tEmail'>Email</p>
            <p className='tMobile'>Mobile</p>
            <p className='tActions'>Actions</p>
            
        </div>
        <div className='tOContents'>
            <p className='adit'>Adit</p>
            <p className='arabtech'>Arebtech</p>
            <p className='tClient'>Client</p>
            <p className='email'>Adith80@gmail.com</p>
            <p className='number'>529255077</p>
            <img className='edit' src={edit} alt="" />
            <img className='remove' src={remove} alt="" />
        </div>
        <div className='tTContents'>
        <p className='adit'>Name</p>
            <p className='arabtech'>Company</p>
            <p className='tClient'>Role</p>
            <p className='nEmail'>Email</p>
            <p className='number'>Mobile</p>
            <img className='edit' src={edit} alt="" />
            <img className='remove' src={remove} alt="" />
        </div>
        <div className='tThreeContents'>
        <p className='adit'>Name</p>
        <p className='arabtech'>Company</p>
            <p className='tClient'>Role</p>
            <p className='nEmail'>Email</p>
            <p className='number'>Mobile</p>
            <img className='edit' src={edit} alt="" />
            <img className='remove' src={remove} alt="" />
        </div>
        <div className='tFContents'>
        <p className='adit'>Name</p>
        <p className='arabtech'>Company</p>
            <p className='tClient'>Role</p>
            <p className='nEmail'>Email</p>
            <p className='number'>Mobile</p>
            <img className='edit' src={edit} alt="" />
            <img className='remove' src={remove} alt="" />
        </div>
        <div className='tFiveContents'>
        <p className='adit'>Name</p>
        <p className='arabtech'>Company</p>
            <p className='tClient'>Role</p>
            <p className='nEmail'>Email</p>
            <p className='number'>Mobile</p>
            <img className='edit' src={edit} alt="" />
            <img className='remove' src={remove} alt="" />
        </div>
        
            
        </div>
        </>
    );
};

export default Timeline;