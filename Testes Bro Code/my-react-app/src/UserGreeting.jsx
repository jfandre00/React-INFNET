import PropTypes from "prop-types";

function UserGreeting({ isLoggedIn = false, username = "Guest" }) {

    const welcomeMessage = <h2 className="welcome-message">Welcome back, {username}!</h2>;

    const loginPrompt = <h2 className="login-prompt">Please sign in to continue.</h2>;
    
    return(isLoggedIn ? welcomeMessage : loginPrompt);    
}


UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting;