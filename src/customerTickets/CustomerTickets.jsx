import React, { useState } from "react";
import tickets from "../assets/ticket.json";
import TicketCard from "../components/TicketCard";

const CustomerTickets = ({ progrssTaskCount, setprogrssTaskCount }) => {
  const [filterTicets, setFilterTicets] = useState(tickets);
  console.log("filter tickets ", filterTicets);
  const [progressTask, setProgressTask] = useState([]);

  const handleClick = (id) => {
    // progress count update
    setprogrssTaskCount((pre) => pre + 1);
    // remove ticket from tickets card
    setFilterTicets(
      filterTicets.filter((filterTicet) => filterTicet.id !== id),
    );
    // push ticket card to progress card
    const selectTask = tickets.find((ticket) => ticket.id === id);
    if (selectTask) {
      setProgressTask((prv) => [...prv, selectTask]);
    }
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
                handleClick(ticket.id);
              }}
            />
          ))}
        </div>
      </div>
      <div className=" order-first md:order-last min-h-50 md:col-span-4">
        <div className=" text-xl md:text-2xl text-[#34485A] font-semibold py-8">
          <h2 className="">Task Progress</h2>
          {progressTask.length === 0 ? (
            <p className="text-[12px] text-[#627382] py-3 ">
              Select a ticket to add to Task Status
            </p>
          ) : (
            <>
              {progressTask.map((progress) => (
                <div
                  key={progress.id}
                  className="bg-white rounded m-3 px-4 py-2"
                >
                  <h2 className="text-[#001931] py-4 text-xl">
                    {progress.title}
                  </h2>
                  <button className="btn w-full  text-white bg-[#02A53B]">
                    Complete
                  </button>
                </div>
              ))}
            </>
          )}
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
