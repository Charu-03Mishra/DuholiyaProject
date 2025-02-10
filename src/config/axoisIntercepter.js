import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
	if (typeof window !== "undefined") {
		const token = localStorage.getItem("authToken");

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
	}
	return config;
});

axiosInstance.interceptors.response.use(
	(res) => res,
	async (error) => {
		if (error.response?.status === 401) {
			if (typeof window !== "undefined") {
				const token = localStorage.getItem("authToken");
				const refreshToken = localStorage.getItem("refreshToken");
				const data = {
					accesstoken: token,
					refreshtoken: refreshToken,
				};
				const res = await axios.post(
					`${import.meta.env.VITE_PUBLIC_APP_URL}/api/authorization/refresh`,
					data
				);

				if (res.status === 200) {
					localStorage.setItem("refreshToken", res.data.refreshToken);
					localStorage.setItem("authToken", res.data.token);
				}
			}
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;
