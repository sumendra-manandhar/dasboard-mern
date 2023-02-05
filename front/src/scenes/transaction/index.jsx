import { Box, Typography } from "@mui/material";
import React from "react";

const Transaction = () => {
	return (
		<Box width='100%'>
			<Box m='1.5rem 2rem 2rem 3rem'>
				<Typography variant='h4'>Transaction</Typography>
				<hr />

				<section className='section services' id='services'>
					<div className='row container'>
						<div className='col'>
							<h2>Why we are Best in our Twon</h2>
							<p>
								whole grains and low-fat dairy can help to reduce your risk of
								heart disease by maintaining blood pressure and
							</p>
						</div>
						<div className='col'>
							<div className='card'>
								<img src='./images/meat-icon.svg' alt='' />
								<h3>
									Choose <br />
									your favorite <br />
									food
								</h3>
							</div>
						</div>
						<div className='col'>
							<div className='card' style={{ backgroundColor: "red" }}>
								<img src='./images/delivery-icon.svg' alt='' />
								<h3>
									Get delivery <br />
									at your door <br />
									step
								</h3>
							</div>
						</div>
						<div className='col'>
							<div className='card'>
								<img src='./images/phone-icon.svg' alt='' />
								<h3>
									We have <br />
									400+ Review <br />
									On our app
								</h3>
							</div>
						</div>
					</div>
				</section>
			</Box>
		</Box>
	);
};

export default Transaction;
