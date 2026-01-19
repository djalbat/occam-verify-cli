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
                var signatureString = this.string; ///
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
                            var substitution = (0, _context.synthetically)(function(context) {
                                var TermSubstitution = _elements.default.TermSubstitution, termSubstitution = TermSubstitution.fromTermAndVariable(term1, variable, context), substitution = termSubstitution; ///
                                return substitution;
                            });
                            substitutions.addSubstitution(substitution, context);
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
                var signatureString = this.string, substitutionsString = substitutions.asString();
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
                var signatureString = this.string, substitutionsString = substitutions.asString();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgc3ludGhldGljYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc2lnbmF0dXJlU3RyaW5nRnJvbVRlcm1zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHRlcm1zRnJvbUpTT04sIHRlcm1zVG9UZXJtc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBtYXRjaCwgY29tcGFyZSwgY29ycmVsYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNpZ25hdHVyZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIHZlcmlmaWVzID0gdGhpcy50ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGNvbXBhcmUoc2lnbmF0dXJlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBzaWduYXR1cmUuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtc0EgPSB0aGlzLnRlcm1zLCAgLy8vXG4gICAgICAgICAgdGVybXNCID0gdGVybXMsIC8vL1xuICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaCh0ZXJtc0EsIHRlcm1zQiwgKHRlcm1BLCB0ZXJtQikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybSA9IHRlcm1CLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXJtID0gdGVybUEsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzeW50aGV0aWNhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb21wYXJlcyA9IG1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zQ29tcGFyZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBjb21wYXJlcyA9IGNvbXBhcmUodGhpcy50ZXJtcywgYXJyYXksICh0ZXJtLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblRlcm0gPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uVGVybS5pc0VxdWFsVG8odGVybSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoY29tcGFyZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNDb21wYXJlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc0NvbXBhcmVzO1xuICB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBjb3JyZWxhdGVzID0gY29ycmVsYXRlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvcnJlbGF0ZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvcnJlbGF0ZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0aGlzLnRlcm1zKSxcbiAgICAgICAgICB0ZXJtcyA9IHRlcm1zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTaWduYXR1cmVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzaWduYXR1cmVTdHJpbmcgPSBzaWduYXR1cmVTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgIHN0cmluZyA9IHNpZ25hdHVyZVN0cmluZywgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJjb21wYXJlIiwiY29ycmVsYXRlIiwiZGVmaW5lIiwiU2lnbmF0dXJlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtcyIsImdldFRlcm1zIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJzaWduYXR1cmVTdHJpbmciLCJ0cmFjZSIsImV2ZXJ5IiwidGVybSIsInRlcm1WZXJpZmllcyIsInZlcmlmaWVzQWhlYWQiLCJkZWJ1ZyIsInNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1zQSIsInRlcm1zQiIsIm1hdGNoZXMiLCJ0ZXJtQSIsInRlcm1CIiwidmFyaWFibGUiLCJ2YXJpYWJsZUZyb21UZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInN1YnN0aXR1dGlvbiIsInN5bnRoZXRpY2FsbHkiLCJUZXJtU3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsImNvbXBhcmVzIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zQ29tcGFyZXMiLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwiYXNTdHJpbmciLCJhcnJheSIsImdldEFycmF5Iiwic3Vic3RpdHV0aW9uVGVybSIsImdldFRlcm0iLCJzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0iLCJpc0VxdWFsVG8iLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMiLCJjb3JyZWxhdGVzIiwidG9KU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1zRnJvbUpTT04iLCJzaWduYXR1cmVTdHJpbmdGcm9tVGVybXMiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7eUJBWitCOzhEQUVYO2dFQUNDO3VCQUdTO3NCQUNXO29CQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEQsSUFBUUEsUUFBOEJDLHlCQUFjLENBQTVDRCxPQUFPRSxVQUF1QkQseUJBQWMsQ0FBckNDLFNBQVNDLFlBQWNGLHlCQUFjLENBQTVCRTtJQUV4QixXQUFlQyxJQUFBQSxnQkFBTSw4QkFBQzs7YUFBTUMsVUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSztnQ0FEZEo7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsS0FBSyxHQUFHQTs7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9MLE9BQU87Z0JBQ1osSUFBSU07Z0JBRUosSUFBTUMsa0JBQWtCLElBQUksQ0FBQ04sTUFBTSxFQUFHLEdBQUc7Z0JBRXpDRCxRQUFRUSxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJELGlCQUFnQjtnQkFFaERELFdBQVcsSUFBSSxDQUFDSCxLQUFLLENBQUNNLEtBQUssQ0FBQyxTQUFDQztvQkFDM0IsSUFBTUMsZUFBZUQsS0FBS0wsTUFBTSxDQUFDTCxTQUFTO3dCQUN4QyxJQUFNWSxnQkFBZ0I7d0JBRXRCLE9BQU9BO29CQUNUO29CQUVBLElBQUlELGNBQWM7d0JBQ2hCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSUwsVUFBVTtvQkFDWk4sUUFBUWEsS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCTixpQkFBZ0I7Z0JBQ3BEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBVixLQUFBQTttQkFBQUEsU0FBQUEsUUFBUWtCLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQy9ELElBQU1kLFFBQVFXLFVBQVVWLFFBQVEsSUFDMUJjLFNBQVMsSUFBSSxDQUFDZixLQUFLLEVBQ25CZ0IsU0FBU2hCLE9BQ1RpQixVQUFVMUIsTUFBTXdCLFFBQVFDLFFBQVEsU0FBQ0UsT0FBT0M7b0JBQ3RDLElBQU1aLE9BQU9ZLE9BQ1B0QixVQUFVZ0IsZ0JBQ1ZPLFdBQVdDLGlCQUFpQmQsTUFBTVY7b0JBRXhDLElBQUl1QixhQUFhLE1BQU07d0JBQ3JCLElBQU1iLFFBQU9XLE9BQ1BJLFdBQVdmLE1BQUtnQixPQUFPLElBQ3ZCQyxlQUFlSixTQUFTRyxPQUFPLElBQy9CRSx5Q0FBeUNILFNBQVNJLG9CQUFvQixDQUFDRjt3QkFFN0UsSUFBSUMsd0NBQXdDOzRCQUMxQyxJQUFNRSxlQUFlQyxJQUFBQSxzQkFBYSxFQUFDLFNBQUMvQjtnQ0FDbEMsSUFBTSxBQUFFZ0MsbUJBQXFCQyxpQkFBUSxDQUE3QkQsa0JBQ0ZFLG1CQUFtQkYsaUJBQWlCRyxtQkFBbUIsQ0FBQ3pCLE9BQU1hLFVBQVV2QixVQUN4RThCLGVBQWVJLGtCQUFtQixHQUFHO2dDQUUzQyxPQUFPSjs0QkFDVDs0QkFFQWYsY0FBY3FCLGVBQWUsQ0FBQ04sY0FBYzlCOzRCQUU1QyxPQUFPO3dCQUNUO29CQUNGO2dCQUNGLElBQ0FxQyxXQUFXakIsU0FBUyxHQUFHO2dCQUU3QixPQUFPaUI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJ2QixhQUFhLEVBQUVmLE9BQU87Z0JBQ3pDLElBQUl1Qyx3QkFBd0I7Z0JBRTVCLElBQU1oQyxrQkFBa0IsSUFBSSxDQUFDTixNQUFNLEVBQzdCdUMsc0JBQXNCekIsY0FBYzBCLFFBQVE7Z0JBRWxEekMsUUFBUVEsS0FBSyxDQUFDLEFBQUMsa0JBQW9FRCxPQUFuRGlDLHFCQUFvQixpQ0FBK0MsT0FBaEJqQyxpQkFBZ0I7Z0JBRW5HLElBQU1tQyxRQUFRM0IsY0FBYzRCLFFBQVEsSUFDOUJOLFdBQVd6QyxRQUFRLElBQUksQ0FBQ08sS0FBSyxFQUFFdUMsT0FBTyxTQUFDaEMsTUFBTW9CO29CQUMzQyxJQUFNYyxtQkFBbUJkLGFBQWFlLE9BQU8sSUFDdkNDLDhCQUE4QkYsaUJBQWlCRyxTQUFTLENBQUNyQztvQkFFL0QsSUFBSW9DLDZCQUE2Qjt3QkFDL0IsT0FBTztvQkFDVDtnQkFDRjtnQkFFTixJQUFJVCxVQUFVO29CQUNaRSx3QkFBd0I7Z0JBQzFCO2dCQUVBLElBQUlBLHVCQUF1QjtvQkFDekJ2QyxRQUFRYSxLQUFLLENBQUMsQUFBQyxvQkFBc0VOLE9BQW5EaUMscUJBQW9CLGlDQUErQyxPQUFoQmpDLGlCQUFnQjtnQkFDdkc7Z0JBRUEsT0FBT2dDO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCakMsYUFBYSxFQUFFZixPQUFPO2dCQUMzQyxJQUFJaUQsMEJBQTBCO2dCQUU5QixJQUFNMUMsa0JBQWtCLElBQUksQ0FBQ04sTUFBTSxFQUM3QnVDLHNCQUFzQnpCLGNBQWMwQixRQUFRO2dCQUVsRHpDLFFBQVFRLEtBQUssQ0FBQyxBQUFDLG9CQUFzRUQsT0FBbkRpQyxxQkFBb0IsaUNBQStDLE9BQWhCakMsaUJBQWdCO2dCQUVyRyxJQUFNbUMsUUFBUTNCLGNBQWM0QixRQUFRLElBQzlCTyxhQUFhckQsVUFBVSxJQUFJLENBQUNNLEtBQUssRUFBRXVDLE9BQU8sU0FBQ2hDLE1BQU1vQjtvQkFDL0MsSUFBTWMsbUJBQW1CZCxhQUFhZSxPQUFPLElBQ3ZDQyw4QkFBOEJGLGlCQUFpQkcsU0FBUyxDQUFDckM7b0JBRS9ELElBQUlvQyw2QkFBNkI7d0JBQy9CLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRU4sSUFBSUksWUFBWTtvQkFDZEQsMEJBQTBCO2dCQUM1QjtnQkFFQSxJQUFJQSx5QkFBeUI7b0JBQzNCakQsUUFBUWEsS0FBSyxDQUFDLEFBQUMsc0JBQXdFTixPQUFuRGlDLHFCQUFvQixpQ0FBK0MsT0FBaEJqQyxpQkFBZ0I7Z0JBQ3pHO2dCQUVBLE9BQU8wQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVlDLElBQUFBLHNCQUFnQixFQUFDLElBQUksQ0FBQ2xELEtBQUssR0FDdkNBLFFBQVFpRCxXQUNSRSxPQUFPO29CQUNMbkQsT0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT21EO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFdEQsT0FBTztnQkFDM0IsSUFBTUcsUUFBUXFELElBQUFBLG1CQUFhLEVBQUNGLE1BQU10RCxVQUM1Qk8sa0JBQWtCa0QsSUFBQUEsZ0NBQXdCLEVBQUN0RCxRQUMzQ0YsU0FBU00saUJBQ1RMLE9BQU8sTUFDUFksWUFBWSxJQUFJZixVQUFVQyxTQUFTQyxRQUFRQyxNQUFNQztnQkFFdkQsT0FBT1c7WUFDVDs7OztxQkF0SjRDNEMsZ0JBQU8sSUE0SW5ELDZCQUFPQyxRQUFPIn0=