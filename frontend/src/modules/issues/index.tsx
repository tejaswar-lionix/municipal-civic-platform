import React, {useState} from 'react';
export const IssuesView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>ISSUES - Issues - reporting, categories, geo-tagg</h2><p>pothole</p></div>
};
export default IssuesView;
