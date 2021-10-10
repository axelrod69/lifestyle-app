import "./nav_bar.css";

const NavBar = () => {
    return(
        <div className="navigation_bar">
            <div className="caption">Lifestyle Store</div>
            <div className="nav_bar">
                <ul>
                    <li><a href="#sign_up">Sign Up</a></li>
                    <li><a href="#log_in">Log In</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;