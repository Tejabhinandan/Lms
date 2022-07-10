// import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Batchlist from './components/Mainnav';
import Login from './components/Login';
import Mentor from './components/Mentor';
import Request from './components/Request';
import Batchlist2 from './components/Batchlist2';
import Mainnav from './components/Mainnav';
import MentorBacthlist from './Mentor/MentorBatchlist';
import MentorNav from './Mentor/MentorNav';
import ResetPassword from './Mentor/ResetPassword';
import AttendanceModal from './Mentor/AttendanceModal';
import MentorEmpList from './Mentor/MentorEmpList';
import Primary_Info from './components/Employee/Primary_Info';
import EmpNav from './components/Employee/EmpNav';
import Primary_info_form from './components/Employee/Primary_info_form';
import Secondary_info_form from './components/Employee/Secondary_info_form';

function App() {
  return (
    <div className="App">
   {/* <Login/> */}
  {/* <BrowserRouter>
  <Mainnav/>
  <Routes>
<Route path="/batchlist2"element={<Batchlist2/>}/>
<Route path="/mentor"element={<Mentor/>}/>
<Route path="/request"element={<Request/>}/>
  </Routes>
  </BrowserRouter> */}
  {/* <ResetPassword/> */}
  {/* <BrowserRouter>
  <MentorNav/>
  <Routes>
    <Route path='/mentorbatchlist' element={<MentorBacthlist/>}/>
    <Route path='/MentorEmpList' element={<MentorEmpList/>}/>
  </Routes>
  </BrowserRouter> */}
  {/* <EmpNav/> */}
  <Primary_Info/>
  
  {/* <Primary_info_form/> */}

    </div>
  );
}

export default App;