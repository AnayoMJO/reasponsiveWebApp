import React from "react";
import "./Blogs.css";
import birthday from "./../Assets/birthday.jpg";
import campFood from "./../Assets/campFood.jpg";
import football from "./../Assets/football.jpg";
import pythonProgramming from "./../Assets/pythonProgramming.jpg";

const Blog = () => {
	return (
		<>
			<div className="padding section-padding" id="blog">
				<div className="birthdayText">
					<h1 className="gradient-text">
						Martins John Okafor i have a lot that has happened in my life that i
						have to share with you guys on my bog, just grab a pop corn and
						relax
					</h1>
				</div>
				<div className="blog-container">
					<div className="birthday-container">
						<img
							src={birthday}
							alt="birthday"
							className="birthday-img"
							height="500px"
							width="600px"
						/>
						<br />
						date = Sep 4, 2024
						<br />
						title = My birthday
						<br />
						august 14 is my birthdy. The day i normally celabrate my birthday,
						it comes once a year so it's a very special day for me lots of
						celabrations drinks, smoke whatever you want.I know i am not where i
						really want to be but i am not where i used to be so it is really
						worth celabrating.so happy birthday myself Martins John Okafor
					</div>
					<div className="campfood-container">
						<img
							src={campFood}
							alt="campFood"
							className="birthday-img"
							height="500px"
							width="600px"
						/>
						<br />
						date = Sep 4, 2024
						<br />
						title = Camp Life
						<br />
						Camplife can never get better than the one i experienced in Bayelsa
						State at Boro camp off Kaima Kolokuma Okpokuma local Government Area
						Council. It was so sweeet so amazing so entertaining filled with
						fun, there was everything we could need there was food u can even
						see me carrying my foodflask. guy please tell me is this a flask or
						a cooler lol anyways either of then is ok by me
					</div>
					<div className="football-container">
						<img
							src={football}
							alt="sentforth match"
							className="birthday-img"
							height="500px"
							width="600px"
						/>
						<br />
						date = Sep 4, 2024
						<br />
						title = sentforth foodball match
						<br />
						Wow we had football match with the students which served as our
						Sentforth match, the match was interesting i was the goalkeeeper we
						won the match at the margin of 3:1 it was a really nice outing a
						kind of one i will like to pertake on again and again if i should be
						given the chance to
					</div>
					<div className="pythonProgramming-container">
						<img
							src={pythonProgramming}
							alt="python programming Trainning"
							className="birthday-img"
							height="500px"
							width="600px"
						/>
						<br />
						date = Sep 4, 2024
						<br />
						title = Python Programming Trainning
						<br />
						It was really nice gainning a new skill in the field of programming.
						When i heard about the trainning i could not resist the urge to
						join, it was organised by National Information Technology
						development Agency at their center National Cente for Artificial
						Inteligence and Robotics. We started from bigginners level
						variables, data types, data structure, loops, if statements
						functioms and them moved to advanced level like class, modules,
						packages how to import and install them, file system how to import
						them, how to read file, write file edith and al other things that
						can be done at differnet file types and documents.
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
