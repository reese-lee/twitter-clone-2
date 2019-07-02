import React from 'react';

function Ticket(props){
  return (
    <div>
      <style global jsx>{`
        .tickets {
          background-color: red;
        }
        `}</style>
      <h3> {props.location} - {props.names} </h3>
      <p>{props.issue}</p>
    </div>
  );
}

export default Ticket;
