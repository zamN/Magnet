import Masonry from 'masonry-layout';

export default class HomepageController {
  constructor($scope) {
  'ngInject';

    this.msnry =  angular.element(document).ready(function () {
      return new Masonry('.grid', {
       itemSelector: '.grid-item',
       columnWidth: 100
      });
    });
    this.loggedIn = true;
    // $scope.loggedIn = false;
    this.keywords = '';
  }

  search(){
    console.log(this.keywords);
  }
}
