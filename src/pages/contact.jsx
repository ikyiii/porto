import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
						Thank you for your interest in getting in touch with me. I truly appreciate your time and effort in reaching out. I welcome your feedback, questions, and suggestions, as they help me grow and improve in what I do. If you'd like to connect, please feel free to reach out to me on{" "}
						<a href={INFO.socials.instagram} target="_blank" rel="noreferrer" style={{ color: 'black' }}> Instagram </a>.
						I regularly share updates, behind-the-scenes content, and engage with my followers there, so don't hesitate to drop by and say hello.

						Oh, and by the way, I also stream on YouTube from time to time. Whether it’s sharing gameplay, tutorials, or fun interactive sessions, I love connecting with others through my streams. Feel free to drop by if you have some free time! You can find me on{" "}
						<a href={INFO.socials.Youtube} target="_blank" rel="noreferrer" style={{ color: 'black' }}> YouTube </a>.

						Whether you have a specific question, want to collaborate, or just want to chat, I look forward to hearing from you. Your support means a lot to me, and I’m always happy to connect with people who share similar passions and interests. Thank you once again, and I look forward to building meaningful connections with you!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
