"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _postcssSelectorParser = _interopRequireDefault(require("postcss-selector-parser"));

var _exists = _interopRequireDefault(require("../exists"));

var _isMixin = _interopRequireDefault(require("../isMixin"));

var _plugin = _interopRequireDefault(require("../plugin"));

var _browsers = require("../dictionary/browsers");

var _identifiers = require("../dictionary/identifiers");

var _postcss = require("../dictionary/postcss");

var _tags = require("../dictionary/tags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function analyse(ctx, rule) {
  return selectors => {
    selectors.each(selector => {
      if ((0, _exists.default)(selector, 0, _tags.BODY) && (0, _exists.default)(selector, 1, ':empty') && (0, _exists.default)(selector, 2, ' ') && selector.at(3)) {
        ctx.push(rule, {
          identifier: _identifiers.SELECTOR,
          hack: selector.toString()
        });
      }
    });
  };
}

var _default = (0, _plugin.default)([_browsers.FF_2], [_postcss.RULE], function (rule) {
  if ((0, _isMixin.default)(rule)) {
    return;
  }

  (0, _postcssSelectorParser.default)(analyse(this, rule)).processSync(rule.selector);
});

exports.default = _default;
module.exports = exports.default;