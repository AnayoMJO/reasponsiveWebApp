import { useState } from "react";
import "./Feedback.css";

function Feedback() {
	const [score, setScore] = useState("0");

	const handleButtonSubmit = (e) => {
		e.preventDefault();
		if (Number(score) <= 4) {
			alert(
				"Your rating of Martins John Okafor's web page is low below 4 please provide a comment why your experience was poor at Martins John Okafor's web Page"
			);
		} else {
			alert(
				"thanks for rating Martins John Okafor's web page and thanks for droping your comment about your experience on Martins John Okafor's web page, we will use your opinion to help improve Martins John Okafor's web page"
			);
		}
	};

	const handleSignupSubmit = (e) => {
		e.preventDefault();
		alert(
			"Thanks For Signing up for Martins John Okafor's Newsletter please check up on your your Emails to get Martins John Okafor's latest post"
		);
	};

	return (
		<div className="forms section-padding">
			<div className="feedback" onSubmit={handleButtonSubmit}>
				<form>
					<h1>Martins John Okafor's Feedback Form</h1>
					<p>
						Martins John Okafor will like to get feedback from you on your
						experience on his website and suggestions on ways to improve
					</p>
					<div className="fields">
						<label>Rate Martins John Okafor, Score: {score}</label>
						<br />
						<div>
							<input
								className="input"
								type="range"
								min="0"
								max="10"
								value={score}
								onChange={(e) => setScore(e.target.value)}
							/>
						</div>
					</div>
					<div className="text-area">
						<label>Comment:</label>
						<div>
							<textarea
								className="text"
								placeholder="please write your comment here"
							/>
						</div>
					</div>
					<div>
						<button type="submit" className="submit-button">
							Submit
						</button>
					</div>
				</form>
			</div>
			<div>
				<div className="sign-up">
					<form onSubmit={handleSignupSubmit}>
						<h1>Sign Up For Our Newsletter</h1>
						<div className="Name">
							<label>
								Name:
								<input className="name" placeholder="please input name" />
							</label>
						</div>
						<div className="Email">
							<label>
								Email:
								<input className="email" placeholder="please input email" />
							</label>
						</div>
						<div className="Password">
							<label>
								Password:
								<input
									className="password"
									placeholder="please input password"
								/>
							</label>
						</div>
						<div className="signUpButton">
							<button type="submit" className="sign-up-button">
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
export default Feedback;
