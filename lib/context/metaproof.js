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
            key: "getVariables",
            value: function getVariables() {
                return this.context.getVariables();
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
                var metastatementMatches = false;
                if (!metastatementMatches) {
                    var proofStepMatchesMetastatement = this.metaproofSteps.some(function(metaproofStep) {
                        var proofStepMatchesMetastatement = metaproofStep.match(metastatementNode);
                        if (proofStepMatchesMetastatement) {
                            return true;
                        }
                    });
                    metastatementMatches = proofStepMatchesMetastatement; ///
                }
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
                var context = fileContext, metavariables = [], metaproofSteps = [], metaproofContext = new MetaproofContext(context, metavariables, metaproofSteps);
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
var _default = MetaproofContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L21ldGFwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZpbGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9maWxlXCI7XG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcblxuaW1wb3J0IHsgcHVzaCwgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgTWV0YXByb29mQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMgPSBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcHVzaChtZXRhdmFyaWFibGVzLCB0aGlzLm1ldGF2YXJpYWJsZXMpO1xuXG4gICAgY29uc3QgY29udGV4dE1ldGF2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgcHVzaChtZXRhdmFyaWFibGVzLCBjb250ZXh0TWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGFwcm9vZlN0ZXBzKCkge1xuICAgIGxldCBtZXRhcHJvb2ZTdGVwcyA9IHRoaXMuY29udGV4dC5nZXRNZXRhcHJvb2ZTdGVwcygpO1xuXG4gICAgbWV0YXByb29mU3RlcHMgPSBbICAvLy9cbiAgICAgIC4uLm1ldGFwcm9vZlN0ZXBzLFxuICAgICAgLi4udGhpcy5tZXRhcHJvb2ZTdGVwc1xuICAgIF07XG5cbiAgICByZXR1cm4gbWV0YXByb29mU3RlcHM7XG4gIH1cblxuICBnZXRMYXN0TWV0YXByb29mU3RlcCgpIHtcbiAgICBsZXQgbGFzdE1ldGFwcm9vZlN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXByb29mU3RlcHNMZW5ndGggPSB0aGlzLm1ldGFwcm9vZlN0ZXBzLmxlbmd0aDtcblxuICAgIGlmIChtZXRhcHJvb2ZTdGVwc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RNZXRhcHJvb2ZTdGVwID0gbGFzdCh0aGlzLm1ldGFwcm9vZlN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdE1ldGFwcm9vZlN0ZXA7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCkge1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMucHVzaChtZXRhcHJvb2ZTdGVwKTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFtZXRhc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQgPSB0aGlzLm1ldGFwcm9vZlN0ZXBzLnNvbWUoKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQgPSBtZXRhcHJvb2ZTdGVwLm1hdGNoKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghbWV0YXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5jb250ZXh0Lm1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IChtZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgbWV0YXByb29mQ29udGV4dCA9IG5ldyBNZXRhcHJvb2ZDb250ZXh0KGNvbnRleHQsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBtZXRhcHJvb2ZDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhcHJvb2ZDb250ZXh0KG1ldGFwcm9vZkNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbWV0YXByb29mQ29udGV4dCwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdO1xuXG4gICAgbWV0YXByb29mQ29udGV4dCA9IG5ldyBNZXRhcHJvb2ZDb250ZXh0KGNvbnRleHQsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzKTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZkNvbnRleHQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihNZXRhcHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgZmlsZU1peGlucyk7XG5PYmplY3QuYXNzaWduKE1ldGFwcm9vZkNvbnRleHQucHJvdG90eXBlLCBsb2dnaW5nTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YXByb29mQ29udGV4dDsiXSwibmFtZXMiOlsiTWV0YXByb29mQ29udGV4dCIsImNvbnRleHQiLCJtZXRhdmFyaWFibGVzIiwibWV0YXByb29mU3RlcHMiLCJnZXRDb250ZXh0IiwiZ2V0VmFyaWFibGVzIiwiZ2V0TWV0YXZhcmlhYmxlcyIsInB1c2giLCJjb250ZXh0TWV0YXZhcmlhYmxlcyIsImdldE1ldGFwcm9vZlN0ZXBzIiwiZ2V0TGFzdE1ldGFwcm9vZlN0ZXAiLCJsYXN0TWV0YXByb29mU3RlcCIsIm1ldGFwcm9vZlN0ZXBzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdCIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImFkZE1ldGFwcm9vZlN0ZXAiLCJtZXRhcHJvb2ZTdGVwIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50TWF0Y2hlcyIsInByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50Iiwic29tZSIsIm1hdGNoIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJuYW1lIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsIm1ldGFwcm9vZkNvbnRleHQiLCJmcm9tTWV0YXByb29mQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImZpbGVNaXhpbnMiLCJsb2dnaW5nTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpSUE7OztlQUFBOzs7eURBL0h1Qjs0REFDRztxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBQSxBQUFNQSxpQ0F1SEgsQUF2SEg7YUFBTUEsaUJBQ1FDLE9BQU8sRUFBRUMsYUFBYSxFQUFFQyxjQUFjOzhCQUQ5Q0g7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBOztpQkFKcEJIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtn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