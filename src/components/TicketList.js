import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosConfig';
import TicketItem from './TicketItem';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axiosInstance.get('/tickets')
      .then(response => setTickets(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="ticket-list">
      {tickets.map(ticket => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;


