import logo from './logo.svg';
import './App.css';
import EventProfile from './event/profile';

async function simpleApiCall() {
  // const response = await fetch('http://54.202.84.223:8000/api/posts');
  // console.log(response);

  // return await response.json();
  fetch('http://54.202.84.223:8000/blog')
    .then((e) => console.log(e));
}

function App() {
  return (
    <div className="App">
      <EventProfile
        title={'Some Event'}
        host={'Ryan'}
        hostPhoto={'/src/img/host.png'} // TODO: make this work
        photo={'./somelink'}
        location={'someaddress'}
        details={'some parragraphe'}
        startTime={'sometime'}
        endTime={'sometime'}
        group={'somegroupID'}
      />
    </div>
  );
}

export default App;
