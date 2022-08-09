export default function (user = {}, action) {
	if (action.type === "saveUserData") {
		const newUser = action.data;
		console.log("log redux", newUser);
		return newUser;
	} else if (action.type === "clearUserData") {
		return {};
	} else {
		return user;
	}
}
