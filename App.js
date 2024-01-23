import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import {Route, Routes} from 'react-router-dom';
import Login from './Login';
import EmployeeDash from './EmployeeDash';
import EmployeePersonal from './EmployeePersonal';
import EmpDetailsCard from './EmpDetailsCard';
import SignUp from './SignUp';
import AdminDash from './AdminDash';
import Dia from './Dia';
import Profile from './Profile';
import  Home from './Home';
import  Create from './Create ';
import  Update from './Update';
import  Read from './Read';
function App() {
  return (
    <div>
    <Routes>
    <Route path="/"element={<Landing/>}></Route>
    <Route path="/SignUp"element={<SignUp/>}></Route>
    <Route path="/employee-dash" element={<EmployeeDash/>}></Route>
    <Route path="/employee-personal" element={<EmployeePersonal/>}></Route>
    <Route path="/emp-details-card" element={<EmpDetailsCard/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/dia" element={<Dia/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/admin-dash" element={<AdminDash/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/create" element={<Create/>}></Route>
    <Route path="/update" element={<Update/>}></Route>
    <Route path="/read" element={<Read/>}></Route>



    </Routes>
    </div>
  );
}
export default App;