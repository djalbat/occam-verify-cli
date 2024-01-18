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
                var equalityAdded;
                var equalityReflexive = equality.isReflexive();
                if (equalityReflexive) {
                    equalityAdded = true; ///
                } else {
                    var leftTerm = equality.getLeftTerm(), rightTerm = equality.getRightTerm(), leftCollection = (0, _collection1.findCollectionByTerm)(this.collections, leftTerm), rightCollection = (0, _collection1.findCollectionByTerm)(this.collections, rightTerm);
                    if (false) {
                    ///
                    } else if (leftCollection === null && rightCollection === null) {
                        var collection = _collection.default.fromEquality(equality);
                        this.addCollection(collection);
                        equalityAdded = true;
                    } else if (leftCollection !== null && rightCollection === null) {
                        var term = rightTerm, collection1 = leftCollection; ///
                        collection1.addTerm(term);
                        equalityAdded = true;
                    } else if (leftCollection === null && rightCollection !== null) {
                        var term1 = leftTerm, collection2 = rightCollection; ///
                        collection2.addTerm(term1);
                        equalityAdded = true;
                    } else if (leftCollection !== null && rightCollection !== null) {
                        debugger;
                    }
                }
                return equalityAdded;
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                var variableAdded = false;
                var node = variable.getNode(), variablePresent = this.variables.some(function(variable) {
                    var nodeMatches = variable.matchNode(node);
                    if (nodeMatches) {
                        return true;
                    }
                });
                if (!variablePresent) {
                    this.variables.push(variable);
                    variableAdded = true;
                }
                return variableAdded;
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
            key: "findVariableByVariableNode",
            value: function findVariableByVariableNode(variableNode) {
                var node = variableNode, variables = this.getVariables(), variable = variables.find(function(variable) {
                    var matches = variable.matchNode(node);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "isVariablePresentByVariableNode",
            value: function isVariablePresentByVariableNode(variableNode) {
                var variable = this.findVariableByVariableNode(variableNode), variablePresent = variable !== null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tIFwiLi4vY29sbGVjdGlvblwiO1xuaW1wb3J0IGZpbGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9maWxlXCI7XG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcblxuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG1lcmdlQ29sbGVjdGlvbnMsIGZpbmRDb2xsZWN0aW9uQnlUeXBlLCBmaW5kQ29sbGVjdGlvbkJ5VGVybSwgZmluZENvbGxlY3Rpb25CeVRlcm1zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb2xsZWN0aW9uXCI7XG5cbmNsYXNzIExvY2FsQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgY29sbGVjdGlvbnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMucHJvb2ZTdGVwcyA9IHByb29mU3RlcHM7XG4gICAgdGhpcy5jb2xsZWN0aW9ucyA9IGNvbGxlY3Rpb25zO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIGxldCB2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICB2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udmFyaWFibGVzLFxuICAgICAgLi4udGhpcy52YXJpYWJsZXNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgbGV0IHByb29mU3RlcHMgPSB0aGlzLmNvbnRleHQuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgcHJvb2ZTdGVwcyA9IFsgIC8vL1xuICAgICAgLi4ucHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMucHJvb2ZTdGVwc1xuICAgIF07XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldENvbGxlY3Rpb25zKCkge1xuICAgIGxldCBjb2xsZWN0aW9ucyA9IHRoaXMuY29udGV4dC5nZXRDb2xsZWN0aW9ucygpO1xuXG4gICAgY29uc3QgY29sbGVjdGlvbnNBID0gY29sbGVjdGlvbnMsIC8vL1xuICAgICAgICAgIGNvbGxlY3Rpb25zQiA9IHRoaXMuY29sbGVjdGlvbnM7XG5cbiAgICBjb2xsZWN0aW9ucyA9IG1lcmdlQ29sbGVjdGlvbnMoY29sbGVjdGlvbnNBLCBjb2xsZWN0aW9uc0IpOyAvLy9cblxuICAgIHJldHVybiBjb2xsZWN0aW9ucztcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7XG4gICAgbGV0IGxhc3RQcm9vZlN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwc0xlbmd0aCA9IHRoaXMucHJvb2ZTdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAocHJvb2ZTdGVwc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RQcm9vZlN0ZXAgPSBsYXN0KHRoaXMucHJvb2ZTdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RQcm9vZlN0ZXA7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTsgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgbGV0IGVxdWFsaXR5QWRkZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVJlZmxleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlSZWZsZXhpdmUpIHtcbiAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVmdFRlcm0gPSBlcXVhbGl0eS5nZXRMZWZ0VGVybSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtKCksXG4gICAgICAgICAgICBsZWZ0Q29sbGVjdGlvbiA9IGZpbmRDb2xsZWN0aW9uQnlUZXJtKHRoaXMuY29sbGVjdGlvbnMsIGxlZnRUZXJtKSxcbiAgICAgICAgICAgIHJpZ2h0Q29sbGVjdGlvbiA9IGZpbmRDb2xsZWN0aW9uQnlUZXJtKHRoaXMuY29sbGVjdGlvbnMsIHJpZ2h0VGVybSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRDb2xsZWN0aW9uID09PSBudWxsKSAmJiAocmlnaHRDb2xsZWN0aW9uID09PSBudWxsKSkge1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gQ29sbGVjdGlvbi5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpO1xuXG4gICAgICAgIHRoaXMuYWRkQ29sbGVjdGlvbihjb2xsZWN0aW9uKTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRDb2xsZWN0aW9uICE9PSBudWxsKSAmJiAocmlnaHRDb2xsZWN0aW9uID09PSBudWxsKSkge1xuICAgICAgICBjb25zdCB0ZXJtID0gcmlnaHRUZXJtLCAvLy9cbiAgICAgICAgICAgICAgY29sbGVjdGlvbiA9IGxlZnRDb2xsZWN0aW9uOyAgLy8vXG5cbiAgICAgICAgY29sbGVjdGlvbi5hZGRUZXJtKHRlcm0pO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdENvbGxlY3Rpb24gPT09IG51bGwpICYmIChyaWdodENvbGxlY3Rpb24gIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSBsZWZ0VGVybSwgLy8vXG4gICAgICAgICAgICAgIGNvbGxlY3Rpb24gPSByaWdodENvbGxlY3Rpb247ICAvLy9cblxuICAgICAgICBjb2xsZWN0aW9uLmFkZFRlcm0odGVybSk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0Q29sbGVjdGlvbiAhPT0gbnVsbCkgJiYgKHJpZ2h0Q29sbGVjdGlvbiAhPT0gbnVsbCkpIHtcblxuICAgICAgICBkZWJ1Z2dlclxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5QWRkZWQ7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGxldCB2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMudmFyaWFibGVzLnNvbWUoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZFByb29mU3RlcChwcm9vZlN0ZXApIHtcbiAgICB0aGlzLnByb29mU3RlcHMucHVzaChwcm9vZlN0ZXApO1xuICB9XG5cbiAgYWRkQ29sbGVjdGlvbihjb2xsZWN0aW9uKSB7XG4gICAgdGhpcy5jb2xsZWN0aW9ucy5wdXNoKGNvbGxlY3Rpb24pO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQgPSB0aGlzLnByb29mU3RlcHMuc29tZSgocHJvb2ZTdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQgPSBwcm9vZlN0ZXAubWF0Y2goc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHN0YXRlbWVudE1hdGNoZXMgPSBwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIHN0YXRlbWVudE1hdGNoZXMgPSB0aGlzLmNvbnRleHQubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBmaW5kQ29sbGVjdGlvbkJ5VHlwZSh0eXBlKSB7XG4gICAgY29uc3QgY29sbGVjdGlvbnMgPSB0aGlzLmdldENvbGxlY3Rpb25zKCksXG4gICAgICAgICAgY29sbGVjdGlvbiA9IGZpbmRDb2xsZWN0aW9uQnlUeXBlKGNvbGxlY3Rpb25zLCB0eXBlKTtcblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG5cbiAgZmluZENvbGxlY3Rpb25CeVRlcm0odGVybSkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gdGhpcy5nZXRDb2xsZWN0aW9ucygpLFxuICAgICAgICAgIGNvbGxlY3Rpb24gPSBmaW5kQ29sbGVjdGlvbkJ5VGVybShjb2xsZWN0aW9ucywgdGVybSk7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuXG4gIGZpbmRDb2xsZWN0aW9uQnlUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gdGhpcy5nZXRDb2xsZWN0aW9ucygpLFxuICAgICAgICAgIGNvbGxlY3Rpb24gPSBmaW5kQ29sbGVjdGlvbkJ5VGVybXMoY29sbGVjdGlvbnMsIHRlcm1zKTtcblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNFcXVhbGl0eUVxdWFsKGVxdWFsaXR5KSB7XG4gICAgbGV0IGVxdWFsaXR5RXF1YWw7XG5cbiAgICBjb25zdCBlcXVhbGl0eVJlZmxleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlSZWZsZXhpdmUpIHtcbiAgICAgIGVxdWFsaXR5RXF1YWwgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0VGVybSA9IGVxdWFsaXR5LmdldExlZnRUZXJtKCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSBlcXVhbGl0eS5nZXRSaWdodFRlcm0oKSxcbiAgICAgICAgICAgIHRlcm1zID0gW1xuICAgICAgICAgICAgICBsZWZ0VGVybSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGVybXNFcXVhbCA9IHRoaXMuYXJlVGVybXNFcXVhbCh0ZXJtcyk7XG5cbiAgICAgIGVxdWFsaXR5RXF1YWwgPSB0ZXJtc0VxdWFsOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHlFcXVhbDtcbiAgfVxuXG4gIGFyZVRlcm1zRXF1YWwodGVybXMpIHtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5maW5kQ29sbGVjdGlvbkJ5VGVybXModGVybXMpLFxuICAgICAgICAgIHRlcm1zRXF1YWwgPSAoY29sbGVjdGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdGVybXNFcXVhbDtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047XG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBjb2xsZWN0aW9ucyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBjb2xsZWN0aW9ucyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2NhbENvbnRleHQobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBjb2xsZWN0aW9ucyA9IFtdO1xuXG4gICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGNvbGxlY3Rpb25zKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXM7XG5cbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLm1hcCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgY29sbGVjdGlvbnMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgY29sbGVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9jYWxDb250ZXh0QW5kQXNzaWdubWVudHMobG9jYWxDb250ZXh0LCBhc3NpZ25tZW50cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBhc3NpZ25tZW50cy5tYXAoKGFzc2lnbm1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0gYXNzaWdubWVudC5nZXRWYXJpYWJsZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGNvbGxlY3Rpb25zID0gW107XG5cbiAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgY29sbGVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKExvY2FsQ29udGV4dC5wcm90b3R5cGUsIGZpbGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihMb2NhbENvbnRleHQucHJvdG90eXBlLCBsb2dnaW5nTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxDb250ZXh0O1xuIl0sIm5hbWVzIjpbIkxvY2FsQ29udGV4dCIsImNvbnRleHQiLCJ2YXJpYWJsZXMiLCJwcm9vZlN0ZXBzIiwiY29sbGVjdGlvbnMiLCJnZXRDb250ZXh0IiwiZ2V0VmFyaWFibGVzIiwiZ2V0UHJvb2ZTdGVwcyIsImdldENvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnNBIiwiY29sbGVjdGlvbnNCIiwibWVyZ2VDb2xsZWN0aW9ucyIsImdldExhc3RQcm9vZlN0ZXAiLCJsYXN0UHJvb2ZTdGVwIiwicHJvb2ZTdGVwc0xlbmd0aCIsImxlbmd0aCIsImxhc3QiLCJnZXRNZXRhdmFyaWFibGVzIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5QWRkZWQiLCJlcXVhbGl0eVJlZmxleGl2ZSIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm0iLCJnZXRMZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldFJpZ2h0VGVybSIsImxlZnRDb2xsZWN0aW9uIiwiZmluZENvbGxlY3Rpb25CeVRlcm0iLCJyaWdodENvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsImZyb21FcXVhbGl0eSIsImFkZENvbGxlY3Rpb24iLCJ0ZXJtIiwiYWRkVGVybSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUFkZGVkIiwibm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJzb21lIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJwdXNoIiwiYWRkUHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsInByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQiLCJtYXRjaCIsImZpbmRDb2xsZWN0aW9uQnlUeXBlIiwidHlwZSIsImZpbmRDb2xsZWN0aW9uQnlUZXJtcyIsInRlcm1zIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJmaW5kIiwibWF0Y2hlcyIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUiLCJpc0VxdWFsaXR5RXF1YWwiLCJlcXVhbGl0eUVxdWFsIiwidGVybXNFcXVhbCIsImFyZVRlcm1zRXF1YWwiLCJ0b0pTT04iLCJ0b2tlbnMiLCJtYXAiLCJ2YXJpYWJsZUpTT04iLCJqc29uIiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHQiLCJmcm9tTG9jYWxDb250ZXh0IiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsInZhcmlhYmxlc0pTT04iLCJWYXJpYWJsZSIsImZyb21Mb2NhbENvbnRleHRBbmRBc3NpZ25tZW50cyIsImFzc2lnbm1lbnRzIiwiYXNzaWdubWVudCIsImdldFZhcmlhYmxlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZmlsZU1peGlucyIsImxvZ2dpbmdNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVUQTs7O2VBQUE7OzsrREFyVHFCO2lFQUNFOzJEQUNBOzhEQUNHO3FCQUVMOzJCQUMrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEcsSUFBQSxBQUFNQSw2QkFBRCxBQUFMO2FBQU1BLGFBQ1FDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRG5ESjtRQUVGLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFMakJKOztZQVFKSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUosWUFBWSxJQUFJLENBQUNELE9BQU8sQ0FBQ0ssWUFBWTtnQkFFekNKLFlBQVksQUFDVixxQkFBR0Esa0JBQ0gscUJBQUcsSUFBSSxDQUFDQSxTQUFTO2dCQUduQixPQUFPQTtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlKLGFBQWEsSUFBSSxDQUFDRixPQUFPLENBQUNNLGFBQWE7Z0JBRTNDSixhQUFhLEFBQ1gscUJBQUdBLG1CQUNILHFCQUFHLElBQUksQ0FBQ0EsVUFBVTtn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