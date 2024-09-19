import { Navbar } from "./nav-bar/NavBar";
import Header from "./Header/Header";
import Blog from "./Contents/Blogs";
import Footer from "./Footer/Footer";
import Feedback from "./Feedback/Feedback";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="gradient-bg">
				<Navbar />
				<Header />
			</div>

			<Blog />
			<Feedback />
			<Footer />
		</div>
	);
}

export default App;
