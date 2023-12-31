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
var _collection = /*#__PURE__*/ _interop_require_default(require("../collection"));
var _file = /*#__PURE__*/ _interop_require_default(require("../mixins/file"));
var _logging = /*#__PURE__*/ _interop_require_default(require("../mixins/logging"));
var _array = require("../utilities/array");
var _collection1 = require("../utilities/collection");
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
                var collectionsA = collections, collectionsB = this.collections;
                collections = (0, _collection1.mergeCollections)(collectionsA, collectionsB); ///
                return collections;
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
            key: "addEquality",
            value: function addEquality(equality) {
                var equalityReflexive = equality.isReflexive();
                if (equalityReflexive) {
                ///
                } else {
                    var leftTerm = equality.getLeftTerm(), rightTerm = equality.getRightTerm(), leftCollection = this.findCollectionByTerm(leftTerm), rightCollection = this.findCollectionByTerm(rightTerm);
                    if (false) {
                    ///
                    } else if (leftCollection === null && rightCollection === null) {
                        var collection = _collection.default.fromEquality(equality);
                        this.addCollection(collection);
                    } else if (leftCollection !== null && rightCollection === null) {
                        debugger;
                    } else if (leftCollection === null && rightCollection !== null) {
                        debugger;
                    } else if (leftCollection !== null && rightCollection !== null) {
                        debugger;
                    }
                }
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
            key: "addCollection",
            value: function addCollection(collection) {
                this.collections.push(collection);
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
            key: "findCollectionByType",
            value: function findCollectionByType(type) {
                var collections = this.getCollections(), collection = (0, _collection1.findCollectionByType)(collections, type);
                return collection;
            }
        },
        {
            key: "findCollectionByTerm",
            value: function findCollectionByTerm(term) {
                var collections = this.getCollections(), collection = (0, _collection1.findCollectionByTerm)(collections, term);
                return collection;
            }
        },
        {
            key: "findCollectionByTerms",
            value: function findCollectionByTerms(terms) {
                var collections = this.getCollections(), collection = (0, _collection1.findCollectionByTerms)(collections, terms);
                return collection;
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
            key: "isEqualityEqual",
            value: function isEqualityEqual(equality) {
                var equalityEqual;
                var equalityReflexive = equality.isReflexive();
                if (equalityReflexive) {
                    equalityEqual = true;
                } else {
                    var leftTerm = equality.getLeftTerm(), rightTerm = equality.getRightTerm(), terms = [
                        leftTerm,
                        rightTerm
                    ], termsEqual = this.areTermsEqual(terms);
                    equalityEqual = termsEqual; ///
                }
                return equalityEqual;
            }
        },
        {
            key: "areTermsEqual",
            value: function areTermsEqual(terms) {
                var collection = this.findCollectionByTerms(terms), termsEqual = collection !== null;
                return termsEqual;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tIFwiLi4vY29sbGVjdGlvblwiO1xuaW1wb3J0IGZpbGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9maWxlXCI7XG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcblxuaW1wb3J0IHsgbGFzdCwgZmlsdGVyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbWVyZ2VDb2xsZWN0aW9ucywgZmluZENvbGxlY3Rpb25CeVR5cGUsIGZpbmRDb2xsZWN0aW9uQnlUZXJtLCBmaW5kQ29sbGVjdGlvbkJ5VGVybXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbGxlY3Rpb25cIjtcblxuY2xhc3MgTG9jYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBjb2xsZWN0aW9ucykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5wcm9vZlN0ZXBzID0gcHJvb2ZTdGVwcztcbiAgICB0aGlzLmNvbGxlY3Rpb25zID0gY29sbGVjdGlvbnM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgbGV0IHZhcmlhYmxlcyA9IHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMoKTtcblxuICAgIHZhcmlhYmxlcyA9IFsgLy8vXG4gICAgICAuLi52YXJpYWJsZXMsXG4gICAgICAuLi50aGlzLnZhcmlhYmxlc1xuICAgIF07XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBsZXQgcHJvb2ZTdGVwcyA9IHRoaXMuY29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBwcm9vZlN0ZXBzID0gWyAgLy8vXG4gICAgICAuLi5wcm9vZlN0ZXBzLFxuICAgICAgLi4udGhpcy5wcm9vZlN0ZXBzXG4gICAgXTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0Q29sbGVjdGlvbnMoKSB7XG4gICAgbGV0IGNvbGxlY3Rpb25zID0gdGhpcy5jb250ZXh0LmdldENvbGxlY3Rpb25zKCk7XG5cbiAgICBjb25zdCBjb2xsZWN0aW9uc0EgPSBjb2xsZWN0aW9ucywgLy8vXG4gICAgICAgICAgY29sbGVjdGlvbnNCID0gdGhpcy5jb2xsZWN0aW9ucztcblxuICAgIGNvbGxlY3Rpb25zID0gbWVyZ2VDb2xsZWN0aW9ucyhjb2xsZWN0aW9uc0EsIGNvbGxlY3Rpb25zQik7IC8vL1xuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb25zO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcygpIHtcbiAgICBjb25zdCBlcXVhbGl0aWVzID0gdGhpcy5jb250ZXh0LmdldEVxdWFsaXRpZXMoKTtcblxuICAgIHRoaXMucHJvb2ZTdGVwcy5mb3JFYWNoKChwcm9vZlN0ZXApID0+IHtcbiAgICAgIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxpdGllcy5wdXNoKGVxdWFsaXR5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mU3RlcCgpIHtcbiAgICBsZXQgbGFzdFByb29mU3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBzTGVuZ3RoID0gdGhpcy5wcm9vZlN0ZXBzLmxlbmd0aDtcblxuICAgIGlmIChwcm9vZlN0ZXBzTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdFByb29mU3RlcCA9IGxhc3QodGhpcy5wcm9vZlN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFByb29mU3RlcDtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpOyB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBlcXVhbGl0eVJlZmxleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlSZWZsZXhpdmUpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0VGVybSA9IGVxdWFsaXR5LmdldExlZnRUZXJtKCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSBlcXVhbGl0eS5nZXRSaWdodFRlcm0oKSxcbiAgICAgICAgICAgIGxlZnRDb2xsZWN0aW9uID0gdGhpcy5maW5kQ29sbGVjdGlvbkJ5VGVybShsZWZ0VGVybSksXG4gICAgICAgICAgICByaWdodENvbGxlY3Rpb24gPSB0aGlzLmZpbmRDb2xsZWN0aW9uQnlUZXJtKHJpZ2h0VGVybSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRDb2xsZWN0aW9uID09PSBudWxsKSAmJiAocmlnaHRDb2xsZWN0aW9uID09PSBudWxsKSkge1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gQ29sbGVjdGlvbi5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpO1xuXG4gICAgICAgIHRoaXMuYWRkQ29sbGVjdGlvbihjb2xsZWN0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRDb2xsZWN0aW9uICE9PSBudWxsKSAmJiAocmlnaHRDb2xsZWN0aW9uID09PSBudWxsKSkge1xuICAgICAgICBkZWJ1Z2dlclxuXG4gICAgICB9IGVsc2UgaWYgKChsZWZ0Q29sbGVjdGlvbiA9PT0gbnVsbCkgJiYgKHJpZ2h0Q29sbGVjdGlvbiAhPT0gbnVsbCkpIHtcbiAgICAgICAgZGVidWdnZXJcblxuICAgICAgfSBlbHNlIGlmICgobGVmdENvbGxlY3Rpb24gIT09IG51bGwpICYmIChyaWdodENvbGxlY3Rpb24gIT09IG51bGwpKSB7XG4gICAgICAgIGRlYnVnZ2VyXG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGZpbHRlcih0aGlzLnZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbmFtZVZhcmlhYmxlTmFtZSA9IChuYW1lID09PSB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoIW5hbWVWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZFByb29mU3RlcChwcm9vZlN0ZXApIHtcbiAgICB0aGlzLnByb29mU3RlcHMucHVzaChwcm9vZlN0ZXApO1xuICB9XG5cbiAgYWRkQ29sbGVjdGlvbihjb2xsZWN0aW9uKSB7XG4gICAgdGhpcy5jb2xsZWN0aW9ucy5wdXNoKGNvbGxlY3Rpb24pO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQgPSB0aGlzLnByb29mU3RlcHMuc29tZSgocHJvb2ZTdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQgPSBwcm9vZlN0ZXAubWF0Y2goc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHN0YXRlbWVudE1hdGNoZXMgPSBwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIHN0YXRlbWVudE1hdGNoZXMgPSB0aGlzLmNvbnRleHQubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBmaW5kQ29sbGVjdGlvbkJ5VHlwZSh0eXBlKSB7XG4gICAgY29uc3QgY29sbGVjdGlvbnMgPSB0aGlzLmdldENvbGxlY3Rpb25zKCksXG4gICAgICAgICAgY29sbGVjdGlvbiA9IGZpbmRDb2xsZWN0aW9uQnlUeXBlKGNvbGxlY3Rpb25zLCB0eXBlKTtcblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG5cbiAgZmluZENvbGxlY3Rpb25CeVRlcm0odGVybSkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gdGhpcy5nZXRDb2xsZWN0aW9ucygpLFxuICAgICAgICAgIGNvbGxlY3Rpb24gPSBmaW5kQ29sbGVjdGlvbkJ5VGVybShjb2xsZWN0aW9ucywgdGVybSk7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuXG4gIGZpbmRDb2xsZWN0aW9uQnlUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gdGhpcy5nZXRDb2xsZWN0aW9ucygpLFxuICAgICAgICAgIGNvbGxlY3Rpb24gPSBmaW5kQ29sbGVjdGlvbkJ5VGVybXMoY29sbGVjdGlvbnMsIHRlcm1zKTtcblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNFcXVhbGl0eUVxdWFsKGVxdWFsaXR5KSB7XG4gICAgbGV0IGVxdWFsaXR5RXF1YWw7XG5cbiAgICBjb25zdCBlcXVhbGl0eVJlZmxleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlSZWZsZXhpdmUpIHtcbiAgICAgIGVxdWFsaXR5RXF1YWwgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0VGVybSA9IGVxdWFsaXR5LmdldExlZnRUZXJtKCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSBlcXVhbGl0eS5nZXRSaWdodFRlcm0oKSxcbiAgICAgICAgICAgIHRlcm1zID0gW1xuICAgICAgICAgICAgICBsZWZ0VGVybSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGVybXNFcXVhbCA9IHRoaXMuYXJlVGVybXNFcXVhbCh0ZXJtcyk7XG5cbiAgICAgIGVxdWFsaXR5RXF1YWwgPSB0ZXJtc0VxdWFsOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHlFcXVhbDtcbiAgfVxuXG4gIGFyZVRlcm1zRXF1YWwodGVybXMpIHtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5maW5kQ29sbGVjdGlvbkJ5VGVybXModGVybXMpLFxuICAgICAgICAgIHRlcm1zRXF1YWwgPSAoY29sbGVjdGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdGVybXNFcXVhbDtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047XG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBjb2xsZWN0aW9ucyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBjb2xsZWN0aW9ucyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2NhbENvbnRleHQobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBjb2xsZWN0aW9ucyA9IFtdO1xuXG4gICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGNvbGxlY3Rpb25zKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXM7XG5cbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLm1hcCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgY29sbGVjdGlvbnMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgY29sbGVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9jYWxDb250ZXh0QW5kQXNzaWdubWVudHMobG9jYWxDb250ZXh0LCBhc3NpZ25tZW50cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBhc3NpZ25tZW50cy5tYXAoKGFzc2lnbm1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0gYXNzaWdubWVudC5nZXRWYXJpYWJsZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGNvbGxlY3Rpb25zID0gW107XG5cbiAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgY29sbGVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKExvY2FsQ29udGV4dC5wcm90b3R5cGUsIGZpbGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihMb2NhbENvbnRleHQucHJvdG90eXBlLCBsb2dnaW5nTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxDb250ZXh0O1xuIl0sIm5hbWVzIjpbIkxvY2FsQ29udGV4dCIsImNvbnRleHQiLCJ2YXJpYWJsZXMiLCJwcm9vZlN0ZXBzIiwiY29sbGVjdGlvbnMiLCJnZXRDb250ZXh0IiwiZ2V0VmFyaWFibGVzIiwiZ2V0UHJvb2ZTdGVwcyIsImdldENvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnNBIiwiY29sbGVjdGlvbnNCIiwibWVyZ2VDb2xsZWN0aW9ucyIsImdldEVxdWFsaXRpZXMiLCJlcXVhbGl0aWVzIiwiZm9yRWFjaCIsInByb29mU3RlcCIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tUHJvb2ZTdGVwIiwicHVzaCIsImdldExhc3RQcm9vZlN0ZXAiLCJsYXN0UHJvb2ZTdGVwIiwicHJvb2ZTdGVwc0xlbmd0aCIsImxlbmd0aCIsImxhc3QiLCJnZXRNZXRhdmFyaWFibGVzIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eVJlZmxleGl2ZSIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm0iLCJnZXRMZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldFJpZ2h0VGVybSIsImxlZnRDb2xsZWN0aW9uIiwiZmluZENvbGxlY3Rpb25CeVRlcm0iLCJyaWdodENvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsImZyb21FcXVhbGl0eSIsImFkZENvbGxlY3Rpb24iLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImZpbHRlciIsIm5hbWUiLCJuYW1lVmFyaWFibGVOYW1lIiwiYWRkUHJvb2ZTdGVwIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsInByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQiLCJzb21lIiwibWF0Y2giLCJmaW5kQ29sbGVjdGlvbkJ5VHlwZSIsInR5cGUiLCJ0ZXJtIiwiZmluZENvbGxlY3Rpb25CeVRlcm1zIiwidGVybXMiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImZpbmQiLCJtYXRjaGVzIiwibWF0Y2hOYW1lIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlUHJlc2VudCIsImlzRXF1YWxpdHlFcXVhbCIsImVxdWFsaXR5RXF1YWwiLCJ0ZXJtc0VxdWFsIiwiYXJlVGVybXNFcXVhbCIsInRvSlNPTiIsInRva2VucyIsIm1hcCIsInZhcmlhYmxlSlNPTiIsImpzb24iLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxvY2FsQ29udGV4dCIsImZyb21Mb2NhbENvbnRleHQiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwidmFyaWFibGVzSlNPTiIsIlZhcmlhYmxlIiwiZnJvbUxvY2FsQ29udGV4dEFuZEFzc2lnbm1lbnRzIiwiYXNzaWdubWVudHMiLCJhc3NpZ25tZW50IiwiZ2V0VmFyaWFibGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJmaWxlTWl4aW5zIiwibG9nZ2luZ01peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaVRBOzs7ZUFBQTs7OytEQS9TcUI7K0RBQ0E7aUVBQ0U7MkRBQ0E7OERBQ0c7cUJBRUc7MkJBQ3VFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRyxJQUFBLEFBQU1BLDZCQW1TSCxBQW5TSDthQUFNQSxhQUNRQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXO2dDQURuREo7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBTGpCSjs7WUFRSkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlKLFlBQVksSUFBSSxDQUFDRCxPQUFPLENBQUNLLFlBQVk7Z0JBRXpDSixZQUFZLEFBQ1YscUJBQUdBLGtCQUNILHFCQUFHLElBQUksQ0FBQ0EsU0FBUztnQkFHbkIsT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJSixhQUFhLElBQUksQ0FBQ0YsT0FBTyxDQUFDTSxhQUFhO2dCQUUzQ0osYUFBYSxBQUNYLHFCQUFHQSxtQkFDSCxxQkFBRyxJQUFJLENBQUNBLFVBQVU7Z0JBR3BCLE9BQU9BO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUosY0FBYyxJQUFJLENBQUNILE9BQU8sQ0FBQ08sY0FBYztnQkFFN0MsSUFBTUMsZUFBZUwsYUFDZk0sZUFBZSxJQUFJLENBQUNOLFdBQVc7Z0JB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