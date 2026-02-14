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
var _occamlanguages = require("occam-languages");
var _necessary = require("necessary");
var _elements = require("../elements");
var _constants = require("../constants");
var _string = require("../utilities/string");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _Substitutions;
var find = _necessary.arrayUtilities.find, first = _necessary.arrayUtilities.first, clear = _necessary.arrayUtilities.clear, prune = _necessary.arrayUtilities.prune, filter = _necessary.arrayUtilities.filter, extract = _necessary.arrayUtilities.extract, compress = _necessary.arrayUtilities.compress, correlate = _necessary.arrayUtilities.correlate;
var _default = (0, _elements.define)((_Substitutions = /*#__PURE__*/ function(Element) {
    _inherits(Substitutions, Element);
    function Substitutions() {
        _class_call_check(this, Substitutions);
        return _call_super(this, Substitutions, arguments);
    }
    _create_class(Substitutions, [
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
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "mapSubstitution",
            value: function mapSubstitution(callback) {
                return this.array.map(callback);
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
            key: "extractSubstitution",
            value: function extractSubstitution(callbcak) {
                return extract(this.array, callbcak);
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
                }) || null;
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
            key: "isSubstitutionPresentByVariable",
            value: function isSubstitutionPresentByVariable(variable) {
                var substitution = this.findSubstitutionByVariable(variable), substitutionPresent = substitution !== null;
                return substitutionPresent;
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution, context) {
                var substitutionString = substitution.getString(), substitutionsString = this.asString(); ///
                this.array.push(substitution);
                var string = this.asString();
                this.setString(string);
                context.trace("Added the '".concat(substitutionString, "' substitution to the '").concat(substitutionsString, "' substitutions."));
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
                var string = this.asString(), substitutionString = substitution.getString(), substitutionsString = string; ///
                this.setString(string);
                context.trace("Removed the '".concat(substitutionString, "' substitution from the '").concat(substitutionsString, "' substitutions."));
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
            value: function snapshot(context) {
                var substitutionsString = this.getString(); ///
                context.trace("Taking a snapshot of the '".concat(substitutionsString, "' substitutions."));
                this.savedArray = _to_consumable_array(this.array);
            }
        },
        {
            key: "rollback",
            value: function rollback(context) {
                var _this = this;
                var substitutionsString = this.getString(); ///
                context.trace("Rolling back the '".concat(substitutionsString, "' substitutions."));
                var array = _to_consumable_array(this.array);
                leftDifference(array, this.savedArray);
                array.forEach(function(substitution) {
                    _this.removeSubstitution(substitution, context);
                });
                this.array = _to_consumable_array(this.savedArray);
                this.savedArray = null;
                var string = this.asString();
                this.setString(string);
            }
        },
        {
            key: "continue",
            value: function _continue(context) {
                var substitutionsString = this.getString(); ///
                context.trace("Continuing with the '".concat(substitutionsString, "' substitutions."));
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
                    var substitutions = this.array, substitutionsString = (0, _string.substitutionsStringFromSubstitutions)(substitutions);
                    string = substitutionsString; ///
                }
                return string;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var node = null, string = _constants.EMPTY_STRING, array = [], savedArray = [], substitutions = new Substitutions(context, string, node, array, savedArray);
                return substitutions;
            }
        }
    ]);
    return Substitutions;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Substitutions, "name", "Substitutions"), _Substitutions));
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzdWJzdGl0dXRpb25zU3RyaW5nRnJvbVN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCB7IGZpbmQsIGZpcnN0LCBjbGVhciwgcHJ1bmUsIGZpbHRlciwgZXh0cmFjdCwgY29tcHJlc3MsIGNvcnJlbGF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJzdGl0dXRpb25zIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldE5vblRyaXZpYWxMZW5ndGgoKSB7XG4gICAgY29uc3Qgbm9uVHJpdmlhbExlbmd0aCA9IHRoaXMucmVkdWNlU3Vic3RpdHV0aW9uKChub25Ucml2aWFsTGVuZ3RoLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblRyaXZpYWwgPSBzdWJzdGl0dXRpb24uaXNUcml2aWFsKCk7XG5cbiAgICAgIGlmICghc3Vic3RpdHV0aW9uVHJpdmlhbCkge1xuICAgICAgICBub25Ucml2aWFsTGVuZ3RoICs9IDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub25Ucml2aWFsTGVuZ3RoO1xuICAgIH0sIDApO1xuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxMZW5ndGg7XG4gIH1cblxuICBnZXRGaXJzdFN1YnN0aXR1dGlvbigpIHtcbiAgICBsZXQgZmlyc3RTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdFN1YnN0aXR1dGlvbiA9IGZpcnN0KHRoaXMuYXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoOyB9XG5cbiAgbWFwU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlU3Vic3RpdHV0aW9uKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZXh0cmFjdFN1YnN0aXR1dGlvbihjYWxsYmNhaykgeyByZXR1cm4gZXh0cmFjdCh0aGlzLmFycmF5LCBjYWxsYmNhayk7IH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVmFyaWFibGVFcXVhbFRvVmFyaWFibGUgPSBzdWJzdGl0dXRpb25WYXJpYWJsZS5pc0VxdWFsVG8odmFyaWFibGUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25WYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSB0aGlzLmFzU3RyaW5nKCk7ICAvLy9cblxuICAgIHRoaXMuYXJyYXkucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgdGhpcy5zZXRTdHJpbmcoc3RyaW5nKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zLmApO1xuICB9XG5cbiAgcmVtb3ZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgcHJ1bmUodGhpcy5hcnJheSwgKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25BICE9PSBzdWJzdGl0dXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5hc1N0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3RyaW5nOyAvLy9cblxuICAgIHRoaXMuc2V0U3RyaW5nKHN0cmluZyk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZW1vdmVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gZnJvbSB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMuYCk7XG4gIH1cblxuICBjb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBhcnJheUEgPSBhcnJheSwgLy8vXG4gICAgICAgICAgYXJyYXlCID0gdGhpcy5hcnJheSwgIC8vL1xuICAgICAgICAgIGNvcnJlbGF0ZXMgPSBjb3JyZWxhdGUoYXJyYXlBLCBhcnJheUIsIChzdWJzdGl0dXRpb25BLCBzdWJzdGl0dXRpb25CKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25BSXNFUXVhbFRvU3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQUlzRVF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29ycmVsYXRlcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGNsZWFyKHRoaXMuYXJyYXkpO1xuXG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIG1ldGF2YXJpYWJsZXMuZm9yRWFjaCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWQ7XG5cbiAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb21wbGV4U3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgICAgICAgICByZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5yZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhcmVSZXNvbHZlZCgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSBtZXRhdmFyaWFibGVzLmV2ZXJ5KChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIHNuYXBzaG90KGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBUYWtpbmcgYSBzbmFwc2hvdCBvZiB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMuYCk7XG5cbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcbiAgfVxuXG4gIHJvbGxiYWNrKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSb2xsaW5nIGJhY2sgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zLmApO1xuXG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcblxuICAgIGxlZnREaWZmZXJlbmNlKGFycmF5LCB0aGlzLnNhdmVkQXJyYXkpO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuc2F2ZWRBcnJheVxuICAgIF07XG5cbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgdGhpcy5zZXRTdHJpbmcoc3RyaW5nKTtcbiAgfVxuXG4gIGNvbnRpbnVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb250aW51aW5nIHdpdGggdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zLmApO1xuXG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgc3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5hcnJheSwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9uc1N0cmluZ0Zyb21TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzdHJpbmcgPSBzdWJzdGl0dXRpb25zU3RyaW5nOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YnN0aXR1dGlvbnNcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhcnJheSA9IFtdLFxuICAgICAgICAgIHNhdmVkQXJyYXkgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbmV3IFN1YnN0aXR1dGlvbnMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGxlZnREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImZpbmQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiY2xlYXIiLCJwcnVuZSIsImZpbHRlciIsImV4dHJhY3QiLCJjb21wcmVzcyIsImNvcnJlbGF0ZSIsImRlZmluZSIsIlN1YnN0aXR1dGlvbnMiLCJnZXROb25Ucml2aWFsTGVuZ3RoIiwibm9uVHJpdmlhbExlbmd0aCIsInJlZHVjZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblRyaXZpYWwiLCJpc1RyaXZpYWwiLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsImZpcnN0U3Vic3RpdHV0aW9uIiwibGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiYXJyYXkiLCJtYXBTdWJzdGl0dXRpb24iLCJjYWxsYmFjayIsIm1hcCIsInNvbWVTdWJzdGl0dXRpb24iLCJzb21lIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJldmVyeSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hTdWJzdGl0dXRpb24iLCJmb3JFYWNoIiwiZXh0cmFjdFN1YnN0aXR1dGlvbiIsImNhbGxiY2FrIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUiLCJ2YXJpYWJsZSIsImZpbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25WYXJpYWJsZSIsImdldFZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVmFyaWFibGVFcXVhbFRvVmFyaWFibGUiLCJpc0VxdWFsVG8iLCJmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9ucyIsImZpbmRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5VmFyaWFibGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiYWRkU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsInB1c2giLCJzdHJpbmciLCJzZXRTdHJpbmciLCJ0cmFjZSIsInJlbW92ZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25CIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsImdldEFycmF5IiwiYXJyYXlBIiwiYXJyYXlCIiwiY29ycmVsYXRlcyIsInN1YnN0aXR1dGlvbkFJc0VRdWFsVG9TdWJzdGl0dXRpb25CIiwic2F2ZWRBcnJheSIsInJlc29sdmUiLCJtZXRhdmFyaWFibGVzIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImNvbXBsZXhTdWJzdGl0dXRpb25zIiwiZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiY29tcGxleFN1YnN0aXR1dGlvbiIsInJlc29sdmVkIiwiaXNSZXNvbHZlZCIsImFyZVJlc29sdmVkIiwiY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkIiwic25hcHNob3QiLCJyb2xsYmFjayIsImxlZnREaWZmZXJlbmNlIiwiY29udGludWUiLCJFTVBUWV9TVFJJTkciLCJzdWJzdGl0dXRpb25zU3RyaW5nRnJvbVN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsIm5vZGUiLCJFbGVtZW50IiwibmFtZSIsImVsZW1lbnRBIiwiYXJyYXlCSW5jbHVkZXNFbGVtZW50QSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozs4QkFUd0I7eUJBQ087d0JBRVI7eUJBQ007c0JBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckQsSUFBUUEsT0FBb0VDLHlCQUFjLENBQWxGRCxNQUFNRSxRQUE4REQseUJBQWMsQ0FBNUVDLE9BQU9DLFFBQXVERix5QkFBYyxDQUFyRUUsT0FBT0MsUUFBZ0RILHlCQUFjLENBQTlERyxPQUFPQyxTQUF5Q0oseUJBQWMsQ0FBdkRJLFFBQVFDLFVBQWlDTCx5QkFBYyxDQUEvQ0ssU0FBU0MsV0FBd0JOLHlCQUFjLENBQXRDTSxVQUFVQyxZQUFjUCx5QkFBYyxDQUE1Qk87SUFFOUQsV0FBZUMsSUFBQUEsZ0JBQU0sa0NBQUM7O2FBQU1DO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOzs7O1lBQzFCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsU0FBQ0Qsa0JBQWtCRTtvQkFDbEUsSUFBTUMsc0JBQXNCRCxhQUFhRSxTQUFTO29CQUVsRCxJQUFJLENBQUNELHFCQUFxQjt3QkFDeEJILG9CQUFvQjtvQkFDdEI7b0JBRUEsT0FBT0E7Z0JBQ1QsR0FBRztnQkFFSCxPQUFPQTtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG9CQUFvQjtnQkFFeEIsSUFBTUMsU0FBUyxJQUFJLENBQUNDLFNBQVM7Z0JB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