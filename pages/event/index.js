import React, { useState, useEffect } from 'react';
import Comment from '../../components/Comment/Comment';
import Image from 'next/image';

async function retrieveEvent(parentObjectId) {
  const response = await fetch('http://34.210.145.64:8000/events/retrieve-event/' + parentObjectId);
  return response; // Note: Can I make this response.json()?
}

function Event() {

  let title = 'Some Event';
  let host = "Ryan";
  let hostPhoto = "/src/img/host.png"; // TODO: CHA
  let photo = "./someline";
  let location = "someaddress";
  let detailsParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae erat eleifend, egestas lorem eu, vehicula nisl. Cras bibendum tellus eu purus accumsan, quis aliquet ipsum cursus. Sed nec iaculis urna, ut lobortis lacus. Vestibulum at sem bibendum, porta dolor vel, fermentum tortor. Nulla non aliquam arcu. Integer eget aliquet risus. Nullam non malesuada felis. Sed commodo hendrerit erat, et placerat felis vulputate vel. Suspendisse non porta lectus. Cras in neque gravida, lacinia ex ut, tempus est. Curabitur quis massa non ante porta lacinia. Nunc nec urna ex. Maecenas lorem nunc, finibus sit amet tincidunt sit amet, fringilla euismod dolor. Quisque risus diam, consequat eu posuere maximus, finibus ac nulla. Donec feugiat ante id est elementum, a maximus purus sodales. Nullam efficitur odio vel nisl tincidunt tristique. Maecenas vestibulum bibendum arcu, at rutrum sem hendrerit ut. In a facilisis lacus. Donec vitae venenatis enim, sed commodo nibh. Aenean at blandit est. In id faucibus elit. Phasellus lobortis, nunc nec auctor accumsan, orci odio tempor nibh, ac iaculis urna justo sit amet tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ipsum sit amet ultrices gravida.';
  let startTime = "sometime";
  let endTime = "sometime";
  let group = "somegroupID";

  const [eventData, setEventData] = useState();
  const [hostsData, setHostsData] = useState();
  const [counter, setCounter] = useState(0);

  // const parentObjectId = '64091cf1ee0ae9fed40f14ba';
  const parentObjectId = '6423680881ba99669b08fa7d';

  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };

  useEffect(() => {
    retrieveEvent(parentObjectId).then(
      result => result.json()).then(
        data => {
          setEventData(data.event);
          setHostsData(data.hosts[0]);
        }
      );
  }, []);

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
            <p>{detailsParagraph}</p>
            <Comment parentObjectId={parentObjectId} />
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
      <div class="fixed bottom-0 left-0 z-50 w-full h-20 bg-white flex flex-row justify-between">
        <div className="flex flex-col self-center">
          <span>WED, APR 26 - 6:00 PDT</span>
          <span className="font-bold">{title}</span>
        </div>
        <div className="flex flex-row gap-2 self-center items-center">
          <span>Free</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          </span>
          <span className="p-3 border-[1px] border-blue rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
            </svg>
          </span>
          <span>
            <button type="button" className="px-5 py-3 bg-red-500 rounded-lg font-bold text-white">Attend</button>
          </span>
        </div>
      </div>

      <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h1 className="font-bold">Complete your RSVP</h1>
                <div>Are you bringing anyone?</div>
                <div className="flex flex-row justify-between border-[1px] border-black max-w-full h-24 px-5 items-center">
                  <span>{counter}</span>
                  <div className='flex flex-row gap-5'>
                    <button onClick={decrease}>-</button>
                    <button onClick={increase}>+</button>
                  </div>
                </div>
                <div className="max-w-full mt-4">
                  <button type="button" className="w-full py-2 border-[1px] border-blue-400 text-blue-400 rounded-lg">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Event
