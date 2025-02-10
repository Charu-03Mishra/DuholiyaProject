import axios from "axios";
import axiosInstance from "../config/axoisIntercepter";
import { data } from "react-router-dom";

class AuthApi {
	async register(data) {
		try {
			const res = await axios.post(
				`${import.meta.env.VITE_PUBLIC_APP_URL}/api/authorization/register`,
				data
			);
			console.log(res);

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
			// const token = localStorage.getItem("authToken");
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

			const res = await axiosInstance.put(
				`${import.meta.env.VITE_PUBLIC_APP_URL}/api/users/${id}/profile`,
				data
			);

			if (res.status === 200) {
				return res;
			}
		} catch (error) {
			console.log(error);
			return error?.response.data;
		}
	}

	async product() {
		try {
			const res = await axios.get(
				`${import.meta.env.VITE_PUBLIC_APP_URL}/api/products`
			);
			if (res.status === 200) {
				return res?.data;
			}
		} catch (error) {
			return error?.response.data;
		}
	}
	async productId(id) {
		try {
			const res = await axios.get(
				`${
					import.meta.env.VITE_PUBLIC_APP_URL
				}/api/products/${id}/pricing-plans`
			);
			if (res.status === 200) {
				return res?.data;
			}
		} catch (error) {
			return error?.response.data;
		}
	}

	async contactinfo() {
		try {
			const res = await axios.get(
				`${import.meta.env.VITE_PUBLIC_APP_URL}/api/support/contact-info`
			);
			if (res.status === 200) {
				return res;
			}
		} catch (error) {
			return error?.response.data;
		}
	}
	async contact(data) {
		try {
			const res = await axios.post(
				`${import.meta.env.VITE_PUBLIC_APP_URL}/api/support/reach-us`,
				data
			);
			if (res.status === 200) {
				return res;
			}
		} catch (error) {
			return error?.response.data;
		}
	}
	async Request(data) {
		try {
			const id = "9289c385-2943-454c-b44d-1d8e5b8dadf5";
			const res = await axios.post(
				`${import.meta.env.VITE_PUBLIC_APP_URL}/api/support/${id}/request-demo`,
				data
			);
			console.log(id);
			if (res.status === 200) {
				return res;
			}
		} catch (error) {
			return error?.response.data;
		}
	}
}

export const authApi = new AuthApi();
