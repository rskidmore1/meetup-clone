function Members(props) {
  return (
    <div className="flex flex-row">
      <div className="flex w-1/3">
        <div className="flex flex-col gap-5">
          <div>
            {/* TODO: make into tabs list */}
            <div>All Members</div>
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
      <div className="flex w-2/3">

      </div>
    </div>
  )
}

export default Members;
