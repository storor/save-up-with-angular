/* global moment:false, require:false */
import { config } from './index.config';
import { mockConfig } from './mock.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { SavesController } from './components/saves/saves.controller';
import { SavesService } from './shared/saves/saves.service';
import { GoalsService } from './shared/goals/goals.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
require('../../node_modules/n3-charts/build/LineChart.js')

angular.module('saveUp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'saveUp.config', 'n3-pie-chart', 'n3-line-chart', 'firebase'])
  .constant('moment', moment)
  .config(config)
  .config(mockConfig)
  .config(routerConfig)
  .run(runBlock)
  .controller('SavesController', SavesController)
  .service('savesService', SavesService)
  .service('goalsService', GoalsService)
  .directive('acmeNavbar', NavbarDirective);
