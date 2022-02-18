import React from "react";
import "../App.css";
import logo from "../assets/images/logo.png";
import banner from "../assets/images/banner.png";
import "../assets/css/main.min.css";

export default function Header() {
	return (
		<div>
			<header className="header-bg">
				<div className="header-left">
					<div className="header-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="header-right">
						<div className="delivery">
							<i className="fas fa-motorcycle" />
							<span>Express Delivery +1 234 567 890</span>
						</div>
						<div className="navbar">
							<nav>HOME</nav>
							<nav>MENU</nav>
							<nav>OUR STORY</nav>
							<nav>CONTACT US</nav>
						</div>
					</div>
				</div>
				<div className="banner-offer">
					<div className="banner-title">
						<p className="banner-paragraph">
							IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS
						</p>
						<h1 className="banner-subtitle">BURGERS</h1>
						<h3 className="banner-suptitle">WEEK</h3>
					</div>

					<img src={banner} alt="logo" className="banner-img" />
				</div>
			</header>
		</div>
	);
}
