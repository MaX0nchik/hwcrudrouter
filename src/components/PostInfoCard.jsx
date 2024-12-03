import { useNavigate } from "react-router-dom";


function dateDiff(date, type) {
    const now = new Date();
    const date1 = new Date(date);
    let diff = now.getTime() - date1.getTime();
    let values = (type === "min") ? 1000 * 60 :
    (type === "hour") ? 1000 * 60 * 60 :
    (type === "day") ? 1000 * 60 * 60 * 24 : 1;

    return (diff/values);
}

export const PostInfoCard = ({created, close, children}) => {
    let diffstr = "";
    if (created) {
        const createdDateTime = new Date(created);
        const diffmin = dateDiff(createdDateTime, "min");
        const diffhours = dateDiff(createdDateTime, "hour");
        const diffdays = dateDiff(createdDateTime, "day");
        const diffstr = (diffmin < 60) ? diffmin.toFixed(0) + " минут назад" :
        diffhours < 24 ? diffhours.toFixed(0) + " часов назад" :
        diffdays.toFixed(0) + " дней назад";
    }

    const navigate = useNavigate();

    const handleCloseClick = () => {
        navigate(-1);
    }

    return(
        <div className="post-view">
            {close && 
            <div className="close-cont">
                <span className="close-card" onClick={handleCloseClick}>X</span>
            </div>
            }
            {created && 
            <div className="created">
                <span className="user-name">Пользователь</span>
            </div>}
            {children}
        </div>
    )
}