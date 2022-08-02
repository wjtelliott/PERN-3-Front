import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return (
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<Typography
					variant="h4"
					align="center"
					alignSelf="center"
					sx={{
						margin: 3,
						display: { xs: "none", md: "flex" },
						fontWeight: 700,
						color: "inherit",
						textDecoration: "none",
					}}
				>
					Loading your data
				</Typography>
			</Box>
		);
	}

	if (!isAuthenticated) {
		return (
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				<Typography
					variant="h4"
					sx={{
						mx: 33,
						my: 5,
						display: { xs: "none", md: "flex" },
						fontWeight: 700,
						color: "inherit",
						textDecoration: "none",
					}}
				>
					You must be logged in to view this page.
				</Typography>
				<Typography
					variant="h6"
					sx={{
						mx: 33,
						display: { xs: "none", md: "flex" },
						fontWeight: 700,
						color: "inherit",
						textDecoration: "none",
					}}
				>
					Click
					<Link
						to="/"
						style={{ textDecoration: "none", color: "green" }}
					>
						&nbsp;Here&nbsp;
					</Link>
					to go back to the home page
				</Typography>
				{/* <Link to="/">Back to home page</Link> */}
			</Box>
		);
	}

	return (
		<div>
			<Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
				<Typography
					variant="h2"
					align="center"
					alignSelf="center"
					sx={{
						margin: 3,
						display: { xs: "none", md: "flex" },
						fontWeight: 700,
						color: "inherit",
						textDecoration: "none",
					}}
				>
					Hello, {user.nickname}
				</Typography>
				<Avatar
					src={user.picture || "http://http.cat/418/"}
					alt="Ryan Rasmussen"
					sx={{
						width: "10%",
						height: "auto",
						margin: 3,
						display: {
							xs: "none",
							sm: "none",
							md: "block",
						},
					}}
				/>
			</Box>
		</div>
	);
};

export default Profile;
