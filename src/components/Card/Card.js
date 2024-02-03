import styled from 'styled-components';

import drawersImage from '../../assets/images/drawers.jpg';
import avatarImage from '../../assets/images/avatar.jpg';

const CardShell = styled.article`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 24.6153846154em;
	background-color: hsl(0, 0%, 100%);
	margin: 3.0769230769em 0 4.6153846154em;
	border-radius: 8px;
	box-shadow: 0 16px 30px rgba(0, 0, 0, 0.04);

	& .card__image,
	& .card__content {
		display: flex;
		flex-direction: column;
	}

	& .card__image {
		border-radius: 8px 8px 0 0;
	}

	& .card__image * {
		border-radius: inherit;
	}

	& .card__image-inner {
		position: relative;
		height: 0;
		padding-bottom: 62%;
		background-color: hsl(214, 17%, 51%);
	}

	& .card__image-inner img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	& .card__content {
		position: relative;
		padding: 2.4615384615em 2.4615384615em 1.5384615385em;
	}

	& .card__title {
		margin-bottom: 0.9375em;
	}

	& .card__desc {
		margin-bottom: 1.8461538462em;
	}

	& .card__author {
		display: flex;
		align-items: center;
		padding-right: 3.4615384615em;
	}

	& .card__author-img-box {
		flex: none;
		margin-right: 1.1538461538em;
	}

	& .card__author-img {
		width: 3.0769230769em;
		height: auto;
		border-radius: 50%;
	}

	& .card__author-name {
		margin-bottom: 0.0769230769em;
		font-size: 1em;
	}

	& .card__author-post-date {
		color: hsl(212, 23%, 69%);
	}

	& .card__share {
		position: absolute;
		left: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	& .card__share-checkbox {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
	}

	& .card__share-box {
		position: relative;
		display: flex;
		justify-content: flex-end;
		padding: 1.8461538462em 2.4615384615em;
		background-color: transparent;
		transition: all 0.24s;
	}

	& .card__share-action,
	& .card__share-action-buttons {
		display: flex;
		align-items: center;
	}

	& .card__share-action {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		gap: 1.5384615385em;
		padding: inherit;
		padding-right: 6.9230769231em;
		visibility: hidden;
	}

	& .card__share-action-txt {
		text-transform: uppercase;
		color: hsl(212, 23%, 69%);
		letter-spacing: 0.2307692308em;
	}

	& .card__share-action-buttons {
		gap: 1.1538461538em;
	}

	& .btn--share-toggle {
		position: relative;
		z-index: 1;
	}

	& .card__share-checkbox:checked + .card__share-box {
		background-color: hsl(217, 19%, 35%);
	}

	& .card__share-checkbox:checked + .card__share-box .card__share-action {
		visibility: visible;
	}

	& .card__share-checkbox:checked + .card__share-box .btn--share-toggle {
		background-color: hsl(214, 17%, 51%);
		border-color: hsl(214, 17%, 51%);
		color: hsl(0, 0%, 100%);
	}

	@media (min-width: 60em) {
		& {
			flex-direction: row;
			max-width: 55.3846153846em;
		}

		& .card__image {
			flex-shrink: 0;
			flex-basis: 21.5384615385em;
			max-width: 21.5384615385em;
			border-radius: 8px 0 0 8px;
		}

		& .card__image-inner,
		& .card__image-inner img {
			position: static;
		}

		& .card__image-inner {
			flex: auto;
			height: auto;
			padding-bottom: 0;
		}

		& .card__title {
			font-size: 1.5384615385em;
		}

		& .card__share-action {
			top: auto;
			left: auto;
			bottom: 6.1538461538em;
			right: -5.2307692308em;
			padding: 1.2307692308em 2.4615384615em;
			background-color: hsl(217, 19%, 35%);
			border-radius: 10px;
			box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
		}

		& .card__share-action::before {
			content: '';
			position: absolute;
			left: 50%;
			bottom: -0.5769230769em;
			width: 1.1538461538em;
			height: 1.1538461538em;
			background-color: inherit;
			transform: translateX(-50%) rotate(45deg);
		}

		& .card__share-checkbox:checked + .card__share-box {
			background-color: transparent;
		}
	}
`;

const Card = () => {
	return (
		<CardShell>
			<div className="card__image">
				<div className="card__image-inner">
					<img width="280" height="278" src={drawersImage} alt="Drawers" />
				</div>
			</div>
			<div className="card__content">
				<h2 className="card__title">
					Shift the overall look and feel by adding these wonderful
					touches to furniture in your home
				</h2>
				<p className="card__desc">
					Ever been in a room and felt like something was missing?
					Perhaps it felt slightly bare and uninviting. I've got some
					simple tips to help you make any room feel complete.
				</p>
				<div className="card__author">
					<div className="card__author-img-box">
						<img
							className="card__author-img"
							width="40"
							height="40"
							src={avatarImage}
							alt="Michelle Appleton"
						/>
					</div>
					<div className="card__author-info">
						<h3 className="card__author-name">Michelle Appleton</h3>
						<p className="card__author-post-date">28 Jun 2020</p>
					</div>
				</div>
				<div className="card__share">
					<input
						type="checkbox"
						name="toggle"
						id="share-toggle"
						className="card__share-checkbox"
					/>
					<div className="card__share-box">
						<div className="card__share-action">
							<span className="card__share-action-txt">
								Share
							</span>
							<ul className="card__share-action-buttons">
								<li>
									<a href="#/" title="Share on facebook">
										<i
											className="icon-facebook"
											aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#/" title="Share on twitter">
										<i
											className="icon-twitter"
											aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#/" title="Share on pinterest">
										<i
											className="icon-pinterest"
											aria-hidden="true"></i>
									</a>
								</li>
							</ul>
						</div>
						<label
							htmlFor="share-toggle"
							className="btn btn--icon btn--share-toggle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="15"
								height="13">
								<path
									fill="currentColor"
									d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"></path>
							</svg>
						</label>
					</div>
				</div>
			</div>
		</CardShell>
	);
};

export default Card;
