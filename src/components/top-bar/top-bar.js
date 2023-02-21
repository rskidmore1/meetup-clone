export default function TopBar(props) {

  return (
    <div className=" w-full border-b-2 border-b-black flex flex-row justify-between bg-white py-3">
      <div className="flex flex-row gap-4 ml-5">
        <img src={require("./meetup-logo.png")} alt="" />
        <form className="flex flex-row border-[1px] border-black rounded-lg h-2/3 self-center">
          <input type="text" className="border-r-[1px] border-r-black" placeholder="Search for keyword" />
          <input type="text" placeholder="Location" />
          <button className="bg-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>

        </form>

      </div>
      <div className="flex flex-row gap-x-4">
        <div className="border-r-[1px] border-r-black pr-3 mr-2">
          <p className="text-cyan-600 font-bold float-left">Start a new <br />group</p>
        </div>
        <div className="flex flex-col">
          <div className="bg-blue-500 w-2/3 rounded-xl self-center">PRO</div>
          <div>Try for free</div>
        </div>
        <div className="flex flex-col">
          <div className="self-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </div>
          <div>Messages</div>
        </div>
        <div className="flex flex-col">
          <div className="self-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </div>
          <div>Notifications</div>
        </div>
        <div className="flex flex-row">
          <img src={require("./user.png")} alt="" height='20px' width='60px' />
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

          </div>
        </div>
      </div>
    </div>
  )
}
