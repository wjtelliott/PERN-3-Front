import React, { useEffect, useState, useContext } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import BetTab from "./ProfileBetTabs";
import BetCardGrid from "../BetCardGrid";
import { useAuth0 } from "@auth0/auth0-react";
import { ApiUrls } from "../../context/APIContext";

export default function ProfileBets() {
	const [value, setValue] = useState(0);

	const [userBets, setUserBets] = useState([]);
	const [isMobile, setIsMobile] = useState(false);

	const apiUrls = useContext(ApiUrls);
	const { user, isAuthenticated, isLoading } = useAuth0();

	useEffect(() => {
		setIsMobile(window.innerWidth < 800);
	}, [window.innerWidth]);

	useEffect(() => {
		(async () => {
			if (isLoading || !isAuthenticated) return;
			const response = await fetch(apiUrls.getUserBetsUrl(user.sub));
			const resData = await response.json();
			setUserBets(resData);
		})();
	}, [isLoading]);

	if (!isAuthenticated) return null;

	const handleChange = (_, newValue) => {
		setValue(newValue);
	};

	function a11yProps(index) {
		return {
			id: `bet-tab-${index}`,
			"aria-controls": `bet-tabpanel-${index}`,
		};
	}

	// This could be refactored to be more DRY
	const currentUserGames = userBets
		.filter((game) => !game.game_is_completed)
		.map((game) => {
			return (
				<div>
					<p>
						Here is a game that is not completed:{" "}
						{JSON.stringify(game)}
					</p>
				</div>
			);
		});

	const previousUserGames = userBets
		.filter((game) => game.game_is_completed)
		.map((game) => {
			return (
				<div>
					<p>
						Here is a game that is completed: {JSON.stringify(game)}
					</p>
				</div>
			);
		});

	const previousUserGamesLost = userBets
		.filter((game) => game.game_is_completed && !game.bet_success)
		.map((game) => {
			return (
				<div>
					<p>
						Here is a game that the bet was lost!:{" "}
						{JSON.stringify(game)}
					</p>
				</div>
			);
		});

	const previousUserGamesWon = userBets
		.filter((game) => game.game_is_completed && game.bet_success)
		.map((game) => {
			return (
				<div>
					<p>
						Here is a game that the bet was won!:{" "}
						{JSON.stringify(game)}
					</p>
				</div>
			);
		});

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
				{currentUserGames}
			</BetTab>
			<BetTab value={value} index={1}>
				{previousUserGames}
			</BetTab>
			<BetTab value={value} index={2}>
				{previousUserGamesWon}
			</BetTab>
			<BetTab value={value} index={3}>
				{previousUserGamesLost}
			</BetTab>
		</Box>
	);
}
