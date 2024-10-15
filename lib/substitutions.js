"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Substitutions;
    }
});
var _necessary = require("necessary");
var _constants = require("./constants");
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
var find = _necessary.arrayUtilities.find, first = _necessary.arrayUtilities.first, prune = _necessary.arrayUtilities.prune, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress;
var Substitutions = /*#__PURE__*/ function() {
    function Substitutions(array, savedArray) {
        _class_call_check(this, Substitutions);
        this.array = array;
        this.savedArray = savedArray;
    }
    _create_class(Substitutions, [
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "getSavedArray",
            value: function getSavedArray() {
                return this.savedArray;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "getFirstSubstitution",
            value: function getFirstSubstitution() {
                var firstSubstitution = null;
                var length = this.getLength();
                if (length > 0) {
                    firstSubstitution = first(this.array);
                }
                return firstSubstitution;
            }
        },
        {
            key: "getMetavariableNodes",
            value: function getMetavariableNodes() {
                var metavariableNodes = [];
                this.forEachSubstitution(function(substitution) {
                    var metavariableNode = substitution.getMetavariableNode();
                    if (metavariableNode !== null) {
                        metavariableNodes.push(metavariableNode);
                    }
                });
                compress(metavariableNodes, function(metavariableNodeA, metavariableNodeB) {
                    var metavariableNodeAMatchesMetavariableNodeB = metavariableNodeA.match(metavariableNodeB);
                    if (metavariableNodeAMatchesMetavariableNodeB) {
                        return true;
                    }
                });
                return metavariableNodes;
            }
        },
        {
            key: "findSubstitution",
            value: function findSubstitution(callback) {
                return this.array.find(callback) || null;
            } ///
        },
        {
            key: "someSubstitution",
            value: function someSubstitution(callback) {
                return this.array.some(callback);
            }
        },
        {
            key: "everySubstitution",
            value: function everySubstitution(callback) {
                return this.array.every(callback);
            }
        },
        {
            key: "forEachSubstitution",
            value: function forEachSubstitution(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "findSubstitutions",
            value: function findSubstitutions(callback) {
                var array = find(this.array, callback), substitutions = Substitutions.fromArray(array);
                return substitutions;
            }
        },
        {
            key: "filterSubstitution",
            value: function filterSubstitution(callback) {
                var array = this.array.filter(callback), substitutions = Substitutions.fromArray(array);
                return substitutions;
            }
        },
        {
            key: "findSimpleSubstitution",
            value: function findSimpleSubstitution() {
                var simpleSubstitution = this.findSubstitution(function(substitution) {
                    var substitutionSimple = substitution.isSimple();
                    if (substitutionSimple) {
                        return true;
                    }
                });
                return simpleSubstitution;
            }
        },
        {
            key: "findSubstitutionByVariableNode",
            value: function findSubstitutionByVariableNode(variableNode) {
                var substitution = this.findSubstitution(function(substitution) {
                    var variableNodeMatches = substitution.matchVariableNode(variableNode);
                    if (variableNodeMatches) {
                        return true;
                    }
                });
                return substitution;
            }
        },
        {
            key: "findSubstitutionByMetavariableNode",
            value: function findSubstitutionByMetavariableNode(metavariableNode) {
                var substitution = this.findSubstitution(function(substitution) {
                    var metavariableNodeMatches = substitution.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                });
                return substitution;
            }
        },
        {
            key: "findSubstitutionsByMetavariableNode",
            value: function findSubstitutionsByMetavariableNode(metavariableNode) {
                var substitutions = this.findSubstitutions(function(substitution) {
                    var metavariableNodeMatches = substitution.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                });
                return substitutions;
            }
        },
        {
            key: "findSimpleSubstitutionByMetavariableNode",
            value: function findSimpleSubstitutionByMetavariableNode(metavariableNode) {
                var substitutions = this.findSubstitutionsByMetavariableNode(metavariableNode), simpleSubstitutions = substitutions.filterSubstitution(function(substitution) {
                    var substitutionSimple = substitution.isSimple();
                    if (substitutionSimple) {
                        return true;
                    }
                }), firstSimpleSubstitution = simpleSubstitutions.getFirstSubstitution(), simpleSubstitution = firstSimpleSubstitution; ///
                return simpleSubstitution;
            }
        },
        {
            key: "findComplexSubstitutionsByMetavariableNode",
            value: function findComplexSubstitutionsByMetavariableNode(metavariableNode) {
                var substitutions = this.findSubstitutionsByMetavariableNode(metavariableNode), complexSubstitutions = substitutions.filterSubstitution(function(substitution) {
                    var substitutionComplex = substitution.isComplex();
                    if (substitutionComplex) {
                        return true;
                    }
                });
                return complexSubstitutions;
            }
        },
        {
            key: "findSubstitutionByMetavariableNodeAndSubstitutionNode",
            value: function findSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
                var substitutions = this.findSubstitutions(function(substitution) {
                    var metavariableNodeAndSubstitutionNodeMatch = substitution.matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode);
                    if (metavariableNodeAndSubstitutionNodeMatch) {
                        return true;
                    }
                }), firstSubstitution = substitutions.getFirstSubstitution(), substitution = firstSubstitution; ///
                return substitution;
            }
        },
        {
            key: "isSubstitutionPresentByMetavariableNodeAndSubstitutionNode",
            value: function isSubstitutionPresentByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
                var substitution = this.findSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode), substitutionPresent = substitution !== null;
                return substitutionPresent;
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution, localContext) {
                this.array.push(substitution);
                var substitutionString = substitution.getString();
                localContext.trace("Added the ".concat(substitutionString, " substitution."));
            }
        },
        {
            key: "removeSubstitution",
            value: function removeSubstitution(substitution, localContext) {
                var substitutionA = substitution; ///
                prune(this.array, function(substitution) {
                    var substitutionB = substitution; ///
                    if (substitutionA !== substitutionB) {
                        return true;
                    }
                });
                var substitutionNode = substitution.getNode(), substitutionString = substitution.getString();
                localContext.trace("Removed the ".concat(substitutionString, " substitution."), substitutionNode);
            }
        },
        {
            key: "unifyWithEquivalences",
            value: function unifyWithEquivalences(equivalences, localContext) {
                var _this = this;
                var unifiedWithEquivalences = this.everySubstitution(function(substitution) {
                    var substitutions = _this, substitutionUnifiedWithEquivalence = substitution.unifyWithEquivalences(equivalences, substitutions, localContext);
                    if (substitutionUnifiedWithEquivalence) {
                        return true;
                    }
                });
                return unifiedWithEquivalences;
            }
        },
        {
            key: "resolve",
            value: function resolve(localContext) {
                var _this = this;
                var metavariableNodes = this.getMetavariableNodes(), resolved = metavariableNodes.every(function(metavariableNode) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariableNode(metavariableNode), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
                        var substitution = complexSubstitution, substitutions = _this, substitutionResolved = substitution.resolve(substitutions, localContext);
                        if (substitutionResolved) {
                            return true;
                        }
                    });
                    if (complexSubstitutionsResolved) {
                        return true;
                    }
                });
                return resolved;
            }
        },
        {
            key: "snapshot",
            value: function snapshot() {
                this.savedArray = _to_consumable_array(this.array);
            }
        },
        {
            key: "rollback",
            value: function rollback(localContext) {
                var _this = this;
                var array = _to_consumable_array(this.array);
                rightDifference(this.savedArray, array);
                array.forEach(function(substitution) {
                    _this.removeSubstitution(substitution, localContext);
                });
                this.array = _to_consumable_array(this.savedArray);
                this.savedArray = null;
            }
        },
        {
            key: "continue",
            value: function _continue() {
                this.savedArray = null;
            }
        },
        {
            key: "getString",
            value: function getString(localContextA, localContextB) {
                var string = this.array.reduce(function(string, substitution) {
                    var substitutionString = substitution.getString(localContextA, localContextB);
                    string = string === null ? substitutionString : "".concat(string, ", ").concat(substitutionString);
                    return string;
                }, _constants.EMPTY_STRING);
                if (string !== _constants.EMPTY_STRING) {
                    string = " ".concat(string);
                }
                return string;
            }
        }
    ], [
        {
            key: "fromArray",
            value: function fromArray(array) {
                var savedArray = [], substitutions = new Substitutions(array, savedArray);
                return substitutions;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], savedArray = null, substitutions = new Substitutions(array, savedArray);
                return substitutions;
            }
        }
    ]);
    return Substitutions;
}();
function rightDifference(arrayA, arrayB) {
    filter(arrayB, function(elementB) {
        var arrayAIncludesElementB = arrayA.includes(elementB);
        if (!arrayAIncludesElementB) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmluZCwgZmlyc3QsIHBydW5lLCBmaWx0ZXIsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5LCBzYXZlZEFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IHNhdmVkQXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldFNhdmVkQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoOyB9XG5cbiAgZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKSB7XG4gICAgbGV0IGZpcnN0U3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RTdWJzdGl0dXRpb24gPSBmaXJzdCh0aGlzLmFycmF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RTdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlcygpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlcyA9IFtdO1xuXG4gICAgdGhpcy5mb3JFYWNoU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBtZXRhdmFyaWFibGVOb2Rlcy5wdXNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29tcHJlc3MobWV0YXZhcmlhYmxlTm9kZXMsIChtZXRhdmFyaWFibGVOb2RlQSwgbWV0YXZhcmlhYmxlTm9kZUIpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVCID0gbWV0YXZhcmlhYmxlTm9kZUEubWF0Y2gobWV0YXZhcmlhYmxlTm9kZUIpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZUFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZXM7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmZpbmQoY2FsbGJhY2spIHx8IG51bGw7IH0gIC8vL1xuXG4gIHNvbWVTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeVN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBmaW5kU3Vic3RpdHV0aW9ucyhjYWxsYmFjaykge1xuICAgIGNvbnN0IGFycmF5ID0gZmluZCh0aGlzLmFycmF5LCBjYWxsYmFjayksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbUFycmF5KGFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmlsdGVyU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXkgPSB0aGlzLmFycmF5LmZpbHRlcihjYWxsYmFjayksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbUFycmF5KGFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFNpbXBsZVN1YnN0aXR1dGlvbigpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU2ltcGxlID0gc3Vic3RpdHV0aW9uLmlzU2ltcGxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25TaW1wbGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zLmZpbHRlclN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25TaW1wbGUgPSBzdWJzdGl0dXRpb24uaXNTaW1wbGUoKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblNpbXBsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaXJzdFNpbXBsZVN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBmaXJzdFNpbXBsZVN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnMuZmlsdGVyU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBsZXggPSBzdWJzdGl0dXRpb24uaXNDb21wbGV4KCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2ggPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlyc3RTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmdldEZpcnN0U3Vic3RpdHV0aW9uKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gZmlyc3RTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgQWRkZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gIH1cblxuICByZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHBydW5lKHRoaXMuYXJyYXksIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQSAhPT0gc3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgUmVtb3ZlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gLCBzdWJzdGl0dXRpb25Ob2RlKTtcbiAgfVxuXG4gIHVuaWZ5V2l0aEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzID0gdGhpcy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlID0gc3Vic3RpdHV0aW9uLnVuaWZ5V2l0aEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgcmVzb2x2ZShsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZXMoKSxcbiAgICAgICAgICByZXNvbHZlZCA9IG1ldGF2YXJpYWJsZU5vZGVzLmV2ZXJ5KChtZXRhdmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IGNvbXBsZXhTdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblJlc29sdmVkID0gc3Vic3RpdHV0aW9uLnJlc29sdmUoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgc25hcHNob3QoKSB7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gW1xuICAgICAgLi4udGhpcy5hcnJheVxuICAgIF07XG4gIH1cblxuICByb2xsYmFjayhsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuYXJyYXlcbiAgICBdO1xuXG4gICAgcmlnaHREaWZmZXJlbmNlKHRoaXMuc2F2ZWRBcnJheSwgYXJyYXkpO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFycmF5ID0gW1xuICAgICAgLi4udGhpcy5zYXZlZEFycmF5XG4gICAgXTtcblxuICAgIHRoaXMuc2F2ZWRBcnJheSA9IG51bGw7XG4gIH1cblxuICBjb250aW51ZSgpIHtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3RyaW5nID0gdGhpcy5hcnJheS5yZWR1Y2UoKHN0cmluZywgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgYCR7c3RyaW5nfSwgJHtzdWJzdGl0dXRpb25TdHJpbmd9YDtcblxuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgaWYgKHN0cmluZyAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICBzdHJpbmcgPSBgICR7c3RyaW5nfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpIHtcbiAgICBjb25zdCBzYXZlZEFycmF5ID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG5ldyBTdWJzdGl0dXRpb25zKGFycmF5LCBzYXZlZEFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgc2F2ZWRBcnJheSA9IG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG5ldyBTdWJzdGl0dXRpb25zKGFycmF5LCBzYXZlZEFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJpZ2h0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICBjb25zdCBhcnJheUFJbmNsdWRlc0VsZW1lbnRCID0gYXJyYXlBLmluY2x1ZGVzKGVsZW1lbnRCKTtcblxuICAgIGlmICghYXJyYXlBSW5jbHVkZXNFbGVtZW50Qikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb25zIiwiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJwcnVuZSIsImZpbHRlciIsImNvbXByZXNzIiwiYXJyYXkiLCJzYXZlZEFycmF5IiwiZ2V0QXJyYXkiLCJnZXRTYXZlZEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0Rmlyc3RTdWJzdGl0dXRpb24iLCJmaXJzdFN1YnN0aXR1dGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGVzIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJmb3JFYWNoU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJwdXNoIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVOb2RlQiIsIm1ldGF2YXJpYWJsZU5vZGVBTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVCIiwibWF0Y2giLCJmaW5kU3Vic3RpdHV0aW9uIiwiY2FsbGJhY2siLCJzb21lU3Vic3RpdHV0aW9uIiwic29tZSIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwiZXZlcnkiLCJmb3JFYWNoIiwiZmluZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiZnJvbUFycmF5IiwiZmlsdGVyU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbiIsInNpbXBsZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblNpbXBsZSIsImlzU2ltcGxlIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwic2ltcGxlU3Vic3RpdHV0aW9ucyIsImZpcnN0U2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlIiwiY29tcGxleFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25Db21wbGV4IiwiaXNDb21wbGV4IiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImFkZFN1YnN0aXR1dGlvbiIsImxvY2FsQ29udGV4dCIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwicmVtb3ZlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvbkIiLCJnZXROb2RlIiwidW5pZnlXaXRoRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZXMiLCJzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwicmVzb2x2ZSIsInJlc29sdmVkIiwiY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25SZXNvbHZlZCIsInNuYXBzaG90Iiwicm9sbGJhY2siLCJyaWdodERpZmZlcmVuY2UiLCJjb250aW51ZSIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RyaW5nIiwicmVkdWNlIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vdGhpbmciLCJhcnJheUEiLCJhcnJheUIiLCJlbGVtZW50QiIsImFycmF5QUluY2x1ZGVzRWxlbWVudEIiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7eUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFRQyxPQUF5Q0MseUJBQWMsQ0FBdkRELE1BQU1FLFFBQW1DRCx5QkFBYyxDQUFqREMsT0FBT0MsUUFBNEJGLHlCQUFjLENBQTFDRSxPQUFPQyxTQUFxQkgs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