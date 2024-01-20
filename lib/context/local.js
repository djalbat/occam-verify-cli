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
var _context = /*#__PURE__*/ _interop_require_default(require("../mixins/context"));
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
                variables = _to_consumable_array(this.variables).concat(_to_consumable_array(variables));
                return variables;
            }
        },
        {
            key: "getProofSteps",
            value: function getProofSteps() {
                var proofSteps = this.context.getProofSteps();
                proofSteps = _to_consumable_array(this.proofSteps).concat(_to_consumable_array(proofSteps));
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
Object.assign(LocalContext.prototype, _context.default);
var _default = LocalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tIFwiLi4vY29sbGVjdGlvblwiO1xuaW1wb3J0IGNvbnRleHRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jb250ZXh0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBtZXJnZUNvbGxlY3Rpb25zLCBmaW5kQ29sbGVjdGlvbkJ5VHlwZSwgZmluZENvbGxlY3Rpb25CeVRlcm0sIGZpbmRDb2xsZWN0aW9uQnlUZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29sbGVjdGlvblwiO1xuXG5jbGFzcyBMb2NhbENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGNvbGxlY3Rpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLnByb29mU3RlcHMgPSBwcm9vZlN0ZXBzO1xuICAgIHRoaXMuY29sbGVjdGlvbnMgPSBjb2xsZWN0aW9ucztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICBsZXQgdmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgdmFyaWFibGVzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMudmFyaWFibGVzLFxuICAgICAgLi4udmFyaWFibGVzXG4gICAgXTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRQcm9vZlN0ZXBzKCkge1xuICAgIGxldCBwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgIHByb29mU3RlcHMgPSBbICAvLy9cbiAgICAgIC4uLnRoaXMucHJvb2ZTdGVwcyxcbiAgICAgIC4uLnByb29mU3RlcHNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcHM7XG4gIH1cblxuICBnZXRDb2xsZWN0aW9ucygpIHtcbiAgICBsZXQgY29sbGVjdGlvbnMgPSB0aGlzLmNvbnRleHQuZ2V0Q29sbGVjdGlvbnMoKTtcblxuICAgIGNvbnN0IGNvbGxlY3Rpb25zQSA9IGNvbGxlY3Rpb25zLCAvLy9cbiAgICAgICAgICBjb2xsZWN0aW9uc0IgPSB0aGlzLmNvbGxlY3Rpb25zO1xuXG4gICAgY29sbGVjdGlvbnMgPSBtZXJnZUNvbGxlY3Rpb25zKGNvbGxlY3Rpb25zQSwgY29sbGVjdGlvbnNCKTsgLy8vXG5cbiAgICByZXR1cm4gY29sbGVjdGlvbnM7XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkge1xuICAgIGxldCBsYXN0UHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mU3RlcHNMZW5ndGggPSB0aGlzLnByb29mU3RlcHMubGVuZ3RoO1xuXG4gICAgaWYgKHByb29mU3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0UHJvb2ZTdGVwID0gbGFzdCh0aGlzLnByb29mU3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0UHJvb2ZTdGVwO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRNZXRhdmFyaWFibGVzKCk7IH1cblxuICBhZGRFcXVhbGl0eShlcXVhbGl0eSkge1xuICAgIGxldCBlcXVhbGl0eUFkZGVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlSZWZsZXhpdmUgPSBlcXVhbGl0eS5pc1JlZmxleGl2ZSgpO1xuXG4gICAgaWYgKGVxdWFsaXR5UmVmbGV4aXZlKSB7XG4gICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm0oKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybSgpLFxuICAgICAgICAgICAgbGVmdENvbGxlY3Rpb24gPSBmaW5kQ29sbGVjdGlvbkJ5VGVybSh0aGlzLmNvbGxlY3Rpb25zLCBsZWZ0VGVybSksXG4gICAgICAgICAgICByaWdodENvbGxlY3Rpb24gPSBmaW5kQ29sbGVjdGlvbkJ5VGVybSh0aGlzLmNvbGxlY3Rpb25zLCByaWdodFRlcm0pO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKChsZWZ0Q29sbGVjdGlvbiA9PT0gbnVsbCkgJiYgKHJpZ2h0Q29sbGVjdGlvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IENvbGxlY3Rpb24uZnJvbUVxdWFsaXR5KGVxdWFsaXR5KTtcblxuICAgICAgICB0aGlzLmFkZENvbGxlY3Rpb24oY29sbGVjdGlvbik7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0Q29sbGVjdGlvbiAhPT0gbnVsbCkgJiYgKHJpZ2h0Q29sbGVjdGlvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgdGVybSA9IHJpZ2h0VGVybSwgLy8vXG4gICAgICAgICAgICAgIGNvbGxlY3Rpb24gPSBsZWZ0Q29sbGVjdGlvbjsgIC8vL1xuXG4gICAgICAgIGNvbGxlY3Rpb24uYWRkVGVybSh0ZXJtKTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRDb2xsZWN0aW9uID09PSBudWxsKSAmJiAocmlnaHRDb2xsZWN0aW9uICE9PSBudWxsKSkge1xuICAgICAgICBjb25zdCB0ZXJtID0gbGVmdFRlcm0sIC8vL1xuICAgICAgICAgICAgICBjb2xsZWN0aW9uID0gcmlnaHRDb2xsZWN0aW9uOyAgLy8vXG5cbiAgICAgICAgY29sbGVjdGlvbi5hZGRUZXJtKHRlcm0pO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdENvbGxlY3Rpb24gIT09IG51bGwpICYmIChyaWdodENvbGxlY3Rpb24gIT09IG51bGwpKSB7XG5cbiAgICAgICAgZGVidWdnZXJcblxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eUFkZGVkO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBsZXQgdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLnZhcmlhYmxlcy5zb21lKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZU1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgICAgdmFyaWFibGVBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlQWRkZWQ7XG4gIH1cblxuICBhZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKSB7XG4gICAgdGhpcy5wcm9vZlN0ZXBzLnB1c2gocHJvb2ZTdGVwKTtcbiAgfVxuXG4gIGFkZENvbGxlY3Rpb24oY29sbGVjdGlvbikge1xuICAgIHRoaXMuY29sbGVjdGlvbnMucHVzaChjb2xsZWN0aW9uKTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgc3RhdGVtZW50TWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50ID0gdGhpcy5wcm9vZlN0ZXBzLnNvbWUoKHByb29mU3RlcCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50ID0gcHJvb2ZTdGVwLm1hdGNoKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGlmIChwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gcHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5jb250ZXh0Lm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgZmluZENvbGxlY3Rpb25CeVR5cGUodHlwZSkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gdGhpcy5nZXRDb2xsZWN0aW9ucygpLFxuICAgICAgICAgIGNvbGxlY3Rpb24gPSBmaW5kQ29sbGVjdGlvbkJ5VHlwZShjb2xsZWN0aW9ucywgdHlwZSk7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuXG4gIGZpbmRDb2xsZWN0aW9uQnlUZXJtKHRlcm0pIHtcbiAgICBjb25zdCBjb2xsZWN0aW9ucyA9IHRoaXMuZ2V0Q29sbGVjdGlvbnMoKSxcbiAgICAgICAgICBjb2xsZWN0aW9uID0gZmluZENvbGxlY3Rpb25CeVRlcm0oY29sbGVjdGlvbnMsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH1cblxuICBmaW5kQ29sbGVjdGlvbkJ5VGVybXModGVybXMpIHtcbiAgICBjb25zdCBjb2xsZWN0aW9ucyA9IHRoaXMuZ2V0Q29sbGVjdGlvbnMoKSxcbiAgICAgICAgICBjb2xsZWN0aW9uID0gZmluZENvbGxlY3Rpb25CeVRlcm1zKGNvbGxlY3Rpb25zLCB0ZXJtcyk7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzRXF1YWxpdHlFcXVhbChlcXVhbGl0eSkge1xuICAgIGxldCBlcXVhbGl0eUVxdWFsO1xuXG4gICAgY29uc3QgZXF1YWxpdHlSZWZsZXhpdmUgPSBlcXVhbGl0eS5pc1JlZmxleGl2ZSgpO1xuXG4gICAgaWYgKGVxdWFsaXR5UmVmbGV4aXZlKSB7XG4gICAgICBlcXVhbGl0eUVxdWFsID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVmdFRlcm0gPSBlcXVhbGl0eS5nZXRMZWZ0VGVybSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtKCksXG4gICAgICAgICAgICB0ZXJtcyA9IFtcbiAgICAgICAgICAgICAgbGVmdFRlcm0sXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRlcm1zRXF1YWwgPSB0aGlzLmFyZVRlcm1zRXF1YWwodGVybXMpO1xuXG4gICAgICBlcXVhbGl0eUVxdWFsID0gdGVybXNFcXVhbDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5RXF1YWw7XG4gIH1cblxuICBhcmVUZXJtc0VxdWFsKHRlcm1zKSB7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IHRoaXMuZmluZENvbGxlY3Rpb25CeVRlcm1zKHRlcm1zKSxcbiAgICAgICAgICB0ZXJtc0VxdWFsID0gKGNvbGxlY3Rpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHRlcm1zRXF1YWw7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVKU09OO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgY29sbGVjdGlvbnMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgY29sbGVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9jYWxDb250ZXh0KGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgY29sbGVjdGlvbnMgPSBbXTtcblxuICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBjb2xsZWN0aW9ucyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzO1xuXG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGNvbGxlY3Rpb25zID0gW10sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGNvbGxlY3Rpb25zKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvY2FsQ29udGV4dEFuZEFzc2lnbm1lbnRzKGxvY2FsQ29udGV4dCwgYXNzaWdubWVudHMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gYXNzaWdubWVudHMubWFwKChhc3NpZ25tZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGFzc2lnbm1lbnQuZ2V0VmFyaWFibGUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBjb2xsZWN0aW9ucyA9IFtdO1xuXG4gICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGNvbGxlY3Rpb25zKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihMb2NhbENvbnRleHQucHJvdG90eXBlLCBjb250ZXh0TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxDb250ZXh0O1xuIl0sIm5hbWVzIjpbIkxvY2FsQ29udGV4dCIsImNvbnRleHQiLCJ2YXJpYWJsZXMiLCJwcm9vZlN0ZXBzIiwiY29sbGVjdGlvbnMiLCJnZXRDb250ZXh0IiwiZ2V0VmFyaWFibGVzIiwiZ2V0UHJvb2ZTdGVwcyIsImdldENvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnNBIiwiY29sbGVjdGlvbnNCIiwibWVyZ2VDb2xsZWN0aW9ucyIsImdldExhc3RQcm9vZlN0ZXAiLCJsYXN0UHJvb2ZTdGVwIiwicHJvb2ZTdGVwc0xlbmd0aCIsImxlbmd0aCIsImxhc3QiLCJnZXRNZXRhdmFyaWFibGVzIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5QWRkZWQiLCJlcXVhbGl0eVJlZmxleGl2ZSIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm0iLCJnZXRMZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldFJpZ2h0VGVybSIsImxlZnRDb2xsZWN0aW9uIiwiZmluZENvbGxlY3Rpb25CeVRlcm0iLCJyaWdodENvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsImZyb21FcXVhbGl0eSIsImFkZENvbGxlY3Rpb24iLCJ0ZXJtIiwiYWRkVGVybSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUFkZGVkIiwibm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJzb21lIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJwdXNoIiwiYWRkUHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsInByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQiLCJtYXRjaCIsImZpbmRDb2xsZWN0aW9uQnlUeXBlIiwidHlwZSIsImZpbmRDb2xsZWN0aW9uQnlUZXJtcyIsInRlcm1zIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJmaW5kIiwibWF0Y2hlcyIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUiLCJpc0VxdWFsaXR5RXF1YWwiLCJlcXVhbGl0eUVxdWFsIiwidGVybXNFcXVhbCIsImFyZVRlcm1zRXF1YWwiLCJ0b0pTT04iLCJ0b2tlbnMiLCJtYXAiLCJ2YXJpYWJsZUpTT04iLCJqc29uIiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHQiLCJmcm9tTG9jYWxDb250ZXh0IiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsInZhcmlhYmxlc0pTT04iLCJWYXJpYWJsZSIsImZyb21Mb2NhbENvbnRleHRBbmRBc3NpZ25tZW50cyIsImFzc2lnbm1lbnRzIiwiYXNzaWdubWVudCIsImdldFZhcmlhYmxlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiY29udGV4dE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcVRBOzs7ZUFBQTs7OytEQW5UcUI7aUVBQ0U7OERBQ0c7cUJBRUw7MkJBQytFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRyxJQUFBLEFBQU1BLDZCQUFELEFBQUw7YUFBTUEsYUFDUUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsV0FBVztnQ0FEbkRKO1FBRUYsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2tCQUxqQko7O1lBUUpLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJSixZQUFZLElBQUksQ0FBQ0QsT0FBTyxDQUFDSyxZQUFZO2dCQUV6Q0osWUFBWSxBQUNWLHFCQUFHLElBQUksQ0FBQ0EsU0FBUyxTQUNqQixxQkFBR0E7Z0JBR0wsT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJSixhQUFhLElBQUksQ0FBQ0YsT0FBTyxDQUFDTSxhQUFhO2dCQUUzQ0osYUFBYSxBQUNYLHFCQUFHLElBQUksQ0FBQ0EsVUFBVSxTQUNsQixxQkFBR0E7Z0JBR0wsT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJSixjQUFjLElBQUksQ0FBQ0gsT0FBTyxDQUFDTyxjQUFjO2dCQUU3QyxJQUFNQyxlQUFlTCxhQUNmTSxlQUFl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