"use strict";

var assert = require('assert');

var tasks = require('../src/05-regex-tasks');

it.optional = require('../extensions/it-optional');
describe('05-regex-tasks', function () {
  it.optional('getRegexForGuid should match the valid GUID', function () {
    var result = tasks.getRegexForGuid();
    ['{3F2504E0-4F89-41D3-9A0C-0305E82C3301}', '{21EC2020-3AEA-4069-A2DD-08002B30309D}', '{0c74f13f-fa83-4c48-9b33-68921dd72463}'].forEach(function (str) {
      assert(result.test(str), "regex does not match '".concat(str, "'"));
    });
    ['{D44EF4F4-280B47E5-91C7-261222A59621}', '{D1A5279D-B27D-4CD4-A05E-EFDH53D08E8D}', '{5EDEB36C-9006-467A8D04-AFB6F62CD7D2}', '677E2553DD4D43B09DA77414DB1EB8EA', '0c74f13f-fa83-4c48-9b33-68921dd72463', 'The roof, the roof, the roof is on fire'].forEach(function (str) {
      assert(result.test(str) === false, "regex matches '".concat(str, "'"));
    });
  });
  it.optional('getRegexForPitSpot should be implemeted according to task', function () {
    var result = tasks.getRegexForPitSpot();
    ['pit', 'spot', 'spate', 'slap two', 'respite'].forEach(function (str) {
      assert(result.test(str), "regex does not match '".concat(str, "'"));
    });
    [' pt', 'Pot', 'peat', 'part'].forEach(function (str) {
      assert(result.test(str) === false, "regex matches '".concat(str, "'"));
    });
    assert(result.source.length < 13, "regexp length should be < 13, actual ".concat(result.source.length, " "));
  });
  it.optional('getPasswordValidator should return the password validator', function () {
    var result = tasks.getPasswordValidator(6);
    ['password', 'PASSWORD', 'pa55word', 'PASSW0RD', 'Pa55', 'Pa__W0rd', '   PassW0rd    '].forEach(function (str) {
      assert(!result.test(str), "Regex matches '".concat(str, "'"));
    });
    ['PA55word', 'passW0rd', 'pa55W0rd', 'pa55wordPASSW0RD', 'a1A2b3B4'].forEach(function (str) {
      assert(result.test(str), "Regex does not match '".concat(str, "'"));
    });
    assert(!'abcdABCD1234'.match(tasks.getPasswordValidator(20)), 'Password validator do not validate minLength restriction');
  });
});