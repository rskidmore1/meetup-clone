import React, { useState, useEffect } from 'react';
import Comment from '../../components/Comment/Comment';
import Image from 'next/image';
import Modal from '../../components/Event/Modal';
import BottonBar from '../../components/Event/Bottom-Bar';
import { useRouter } from "next/router";

async function retrieveEvent(parentObjectId) {
  const response = await fetch('http://35.86.78.63:8000/events/retrieve-event/' + parentObjectId);
  return response; // Note: Can I make this response.json()?
}

async function saveAttendee(userId, parentObjectId) {
  const url = 'http://35.86.78.63:8000/events/save-attendee';

  const data = { "userId": userId, "eventId": parentObjectId };

  const response = await fetch(
    url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
    Cache: 'default',
  });

  return response;
}

function Event() {

  const router = useRouter();
  const { pid } = router.query;

  const [eventData, setEventData] = useState();
  const [hostsData, setHostsData] = useState();
  const [attendeesData, setAttendeesData] = useState();
  const [modal, setModal] = useState(false);

  const userId = "64221158e1bbeb5fc205ed21"
  // TODO: replace during auth ticket

  useEffect(() => {
    retrieveEvent(pid).then(
      result => result.json()).then(
        data => {
          setEventData(data.event);
          setHostsData(data.hosts[0]);
          setAttendeesData(data.attendees);
        }
      );
  }, [pid]);

  return (
    <div>
      <div className="h-36 mb-10 w-full flex justify-items-start bg-white">
        <div>
          <div className='px-2'>
            <p className="text-header font-bold font-sans">
              {eventData?.title}
            </p>
          </div>
          <div className="flex flex-row gap-4 px-2">
            <Image
              src={hostsData?.picture}
              alt="Host"
              width={50}
              height={50}
            />
            <div >
              <p>Hosted by</p>
              <p className='font-bold float-left'>{hostsData?.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between mx-10">
          <div className='w-2/3 flex flex-col gap-5'>
            <div>
              <Image
                src="/event-image.png"
                alt="Event"
                width={600}
                height={200}
              />
            </div>
            <h2 className='font-bold p-5 self-start'>Details</h2>
            <p>{eventData?.details_paragraph}</p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between">
                <span className="font-bold">Attendees ({eventData?.attendees.length})</span>
                <button type="button" className="text-blue-400">
                  Manage
                </button>
              </div>
              <div>
                <div className="flex flex-row gap-4">
                  {
                    attendeesData?.slice(0, (attendeesData.length <= 4 ? attendeesData.length : 4)).map((attendee, index) => (
                      <div className="flex flex-col gap-2 bg-white rounded-lg w-36 h-44 items-center pt-5" key={index}>
                        <Image
                          src={attendee?.picture}
                          alt="Attendee photo"
                          height={100}
                          width={100}
                        />
                        <span className="font-bold text-lg">
                          {attendee?.name}
                        </span>
                      </div>
                    ))
                  }
                </div>
                <div className="flex flex-row gap-4">
                  {attendeesData?.length > 4 ?
                    (
                      attendeesData?.slice(5, (attendeesData.length <= 8 ? attendeesData.length : 8)).map((attendee, index) => (
                        <div className="flex flex-col bg-white rounded-lg" key={index}>
                          <Image
                            src={attendee?.photo}
                            alt="Attendee photo"
                            height={50}
                            width={50}
                          />
                          <span>
                            {attendee?.name}
                          </span>
                        </div>
                      ))
                    ) : (
                      <></>
                    )}
                </div>
              </div>
            </div>
            <Comment parentObjectId={pid} />
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
                <Image
                  src="/tech-in-oc.png"
                  alt="Group image"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <p>Tech in OC</p>
                <p>Public group</p>
                <p>Rating</p>
              </div>
            </div>
            <div className='w-44 h-fit bg-slate-50 rounded-md flex flex-col'>
              <div className='flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  Monday, March 6, 2023 at 7:00pm to Monday, March 6, 2023 at 9:00pm PST
                  {/* TODO: replace with start and end time */}
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
      <BottonBar title={eventData?.title} setModal={setModal} />
      <Modal modal={modal} setModal={setModal} saveAttendee={saveAttendee} userId={userId} parentObjectId={pid} />
    </div>
  );
}

export default Event
