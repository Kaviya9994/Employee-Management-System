import {Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeePersonal from './EmployeePersonal';
import EmpDetailsCard from './EmpDetailsCard';

const EmployeeForm = () => {
 const [formData, setFormData] = useState({});
 const navigate = useNavigate();

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/emp-details-card', { state: { formData } });
 };

 return (
    <div>
      <EmployeePersonal handleChange={handleChange} />
      <Button onClick={handleSubmit} variant="dark" size="lg" type="submit">
        Submit
      </Button>
    </div>
 );
};

const EmployeeDetailsCard = () => {
 const { formData } = useNavigate().location.state;

 return (
    <div>
      <EmpDetailsCard formData={formData} />
    </div>
 );
};

export default EmployeeForm;
export { EmployeeDetailsCard };