import React, {useState} from 'react';
export const FeedbackView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>FEEDBACK - Feedback - rating, reopen, comments</h2><p>rating</p></div>
};
export default FeedbackView;
