"use strict";

import angular from 'angular';
import router from 'angular-ui-router';
import bootstrap from 'angular-bootstrap-npm';
import { routerConfig } from './index.routes.js';
import { NavbarDirective } from './directives/navbar/navbar-directive.js';
import { ProfilecardDirective } from './directives/profile-card/profile-card-directive.js';
import HomepageController from './views/homepage/homepage-ctrl.js';
import ProfileController from './views/profile/profile-ctrl.js';

angular.module('shareSpace', ['ui.router', 'ui.bootstrap'])
  .config(routerConfig)
  .directive('sharespaceNavbar', NavbarDirective)
  .directive('profileCard', ProfilecardDirective)
  .controller('HomepageController', HomepageController)
  .controller('ProfileController', ProfileController);
