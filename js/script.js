//prevent random refresh
window.onbeforeunload = function() {
    return "All your attendance info will be lost!";
}

function MembersCtrl($scope) {
    $scope.members = [];
    
    $scope.addMember = function() {
        if (($scope.memberText).substring(0,1) === '%' ) {
            //user swiped card!
            $scope.memberText = parseName($scope.memberText);
            $scope.members.push({text:$scope.memberText});
        }
        else {
            //user typed name
            $scope.memberText = $scope.memberText.toUpperCase();
            $scope.members.push({text:$scope.memberText});
        }

        $scope.memberText = '';
    };
    
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.members, function(member) {
                        count += member.done ? 0 : 1;
        });
        return count;
    };
    
    $scope.archive = function() {
        //filename will be 'date_attendance.csv'
        today = new Date();
        dd = today.getDate();
        mm = today.getMonth()+1;
        yy = today.getYear();
        end = "_attendance.csv";
        filename = String(dd).concat("-",mm,"-",yy,end);
        
        //text is the contents of the members array
        text = "Name: \n";
        for( i=0; i<$scope.members.length; i++) {
            text = text.concat($scope.members[i].text, "\n");
        }
        
        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        pom.setAttribute('download', filename);
        pom.click();
    };
}

function parseName(_input) {
    var _output = _input;

    var carrot1 = _input.indexOf("^");
    _output = _input.substring(carrot1+1);

    carrot1 = _output.indexOf("^");
    _output = _output.substring(0, carrot1);

    carrot1 = _output.indexOf("/");
    _output = _output.substring(carrot1+1) + _output.substring(0, carrot1);

    return _output;
}

function getOrgName() {
    var orgName = prompt("Message", "default value in the text field");
    
}






