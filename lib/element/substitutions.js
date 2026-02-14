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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var first = _necessary.arrayUtilities.first, extract = _necessary.arrayUtilities.extract, correlate = _necessary.arrayUtilities.correlate;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzdWJzdGl0dXRpb25zU3RyaW5nRnJvbVN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCB7IGZpcnN0LCBleHRyYWN0LCBjb3JyZWxhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3Vic3RpdHV0aW9ucyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXROb25Ucml2aWFsTGVuZ3RoKCkge1xuICAgIGNvbnN0IG5vblRyaXZpYWxMZW5ndGggPSB0aGlzLnJlZHVjZVN1YnN0aXR1dGlvbigobm9uVHJpdmlhbExlbmd0aCwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ucml2aWFsID0gc3Vic3RpdHV0aW9uLmlzVHJpdmlhbCgpO1xuXG4gICAgICBpZiAoIXN1YnN0aXR1dGlvblRyaXZpYWwpIHtcbiAgICAgICAgbm9uVHJpdmlhbExlbmd0aCArPSAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9uVHJpdmlhbExlbmd0aDtcbiAgICB9LCAwKTtcblxuICAgIHJldHVybiBub25Ucml2aWFsTGVuZ3RoO1xuICB9XG5cbiAgZ2V0Rmlyc3RTdWJzdGl0dXRpb24oKSB7XG4gICAgbGV0IGZpcnN0U3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RTdWJzdGl0dXRpb24gPSBmaXJzdCh0aGlzLmFycmF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RTdWJzdGl0dXRpb247XG4gIH1cblxuICBleHRyYWN0U3Vic3RpdHV0aW9uKGNhbGxiY2FrKSB7IHJldHVybiBleHRyYWN0KHRoaXMuYXJyYXksIGNhbGxiY2FrKTsgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25WYXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSA9IHN1YnN0aXR1dGlvblZhcmlhYmxlLmlzRXF1YWxUbyh2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IGFycmF5ID0gc3Vic3RpdHV0aW9ucy5nZXRBcnJheSgpLFxuICAgICAgICAgIGFycmF5QSA9IGFycmF5LCAvLy9cbiAgICAgICAgICBhcnJheUIgPSB0aGlzLmFycmF5LCAgLy8vXG4gICAgICAgICAgY29ycmVsYXRlcyA9IGNvcnJlbGF0ZShhcnJheUEsIGFycmF5QiwgKHN1YnN0aXR1dGlvbkEsIHN1YnN0aXR1dGlvbkIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkFJc0VRdWFsVG9TdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25BSXNFUXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjb3JyZWxhdGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICBzdHJpbmcgPSBFTVBUWV9TVFJJTkc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmFycmF5LCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zU3RyaW5nRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHN0cmluZyA9IHN1YnN0aXR1dGlvbnNTdHJpbmc7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3Vic3RpdHV0aW9uc1wiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGFycmF5ID0gW10sXG4gICAgICAgICAgc2F2ZWRBcnJheSA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBuZXcgU3Vic3RpdHV0aW9ucyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5LCBzYXZlZEFycmF5KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZXh0cmFjdCIsImNvcnJlbGF0ZSIsImRlZmluZSIsIlN1YnN0aXR1dGlvbnMiLCJnZXROb25Ucml2aWFsTGVuZ3RoIiwibm9uVHJpdmlhbExlbmd0aCIsInJlZHVjZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblRyaXZpYWwiLCJpc1RyaXZpYWwiLCJnZXRGaXJzdFN1YnN0aXR1dGlvbiIsImZpcnN0U3Vic3RpdHV0aW9uIiwibGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiYXJyYXkiLCJleHRyYWN0U3Vic3RpdHV0aW9uIiwiY2FsbGJjYWsiLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSIsInZhcmlhYmxlIiwiZmluZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblZhcmlhYmxlIiwiZ2V0VmFyaWFibGUiLCJzdWJzdGl0dXRpb25WYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSIsImlzRXF1YWxUbyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0QXJyYXkiLCJhcnJheUEiLCJhcnJheUIiLCJjb3JyZWxhdGVzIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvbkIiLCJzdWJzdGl0dXRpb25BSXNFUXVhbFRvU3Vic3RpdHV0aW9uQiIsImFzU3RyaW5nIiwic3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsInN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiY29udGV4dCIsIm5vZGUiLCJzYXZlZEFycmF5IiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7OzhCQVR3Qjt5QkFDTzt3QkFFUjt5QkFDTTtzQkFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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