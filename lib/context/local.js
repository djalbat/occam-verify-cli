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
                        var collection1;
                        if (leftCollection === rightCollection) {
                            collection1 = leftCollection; ///
                        } else {
                            collection1 = _collection.default.merge(leftCollection, rightCollection);
                            this.removeCollection(leftCollection);
                            this.removeCollection(rightCollection);
                            this.addCollection(collection1);
                        }
                        collection1.addTerm(leftTerm);
                        collection1.addTerm(rightTerm);
                        equalityAdded = true;
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
            key: "removeCollection",
            value: function removeCollection(collection) {
                var index = this.collections.indexOf(collection), start = index, deleteCount = 1;
                this.collections.splice(start, deleteCount);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tIFwiLi4vY29sbGVjdGlvblwiO1xuaW1wb3J0IGNvbnRleHRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jb250ZXh0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBtZXJnZUNvbGxlY3Rpb25zLCBmaW5kQ29sbGVjdGlvbkJ5VGVybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29sbGVjdGlvblwiO1xuXG5jbGFzcyBMb2NhbENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGNvbGxlY3Rpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLnByb29mU3RlcHMgPSBwcm9vZlN0ZXBzO1xuICAgIHRoaXMuY29sbGVjdGlvbnMgPSBjb2xsZWN0aW9ucztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICBsZXQgdmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgdmFyaWFibGVzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMudmFyaWFibGVzLFxuICAgICAgLi4udmFyaWFibGVzXG4gICAgXTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRQcm9vZlN0ZXBzKCkge1xuICAgIGxldCBwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgIHByb29mU3RlcHMgPSBbICAvLy9cbiAgICAgIC4uLnRoaXMucHJvb2ZTdGVwcyxcbiAgICAgIC4uLnByb29mU3RlcHNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcHM7XG4gIH1cblxuICBnZXRDb2xsZWN0aW9ucygpIHtcbiAgICBsZXQgY29sbGVjdGlvbnMgPSB0aGlzLmNvbnRleHQuZ2V0Q29sbGVjdGlvbnMoKTtcblxuICAgIGNvbnN0IGNvbGxlY3Rpb25zQSA9IHRoaXMuY29sbGVjdGlvbnMsIC8vL1xuICAgICAgICAgIGNvbGxlY3Rpb25zQiA9IGNvbGxlY3Rpb25zLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IHRoaXM7ICAvLy9cblxuICAgIGNvbGxlY3Rpb25zID0gbWVyZ2VDb2xsZWN0aW9ucyhjb2xsZWN0aW9uc0EsIGNvbGxlY3Rpb25zQiwgbG9jYWxDb250ZXh0KTsgLy8vXG5cbiAgICByZXR1cm4gY29sbGVjdGlvbnM7XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkge1xuICAgIGxldCBsYXN0UHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mU3RlcHNMZW5ndGggPSB0aGlzLnByb29mU3RlcHMubGVuZ3RoO1xuXG4gICAgaWYgKHByb29mU3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0UHJvb2ZTdGVwID0gbGFzdCh0aGlzLnByb29mU3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0UHJvb2ZTdGVwO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRNZXRhdmFyaWFibGVzKCk7IH1cblxuICBnZXRUZXJtVHlwZSh0ZXJtKSB7XG4gICAgbGV0IHRlcm1UeXBlO1xuXG4gICAgY29uc3QgY29sbGVjdGlvbnMgPSB0aGlzLmdldENvbGxlY3Rpb25zKCksXG4gICAgICAgICAgY29sbGVjdGlvbiA9IGZpbmRDb2xsZWN0aW9uQnlUZXJtKGNvbGxlY3Rpb25zLCB0ZXJtKTtcblxuICAgIGlmIChjb2xsZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBjb2xsZWN0aW9uVHlwZSA9IGNvbGxlY3Rpb24uZ2V0VHlwZShsb2NhbENvbnRleHQpO1xuXG4gICAgICB0ZXJtVHlwZSA9IGNvbGxlY3Rpb25UeXBlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1UeXBlO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBsZXQgZXF1YWxpdHlBZGRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5UmVmbGV4aXZlID0gZXF1YWxpdHkuaXNSZWZsZXhpdmUoKTtcblxuICAgIGlmIChlcXVhbGl0eVJlZmxleGl2ZSkge1xuICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0VGVybSA9IGVxdWFsaXR5LmdldExlZnRUZXJtKCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSBlcXVhbGl0eS5nZXRSaWdodFRlcm0oKSxcbiAgICAgICAgICAgIGxlZnRDb2xsZWN0aW9uID0gZmluZENvbGxlY3Rpb25CeVRlcm0odGhpcy5jb2xsZWN0aW9ucywgbGVmdFRlcm0pLFxuICAgICAgICAgICAgcmlnaHRDb2xsZWN0aW9uID0gZmluZENvbGxlY3Rpb25CeVRlcm0odGhpcy5jb2xsZWN0aW9ucywgcmlnaHRUZXJtKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmICgobGVmdENvbGxlY3Rpb24gPT09IG51bGwpICYmIChyaWdodENvbGxlY3Rpb24gPT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBDb2xsZWN0aW9uLmZyb21FcXVhbGl0eShlcXVhbGl0eSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb2xsZWN0aW9uKGNvbGxlY3Rpb24pO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdENvbGxlY3Rpb24gIT09IG51bGwpICYmIChyaWdodENvbGxlY3Rpb24gPT09IG51bGwpKSB7XG4gICAgICAgIGxlZnRDb2xsZWN0aW9uLmFkZFRlcm0ocmlnaHRUZXJtKTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRDb2xsZWN0aW9uID09PSBudWxsKSAmJiAocmlnaHRDb2xsZWN0aW9uICE9PSBudWxsKSkge1xuICAgICAgICByaWdodENvbGxlY3Rpb24uYWRkVGVybShsZWZ0VGVybSk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0Q29sbGVjdGlvbiAhPT0gbnVsbCkgJiYgKHJpZ2h0Q29sbGVjdGlvbiAhPT0gbnVsbCkpIHtcbiAgICAgICAgbGV0IGNvbGxlY3Rpb247XG5cbiAgICAgICAgaWYgKGxlZnRDb2xsZWN0aW9uID09PSByaWdodENvbGxlY3Rpb24pIHtcbiAgICAgICAgICBjb2xsZWN0aW9uID0gbGVmdENvbGxlY3Rpb247ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xsZWN0aW9uID0gQ29sbGVjdGlvbi5tZXJnZShsZWZ0Q29sbGVjdGlvbiwgcmlnaHRDb2xsZWN0aW9uKTtcblxuICAgICAgICAgIHRoaXMucmVtb3ZlQ29sbGVjdGlvbihsZWZ0Q29sbGVjdGlvbik7XG5cbiAgICAgICAgICB0aGlzLnJlbW92ZUNvbGxlY3Rpb24ocmlnaHRDb2xsZWN0aW9uKTtcblxuICAgICAgICAgIHRoaXMuYWRkQ29sbGVjdGlvbihjb2xsZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbGxlY3Rpb24uYWRkVGVybShsZWZ0VGVybSk7XG5cbiAgICAgICAgY29sbGVjdGlvbi5hZGRUZXJtKHJpZ2h0VGVybSk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5QWRkZWQ7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGxldCB2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMudmFyaWFibGVzLnNvbWUoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZFByb29mU3RlcChwcm9vZlN0ZXApIHtcbiAgICB0aGlzLnByb29mU3RlcHMucHVzaChwcm9vZlN0ZXApO1xuICB9XG5cbiAgYWRkQ29sbGVjdGlvbihjb2xsZWN0aW9uKSB7XG4gICAgdGhpcy5jb2xsZWN0aW9ucy5wdXNoKGNvbGxlY3Rpb24pO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQgPSB0aGlzLnByb29mU3RlcHMuc29tZSgocHJvb2ZTdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQgPSBwcm9vZlN0ZXAubWF0Y2goc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHN0YXRlbWVudE1hdGNoZXMgPSBwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIHN0YXRlbWVudE1hdGNoZXMgPSB0aGlzLmNvbnRleHQubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICByZW1vdmVDb2xsZWN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY29sbGVjdGlvbnMuaW5kZXhPZihjb2xsZWN0aW9uKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5jb2xsZWN0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047XG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBjb2xsZWN0aW9ucyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBjb2xsZWN0aW9ucyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2NhbENvbnRleHQobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBjb2xsZWN0aW9ucyA9IFtdO1xuXG4gICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGNvbGxlY3Rpb25zKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXM7XG5cbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLm1hcCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgY29sbGVjdGlvbnMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgY29sbGVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKExvY2FsQ29udGV4dC5wcm90b3R5cGUsIGNvbnRleHRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhbENvbnRleHQ7XG4iXSwibmFtZXMiOlsiTG9jYWxDb250ZXh0IiwiY29udGV4dCIsInZhcmlhYmxlcyIsInByb29mU3RlcHMiLCJjb2xsZWN0aW9ucyIsImdldENvbnRleHQiLCJnZXRWYXJpYWJsZXMiLCJnZXRQcm9vZlN0ZXBzIiwiZ2V0Q29sbGVjdGlvbnMiLCJjb2xsZWN0aW9uc0EiLCJjb2xsZWN0aW9uc0IiLCJsb2NhbENvbnRleHQiLCJtZXJnZUNvbGxlY3Rpb25zIiwiZ2V0TGFzdFByb29mU3RlcCIsImxhc3RQcm9vZlN0ZXAiLCJwcm9vZlN0ZXBzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdCIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRUZXJtVHlwZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImNvbGxlY3Rpb24iLCJmaW5kQ29sbGVjdGlvbkJ5VGVybSIsImNvbGxlY3Rpb25UeXBlIiwiZ2V0VHlwZSIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUFkZGVkIiwiZXF1YWxpdHlSZWZsZXhpdmUiLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRSaWdodFRlcm0iLCJsZWZ0Q29sbGVjdGlvbiIsInJpZ2h0Q29sbGVjdGlvbiIsIkNvbGxlY3Rpb24iLCJmcm9tRXF1YWxpdHkiLCJhZGRDb2xsZWN0aW9uIiwiYWRkVGVybSIsIm1lcmdlIiwicmVtb3ZlQ29sbGVjdGlvbiIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUFkZGVkIiwibm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJzb21lIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJwdXNoIiwiYWRkUHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsInByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnQiLCJtYXRjaCIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImZpbmQiLCJtYXRjaGVzIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsIm1hcCIsInZhcmlhYmxlSlNPTiIsImpzb24iLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZyb21Mb2NhbENvbnRleHQiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwidmFyaWFibGVzSlNPTiIsIlZhcmlhYmxlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiY29udGV4dE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeVJBOzs7ZUFBQTs7OytEQXZScUI7aUVBQ0U7OERBQ0c7cUJBRUw7MkJBQ2tDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFBLEFBQU1BLDZCQUFELEFBQUw7YUFBTUEsYUFDUUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsV0FBVztnQ0FEbkRKO1FBRUYsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2tCQUxqQko7O1lBUUpLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJSixZQUFZLElBQUksQ0FBQ0QsT0FBTyxDQUFDSyxZQUFZO2dCQUV6Q0osWUFBWSxBQUNWLHFCQUFHLElBQUksQ0FBQ0EsU0FBUyxTQUNqQixxQkFBR0E7Z0JBR0wsT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJSixhQUFhLElBQUksQ0FBQ0YsT0FBTyxDQUFDTSxhQUFhO2dCQUUzQ0osYUFBYSxBQUNYLHFCQUFHLElBQUksQ0FBQ0EsVUFBVSxTQUNsQixxQkFBR0E7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