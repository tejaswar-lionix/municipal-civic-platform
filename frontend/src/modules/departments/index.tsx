import React, {useState} from 'react';
export const DepartmentsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>DEPARTMENTS - Departments - sanitation, roads, water, </h2><p>sanitation</p></div>
};
export default DepartmentsView;
