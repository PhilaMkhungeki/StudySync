
function SessionsCard({session}){

    const statusClass = session.status === "Upcoming"
                                            ? "upcoming"
                                            : session.status === "In-progress"
                                            ? "inProgress"
                                            : "done";

    return(
        <div className="sessionsCard">
            <h3>{session.subject}</h3>
            <p>~{session.description}~</p>
            <p><span>Date:</span> {session.date}</p>
            <p><span>Start-Time:</span> {session.startTime}</p>
            <p className={`statusClass ${statusClass}`}>{session.status}</p>
        </div>
    );
           
}

export default SessionsCard