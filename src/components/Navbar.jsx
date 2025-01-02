import { FlaskConical, Home, LayoutGrid, Mail, User } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();

	const TABS = [
		{
			key: 1,
			label: "Home",
			icon: <Home className="h-5 w-5 " />,
			path: "/",
		},
		{
			key: 2,
			label: "Resume",
			icon: <User className="h-5 w-5" />,
			path: "/resume",
		},
		{
			key: 3,
			label: "Contact",
			icon: <Mail className="h-5 w-5" />,
			path: "/contact",
		},
		{
			key: 4,
			label: "Projects",
			icon: <LayoutGrid className="h-5 w-5" />,
			path: "/projects",
		},
		{
			key: 5,
			label: "Labs",
			icon: <FlaskConical className="h-5 w-5" />,
			path: "/lab",
		},
	];

	// Function to handle route changes
	const handleNavigation = (path) => {
		navigate(path); // Navigate to the corresponding page
	};

	return (
		<div className="navbar fixed flex  justify-center w-full ">
			<div className="  flex  space-x-2 p-2 navblur items-center rounded-full ">
				{/* <img src="logo.png" className="mr-16 ml-4 h-8" /> */}
				<AnimatedBackground
					defaultValue={TABS[0].key.toString()} // Ensure defaultValue is a string
					className="rounded-[20px] navlinks text-yellow-600 md:rounded-full "
					onValueChange={(newActiveId) => {
						const tab = TABS.find((t) => t.key.toString() === newActiveId); // Find the tab by the new active id
						if (tab) {
							handleNavigation(tab.path); // Navigate to the selected tab's path
						}
					}}
					transition={{
						type: "spring",
						bounce: 0.2,
						duration: 0.3,
					}}
				>
					{TABS.map((tab) => (
						<button
							key={tab.key}
							data-id={tab.key.toString()} // Ensure data-id is a string
							type="button"
							className="  inline-flex  items-center justify-center text-white transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-yellow-200"
						>
							<div className="hidden md:flex items-center justify-center  w-14 h-14 md:h-10  md:w-auto    p-4 text-[16px] font-medium">
								<p className=" opacity-75">{tab.label}</p>
							</div>
							<div className="md:hidden flex w-14 h-14 md:h-10  md:w-auto flex-col text-[10px] items-center justify-center gap-1 p-1 md:flex-row md:text-[16px] font-medium">
								{tab.icon} <p className=" opacity-75">{tab.label}</p>
							</div>
						</button>
					))}
				</AnimatedBackground>
			</div>
		</div>
	);
}
