import axios from "axios";
import axiosInstance from "../config/axoisIntercepter";

class AuthApi {
	async register(data) {
		try {
			const res = await axios.post(
				`${import.meta.env.VITE_PUBLIC_APP_URL}/api/authorization/register`,
				data
			);
			console.log(data);

			if (res.status === 200) {
				localStorage.setItem("registerid", res.data);
				return res;
			}
		} catch (error) {
			return error?.response.data;
		}
	}

	async login(data) {
		try {
			const res = await axios.post(
				`${import.meta.env.VITE_PUBLIC_APP_URL}/api/authorization/login`,
				data
			);
			console.log(data);

			if (res.status === 200) {
				localStorage.setItem("refreshToken", res.data.refreshToken);
				localStorage.setItem("authToken", res.data.token);
				return res;
			}
		} catch (error) {
			console.log(error);
			return error?.response.data;
		}
	}

	async profile(data) {
		try {
			const token = localStorage.getItem("authToken");
			// const res = await axios.post(
			// 	`${import.meta.env.VITE_PUBLIC_APP_URL}/api/authorization/login`,
			// 	data,
			// 	{
			// 		headers:{
			// 			Authorization:`Bearer ${token} `
			// 		}
			// 	}
			// );
			const id = localStorage.getItem("registerid");
			console.log(id);

			const res = await axiosInstance.put(
				`${import.meta.env.VITE_PUBLIC_APP_URL}/api/users/${id}/profile`,
				data
			);
			console.log(data);

			if (res.status === 200) {
				return res;
			}
		} catch (error) {
			console.log(error);
			return error?.response.data;
		}
	}
}

export const authApi = new AuthApi();
