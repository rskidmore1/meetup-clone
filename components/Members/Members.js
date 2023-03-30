import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';
import Image from "next/image";


async function retrieveMembers(groupName) {
  const response = await fetch('http://35.86.78.63:8000/user/retrieve-members/' + `${groupName}`);
  return response; // Note: Can I make this response.json()?
}

function Members(props) {
  // const [scrollItems, setScrollItems] = useState(Array.from({ length: 20 }));
  // const [hasMore, setHasMore] = useState(true);
  const [scrollItems, setScrollItems] = useState();
  const [hasMore, setHasMore] = useState(true);
  const [members, setMembers] = useState();

  console.log(props.groupName);

  useEffect(() => {
    retrieveMembers(props.groupName).then(
      result => result.json()).then(
        data => {
          setMembers(data.members);
          setScrollItems(data.members.slice(0, 11))
        }
      );
  }, []);

  const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
  };

  // console.log(members?.slice(scrollItems?.length, members?.length));

  const fetchMoreData = () => {
    if (members.length === scrollItems.length) {
      setHasMore(false);
      return;
    }

    setScrollItems(scrollItems => [...scrollItems, members.slice(scrollItems.length - 1, members.length - 1)]);
    // setScrollItems(members);
    console.log('From fetchMore');

  };

  return (
    <div className="flex flex-row">
      <div className="flex w-1/3">
        <div className="flex flex-col gap-5 px-2">
          <div>
            {/* TODO: make into tabs list */}
            <div className="flex flex-row justify-between">
              <span>
                All Members:
              </span>
              <span>
                {members?.length}
              </span>
            </div>
            <div>Leadership team</div>
          </div>
          <div>
            <h1 className="font-bold">Organizer Tools</h1>
            <div className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              <span>Customize member roles</span>
            </div>
            <div className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span>Download member list</span>
            </div>
          </div>
          <div>
            <h1 className="font-bold">Get to know your members</h1>
            <span>With the Pro registration form, you can get key attendee details like email address and job title.</span>
            <button type='button' className="w-full border-[1px] border-blue-400">
              Try Pro for free
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-2/3 bg-white px-5 py-3 rounded-lg" >
        <InfiniteScroll
          dataLength={10}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {scrollItems?.map((i, index) => (
            <div key={index} className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  {/* <Image
                    src={i.picture}
                    alt="Member"
                    width={50}
                    height={50}
                  /> */}
                </div>
                <div className="flex flex-col">
                  <span>
                    {i.name}
                  </span>
                  <span>
                    Visited {i.last_visited_date}
                  </span>
                  <span>
                    Joined {i.joined_date}
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default Members;
