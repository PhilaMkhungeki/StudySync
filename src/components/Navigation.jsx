
function Navigation({activePage, onNavigate}){

    return(
        <nav className="navigation-bar">
            <ul>
                <li><button className={activePage === "dashboard" ? "active":""} onClick={() => onNavigate("dashboard")}>Dashboard</button></li>
                <li><button className={activePage === "sessions" ? "active":""} onClick={() => onNavigate("sessions")}>Sessions</button></li>
                <li><button className={activePage === "resources" ? "active":""} onClick={() => onNavigate("resources")}>Resources</button></li>
                <li><button className={activePage === "friends" ? "active":""} onClick={() => onNavigate("friends")}>Friends</button></li>
                <li><button className={activePage === "settings" ? "active":""} onClick={() => onNavigate("settings")}>Settings</button></li>
            </ul>     
        </nav>
    );
}

export default Navigation