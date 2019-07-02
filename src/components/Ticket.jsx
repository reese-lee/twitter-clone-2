import React from 'react';

function Ticket(props){
  return (
    <div>
      <h3> {props.location} - {props.names} </h3>
      <p>{props.issue}</p>
    </div>
  );
}

export default Ticket;
