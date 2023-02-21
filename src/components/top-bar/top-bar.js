export default function TopBar(props) {

  return (
    <div className=" w-full border-b-2 border-b-black flex flex-row justify-between bg-white py-3">
      <div className="flex flex-row">
        <img src={require("./meetup-logo.png")} alt="" />
        <form className="flex flex-row border-[1px] border-black rounded-lg h-2/3 self-center">
          <input type="text" className="border-r-[1px] border-r-black" />
          <input type="text" />
          <button>icon</button>

        </form>

      </div>
      <div className="flex flex-row gap-x-1">
        <div className="border-r-[1px] border-r-black pr-3 mr-2">
          <p className="text-cyan-600 font-semibold">Start a new <br />group</p>
        </div>
        <div>
          <div className="">PRO</div>
          <div>Try for free</div>
        </div>
        <div>
          <div>Box Icon</div>
          <div>Messages</div>
        </div>
        <div>
          <div>Bell Icon</div>
          <div>Notifications</div>
        </div>
        <div>
          <span>picture</span>
          <span>down carrot</span>
        </div>
      </div>
    </div>
  )
}
