function EventProfile(props) {
  let title = props.title;
  let host = props.host;
  let hostPhoto = props.hostPhoto;
  let photo = props.photo;
  let location = props.location;
  let details = props.details;
  let startTime = props.startTime;
  let endTime = props.endTime;
  let group = props.group;


  return (
    <div>
      <div className="h-36 w-full flex justify-items-start bg-white">
        <div>
          <div className='px-2'>
            <p className="text-header font-bold">
              {title}
            </p>
          </div>
          <div className="flex flex-row gap-2 px-2">
            {/* <img src='https://i.insider.com/622bc19c843ef30018e6bf50?width=1200&format=jpeg' /> */}
            <img src={require('./host.png')} width="50" height="50" />
            <div>
              <p>Hosted by</p>
              <p>{host}</p>
            </div>

          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div>
          <div>Picture</div>
          <div>details</div>
        </div>
        <div>
          <div>
            Organizer tools
          </div>
          <div>
            Group
          </div>
          <div>
            Time
          </div>
          <div>
            Location
          </div>
          <div>
            Event Chat
          </div>
        </div>
      </div>



    </div>
  );
}

export default EventProfile;
