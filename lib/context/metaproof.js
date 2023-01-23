"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _file = /*#__PURE__*/ _interopRequireDefault(require("../mixins/file"));
var _logging = /*#__PURE__*/ _interopRequireDefault(require("../mixins/logging"));
var _callbacks = /*#__PURE__*/ _interopRequireDefault(require("../mixins/callbacks"));
var _array = require("../utilities/array");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var MetaproofContext = /*#__PURE__*/ function() {
    function MetaproofContext(context, metavariables, metaproofSteps) {
        _classCallCheck(this, MetaproofContext);
        this.context = context;
        this.metavariables = metavariables;
        this.metaproofSteps = metaproofSteps;
    }
    _createClass(MetaproofContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getMetavariables",
            value: function getMetavariables() {
                var metavariables = [];
                (0, _array.push)(metavariables, this.metavariables);
                var contextMetavariables = this.context.getMetavariables();
                (0, _array.push)(metavariables, contextMetavariables);
                return metavariables;
            }
        },
        {
            key: "getMetaproofSteps",
            value: function getMetaproofSteps() {
                var metaproofSteps = this.context.getMetaproofSteps();
                metaproofSteps = _toConsumableArray(metaproofSteps).concat(_toConsumableArray(this.metaproofSteps));
                return metaproofSteps;
            }
        },
        {
            key: "getLastMetaproofStep",
            value: function getLastMetaproofStep() {
                var lastMetaproofStep = null;
                var metaproofStepsLength = this.metaproofSteps.length;
                if (metaproofStepsLength > 0) {
                    lastMetaproofStep = (0, _array.last)(this.metaproofSteps);
                }
                return lastMetaproofStep;
            }
        },
        {
            key: "addMetavariable",
            value: function addMetavariable(metavariable) {
                this.metavariables.push(metavariable);
            }
        },
        {
            key: "addMetaproofStep",
            value: function addMetaproofStep(metaproofStep) {
                this.metaproofSteps.push(metaproofStep);
            }
        },
        {
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode) {
                var metastatementMatches;
                metastatementMatches = this.metaproofSteps.some(function(metaproofStep) {
                    metastatementMatches = metaproofStep.matchMetastatement(metastatementNode);
                    if (metastatementMatches) {
                        return true;
                    }
                });
                if (!metastatementMatches) {
                    metastatementMatches = this.context.matchMetastatement(metastatementNode);
                }
                return metastatementMatches;
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                var name = metavariableName, metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var matches = metavariable.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "isMetavariablePresentByVariableName",
            value: function isMetavariablePresentByVariableName(metavariableName) {
                var metavariable = this.findMetavariableByMetavariableName(metavariableName), metavariablePresent = metavariable !== null;
                return metavariablePresent;
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, metaproofSteps = [], metaproofContext = new MetaproofContext(context, metaproofSteps);
                return metaproofContext;
            }
        },
        {
            key: "fromMetaproofContext",
            value: function fromMetaproofContext(metaproofContext) {
                var context = metaproofContext, metavariables = [], metaproofSteps = [];
                metaproofContext = new MetaproofContext(context, metavariables, metaproofSteps); ///
                return metaproofContext;
            }
        }
    ]);
    return MetaproofContext;
}();
Object.assign(MetaproofContext.prototype, _file.default);
Object.assign(MetaproofContext.prototype, _logging.default);
Object.assign(MetaproofContext.prototype, _callbacks.default);
var _default = MetaproofContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L21ldGFwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZpbGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9maWxlXCI7XG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcbmltcG9ydCBjYWxsYmFja3NNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jYWxsYmFja3NcIjtcblxuaW1wb3J0IHsgcHVzaCwgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgTWV0YXByb29mQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMgPSBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcHVzaChtZXRhdmFyaWFibGVzLCB0aGlzLm1ldGF2YXJpYWJsZXMpO1xuXG4gICAgY29uc3QgY29udGV4dE1ldGF2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgcHVzaChtZXRhdmFyaWFibGVzLCBjb250ZXh0TWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGFwcm9vZlN0ZXBzKCkge1xuICAgIGxldCBtZXRhcHJvb2ZTdGVwcyA9IHRoaXMuY29udGV4dC5nZXRNZXRhcHJvb2ZTdGVwcygpO1xuXG4gICAgbWV0YXByb29mU3RlcHMgPSBbICAvLy9cbiAgICAgIC4uLm1ldGFwcm9vZlN0ZXBzLFxuICAgICAgLi4udGhpcy5tZXRhcHJvb2ZTdGVwc1xuICAgIF07XG5cbiAgICByZXR1cm4gbWV0YXByb29mU3RlcHM7XG4gIH1cblxuICBnZXRMYXN0TWV0YXByb29mU3RlcCgpIHtcbiAgICBsZXQgbGFzdE1ldGFwcm9vZlN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXByb29mU3RlcHNMZW5ndGggPSB0aGlzLm1ldGFwcm9vZlN0ZXBzLmxlbmd0aDtcblxuICAgIGlmIChtZXRhcHJvb2ZTdGVwc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RNZXRhcHJvb2ZTdGVwID0gbGFzdCh0aGlzLm1ldGFwcm9vZlN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdE1ldGFwcm9vZlN0ZXA7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCkge1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMucHVzaChtZXRhcHJvb2ZTdGVwKTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWF0Y2hlcztcblxuICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5tZXRhcHJvb2ZTdGVwcy5zb21lKChtZXRhcHJvb2ZTdGVwKSA9PiB7XG4gICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IG1ldGFwcm9vZlN0ZXAubWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKG1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFtZXRhc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSB0aGlzLmNvbnRleHQubWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIG1ldGFwcm9vZkNvbnRleHQgPSBuZXcgTWV0YXByb29mQ29udGV4dChjb250ZXh0LCBtZXRhcHJvb2ZTdGVwcyk7XG5cbiAgICByZXR1cm4gbWV0YXByb29mQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXByb29mQ29udGV4dChtZXRhcHJvb2ZDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IG1ldGFwcm9vZkNvbnRleHQsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YXByb29mU3RlcHMgPSBbXTtcblxuICAgIG1ldGFwcm9vZkNvbnRleHQgPSBuZXcgTWV0YXByb29mQ29udGV4dChjb250ZXh0LCBtZXRhdmFyaWFibGVzLCBtZXRhcHJvb2ZTdGVwcyk7ICAvLy9cblxuICAgIHJldHVybiBtZXRhcHJvb2ZDb250ZXh0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTWV0YXByb29mQ29udGV4dC5wcm90b3R5cGUsIGZpbGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihNZXRhcHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgbG9nZ2luZ01peGlucyk7XG5PYmplY3QuYXNzaWduKE1ldGFwcm9vZkNvbnRleHQucHJvdG90eXBlLCBjYWxsYmFja3NNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhcHJvb2ZDb250ZXh0OyJdLCJuYW1lcyI6WyJNZXRhcHJvb2ZDb250ZXh0IiwiY29udGV4dCIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhcHJvb2ZTdGVwcyIsImdldENvbnRleHQiLCJnZXRNZXRhdmFyaWFibGVzIiwicHVzaCIsImNvbnRleHRNZXRhdmFyaWFibGVzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJnZXRMYXN0TWV0YXByb29mU3RlcCIsImxhc3RNZXRhcHJvb2ZTdGVwIiwibWV0YXByb29mU3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0IiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiYWRkTWV0YXByb29mU3RlcCIsIm1ldGFwcm9vZlN0ZXAiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzIiwic29tZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibmFtZSIsImZpbmQiLCJtYXRjaGVzIiwibWF0Y2hOYW1lIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJtZXRhcHJvb2ZDb250ZXh0IiwiZnJvbU1ldGFwcm9vZkNvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJmaWxlTWl4aW5zIiwibG9nZ2luZ01peGlucyIsImNhbGxiYWNrc01peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNEhBOzs7ZUFBQTs7O3lEQTFIdUI7NERBQ0c7OERBQ0U7cUJBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQUEsQUFBTUEsaUNBZ0hILEFBaEhIO2FBQU1BLGlCQUNRQyxPQUFPLEVBQUVDLGFBQWEsRUFBRUMsY0FBYzs4QkFEOUNIO1FBRUYsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTs7aUJBSnBCSDs7WUFPSkksS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixJQUFNSCxnQkFBZ0IsRUFBRTtnQkFFeEJJLElBQUFBLFdBQUksRUFBQ0osZUFBZSxJQUFJLENBQUNBLGFBQWE7Z0JBRXRDLElBQU1LLHVCQUF1QixJQUFJLENBQUNOLE9BQU8sQ0FB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