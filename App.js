// import logo from './logo.svg';
import './App.css';
// import Greeting from './Greeting';
// // import Gallery from './Gallery';
// // import Profile from './Profile';
import UserAge, { UserName } from './userComponent';
function App() {
  return (
  //   <div>
  //     <Greeting />
  //   </div>
  // //   // <div style={{ textAlign: 'center', marginTop: '20px' }}>
  // //   // <Gallery />
  // //   // <Profile />
  // // </div>
  <div>
  <UserName />
  <UserAge />
</div>
  );
}
export default App;
