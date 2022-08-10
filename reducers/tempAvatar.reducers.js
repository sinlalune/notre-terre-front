export default function (tempAvatar = "", action) {
	if (action.type === "saveTempAvatar") {
		console.log("ordre reducer savetempavatar");
		return action.newAvatar;
	} else {
		return tempAvatar;
	}
}
