import React from "react";
import "./content_screen.css";
import NavBar from "../widgets/nav_bar/nav_bar";
import MainSection from "../widgets/main_section/main_section";
import Footer from "../widgets/footer/footer";

export default class ContentScreen extends React.Component {
    render() {
        return(
            <div className="content">
                <div className="nav_bar">
                    <NavBar></NavBar>
                </div>
                <div className="main_section">
                    <MainSection></MainSection>
                </div>
                <div className="footer">
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}
