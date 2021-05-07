import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Bruno Dogbase</title>
			</Head>
			<header className="header">
				<div className="header-left">
					<a href="#" className="link header-left-link">
						Works
					</a>
				</div>
				<div className="header-right">
					<a href="#" className="link header-right-link">
						About
					</a>
				</div>
			</header>
			<main>
				<div className="container">
					<h1>
						<a href="#">Lior Chamla</a>
						<br />
						<a href="#">Magali Pernin</a>
						<br />
						<a href="#">Joseph Durand</a>
						<br />
						<a href="#">Anne Dupond</a>
					</h1>
				</div>
			</main>
			<footer className="footer">
				<div className="footer-left">
					<a href="#" className="footer-left-link">
						© 2021
					</a>
				</div>
				<div className="footer-right">
					<a href="#" className="footer-right-link">
						mail
					</a>
				</div>
			</footer>

			<style jsx>
				{`
					h1 {
						font-family: ogg, serif;
						font-size: 4rem;
						text-align: center;
					}
					.header {
						display: flex;
						align-items: center;
						position: absolute;
						top: 0;
						left: 0;
						width: 100vw;
						height: auto;
					}

					.header-left,
					.header-right {
						position: fixed;
						top: 5vw;
					}

					.header-left {
						left: 5vw;
					}

					.link {
						text-transform: uppercase;
						font-size: 32 * var(--res);
						position: relative;
					}

					.header-left-link {
						display: inline-block;
					}

					.header-left-link::after {
						position: absolute;
						bottom: -3px;
						right: 0;
						content: "";
						width: 100%;
						height: 1px;
						transform-origin: left bottom;
						transition: transform 0.3s;
						background-color: #000;
					}

					.header-left-link:hover::after {
						transform: scaleX(0);
						transform-origin: right bottom;
					}

					.header-right {
						right: 5vw;
						transform: translate(25%, 100%) rotate(90deg);
					}

					main {
						display: flex;
						justify-content: center;
						align-items: center;
						height: 100vh;
						background: #eaeaea;
					}

					main .container {
						/* max-width: 70vw;
						margin: auto; */
						font-family: "ogg", serif;
					}

					.footer {
						width: 100vw;
						position: relative;
					}

					.footer-left,
					.footer-right {
						position: fixed;
						bottom: 5vw;
					}

					.footer-left {
						left: 5vw;
						transform: translate(-25%, -100%) rotate(-90deg);
					}

					.footer-right {
						right: 5vw;
					}
				`}
			</style>
		</>
	);
}
