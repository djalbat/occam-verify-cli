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
var _necessary = require("necessary");
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
    function Substitutions(context, string, node, array, savedArray) {
        _class_call_check(this, Substitutions);
        var _this;
        _this = _call_super(this, Substitutions, [
            context,
            string,
            node
        ]);
        _this.array = array;
        _this.savedArray = savedArray;
        return _this;
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
                    if (!metavariableAEqualToMetavariableB) {
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
            key: "findSubstitutions",
            value: function findSubstitutions(callback) {
                var string;
                var array = find(this.array, callback), context = null;
                string = null;
                var node = null, savedArray = [], substitutions = new Substitutions(context, string, node, array, savedArray);
                string = substitutions.asString();
                substitutions.setString(string);
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
                }) || null;
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
                        var substitutionB = substitution, substitutionBSubstitutionComparesToSubstitutionA = substitutionB.compareSubstitution(substitutionA);
                        if (substitutionBSubstitutionComparesToSubstitutionA) {
                            return true;
                        }
                    }
                }) || null;
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
}(_wrap_native_super(_element.default)), _define_property(_Substitutions, "name", "Substitutions"), _Substitutions));
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZmluZCwgZmlyc3QsIGNsZWFyLCBwcnVuZSwgZmlsdGVyLCBleHRyYWN0LCBjb21wcmVzcywgY29ycmVsYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnN0aXR1dGlvbnMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSwgc2F2ZWRBcnJheSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0U2F2ZWRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlZEFycmF5O1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gW107XG5cbiAgICB0aGlzLmZvckVhY2hTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29tcHJlc3MobWV0YXZhcmlhYmxlcywgKG1ldGF2YXJpYWJsZUEsIG1ldGF2YXJpYWJsZUIpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUFFcXVhbFRvTWV0YXZhcmlhYmxlQiA9IG1ldGF2YXJpYWJsZUIuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZUEpO1xuXG4gICAgICBpZiAoIW1ldGF2YXJpYWJsZUFFcXVhbFRvTWV0YXZhcmlhYmxlQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0Tm9uVHJpdmlhbExlbmd0aCgpIHtcbiAgICBjb25zdCBub25Ucml2aWFsTGVuZ3RoID0gdGhpcy5yZWR1Y2VTdWJzdGl0dXRpb24oKG5vblRyaXZpYWxMZW5ndGgsIHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVHJpdmlhbCA9IHN1YnN0aXR1dGlvbi5pc1RyaXZpYWwoKTtcblxuICAgICAgaWYgKCFzdWJzdGl0dXRpb25Ucml2aWFsKSB7XG4gICAgICAgIG5vblRyaXZpYWxMZW5ndGggKz0gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vblRyaXZpYWxMZW5ndGg7XG4gICAgfSwgMCk7XG5cbiAgICByZXR1cm4gbm9uVHJpdmlhbExlbmd0aDtcbiAgfVxuXG4gIGdldEZpcnN0U3Vic3RpdHV0aW9uKCkge1xuICAgIGxldCBmaXJzdFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0U3Vic3RpdHV0aW9uID0gZmlyc3QodGhpcy5hcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBtYXBTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfVxuXG4gIHNvbWVTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeVN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICByZWR1Y2VTdWJzdGl0dXRpb24oY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBmb3JFYWNoU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBleHRyYWN0U3Vic3RpdHV0aW9uKGNhbGxiY2FrKSB7IHJldHVybiBleHRyYWN0KHRoaXMuYXJyYXksIGNhbGxiY2FrKTsgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25zKGNhbGxiYWNrKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IGFycmF5ID0gZmluZCh0aGlzLmFycmF5LCBjYWxsYmFjayksXG4gICAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBzdHJpbmcgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgc2F2ZWRBcnJheSA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5LCBzYXZlZEFycmF5KTtcblxuICAgIHN0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIHN1YnN0aXR1dGlvbnMuc2V0U3RyaW5nKHN0cmluZyk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25WYXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSA9IHN1YnN0aXR1dGlvblZhcmlhYmxlLmlzRXF1YWxUbyh2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU2ltcGxlID0gc3Vic3RpdHV0aW9uLmlzU2ltcGxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25TaW1wbGUpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBzaW1wbGVTdWJzdGl0dXRpb24uaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBsZXggPSBzdWJzdGl0dXRpb24uaXNDb21wbGV4KCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wbGV4KSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IGNvbXBsZXhTdWJzdGl0dXRpb24uaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbkIuY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb25BKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQlN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb25BKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5VmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTsgIC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSB0aGlzLmFzU3RyaW5nKCk7ICAvLy9cblxuICAgIHRoaXMuYXJyYXkucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgdGhpcy5zZXRTdHJpbmcoc3RyaW5nKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zLmApO1xuICB9XG5cbiAgcmVtb3ZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgcHJ1bmUodGhpcy5hcnJheSwgKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25BICE9PSBzdWJzdGl0dXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5hc1N0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3RyaW5nOyAvLy9cblxuICAgIHRoaXMuc2V0U3RyaW5nKHN0cmluZyk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZW1vdmVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gZnJvbSB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMuYCk7XG4gIH1cblxuICBjb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBhcnJheUEgPSBhcnJheSwgLy8vXG4gICAgICAgICAgYXJyYXlCID0gdGhpcy5hcnJheSwgIC8vL1xuICAgICAgICAgIGNvcnJlbGF0ZXMgPSBjb3JyZWxhdGUoYXJyYXlBLCBhcnJheUIsIChzdWJzdGl0dXRpb25BLCBzdWJzdGl0dXRpb25CKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25BSXNFUXVhbFRvU3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQUlzRVF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29ycmVsYXRlcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGNsZWFyKHRoaXMuYXJyYXkpO1xuXG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIG1ldGF2YXJpYWJsZXMuZm9yRWFjaCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWQ7XG5cbiAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb21wbGV4U3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgICAgICAgICByZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5yZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhcmVSZXNvbHZlZCgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSBtZXRhdmFyaWFibGVzLmV2ZXJ5KChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIHNuYXBzaG90KGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBUYWtpbmcgYSBzbmFwc2hvdCBvZiB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMuYCk7XG5cbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcbiAgfVxuXG4gIHJvbGxiYWNrKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSb2xsaW5nIGJhY2sgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zLmApO1xuXG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcblxuICAgIGxlZnREaWZmZXJlbmNlKGFycmF5LCB0aGlzLnNhdmVkQXJyYXkpO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuc2F2ZWRBcnJheVxuICAgIF07XG5cbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgdGhpcy5zZXRTdHJpbmcoc3RyaW5nKTtcbiAgfVxuXG4gIGNvbnRpbnVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb250aW51aW5nIHdpdGggdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zLmApO1xuXG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgc3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5hcnJheSwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9uc1N0cmluZ0Zyb21TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzdHJpbmcgPSBzdWJzdGl0dXRpb25zU3RyaW5nOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YnN0aXR1dGlvbnNcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhcnJheSA9IFtdLFxuICAgICAgICAgIHNhdmVkQXJyYXkgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbmV3IFN1YnN0aXR1dGlvbnMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGxlZnREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImZpbmQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiY2xlYXIiLCJwcnVuZSIsImZpbHRlciIsImV4dHJhY3QiLCJjb21wcmVzcyIsImNvcnJlbGF0ZSIsImRlZmluZSIsIlN1YnN0aXR1dGlvbnMiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFycmF5Iiwic2F2ZWRBcnJheSIsImdldEFycmF5IiwiZ2V0U2F2ZWRBcnJheSIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiZm9yRWFjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInB1c2giLCJtZXRhdmFyaWFibGVBIiwibWV0YXZhcmlhYmxlQiIsIm1ldGF2YXJpYWJsZUFFcXVhbFRvTWV0YXZhcmlhYmxlQiIsImlzRXF1YWxUbyIsImdldE5vblRyaXZpYWxMZW5ndGgiLCJub25Ucml2aWFsTGVuZ3RoIiwicmVkdWNlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVHJpdmlhbCIsImlzVHJpdmlhbCIsImdldEZpcnN0U3Vic3RpdHV0aW9uIiwiZmlyc3RTdWJzdGl0dXRpb24iLCJsZW5ndGgiLCJnZXRMZW5ndGgiLCJtYXBTdWJzdGl0dXRpb24iLCJjYWxsYmFjayIsIm1hcCIsImZpbmRTdWJzdGl0dXRpb24iLCJzb21lU3Vic3RpdHV0aW9uIiwic29tZSIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwiZXZlcnkiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoIiwiZXh0cmFjdFN1YnN0aXR1dGlvbiIsImNhbGxiY2FrIiwiZmluZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiYXNTdHJpbmciLCJzZXRTdHJpbmciLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSIsInZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVmFyaWFibGUiLCJnZXRWYXJpYWJsZSIsInN1YnN0aXR1dGlvblZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlIiwiZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TaW1wbGUiLCJpc1NpbXBsZSIsInNpbXBsZVN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZSIsImNvbXBsZXhTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uQ29tcGxleCIsImlzQ29tcGxleCIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJjb21wbGV4U3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25CIiwic3Vic3RpdHV0aW9uQlN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb25BIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5VmFyaWFibGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwidHJhY2UiLCJyZW1vdmVTdWJzdGl0dXRpb24iLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwiYXJyYXlBIiwiYXJyYXlCIiwiY29ycmVsYXRlcyIsInN1YnN0aXR1dGlvbkFJc0VRdWFsVG9TdWJzdGl0dXRpb25CIiwicmVzb2x2ZSIsImNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJyZXNvbHZlZCIsImlzUmVzb2x2ZWQiLCJhcmVSZXNvbHZlZCIsImNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCIsInNuYXBzaG90Iiwicm9sbGJhY2siLCJsZWZ0RGlmZmVyZW5jZSIsImNvbnRpbnVlIiwiRU1QVFlfU1RSSU5HIiwic3Vic3RpdHV0aW9uc1N0cmluZ0Zyb21TdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJFbGVtZW50IiwibmFtZSIsImVsZW1lbnRBIiwiYXJyYXlCSW5jbHVkZXNFbGVtZW50QSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7Ozt5QkFWK0I7OERBRVg7d0JBRUc7eUJBQ007c0JBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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