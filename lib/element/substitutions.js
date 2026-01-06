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
var find = _necessary.arrayUtilities.find, first = _necessary.arrayUtilities.first, clear = _necessary.arrayUtilities.clear, prune = _necessary.arrayUtilities.prune, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress, correlate = _necessary.arrayUtilities.correlate;
var _default = (0, _elements.define)(/*#__PURE__*/ function(Element) {
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
                context.trace("Added the '".concat(substitutionString, "' substitution."));
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
                context.trace("Removed the '".concat(substitutionString, "' substitution."));
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
}(_wrap_native_super(_element.default)));
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaW5kLCBmaXJzdCwgY2xlYXIsIHBydW5lLCBmaWx0ZXIsIGNvbXByZXNzLCBjb3JyZWxhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3Vic3RpdHV0aW9ucyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5LCBzYXZlZEFycmF5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBzYXZlZEFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRTYXZlZEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLnNhdmVkQXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IFtdO1xuXG4gICAgdGhpcy5mb3JFYWNoU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGUoKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBtZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbXByZXNzKG1ldGF2YXJpYWJsZXMsIChtZXRhdmFyaWFibGVBLCBtZXRhdmFyaWFibGVCKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVBRXF1YWxUb01ldGF2YXJpYWJsZUIgPSBtZXRhdmFyaWFibGVCLmlzRXF1YWxUbyhtZXRhdmFyaWFibGVBKTtcblxuICAgICAgaWYgKCFtZXRhdmFyaWFibGVBRXF1YWxUb01ldGF2YXJpYWJsZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE5vblRyaXZpYWxMZW5ndGgoKSB7XG4gICAgY29uc3Qgbm9uVHJpdmlhbExlbmd0aCA9IHRoaXMucmVkdWNlU3Vic3RpdHV0aW9uKChub25Ucml2aWFsTGVuZ3RoLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblRyaXZpYWwgPSBzdWJzdGl0dXRpb24uaXNUcml2aWFsKCk7XG5cbiAgICAgIGlmICghc3Vic3RpdHV0aW9uVHJpdmlhbCkge1xuICAgICAgICBub25Ucml2aWFsTGVuZ3RoICs9IDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub25Ucml2aWFsTGVuZ3RoO1xuICAgIH0sIDApO1xuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxMZW5ndGg7XG4gIH1cblxuICBnZXRGaXJzdFN1YnN0aXR1dGlvbigpIHtcbiAgICBsZXQgZmlyc3RTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdFN1YnN0aXR1dGlvbiA9IGZpcnN0KHRoaXMuYXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIG1hcFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyB9ICAvLy9cblxuICBzb21lU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlU3Vic3RpdHV0aW9uKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbnMoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheSA9IGZpbmQodGhpcy5hcnJheSwgY2FsbGJhY2spLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21BcnJheShhcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25WYXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSA9IHN1YnN0aXR1dGlvblZhcmlhYmxlLmlzRXF1YWxUbyh2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblNpbXBsZSA9IHN1YnN0aXR1dGlvbi5pc1NpbXBsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uU2ltcGxlKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gc2ltcGxlU3Vic3RpdHV0aW9uLmlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGxleCA9IHN1YnN0aXR1dGlvbi5pc0NvbXBsZXgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBsZXgpIHtcbiAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gY29tcGxleFN1YnN0aXR1dGlvbi5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uQlN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uQi5pc1N1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uQSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uQSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pOyAgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gIH1cblxuICByZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICBwcnVuZSh0aGlzLmFycmF5LCAoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkEgIT09IHN1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZW1vdmVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gIH1cblxuICBjb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBhcnJheUEgPSBhcnJheSwgLy8vXG4gICAgICAgICAgYXJyYXlCID0gdGhpcy5hcnJheSwgIC8vL1xuICAgICAgICAgIGNvcnJlbGF0ZXMgPSBjb3JyZWxhdGUoYXJyYXlBLCBhcnJheUIsIChzdWJzdGl0dXRpb25BLCBzdWJzdGl0dXRpb25CKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25BSXNFUXVhbFRvU3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQUlzRVF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29ycmVsYXRlcztcbiAgfVxuXG4gIHJlbW92ZVRyaXZpYWxTdWJzdGl0dXRpb25zKCkgIHtcbiAgICBmaWx0ZXIodGhpcy5hcnJheSwgKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgdHJpdmlhbCA9IHN1YnN0aXR1dGlvbi5pc1RyaXZpYWwoKTtcblxuICAgICAgaWYgKCF0cml2aWFsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgY2xlYXIodGhpcy5hcnJheSk7XG5cbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgbWV0YXZhcmlhYmxlcy5mb3JFYWNoKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGxldCByZXNvbHZlZDtcblxuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbXBsZXhTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICAgICAgICAgIHJlc29sdmVkID0gc3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLnJlc29sdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFyZVJlc29sdmVkKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICByZXNvbHZlZCA9IG1ldGF2YXJpYWJsZXMuZXZlcnkoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb24uaXNSZXNvbHZlZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgc25hcHNob3QoKSB7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gW1xuICAgICAgLi4udGhpcy5hcnJheVxuICAgIF07XG4gIH1cblxuICByb2xsYmFjayhjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAuLi50aGlzLmFycmF5XG4gICAgXTtcblxuICAgIGxlZnREaWZmZXJlbmNlKGFycmF5LCB0aGlzLnNhdmVkQXJyYXkpO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcnJheSA9IFtcbiAgICAgIC4uLnRoaXMuc2F2ZWRBcnJheVxuICAgIF07XG5cbiAgICB0aGlzLnNhdmVkQXJyYXkgPSBudWxsO1xuICB9XG5cbiAgY29udGludWUoKSB7XG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgc3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zU3RyaW5nID0gdGhpcy5hcnJheS5yZWR1Y2UoKHN1YnN0aXR1dGlvbnNTdHJpbmcsIHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IChzdWJzdGl0dXRpb25zU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1YnN0aXR1dGlvbnNTdHJpbmd9LCAke3N1YnN0aXR1dGlvblN0cmluZ31gO1xuXG4gICAgICAgIHJldHVybiBzdWJzdGl0dXRpb25zU3RyaW5nO1xuICAgICAgfSwgbnVsbCk7XG5cbiAgICAgIHN0cmluZyA9IHN1YnN0aXR1dGlvbnNTdHJpbmc7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KSB7XG4gICAgY29uc3Qgc2F2ZWRBcnJheSA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHNhdmVkQXJyYXkgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGxlZnREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImZpbmQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiY2xlYXIiLCJwcnVuZSIsImZpbHRlciIsImNvbXByZXNzIiwiY29ycmVsYXRlIiwiZGVmaW5lIiwiU3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYXJyYXkiLCJzYXZlZEFycmF5IiwiZ2V0QXJyYXkiLCJnZXRTYXZlZEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0TWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXMiLCJmb3JFYWNoU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwicHVzaCIsIm1ldGF2YXJpYWJsZUEiLCJtZXRhdmFyaWFibGVCIiwibWV0YXZhcmlhYmxlQUVxdWFsVG9NZXRhdmFyaWFibGVCIiwiaXNFcXVhbFRvIiwiZ2V0Tm9uVHJpdmlhbExlbmd0aCIsIm5vblRyaXZpYWxMZW5ndGgiLCJyZWR1Y2VTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ucml2aWFsIiwiaXNUcml2aWFsIiwiZ2V0Rmlyc3RTdWJzdGl0dXRpb24iLCJmaXJzdFN1YnN0aXR1dGlvbiIsIm1hcFN1YnN0aXR1dGlvbiIsImNhbGxiYWNrIiwibWFwIiwiZmluZFN1YnN0aXR1dGlvbiIsInNvbWVTdWJzdGl0dXRpb24iLCJzb21lIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJldmVyeSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2giLCJmaW5kU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJmcm9tQXJyYXkiLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSIsInZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVmFyaWFibGUiLCJnZXRWYXJpYWJsZSIsInN1YnN0aXR1dGlvblZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlIiwiZmluZFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TaW1wbGUiLCJpc1NpbXBsZSIsInNpbXBsZVN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZSIsImNvbXBsZXhTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uQ29tcGxleCIsImlzQ29tcGxleCIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJjb21wbGV4U3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25CIiwic3Vic3RpdHV0aW9uQlN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb25BIiwiaXNTdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uIiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlWYXJpYWJsZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwicmVtb3ZlU3Vic3RpdHV0aW9uIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsImFycmF5QSIsImFycmF5QiIsImNvcnJlbGF0ZXMiLCJzdWJzdGl0dXRpb25BSXNFUXVhbFRvU3Vic3RpdHV0aW9uQiIsInJlbW92ZVRyaXZpYWxTdWJzdGl0dXRpb25zIiwidHJpdmlhbCIsInJlc29sdmUiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwicmVzb2x2ZWQiLCJpc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJzbmFwc2hvdCIsInJvbGxiYWNrIiwibGVmdERpZmZlcmVuY2UiLCJjb250aW51ZSIsImFzU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImZyb21Ob3RoaW5nIiwiRWxlbWVudCIs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