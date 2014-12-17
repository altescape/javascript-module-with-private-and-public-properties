var ARMORY =  (function () {
	// Private
	var swordList = ["Eclipse", "Lightning", "Deathraze", "Silent Carver", "Vicious Skewer", "Lightbringer", "Vengeful Bronze Slicer"];
	var axeList = ["Bloodweep", "Shadow Strike", "Nethersbane", "Improved War Axe", "Wind's Ravager", "Spectral-Forged Bronzed Crescent", "Faithkeeper"];

	var removeSword = function (weapon) {
		var weaponIdx = swordList.indexOf(weapon);
		if (weaponIdx >= 0) {
			return swordList.splice(weaponIdx, 1);
		}
		return null;
	};
	var addSword = function (weapon) {
		swordList.push(weapon);
		return swordList;
	};
	var removeAxe = function (weapon) {
		var weaponIdx = axeList.indexOf(weapon);
		if (weaponIdx >= 0) {
			return axeList.splice(weaponIdx, 1);
		}
		return null;
	};
	var addAxe = function (weapon) {
		axeList.push(weapon);
		return axeList;
	};

	return {
		requestSword: function (weapon) {
			return removeSword(weapon);
		},
		requestAxe: function (weapon) {
			return removeAxe(weapon);
		},
		addSword: function (weapon) {
			return addSword(weapon);
		},
		addAxe: function (weapon) {
			return addAxe(weapon);
		},
		inventory: function (list) {
			switch (list) {
				case "sword":
					console.log(swordList);
					break;
				case "axe":
					console.log(axeList);
					break;
				default: 
					console.log("swordList\n");
					console.log(swordList);
					console.log("axeList\n");
					console.log(axeList);
			}
		}
	};
})();
