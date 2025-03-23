import Grid from "@mui/material/Grid2";
import DataViewer from "../components/DataViewer";

interface MainPageProps {
	viewerDataList: viewerData[];
}

const MainPage: React.FC<MainPageProps> = ({ viewerDataList }) => {
	return (
		<div>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 8 }}>
				{viewerDataList.map((data, index) => (
					<DataViewer
						xData={data.xData}
						yData={data.yData}
						pLabel={data.pLabel}
						pColor={data.pColor}
						xLabel={data.xLabel}
						key={index}
					/>
				))}
			</Grid>
		</div>
	);
};

export default MainPage;
