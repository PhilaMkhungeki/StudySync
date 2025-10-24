export default function Sidebar(){
    const navItems = ['Dashboard', 'Sessions', 'Calendar', 'Notes', 'TrackMe'];
    
    return(
        <nav className="flex flex-col bg-blue-100 p-4 h-screen w-1/5">
            <ul>
                {navItems.map((item) => (
                    <li key={item} className="mb-7 hover:text-blue-500 cursor-pointer">
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    )
}