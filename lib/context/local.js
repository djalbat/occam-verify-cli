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
            key: "getTermType",
            value: function getTermType(term) {
                var termType;
                var collections = this.getCollections(), collection = (0, _collection1.findCollectionByTerm)(collections, term);
                if (collection !== null) {
                    var localContext = this, collectionType = collection.getType(localContext);
                    termType = collectionType; ///
                } else {
                    termType = term.getType();
                }
                return termType;
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
                        leftCollection.addTerm(rightTerm);
                        equalityAdded = true;
                    } else if (leftCollection === null && rightCollection !== null) {
                        rightCollection.addTerm(leftTerm);
                        equalityAdded = true;
                    } else if (leftCollection !== null && rightCollection !== null) {
                        if (leftCollection === rightCollection) {
                            var collection1 = leftCollection; ///
                            collection1.addTerm(leftTerm);
                            collection1.addTerm(rightTerm);
                            equalityAdded = true;
                        } else {
                            debugger;
                        }
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
        }
    ]);
    return LocalContext;
}();
Object.assign(LocalContext.prototype, _context.default);
var _default = LocalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tIFwiLi4vY29sbGVjdGlvblwiO1xuaW1wb3J0IGNvbnRleHRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jb250ZXh0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBtZXJnZUNvbGxlY3Rpb25zLCBmaW5kQ29sbGVjdGlvbkJ5VGVybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29sbGVjdGlvblwiO1xuXG5jbGFzcyBMb2NhbENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGNvbGxlY3Rpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLnByb29mU3RlcHMgPSBwcm9vZlN0ZXBzO1xuICAgIHRoaXMuY29sbGVjdGlvbnMgPSBjb2xsZWN0aW9ucztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICBsZXQgdmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgdmFyaWFibGVzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMudmFyaWFibGVzLFxuICAgICAgLi4udmFyaWFibGVzXG4gICAgXTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRQcm9vZlN0ZXBzKCkge1xuICAgIGxldCBwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgIHByb29mU3RlcHMgPSBbICAvLy9cbiAgICAgIC4uLnRoaXMucHJvb2ZTdGVwcyxcbiAgICAgIC4uLnByb29mU3RlcHNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcHM7XG4gIH1cblxuICBnZXRDb2xsZWN0aW9ucygpIHtcbiAgICBsZXQgY29sbGVjdGlvbnMgPSB0aGlzLmNvbnRleHQuZ2V0Q29sbGVjdGlvbnMoKTtcblxuICAgIGNvbnN0IGNvbGxlY3Rpb25zQSA9IHRoaXMuY29sbGVjdGlvbnMsIC8vL1xuICAgICAgICAgIGNvbGxlY3Rpb25zQiA9IGNvbGxlY3Rpb25zLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IHRoaXM7ICAvLy9cblxuICAgIGNvbGxlY3Rpb25zID0gbWVyZ2VDb2xsZWN0aW9ucyhjb2xsZWN0aW9uc0EsIGNvbGxlY3Rpb25zQiwgbG9jYWxDb250ZXh0KTsgLy8vXG5cbiAgICByZXR1cm4gY29sbGVjdGlvbnM7XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkge1xuICAgIGxldCBsYXN0UHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mU3RlcHNMZW5ndGggPSB0aGlzLnByb29mU3RlcHMubGVuZ3RoO1xuXG4gICAgaWYgKHByb29mU3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0UHJvb2ZTdGVwID0gbGFzdCh0aGlzLnByb29mU3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0UHJvb2ZTdGVwO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRNZXRhdmFyaWFibGVzKCk7IH1cblxuICBnZXRUZXJtVHlwZSh0ZXJtKSB7XG4gICAgbGV0IHRlcm1UeXBlO1xuXG4gICAgY29uc3QgY29sbGVjdGlvbnMgPSB0aGlzLmdldENvbGxlY3Rpb25zKCksXG4gICAgICAgICAgY29sbGVjdGlvbiA9IGZpbmRDb2xsZWN0aW9uQnlUZXJtKGNvbGxlY3Rpb25zLCB0ZXJtKTtcblxuICAgIGlmIChjb2xsZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBjb2xsZWN0aW9uVHlwZSA9IGNvbGxlY3Rpb24uZ2V0VHlwZShsb2NhbENvbnRleHQpO1xuXG4gICAgICB0ZXJtVHlwZSA9IGNvbGxlY3Rpb25UeXBlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1UeXBlO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBsZXQgZXF1YWxpdHlBZGRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5UmVmbGV4aXZlID0gZXF1YWxpdHkuaXNSZWZsZXhpdmUoKTtcblxuICAgIGlmIChlcXVhbGl0eVJlZmxleGl2ZSkge1xuICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0VGVybSA9IGVxdWFsaXR5LmdldExlZnRUZXJtKCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSBlcXVhbGl0eS5nZXRSaWdodFRlcm0oKSxcbiAgICAgICAgICAgIGxlZnRDb2xsZWN0aW9uID0gZmluZENvbGxlY3Rpb25CeVRlcm0odGhpcy5jb2xsZWN0aW9ucywgbGVmdFRlcm0pLFxuICAgICAgICAgICAgcmlnaHRDb2xsZWN0aW9uID0gZmluZENvbGxlY3Rpb25CeVRlcm0odGhpcy5jb2xsZWN0aW9ucywgcmlnaHRUZXJtKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmICgobGVmdENvbGxlY3Rpb24gPT09IG51bGwpICYmIChyaWdodENvbGxlY3Rpb24gPT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBDb2xsZWN0aW9uLmZyb21FcXVhbGl0eShlcXVhbGl0eSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb2xsZWN0aW9uKGNvbGxlY3Rpb24pO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdENvbGxlY3Rpb24gIT09IG51bGwpICYmIChyaWdodENvbGxlY3Rpb24gPT09IG51bGwpKSB7XG4gICAgICAgIGxlZnRDb2xsZWN0aW9uLmFkZFRlcm0ocmlnaHRUZXJtKTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRDb2xsZWN0aW9uID09PSBudWxsKSAmJiAocmlnaHRDb2xsZWN0aW9uICE9PSBudWxsKSkge1xuICAgICAgICByaWdodENvbGxlY3Rpb24uYWRkVGVybShsZWZ0VGVybSk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0Q29sbGVjdGlvbiAhPT0gbnVsbCkgJiYgKHJpZ2h0Q29sbGVjdGlvbiAhPT0gbnVsbCkpIHtcbiAgICAgICAgaWYgKGxlZnRDb2xsZWN0aW9uID09PSByaWdodENvbGxlY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gbGVmdENvbGxlY3Rpb247ICAvLy9cblxuICAgICAgICAgIGNvbGxlY3Rpb24uYWRkVGVybShsZWZ0VGVybSk7XG4gICAgICAgICAgY29sbGVjdGlvbi5hZGRUZXJtKHJpZ2h0VGVybSk7XG5cbiAgICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5QWRkZWQ7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGxldCB2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMudmFyaWFibGVzLnNvbWUoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZFByb29mU3RlcChwcm9vZlN0ZXApIHtcbiAgICB0aGlzLnByb29mU3RlcHMucHVzaChwcm9vZlN0ZXApO1xuICB9XG5cbiAgYWRkQ29sbGVjdGlvbihjb2xsZWN0aW9uKSB7XG4gICAgdGhpcy5jb2xsZWN0aW9ucy5wdXNoKGNvbGxlY3Rpb24pO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQgPSB0aGlzLnByb29mU3RlcHMuc29tZSgocHJvb2ZTdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQgPSBwcm9vZlN0ZXAubWF0Y2goc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHN0YXRlbWVudE1hdGNoZXMgPSBwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIHN0YXRlbWVudE1hdGNoZXMgPSB0aGlzLmNvbnRleHQubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVKU09OO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgY29sbGVjdGlvbnMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgY29sbGVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9jYWxDb250ZXh0KGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgY29sbGVjdGlvbnMgPSBbXTtcblxuICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBjb2xsZWN0aW9ucyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzO1xuXG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGNvbGxlY3Rpb25zID0gW10sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGNvbGxlY3Rpb25zKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihMb2NhbENvbnRleHQucHJvdG90eXBlLCBjb250ZXh0TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxDb250ZXh0O1xuIl0sIm5hbWVzIjpbIkxvY2FsQ29udGV4dCIsImNvbnRleHQiLCJ2YXJpYWJsZXMiLCJwcm9vZlN0ZXBzIiwiY29sbGVjdGlvbnMiLCJnZXRDb250ZXh0IiwiZ2V0VmFyaWFibGVzIiwiZ2V0UHJvb2ZTdGVwcyIsImdldENvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnNBIiwiY29sbGVjdGlvbnNCIiwibG9jYWxDb250ZXh0IiwibWVyZ2VDb2xsZWN0aW9ucyIsImdldExhc3RQcm9vZlN0ZXAiLCJsYXN0UHJvb2ZTdGVwIiwicHJvb2ZTdGVwc0xlbmd0aCIsImxlbmd0aCIsImxhc3QiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0VGVybVR5cGUiLCJ0ZXJtIiwidGVybVR5cGUiLCJjb2xsZWN0aW9uIiwiZmluZENvbGxlY3Rpb25CeVRlcm0iLCJjb2xsZWN0aW9uVHlwZSIsImdldFR5cGUiLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlBZGRlZCIsImVxdWFsaXR5UmVmbGV4aXZlIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybSIsImdldExlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwibGVmdENvbGxlY3Rpb24iLCJyaWdodENvbGxlY3Rpb24iLCJDb2xsZWN0aW9uIiwiZnJvbUVxdWFsaXR5IiwiYWRkQ29sbGVjdGlvbiIsImFkZFRlcm0iLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVBZGRlZCIsIm5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVQcmVzZW50Iiwic29tZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwicHVzaCIsImFkZFByb29mU3RlcCIsInByb29mU3RlcCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1hdGNoZXMiLCJwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50IiwibWF0Y2giLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImZpbmQiLCJtYXRjaGVzIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsIm1hcCIsInZhcmlhYmxlSlNPTiIsImpzb24iLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZyb21Mb2NhbENvbnRleHQiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwidmFyaWFibGVzSlNPTiIsIlZhcmlhYmxlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiY29udGV4dE1peGlucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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