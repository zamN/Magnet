export function NavbarDirective(){
  'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'directives/navbar/navbar.html',
      scope: false,
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
}

class NavbarController {
  constructor(){

  }
}
