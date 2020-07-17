import React, { Component } from 'react';
import './service.css';
import img1 from '../../../../images/website.jpg';
import UserConsumer from '../../../../context/context';
class Services extends Component {
	render() {
		return (
			<UserConsumer>
				{(value) => {
					const { services } = value;
					return (
						<section className="services mb-5">
							<div className="container">
								<div className="services_title text-center ">Xidmətlərimiz</div>
								<section className="services_items">
									{services.map((service) => {
										return (
											<div className="services_item" key={service.id}>
												<div className="services_item_image">
													<img src={require(`../../../../images/${service.image}`)} className="img-fluid" alt="" />
												</div>
												<h2 className="lead  my-3 pl-2">{service.title}</h2>
												<p className="ml-2">
													{service.text}
												</p>
												<a href="" className="btn btn-outline-info mb-4 px-5 ml-2 ">
													Ətraflı{' '}
												</a>
											</div>
										);
									})}
								</section>
							</div>
						</section>
					);
				}}
			</UserConsumer>
		);
	}
}
export default Services;
