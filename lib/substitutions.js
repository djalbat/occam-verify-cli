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
var find = _necessary.arrayUtilities.find, first = _necessary.arrayUtilities.first, clear = _necessary.arrayUtilities.clear, prune = _necessary.arrayUtilities.prune, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress, correlate = _necessary.arrayUtilities.correlate;
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
            key: "getMetavariables",
            value: function getMetavariables() {
                var metavariables = [];
                this.forEachSubstitution(function(substitution) {
                    var metavariable = substitution.getMetavariable();
                    if (metavariable !== null) {
                        metavariables.push(metavariable);
                    }
                });
                compress(metavariables, function(metavariableA, metavariableB) {
                    var metavariableAEqualToMetavariableB = metavariableB.isEqualTo(metavariableA);
                    if (metavariableAEqualToMetavariableB) {
                        return true;
                    }
                });
                return metavariables;
            }
        },
        {
            key: "mapSubstitution",
            value: function mapSubstitution(callback) {
                return this.array.map(callback);
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
            key: "findSubstitutionByVariable",
            value: function findSubstitutionByVariable(variable) {
                var substitution = this.findSubstitution(function(substitution) {
                    var substitutionVariable = substitution.getVariable();
                    if (substitutionVariable !== null) {
                        var substitutionVariableEqualToVariable = substitutionVariable.isEqualTo(variable);
                        if (substitutionVariableEqualToVariable) {
                            return true;
                        }
                    }
                });
                return substitution;
            }
        },
        {
            key: "findSubstitutionsByMetavariable",
            value: function findSubstitutionsByMetavariable(metavariable) {
                var substitutions = this.findSubstitutions(function(substitution) {
                    var substitutionMetavariableEqualToMetavariable = substitution.isMetavariableEqualTo(metavariable);
                    if (substitutionMetavariableEqualToMetavariable) {
                        return true;
                    }
                });
                return substitutions;
            }
        },
        {
            key: "findSimpleSubstitutionByMetavariable",
            value: function findSimpleSubstitutionByMetavariable(metavariable) {
                var simpleSubstitution = this.findSubstitution(function(substitution) {
                    var substitutionSimple = substitution.isSimple();
                    if (substitutionSimple) {
                        var simpleSubstitution = substitution, simpleSubstitutionMetavariableEqualToMetavariable = simpleSubstitution.isMetavariableEqualTo(metavariable);
                        if (simpleSubstitutionMetavariableEqualToMetavariable) {
                            return true;
                        }
                    }
                });
                return simpleSubstitution;
            }
        },
        {
            key: "findComplexSubstitutionsByMetavariable",
            value: function findComplexSubstitutionsByMetavariable(metavariable) {
                var complexSubstitutions = this.findSubstitutions(function(substitution) {
                    var substitutionComplex = substitution.isComplex();
                    if (substitutionComplex) {
                        var complexSubstitution = substitution, complexSubstitutionMetavariableEqualToMetavariable = complexSubstitution.isMetavariableEqualTo(metavariable);
                        if (complexSubstitutionMetavariableEqualToMetavariable) {
                            return true;
                        }
                    }
                });
                return complexSubstitutions;
            }
        },
        {
            key: "findSubstitutionByMetavariableAndSubstitution",
            value: function findSubstitutionByMetavariableAndSubstitution(metavariable, substitution) {
                var substitutionA = substitution; ///
                substitution = this.findSubstitution(function(substitution) {
                    var substitutionMetavariableEqualToMetavariable = substitution.isMetavariableEqualTo(metavariable);
                    if (substitutionMetavariableEqualToMetavariable) {
                        var substitutionB = substitution, substitutionBSubstitutionEqualToSubstitutionA = substitutionB.isSubstitutionEqualTo(substitutionA);
                        if (substitutionBSubstitutionEqualToSubstitutionA) {
                            return true;
                        }
                    }
                });
                return substitution;
            }
        },
        {
            key: "isSubstitutionPresentByVariable",
            value: function isSubstitutionPresentByVariable(variable) {
                var substitution = this.findSubstitutionByVariable(variable), substitutionPresent = substitution !== null;
                return substitutionPresent;
            }
        },
        {
            key: "isSimpleSubstitutionPresentByMetavariable",
            value: function isSimpleSubstitutionPresentByMetavariable(metavariable) {
                var simpleSubstitution = this.findSimpleSubstitutionByMetavariable(metavariable), simpleSubstitutionPresent = simpleSubstitution !== null;
                return simpleSubstitutionPresent;
            }
        },
        {
            key: "isSubstitutionPresentByMetavariableAndSubstitution",
            value: function isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution) {
                substitution = this.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///
                var substitutionPresent = substitution !== null;
                return substitutionPresent;
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution, specificContext) {
                this.array.push(substitution);
                var substitutionString = substitution.getString();
                specificContext.trace("Added the ".concat(substitutionString, " substitution."));
            }
        },
        {
            key: "removeSubstitution",
            value: function removeSubstitution(substitution, specificContext) {
                var substitutionA = substitution; ///
                prune(this.array, function(substitution) {
                    var substitutionB = substitution; ///
                    if (substitutionA !== substitutionB) {
                        return true;
                    }
                });
                var substitutionString = substitution.getString();
                specificContext.trace("Removed the ".concat(substitutionString, " substitution."));
            }
        },
        {
            key: "correlateSubstitutions",
            value: function correlateSubstitutions(substitutions) {
                var array = substitutions.getArray(), arrayA = array, arrayB = this.array, correlates = correlate(arrayA, arrayB, function(substitutionA, substitutionB) {
                    var substitutionAIsEQualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
                    if (substitutionAIsEQualToSubstitutionB) {
                        return true;
                    }
                });
                return correlates;
            }
        },
        {
            key: "removeTrivialSubstitutions",
            value: function removeTrivialSubstitutions() {
                filter(this.array, function(substitution) {
                    var trivial = substitution.isTrivial();
                    if (!trivial) {
                        return true;
                    }
                });
            }
        },
        {
            key: "clear",
            value: function clear1() {
                clear(this.array);
                this.savedArray = null;
            }
        },
        {
            key: "resolve",
            value: function resolve(generalContext, specificContext) {
                var _this = this;
                var metavariables = this.getMetavariables();
                metavariables.forEach(function(metavariable) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariable(metavariable), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
                        var resolved;
                        var substitutions = _this, substitution = complexSubstitution; ///
                        resolved = substitution.isResolved();
                        if (!resolved) {
                            substitution.resolve(substitutions, generalContext, specificContext);
                        }
                    });
                    if (complexSubstitutionsResolved) {
                        return true;
                    }
                });
            }
        },
        {
            key: "areResolved",
            value: function areResolved() {
                var _this = this;
                var metavariables = this.getMetavariables(), resolved = metavariables.every(function(metavariable) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariable(metavariable), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
                        var complexSubstitutionResolved = complexSubstitution.isResolved();
                        if (complexSubstitutionResolved) {
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
            value: function rollback(specificContext) {
                var _this = this;
                var array = _to_consumable_array(this.array);
                leftDifference(array, this.savedArray);
                array.forEach(function(substitution) {
                    _this.removeSubstitution(substitution, specificContext);
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
            key: "asString",
            value: function asString() {
                var string;
                var length = this.getLength();
                if (length === 0) {
                    string = _constants.EMPTY_STRING;
                } else {
                    var substitutionsString = this.array.reduce(function(substitutionsString, substitution) {
                        var substitutionString = substitution.getString();
                        substitutionsString = substitutionsString === null ? substitutionString : "".concat(substitutionsString, ", ").concat(substitutionString);
                        return substitutionsString;
                    }, null);
                    string = substitutionsString; ///
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
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmluZCwgZmlyc3QsIGNsZWFyLCBwcnVuZSwgZmlsdGVyLCBjb21wcmVzcywgY29ycmVsYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5LCBzYXZlZEFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IHNhdmVkQXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldFNhdmVkQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoOyB9XG5cbiAgZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKSB7XG4gICAgbGV0IGZpcnN0U3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RTdWJzdGl0dXRpb24gPSBmaXJzdCh0aGlzLmFycmF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RTdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSBbXTtcblxuICAgIHRoaXMuZm9yRWFjaFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgbWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb21wcmVzcyhtZXRhdmFyaWFibGVzLCAobWV0YXZhcmlhYmxlQSwgbWV0YXZhcmlhYmxlQikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlQUVxdWFsVG9NZXRhdmFyaWFibGVCID0gbWV0YXZhcmlhYmxlQi5pc0VxdWFsVG8obWV0YXZhcmlhYmxlQSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVBRXF1YWxUb01ldGF2YXJpYWJsZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIG1hcFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyB9ICAvLy9cblxuICBzb21lU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbnMoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheSA9IGZpbmQodGhpcy5hcnJheSwgY2FsbGJhY2spLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21BcnJheShhcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25WYXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSA9IHN1YnN0aXR1dGlvblZhcmlhYmxlLmlzRXF1YWxUbyh2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uaXNNZXRhdmFyaWFibGVFcXVhbFRvKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblNpbXBsZSA9IHN1YnN0aXR1dGlvbi5pc1NpbXBsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uU2ltcGxlKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gc2ltcGxlU3Vic3RpdHV0aW9uLmlzTWV0YXZhcmlhYmxlRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGxleCA9IHN1YnN0aXR1dGlvbi5pc0NvbXBsZXgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBsZXgpIHtcbiAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gY29tcGxleFN1YnN0aXR1dGlvbi5pc01ldGF2YXJpYWJsZUVxdWFsVG8obWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmlzTWV0YXZhcmlhYmxlRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uQlN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uQi5pc1N1YnN0aXR1dGlvbkVxdWFsVG8oc3Vic3RpdHV0aW9uQSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uQSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pOyAgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCkge1xuICAgIHRoaXMuYXJyYXkucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgfVxuXG4gIHJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgcHJ1bmUodGhpcy5hcnJheSwgKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25BICE9PSBzdWJzdGl0dXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBSZW1vdmVkIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmApO1xuICB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3QgYXJyYXkgPSBzdWJzdGl0dXRpb25zLmdldEFycmF5KCksXG4gICAgICAgICAgYXJyYXlBID0gYXJyYXksIC8vL1xuICAgICAgICAgIGFycmF5QiA9IHRoaXMuYXJyYXksICAvLy9cbiAgICAgICAgICBjb3JyZWxhdGVzID0gY29ycmVsYXRlKGFycmF5QSwgYXJyYXlCLCAoc3Vic3RpdHV0aW9uQSwgc3Vic3RpdHV0aW9uQikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQUlzRVF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkFJc0VRdWFsVG9TdWJzdGl0dXRpb25CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvcnJlbGF0ZXM7XG4gIH1cblxuICByZW1vdmVUcml2aWFsU3Vic3RpdHV0aW9ucygpICB7XG4gICAgZmlsdGVyKHRoaXMuYXJyYXksIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHRyaXZpYWwgPSBzdWJzdGl0dXRpb24uaXNUcml2aWFsKCk7XG5cbiAgICAgIGlmICghdHJpdmlhbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGNsZWFyKHRoaXMuYXJyYXkpO1xuXG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIHJlc29sdmUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIG1ldGF2YXJpYWJsZXMuZm9yRWFjaCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWQ7XG5cbiAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb21wbGV4U3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgICAgICAgICByZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5yZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhcmVSZXNvbHZlZCgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSBtZXRhdmFyaWFibGVzLmV2ZXJ5KChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIHNuYXBzaG90KCkge1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuYXJyYXlcbiAgICBdO1xuICB9XG5cbiAgcm9sbGJhY2soc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcblxuICAgIGxlZnREaWZmZXJlbmNlKGFycmF5LCB0aGlzLnNhdmVkQXJyYXkpO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFycmF5ID0gW1xuICAgICAgLi4udGhpcy5zYXZlZEFycmF5XG4gICAgXTtcblxuICAgIHRoaXMuc2F2ZWRBcnJheSA9IG51bGw7XG4gIH1cblxuICBjb250aW51ZSgpIHtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICBzdHJpbmcgPSBFTVBUWV9TVFJJTkc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNTdHJpbmcgPSB0aGlzLmFycmF5LnJlZHVjZSgoc3Vic3RpdHV0aW9uc1N0cmluZywgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gKHN1YnN0aXR1dGlvbnNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3Vic3RpdHV0aW9uc1N0cmluZ30sICR7c3Vic3RpdHV0aW9uU3RyaW5nfWA7XG5cbiAgICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNTdHJpbmc7XG4gICAgICB9LCBudWxsKTtcblxuICAgICAgc3RyaW5nID0gc3Vic3RpdHV0aW9uc1N0cmluZzsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpIHtcbiAgICBjb25zdCBzYXZlZEFycmF5ID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG5ldyBTdWJzdGl0dXRpb25zKGFycmF5LCBzYXZlZEFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgc2F2ZWRBcnJheSA9IG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG5ldyBTdWJzdGl0dXRpb25zKGFycmF5LCBzYXZlZEFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxlZnREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIlN1YnN0aXR1dGlvbnMiLCJmaW5kIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImNsZWFyIiwicHJ1bmUiLCJmaWx0ZXIiLCJjb21wcmVzcyIsImNvcnJlbGF0ZSIsImFycmF5Iiwic2F2ZWRBcnJheSIsImdldEFycmF5IiwiZ2V0U2F2ZWRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldEZpcnN0U3Vic3RpdHV0aW9uIiwiZmlyc3RTdWJzdGl0dXRpb24iLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImZvckVhY2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJwdXNoIiwibWV0YXZhcmlhYmxlQSIsIm1ldGF2YXJpYWJsZUIiLCJtZXRhdmFyaWFibGVBRXF1YWxUb01ldGF2YXJpYWJsZUIiLCJpc0VxdWFsVG8iLCJtYXBTdWJzdGl0dXRpb24iLCJjYWxsYmFjayIsIm1hcCIsImZpbmRTdWJzdGl0dXRpb24iLCJzb21lU3Vic3RpdHV0aW9uIiwic29tZSIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwiZXZlcnkiLCJmb3JFYWNoIiwiZmluZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiZnJvbUFycmF5IiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUiLCJ2YXJpYWJsZSIsInN1YnN0aXR1dGlvblZhcmlhYmxlIiwiZ2V0VmFyaWFibGUiLCJzdWJzdGl0dXRpb25WYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSIsImZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uU2ltcGxlIiwiaXNTaW1wbGUiLCJzaW1wbGVTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUiLCJjb21wbGV4U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbkNvbXBsZXgiLCJpc0NvbXBsZXgiLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwiY29tcGxleFN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uQSIsImlzU3Vic3RpdHV0aW9uRXF1YWxUbyIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5VmFyaWFibGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInJlbW92ZVN1YnN0aXR1dGlvbiIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJhcnJheUEiLCJhcnJheUIiLCJjb3JyZWxhdGVzIiwic3Vic3RpdHV0aW9uQUlzRVF1YWxUb1N1YnN0aXR1dGlvbkIiLCJyZW1vdmVUcml2aWFsU3Vic3RpdHV0aW9ucyIsInRyaXZpYWwiLCJpc1RyaXZpYWwiLCJyZXNvbHZlIiwiZ2VuZXJhbENvbnRleHQiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwicmVzb2x2ZWQiLCJpc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJzbmFwc2hvdCIsInJvbGxiYWNrIiwibGVmdERpZmZlcmVuY2UiLCJjb250aW51ZSIsImFzU3RyaW5nIiwic3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsInJlZHVjZSIsImZyb21Ob3RoaW5nIiwiZWxlbWVudEEiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VO3lCQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBUUMsT0FBMkRDLHlCQUFjLENBQXpFRCxNQUFNRSxRQUFxREQseUJBQWMsQ0FBbkVDLE9BQU9DLFFBQThDRix5QkFBYyxDQUE1REUsT0FBT0MsUUFBdUNILHlCQUFjLENBQXJERyxPQUFPQyxTQUFnQ0oseUJBQWMsQ0FBOUNJLFFBQVFDLFdBQXdCTCx5QkFBYyxDQUF0Q0ssVUFBVUMsWUFBY04seUJBQWMsQ0FBNUJNO0FBRXRDLElBQUEsQUFBTVIsOEJBQU47YUFBTUEsY0FDUFMsS0FBSyxFQUFFQyxVQUFVO2dDQURWVjtRQUVqQixJQUFJLENBQUNTLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUhEVjs7WUFNbkJXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxNQUFNO1lBQUU7OztZQUV4Q0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG9CQUFvQjtnQkFFeEIsSUFBTUYsU0FBUyxJQUFJLENBQUNELFNBQVM7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