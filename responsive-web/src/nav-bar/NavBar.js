import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="nav-items">
			<div className="menu-list">
				<a
					href="#home"
					onClick={() => alert("Welcome To Martins John Okafors Home Page")}>
					Home
				</a>

				<a
					href="#services"
					onClick={() => alert("Welcome To Martins John Okafors Serices Page")}>
					Services
				</a>

				<a
					href="#about"
					onClick={() => alert("Welcome To Martins John Okafors About Page")}>
					About
				</a>

				<a
					href="#contact-us"
					onClick={() =>
						alert("Welcome To Martins John Okafors Contact Us Page")
					}>
					Contact Us
				</a>
			</div>
			<div className="toggle-menu">
				{isMenuOpen ? (
					<RiCloseLine
						onClick={() => setIsMenuOpen(false)}
						size={34}
						color="#fff"
					/>
				) : (
					<RiMenu3Line
						onClick={() => setIsMenuOpen(true)}
						size={34}
						color="#fff"
					/>
				)}
				{isMenuOpen && (
					<div className="menu-list-links scale-up-center">
						<a
							href="#home"
							onClick={() =>
								alert("Welcome To Martins John Okafors Home Page")
							}>
							Home
						</a>

						<a
							href="#services"
							onClick={() =>
								alert("Welcome To Martins John Okafors Serices Page")
							}>
							Services
						</a>

						<a
							href="#about"
							onClick={() =>
								alert("Welcome To Martins John Okafors About Page")
							}>
							About
						</a>

						<a
							href="#contact-us"
							onClick={() =>
								alert("Welcome To Martins John Okafors Contact Us Page")
							}>
							Contact Us
						</a>
					</div>
				)}
			</div>
		</div>
	);
}
