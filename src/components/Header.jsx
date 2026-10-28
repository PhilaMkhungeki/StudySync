import userIcon from '../assets/userIcon.png'


function Header(){

    return(
        <header>
            <h1>StudySync</h1>
            <img className="userIcon" src={userIcon} alt="User icon"></img>
        </header>
        
    );
}

export default Header