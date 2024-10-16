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
            key: "getMetavariableNames",
            value: function getMetavariableNames() {
                var metavariableNames = [];
                this.forEachSubstitution(function(substitution) {
                    var metavariableName = substitution.getMetavariableName();
                    if (metavariableName !== null) {
                        metavariableNames.push(metavariableName);
                    }
                });
                compress(metavariableNames, function(metavariableNameA, metavariableNameB) {
                    if (metavariableNameA === metavariableNameB) {
                        return true;
                    }
                });
                return metavariableNames;
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
            key: "findSubstitutionByVariableName",
            value: function findSubstitutionByVariableName(variableName) {
                var substitution = this.findSubstitution(function(substitution) {
                    var variableNameMatches = substitution.matchVariableName(variableName);
                    if (variableNameMatches) {
                        return true;
                    }
                });
                return substitution;
            }
        },
        {
            key: "findSubstitutionByMetavariableName",
            value: function findSubstitutionByMetavariableName(metavariableName) {
                var substitution = this.findSubstitution(function(substitution) {
                    var metavariableNameMatches = substitution.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                });
                return substitution;
            }
        },
        {
            key: "findSubstitutionsByMetavariableName",
            value: function findSubstitutionsByMetavariableName(metavariableName) {
                var substitutions = this.findSubstitutions(function(substitution) {
                    var metavariableNameMatches = substitution.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                });
                return substitutions;
            }
        },
        {
            key: "findSimpleSubstitutionByMetavariableName",
            value: function findSimpleSubstitutionByMetavariableName(metavariableName) {
                var substitutions = this.findSubstitutionsByMetavariableName(metavariableName), simpleSubstitutions = substitutions.filterSubstitution(function(substitution) {
                    var substitutionSimple = substitution.isSimple();
                    if (substitutionSimple) {
                        return true;
                    }
                }), firstSimpleSubstitution = simpleSubstitutions.getFirstSubstitution(), simpleSubstitution = firstSimpleSubstitution; ///
                return simpleSubstitution;
            }
        },
        {
            key: "findComplexSubstitutionsByMetavariableName",
            value: function findComplexSubstitutionsByMetavariableName(metavariableName) {
                var substitutions = this.findSubstitutionsByMetavariableName(metavariableName), complexSubstitutions = substitutions.filterSubstitution(function(substitution) {
                    var substitutionComplex = substitution.isComplex();
                    if (substitutionComplex) {
                        return true;
                    }
                });
                return complexSubstitutions;
            }
        },
        {
            key: "findSubstitutionByMetavariableNameAndSubstitutionNode",
            value: function findSubstitutionByMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode) {
                var substitutions = this.findSubstitutions(function(substitution) {
                    var metavariableNameAndSubstitutionNodeMatch = substitution.matchMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode);
                    if (metavariableNameAndSubstitutionNodeMatch) {
                        return true;
                    }
                }), firstSubstitution = substitutions.getFirstSubstitution(), substitution = firstSubstitution; ///
                return substitution;
            }
        },
        {
            key: "isSimpleSubstitutionPresentByMetavariableName",
            value: function isSimpleSubstitutionPresentByMetavariableName(metavariableName) {
                var simpleSubstitution = this.findSimpleSubstitutionByMetavariableName(metavariableName), simpleSubstitutionPresent = simpleSubstitution !== null;
                return simpleSubstitutionPresent;
            }
        },
        {
            key: "isSubstitutionPresentByMetavariableNameAndSubstitutionNode",
            value: function isSubstitutionPresentByMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode) {
                var substitution = this.findSubstitutionByMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode), substitutionPresent = substitution !== null;
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
            value: function resolve(localContextA, localContextB) {
                var _this = this;
                var metavariableNames = this.getMetavariableNames(), resolved = metavariableNames.every(function(metavariableName) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariableName(metavariableName), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
                        var substitution = complexSubstitution, substitutions = _this, substitutionResolved = substitution.resolve(substitutions, localContextA, localContextB);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmluZCwgZmlyc3QsIHBydW5lLCBmaWx0ZXIsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5LCBzYXZlZEFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IHNhdmVkQXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldFNhdmVkQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoOyB9XG5cbiAgZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKSB7XG4gICAgbGV0IGZpcnN0U3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RTdWJzdGl0dXRpb24gPSBmaXJzdCh0aGlzLmFycmF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RTdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lcygpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lcyA9IFtdO1xuXG4gICAgdGhpcy5mb3JFYWNoU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBtZXRhdmFyaWFibGVOYW1lcy5wdXNoKG1ldGF2YXJpYWJsZU5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29tcHJlc3MobWV0YXZhcmlhYmxlTmFtZXMsIChtZXRhdmFyaWFibGVOYW1lQSwgbWV0YXZhcmlhYmxlTmFtZUIpID0+IHtcbiAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZXM7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmZpbmQoY2FsbGJhY2spIHx8IG51bGw7IH0gIC8vL1xuXG4gIHNvbWVTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeVN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBmaW5kU3Vic3RpdHV0aW9ucyhjYWxsYmFjaykge1xuICAgIGNvbnN0IGFycmF5ID0gZmluZCh0aGlzLmFycmF5LCBjYWxsYmFjayksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbUFycmF5KGFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmlsdGVyU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXkgPSB0aGlzLmFycmF5LmZpbHRlcihjYWxsYmFjayksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbUFycmF5KGFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFNpbXBsZVN1YnN0aXR1dGlvbigpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU2ltcGxlID0gc3Vic3RpdHV0aW9uLmlzU2ltcGxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25TaW1wbGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5hbWVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmICh2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zLmZpbHRlclN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25TaW1wbGUgPSBzdWJzdGl0dXRpb24uaXNTaW1wbGUoKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblNpbXBsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaXJzdFNpbXBsZVN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbnMuZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBmaXJzdFNpbXBsZVN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnMuZmlsdGVyU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBsZXggPSBzdWJzdGl0dXRpb24uaXNDb21wbGV4KCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2ggPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlyc3RTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmdldEZpcnN0U3Vic3RpdHV0aW9uKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gZmlyc3RTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCkge1xuICAgIHRoaXMuYXJyYXkucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgfVxuXG4gIHJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgcHJ1bmUodGhpcy5hcnJheSwgKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25BICE9PSBzdWJzdGl0dXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBSZW1vdmVkIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmAsIHN1YnN0aXR1dGlvbk5vZGUpO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgdW5pZmllZFdpdGhFcXVpdmFsZW5jZXMgPSB0aGlzLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSBzdWJzdGl0dXRpb24udW5pZnlXaXRoRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZXM7XG4gIH1cblxuICByZXNvbHZlKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZXMoKSxcbiAgICAgICAgICByZXNvbHZlZCA9IG1ldGF2YXJpYWJsZU5hbWVzLmV2ZXJ5KChtZXRhdmFyaWFibGVOYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IGNvbXBsZXhTdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblJlc29sdmVkID0gc3Vic3RpdHV0aW9uLnJlc29sdmUoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIHNuYXBzaG90KCkge1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuYXJyYXlcbiAgICBdO1xuICB9XG5cbiAgcm9sbGJhY2sobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcblxuICAgIHJpZ2h0RGlmZmVyZW5jZSh0aGlzLnNhdmVkQXJyYXksIGFycmF5KTtcblxuICAgIGFycmF5LmZvckVhY2goKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuc2F2ZWRBcnJheVxuICAgIF07XG5cbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgY29udGludWUoKSB7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIGdldFN0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0cmluZyA9IHRoaXMuYXJyYXkucmVkdWNlKChzdHJpbmcsIHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgc3RyaW5nID0gKHN0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgIGAke3N0cmluZ30sICR7c3Vic3RpdHV0aW9uU3RyaW5nfWA7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIGlmIChzdHJpbmcgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgc3RyaW5nID0gYCAke3N0cmluZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KSB7XG4gICAgY29uc3Qgc2F2ZWRBcnJheSA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHNhdmVkQXJyYXkgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxufVxuXG5mdW5jdGlvbiByaWdodERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgY29uc3QgYXJyYXlBSW5jbHVkZXNFbGVtZW50QiA9IGFycmF5QS5pbmNsdWRlcyhlbGVtZW50Qik7XG5cbiAgICBpZiAoIWFycmF5QUluY2x1ZGVzRWxlbWVudEIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9ucyIsImZpbmQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwicHJ1bmUiLCJmaWx0ZXIiLCJjb21wcmVzcyIsImFycmF5Iiwic2F2ZWRBcnJheSIsImdldEFycmF5IiwiZ2V0U2F2ZWRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldEZpcnN0U3Vic3RpdHV0aW9uIiwiZmlyc3RTdWJzdGl0dXRpb24iLCJnZXRNZXRhdmFyaWFibGVOYW1lcyIsIm1ldGF2YXJpYWJsZU5hbWVzIiwiZm9yRWFjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwicHVzaCIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUIiLCJmaW5kU3Vic3RpdHV0aW9uIiwiY2FsbGJhY2siLCJzb21lU3Vic3RpdHV0aW9uIiwic29tZSIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwiZXZlcnkiLCJmb3JFYWNoIiwiZmluZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiZnJvbUFycmF5IiwiZmlsdGVyU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbiIsInNpbXBsZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblNpbXBsZSIsImlzU2ltcGxlIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOYW1lIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwiZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwic2ltcGxlU3Vic3RpdHV0aW9ucyIsImZpcnN0U2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lIiwiY29tcGxleFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25Db21wbGV4IiwiaXNDb21wbGV4IiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaCIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJhZGRTdWJzdGl0dXRpb24iLCJsb2NhbENvbnRleHQiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInJlbW92ZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25CIiwiZ2V0Tm9kZSIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzIiwic3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsInJlc29sdmUiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInJlc29sdmVkIiwiY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25SZXNvbHZlZCIsInNuYXBzaG90Iiwicm9sbGJhY2siLCJyaWdodERpZmZlcmVuY2UiLCJjb250aW51ZSIsInN0cmluZyIsInJlZHVjZSIsIkVNUFRZX1NUUklORyIsImZyb21Ob3RoaW5nIiwiYXJyYXlBIiwiYXJyYXlCIiwiZWxlbWVudEIiLCJhcnJheUFJbmNsdWRlc0VsZW1lbnRCIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VO3lCQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBUUMsT0FBeUNDLHlCQUFjLENBQXZERCxNQUFNRSxRQUFtQ0QseUJBQWMsQ0FBakRDLE9BQU9DLFFBQTRCRix5QkFBYyxDQUExQ0UsT0FBT0MsU0FBcUJILHlCQUFjLENBQW5DRyxRQUFRQyxXQUFhSix5QkFBYyxDQUEzQkk7QUFFckIsSUFBQSxBQUFNTiw4QkFBTjthQUFNQSxjQUNQTyxLQUFLLEVBQUVDLFVBQVU7Z0NBRFZSO1FBRWpCLElBQUksQ0FBQ08sS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSERSOztZQU1uQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDSixLQUFLLENBQUNLLE1BQU07WUFBRTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsb0JBQW9CO2dCQUV4QixJQUFNRixTQUFTLElBQUksQ0FBQ0QsU0FBUztnQkFFN0IsSUFBSUMsU0FBUyxHQUFHO29CQUNkRSxvQkFBb0JYLE1BQU0sSUFBSSxDQUFDSSxLQUFLO2dCQUN0QztnQkFFQSxPQUFPTztZ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