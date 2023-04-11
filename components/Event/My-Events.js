import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link'

async function retrieveGroups() {
  const response = await fetch('http://35.86.78.63:8000/group/retrieve-groups');
  return response; // Note: Can I make this response.json()?
}

async function retrieveEvents(groupName) {
  const response = await fetch('http://35.86.78.63:8000/events/retrieve-events/' + groupName);
  return response;
}

export default function MyGroups() {
  const [allEvents, setAllEvents] = useState([]);
  const [eventsThisWeek, setEventsThisWeek] = useState([]);

  const filterDate = (events) => {
    const currentEvents = events.filter(event => event.week === 'this');
    return currentEvents;
  }

  useEffect(() => {
    retrieveGroups().then(
      result => result.json()).then(
        data => {
          data.groups.map((group) => {
            retrieveEvents(group.name).then(
              result => result.json()).then(
                data => {
                  setEventsThisWeek([...eventsThisWeek, ...filterDate(data.events)]);
                }
              );
          })
        }
      );
  }, []);

  return (
    <div className="flex flex-col px-10 py-5 border-b-[1px] border-b-gray-500 ">
      <h1 className="font-bold text-2xl self-center">Events This Week</h1>

      <div className="flex flex-row flex-wrap justify-center gap-5 pt-5">
        {eventsThisWeek?.map((event) => (
          <Link href={"/event/" + `${event._id.$oid}`}>
            <div className="flex flex-row bg-white gap-5 p-3 rounded-lg w-fit h-fit">
              <Image
                src={event.photo}
                alt="Event photo"
                width={150}
                height={150}
              />
              <div className="flex flex-col">
                <span>
                  {event.title}
                </span>
                <div className="flex flex-row gap-2">
                  <div>{event.day}</div>
                  <div>{event.start_time}</div>
                </div>
                <span>
                  {event.location}
                </span>
                <span>{event.group}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
