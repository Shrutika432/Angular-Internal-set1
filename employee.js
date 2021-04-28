var MyApp = angular.module("MyApp", []);

MyApp.controller("MyController",
    function ($scope){
        $scope.employee = [];
        $scope.c = 0;


        $scope.addRow = function () {
            // $scope.flagcheck_fun();
            $scope.flagcheck=true;
            if($scope.flagcheck)
            {
                $scope.c++;
                $scope.calcIncrement();
                $scope.employee.push({
                    fname: $scope.fname,
                    lname: $scope.lname,
                    dept: $scope.dept,
                    bsalary: $scope.bsalary,
                    inc: $scope.inc
                });
                $scope.EmptyTextBoxes();
            }
            else{
                alert("Inset Employee data!!!");
            }
        };

        $scope.calcIncrement = function(){
            if($scope.bsalary > 20000)
                $scope.inc = 5000;
            else
                $scope.inc = 2000;

        }

        $scope.flagcheck_fun = function () {
                $scope.flagcheck = true;
            if($scope.fname == null)
                $scope.flagcheck = false;
            if($scope.lname == null)
                $scope.flagcheck = false;
            if($scope.dept == null)
                $scope.flagcheck = false;
            if($scope.bsalary == null)
                $scope.flagcheck = false;
        };

        $scope.DeleteRow = function (val) {
            var index = $scope.employee.indexOf(val);
            $scope.employee.splice(index, 1);
        };

        $scope.EmptyTextBoxes = function () {
            $scope.fname = null;
            $scope.lname = null;
            $scope.dept = null;
            $scope.bsalary = null;
        }
    }
);
