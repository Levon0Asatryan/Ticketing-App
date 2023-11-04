import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketCard = async ({ params }) => {
  const EDITMODE = params.id !== "new";
  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = (await getTicketById(params.id)).foundTicket;
  }
  return <TicketForm ticket={updateTicketData} EDITMODE={EDITMODE} />;
};

export default TicketCard;
