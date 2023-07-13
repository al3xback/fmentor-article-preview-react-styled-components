import styled from 'styled-components';

const FooterShell = styled.footer`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	padding: 1em 0;
	text-align: center;
	font-size: 0.8em;

	&,
	& .container {
		display: flex;
	}

	& .container,
	& p {
		flex: auto;
	}
`;

const Footer = () => {
	return (
		<FooterShell>
			<div className="container">
				<p>
					Challenge by&nbsp;
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						className="btn btn--link"
						rel="noopener noreferrer"
						target="_blank">
						Frontend Mentor
					</a>
					. Coded by&nbsp;
					<a
						href="https://github.com/al3xback"
						className="btn btn--link"
						rel="noopener noreferrer"
						target="_blank">
						al3xback
					</a>
					.
				</p>
			</div>
		</FooterShell>
	);
};

export default Footer;
