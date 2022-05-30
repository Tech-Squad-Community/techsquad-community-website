import React from 'react';
import { CardsData } from '../Data/Cards.js';
import style from '../styles/Technology.module.css';
function Technology() {
	return (
		<>
			<div className={`${style.heading}`}>
				<p className='mb-0'>
					Core
					<br />
					Technologies.
				</p>
			</div>
			<div className={`${style.about}`}>
				<p className='mb-0'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					<br /> Ut enim ad minim veniam, quis nostrud exercitation
					ullamco
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod Ut
					<br /> enim ad minim veniam, quis nostrud exercitation
					ullamco
				</p>
			</div>
			<div className={`  container`}>
				<div className={`row ${style.layout}`}>
					{CardsData.map((card) => {
						return (
							<>
								<div
									className={` ${style.card} w-25  overflow-hidden shadow-lg $col-md-3 col-lg-3 col-10`}
								>
									<img
										className={`${style.image}`}
										src={card.image}
										alt='Sunset in the mountains'
										height='150'
										width='100%'
									/>
									<div className='px-6 py-4'>
										<div
											className={`${style.subheading} font-bold text-xl mb-2`}
										>
											{card.subheading}
										</div>
										<p className=' text-white text-base'>
											{card.about}
										</p>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Technology;
