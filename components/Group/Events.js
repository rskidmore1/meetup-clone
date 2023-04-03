import React, { useState, useEffect } from 'react';


async function retrieveEvents(groupName) {
  const response = await fetch('http://35.86.78.63:8000/events/retrieve-events/' + groupName);
  return response;
}

function Events(props) {
  const [events, setEvents] = useState();

  useEffect(() => {
    retrieveEvents(props.groupName).then(
      result => result.json()).then(
        data => {
          setEvents(data.events);
        }
      );
  }, []);

  return (
    <div className="flex flex-row w-[1000px] gap-10">
      <div className="flex flex-col w-1/4 bg-white">
        <span>
          Upcoming
        </span>
        <span>
          Past
        </span>
        <span>
          Draft
        </span>

      </div>
      <div className="flex flex-col gap-5">
        {/* Make into a map and card */}
        {events?.map((event) => (
          <div className="flex flex-col w-3/4 bg-white ">
            <div className="flex flex-row">
              <div>
                <div>
                  <div>
                    {event?.start_time}
                  </div>
                  <div>
                    Friday at Hangar 24
                  </div>
                  <div className="flex flex-row">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </span>
                    <span>
                      Hangar 24 Orange County
                    </span>
                  </div>
                  <div>
                    some picture
                    {/* REplace with picture */}
                  </div>

                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, necessitatibus! Voluptatem id maxime blanditiis atque!
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-5">
                    <span>
                      OOOO
                      {/* Put attendee pictures here */}
                      {/* this will need aggregate query */}
                    </span>
                    <span>
                      15 Attendees
                      {/*  Put number of attendees */}
                      {/* This willl need aggregate query */}
                    </span>
                  </div>
                  <div className="flex flex-row gap-10">
                    <button type="button">
                      Manage
                    </button>
                    {/* Make into a drop down */}
                    <button type="button">
                      Attend
                    </button>

                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events;
