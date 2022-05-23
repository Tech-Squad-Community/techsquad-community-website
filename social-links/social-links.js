import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedinIn,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function sociallinks() {
	//saves state of the clicked component
	let [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	// var className = isOpen ? 'click-state' : 'base-state';
	return (
		//holds the whole component
		<div className="relative w-96 h-96 flex items-center justify-center ml-40 bg-black z-0">
			{/* github arm and icon */}
			<span
				className={
					(!isOpen
						? "transition-transform ease duration-[3000ms] scale-100 rotate-[15deg] delay-0 "
						: "transition-transform ease duration-[3000ms] scale-[0.45] delay-0 ") +
					"text-white text-xl absolute w-10 h-96 top-0 flex justify-center origin-bottom-center  after:absolute after:w-px after:h-12 after:bg-white after:top-10 after:content-'' "
				}
			>
				<FontAwesomeIcon
					className={
						(!isOpen
							? "transition-transform ease duration-[3000ms] -rotate-[15deg] delay-0 "
							: "") +
						"absolute -rotate-10  border-solid  border-2 rounded-[50%] p-1.5"
					}
					icon={faGithub}
				/>
			</span>
			{/* linkedin arm and icon */}
			<span
				className={
					(!isOpen
						? "transition-transform ease duration-[3000ms] scale-100 rotate-[45deg] delay-0 "
						: "transition-transform ease duration-[3000ms] scale-[0.45] delay-0 ") +
					"text-white text-xl absolute w-10 h-96 top-0 flex justify-center origin-bottom-center  after:absolute after:w-px after:h-12 after:bg-white after:top-10 after:content-''"
				}
			>
				<FontAwesomeIcon
					className={
						(!isOpen
							? "transition-transform ease duration-[3000ms] -rotate-[45deg] delay-0 "
							: " ") +
						"absolute -rotate-50 border-solid  border-2 rounded-[50%] p-1.5"
					}
					icon={faLinkedinIn}
				/>
			</span>
			{/* discord arm and icon */}
			<span
				className={
					(!isOpen
						? "transition-transform ease duration-[3000ms] scale-100 rotate-[75deg] delay-0 "
						: "transition-transform ease duration-[3000ms] scale-[0.45] delay-0 ") +
					"text-white text-xl absolute w-10 h-96 top-0 flex justify-center origin-bottom-center after:absolute after:w-px after:h-12 after:bg-white after:top-10 after:content-'' "
				}
			>
				<FontAwesomeIcon
					className={
						(!isOpen
							? "transition-transform ease duration-[3000ms] -rotate-[75deg] delay-0 "
							: " ") +
						"absolute -rotate-80 border-solid  border-2 rounded-[50%] p-1.5"
					}
					icon={faDiscord}
				/>
			</span>
			{/* central icon */}
			<div
				onClick={handleClick}
				className="w-48 h-48 text-[7.5rem] relative  bg-black rounded-[50%] flex items-center justify-center cursor-pointer after:absolute after:bg-gradient-to-r from-emerald-300 via-green-400 via-indigo-500 to-pink-400 after:-top-0.5 after:-bottom-0.5 after:-left-0.5 after:-right-0.5  after:rounded-[50%] after:content-'' after:z-negetive"
			>
				<FontAwesomeIcon className="text-white text-8xl" icon={faLink} />
			</div>
		</div>
	);
}

export default sociallinks;
