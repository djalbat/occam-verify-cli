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
var _occamfurtle = require("occam-furtle");
var _necessary = require("necessary");
var _elements = require("../elements");
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
                                var TermSubstitution = elements.TermSubstitution;
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
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Signature, "name", "Signature"), _Signature));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHN5bnRoZXRpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHNpZ25hdHVyZVN0cmluZ0Zyb21UZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB0ZXJtc0Zyb21KU09OLCB0ZXJtc1RvVGVybXNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgbWF0Y2gsIGNvbXBhcmUsIGNvcnJlbGF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTaWduYXR1cmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIHZlcmlmaWVzID0gdGhpcy50ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGNvbXBhcmUoc2lnbmF0dXJlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBzaWduYXR1cmUuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtc0EgPSB0aGlzLnRlcm1zLCAgLy8vXG4gICAgICAgICAgdGVybXNCID0gdGVybXMsIC8vL1xuICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaCh0ZXJtc0EsIHRlcm1zQiwgKHRlcm1BLCB0ZXJtQikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybSA9IHRlcm1CLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXJtID0gdGVybUEsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBzeW50aGV0aWNhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzO1xuXG4gICAgICAgICAgICAgICAgICBUZXJtU3Vic3RpdHV0aW9uLmZyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb21wYXJlcyA9IG1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zQ29tcGFyZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9ucy5hc1N0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGNvbnN0IGFycmF5ID0gc3Vic3RpdHV0aW9ucy5nZXRBcnJheSgpLFxuICAgICAgICAgIGNvbXBhcmVzID0gY29tcGFyZSh0aGlzLnRlcm1zLCBhcnJheSwgKHRlcm0sIHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVGVybSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtKCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0gPSBzdWJzdGl0dXRpb25UZXJtLmlzRXF1YWxUbyh0ZXJtKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChjb21wYXJlcykge1xuICAgICAgc3Vic3RpdHV0aW9uc0NvbXBhcmVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc0NvbXBhcmVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zQ29tcGFyZXM7XG4gIH1cblxuICBjb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9ucy5hc1N0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29ycmVsYXRpbmcgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgYXJyYXkgPSBzdWJzdGl0dXRpb25zLmdldEFycmF5KCksXG4gICAgICAgICAgY29ycmVsYXRlcyA9IGNvcnJlbGF0ZSh0aGlzLnRlcm1zLCBhcnJheSwgKHRlcm0sIHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVGVybSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtKCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0gPSBzdWJzdGl0dXRpb25UZXJtLmlzRXF1YWxUbyh0ZXJtKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChjb3JyZWxhdGVzKSB7XG4gICAgICBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb3JyZWxhdGVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1zSlNPTiA9IHRlcm1zVG9UZXJtc0pTT04odGhpcy50ZXJtcyksXG4gICAgICAgICAgdGVybXMgPSB0ZXJtc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2lnbmF0dXJlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc2lnbmF0dXJlU3RyaW5nID0gc2lnbmF0dXJlU3RyaW5nRnJvbVRlcm1zKHRlcm1zKSxcbiAgICAgICAgICBzdHJpbmcgPSBzaWduYXR1cmVTdHJpbmcsIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiY29tcGFyZSIsImNvcnJlbGF0ZSIsImRlZmluZSIsIlNpZ25hdHVyZSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybXMiLCJnZXRUZXJtcyIsInZlcmlmeSIsInZlcmlmaWVzIiwic2lnbmF0dXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJldmVyeSIsInRlcm0iLCJ0ZXJtVmVyaWZpZXMiLCJ2ZXJpZmllc0FoZWFkIiwiZGVidWciLCJzaWduYXR1cmUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtc0EiLCJ0ZXJtc0IiLCJtYXRjaGVzIiwidGVybUEiLCJ0ZXJtQiIsInZhcmlhYmxlIiwidmFyaWFibGVGcm9tVGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsInZhcmlhYmxlVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJzeW50aGV0aWNhbGx5IiwiVGVybVN1YnN0aXR1dGlvbiIsImVsZW1lbnRzIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsImNvbXBhcmVzIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zQ29tcGFyZXMiLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwiYXNTdHJpbmciLCJhcnJheSIsImdldEFycmF5Iiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVGVybSIsImdldFRlcm0iLCJzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0iLCJpc0VxdWFsVG8iLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMiLCJjb3JyZWxhdGVzIiwidG9KU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1zRnJvbUpTT04iLCJzaWduYXR1cmVTdHJpbmdGcm9tVGVybXMiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7MkJBVndCO3lCQUNPO3dCQUVSO3VCQUNPO3NCQUNXO29CQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxJQUFRQSxRQUE4QkMseUJBQWMsQ0FBNUNELE9BQU9FLFVBQXVCRCx5QkFBYyxDQUFyQ0MsU0FBU0MsWUFBY0YseUJBQWMsQ0FBNUJFO0lBRXhCLFdBQWVDLElBQUFBLGdCQUFNLDhCQUFDOzthQUFNQyxVQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLO2dDQURkSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxLQUFLLEdBQUdBOzs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFB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