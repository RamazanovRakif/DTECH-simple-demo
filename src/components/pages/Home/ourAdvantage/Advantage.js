import React, { Component } from 'react';
import './Advantage.css';
import { BsArrowRightShort } from 'react-icons/bs';
import image from '../../../../images/content1.png';
import { Link } from 'react-router-dom';
export default class Advantage extends Component {
	render() {
		return (
			<section className="our_advantages mt-5 mb-5">
				<div className="container">
					<section className="advantages_full">
						<div className="advantage_image">
							<Link to="/services">
								<img src={image} alt="" className="img-responsive" />
							</Link>
						</div>
						<div className="advantages_content">
							<h2 className="advantages_title">Müştərilərimizə sərfəli təkliflər</h2>
							<p className="lead">
								<span>D TECH</span> şirkəti öz müştərilərinə fərdi yanaşır və hər bir müştərinin xüsusi
								ehtiyaclarına müvafiq unikal və intensiv xidmət təklif edir
							</p>
							<p className="advantage_text">
								Yüksək peşəkarlardan ibarət D TECH komandası biznesi uğura aparan əsas istiqamətlər üzrə
								xidmət göstərir və eyni zamanda müştərilərinə ehtiyac olduğu hallarda kataloqda qeyd
								olunmamış zəruri biznes fəaliyyətləri üzrə də spesifik xidmətlər təqdim edir.
							</p>
							<div className="read-more-btn py-2">
								<Link to="/services" className="btn btn-outline-info">
									Xidmətlərimiz <BsArrowRightShort />
								</Link>
							</div>
						</div>
					</section>
				</div>
			</section>
		);
	}
}
