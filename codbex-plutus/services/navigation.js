const perspectiveData = {
	id: 'codbex-plutus-launchpad',
	name: 'Plutus',
	link: '../codbex-plutus/index.html',
	order: '0',
	icon: '../codbex-plutus/images/navigation.svg',
};

if (typeof exports !== 'undefined') {
	exports.getPerspective = function () {
		return perspectiveData;
	};
}
