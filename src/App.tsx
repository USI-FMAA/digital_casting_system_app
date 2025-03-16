import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Connect } from "./components/ConnectLogin";
import { DashBoard } from "./components/DashBoard";
import { DataViewer } from "./components/DataViewer";

function App() {
	const [greetMsg, setGreetMsg] = useState("");
	const devices = [
		"Main",
		"Concrete pump",
		"Dosing pump",
		"Mixer",
		"Temperature sensor",
	];
	const [name, setName] = useState("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
		setGreetMsg(await invoke("greet", { name }));
	}

	return (
		<main>
			<div className="flex flex-row mt-10 mr-10 ml-10 bg-white">
				{/* project title */}
				<div className="basis-1/2">
					<h1 className="text-4xl font-bold">Digital Casting System</h1>
					<Connect />
				</div>
			</div>
			{/* main panel */}
			<div className="flex flex-row mr-10 ml-10">
				<div className="flex-1/5 flex">
					<DashBoard deviceName={devices}/>
				</div>
				<div className="flex-4/5 flex outline-1">
					<DataViewer />
				</div>
			</div>
		</main>
	);
}

export default App;
