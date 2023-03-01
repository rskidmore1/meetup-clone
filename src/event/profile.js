import React, { useState, useEffect } from 'react';

async function retrieveEvent() {
  const response = await fetch('http://34.210.145.64:8000/events/retrieve-event');

  return response; // Note: Can I make this response.json()?
}

function EventProfile(props) {
  let title = props.title;
  let host = props.host;
  let hostPhoto = props.hostPhoto;
  let photo = props.photo;
  let location = props.location;
  let detailsParagraph = props.detailsParagraph;
  let startTime = props.startTime;
  let endTime = props.endTime;
  let group = props.group;

  const [apiResponse, setApiResponse] = useState();

  useEffect(() => {
    retrieveEvent().then(
      result => result.json()).then(
        data => setApiResponse(data)
      );
  }, []);

  useEffect(() => {
    console.log(apiResponse);
  }, [apiResponse]);

  return (
    <div>
      <div className="h-36 mb-10 w-full flex justify-items-start bg-white">
        <div>
          <div className='px-2'>
            <p className="text-header font-bold font-sans">
              {title}
            </p>
          </div>
          <div className="flex flex-row gap-4 px-2">
            <img src={require('./host.png')} width="50" height="50" />
            <div >
              <p>Hosted by</p>
              <p className='font-bold float-left'>{host}</p>
            </div>

          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between">
          <div className='w-2/3'>
            <div>
              <img src={require('./event-image.png')} />
            </div>
            <h2 className='float-left font-bold p-5 '>Details</h2>
            <p className='float-left w-full'>{detailsParagraph}</p>
          </div>
          <div className='flex flex-col content-center gap-5 w-1/3'>
            <div className='w-44 h-9 border-2 border-black bg-slate-50 rounded-md flex flex-row justify-center'>
              <span>
                Organizer tools
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>

            </div>
            <div className='w-44 h-32 bg-slate-50 rounded-md flex flex-row'>
              <div>
                <img src={require('./tech-in-oc.png')} />
              </div>
              <div>
                <p>Tech in OC</p>
                <p>Public group</p>
                <p>Rating</p>
              </div>
              {/* TODO: Should we pass a group ID and to look up? */}
            </div>
            <div className='w-44 h-fit bg-slate-50 rounded-md flex flex-col'>
              <div className='flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  Monday, March 6, 2023 at 7:00pm to Monday, March 6, 2023 at 9:00pm PST
                </span>
              </div>
              <div className='flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <p>Venue Name</p>
                  <p>Address</p>
                </div>
              </div>
              <div>
                Map
              </div>
            </div>

            <div>
              Event Chat
            </div>
          </div>
        </div>
      </div>
      {/* TODO: Make this into <Comments /> */}
      <div>
        <h2 className='font-bold'>Comments</h2>
        <div className='flex flex-row'>
          <img src={require("./host.png")} alt="" className='self-start rounded-full' />
          <div className="w-full h-fit bg-white">
            <div className="flex flex-row justify-between">
              <div>Name</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            <div>
              Comment text
            </div>
          </div>
        </div>
        <div>
          {/* Input box here */}
        </div>
      </div>
    </div>
  );
}

export default EventProfile;
