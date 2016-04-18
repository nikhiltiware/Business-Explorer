businessApp.controller('homeController', function($scope, $rootScope, $http, $stateParams, $state) {
    $scope.setHome = function() {
        $rootScope.isHome = true;
    }

    $scope.cities=[ "McKees Rocks","rankin","Bellevue","Brookline","Matthews","Middleton","Ahwatukee","Pheonix","Sun Lakes","Goodyear","Surprise","McAdenville","Ingram","Scotesdale","Glibert","Guadalupe","","Tortilla Flat","Pierrefonds","Kirkland","Dollard-des-Ormeaux","Greenfield Park","Leith","Stallings","Bonnyrigg","Green Tree","Spring Valley","Queensferry","Monroe","Karlsruhe","Bietigheim","henderson","Ste-Rose","North Carolina","Rock Hill","Meza","Central City Village","Kahnawake","London","Laveen Village","Bethel Park","Clover","De Forest","Monona","Gilbert","Fort Mcdowell","Coolidge","Higley","Stoughton","Braddock","Avondale","Morristown","Shadyside","Lasalle","LaSalle","South Queensferry","Bridgeville","Dallas","Lawrenceville","Ratho","Oregon","Locust","Enterprise","Etna","Pfinztal","Waldbronn","New Dundee","Water of Leith","Burbank","Conestogo","QuÃ©bec","Sainte-ThÃ©rÃ¨se","Forchheim","Midlothian","Glasgow","Balerno","San Diego","Whitehall","Dalgety Bay","Edinburgh City of","Gilbert, AZ","Nboulder City","Henderson NV","Las Vegas, NV","Ahwatukee Foothills Village","Homestead","McKeesport","Mc Kees Rocks","Pittsburgh","Carnegie","West Homestead","Belmont","Mesa","Las Vegas","Sunrise","Tonopah","Mint Hill","Verona","Mount Washington","Regent Square","DeForest","W Henderson","Montreal","La Prairie","Boisbriand","Cote Saint-Luc","Montreal-Ouest","Newbridge","Mathews","Eggenstein-Leopoldshafen","Weingarten","Beaconsfield","Pittsburgh/S. Hills Galleria","Central Henderson","Victoria Park","Stutensee","Weingarten (Baden)","MontrÃ©al-Ouest","Mcfarland","phoenix","Stutensee-Blankenloch","Lower Lawrenceville","Whitney","Scotland","Saint Leonard","Huntersville","Lake Wylie","Deforest","Chandler","Glendale","Gold Canyon","Apache Junction","Sedona","Charlotte ","Concord Mills","Indian Trail","Roosevelt","Youngtown","Gila Bend","Nellis AFB","North Scottsdale","LAS VEGAS","Pointe-Aux-Trembles","Edgewood","Verdun","Sainte-Anne-De-Bellevue","Sainte-Genevieve","Baie-D'urfe","Cambridge","Mont-Royal","Montreal-Est","Edinburgh","Tonto Basin","Allegheny","Brentwood","Heidelberg","N E Las Vegas","Rheinstetten","WÃ¶rth am Rhein","Indian Land","Lake Las Vegas","Metro Phoenix","Straiton","Le Vieux-Port","Kennedy Township","Bonnyrigg and Lasswade","Sainte-Anne-de-Bellevue","NELLIS AFB","Mount Royal","Bloomfield","WÃ¶rth","Queen Valley","Bruchsal","Dollard-Des Ormeaux","Saint-Henri","Dormont","Aspinwall","Delmont","University","Mc Farland","McFarland","Urbana","Champaign","Savoy","Phoenix-Ahwatukee","chandler","Paradise Valley","Goldfield","North Las Vegas","Henderson","Wickenburg","Fitchburg","Dane","Waxhaw","Oakland","Squirrel Hill","Concord","Mckees Rocks","Summerlin","Mesa AZ","Boulder City","Laveen","Mesa ","Litchfield Park ","MontrÃ©al","Stanfield","Westmount","Roxboro","Dorval","Terrebonne","Rosemere","Fabreville","Vimont","Musselburgh","Penicuik","Tega Cay","Boucherville","Cramond","RosemÃ¨re","Jockgrim","Grand Canyon","Clark","Milton Bridge","Mt Lebanon","Allentown","Fort mill","Ft. Mill","Phoenix ","CommunautÃ©-Urbaine-de-MontrÃ©al","Deux-Montagnes Regional County Municipality","Fort Kinnaird","Westworld Scottsdale","Los Angeles","Charlemagne","Estrella Village","Sunnyslope","West Mifflin","Wilkinsburg","Mount Holly","Fort Mill","Windsor","Phoenix","Phoenix, AZ","Florence","Peoria","Carefree","Maricopa","N Las Vegas","glendale","Waunakee","Harrisburg","Upper Saint Clair","Tolleson","Sun City","El Mirage","Waddell","Wittmann","Rio Verde","Nellis Air Force Base","Nellis Afb","Arcadia","Saint-Leonard","MontrÃ©al-Nord","Outremont","Mattews","Lachine","Pointe-Claire","Pointe Claire","Longueuil","Sainte-Therese","Kitchener","Dalkeith","Stockbridge","St Jacobs","Juniper Green","W Spring Valley","Karlsbad","Portobello","Centennial Hills","Firth of Forth","Sun City Anthem","Saint Laurent","Henderson and Las vegas","East Mesa","Montreal-West","Surprise Crossing","Phoenix Sky Harbor Center","Banksville","Le Sud-Ouest","Peoria ","L'ÃŽle-des-Soeurs","St. Agatha","Saint-laurent","Central","La Paz","Pittsburgh/Waterfront","Swissvale","Mount Lebanon","Charlotte","Pineville ","Madison","Anthem","Scottsdale","Cave Creek","C Las Vegas","Las Vegas ","Litchfield Park","Arlington","Black Canyon City","Buckeye","Independence","Millvale","Sharpsburg","Crafton","Sun City West","Green Valley","San Tan Valley","Chandler Heights","Paradise","Anjou","Montreal-Nord","Saint-Laurent","Dollard-Des-Ormeaux","Saint-Lambert","Blainville","Deux-Montagnes","MontÃ©al","Lasswade","Columbus","South Las Vegas","North Las Vegas ","Ettlingen","Rockport","N W Las Vegas","Sainte-Ann-De-Bellevue","Cote-Saint-Luc","ÃŽle des Soeurs","Breslau","L'ÃŽle-Bizard","Summerlin South","St Leonard","St-Laurent","Bruntsfield","City Center","Robinson Township","Cornwell Development","Southside Flats","Central City","Downtown","Chateau","East Liberty","South Gyle","St. Jacobs","Bocholt","Mascouche","Newington","Pittsburg","Mirabel","Shady Side","Phoenix Metro Area","110. Las Vegas","Maricopa AZ","Dravosburg","Munhall","Bellvue","Castle Shannon","Pineville","Sun Prairie","Tempe","Fountain Hills","Casa Grande","Queen Creek","N. Las Vegas","Cottage Grove","New River","Henderston","Tempe ","Old Scottsdale","Fort McDowell","Laval","Brossard","Saint-Hubert","Saint-Eustache","Waterloo","Loanhead","Inverkeithing","Roslin","Mt. Oliver Boro","MMRP","South Hills","Blawnox","Weddington","Wesley Chapel","Neuburg am Rhein","Durmersheim","North Queensferry","Rankin","Hagenbach","Pittsburrgh","W Summerlin","Glendale Az","Desert Ridge","South Mountain","Eagan","Chandler-Gilbert","New Town","Old Montreal","City of Edinburgh","Old Town","Scottdale","Stowe Township","Golden Square Mile"];

    $scope.warning=false;
    $scope.validateLocation = function(x){
        if($scope.cities.indexOf($rootScope.searchCities)>-1){
           if(x==1){
               $state.go('businessHome');
           }
           else if(x==2){
               $state.go('trendsHome');
           }
           else{
               $state.go('reviewerHome');
           }
        }else{
            alert('Enter your Location First...')
        }

    }

    $scope.findTypes=["Food","Restaurants","Shopping","Active Life","Arts & Entertainment", "Automotive", "Beauty & Spas", "Education", "Event Planning & Services", "Health & Medical", "Home Services", "Local Services"];

    $scope.findList= false;
    $scope.openFindDropDown = function(){
        $scope.findList= true;
    }
    $scope.setFindBox=function(searchString){
       $rootScope.findString=searchString.trim();
       $scope.findList= false;
    }

    $scope.openCityDropDown = function(){
         $scope.citiesList= true;

    }
    $scope.citiesList= false;
    $scope.setSearchBox= function(searchString){
       $rootScope.searchCities=searchString.trim();
       $scope.citiesList= false;
        //$scope.$apply();
    }

    $scope.applyBusinessFilter = function(){

        $state.go('businessFilter');

    }

});
