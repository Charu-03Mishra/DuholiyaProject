import * as Yup from "yup";

export const Registrationvalidation = Yup.object({
	email: Yup.string().email().required("Enter the valid Email"),
	password: Yup.string().min(6).max(20).required("password atleast 6 word "),
	confirmpassword: Yup.string()
		.required()
		.oneOf([Yup.ref("password"), null], "Password must match"),
});
export const loginValidation = Yup.object({
	email: Yup.string().email().required("Enter the valid Email"),
	password: Yup.string().min(6).max(20).required("password atleast 6 word "),
});

export const profileValidation = Yup.object({
	firstname: Yup.string().min(2).max(20).required("Name is Required"),
	lastname: Yup.string().min(2).max(20).required("Last Name is Required"),
	phone: Yup.number().min(10).required("PhoneNumber Is Requried"),
	email: Yup.string().email().required("Enter the valid Email"),
	dob: Yup.date(),
	gender: Yup.string(),
});

export const RequestValidation = Yup.object({
	name: Yup.string().min(2).max(20).required("Name is Required"),
	phonenumber: Yup.string().min(10).max(13).required("PhoneNumber Is Requried"),
	email: Yup.string().email().required("Enter the valid Email"),
	company: Yup.string().min(2).max(20).required("Company Name is Required"),
	message: Yup.string().min(2).max(100).required("Message is Required"),
});
export const ContactValidation = Yup.object({
	name: Yup.string().required("Name is Required"),
	phonenumber: Yup.string().min(10).required("PhoneNumber Is Requried"),
	email: Yup.string().email().required("Enter the valid Email"),
	subject: Yup.string().min(2).max(20).required("Subject Name is Required"),
	message: Yup.string().min(2).max(100).required("Message is Required"),
});

export const ProfileDashboardValidation = Yup.object({
	name: Yup.string().min(2).max(20).required("Name is Required"),
	lastname: Yup.string().min(2).max(20).required("LastName is Required"),
	phonenumber: Yup.number().min(10).required("PhoneNumber Is Requried"),
	email: Yup.string().email().required("Enter the valid Email"),
});
export const AddressDeshBoardValidation = Yup.object({
	address: Yup.string().min(20).required("Address must be requried"),
	state: Yup.string().min(2).required("state must be requried"),
	city: Yup.string().min(2).required("City must be requride"),
	pincode: Yup.number().min(6).required("Pincode must be requried"),
});
