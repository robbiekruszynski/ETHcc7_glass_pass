import React from 'react';
import { Link } from 'react-router-dom';

const TicketItem = ({ ticket }) => {
  return (
    <div className="ticket-item">
      <h2>{ticket.eventName}</h2>
      <p>{ticket.date}</p>
      <p>{ticket.price} USD</p>
      <Link to={`/ticket/${ticket.id}`}>View Details</Link>
    </div>
  );
};

export default TicketItem;
