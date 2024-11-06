const perspectiveData = {
    id: "codbex-plutus-launchpad",
    name: "plutus",
    link: "../codbex-plutus-dashboard/index.html",
    order: "0",
    icon: "../codbex-plutus-dashboard/images/navigation.svg",
};

if (typeof exports !== 'undefined') {
    exports.getPerspective = function () {
        return perspectiveData;
    }
}
