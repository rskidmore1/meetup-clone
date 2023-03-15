import React, { useState, useEffect } from 'react';
import Image from 'next/image';


async function retrieveComment(parentId) {

  const response = await fetch('http://34.210.145.64:8000/comment/retrieve-comments/' + parentId);
  return response; // Note: Can I make this response.json()?
}

async function saveComment(comment) {
  const url = 'http://34.210.145.64:8000/comment/save-comment';
  const data = comment;
  console.log(data);

  const response = await fetch(
    url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(comment),
    Cache: 'default',
  });

  return response;
}

function Comment(props) {

  const parentId = props.parentId;
  const [comments, setComments] = useState();

  useEffect(() => {
    retrieveComment(parentId).then(
      result => result.json()).then(
        data => {
          setComments(data.comments);
        }
      );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      "id": "1234",
      "user": {
        "id": "1234",
        "name": "Ryan S.",
        "photo": "./somefile"
      },
      "text": e.target.text.value,
      "top_level_comment": true,
      "replies": [],
      "parent_id": "64091cf1ee0ae9fed40f14ba",
    };

    saveComment(newComment);
    setComments(comments => [...comments, newComment]);
    e.target.reset();
  }


  return (
    <div className='flex flex-col gap-2'>
      <h2 className='font-bold self-start'>Comments</h2>
      {comments?.map((comment) => (
        <div className='flex flex-row gap-1'>
          <Image
            src="/host.png"
            alt="host"
            className="self-start rounded-full"
            width={56}
            height={56}
          />
          <div className="w-full h-fit bg-white px-3">
            <div className="flex flex-row justify-between">
              <div>{comment?.user?.name}</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            <div className="flex justify-self-start">
              {comment?.text}
            </div>
          </div>
        </div>
      ))}
      <div className="border-[1px] border-gray-700"></div>
      <div className="self-start flex flex-row gap-1">
        <Image
          src="/host.png"
          alt="host"
          className="self-start rounded-full"
          width={56}
          height={56}
        />
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" placeholder="Add a comment..." className="w-[400px] h-20" />
          <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Comment;
