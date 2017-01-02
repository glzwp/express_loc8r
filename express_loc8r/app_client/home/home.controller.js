angular
    .module('loc8rApp')
    .controller('homeCtrl', homeCtrl);
function homeCtrl() {
    var vm = this; //Angular uses 'this' inside the function, and binds it to $scope. Store 'this' in vm. We can access vm instead of the scope
    vm.pageHeader = {
        title: 'Loc8r',
        strapline: 'Find places to work with wifi near you!'
    };
    vm.sidebar = {
        content: "Looking for wifi and a seat etc etc"
    };
}