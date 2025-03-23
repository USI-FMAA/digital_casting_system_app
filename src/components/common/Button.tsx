import * as React from 'react';

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

interface ButtonProps {
	label: string;
	onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => {
	return (
		<Button onClick={onClick}>{label}</Button>
	);
}

export default CustomButton;
