import React, { Component } from 'react';
import './Customers.css';
import {FaArrowAltCircleDown} from "react-icons/fa"
import UserConsumer from '../../../../context/context';

class Customers extends Component {
	render() {
		return (
			<UserConsumer>
				{(value) => {
					const { customers } = value;
					return (
						<div>
							<section className="customers">
								<div className="customers__content section-gap">
									<div className="container">
										<div className="header__title__full text-center pt-2">
											<a href="" className="btn btn-primary ">Müştərilərimiz <FaArrowAltCircleDown/> </a>
										</div>

										<div className="customer">
											{customers.map((customer) => {
												return (
													<div className="customer__card mt-4" key={customer.id}>
														<img src={require(`../../../../images/${customer.img}`)} className="img-responsive" alt="" />

														<div className="customer__card-body">
															<p className="customer__card-text">
																{customer.description}
															</p>
															<a href="#link" className="customer__link">
																<h3 className="customer__card-title">
																	{customer.name}
																</h3>
															</a>
														</div>
													</div>
  												);
											})}
										</div>
									</div>
								</div>
							</section>
							
						</div>
					);
				}}
			</UserConsumer>
		);
	}
}

export default Customers;
