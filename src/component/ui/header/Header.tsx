import { HeaderIcon } from "./HeaderIcon";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNavbar } from "./HeaderNavbar";

export const Header = () => {
	return (
			<header>
        <HeaderLogo />
        <HeaderNavbar />
        <HeaderIcon/>
			</header>
	);
};
