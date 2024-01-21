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
var _equality = /*#__PURE__*/ _interop_require_default(require("../verifier/nodes/equality"));
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
                var collectionsA = this.collections, collectionsB = collections, localContext = this; ///
                collections = (0, _collection1.mergeCollections)(collectionsA, collectionsB, localContext); ///
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
                var leftTerm = equality.getLeftTerm(), rightTerm = equality.getRightTerm(), termsEqual = this.areTermsEqual(leftTerm, rightTerm), equalityEqual = termsEqual; ///
                return equalityEqual;
            }
        },
        {
            key: "areTermsEqual",
            value: function areTermsEqual(leftTerm, rightTerm) {
                var termsEqual;
                var collections = this.getCollections(), leftTermNode = leftTerm.getNode(), rightTermNode = rightTerm.getNode(), termNodesEqual = (0, _collection1.areTermNodesEqual)(leftTermNode, rightTermNode, collections);
                if (termNodesEqual) {
                    termsEqual = true;
                } else {
                    var leftNonTerminalNode = leftTermNode, rightNonTerminalNode = rightTermNode, leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), childNodesA = leftNonTerminalNodeChildNodes, childNodesB = rightNonTerminalNodeChildNodes, localContext = this, childNodesVerify = _equality.default.verifyChildNodes(childNodesA, childNodesB, collections, localContext, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    termsEqual = childNodesVerify; ///
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tIFwiLi4vY29sbGVjdGlvblwiO1xuaW1wb3J0IGNvbnRleHRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jb250ZXh0XCI7XG5pbXBvcnQgZXF1YWxpdHlOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9ub2Rlcy9lcXVhbGl0eVwiO1xuXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgYXJlVGVybU5vZGVzRXF1YWwsIG1lcmdlQ29sbGVjdGlvbnMsIGZpbmRDb2xsZWN0aW9uQnlUZXJtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb2xsZWN0aW9uXCI7XG5cbmNsYXNzIExvY2FsQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgY29sbGVjdGlvbnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMucHJvb2ZTdGVwcyA9IHByb29mU3RlcHM7XG4gICAgdGhpcy5jb2xsZWN0aW9ucyA9IGNvbGxlY3Rpb25zO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIGxldCB2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICB2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy52YXJpYWJsZXMsXG4gICAgICAuLi52YXJpYWJsZXNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgbGV0IHByb29mU3RlcHMgPSB0aGlzLmNvbnRleHQuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgcHJvb2ZTdGVwcyA9IFsgIC8vL1xuICAgICAgLi4udGhpcy5wcm9vZlN0ZXBzLFxuICAgICAgLi4ucHJvb2ZTdGVwc1xuICAgIF07XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldENvbGxlY3Rpb25zKCkge1xuICAgIGxldCBjb2xsZWN0aW9ucyA9IHRoaXMuY29udGV4dC5nZXRDb2xsZWN0aW9ucygpO1xuXG4gICAgY29uc3QgY29sbGVjdGlvbnNBID0gdGhpcy5jb2xsZWN0aW9ucywgLy8vXG4gICAgICAgICAgY29sbGVjdGlvbnNCID0gY29sbGVjdGlvbnMsXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gdGhpczsgIC8vL1xuXG4gICAgY29sbGVjdGlvbnMgPSBtZXJnZUNvbGxlY3Rpb25zKGNvbGxlY3Rpb25zQSwgY29sbGVjdGlvbnNCLCBsb2NhbENvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiBjb2xsZWN0aW9ucztcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7XG4gICAgbGV0IGxhc3RQcm9vZlN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwc0xlbmd0aCA9IHRoaXMucHJvb2ZTdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAocHJvb2ZTdGVwc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RQcm9vZlN0ZXAgPSBsYXN0KHRoaXMucHJvb2ZTdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RQcm9vZlN0ZXA7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTsgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgbGV0IGVxdWFsaXR5QWRkZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVJlZmxleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlSZWZsZXhpdmUpIHtcbiAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVmdFRlcm0gPSBlcXVhbGl0eS5nZXRMZWZ0VGVybSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtKCksXG4gICAgICAgICAgICBsZWZ0Q29sbGVjdGlvbiA9IGZpbmRDb2xsZWN0aW9uQnlUZXJtKHRoaXMuY29sbGVjdGlvbnMsIGxlZnRUZXJtKSxcbiAgICAgICAgICAgIHJpZ2h0Q29sbGVjdGlvbiA9IGZpbmRDb2xsZWN0aW9uQnlUZXJtKHRoaXMuY29sbGVjdGlvbnMsIHJpZ2h0VGVybSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRDb2xsZWN0aW9uID09PSBudWxsKSAmJiAocmlnaHRDb2xsZWN0aW9uID09PSBudWxsKSkge1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gQ29sbGVjdGlvbi5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpO1xuXG4gICAgICAgIHRoaXMuYWRkQ29sbGVjdGlvbihjb2xsZWN0aW9uKTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRDb2xsZWN0aW9uICE9PSBudWxsKSAmJiAocmlnaHRDb2xsZWN0aW9uID09PSBudWxsKSkge1xuICAgICAgICBjb25zdCB0ZXJtID0gcmlnaHRUZXJtLCAvLy9cbiAgICAgICAgICAgICAgY29sbGVjdGlvbiA9IGxlZnRDb2xsZWN0aW9uOyAgLy8vXG5cbiAgICAgICAgY29sbGVjdGlvbi5hZGRUZXJtKHRlcm0pO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdENvbGxlY3Rpb24gPT09IG51bGwpICYmIChyaWdodENvbGxlY3Rpb24gIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSBsZWZ0VGVybSwgLy8vXG4gICAgICAgICAgICAgIGNvbGxlY3Rpb24gPSByaWdodENvbGxlY3Rpb247ICAvLy9cblxuICAgICAgICBjb2xsZWN0aW9uLmFkZFRlcm0odGVybSk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0Q29sbGVjdGlvbiAhPT0gbnVsbCkgJiYgKHJpZ2h0Q29sbGVjdGlvbiAhPT0gbnVsbCkpIHtcblxuICAgICAgICBkZWJ1Z2dlclxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5QWRkZWQ7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGxldCB2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMudmFyaWFibGVzLnNvbWUoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZFByb29mU3RlcChwcm9vZlN0ZXApIHtcbiAgICB0aGlzLnByb29mU3RlcHMucHVzaChwcm9vZlN0ZXApO1xuICB9XG5cbiAgYWRkQ29sbGVjdGlvbihjb2xsZWN0aW9uKSB7XG4gICAgdGhpcy5jb2xsZWN0aW9ucy5wdXNoKGNvbGxlY3Rpb24pO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQgPSB0aGlzLnByb29mU3RlcHMuc29tZSgocHJvb2ZTdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQgPSBwcm9vZlN0ZXAubWF0Y2goc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHN0YXRlbWVudE1hdGNoZXMgPSBwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIHN0YXRlbWVudE1hdGNoZXMgPSB0aGlzLmNvbnRleHQubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0VxdWFsaXR5RXF1YWwoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBsZWZ0VGVybSA9IGVxdWFsaXR5LmdldExlZnRUZXJtKCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtKCksXG4gICAgICAgICAgdGVybXNFcXVhbCA9IHRoaXMuYXJlVGVybXNFcXVhbChsZWZ0VGVybSwgcmlnaHRUZXJtKSxcbiAgICAgICAgICBlcXVhbGl0eUVxdWFsID0gdGVybXNFcXVhbDsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxpdHlFcXVhbDtcbiAgfVxuXG4gIGFyZVRlcm1zRXF1YWwobGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIGxldCB0ZXJtc0VxdWFsO1xuXG4gICAgY29uc3QgY29sbGVjdGlvbnMgPSB0aGlzLmdldENvbGxlY3Rpb25zKCksXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2Rlc0VxdWFsID0gYXJlVGVybU5vZGVzRXF1YWwobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb2xsZWN0aW9ucyk7XG5cbiAgICBpZiAodGVybU5vZGVzRXF1YWwpIHtcbiAgICAgIHRlcm1zRXF1YWwgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gbGVmdFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gcmlnaHRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgY2hpbGROb2Rlc0EgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgIC8vL1xuICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IGVxdWFsaXR5Tm9kZXNWZXJpZmllci52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgY29sbGVjdGlvbnMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB0ZXJtc0VxdWFsID0gY2hpbGROb2Rlc1ZlcmlmeTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtc0VxdWFsO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzLm1hcCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjtcblxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB2YXJpYWJsZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGNvbGxlY3Rpb25zID0gW10sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGNvbGxlY3Rpb25zKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvY2FsQ29udGV4dChsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGNvbGxlY3Rpb25zID0gW107XG5cbiAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgY29sbGVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcztcblxuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0pTT04ubWFwKCh2YXJpYWJsZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBjb2xsZWN0aW9ucyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBjb2xsZWN0aW9ucyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2NhbENvbnRleHRBbmRBc3NpZ25tZW50cyhsb2NhbENvbnRleHQsIGFzc2lnbm1lbnRzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IGFzc2lnbm1lbnRzLm1hcCgoYXNzaWdubWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGUgPSBhc3NpZ25tZW50LmdldFZhcmlhYmxlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgY29sbGVjdGlvbnMgPSBbXTtcblxuICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBjb2xsZWN0aW9ucyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTG9jYWxDb250ZXh0LnByb3RvdHlwZSwgY29udGV4dE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJMb2NhbENvbnRleHQiLCJjb250ZXh0IiwidmFyaWFibGVzIiwicHJvb2ZTdGVwcyIsImNvbGxlY3Rpb25zIiwiZ2V0Q29udGV4dCIsImdldFZhcmlhYmxlcyIsImdldFByb29mU3RlcHMiLCJnZXRDb2xsZWN0aW9ucyIsImNvbGxlY3Rpb25zQSIsImNvbGxlY3Rpb25zQiIsImxvY2FsQ29udGV4dCIsIm1lcmdlQ29sbGVjdGlvbnMiLCJnZXRMYXN0UHJvb2ZTdGVwIiwibGFzdFByb29mU3RlcCIsInByb29mU3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0IiwiZ2V0TWV0YXZhcmlhYmxlcyIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUFkZGVkIiwiZXF1YWxpdHlSZWZsZXhpdmUiLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRSaWdodFRlcm0iLCJsZWZ0Q29sbGVjdGlvbiIsImZpbmRDb2xsZWN0aW9uQnlUZXJtIiwicmlnaHRDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsIkNvbGxlY3Rpb24iLCJmcm9tRXF1YWxpdHkiLCJhZGRDb2xsZWN0aW9uIiwidGVybSIsImFkZFRlcm0iLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVBZGRlZCIsIm5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVQcmVzZW50Iiwic29tZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwicHVzaCIsImFkZFByb29mU3RlcCIsInByb29mU3RlcCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1hdGNoZXMiLCJwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50IiwibWF0Y2giLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImZpbmQiLCJtYXRjaGVzIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsImlzRXF1YWxpdHlFcXVhbCIsInRlcm1zRXF1YWwiLCJhcmVUZXJtc0VxdWFsIiwiZXF1YWxpdHlFcXVhbCIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJ0ZXJtTm9kZXNFcXVhbCIsImFyZVRlcm1Ob2Rlc0VxdWFsIiwibGVmdE5vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNWZXJpZnkiLCJlcXVhbGl0eU5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidmVyaWZpZWRBaGVhZCIsInRvSlNPTiIsInRva2VucyIsIm1hcCIsInZhcmlhYmxlSlNPTiIsImpzb24iLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZyb21Mb2NhbENvbnRleHQiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwidmFyaWFibGVzSlNPTiIsIlZhcmlhYmxlIiwiZnJvbUxvY2FsQ29udGV4dEFuZEFzc2lnbm1lbnRzIiwiYXNzaWdubWVudHMiLCJhc3NpZ25tZW50IiwiZ2V0VmFyaWFibGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJjb250ZXh0TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0U0E7OztlQUFBOzs7K0RBMVNxQjtpRUFDRTs4REFDRzsrREFDUTtxQkFFYjsyQkFDcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFFLElBQUEsQUFBTUEsNkJBQUQsQUFBTDthQUFNQSxhQUNRQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXO2dDQURuREo7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FB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