import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid2";

import { LineChart } from "@mui/x-charts";

interface DashBoardProps {
	deviceName: string[];
}

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export const DataViewer = () => {
	// const [open, setOpen] = React.useState(false);
	// const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
	//
	// const toggleDrawer = (newOpen: boolean) => () => {
	// 	setOpen(newOpen);
	// };
	//
	// // Generate buttons dynamically using the deviceName prop
	// const buttons = deviceName.map((device, index) => (
	// 	<Tooltip key={index} title={device} placement="right">
	// 		<Button
	// 			onClick={() => setSelectedDevice(device)}
	// 			variant={selectedDevice === device ? "contained" : "outlined"}
	// 		>
	// 			{device}
	// 		</Button>
	// 	</Tooltip>
	// ));

	return (
		<>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 8 }}>
				<Grid size={6}>
					<LineChart
						width={500}
						height={300}
						series={[
							{ data: pData, label: "pv" },
							{ data: uData, label: "uv" },
						]}
						xAxis={[{ scaleType: "point", data: xLabels }]}
					/>
				</Grid>
				<Grid size={6}>
					<LineChart
						width={500}
						height={300}
						series={[
							{ data: pData, label: "pv" },
							{ data: uData, label: "uv" },
						]}
						xAxis={[{ scaleType: "point", data: xLabels }]}
					/>
				</Grid>
			</Grid>
		</>
	);
};
