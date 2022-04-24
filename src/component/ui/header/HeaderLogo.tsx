import NextLink from 'next/link';

export const HeaderLogo = () => {
	return (
		<div className="logo">
			<NextLink href='/' passHref>
			<img
					src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647095547/piccoletti-logo_j6hxbw.jpg"
					alt="logo"
				/>
      </NextLink>
		</div>
	);
};
