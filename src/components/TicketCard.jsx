import { FaCalendarAlt } from "react-icons/fa";

const TicketCard = ({ ticket, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="card bg-base-100 cursor-pointer shadow-md border hover:shadow-lg transition"
    >
      <div className="card-body p-6">
        {/* Top */}
        <div className="flex justify-between items-start">
          <h2 className="card-title text-lg font-semibold">{ticket.title}</h2>

          <div
            className={`badge text-[10px] md:text-sm ${
              ticket.status === "Open"
                ? "badge-success"
                : ticket.status === "In-Progress"
                  ? "badge-warning"
                  : "badge-neutral"
            }`}
          >
            {ticket.status}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500">{ticket.description}</p>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex items-center gap-4">
            <span>#{ticket.id}</span>

            <span
              className={`font-semibold ${
                ticket.priority === "High"
                  ? "text-red-500"
                  : ticket.priority === "Critical"
                    ? "text-red-700"
                    : ticket.priority === "Medium"
                      ? "text-yellow-500"
                      : "text-green-500"
              }`}
            >
              {ticket.priority.toUpperCase()} PRIORITY
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <span>{ticket.customer}</span>
            <FaCalendarAlt />
            <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
