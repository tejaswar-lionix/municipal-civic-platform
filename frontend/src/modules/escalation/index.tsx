import React, {useState} from 'react';
export const EscalationView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>ESCALATION - Escalation - auto-escalate, SLA breach, </h2><p>auto-escalate</p></div>
};
export default EscalationView;
