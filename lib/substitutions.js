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
var _constants = require("./constants");
var _array = require("./utilities/array");
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
            key: "hasChanged",
            value: function hasChanged() {
                var compares = (0, _array.compare)(this.array, this.savedArray), changed = !compares; ///
                return changed;
            }
        },
        {
            key: "findSubstitution",
            value: function findSubstitution(callback) {
                return this.array.find(callback);
            }
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
            key: "addSubstitution",
            value: function addSubstitution(substitution, localContextA, localContextB) {
                this.array.push(substitution);
                var substitutionNode = substitution.getNode(), substitutionString = substitution.asString(localContextA, localContextB);
                localContextB.trace("Added the ".concat(substitutionString, " substitution."), substitutionNode);
            }
        },
        {
            key: "removeSubstitution",
            value: function removeSubstitution(substitution, localContextA, localContextB) {
                var substitutionA = substitution; ///
                (0, _array.prune)(this.array, function(substitution) {
                    var substitutionB = substitution; ///
                    if (substitutionA !== substitutionB) {
                        return true;
                    }
                });
                var substitutionNode = substitution.getNode(), substitutionString = substitution.asString(localContextA, localContextB);
                localContextB.trace("Removed the ".concat(substitutionString, " substitution."), substitutionNode);
            }
        },
        {
            key: "unifyWithEquivalences",
            value: function unifyWithEquivalences(equivalences, localContextA, localContextB) {
                var _this = this;
                var unifiedWithEquivalences = this.everySubstitution(function(substitution) {
                    var substitutions = _this, substitutionUnifiedWithEquivalence = substitution.unifyWithEquivalences(equivalences, substitutions, localContextA, localContextB);
                    if (substitutionUnifiedWithEquivalence) {
                        return true;
                    }
                });
                return unifiedWithEquivalences;
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
            value: function rollback(localContextA, localContextB) {
                var _this = this;
                var array = _to_consumable_array(this.array);
                (0, _array.rightDifference)(this.savedArray, array);
                array.forEach(function(substitution) {
                    _this.removeSubstitution(substitution, localContextA, localContextB);
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
            value: function asString(localContextA, localContextB) {
                var string = this.array.reduce(function(string, substitution) {
                    var substitutionString = substitution.asString(localContextA, localContextB);
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
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], savedArray = null, substitutions = new Substitutions(array, savedArray);
                return substitutions;
            }
        }
    ]);
    return Substitutions;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBydW5lLCBjb21wYXJlLCByaWdodERpZmZlcmVuY2UgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5LCBzYXZlZEFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IHNhdmVkQXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldFNhdmVkQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGhhc0NoYW5nZWQoKSB7XG4gICAgY29uc3QgY29tcGFyZXMgPSBjb21wYXJlKHRoaXMuYXJyYXksIHRoaXMuc2F2ZWRBcnJheSksXG4gICAgICAgICAgY2hhbmdlZCA9ICFjb21wYXJlczsgIC8vL1xuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmZpbmQoY2FsbGJhY2spOyB9XG5cbiAgc29tZVN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5U3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5hc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGxvY2FsQ29udGV4dEIudHJhY2UoYEFkZGVkIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmAsIHN1YnN0aXR1dGlvbk5vZGUpO1xuICB9XG5cbiAgcmVtb3ZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgcHJ1bmUodGhpcy5hcnJheSwgKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25BICE9PSBzdWJzdGl0dXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgbG9jYWxDb250ZXh0Qi50cmFjZShgUmVtb3ZlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gLCBzdWJzdGl0dXRpb25Ob2RlKTtcbiAgfVxuXG4gIHVuaWZ5V2l0aEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlcyA9IHRoaXMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHN1YnN0aXR1dGlvbi51bmlmeVdpdGhFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZXM7XG4gIH1cblxuICBzbmFwc2hvdCgpIHtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcbiAgfVxuXG4gIHJvbGxiYWNrKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuYXJyYXlcbiAgICBdO1xuXG4gICAgcmlnaHREaWZmZXJlbmNlKHRoaXMuc2F2ZWRBcnJheSwgYXJyYXkpO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuc2F2ZWRBcnJheVxuICAgIF07XG5cbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgY29udGludWUoKSB7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIGFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3RyaW5nID0gdGhpcy5hcnJheS5yZWR1Y2UoKHN0cmluZywgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uYXNTdHJpbmcobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIHN0cmluZyA9IChzdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICBgJHtzdHJpbmd9LCAke3N1YnN0aXR1dGlvblN0cmluZ31gO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICBpZiAoc3RyaW5nICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgIHN0cmluZyA9IGAgJHtzdHJpbmd9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgc2F2ZWRBcnJheSA9IG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG5ldyBTdWJzdGl0dXRpb25zKGFycmF5LCBzYXZlZEFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9ucyIsImFycmF5Iiwic2F2ZWRBcnJheSIsImdldEFycmF5IiwiZ2V0U2F2ZWRBcnJheSIsImhhc0NoYW5nZWQiLCJjb21wYXJlcyIsImNvbXBhcmUiLCJjaGFuZ2VkIiwiZmluZFN1YnN0aXR1dGlvbiIsImNhbGxiYWNrIiwiZmluZCIsInNvbWVTdWJzdGl0dXRpb24iLCJzb21lIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJldmVyeSIsImZvckVhY2hTdWJzdGl0dXRpb24iLCJmb3JFYWNoIiwiYWRkU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJwdXNoIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJhc1N0cmluZyIsInRyYWNlIiwicmVtb3ZlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInBydW5lIiwic3Vic3RpdHV0aW9uQiIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzIiwic3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiLCJzbmFwc2hvdCIsInJvbGxiYWNrIiwicmlnaHREaWZmZXJlbmNlIiwiY29udGludWUiLCJzdHJpbmciLCJyZWR1Y2UiLCJFTVBUWV9TVFJJTkciLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7eUJBSFE7cUJBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBQSxBQUFNQSw4QkFBTjthQUFNQSxjQUNQQyxLQUFLLEVBQUVDLFVBQVU7Z0NBRFZGO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSERGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLElBQUFBLGNBQU8sRUFBQyxJQUFJLENBQUNOLEtBQUssRUFBRSxJQUFJLENBQUNDLFVBQVUsR0FDOUNNLFVBQVUsQ0FBQ0YsVUFBVyxH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