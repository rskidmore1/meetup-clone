function BottonBar(props) {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-white flex flex-row justify-between">
      <div className="flex flex-col self-center">
        <span>WED, APR 26 - 6:00 PDT</span>
        <span className="font-bold">{props.title}</span>
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
          <button type="button" className="px-5 py-3 bg-red-500 rounded-lg font-bold text-white" onClick={() => props.setModal(true)}>Attend</button>
        </span>
      </div>
    </div>
  )
}
export default BottonBar;
