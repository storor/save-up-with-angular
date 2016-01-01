/* global moment:false */
import { config } from './index.config';
import { mockConfig } from './mock.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { SavesController } from './components/saves/saves.controller';
import { SavesService } from './shared/saves/saves.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
angular.module('saveUp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'saveUp.config'])
  .constant('moment', moment)
  .config(config)
  .config(mockConfig)
  .config(routerConfig)
  .run(runBlock)
  .controller('SavesController', SavesController)
  .service('savesService', SavesService)
  .directive('acmeNavbar', NavbarDirective);
