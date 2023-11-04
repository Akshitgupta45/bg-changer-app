import { useState } from "react";

function App() {
	const [color, setColor] = useState("black");

	return (
		<>
			<div
				className="h-screen w-full duration-200"
				style={{ backgroundColor: color }}
			>
				<h1 className="flex justify-center py-7 text-2xl  ">Bg-Changer App</h1>
				<div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
					<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
						<button
							className="outline-none px-4 py-1 bg-red-600 rounded-full text-white shadow-lg"
							// style={{ backgroundColor: "red" }}
							onClick={() => setColor("red")}
						>
							Red
						</button>
						<button
							className="outline-none px-4 py-1 bg-blue-600 rounded-full text-white shadow-lg"
							// style={{ backgroundColor: "red" }}
							onClick={() => setColor("blue")}
						>
							blue
						</button>
						<button
							className="outline-none px-4 py-1 bg-green-600 rounded-full text-white shadow-lg"
							// style={{ backgroundColor: "red" }}
							onClick={() => setColor("green")}
						>
							green
						</button>
						<button
							className="outline-none px-4 py-1 bg-yellow-600 rounded-full text-white shadow-lg"
							// style={{ backgroundColor: "red" }}
							onClick={() => setColor("yellow")}
						>
							yellow
						</button>
						<button
							className="outline-none px-4 py-1 bg-purple-600 rounded-full text-white shadow-lg"
							// style={{ backgroundColor: "red" }}
							onClick={() => setColor("purple")}
						>
							purple
						</button>
						<button
							className="outline-none px-4 py-1 bg-pink-600 rounded-full text-white shadow-lg"
							// style={{ backgroundColor: "red" }}
							onClick={() => setColor("pink")}
						>
							pink
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
