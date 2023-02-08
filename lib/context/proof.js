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
var _constants = require("../constants");
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
var ProofContext = /*#__PURE__*/ function() {
    function ProofContext(context, variables, proofSteps) {
        _classCallCheck(this, ProofContext);
        this.context = context;
        this.variables = variables;
        this.proofSteps = proofSteps;
    }
    _createClass(ProofContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                var variables = [];
                (0, _array.push)(variables, this.variables);
                var contextVariables = this.context.getVariables();
                (0, _array.push)(variables, contextVariables);
                return variables;
            }
        },
        {
            key: "getProofSteps",
            value: function getProofSteps() {
                var proofSteps = this.context.getProofSteps();
                proofSteps = _toConsumableArray(proofSteps).concat(_toConsumableArray(this.proofSteps));
                return proofSteps;
            }
        },
        {
            key: "getLastProofStep",
            value: function getLastProofStep() {
                var lastProofStep = null;
                var proofStepsLength = this.proofSteps.length;
                if (proofStepsLength > 0) {
                    lastProofStep = (0, _array.last)(this.proofSteps);
                }
                return lastProofStep;
            }
        },
        {
            key: "getMetavariables",
            value: function getMetavariables() {
                return this.context.getMetavariables();
            }
        },
        {
            key: "getEqualities",
            value: function getEqualities() {
                var equalities = [], start = -_constants.MAXIMUM_INDEXES_LENGTH, proofSteps = this.proofSteps.slice(start); ///
                proofSteps.forEach(function(proofStep) {
                    var equality = Equality.fromProofStep(proofStep);
                    if (equality !== null) {
                        equalities.push(equality);
                    }
                });
                return equalities;
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                this.variables.push(variable);
            }
        },
        {
            key: "addProofStep",
            value: function addProofStep(proofStep) {
                this.proofSteps.push(proofStep);
            }
        },
        {
            key: "matchStatement",
            value: function matchStatement(statementNode) {
                var statementMatches = false;
                if (!statementMatches) {
                    var proofStepMatchesStatement = this.proofSteps.some(function(proofStep) {
                        var proofStepMatchesStatement = proofStep.match(statementNode);
                        if (proofStepMatchesStatement) {
                            return true;
                        }
                    });
                    statementMatches = proofStepMatchesStatement; ///
                }
                if (!statementMatches) {
                    statementMatches = this.context.matchStatement(statementNode);
                }
                return statementMatches;
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var name = variableName, variables = this.getVariables(), variable = variables.find(function(variable) {
                    var matches = variable.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "isVariablePresentByVariableName",
            value: function isVariablePresentByVariableName(variableName) {
                var variable = this.findVariableByVariableName(variableName), variablePresent = variable !== null;
                return variablePresent;
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, variables = [], proofSteps = [], proofContext = new ProofContext(context, variables, proofSteps);
                return proofContext;
            }
        },
        {
            key: "fromProofContext",
            value: function fromProofContext(proofContext) {
                var context = proofContext, variables = [], proofSteps = [];
                proofContext = new ProofContext(context, variables, proofSteps);
                return proofContext;
            }
        }
    ]);
    return ProofContext;
}();
Object.assign(ProofContext.prototype, _file.default);
Object.assign(ProofContext.prototype, _logging.default);
var _default = ProofContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZmlsZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZpbGVcIjtcbmltcG9ydCBsb2dnaW5nTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbG9nZ2luZ1wiO1xuXG5pbXBvcnQgeyBwdXNoLCBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgUHJvb2ZDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLnByb29mU3RlcHMgPSBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcHVzaCh2YXJpYWJsZXMsIHRoaXMudmFyaWFibGVzKTtcblxuICAgIGNvbnN0IGNvbnRleHRWYXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICBwdXNoKHZhcmlhYmxlcywgY29udGV4dFZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBsZXQgcHJvb2ZTdGVwcyA9IHRoaXMuY29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBwcm9vZlN0ZXBzID0gW1xuICAgICAgLi4ucHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMucHJvb2ZTdGVwc1xuICAgIF07XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7XG4gICAgbGV0IGxhc3RQcm9vZlN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwc0xlbmd0aCA9IHRoaXMucHJvb2ZTdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAocHJvb2ZTdGVwc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RQcm9vZlN0ZXAgPSBsYXN0KHRoaXMucHJvb2ZTdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RQcm9vZlN0ZXA7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTsgfVxuXG4gIGdldEVxdWFsaXRpZXMoKSB7XG4gICAgY29uc3QgZXF1YWxpdGllcyA9IFtdLFxuICAgICAgICAgIHN0YXJ0ID0gLU1BWElNVU1fSU5ERVhFU19MRU5HVEgsICAvLy9cbiAgICAgICAgICBwcm9vZlN0ZXBzID0gdGhpcy5wcm9vZlN0ZXBzLnNsaWNlKHN0YXJ0KTsgLy8vXG5cbiAgICBwcm9vZlN0ZXBzLmZvckVhY2goKHByb29mU3RlcCkgPT4ge1xuICAgICAgY29uc3QgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgICBlcXVhbGl0aWVzLnB1c2goZXF1YWxpdHkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVxdWFsaXRpZXM7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkUHJvb2ZTdGVwKHByb29mU3RlcCkge1xuICAgIHRoaXMucHJvb2ZTdGVwcy5wdXNoKHByb29mU3RlcCk7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudE1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICghc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudCA9IHRoaXMucHJvb2ZTdGVwcy5zb21lKChwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudCA9IHByb29mU3RlcC5tYXRjaChzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IHRoaXMuY29udGV4dC5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgcHJvb2ZDb250ZXh0ID0gbmV3IFByb29mQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMpO1xuXG4gICAgcmV0dXJuIHByb29mQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZDb250ZXh0KHByb29mQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBwcm9vZkNvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW107XG5cbiAgICBwcm9vZkNvbnRleHQgPSBuZXcgUHJvb2ZDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcyk7XG5cbiAgICByZXR1cm4gcHJvb2ZDb250ZXh0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgZmlsZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFByb29mQ29udGV4dC5wcm90b3R5cGUsIGxvZ2dpbmdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9vZkNvbnRleHQ7XG4iXSwibmFtZXMiOlsiUHJvb2ZDb250ZXh0IiwiY29udGV4dCIsInZhcmlhYmxlcyIsInByb29mU3RlcHMiLCJnZXRDb250ZXh0IiwiZ2V0VmFyaWFibGVzIiwicHVzaCIsImNvbnRleHRWYXJpYWJsZXMiLCJnZXRQcm9vZlN0ZXBzIiwiZ2V0TGFzdFByb29mU3RlcCIsImxhc3RQcm9vZlN0ZXAiLCJwcm9vZlN0ZXBzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdCIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdGllcyIsInN0YXJ0IiwiTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCIsInNsaWNlIiwiZm9yRWFjaCIsInByb29mU3RlcCIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tUHJvb2ZTdGVwIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsImFkZFByb29mU3RlcCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1hdGNoZXMiLCJwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50Iiwic29tZSIsIm1hdGNoIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJuYW1lIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJwcm9vZkNvbnRleHQiLCJmcm9tUHJvb2ZDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZmlsZU1peGlucyIsImxvZ2dpbmdNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtKQTs7O2VBQUE7Ozt5REFoSnVCOzREQUNHO3FCQUVDO3lCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFBLEFBQU1BLDZCQXVJSCxBQXZJSDthQUFNQSxhQUNRQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVTs4QkFEdENIO1FBRUYsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFT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