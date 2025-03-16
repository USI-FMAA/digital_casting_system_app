import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CircleIcon from "@mui/icons-material/Circle";

interface ConnectProps {
	ipAddress?: string;
	onConnect?: () => void;
}

export const Connect: React.FC<ConnectProps> = ({ onConnect }) => {
	const [isConnected, setIsConnected] = useState<boolean>(false);
	const [deviceId, setDeviceId] = useState<string>("");
	const [availableDevices, setAvailableDevices] = useState<string[]>([]);

	useEffect(() => {
		setAvailableDevices(["Device 1", "Device 2", "Device 3"]);
	}, []);

	const handleConnect = () => {
		// Connection logic goes here
		setIsConnected(true);
		if (onConnect) {
			onConnect();
		}
	};

	const handleDisconnect = () => {
		// Disconnection logic goes here
		setIsConnected(false);
	};

	return (
		<div className="connect-component m-2">
			<div className="connection-status">
				Status: {isConnected ? "Connected" : "Disconnected"}
			</div>
			<div className="connection-buttons">
				{!isConnected ? (
					<>
						<Button variant="contained" onClick={handleConnect}>
							Connect
						</Button>
						<CircleIcon color="primary" />
					</>
				) : (
					<>
						<Button variant="contained" onClick={handleDisconnect}>
							Disconnect
						</Button>
						<CircleIcon color="warning" />
					</>
				)}
			</div>
		</div>
	);
};
