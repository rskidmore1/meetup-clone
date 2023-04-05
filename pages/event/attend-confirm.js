import Image from "next/image";

function AttendConfirm() {
  return (
    <div className="flex flex-row w-full justify-center">
      <div className="flex flex-col w-[500px] h-[250px] bg-white rounded-lg mt-10 p-5 gap-3">
        <span className="font-bold text-3xl">
          You're going!
        </span>
        <div className="flex flex-row justify-center">
          <Image
            src={'/event-image.png'}
            alt="Event Image"
            width={100}
            height={100}
          />
          <div className="flex flex-col">
            <span>
              OCHappy hour @seville (Costa Mesa)
            </span>
            <div className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
              <span>Mar 23, 2023 600pm</span>
            </div>
            <div className="flex flex-row">
              <button type="button" className="text-white bg-blue-500 px-5 py-1 rounded-lg">
                Add to calendar
              </button>
              <button type="button" className="text-white bg-blue-500 px-5 py-1 rounded-lg">
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
