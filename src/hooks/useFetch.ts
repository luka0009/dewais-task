import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { GitHubUserData, FetchResponse } from "../types";

export default function useFetch(username: string): FetchResponse {
	const [data, setData] = useState<GitHubUserData | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

  const token = import.meta.env.VITE_BEAERER_TOKEN;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	useEffect(() => {
		setIsLoading(true);
		axios
			.get<GitHubUserData>(`https://api.github.com/users/${username}`, config)
			.then((res: AxiosResponse<GitHubUserData>) => setData(res.data))
			.catch((err) => {setError(err.message)})
			.finally(() => setIsLoading(false));
	}, [username]);

	function refetch() {
		setIsLoading(true);
		axios
			.get<GitHubUserData>(username)
			.then((res: AxiosResponse<GitHubUserData>) => setData(res.data))
			.catch((err) => setError(err.message))
			.finally(() => setIsLoading(false));
	}

	return { isLoading, error, data, refetch };
}
