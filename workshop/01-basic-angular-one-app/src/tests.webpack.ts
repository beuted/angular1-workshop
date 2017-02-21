// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import * as angular from 'angular';
import {} from 'angular-mocks';

var testsContext = require.context(".", true, /.test$/);
testsContext.keys().forEach(testsContext);