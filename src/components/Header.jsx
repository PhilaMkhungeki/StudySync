import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    return(
         <header className="flex bg-blue-300 justify-between p-4">
            <h1 className="text-black text-xl font-semibold ">StudySync&#128218;</h1>
            <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6"/>
         </header>
    )
}