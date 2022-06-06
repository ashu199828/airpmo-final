import React from 'react';
import './Jobcard.css';
import coolicon from '../images/coolicon.jpg'
import nerve from '../images/nerve.jpg'
import notepad from '../images/notepad.jpg'
import search from '../images/searchicon.jpg'
import user from '../images/user.jpg'
import Sidebar from '../components/Sidebar';


const Jobcard = () => {

  
    return (
        <>
        <Sidebar/>
        <div>
        <h1 className='jobA'>Activities</h1>
        <input className="search" type="text" placeholder="search"/>
        <img className='jSearch' src={search} alt="" />
        <img className="cool"  src={coolicon} alt="" srcSet=""/>
        <img className="user"  src={user} alt="" srcSet=""/>
        </div>
        <hr className="main"/>
        <div>
            <input className="client" type="text" placeholder="Choose Client"/>
            <img className='clientS' src={search} alt="" />
            <input className="project" type="text" placeholder="Choose Project"/>
            <img className='projectS' src={search} alt="" />
        </div>
        <div className="mainBody">
            <img className='notepadJ' src={notepad} alt="" />
            <p className='jobCardP'>Job Cards Assigned </p>
            <p className='jobCardNum'>800</p>

        </div>
        <div className="mainBodyTwo">
            <img className='nerveJ' src={nerve} alt="" />
        <p className='myJobCard'>My Job Cards</p>
        <p className='myJobCardNum'>400</p>
        </div>
        </>
    );
};

export default Jobcard;