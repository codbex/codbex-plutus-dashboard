const viewData = {
	id: 'codbex-plutus-dashboard',
	label: 'Dashboard',
	lazyLoad: true,
	link: '/services/web/codbex-plutus/subviews/dashboard.html',
};
if (typeof exports !== 'undefined') {
	exports.getView = function () {
		return viewData;
	};
}
