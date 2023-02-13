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
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../variable"));
var _equality = /*#__PURE__*/ _interopRequireDefault(require("../equality"));
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
                var variableName = variable.getName();
                (0, _array.filter)(this.variables, function(variable) {
                    var name = variable.getName(), nameVariableName = name === variableName;
                    if (!nameVariableName) {
                        return true;
                    }
                });
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
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var variables = this.variables.map(function(variable) {
                    var variableJSON = variable.toJSON(tokens);
                    variable = variableJSON;
                    return variable;
                }), json = {
                    variables: variables
                };
                return json;
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
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var variables = json.variables;
                var variablesJSON = variables;
                variables = variablesJSON.map(function(variableJSON) {
                    var _$json = variableJSON, variable = _variable.default.fromJSONAndFileContext(_$json, fileContext);
                    return variable;
                });
                var context = fileContext, proofSteps = [], proofContext = new ProofContext(context, variables, proofSteps);
                return proofContext;
            }
        }
    ]);
    return ProofContext;
}();
Object.assign(ProofContext.prototype, _file.default);
Object.assign(ProofContext.prototype, _logging.default);
var _default = ProofContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgZmlsZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZpbGVcIjtcbmltcG9ydCBsb2dnaW5nTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbG9nZ2luZ1wiO1xuXG5pbXBvcnQgeyBwdXNoLCBsYXN0LCBmaWx0ZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBNQVhJTVVNX0lOREVYRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBQcm9vZkNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMucHJvb2ZTdGVwcyA9IHByb29mU3RlcHM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICBwdXNoKHZhcmlhYmxlcywgdGhpcy52YXJpYWJsZXMpO1xuXG4gICAgY29uc3QgY29udGV4dFZhcmlhYmxlcyA9IHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMoKTtcblxuICAgIHB1c2godmFyaWFibGVzLCBjb250ZXh0VmFyaWFibGVzKTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRQcm9vZlN0ZXBzKCkge1xuICAgIGxldCBwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgIHByb29mU3RlcHMgPSBbXG4gICAgICAuLi5wcm9vZlN0ZXBzLFxuICAgICAgLi4udGhpcy5wcm9vZlN0ZXBzXG4gICAgXTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mU3RlcCgpIHtcbiAgICBsZXQgbGFzdFByb29mU3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBzTGVuZ3RoID0gdGhpcy5wcm9vZlN0ZXBzLmxlbmd0aDtcblxuICAgIGlmIChwcm9vZlN0ZXBzTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdFByb29mU3RlcCA9IGxhc3QodGhpcy5wcm9vZlN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFByb29mU3RlcDtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpOyB9XG5cbiAgZ2V0RXF1YWxpdGllcygpIHtcbiAgICBjb25zdCBlcXVhbGl0aWVzID0gW10sXG4gICAgICAgICAgc3RhcnQgPSAtTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCwgIC8vL1xuICAgICAgICAgIHByb29mU3RlcHMgPSB0aGlzLnByb29mU3RlcHMuc2xpY2Uoc3RhcnQpOyAvLy9cblxuICAgIHByb29mU3RlcHMuZm9yRWFjaCgocHJvb2ZTdGVwKSA9PiB7XG4gICAgICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21Qcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICAgIGVxdWFsaXRpZXMucHVzaChlcXVhbGl0eSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgZmlsdGVyKHRoaXMudmFyaWFibGVzLCAodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBuYW1lVmFyaWFibGVOYW1lID0gKG5hbWUgPT09IHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmICghbmFtZVZhcmlhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkUHJvb2ZTdGVwKHByb29mU3RlcCkge1xuICAgIHRoaXMucHJvb2ZTdGVwcy5wdXNoKHByb29mU3RlcCk7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudE1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICghc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudCA9IHRoaXMucHJvb2ZTdGVwcy5zb21lKChwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudCA9IHByb29mU3RlcC5tYXRjaChzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IHRoaXMuY29udGV4dC5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047XG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBwcm9vZkNvbnRleHQgPSBuZXcgUHJvb2ZDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcyk7XG5cbiAgICByZXR1cm4gcHJvb2ZDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZkNvbnRleHQocHJvb2ZDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHByb29mQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXTtcblxuICAgIHByb29mQ29udGV4dCA9IG5ldyBQcm9vZkNvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBwcm9vZkNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXM7XG5cbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLm1hcCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgcHJvb2ZDb250ZXh0ID0gbmV3IFByb29mQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMpO1xuXG4gICAgcmV0dXJuIHByb29mQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFByb29mQ29udGV4dC5wcm90b3R5cGUsIGZpbGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQcm9vZkNvbnRleHQucHJvdG90eXBlLCBsb2dnaW5nTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvb2ZDb250ZXh0O1xuIl0sIm5hbWVzIjpbIlByb29mQ29udGV4dCIsImNvbnRleHQiLCJ2YXJpYWJsZXMiLCJwcm9vZlN0ZXBzIiwiZ2V0Q29udGV4dCIsImdldFZhcmlhYmxlcyIsInB1c2giLCJjb250ZXh0VmFyaWFibGVzIiwiZ2V0UHJvb2ZTdGVwcyIsImdldExhc3RQcm9vZlN0ZXAiLCJsYXN0UHJvb2ZTdGVwIiwicHJvb2ZTdGVwc0xlbmd0aCIsImxlbmd0aCIsImxhc3QiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0RXF1YWxpdGllcyIsImVxdWFsaXRpZXMiLCJzdGFydCIsIk1BWElNVU1fSU5ERVhFU19MRU5HVEgiLCJzbGljZSIsImZvckVhY2giLCJwcm9vZlN0ZXAiLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbVByb29mU3RlcCIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZmlsdGVyIiwibmFtZSIsIm5hbWVWYXJpYWJsZU5hbWUiLCJhZGRQcm9vZlN0ZXAiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzIiwicHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudCIsInNvbWUiLCJtYXRjaCIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwidG9KU09OIiwidG9rZW5zIiwibWFwIiwidmFyaWFibGVKU09OIiwianNvbiIsImZyb21GaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwicHJvb2ZDb250ZXh0IiwiZnJvbVByb29mQ29udGV4dCIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJ2YXJpYWJsZXNKU09OIiwiVmFyaWFibGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJmaWxlTWl4aW5zIiwibG9nZ2luZ01peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaU1BOzs7ZUFBQTs7OzZEQS9McUI7NkRBQ0E7eURBQ0U7NERBQ0c7cUJBRVM7eUJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQUEsQUFBTUEsNkJBb0xILEFBcExIO2FBQU1BLGFBQ1FDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxVQUFVOzhCQUR0Q0g7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztpQkFKaEJIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxPQUFPLElBQUksQ0FBQ0gsT0FBTztZQUNyQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlO2dCQUNiLElBQU1ILFlBQVksRUFBRTtnQkFFcEJJLElBQUFBLFdBQUksRUFBQ0osV0FBVyxJQUFJLENBQUNBLFNBQVM7Z0JBRTlCLElBQU1LLG1CQUFtQixJQUFJLENBQUNOLE9BQU8sQ0FBQ0ksWUFBWTtnQkFFbERDLElBQUFBLFdBQUksRUFBQ0osV0FBV0s7Z0JBRWhCLE9BQU9MO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQUlMLGFBQWEsSUFBSSxDQUFDRixPQUFPLENBQUNPLGFBQWE7Z0JBRTNDTCxhQUFhLEFBQ1gsbUJBQUdBLG1CQUNILG1CQUFHLElBQUksQ0FBQ0EsVUFBVTtnQkFHcEIsT0FBT0E7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxt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