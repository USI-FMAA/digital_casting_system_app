import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

interface DashBoardProps {
	deviceName: string[];
}

export const DashBoard: React.FC<DashBoardProps> = ({ deviceName = [] }) => {
	const [open, setOpen] = React.useState(false);
	const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	// Generate buttons dynamically using the deviceName prop
	const buttons = deviceName.map((device, index) => (
		<Tooltip key={index} title={device} placement="right">
			<Button
				onClick={() => setSelectedDevice(device)}
				variant={selectedDevice === device ? "contained" : "outlined"}
			>
				{device}
			</Button>
		</Tooltip>
	));

	return (
		<div>
			<ButtonGroup
				orientation="vertical"
				aria-label="Vertical button group"
				variant="contained"
				color="info"
			>
				{deviceName.length > 0 ? buttons : (
					<Tooltip title="No devices available" placement="right">
						<Button disabled>No devices</Button>
					</Tooltip>
				)}
			</ButtonGroup>
			{selectedDevice && (
				<Box mt={2} p={1} border={1} borderRadius={1} borderColor="grey.300">
					<p>Watch at: {selectedDevice}</p>
				</Box>
			)}
		</div>
	);
};
