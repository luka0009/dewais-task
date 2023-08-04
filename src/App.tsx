import { useState } from "react";
import useFetch from "./hooks/useFetch";
import UserCard from "./components/UserCard";

function App() {
	const [userName, setUserName] = useState("");

	const { data, isLoading } = useFetch(userName);

	console.log(data);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const inputElement = e.currentTarget.querySelector("input");
		if (inputElement instanceof HTMLInputElement) {
			setUserName(inputElement.value);
		}
	};

	console.log("data", data);

	return (
		<>
			<div className="bg-gray-100 flex flex-col gap-9 items-center justify-center py-24">
				<div className="flex items-center justify-center gap-3">
					<svg width="24" height="24" viewBox="0 0 16 16">
						<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
					</svg>
					<h1>Search Github Users</h1>
				</div>

				<form onSubmit={handleSubmit}>
					<input 
					className="focus:outline-none border-b-2 mr-4 
					px-3 py-2 bg-gray-100 placeholder:text-gray-600"
					type="text" placeholder="Enter Username here..." />
					<button
						className="bg-blue-600 rounded-md px-2 py-1 text-white"
						type="submit"
					>
						Search
					</button>
				</form>

				{isLoading && <p>Loading...</p>}

				{data && <UserCard data={data} userName={userName} />}

				{!isLoading && !data && userName.length > 0 && (
					<div>User not found</div>
				)}
			</div>
		</>
	);
}

export default App;
