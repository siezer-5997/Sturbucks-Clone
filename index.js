// var h1Element = document.createElement('h1');
// h1Element.textContent = 'I am Optimus Prime! Tranformers ASSEMBLE! shiii';
// h1Element.className = 'header';
// document.querySelector("#root").appendChild(h1Element);

function NavBar() {
	return (
		<h3>This was the NavBar.</h3>
	)
}
function MainConent() {
	return (
		<h1>I'm learning React now! This might be a good project. Beleive!!</h1>
	)
}

function Page() {
	return (
		<div className="top-content">
			<header>
				<nav className="tabs">
						<img src="https://creative.starbucks.com/images/logos/logo-1987.png" width="60px" />		
						<ul className="nav-items">
							<li>Home</li>
							<li>Shop</li>
							<li>Contact</li>
						</ul>
				</nav>
			</header>
			<section1 >
				<div className="main">
					<h2>Starbucks is the BEST!</h2>
					<h4>We Have:</h4>
					<ol>
						<li>Iced Coffee</li>
						<li>Hot Coffee</li>
						<li>Ice Tea</li>
					</ol>
				</div>
			</section1>
			<footer>
				<div className="footer">
					<small>© 2023 Zeresenay development. All rights reserved.</small>
				</div>
			</footer>
		</div>
	)
}
ReactDOM.render(<Page />, document.getElementById("root"))