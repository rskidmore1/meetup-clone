// import '../src/index.css';

function EventProfile(props) {
  let title = props.title;
  let host = props.host;
  let photo = props.photo;
  let location = props.location;
  let details = props.details;
  let startTime = props.startTime;
  let endTime = props.endTime;
  let group = props.group;


  return (
    <div>
      <div>
        <div>title</div>
        <div>host info</div>
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
