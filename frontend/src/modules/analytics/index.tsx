import React, {useState} from 'react';
export const AnalyticsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>ANALYTICS - Analytics - KPIs, trend, sla breach, sat</h2><p>KPI</p></div>
};
export default AnalyticsView;
