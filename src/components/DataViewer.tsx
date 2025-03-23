import Grid from "@mui/material/Grid2";
import { LineChart } from "@mui/x-charts";

interface DataViewerProps {
	xData: number[];
	yData: number[];
	pLabel: string;
	pColor: string;
	xLabel: string[];
}

const DataViewer: React.FC<DataViewerProps> = ({ xData, yData, pLabel, pColor, xLabel }) => {
	return (
		<>
			<Grid size={6}>
				<LineChart
					width={500}
					height={300}
					xAxis={[{ data: xData, scaleType: "log" }]}
					series={[{ data: yData, label: pLabel, color: pColor },
					]}
				/>
			</Grid>
		</>
	);
};

export default DataViewer;
