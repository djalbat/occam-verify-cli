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
var _equality = /*#__PURE__*/ _interopRequireDefault(require("../equality"));
var _file = /*#__PURE__*/ _interopRequireDefault(require("../mixins/file"));
var _logging = /*#__PURE__*/ _interopRequireDefault(require("../mixins/logging"));
var _callbacks = /*#__PURE__*/ _interopRequireDefault(require("../mixins/callbacks"));
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
                    var equality = _equality.default.fromProofStep(proofStep);
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
                var statementMatches;
                statementMatches = this.proofSteps.some(function(proofStep) {
                    statementMatches = proofStep.matchStatement(statementNode);
                    if (statementMatches) {
                        return true;
                    }
                });
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
Object.assign(ProofContext.prototype, _callbacks.default);
var _default = ProofContext;
function equalitiesFromProofSteps(proofSteps, context) {
    var equalities = [];
    return equalities;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgZmlsZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZpbGVcIjtcbmltcG9ydCBsb2dnaW5nTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbG9nZ2luZ1wiO1xuaW1wb3J0IGNhbGxiYWNrc01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NhbGxiYWNrc1wiO1xuXG5pbXBvcnQgeyBwdXNoLCBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgUHJvb2ZDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLnByb29mU3RlcHMgPSBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcHVzaCh2YXJpYWJsZXMsIHRoaXMudmFyaWFibGVzKTtcblxuICAgIGNvbnN0IGNvbnRleHRWYXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICBwdXNoKHZhcmlhYmxlcywgY29udGV4dFZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBsZXQgcHJvb2ZTdGVwcyA9IHRoaXMuY29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBwcm9vZlN0ZXBzID0gW1xuICAgICAgLi4ucHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMucHJvb2ZTdGVwc1xuICAgIF07XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7XG4gICAgbGV0IGxhc3RQcm9vZlN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwc0xlbmd0aCA9IHRoaXMucHJvb2ZTdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAocHJvb2ZTdGVwc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RQcm9vZlN0ZXAgPSBsYXN0KHRoaXMucHJvb2ZTdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RQcm9vZlN0ZXA7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTsgfVxuXG4gIGdldEVxdWFsaXRpZXMoKSB7XG4gICAgY29uc3QgZXF1YWxpdGllcyA9IFtdLFxuICAgICAgICAgIHN0YXJ0ID0gLU1BWElNVU1fSU5ERVhFU19MRU5HVEgsICAvLy9cbiAgICAgICAgICBwcm9vZlN0ZXBzID0gdGhpcy5wcm9vZlN0ZXBzLnNsaWNlKHN0YXJ0KTsgLy8vXG5cbiAgICBwcm9vZlN0ZXBzLmZvckVhY2goKHByb29mU3RlcCkgPT4ge1xuICAgICAgY29uc3QgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgICBlcXVhbGl0aWVzLnB1c2goZXF1YWxpdHkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVxdWFsaXRpZXM7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkUHJvb2ZTdGVwKHByb29mU3RlcCkge1xuICAgIHRoaXMucHJvb2ZTdGVwcy5wdXNoKHByb29mU3RlcCk7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudE1hdGNoZXM7XG5cbiAgICBzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5wcm9vZlN0ZXBzLnNvbWUoKHByb29mU3RlcCkgPT4ge1xuICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IHByb29mU3RlcC5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIHN0YXRlbWVudE1hdGNoZXMgPSB0aGlzLmNvbnRleHQubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIHByb29mQ29udGV4dCA9IG5ldyBQcm9vZkNvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBwcm9vZkNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mQ29udGV4dChwcm9vZkNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gcHJvb2ZDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdO1xuXG4gICAgcHJvb2ZDb250ZXh0ID0gbmV3IFByb29mQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMpO1xuXG4gICAgcmV0dXJuIHByb29mQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFByb29mQ29udGV4dC5wcm90b3R5cGUsIGZpbGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQcm9vZkNvbnRleHQucHJvdG90eXBlLCBsb2dnaW5nTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgY2FsbGJhY2tzTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvb2ZDb250ZXh0O1xuXG5mdW5jdGlvbiBlcXVhbGl0aWVzRnJvbVByb29mU3RlcHMocHJvb2ZTdGVwcywgY29udGV4dCkge1xuICBsZXQgZXF1YWxpdGllcyA9IFtdO1xuXG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG4iXSwibmFtZXMiOlsiUHJvb2ZDb250ZXh0IiwiY29udGV4dCIsInZhcmlhYmxlcyIsInByb29mU3RlcHMiLCJnZXRDb250ZXh0IiwiZ2V0VmFyaWFibGVzIiwicHVzaCIsImNvbnRleHRWYXJpYWJsZXMiLCJnZXRQcm9vZlN0ZXBzIiwiZ2V0TGFzdFByb29mU3RlcCIsImxhc3RQcm9vZlN0ZXAiLCJwcm9vZlN0ZXBzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdCIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdGllcyIsInN0YXJ0IiwiTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCIsInNsaWNlIiwiZm9yRWFjaCIsInByb29mU3RlcCIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tUHJvb2ZTdGVwIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsImFkZFByb29mU3RlcCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1hdGNoZXMiLCJzb21lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJuYW1lIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJwcm9vZkNvbnRleHQiLCJmcm9tUHJvb2ZDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZmlsZU1peGlucyIsImxvZ2dpbmdNaXhpbnMiLCJjYWxsYmFja3NNaXhpbnMiLCJlcXVhbGl0aWVzRnJvbVByb29mU3RlcHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlKQTs7O2VBQUE7Ozs2REEvSXFCO3lEQUNFOzREQUNHOzhEQUNFO3FCQUVEO3lCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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