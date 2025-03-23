import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { usePageStore } from "../store/pageStore";

interface DashBoardProps {
	devices: Map<string, { icon: React.ReactNode; name: string }>;
}

export const DashBoard: React.FC<DashBoardProps> = ({ devices }) => {
	const [open, setOpen] = React.useState(false);
	const { currentPage, setCurrentPage } = usePageStore();
	const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const handlePageChange = (deviceName: string) => {
		setCurrentPage(deviceName);
		setSelectedDevice(deviceName);
	};

	// Generate buttons dynamically using the deviceName prop
	const buttons = [...devices.entries()].map(([key, device]) => (
		<Tooltip key={key} title={device.name} placement="right">
			<Button
				onClick={handlePageChange.bind(null, key)}
				variant={selectedDevice === key ? "contained" : "outlined"}
			>
				{device.icon}
				{device.name.toLowerCase()}
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
				{devices.size > 0 ? (
					buttons
				) : (
					<Tooltip title="No devices available" placement="bottom-end">
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
