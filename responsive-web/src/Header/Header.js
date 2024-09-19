import "./Header.css";
import projectDefence from "./../Assets/projectDefence.jpg";
const Header = () => {
	return (
		<div className="header-container section-padding">
			<div className="header">
				<div className="headingH1">
					<h1 className="gradient-text">
						WELCOME explore Martins John Okafor's Web Page application designed
						with React JS
					</h1>
				</div>
				<p className="pg">
					My name is Martins John Okafor a graduate of Mechanical Engineering
					fascinated about the world of Tech, eager and ready to continue
					learning Tech.
				</p>
			</div>
			<div className="image">
				<img
					src={projectDefence}
					alt="projectDefence"
					width="400px"
					height="400px"
				/>
			</div>
		</div>
	);
};

export default Header;
