import React from "react";

function handpickedtech() {
	return (
		<div class="bg-black p-[30px] font-sans font-semibold">
			{/* <!-- Section title --> */}
			<div class="flex ml-[-15px] mr-[-15px] ">
				<div class="mb-7">
					<h2 class="text-5xl text-white">
						Handpicked Technologies and Resources for all Developers and
						Will-be-Developers
					</h2>
					<div class="text-3xl mt-2 text-white">
						<p class="lead lh-180">Accesible to Everyone for Free</p>
					</div>
				</div>
			</div>
			{/* <!-- Card --> */}
			<div class="flex justify-between min-w-[825px] text-left ">
				<div class="bg-newsorange bg-cover basis-[30%] relative p-[20px] pt-[60px] flex flex-col mb-[30px] content-end cursor-pointer bg-center rounded-[20px] hover:brightness-125 hover:scale-[1.02] hover:transition-all hover:ease-in-out">
					<div class="absolute w-[100%] h-[100%] inset-0 bg-black/[0.2]"></div>
					<h4 class="opacity-60 relative font-semibold ">
						Unleash your Skills
					</h4>
					<h2 class="text-white relative text-[20px] leading-[1] pt-[6px]">
						Push your creativity to your absolute limits
					</h2>
				</div>
				<div class="bg-newsteal bg-cover basis-[30%] relative p-[20px] pt-[60px] flex flex-col mb-[30px] content-end cursor-pointer bg-center rounded-[20px] hover:brightness-125 hover:scale-[1.02] hover:transition-all hover:ease-in-out">
					<div class="absolute w-[100%] h-[100%] inset-0 bg-black/[0.2] "></div>
					<h4 class="opacity-60 relative font-semibold">
						Boost your Experience
					</h4>
					<h2 class="text-white relative text-[20px] leading-[1] pt-[6px]">
						Practice makes a man Experienced, this is no exception
					</h2>
				</div>
				<div class="bg-newspurple bg-cover basis-[30%] relative p-[20px] pt-[60px] flex flex-col mb-[30px] content-end cursor-pointer bg-center rounded-[20px] hover:brightness-125 hover:scale-[1.02] hover:transition-all hover:ease-in-out">
					<div class="absolute w-[100%] h-[100%] inset-0 bg-black/[0.2]"></div>
					<h4 class="opacity-60 relative font-semibold">
						Create a strong Portfolio
					</h4>
					<h2 class="text-white relative text-[20px] leading-[1] pt-[6px]">
						Showcase your work to the clients for better exposure
					</h2>
				</div>
			</div>
		</div>
	);
}

export default handpickedtech;
