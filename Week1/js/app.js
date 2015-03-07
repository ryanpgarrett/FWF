function ShopController($scope){
    $scope.itemName;
    $scope.itemArray = ["one","two","three"];
    $scope.addItem = function(){
        $scope.itemArray.push($scope.itemName);
        $scope.itemName = "";
    }

    $scope.deleteItem = function(deletedItem){
        var idx = $scope.itemArray.indexOf(deletedItem);
        $scope.itemArray.splice(idx, 1);
    }

}