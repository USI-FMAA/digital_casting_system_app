import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Connect } from "./components/ConnectLogin";
import { DashBoard } from "./components/DashBoard";
import MainPages from "./pages/MainPages";
import { usePageStore } from "./store/pageStore";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import DeviceThermostatRoundedIcon from "@mui/icons-material/DeviceThermostatRounded";
import ExpandRoundedIcon from "@mui/icons-material/ExpandRounded";

function App() {
	const [greetMsg, setGreetMsg] = useState("");

	const { currentPage, setCurrentPage } = usePageStore();

	const devices = new Map<
		string,
		{ icon: React.ReactNode | null; name: string }
	>([
		["Main", { icon: <OtherHousesIcon />, name: "Main" }],
		[
			"Temperature",
			{ icon: <DeviceThermostatRoundedIcon />, name: "Temperature" },
		],
		["Pressure", { icon: <ExpandRoundedIcon />, name: "Pressure" }],
		["Mixer", { icon: <></>, name: "Mixer" }],
		["Concrete pump", { icon: <></>, name: "Concrete pump" }],
		["Dosing pump", { icon: <></>, name: "Dosing pump" }],
	]);

	const [name, setName] = useState<string>("");
	const [pages, setPages] = useState<string>("");

	// async function greet() {
	// 	// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
	// 	setGreetMsg(await invoke("greet", { name }));
	// 	// setPages({ name });
	// }
	//
	const viewerDataList: viewerData[] = [
		{
			xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			yData: [0, 45, 72, 19, 88, 33, 56, 91, 27, 64],
			pLabel: "Temperature Readings",
			pColor: "#FF5733",
			xLabel: [
				"8 AM",
				"9 AM",
				"10 AM",
				"11 AM",
				"12 PM",
				"1 PM",
				"2 PM",
				"3 PM",
				"4 PM",
				"5 PM",
			],
		},
		{
			xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			yData: [0, 23, 67, 91, 34, 82, 15, 49, 73, 28],
			pLabel: "Pressure Levels",
			pColor: "#33FF57",
			xLabel: [
				"8 AM",
				"9 AM",
				"10 AM",
				"11 AM",
				"12 PM",
				"1 PM",
				"2 PM",
				"3 PM",
				"4 PM",
				"5 PM",
			],
		},
		{
			xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			yData: [0, 12, 98, 55, 76, 41, 63, 29, 87, 35],
			pLabel: "Mixer Speed",
			pColor: "#3357FF",
			xLabel: [
				"8 AM",
				"9 AM",
				"10 AM",
				"11 AM",
				"12 PM",
				"1 PM",
				"2 PM",
				"3 PM",
				"4 PM",
				"5 PM",
			],
		},
		{
			xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			yData: [0, 81, 39, 64, 27, 95, 18, 52, 70, 43],
			pLabel: "Pump Output",
			pColor: "#FF33A1",
			xLabel: [
				"8 AM",
				"9 AM",
				"10 AM",
				"11 AM",
				"12 PM",
				"1 PM",
				"2 PM",
				"3 PM",
				"4 PM",
				"5 PM",
			],
		},
	];

	const renderPage = () => {
		switch (currentPage) {
			case "Main":
				return <MainPages viewerDataList={viewerDataList} />;
			// case "Temperature":
			//   return <TemperaturePage/>;
			// case "Pressure":
			//   return <PressurePage />;
			// case "Mixer":
			//   return <MixerPage />;
			// case "Concrete pump":
			//   return <ConcretePumpPage />;
			// case "Dosing pump":
			//   return <DosingPumpPage />;
			default:
				return null;
		}
	};

	return (
		<main>
			<div className="flex flex-row mt-10 mr-10 ml-10 bg-gray-200 border-1 rounded-2xl">
				{/* project title */}
				<div className="basis-1/2">
					<h1 className="text-4xl font-bold">Digital Casting System</h1>
					<Connect />
				</div>
			</div>
			{/* main panel */}
			<div className="flex flex-row mt-10 mr-10 ml-10">
				<div className="flex">
					<DashBoard devices={devices} />
				</div>
				<div className="flex-3/5 flex border rounded-2xl border-gray-700">
					{renderPage()}
				</div>
			</div>
		</main>
	);
}

export default App;
