import PropTypes from 'prop-types'

function UserGreeting(props) {
    // if (props.isLoggedIn) {
    //     return (<h2>Welcome {props.username}</h2>);
    // } else {
    //     return (<h2>Please login to continue</h2>);
    // }

    const welcomeMessage = <h2 className="welcome-messgae">
                            Welcome {props.username}
                            </h2>
    const loginPromt = <h2 className="login-promt">
                            Please login to continue
                            </h2>

    return(
        props.isLoggedIn ? welcomeMessage : loginPromt
                        
    );
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest", 
}

export default UserGreeting;
