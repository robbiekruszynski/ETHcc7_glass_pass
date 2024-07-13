import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosConfig';

const TicketDetails = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/tickets/${id}`)
      .then(response => setTicket(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!ticket) return <p>Loading...</p>;

  return (
    <div className="ticket-details">
      <h2>{ticket.eventName}</h2>
      <p>{ticket.date}</p>
      <p>{ticket.price} USD</p>
      <p>{ticket.description}</p>
    </div>
  );
};

export default TicketDetails;

