import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

async function retrieveEvent(parentObjectId) {
  const response = await fetch('http://35.86.78.63:8000/events/retrieve-event/' + parentObjectId);
  return response; // Note: Can I make this response.json()?
}

function AttendConfirm() {

  const router = useRouter();
  const [eventData, setEventData] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    const query = router.query;
    retrieveEvent(query.eventid).then(
      result => result.json()).then(
        data => {
          setEventData(data.event);
        }
      );
  }, []);

  return (
    <div className="flex flex-row w-full justify-center">
      <div className="flex flex-col mt-10 p-5 gap-3 w-[525px] h-[250px] bg-white rounded-lg ">
        <span className="font-bold text-3xl">
          You're going!
        </span>
        <div className="flex flex-row justify-center gap-3">
          <Image
            src={eventData?.photo}
            alt="Event Image"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-1">
            <span className="font-bold">
              {eventData?.title}
            </span>
            <div className="flex flex-row gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
              <span>{eventData?.start_time}</span>
            </div>
            <div className="flex flex-row gap-2">
              <button type="button" className="px-5 py-1 text-white bg-blue-500 rounded-lg">
                Add to calendar
              </button>
              <button type="button" className="px-5 py-1 text-white bg-blue-500 rounded-lg">
                Event chat
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AttendConfirm;
