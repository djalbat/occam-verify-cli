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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _context = require("../utilities/context");
var _string = require("../utilities/string");
var _json = require("../utilities/json");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var _Signature;
var match = _necessary.arrayUtilities.match, compare = _necessary.arrayUtilities.compare, correlate = _necessary.arrayUtilities.correlate;
var _default = (0, _elements.define)((_Signature = /*#__PURE__*/ function(Element) {
    _inherits(Signature, Element);
    function Signature(context, string, node, terms) {
        _class_call_check(this, Signature);
        var _this;
        _this = _call_super(this, Signature, [
            context,
            string,
            node
        ]);
        _this.terms = terms;
        return _this;
    }
    _create_class(Signature, [
        {
            key: "getTerms",
            value: function getTerms() {
                return this.terms;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies;
                var signatureString = this.getString(); ///
                context.trace("Verifying the '".concat(signatureString, "' signature..."));
                verifies = this.terms.every(function(term) {
                    var termVerifies = term.verify(context, function() {
                        var verifiesAhead = true;
                        return verifiesAhead;
                    });
                    if (termVerifies) {
                        return true;
                    }
                });
                if (verifies) {
                    context.debug("...verified the '".concat(signatureString, "' signature."));
                }
                return verifies;
            }
        },
        {
            key: "compare",
            value: function compare(signature, substitutions, generalContext, specificContext) {
                var terms = signature.getTerms(), termsA = this.terms, termsB = terms, matches = match(termsA, termsB, function(termA, termB) {
                    var term = termB, context = generalContext, variable = variableFromTerm(term, context);
                    if (variable !== null) {
                        var term1 = termA, termType = term1.getType(), variableType = variable.getType(), termTypeEqualToOrSubTypeOfVariableType = termType.isEqualToOrSubTypeOf(variableType);
                        if (termTypeEqualToOrSubTypeOfVariableType) {
                            (0, _context.synthetically)(function(context) {
                                var TermSubstitution = _elements.default.TermSubstitution;
                                TermSubstitution.fromTermAndVariable(term1, variable, context);
                            });
                            return true;
                        }
                    }
                }), compares = matches; ///
                return compares;
            }
        },
        {
            key: "compareSubstitutions",
            value: function compareSubstitutions(substitutions, context) {
                var substitutionsCompares = false;
                var signatureString = this.getString(), substitutionsString = substitutions.asString();
                context.trace("Comparing the '".concat(substitutionsString, "' substitutions against the '").concat(signatureString, "' signature..."));
                var array = substitutions.getArray(), compares = compare(this.terms, array, function(term, substitution) {
                    var substitutionTerm = substitution.getTerm(), substitutionTermEqualToTerm = substitutionTerm.isEqualTo(term);
                    if (substitutionTermEqualToTerm) {
                        return true;
                    }
                });
                if (compares) {
                    substitutionsCompares = true;
                }
                if (substitutionsCompares) {
                    context.debug("...compared the '".concat(substitutionsString, "' substitutions against the '").concat(signatureString, "' signature."));
                }
                return substitutionsCompares;
            }
        },
        {
            key: "correlateSubstitutions",
            value: function correlateSubstitutions(substitutions, context) {
                var substitutionsCorrelates = false;
                var signatureString = this.getString(), substitutionsString = substitutions.asString();
                context.trace("Correlating the '".concat(substitutionsString, "' substitutions against the '").concat(signatureString, "' signature..."));
                var array = substitutions.getArray(), correlates = correlate(this.terms, array, function(term, substitution) {
                    var substitutionTerm = substitution.getTerm(), substitutionTermEqualToTerm = substitutionTerm.isEqualTo(term);
                    if (substitutionTermEqualToTerm) {
                        return true;
                    }
                });
                if (correlates) {
                    substitutionsCorrelates = true;
                }
                if (substitutionsCorrelates) {
                    context.debug("...correlated the '".concat(substitutionsString, "' substitutions against the '").concat(signatureString, "' signature."));
                }
                return substitutionsCorrelates;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var termsJSON = (0, _json.termsToTermsJSON)(this.terms), terms = termsJSON, json = {
                    terms: terms
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var terms = (0, _json.termsFromJSON)(json, context), signatureString = (0, _string.signatureStringFromTerms)(terms), string = signatureString, node = null, signature = new Signature(context, string, node, terms);
                return signature;
            }
        }
    ]);
    return Signature;
}(_wrap_native_super(_element.default)), _define_property(_Signature, "name", "Signature"), _Signature));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgc3ludGhldGljYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc2lnbmF0dXJlU3RyaW5nRnJvbVRlcm1zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHRlcm1zRnJvbUpTT04sIHRlcm1zVG9UZXJtc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBtYXRjaCwgY29tcGFyZSwgY29ycmVsYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNpZ25hdHVyZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgdmVyaWZpZXMgPSB0aGlzLnRlcm1zLmV2ZXJ5KCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgY29tcGFyZShzaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHNpZ25hdHVyZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1zQSA9IHRoaXMudGVybXMsICAvLy9cbiAgICAgICAgICB0ZXJtc0IgPSB0ZXJtcywgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoKHRlcm1zQSwgdGVybXNCLCAodGVybUEsIHRlcm1CKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gdGVybUIsIC8vL1xuICAgICAgICAgICAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtQSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICAgICAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgICAgICAgIHN5bnRoZXRpY2FsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgICAgICAgICAgIFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbXBhcmVzID0gbWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXM7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNDb21wYXJlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgYXJyYXkgPSBzdWJzdGl0dXRpb25zLmdldEFycmF5KCksXG4gICAgICAgICAgY29tcGFyZXMgPSBjb21wYXJlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvbXBhcmVzKSB7XG4gICAgICBzdWJzdGl0dXRpb25zQ29tcGFyZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNDb21wYXJlcztcbiAgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBjb3JyZWxhdGVzID0gY29ycmVsYXRlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvcnJlbGF0ZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvcnJlbGF0ZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0aGlzLnRlcm1zKSxcbiAgICAgICAgICB0ZXJtcyA9IHRlcm1zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTaWduYXR1cmVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzaWduYXR1cmVTdHJpbmcgPSBzaWduYXR1cmVTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgIHN0cmluZyA9IHNpZ25hdHVyZVN0cmluZywgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJjb21wYXJlIiwiY29ycmVsYXRlIiwiZGVmaW5lIiwiU2lnbmF0dXJlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtcyIsImdldFRlcm1zIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJzaWduYXR1cmVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImV2ZXJ5IiwidGVybSIsInRlcm1WZXJpZmllcyIsInZlcmlmaWVzQWhlYWQiLCJkZWJ1ZyIsInNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1zQSIsInRlcm1zQiIsIm1hdGNoZXMiLCJ0ZXJtQSIsInRlcm1CIiwidmFyaWFibGUiLCJ2YXJpYWJsZUZyb21UZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInN5bnRoZXRpY2FsbHkiLCJUZXJtU3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJmcm9tVGVybUFuZFZhcmlhYmxlIiwiY29tcGFyZXMiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNDb21wYXJlcyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImFycmF5IiwiZ2V0QXJyYXkiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25UZXJtIiwiZ2V0VGVybSIsInN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSIsImlzRXF1YWxUbyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyIsImNvcnJlbGF0ZXMiLCJ0b0pTT04iLCJ0ZXJtc0pTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwianNvbiIsImZyb21KU09OIiwidGVybXNGcm9tSlNPTiIsInNpZ25hdHVyZVN0cmluZ0Zyb21UZXJtcyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7Ozt5QkFaK0I7OERBRVg7Z0VBQ0M7dUJBR1M7c0JBQ1c7b0JBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxJQUFRQSxRQUE4QkMseUJBQWMsQ0FBNUNELE9BQU9FLFVBQXVCRCx5QkFBYyxDQUFyQ0MsU0FBU0MsWUFBY0YseUJBQWMsQ0FBNUJFO0lBRXhCLFdBQWVDLElBQUFBLGdCQUFNLDhCQUFDOzthQUFNQyxVQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLO2dDQURkSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxLQUFL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