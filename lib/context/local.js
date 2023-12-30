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
var _variable = /*#__PURE__*/ _interop_require_default(require("../variable"));
var _equality = /*#__PURE__*/ _interop_require_default(require("../equality"));
var _file = /*#__PURE__*/ _interop_require_default(require("../mixins/file"));
var _logging = /*#__PURE__*/ _interop_require_default(require("../mixins/logging"));
var _array = require("../utilities/array");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var LocalContext = /*#__PURE__*/ function() {
    function LocalContext(context, variables, proofSteps, collections) {
        _class_call_check(this, LocalContext);
        this.context = context;
        this.variables = variables;
        this.proofSteps = proofSteps;
        this.collections = collections;
    }
    _create_class(LocalContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                var variables = this.context.getVariables();
                variables = _to_consumable_array(variables).concat(_to_consumable_array(this.variables));
                return variables;
            }
        },
        {
            key: "getProofSteps",
            value: function getProofSteps() {
                var proofSteps = this.context.getProofSteps();
                proofSteps = _to_consumable_array(proofSteps).concat(_to_consumable_array(this.proofSteps));
                return proofSteps;
            }
        },
        {
            key: "getCollections",
            value: function getCollections() {
                var collections = this.context.getCollections();
                return this.collections;
            }
        },
        {
            key: "getEqualities",
            value: function getEqualities() {
                var equalities = this.context.getEqualities();
                this.proofSteps.forEach(function(proofStep) {
                    var equality = _equality.default.fromProofStep(proofStep);
                    if (equality !== null) {
                        equalities.push(equality);
                    }
                });
                return equalities;
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
                var context = fileContext, variables = [], proofSteps = [], collections = [], localContext = new LocalContext(context, variables, proofSteps, collections);
                return localContext;
            }
        },
        {
            key: "fromLocalContext",
            value: function fromLocalContext(localContext) {
                var context = localContext, variables = [], proofSteps = [], collections = [];
                localContext = new LocalContext(context, variables, proofSteps, collections);
                return localContext;
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
                var context = fileContext, proofSteps = [], collections = [], localContext = new LocalContext(context, variables, proofSteps, collections);
                return localContext;
            }
        },
        {
            key: "fromLocalContextAndAssignments",
            value: function fromLocalContextAndAssignments(localContext, assignments) {
                var context = localContext, variables = assignments.map(function(assignment) {
                    var variable = assignment.getVariable();
                    return variable;
                }), proofSteps = [], collections = [];
                localContext = new LocalContext(context, variables, proofSteps, collections);
                return localContext;
            }
        }
    ]);
    return LocalContext;
}();
Object.assign(LocalContext.prototype, _file.default);
Object.assign(LocalContext.prototype, _logging.default);
var _default = LocalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgZmlsZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZpbGVcIjtcbmltcG9ydCBsb2dnaW5nTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbG9nZ2luZ1wiO1xuXG5pbXBvcnQgeyBsYXN0LCBmaWx0ZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIExvY2FsQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgY29sbGVjdGlvbnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMucHJvb2ZTdGVwcyA9IHByb29mU3RlcHM7XG4gICAgdGhpcy5jb2xsZWN0aW9ucyA9IGNvbGxlY3Rpb25zO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIGxldCB2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICB2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udmFyaWFibGVzLFxuICAgICAgLi4udGhpcy52YXJpYWJsZXNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgbGV0IHByb29mU3RlcHMgPSB0aGlzLmNvbnRleHQuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgcHJvb2ZTdGVwcyA9IFsgIC8vL1xuICAgICAgLi4ucHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMucHJvb2ZTdGVwc1xuICAgIF07XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldENvbGxlY3Rpb25zKCkge1xuICAgIGxldCBjb2xsZWN0aW9ucyA9IHRoaXMuY29udGV4dC5nZXRDb2xsZWN0aW9ucygpO1xuXG4gICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbnM7XG4gIH1cblxuICBnZXRFcXVhbGl0aWVzKCkge1xuICAgIGNvbnN0IGVxdWFsaXRpZXMgPSB0aGlzLmNvbnRleHQuZ2V0RXF1YWxpdGllcygpO1xuXG4gICAgdGhpcy5wcm9vZlN0ZXBzLmZvckVhY2goKHByb29mU3RlcCkgPT4ge1xuICAgICAgY29uc3QgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgICBlcXVhbGl0aWVzLnB1c2goZXF1YWxpdHkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVxdWFsaXRpZXM7XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkge1xuICAgIGxldCBsYXN0UHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mU3RlcHNMZW5ndGggPSB0aGlzLnByb29mU3RlcHMubGVuZ3RoO1xuXG4gICAgaWYgKHByb29mU3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0UHJvb2ZTdGVwID0gbGFzdCh0aGlzLnByb29mU3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0UHJvb2ZTdGVwO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRNZXRhdmFyaWFibGVzKCk7IH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGZpbHRlcih0aGlzLnZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbmFtZVZhcmlhYmxlTmFtZSA9IChuYW1lID09PSB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoIW5hbWVWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZFByb29mU3RlcChwcm9vZlN0ZXApIHtcbiAgICB0aGlzLnByb29mU3RlcHMucHVzaChwcm9vZlN0ZXApO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQgPSB0aGlzLnByb29mU3RlcHMuc29tZSgocHJvb2ZTdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQgPSBwcm9vZlN0ZXAubWF0Y2goc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHN0YXRlbWVudE1hdGNoZXMgPSBwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIHN0YXRlbWVudE1hdGNoZXMgPSB0aGlzLmNvbnRleHQubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVKU09OO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgY29sbGVjdGlvbnMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgY29sbGVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9jYWxDb250ZXh0KGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgY29sbGVjdGlvbnMgPSBbXTtcblxuICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBjb2xsZWN0aW9ucyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzO1xuXG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGNvbGxlY3Rpb25zID0gW10sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGNvbGxlY3Rpb25zKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvY2FsQ29udGV4dEFuZEFzc2lnbm1lbnRzKGxvY2FsQ29udGV4dCwgYXNzaWdubWVudHMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gYXNzaWdubWVudHMubWFwKChhc3NpZ25tZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGFzc2lnbm1lbnQuZ2V0VmFyaWFibGUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBjb2xsZWN0aW9ucyA9IFtdO1xuXG4gICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGNvbGxlY3Rpb25zKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihMb2NhbENvbnRleHQucHJvdG90eXBlLCBmaWxlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oTG9jYWxDb250ZXh0LnByb3RvdHlwZSwgbG9nZ2luZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJMb2NhbENvbnRleHQiLCJjb250ZXh0IiwidmFyaWFibGVzIiwicHJvb2ZTdGVwcyIsImNvbGxlY3Rpb25zIiwiZ2V0Q29udGV4dCIsImdldFZhcmlhYmxlcyIsImdldFByb29mU3RlcHMiLCJnZXRDb2xsZWN0aW9ucyIsImdldEVxdWFsaXRpZXMiLCJlcXVhbGl0aWVzIiwiZm9yRWFjaCIsInByb29mU3RlcCIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tUHJvb2ZTdGVwIiwicHVzaCIsImdldExhc3RQcm9vZlN0ZXAiLCJsYXN0UHJvb2ZTdGVwIiwicHJvb2ZTdGVwc0xlbmd0aCIsImxlbmd0aCIsImxhc3QiLCJnZXRNZXRhdmFyaWFibGVzIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJmaWx0ZXIiLCJuYW1lIiwibmFtZVZhcmlhYmxlTmFtZSIsImFkZFByb29mU3RlcCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1hdGNoZXMiLCJwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50Iiwic29tZSIsIm1hdGNoIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJ0b0pTT04iLCJ0b2tlbnMiLCJtYXAiLCJ2YXJpYWJsZUpTT04iLCJqc29uIiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHQiLCJmcm9tTG9jYWxDb250ZXh0IiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsInZhcmlhYmxlc0pTT04iLCJWYXJpYWJsZSIsImZyb21Mb2NhbENvbnRleHRBbmRBc3NpZ25tZW50cyIsImFzc2lnbm1lbnRzIiwiYXNzaWdubWVudCIsImdldFZhcmlhYmxlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZmlsZU1peGlucyIsImxvZ2dpbmdNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNOQTs7O2VBQUE7OzsrREFwTnFCOytEQUNBOzJEQUNFOzhEQUNHO3FCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3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