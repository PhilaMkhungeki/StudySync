import SessionsCard from "./SessionsCard";
import AddSession from "./AddSession";
import { useState } from "react";

function Sessions({sessions, addSession}) {
    
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <div className="sessionsHeader">
                <h3>My study sessions</h3>
                <button className="addSessionBtn" onClick={() => setIsOpen(true)}>+ Add Session</button>
            </div>

            {isOpen && (
                <div className="modalOverlay">
                    <div className="modalContent">
                        <AddSession onClose={() => setIsOpen(false)} addNewSession={addSession}/>
                    </div>
                </div>
                
            )}

            {sessions.map(session => (
                <SessionsCard key={session.id} session={session}/>
            ))}
            
        </>
    );
}

export default Sessions