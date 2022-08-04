export default function (user = {}, action) {
	if (action.type === "saveUserData") {
		return action.data;
	} else if (action.type === "clearUserData") {
		return {};
	} else {
		return user;
	}
}
