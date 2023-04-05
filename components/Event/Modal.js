import { useState } from 'react';
import { useRouter } from 'next/router'


function Modal(props) {

  const router = useRouter();

  const attendeefunction = () => {
    router.push('http://35.86.78.63:3000/event/attend-confirm'); // pass values with url
    props.saveAttendee(props.userId, props.parentObjectId);
  }

  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter(counter => counter + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter => counter - 1);
    }
  };

  return (
    <div className={"relative z-10 " + (props.modal ? "" : "hidden")} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="float-right cursor-pointer" onClick={() => props.setModal(false)}>X</div>
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
                <button type="button" className="w-full py-2 border-[1px] border-blue-400 text-blue-400 rounded-lg" onClick={() => attendeefunction()}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


}


export default Modal;
