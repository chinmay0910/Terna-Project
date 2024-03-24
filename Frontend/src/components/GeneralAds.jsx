import { useNavigate } from "react-router-dom";
import CreateEventForm from "./EventForm";


const GeneralAds = () => {
    const navigate = useNavigate();
    return (
        <>
            <CreateEventForm />
           {
            navigate("/govevents")
           }
        </>
    )
}

export default GeneralAds;