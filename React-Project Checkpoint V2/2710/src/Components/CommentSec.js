import { commentList } from "./DATA";
import Comm from "./Comment";

const CommSec = () => {
    return (
        <div className="commentsec">
            {commentList.map( x => <Comm X = {x} /> )}
        </div>
    );
}

export default CommSec;