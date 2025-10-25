import { useState } from "react";

export default function GroupTable(){
    const [session, setSession] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        days: [],
        time: "",
        allWeek: false,
    });

    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
    const handleDayChange = (day) => {
        setFormData((prevData) => {
            if(prev.days.includes(day)){
                return {
                    ...prevData,
                    days: prevData.days.filter((d) => d !== day),
                };
            } else {
                return {
                    ...prevData,
                    days: [...prevData.days, day],
                };
            }
        });
    };
    

   
}