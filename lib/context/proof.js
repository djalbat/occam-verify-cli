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
        },
        {
            key: "fromProofContextAndAssignments",
            value: function fromProofContextAndAssignments(proofContext, assignments) {
                var context = proofContext, variables = assignments.map(function(assignment) {
                    var variable = assignment.getVariable();
                    return variable;
                }), proofSteps = [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgZmlsZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZpbGVcIjtcbmltcG9ydCBsb2dnaW5nTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbG9nZ2luZ1wiO1xuXG5pbXBvcnQgeyBwdXNoLCBsYXN0LCBmaWx0ZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBNQVhJTVVNX0lOREVYRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBQcm9vZkNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMucHJvb2ZTdGVwcyA9IHByb29mU3RlcHM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICBwdXNoKHZhcmlhYmxlcywgdGhpcy52YXJpYWJsZXMpO1xuXG4gICAgY29uc3QgY29udGV4dFZhcmlhYmxlcyA9IHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMoKTtcblxuICAgIHB1c2godmFyaWFibGVzLCBjb250ZXh0VmFyaWFibGVzKTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRQcm9vZlN0ZXBzKCkge1xuICAgIGxldCBwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgIHByb29mU3RlcHMgPSBbXG4gICAgICAuLi5wcm9vZlN0ZXBzLFxuICAgICAgLi4udGhpcy5wcm9vZlN0ZXBzXG4gICAgXTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mU3RlcCgpIHtcbiAgICBsZXQgbGFzdFByb29mU3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBzTGVuZ3RoID0gdGhpcy5wcm9vZlN0ZXBzLmxlbmd0aDtcblxuICAgIGlmIChwcm9vZlN0ZXBzTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdFByb29mU3RlcCA9IGxhc3QodGhpcy5wcm9vZlN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFByb29mU3RlcDtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpOyB9XG5cbiAgZ2V0RXF1YWxpdGllcygpIHtcbiAgICBjb25zdCBlcXVhbGl0aWVzID0gW10sXG4gICAgICAgICAgc3RhcnQgPSAtTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCwgIC8vL1xuICAgICAgICAgIHByb29mU3RlcHMgPSB0aGlzLnByb29mU3RlcHMuc2xpY2Uoc3RhcnQpOyAvLy9cblxuICAgIHByb29mU3RlcHMuZm9yRWFjaCgocHJvb2ZTdGVwKSA9PiB7XG4gICAgICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21Qcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICAgIGVxdWFsaXRpZXMucHVzaChlcXVhbGl0eSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgZmlsdGVyKHRoaXMudmFyaWFibGVzLCAodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBuYW1lVmFyaWFibGVOYW1lID0gKG5hbWUgPT09IHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmICghbmFtZVZhcmlhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkUHJvb2ZTdGVwKHByb29mU3RlcCkge1xuICAgIHRoaXMucHJvb2ZTdGVwcy5wdXNoKHByb29mU3RlcCk7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudE1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICghc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudCA9IHRoaXMucHJvb2ZTdGVwcy5zb21lKChwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudCA9IHByb29mU3RlcC5tYXRjaChzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IHRoaXMuY29udGV4dC5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047XG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBwcm9vZkNvbnRleHQgPSBuZXcgUHJvb2ZDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcyk7XG5cbiAgICByZXR1cm4gcHJvb2ZDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZkNvbnRleHQocHJvb2ZDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHByb29mQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXTtcblxuICAgIHByb29mQ29udGV4dCA9IG5ldyBQcm9vZkNvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBwcm9vZkNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXM7XG5cbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLm1hcCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgcHJvb2ZDb250ZXh0ID0gbmV3IFByb29mQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMpO1xuXG4gICAgcmV0dXJuIHByb29mQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZDb250ZXh0QW5kQXNzaWdubWVudHMocHJvb2ZDb250ZXh0LCBhc3NpZ25tZW50cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBwcm9vZkNvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBhc3NpZ25tZW50cy5tYXAoKGFzc2lnbm1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0gYXNzaWdubWVudC5nZXRWYXJpYWJsZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdO1xuXG4gICAgcHJvb2ZDb250ZXh0ID0gbmV3IFByb29mQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMpO1xuXG4gICAgcmV0dXJuIHByb29mQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFByb29mQ29udGV4dC5wcm90b3R5cGUsIGZpbGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQcm9vZkNvbnRleHQucHJvdG90eXBlLCBsb2dnaW5nTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvb2ZDb250ZXh0O1xuIl0sIm5hbWVzIjpbIlByb29mQ29udGV4dCIsImNvbnRleHQiLCJ2YXJpYWJsZXMiLCJwcm9vZlN0ZXBzIiwiZ2V0Q29udGV4dCIsImdldFZhcmlhYmxlcyIsInB1c2giLCJjb250ZXh0VmFyaWFibGVzIiwiZ2V0UHJvb2ZTdGVwcyIsImdldExhc3RQcm9vZlN0ZXAiLCJsYXN0UHJvb2ZTdGVwIiwicHJvb2ZTdGVwc0xlbmd0aCIsImxlbmd0aCIsImxhc3QiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0RXF1YWxpdGllcyIsImVxdWFsaXRpZXMiLCJzdGFydCIsIk1BWElNVU1fSU5ERVhFU19MRU5HVEgiLCJzbGljZSIsImZvckVhY2giLCJwcm9vZlN0ZXAiLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbVByb29mU3RlcCIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZmlsdGVyIiwibmFtZSIsIm5hbWVWYXJpYWJsZU5hbWUiLCJhZGRQcm9vZlN0ZXAiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzIiwicHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudCIsInNvbWUiLCJtYXRjaCIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwidG9KU09OIiwidG9rZW5zIiwibWFwIiwidmFyaWFibGVKU09OIiwianNvbiIsImZyb21GaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwicHJvb2ZDb250ZXh0IiwiZnJvbVByb29mQ29udGV4dCIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJ2YXJpYWJsZXNKU09OIiwiVmFyaWFibGUiLCJmcm9tUHJvb2ZDb250ZXh0QW5kQXNzaWdubWVudHMiLCJhc3NpZ25tZW50cyIsImFzc2lnbm1lbnQiLCJnZXRWYXJpYWJsZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImZpbGVNaXhpbnMiLCJsb2dnaW5nTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErTUE7OztlQUFBOzs7NkRBN01xQjs2REFDQTt5REFDRTs0REFDRztxQkFFUzt5QkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsSUFBQSxBQUFNQSw2QkFrTUgsQUFsTUg7YUFBTUEsYUFDUUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVU7OEJBRHRDSDtRQUVGLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxH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