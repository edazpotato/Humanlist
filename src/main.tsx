import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/main.css";

import { App } from "./App";
import { CssBaseline } from "@mui/material";
import React from "react";

export default function () {
	return (
		<React.StrictMode>
			<CssBaseline />
			<App />
		</React.StrictMode>
	);
}
