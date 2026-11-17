import SessionsCard from "./SessionsCard";
import AddSession from "./AddSession";

function Sessions() {

    return(
        <>
            <div className="sessionsHeader">
                <h3>My study sessions</h3>
                <button className="addSessionBtn">+ Add Session</button>
            </div>

            <SessionsCard />
        </>
    );
}

export default Sessions