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
                }, null);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwcnVuZSwgY29tcGFyZSwgcmlnaHREaWZmZXJlbmNlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbnMge1xuICBjb25zdHJ1Y3RvcihhcnJheSwgc2F2ZWRBcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBzYXZlZEFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRTYXZlZEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLnNhdmVkQXJyYXk7XG4gIH1cblxuICBoYXNDaGFuZ2VkKCkge1xuICAgIGNvbnN0IGNvbXBhcmVzID0gY29tcGFyZSh0aGlzLmFycmF5LCB0aGlzLnNhdmVkQXJyYXkpLFxuICAgICAgICAgIGNoYW5nZWQgPSAhY29tcGFyZXM7ICAvLy9cblxuICAgIHJldHVybiBjaGFuZ2VkO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5maW5kKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeVN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uYXNTdHJpbmcobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBsb2NhbENvbnRleHRCLnRyYWNlKGBBZGRlZCB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi5gLCBzdWJzdGl0dXRpb25Ob2RlKTtcbiAgfVxuXG4gIHJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHBydW5lKHRoaXMuYXJyYXksIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQSAhPT0gc3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5hc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGxvY2FsQ29udGV4dEIudHJhY2UoYFJlbW92ZWQgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uYCwgc3Vic3RpdHV0aW9uTm9kZSk7XG4gIH1cblxuICB1bmlmeVdpdGhFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgY29uc3QgdW5pZmllZFdpdGhFcXVpdmFsZW5jZXMgPSB0aGlzLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSBzdWJzdGl0dXRpb24udW5pZnlXaXRoRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgc25hcHNob3QoKSB7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gW1xuICAgICAgLi4udGhpcy5hcnJheVxuICAgIF07XG4gIH1cblxuICByb2xsYmFjayhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcblxuICAgIHJpZ2h0RGlmZmVyZW5jZSh0aGlzLnNhdmVkQXJyYXksIGFycmF5KTtcblxuICAgIGFycmF5LmZvckVhY2goKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXJyYXkgPSBbXG4gICAgICAuLi50aGlzLnNhdmVkQXJyYXlcbiAgICBdO1xuXG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIGNvbnRpbnVlKCkge1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IG51bGw7XG4gIH1cblxuICBhc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5hcnJheS5yZWR1Y2UoKHN0cmluZywgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uYXNTdHJpbmcobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIHN0cmluZyA9IChzdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICBgJHtzdHJpbmd9LCAke3N1YnN0aXR1dGlvblN0cmluZ31gO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHNhdmVkQXJyYXkgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1YnN0aXR1dGlvbnMiLCJhcnJheSIsInNhdmVkQXJyYXkiLCJnZXRBcnJheSIsImdldFNhdmVkQXJyYXkiLCJoYXNDaGFuZ2VkIiwiY29tcGFyZXMiLCJjb21wYXJlIiwiY2hhbmdlZCIsImZpbmRTdWJzdGl0dXRpb24iLCJjYWxsYmFjayIsImZpbmQiLCJzb21lU3Vic3RpdHV0aW9uIiwic29tZSIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwiZXZlcnkiLCJmb3JFYWNoU3Vic3RpdHV0aW9uIiwiZm9yRWFjaCIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwicHVzaCIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJ0cmFjZSIsInJlbW92ZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkEiLCJwcnVuZSIsInN1YnN0aXR1dGlvbkIiLCJ1bmlmeVdpdGhFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJ1bmlmaWVkV2l0aEVxdWl2YWxlbmNlcyIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25VbmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwic25hcHNob3QiLCJyb2xsYmFjayIsInJpZ2h0RGlmZmVyZW5jZSIsImNvbnRpbnVlIiwic3RyaW5nIiwicmVkdWNlIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3FCQUYyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLElBQUEsQUFBTUEsOEJBQU47YUFBTUEsY0FDUEMsS0FBSyxFQUFFQyxVQUFVO2dDQURWRjtRQUVqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUhERjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyxJQUFBQSxjQUFPLEVBQUMsSUFBSSxDQUFDTixLQUFLLEVBQUUsSUFBSSxDQUFDQyxVQUFVLEdBQzlDTSxVQUFVLENBQUNGLFVBQVcsR0FBRztnQkFFL0IsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNULEtBQUssQ0FBQ1UsSUFBSSxDQUFDRDtZQUFXOzs7WUFFL0RFLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJGLFFB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