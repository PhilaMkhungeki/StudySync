import SessionsCard from "./SessionsCard";
import AddSession from "./AddSession";
import { useState } from "react";

function Sessions() {
    
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
                        <AddSession onClose={() => setIsOpen(false)}/>
                    </div>
                </div>
                
            )}

            <SessionsCard />
        </>
    );
}

export default Sessions