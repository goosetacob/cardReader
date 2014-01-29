/*
//prevent random refresh
window.onbeforeunload = function() {
    return "All your info will be lost!";
}
*/

function MembersCtrl($scope) {
    $scope.members = [];
    
    $scope.addMember = function() {
        cardInfo = {text:$scope.memberText};


        //if first chr is '%' then it's card input
        //if(cardInfo[0] == '%') {
        //    alert(cardInfo[0]);
        //}

        //else data is normal name input
        
        $scope.members.push("Hello World");
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