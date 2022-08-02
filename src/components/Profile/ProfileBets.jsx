import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import BetTab from "./ProfileBetTabs";
import BetCardGrid from "../BetCardGrid";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProfileBets() {
	const [value, setValue] = useState(0);

	const [userBets, setUserBets] = useState({});
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(window.innerWidth < 800);
	}, [window.innerWidth]);

	if (!useAuth0().isAuthenticated) return null;

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	function a11yProps(index) {
		return {
			id: `bet-tab-${index}`,
			"aria-controls": `bet-tabpanel-${index}`,
		};
	}

	return (
		<Box sx={{ width: "100%" }}>
			<Box
				sx={{
					borderBottom: 1,
					borderColor: "divider",
					justifyContent: "center",
				}}
			>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="profile bet tabs"
					sx={{ px: 2, d: "flex", justifyContent: "center" }}
				>
					<Tab label="Current Bets" {...a11yProps(0)} />
					<Tab
						sx={{
							display: {
								xs: "none",
								sm: "none",
								md: "inline-flex",
							},
						}}
						label="Bet History"
						{...a11yProps(1)}
					/>
					<Tab
						label={(!isMobile ? "Previous " : "") + "Bets Won"}
						{...a11yProps(2)}
					/>
					<Tab
						label={(!isMobile ? "Previous " : "") + "Bets Lost"}
						{...a11yProps(3)}
					/>
				</Tabs>
			</Box>
			<BetTab value={value} index={0}>
				<BetCardGrid />
			</BetTab>
			<BetTab value={value} index={1}>
				Bets that have been completed here
			</BetTab>
			<BetTab value={value} index={2}>
				Previous Bets Won
			</BetTab>
			<BetTab value={value} index={3}>
				Previous Bets Lost
			</BetTab>
		</Box>
	);
}
