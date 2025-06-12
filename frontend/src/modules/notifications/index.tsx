import React, {useState} from 'react';
export const NotificationsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>NOTIFICATIONS - Notifications - SMS, email, push, IVR</h2><p>SMS</p></div>
};
export default NotificationsView;
