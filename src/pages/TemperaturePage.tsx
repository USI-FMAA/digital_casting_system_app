import Grid from "@mui/material/Grid2";
import DataViewer from "../components/DataViewer";

interface TemperaturePageProps {
	viewerData: viewerData;
}

const TemperaturePage: React.FC<TemperaturePageProps> = ({ viewerData }) => {
	return (
		<div>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 8 }}>
				<DataViewer
					xData={viewerData.xData}
					yData={viewerData.yData}
					pLabel={viewerData.pLabel}
					pColor={viewerData.pColor}
					xLabel={viewerData.xLabel}
				/>
			</Grid>
		</div>
	);
};

export default TemperaturePage;
