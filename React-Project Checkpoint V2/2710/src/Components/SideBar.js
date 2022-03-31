import Video from "./Video";
import { suggestions } from "./DATA";

const SideBar = () => {
    return (
        <div className="sidebar">
            {suggestions.map( x => <Video X = {x} /> )}
        </div>
    );
}

export default SideBar; 
