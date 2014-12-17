JavaScript module example with private and public properties
====================================================

**A JavaScript module example with public and private properties accessible through the namespace.**

#### Summary

Properties and methods that are declared outside the return are private, only accessible within the module. Properties and methods declared within the return statement are publicly accessible.

```
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
```
#### Accessing the armory

The module contains a list of swords and axes for example the list of axes:

`["Bloodweep", "Shadow Strike", "Nethersbane", "Improved War Axe", "Wind's Ravager", "Spectral-Forged Bronzed Crescent", "Faithkeeper"]`

#### Get yourself an axe or sword 

`var myAxe = ARMORY.requestAxe("Wind's Ravager")`

Log out `myAxe` and you'll get an array with your requested weapon.

Check the inventory and you'll see your requested weapon has been removed from the array.

#### Add a new weapon to the armory

Your blacksmiths have been hard at work and crafted a new sword, you name it The Decapitator, add it to the armory:

`ARMORY.addSword("The Decapitator");`

Log out `ARMORY.inventory("sword");` and you'll see the new list.

*This is just a basic example of JavaScript module design pattern enabling public and private access to variables and functions.*
