
function Dashboard({sessions}){
    
    const totalSessions = sessions.length;

    return(
        <div className="dashboard-content">
            <div className="welcome-message">
                <h2>Good morning, Phila &#128075;</h2>
                <p>Here's what's happening with your studies</p>
            </div>

            <div className="totalSessionsCard">
                <h5>Sessions</h5>
                <p>{totalSessions}</p>
            </div>
        </div>
        

    );
}

export default Dashboard