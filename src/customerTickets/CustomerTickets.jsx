import React, { useState } from "react";
import tickets from "../assets/ticket.json";
import TicketCard from "../components/TicketCard";

const CustomerTickets = ({ progrssTask, setProgrssTask }) => {
  const [filterTicets, setFilterTicets] = useState(tickets);
  console.log(filterTicets);

  const handleClick = (id, title) => {
    setProgrssTask((pre) => pre + 1);
    setFilterTicets(
      filterTicets.filter((filterTicet) => filterTicet.id !== id),
    );
    console.log(title);
  };
  return (
    <div className=" grid max-w-11/12 mx-auto px-4 grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-8">
        <h2 className="text-xl md:text-2xl text-[#34485A] font-semibold py-4">
          Customer Tickets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filterTicets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onClick={() => {
                handleClick(ticket.id, ticket.title);
              }}
            />
          ))}
        </div>
      </div>
      <div className=" order-first md:order-last min-h-50 md:col-span-4">
        <div className=" text-xl md:text-2xl text-[#34485A] font-semibold py-8">
          <h2 className="">Task Progress</h2>
          <p className="text-[12px] text-[#627382] py-3 ">
            Select a ticket to add to Task Status
          </p>
        </div>
        <div className=" text-xl md:text-2xl text-[#34485A] font-semibold py-8">
          <h2>Task complete</h2>
          <p className="text-[12px] text-[#627382] py-3 ">
            No resolved tasks yet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
