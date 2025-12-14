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
            key: "getNonTrivialLength",
            value: function getNonTrivialLength() {
                var nonTrivialLength = this.reduceSubstitution(function(nonTrivialLength, substitution) {
                    var substitutionTrivial = substitution.isTrivial();
                    if (!substitutionTrivial) {
                        nonTrivialLength += 1;
                    }
                    return nonTrivialLength;
                }, 0);
                return nonTrivialLength;
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
            key: "reduceSubstitution",
            value: function reduceSubstitution(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
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
                    var substitutionMetavariableEqualToMetavariable = substitution.isMetavariableEqualToMetavariable(metavariable);
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
                        var simpleSubstitution = substitution, simpleSubstitutionMetavariableEqualToMetavariable = simpleSubstitution.isMetavariableEqualToMetavariable(metavariable);
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
                        var complexSubstitution = substitution, complexSubstitutionMetavariableEqualToMetavariable = complexSubstitution.isMetavariableEqualToMetavariable(metavariable);
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
                    var substitutionMetavariableEqualToMetavariable = substitution.isMetavariableEqualToMetavariable(metavariable);
                    if (substitutionMetavariableEqualToMetavariable) {
                        var substitutionB = substitution, substitutionBSubstitutionEqualToSubstitutionA = substitutionB.isSubstitutionEqualToSubstitution(substitutionA);
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
            value: function addSubstitution(substitution, context) {
                this.array.push(substitution);
                var substitutionString = substitution.getString();
                context.trace("Added the ".concat(substitutionString, " substitution."));
            }
        },
        {
            key: "removeSubstitution",
            value: function removeSubstitution(substitution, context) {
                var substitutionA = substitution; ///
                prune(this.array, function(substitution) {
                    var substitutionB = substitution; ///
                    if (substitutionA !== substitutionB) {
                        return true;
                    }
                });
                var substitutionString = substitution.getString();
                context.trace("Removed the ".concat(substitutionString, " substitution."));
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
            value: function resolve(context) {
                var _this = this;
                var metavariables = this.getMetavariables();
                metavariables.forEach(function(metavariable) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariable(metavariable), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
                        var resolved;
                        var substitutions = _this, substitution = complexSubstitution; ///
                        resolved = substitution.isResolved();
                        if (!resolved) {
                            substitution.resolve(substitutions, context);
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
            value: function rollback(context) {
                var _this = this;
                var array = _to_consumable_array(this.array);
                leftDifference(array, this.savedArray);
                array.forEach(function(substitution) {
                    _this.removeSubstitution(substitution, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmluZCwgZmlyc3QsIGNsZWFyLCBwcnVuZSwgZmlsdGVyLCBjb21wcmVzcywgY29ycmVsYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5LCBzYXZlZEFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IHNhdmVkQXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldFNhdmVkQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gW107XG5cbiAgICB0aGlzLmZvckVhY2hTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29tcHJlc3MobWV0YXZhcmlhYmxlcywgKG1ldGF2YXJpYWJsZUEsIG1ldGF2YXJpYWJsZUIpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUFFcXVhbFRvTWV0YXZhcmlhYmxlQiA9IG1ldGF2YXJpYWJsZUIuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZUEpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlQUVxdWFsVG9NZXRhdmFyaWFibGVCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXROb25Ucml2aWFsTGVuZ3RoKCkge1xuICAgIGNvbnN0IG5vblRyaXZpYWxMZW5ndGggPSB0aGlzLnJlZHVjZVN1YnN0aXR1dGlvbigobm9uVHJpdmlhbExlbmd0aCwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ucml2aWFsID0gc3Vic3RpdHV0aW9uLmlzVHJpdmlhbCgpO1xuXG4gICAgICBpZiAoIXN1YnN0aXR1dGlvblRyaXZpYWwpIHtcbiAgICAgICAgbm9uVHJpdmlhbExlbmd0aCArPSAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9uVHJpdmlhbExlbmd0aDtcbiAgICB9LCAwKTtcblxuICAgIHJldHVybiBub25Ucml2aWFsTGVuZ3RoO1xuICB9XG5cbiAgZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKSB7XG4gICAgbGV0IGZpcnN0U3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RTdWJzdGl0dXRpb24gPSBmaXJzdCh0aGlzLmFycmF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RTdWJzdGl0dXRpb247XG4gIH1cblxuICBtYXBTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgfSAgLy8vXG5cbiAgc29tZVN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5U3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZVN1YnN0aXR1dGlvbihjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGZvckVhY2hTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25zKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXkgPSBmaW5kKHRoaXMuYXJyYXksIGNhbGxiYWNrKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tQXJyYXkoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVmFyaWFibGVFcXVhbFRvVmFyaWFibGUgPSBzdWJzdGl0dXRpb25WYXJpYWJsZS5pc0VxdWFsVG8odmFyaWFibGUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25WYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TaW1wbGUgPSBzdWJzdGl0dXRpb24uaXNTaW1wbGUoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblNpbXBsZSkge1xuICAgICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IHNpbXBsZVN1YnN0aXR1dGlvbi5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBsZXggPSBzdWJzdGl0dXRpb24uaXNDb21wbGV4KCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wbGV4KSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IGNvbXBsZXhTdWJzdGl0dXRpb24uaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbkIuaXNTdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbkEpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25CU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbkEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5VmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTsgIC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gKTtcbiAgfVxuXG4gIHJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHBydW5lKHRoaXMuYXJyYXksIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQSAhPT0gc3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFJlbW92ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCk7XG4gIH1cblxuICBjb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBhcnJheUEgPSBhcnJheSwgLy8vXG4gICAgICAgICAgYXJyYXlCID0gdGhpcy5hcnJheSwgIC8vL1xuICAgICAgICAgIGNvcnJlbGF0ZXMgPSBjb3JyZWxhdGUoYXJyYXlBLCBhcnJheUIsIChzdWJzdGl0dXRpb25BLCBzdWJzdGl0dXRpb25CKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25BSXNFUXVhbFRvU3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQUlzRVF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29ycmVsYXRlcztcbiAgfVxuXG4gIHJlbW92ZVRyaXZpYWxTdWJzdGl0dXRpb25zKCkgIHtcbiAgICBmaWx0ZXIodGhpcy5hcnJheSwgKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgdHJpdmlhbCA9IHN1YnN0aXR1dGlvbi5pc1RyaXZpYWwoKTtcblxuICAgICAgaWYgKCF0cml2aWFsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgY2xlYXIodGhpcy5hcnJheSk7XG5cbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgbWV0YXZhcmlhYmxlcy5mb3JFYWNoKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGxldCByZXNvbHZlZDtcblxuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbXBsZXhTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICAgICAgICAgIHJlc29sdmVkID0gc3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLnJlc29sdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFyZVJlc29sdmVkKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICByZXNvbHZlZCA9IG1ldGF2YXJpYWJsZXMuZXZlcnkoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb24uaXNSZXNvbHZlZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgc25hcHNob3QoKSB7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gW1xuICAgICAgLi4udGhpcy5hcnJheVxuICAgIF07XG4gIH1cblxuICByb2xsYmFjayhjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcblxuICAgIGxlZnREaWZmZXJlbmNlKGFycmF5LCB0aGlzLnNhdmVkQXJyYXkpO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuc2F2ZWRBcnJheVxuICAgIF07XG5cbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgY29udGludWUoKSB7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgc3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zU3RyaW5nID0gdGhpcy5hcnJheS5yZWR1Y2UoKHN1YnN0aXR1dGlvbnNTdHJpbmcsIHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IChzdWJzdGl0dXRpb25zU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1YnN0aXR1dGlvbnNTdHJpbmd9LCAke3N1YnN0aXR1dGlvblN0cmluZ31gO1xuXG4gICAgICAgIHJldHVybiBzdWJzdGl0dXRpb25zU3RyaW5nO1xuICAgICAgfSwgbnVsbCk7XG5cbiAgICAgIHN0cmluZyA9IHN1YnN0aXR1dGlvbnNTdHJpbmc7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KSB7XG4gICAgY29uc3Qgc2F2ZWRBcnJheSA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHNhdmVkQXJyYXkgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxufVxuXG5mdW5jdGlvbiBsZWZ0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb25zIiwiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJjbGVhciIsInBydW5lIiwiZmlsdGVyIiwiY29tcHJlc3MiLCJjb3JyZWxhdGUiLCJhcnJheSIsInNhdmVkQXJyYXkiLCJnZXRBcnJheSIsImdldFNhdmVkQXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImZvckVhY2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJwdXNoIiwibWV0YXZhcmlhYmxlQSIsIm1ldGF2YXJpYWJsZUIiLCJtZXRhdmFyaWFibGVBRXF1YWxUb01ldGF2YXJpYWJsZUIiLCJpc0VxdWFsVG8iLCJnZXROb25Ucml2aWFsTGVuZ3RoIiwibm9uVHJpdmlhbExlbmd0aCIsInJlZHVjZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblRyaXZpYWwiLCJpc1RyaXZpYWwiLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsImZpcnN0U3Vic3RpdHV0aW9uIiwibWFwU3Vic3RpdHV0aW9uIiwiY2FsbGJhY2siLCJtYXAiLCJmaW5kU3Vic3RpdHV0aW9uIiwic29tZVN1YnN0aXR1dGlvbiIsInNvbWUiLCJldmVyeVN1YnN0aXR1dGlvbiIsImV2ZXJ5IiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaCIsImZpbmRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImZyb21BcnJheSIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlIiwidmFyaWFibGUiLCJzdWJzdGl0dXRpb25WYXJpYWJsZSIsImdldFZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVmFyaWFibGVFcXVhbFRvVmFyaWFibGUiLCJmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblNpbXBsZSIsImlzU2ltcGxlIiwic2ltcGxlU3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlIiwiY29tcGxleFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25Db21wbGV4IiwiaXNDb21wbGV4IiwiY29tcGxleFN1YnN0aXR1dGlvbiIsImNvbXBsZXhTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvbkIiLCJzdWJzdGl0dXRpb25CU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbkEiLCJpc1N1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24iLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwicmVtb3ZlU3Vic3RpdHV0aW9uIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsImFycmF5QSIsImFycmF5QiIsImNvcnJlbGF0ZXMiLCJzdWJzdGl0dXRpb25BSXNFUXVhbFRvU3Vic3RpdHV0aW9uQiIsInJlbW92ZVRyaXZpYWxTdWJzdGl0dXRpb25zIiwidHJpdmlhbCIsInJlc29sdmUiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwicmVzb2x2ZWQiLCJpc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJzbmFwc2hvdCIsInJvbGxiYWNrIiwibGVmdERpZmZlcmVuY2UiLCJjb250aW51ZSIsImFzU3RyaW5nIiwic3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImZyb21Ob3RoaW5nIiwiZWxlbWVudEEiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VO3lCQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBUUMsT0FBMkRDLHlCQUFjLENBQXpFRCxNQUFNRSxRQUFxREQseUJBQWMsQ0FBbkVDLE9BQU9DLFFBQThDRix5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