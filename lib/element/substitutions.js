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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzdWJzdGl0dXRpb25zU3RyaW5nRnJvbVN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCB7IGZpbmQsIGZpcnN0LCBjbGVhciwgcHJ1bmUsIGZpbHRlciwgZXh0cmFjdCwgY29tcHJlc3MsIGNvcnJlbGF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJzdGl0dXRpb25zIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXJyYXksIHNhdmVkQXJyYXkpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgIHRoaXMuc2F2ZWRBcnJheSA9IHNhdmVkQXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldFNhdmVkQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZWRBcnJheTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IFtdO1xuXG4gICAgdGhpcy5mb3JFYWNoU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGUoKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBtZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbXByZXNzKG1ldGF2YXJpYWJsZXMsIChtZXRhdmFyaWFibGVBLCBtZXRhdmFyaWFibGVCKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVBRXF1YWxUb01ldGF2YXJpYWJsZUIgPSBtZXRhdmFyaWFibGVCLmlzRXF1YWxUbyhtZXRhdmFyaWFibGVBKTtcblxuICAgICAgaWYgKCFtZXRhdmFyaWFibGVBRXF1YWxUb01ldGF2YXJpYWJsZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE5vblRyaXZpYWxMZW5ndGgoKSB7XG4gICAgY29uc3Qgbm9uVHJpdmlhbExlbmd0aCA9IHRoaXMucmVkdWNlU3Vic3RpdHV0aW9uKChub25Ucml2aWFsTGVuZ3RoLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblRyaXZpYWwgPSBzdWJzdGl0dXRpb24uaXNUcml2aWFsKCk7XG5cbiAgICAgIGlmICghc3Vic3RpdHV0aW9uVHJpdmlhbCkge1xuICAgICAgICBub25Ucml2aWFsTGVuZ3RoICs9IDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub25Ucml2aWFsTGVuZ3RoO1xuICAgIH0sIDApO1xuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxMZW5ndGg7XG4gIH1cblxuICBnZXRGaXJzdFN1YnN0aXR1dGlvbigpIHtcbiAgICBsZXQgZmlyc3RTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdFN1YnN0aXR1dGlvbiA9IGZpcnN0KHRoaXMuYXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoOyB9XG5cbiAgbWFwU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlTdWJzdGl0dXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlU3Vic3RpdHV0aW9uKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZXh0cmFjdFN1YnN0aXR1dGlvbihjYWxsYmNhaykgeyByZXR1cm4gZXh0cmFjdCh0aGlzLmFycmF5LCBjYWxsYmNhayk7IH1cblxuICBmaW5kU3Vic3RpdHV0aW9ucyhjYWxsYmFjaykge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBjb25zdCBhcnJheSA9IGZpbmQodGhpcy5hcnJheSwgY2FsbGJhY2spLFxuICAgICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgc3RyaW5nID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIHNhdmVkQXJyYXkgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbmV3IFN1YnN0aXR1dGlvbnMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSwgc2F2ZWRBcnJheSk7XG5cbiAgICBzdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNldFN0cmluZyhzdHJpbmcpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVmFyaWFibGVFcXVhbFRvVmFyaWFibGUgPSBzdWJzdGl0dXRpb25WYXJpYWJsZS5pc0VxdWFsVG8odmFyaWFibGUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25WYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGxleCA9IHN1YnN0aXR1dGlvbi5pc0NvbXBsZXgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBsZXgpIHtcbiAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gY29tcGxleFN1YnN0aXR1dGlvbi5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gdGhpcy5hc1N0cmluZygpOyAgLy8vXG5cbiAgICB0aGlzLmFycmF5LnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKTtcblxuICAgIHRoaXMuc2V0U3RyaW5nKHN0cmluZyk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucy5gKTtcbiAgfVxuXG4gIHJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHBydW5lKHRoaXMuYXJyYXksIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQSAhPT0gc3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN0cmluZzsgLy8vXG5cbiAgICB0aGlzLnNldFN0cmluZyhzdHJpbmcpO1xuXG4gICAgY29udGV4dC50cmFjZShgUmVtb3ZlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGZyb20gdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zLmApO1xuICB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3QgYXJyYXkgPSBzdWJzdGl0dXRpb25zLmdldEFycmF5KCksXG4gICAgICAgICAgYXJyYXlBID0gYXJyYXksIC8vL1xuICAgICAgICAgIGFycmF5QiA9IHRoaXMuYXJyYXksICAvLy9cbiAgICAgICAgICBjb3JyZWxhdGVzID0gY29ycmVsYXRlKGFycmF5QSwgYXJyYXlCLCAoc3Vic3RpdHV0aW9uQSwgc3Vic3RpdHV0aW9uQikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQUlzRVF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkFJc0VRdWFsVG9TdWJzdGl0dXRpb25CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvcnJlbGF0ZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjbGVhcih0aGlzLmFycmF5KTtcblxuICAgIHRoaXMuc2F2ZWRBcnJheSA9IG51bGw7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCk7XG5cbiAgICBtZXRhdmFyaWFibGVzLmZvckVhY2goKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgICAgbGV0IHJlc29sdmVkO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29tcGxleFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgICAgICAgcmVzb2x2ZWQgPSBzdWJzdGl0dXRpb24uaXNSZXNvbHZlZCgpO1xuXG4gICAgICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24ucmVzb2x2ZShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXJlUmVzb2x2ZWQoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIHJlc29sdmVkID0gbWV0YXZhcmlhYmxlcy5ldmVyeSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICBzbmFwc2hvdChjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVGFraW5nIGEgc25hcHNob3Qgb2YgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zLmApO1xuXG4gICAgdGhpcy5zYXZlZEFycmF5ID0gW1xuICAgICAgLi4udGhpcy5hcnJheVxuICAgIF07XG4gIH1cblxuICByb2xsYmFjayhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgUm9sbGluZyBiYWNrIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucy5gKTtcblxuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgLi4udGhpcy5hcnJheVxuICAgIF07XG5cbiAgICBsZWZ0RGlmZmVyZW5jZShhcnJheSwgdGhpcy5zYXZlZEFycmF5KTtcblxuICAgIGFycmF5LmZvckVhY2goKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXJyYXkgPSBbXG4gICAgICAuLi50aGlzLnNhdmVkQXJyYXlcbiAgICBdO1xuXG4gICAgdGhpcy5zYXZlZEFycmF5ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKTtcblxuICAgIHRoaXMuc2V0U3RyaW5nKHN0cmluZyk7XG4gIH1cblxuICBjb250aW51ZShjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29udGludWluZyB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucy5gKTtcblxuICAgIHRoaXMuc2F2ZWRBcnJheSA9IG51bGw7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIHN0cmluZyA9IEVNUFRZX1NUUklORztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuYXJyYXksIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKTtcblxuICAgICAgc3RyaW5nID0gc3Vic3RpdHV0aW9uc1N0cmluZzsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJzdGl0dXRpb25zXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYXJyYXkgPSBbXSxcbiAgICAgICAgICBzYXZlZEFycmF5ID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG5ldyBTdWJzdGl0dXRpb25zKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXJyYXksIHNhdmVkQXJyYXkpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBsZWZ0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmaW5kIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImNsZWFyIiwicHJ1bmUiLCJmaWx0ZXIiLCJleHRyYWN0IiwiY29tcHJlc3MiLCJjb3JyZWxhdGUiLCJkZWZpbmUiLCJTdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJhcnJheSIsInNhdmVkQXJyYXkiLCJnZXRBcnJheSIsImdldFNhdmVkQXJyYXkiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImZvckVhY2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJwdXNoIiwibWV0YXZhcmlhYmxlQSIsIm1ldGF2YXJpYWJsZUIiLCJtZXRhdmFyaWFibGVBRXF1YWxUb01ldGF2YXJpYWJsZUIiLCJpc0VxdWFsVG8iLCJnZXROb25Ucml2aWFsTGVuZ3RoIiwibm9uVHJpdmlhbExlbmd0aCIsInJlZHVjZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblRyaXZpYWwiLCJpc1RyaXZpYWwiLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsImZpcnN0U3Vic3RpdHV0aW9uIiwibGVuZ3RoIiwiZ2V0TGVuZ3RoIiwibWFwU3Vic3RpdHV0aW9uIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lU3Vic3RpdHV0aW9uIiwic29tZSIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwiZXZlcnkiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoIiwiZXh0cmFjdFN1YnN0aXR1dGlvbiIsImNhbGxiY2FrIiwiZmluZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiYXNTdHJpbmciLCJzZXRTdHJpbmciLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSIsInZhcmlhYmxlIiwiZmluZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblZhcmlhYmxlIiwiZ2V0VmFyaWFibGUiLCJzdWJzdGl0dXRpb25WYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSIsImZpbmRTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUiLCJjb21wbGV4U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbkNvbXBsZXgiLCJpc0NvbXBsZXgiLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwiY29tcGxleFN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJ0cmFjZSIsInJlbW92ZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25CIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsImFycmF5QSIsImFycmF5QiIsImNvcnJlbGF0ZXMiLCJzdWJzdGl0dXRpb25BSXNFUXVhbFRvU3Vic3RpdHV0aW9uQiIsInJlc29sdmUiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwicmVzb2x2ZWQiLCJpc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJzbmFwc2hvdCIsInJvbGxiYWNrIiwibGVmdERpZmZlcmVuY2UiLCJjb250aW51ZSIsIkVNUFRZX1NUUklORyIsInN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiRWxlbWVudCIsIm5hbWUiLCJlbGVtZW50QSIsImFycmF5QkluY2x1ZGVzRWxlbWVudEEiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7OEJBVHdCO3lCQUNPO3dCQUVSO3lCQUNNO3NCQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJELElBQVFBLE9BQW9FQyx5QkFBYyxDQUFsRkQsTUFBTUUsUUFBOERELHlCQUFjLENBQTVFQyxPQUFPQyxRQUF1REYseUJBQWMsQ0FBckVFLE9BQU9DLFFBQWdESCx5QkFBYyxDQUE5REcsT0FBT0MsU0FBeUNKLHlCQUFjLENBQXZESSxRQUFRQyxVQUFpQ0wseUJBQWMsQ0FBL0NLLFNBQVNDLFdBQXdCTix5QkFBYyxDQUF0Q00sVUFBVUMsWUFBY1AseUJBQWMsQ0FBNUJPO0lBRTlELFdBQWVDLElBQUFBLGdCQUFNLGtDQUFDOzthQUFNQyxjQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFVBQVU7Z0NBRDFCTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFL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