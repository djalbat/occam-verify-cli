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
            key: "getSignatureNode",
            value: function getSignatureNode() {
                var node = this.getNode(), signatureNode = node; ///
                return signatureNode;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies = false;
                var signatureString = this.getString(); ///
                context.trace("Verifying the '".concat(signatureString, "' signature..."));
                var terms = [], termsValidate = this.terms.every(function(term) {
                    term = term.validate(context, function() {
                        var validatesForwards = true;
                        return validatesForwards;
                    });
                    var termValidates = term !== null;
                    if (termValidates) {
                        terms.push(term);
                        return true;
                    }
                });
                if (termsValidate) {
                    this.terms = terms;
                    verifies = true;
                }
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
                            debugger;
                            // synthetically((context) => {
                            //   const { TermSubstitution } = elements;
                            //
                            //   TermSubstitution.fromTermAndVariable(term, variable, context);
                            //  validates...
                            // });
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
                debugger;
            }
        }
    ]);
    return Signature;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Signature, "name", "Signature"), _Signature));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHNpZ25hdHVyZVN0cmluZ0Zyb21UZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB0ZXJtc0Zyb21KU09OLCB0ZXJtc1RvVGVybXNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgbWF0Y2gsIGNvbXBhcmUsIGNvcnJlbGF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTaWduYXR1cmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIHRlcm1zVmFsaWRhdGUgPSB0aGlzLnRlcm1zLmV2ZXJ5KCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7IC8vL1xuICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSAodGVybSAhPT0gbnVsbCk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAodGVybXNWYWxpZGF0ZSkge1xuICAgICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuXG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGNvbXBhcmUoc2lnbmF0dXJlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBzaWduYXR1cmUuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtc0EgPSB0aGlzLnRlcm1zLCAgLy8vXG4gICAgICAgICAgdGVybXNCID0gdGVybXMsIC8vL1xuICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaCh0ZXJtc0EsIHRlcm1zQiwgKHRlcm1BLCB0ZXJtQikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybSA9IHRlcm1CLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXJtID0gdGVybUEsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuXG4gICAgICAgICAgICAgICAgLy8gc3ludGhldGljYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cztcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIC8vICB2YWxpZGF0ZXMuLi5cbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29tcGFyZXMgPSBtYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlcztcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc0NvbXBhcmVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBjb21wYXJlcyA9IGNvbXBhcmUodGhpcy50ZXJtcywgYXJyYXksICh0ZXJtLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblRlcm0gPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uVGVybS5pc0VxdWFsVG8odGVybSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoY29tcGFyZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNDb21wYXJlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc0NvbXBhcmVzO1xuICB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvcnJlbGF0aW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGNvbnN0IGFycmF5ID0gc3Vic3RpdHV0aW9ucy5nZXRBcnJheSgpLFxuICAgICAgICAgIGNvcnJlbGF0ZXMgPSBjb3JyZWxhdGUodGhpcy50ZXJtcywgYXJyYXksICh0ZXJtLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblRlcm0gPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uVGVybS5pc0VxdWFsVG8odGVybSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoY29ycmVsYXRlcykge1xuICAgICAgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25zQ29ycmVsYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29ycmVsYXRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtc1RvVGVybXNKU09OKHRoaXMudGVybXMpLFxuICAgICAgICAgIHRlcm1zID0gdGVybXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRlcm1zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpZ25hdHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgZGVidWdnZXJcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImNvbXBhcmUiLCJjb3JyZWxhdGUiLCJkZWZpbmUiLCJTaWduYXR1cmUiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm1zIiwiZ2V0VGVybXMiLCJnZXRTaWduYXR1cmVOb2RlIiwiZ2V0Tm9kZSIsInNpZ25hdHVyZU5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNpZ25hdHVyZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybXNWYWxpZGF0ZSIsImV2ZXJ5IiwidGVybSIsInZhbGlkYXRlIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0ZXJtVmFsaWRhdGVzIiwicHVzaCIsImRlYnVnIiwic2lnbmF0dXJlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybXNBIiwidGVybXNCIiwibWF0Y2hlcyIsInRlcm1BIiwidGVybUIiLCJ2YXJpYWJsZSIsInZhcmlhYmxlRnJvbVRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiY29tcGFyZXMiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNDb21wYXJlcyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImFycmF5IiwiZ2V0QXJyYXkiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25UZXJtIiwiZ2V0VGVybSIsInN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSIsImlzRXF1YWxUbyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyIsImNvcnJlbGF0ZXMiLCJ0b0pTT04iLCJ0ZXJtc0pTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwianNvbiIsImZyb21KU09OIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7OzhCQVR3Qjt5QkFDTzt3QkFFUjtzQkFDa0I7b0JBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhELElBQVFBLFFBQThCQyx5QkFBYyxDQUE1Q0QsT0FBT0UsVUFBdUJELHlCQUFjLENBQXJDQyxTQUFTQyxZQUFjRix5QkFBYyxDQUE1QkU7SUFFeEIsV0FBZUMsSUFBQUEsZ0JBQU0sOEJBQUM7O2FBQU1DLFVBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJ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