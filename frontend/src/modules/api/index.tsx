import React, {useState} from 'react';
export const ApiView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>API - API - REST for issues, departments, geo</h2><p>POST issue</p></div>
};
export default ApiView;
