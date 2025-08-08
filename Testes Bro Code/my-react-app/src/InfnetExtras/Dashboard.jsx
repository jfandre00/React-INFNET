import UserProfileCard from "./UserProfileCard";
import NotificationList from "./NotificationList";
import ActionButton from "./ActionButton";

function Dashboard() {
    return (
        <div>
            <UserProfileCard />
            <NotificationList />
            <ActionButton />
        </div>
    );
}

export default Dashboard;