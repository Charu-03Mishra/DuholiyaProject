import * as Yup from "yup";

export const loginValidation = Yup.object({
	email: Yup.string().email().required("Enter the valid Email"),
	password: Yup.string().min(6).max(20).required("password atleast 6 word "),
	confirmpassword: Yup.string()
		.required()
		.oneOf([Yup.ref("password"), null], "Password must match"),
});

export const profileValidation = Yup.object({
	name: Yup.string().min(2).max(20).required("Name is Required"),
	phonenumber: Yup.number().min(10).max(13).required("PhoneNumber Is Requried"),
	email: Yup.string().email().required("Enter the valid Email"),
	usage: Yup.string(),
	file: Yup.string().required("file must be uploded"),
});

export const RequestValidation = Yup.object({
	name: Yup.string().min(2).max(20).required("Name is Required"),
	phonenumber: Yup.number().min(10).max(13).required("PhoneNumber Is Requried"),
	email: Yup.string().email().required("Enter the valid Email"),
	company: Yup.string().min(2).max(20).required("Company Name is Required"),
});
export const ContactValidation = Yup.object({
	name: Yup.string().min(2).max(20).required("Name is Required"),
	phonenumber: Yup.number().min(10).max(13).required("PhoneNumber Is Requried"),
	email: Yup.string().email().required("Enter the valid Email"),
	subject: Yup.string().min(2).max(20).required("Subject Name is Required"),
	message: Yup.string().min(2).max(100).required("Message is Required"),
});
