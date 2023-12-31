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
                        var term = rightTerm, collection1 = leftCollection; ///
                        collection1.addTerm(term);
                    } else if (leftCollection === null && rightCollection !== null) {
                        var term1 = leftTerm, collection2 = rightCollection; ///
                        collection2.addTerm(term1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tIFwiLi4vY29sbGVjdGlvblwiO1xuaW1wb3J0IGZpbGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9maWxlXCI7XG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcblxuaW1wb3J0IHsgbGFzdCwgZmlsdGVyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbWVyZ2VDb2xsZWN0aW9ucywgZmluZENvbGxlY3Rpb25CeVR5cGUsIGZpbmRDb2xsZWN0aW9uQnlUZXJtLCBmaW5kQ29sbGVjdGlvbkJ5VGVybXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbGxlY3Rpb25cIjtcblxuY2xhc3MgTG9jYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBjb2xsZWN0aW9ucykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5wcm9vZlN0ZXBzID0gcHJvb2ZTdGVwcztcbiAgICB0aGlzLmNvbGxlY3Rpb25zID0gY29sbGVjdGlvbnM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgbGV0IHZhcmlhYmxlcyA9IHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMoKTtcblxuICAgIHZhcmlhYmxlcyA9IFsgLy8vXG4gICAgICAuLi52YXJpYWJsZXMsXG4gICAgICAuLi50aGlzLnZhcmlhYmxlc1xuICAgIF07XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBsZXQgcHJvb2ZTdGVwcyA9IHRoaXMuY29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBwcm9vZlN0ZXBzID0gWyAgLy8vXG4gICAgICAuLi5wcm9vZlN0ZXBzLFxuICAgICAgLi4udGhpcy5wcm9vZlN0ZXBzXG4gICAgXTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0Q29sbGVjdGlvbnMoKSB7XG4gICAgbGV0IGNvbGxlY3Rpb25zID0gdGhpcy5jb250ZXh0LmdldENvbGxlY3Rpb25zKCk7XG5cbiAgICBjb25zdCBjb2xsZWN0aW9uc0EgPSBjb2xsZWN0aW9ucywgLy8vXG4gICAgICAgICAgY29sbGVjdGlvbnNCID0gdGhpcy5jb2xsZWN0aW9ucztcblxuICAgIGNvbGxlY3Rpb25zID0gbWVyZ2VDb2xsZWN0aW9ucyhjb2xsZWN0aW9uc0EsIGNvbGxlY3Rpb25zQik7IC8vL1xuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb25zO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcygpIHtcbiAgICBjb25zdCBlcXVhbGl0aWVzID0gdGhpcy5jb250ZXh0LmdldEVxdWFsaXRpZXMoKTtcblxuICAgIHRoaXMucHJvb2ZTdGVwcy5mb3JFYWNoKChwcm9vZlN0ZXApID0+IHtcbiAgICAgIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxpdGllcy5wdXNoKGVxdWFsaXR5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mU3RlcCgpIHtcbiAgICBsZXQgbGFzdFByb29mU3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBzTGVuZ3RoID0gdGhpcy5wcm9vZlN0ZXBzLmxlbmd0aDtcblxuICAgIGlmIChwcm9vZlN0ZXBzTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdFByb29mU3RlcCA9IGxhc3QodGhpcy5wcm9vZlN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFByb29mU3RlcDtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpOyB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBlcXVhbGl0eVJlZmxleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlSZWZsZXhpdmUpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0VGVybSA9IGVxdWFsaXR5LmdldExlZnRUZXJtKCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSBlcXVhbGl0eS5nZXRSaWdodFRlcm0oKSxcbiAgICAgICAgICAgIGxlZnRDb2xsZWN0aW9uID0gdGhpcy5maW5kQ29sbGVjdGlvbkJ5VGVybShsZWZ0VGVybSksXG4gICAgICAgICAgICByaWdodENvbGxlY3Rpb24gPSB0aGlzLmZpbmRDb2xsZWN0aW9uQnlUZXJtKHJpZ2h0VGVybSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRDb2xsZWN0aW9uID09PSBudWxsKSAmJiAocmlnaHRDb2xsZWN0aW9uID09PSBudWxsKSkge1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gQ29sbGVjdGlvbi5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpO1xuXG4gICAgICAgIHRoaXMuYWRkQ29sbGVjdGlvbihjb2xsZWN0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRDb2xsZWN0aW9uICE9PSBudWxsKSAmJiAocmlnaHRDb2xsZWN0aW9uID09PSBudWxsKSkge1xuICAgICAgICBjb25zdCB0ZXJtID0gcmlnaHRUZXJtLCAvLy9cbiAgICAgICAgICAgICAgY29sbGVjdGlvbiA9IGxlZnRDb2xsZWN0aW9uOyAgLy8vXG5cbiAgICAgICAgY29sbGVjdGlvbi5hZGRUZXJtKHRlcm0pO1xuICAgICAgfSBlbHNlIGlmICgobGVmdENvbGxlY3Rpb24gPT09IG51bGwpICYmIChyaWdodENvbGxlY3Rpb24gIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSBsZWZ0VGVybSwgLy8vXG4gICAgICAgICAgICAgIGNvbGxlY3Rpb24gPSByaWdodENvbGxlY3Rpb247ICAvLy9cblxuICAgICAgICBjb2xsZWN0aW9uLmFkZFRlcm0odGVybSk7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0Q29sbGVjdGlvbiAhPT0gbnVsbCkgJiYgKHJpZ2h0Q29sbGVjdGlvbiAhPT0gbnVsbCkpIHtcblxuICAgICAgICBkZWJ1Z2dlclxuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICBmaWx0ZXIodGhpcy52YXJpYWJsZXMsICh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG5hbWVWYXJpYWJsZU5hbWUgPSAobmFtZSA9PT0gdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKCFuYW1lVmFyaWFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKSB7XG4gICAgdGhpcy5wcm9vZlN0ZXBzLnB1c2gocHJvb2ZTdGVwKTtcbiAgfVxuXG4gIGFkZENvbGxlY3Rpb24oY29sbGVjdGlvbikge1xuICAgIHRoaXMuY29sbGVjdGlvbnMucHVzaChjb2xsZWN0aW9uKTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgc3RhdGVtZW50TWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50ID0gdGhpcy5wcm9vZlN0ZXBzLnNvbWUoKHByb29mU3RlcCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50ID0gcHJvb2ZTdGVwLm1hdGNoKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGlmIChwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gcHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5jb250ZXh0Lm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgZmluZENvbGxlY3Rpb25CeVR5cGUodHlwZSkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gdGhpcy5nZXRDb2xsZWN0aW9ucygpLFxuICAgICAgICAgIGNvbGxlY3Rpb24gPSBmaW5kQ29sbGVjdGlvbkJ5VHlwZShjb2xsZWN0aW9ucywgdHlwZSk7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuXG4gIGZpbmRDb2xsZWN0aW9uQnlUZXJtKHRlcm0pIHtcbiAgICBjb25zdCBjb2xsZWN0aW9ucyA9IHRoaXMuZ2V0Q29sbGVjdGlvbnMoKSxcbiAgICAgICAgICBjb2xsZWN0aW9uID0gZmluZENvbGxlY3Rpb25CeVRlcm0oY29sbGVjdGlvbnMsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH1cblxuICBmaW5kQ29sbGVjdGlvbkJ5VGVybXModGVybXMpIHtcbiAgICBjb25zdCBjb2xsZWN0aW9ucyA9IHRoaXMuZ2V0Q29sbGVjdGlvbnMoKSxcbiAgICAgICAgICBjb2xsZWN0aW9uID0gZmluZENvbGxlY3Rpb25CeVRlcm1zKGNvbGxlY3Rpb25zLCB0ZXJtcyk7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzRXF1YWxpdHlFcXVhbChlcXVhbGl0eSkge1xuICAgIGxldCBlcXVhbGl0eUVxdWFsO1xuXG4gICAgY29uc3QgZXF1YWxpdHlSZWZsZXhpdmUgPSBlcXVhbGl0eS5pc1JlZmxleGl2ZSgpO1xuXG4gICAgaWYgKGVxdWFsaXR5UmVmbGV4aXZlKSB7XG4gICAgICBlcXVhbGl0eUVxdWFsID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVmdFRlcm0gPSBlcXVhbGl0eS5nZXRMZWZ0VGVybSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtKCksXG4gICAgICAgICAgICB0ZXJtcyA9IFtcbiAgICAgICAgICAgICAgbGVmdFRlcm0sXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRlcm1zRXF1YWwgPSB0aGlzLmFyZVRlcm1zRXF1YWwodGVybXMpO1xuXG4gICAgICBlcXVhbGl0eUVxdWFsID0gdGVybXNFcXVhbDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5RXF1YWw7XG4gIH1cblxuICBhcmVUZXJtc0VxdWFsKHRlcm1zKSB7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IHRoaXMuZmluZENvbGxlY3Rpb25CeVRlcm1zKHRlcm1zKSxcbiAgICAgICAgICB0ZXJtc0VxdWFsID0gKGNvbGxlY3Rpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHRlcm1zRXF1YWw7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVKU09OO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgY29sbGVjdGlvbnMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgY29sbGVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9jYWxDb250ZXh0KGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgY29sbGVjdGlvbnMgPSBbXTtcblxuICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBjb2xsZWN0aW9ucyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzO1xuXG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGNvbGxlY3Rpb25zID0gW10sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGNvbGxlY3Rpb25zKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvY2FsQ29udGV4dEFuZEFzc2lnbm1lbnRzKGxvY2FsQ29udGV4dCwgYXNzaWdubWVudHMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gYXNzaWdubWVudHMubWFwKChhc3NpZ25tZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGFzc2lnbm1lbnQuZ2V0VmFyaWFibGUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBjb2xsZWN0aW9ucyA9IFtdO1xuXG4gICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGNvbGxlY3Rpb25zKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihMb2NhbENvbnRleHQucHJvdG90eXBlLCBmaWxlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oTG9jYWxDb250ZXh0LnByb3RvdHlwZSwgbG9nZ2luZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJMb2NhbENvbnRleHQiLCJjb250ZXh0IiwidmFyaWFibGVzIiwicHJvb2ZTdGVwcyIsImNvbGxlY3Rpb25zIiwiZ2V0Q29udGV4dCIsImdldFZhcmlhYmxlcyIsImdldFByb29mU3RlcHMiLCJnZXRDb2xsZWN0aW9ucyIsImNvbGxlY3Rpb25zQSIsImNvbGxlY3Rpb25zQiIsIm1lcmdlQ29sbGVjdGlvbnMiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdGllcyIsImZvckVhY2giLCJwcm9vZlN0ZXAiLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbVByb29mU3RlcCIsInB1c2giLCJnZXRMYXN0UHJvb2ZTdGVwIiwibGFzdFByb29mU3RlcCIsInByb29mU3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0IiwiZ2V0TWV0YXZhcmlhYmxlcyIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHlSZWZsZXhpdmUiLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRSaWdodFRlcm0iLCJsZWZ0Q29sbGVjdGlvbiIsImZpbmRDb2xsZWN0aW9uQnlUZXJtIiwicmlnaHRDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsIkNvbGxlY3Rpb24iLCJmcm9tRXF1YWxpdHkiLCJhZGRDb2xsZWN0aW9uIiwidGVybSIsImFkZFRlcm0iLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImZpbHRlciIsIm5hbWUiLCJuYW1lVmFyaWFibGVOYW1lIiwiYWRkUHJvb2ZTdGVwIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsInByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQiLCJzb21lIiwibWF0Y2giLCJmaW5kQ29sbGVjdGlvbkJ5VHlwZSIsInR5cGUiLCJmaW5kQ29sbGVjdGlvbkJ5VGVybXMiLCJ0ZXJtcyIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiaXNFcXVhbGl0eUVxdWFsIiwiZXF1YWxpdHlFcXVhbCIsInRlcm1zRXF1YWwiLCJhcmVUZXJtc0VxdWFsIiwidG9KU09OIiwidG9rZW5zIiwibWFwIiwidmFyaWFibGVKU09OIiwianNvbiIsImZyb21GaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0IiwiZnJvbUxvY2FsQ29udGV4dCIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJ2YXJpYWJsZXNKU09OIiwiVmFyaWFibGUiLCJmcm9tTG9jYWxDb250ZXh0QW5kQXNzaWdubWVudHMiLCJhc3NpZ25tZW50cyIsImFzc2lnbm1lbnQiLCJnZXRWYXJpYWJsZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImZpbGVNaXhpbnMiLCJsb2dnaW5nTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzVEE7OztlQUFBOzs7K0RBcFRxQjsrREFDQTtpRUFDRTsyREFDQTs4REFDRztxQkFFRzsyQkFDdUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBHLElBQUEsQUFBTUEsNkJBQUQsQUFBTDthQUFNQSxhQUNRQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXO2dDQURuREo7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBTGpCSjs7WUFRSkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlKLFlBQVksSUFBSSxDQUFDRCxPQUFPLENBQUNLLFlBQVk7Z0JBRXpDSixZQUFZLEFBQ1YscUJBQUdBLGtCQUNILHFCQUFHLElBQUksQ0FBQ0EsU0FBUztnQkFHbkIsT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJSixhQUFhLElB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