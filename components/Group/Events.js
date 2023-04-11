import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';


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
      <div className="flex flex-col w-1/4 p-5 bg-white rounded-lg gap-2 text-lg">
        <span className="border-r-2 border-r-blue-600">
          Upcoming
        </span>
        <span>
          Past
        </span>
        <span>
          Draft
        </span>
      </div>
      <div className="flex flex-col gap-5 w-1/2">
        {events?.map((event, index) => (
          <Link href={"/event/" + `${event._id.$oid}`}>
            <div className="flex flex-col  bg-white w-full rounded-lg p-2" key={index}>
              <div className="flex flex-row justify-between">
                <div>
                  <div>
                    {event?.start_time}
                  </div>
                  <div className="text-2xl">
                    {event?.title}
                  </div>
                  <div className="flex flex-row gap-2 mb-2">
                    <span className="ml-[-5px]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </span>
                    <span>
                      {event?.location}
                    </span>
                  </div>
                </div>
                <div>
                  <Image
                    src={event?.photo}
                    alt="Event Image"
                    width={125}
                    height={125}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="text-sm">
                {event?.details_paragraph}
              </div>
              <div className="flex flex-row justify-between w-max-full text-sm">
                <span className='self-end'>
                  {event?.attendees.length} Attendees
                </span>
                <button type="button" className="p-2 border-[1px] border-blue-500 text-blue-500">
                  Attend
                </button>
                {/* TODO: add going or not going after making user log-in */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Events;
