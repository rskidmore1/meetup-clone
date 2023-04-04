import React, { useState, useEffect } from 'react';
import Image from 'next/image';

async function retrieveUser(parentObjectId) {
  const response = await fetch('http://35.86.78.63:8000/user/retrieve-user/' + parentObjectId);
  return response; // Note: Can I make this response.json()?
}

function Event() {

  const parentObjectId = '6418ea4bfa9f8c7a6804cf77';
  const [user, setUser] = useState();

  useEffect(() => {
    retrieveUser(parentObjectId).then(
      result => result.json()).then(
        data => {
          setUser(data.user);
        }
      );
  }, []);

  return (
    <div className="flex flex-row justify-between mx-10">
      <div className='w-1/4'>Make group info here</div>
      <div className='w-1/2 flex flex-col gap-5'>
        <div className='flex flex-col'>
          <span>{user?.name}</span>
          <span>Organizer</span>
          <span>Give member a custom title</span>
        </div>
        <div className='flex flex-row'>
          <span className='flex flex-row'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
            <span>Edit profile</span>
          </span>
          <span className='flex flex-row'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span>Email settings</span>
          </span>
          <span>Step down as Organizer</span>
          <span>Leave group</span>
        </div>
        <div className='flex flex-row'>
          <span className='mr-5'><span className='font-bold'>Location:</span><br /><span>Irvine, CA</span></span>
          <span className='mr-1'><span className='font-bold'>Organizer since:</span><br /><span>March 5, 2023</span></span>
          <span><span className='font-bold'>Has attended:</span><br /><span>3 Meetups</span></span>
        </div>
        <div>
          <p className='font-bold'>Networks:</p>
          <div className='flex flex-row'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
              {/* TODO: make facebook logo */}
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
              {/* TODO: make twitter logo */}
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
              {/* TODO: make instagram logo */}
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
              {/* TODO: make Linkedin logo  */}
            </span>
          </div>
        </div>
        <div>
          <p className='font-bold'>Introduction:</p>
          <p>{user?.introduction}</p>
        </div>
        <div>
          <p className='font-bold'>What Ryan is saying about this Meetup Group</p>
          <div className='flex flex-row gap-1'>
            <span>Review this group</span>
            <span>Manage other members' group reviews</span>
          </div>
        </div>
        <div>
          <span>Looking to post a greeting? Start a conversation instead.</span>
        </div>
      </div>
      <div className='flex flex-col content-center gap-5 w-1/4'>
        <Image
          src={user?.picture}
          alt="user"
          width={300}
          height={300}
        />
        <span>Change you photo</span>
        <span>Photos 2</span>
        <div>
          Member of ## other Meetups
        </div>
      </div>
    </div>
  );
}

export default Event
