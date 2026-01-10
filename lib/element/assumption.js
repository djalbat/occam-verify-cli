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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _unify = require("../process/unify");
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
var _Assumption;
var _default = (0, _elements.define)((_Assumption = /*#__PURE__*/ function(Element) {
    _inherits(Assumption, Element);
    function Assumption(context, string, node, statement, reference) {
        _class_call_check(this, Assumption);
        var _this;
        _this = _call_super(this, Assumption, [
            context,
            string,
            node
        ]);
        _this.statement = statement;
        _this.reference = reference;
        return _this;
    }
    _create_class(Assumption, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.reference.getMetavariable();
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                var simple = this.statement === null;
                return simple;
            }
        },
        {
            key: "matchSubstitution",
            value: function matchSubstitution(substitution, context) {
                var substitutionMatches = false;
                var assumptionString = this.string, substitutionString = substitution.getString();
                context.trace("Matching the '".concat(substitutionString, "' substitution against the '").concat(assumptionString, "' assumption..."));
                var simple = this.isSimple();
                if (simple) {
                    var metavariable = this.reference.getMetavariable(), judgement = context.findJudgementByMetavariable(metavariable);
                    if (judgement !== null) {
                        var assumption = judgement.getDeclaration();
                        substitutionMatches = assumption.matchSubstitution(substitution, context);
                    }
                } else {
                    var statement = substitution.getStatement(), metavariable1 = substitution.getMetavariable(), statementEqualToStatement = this.statement.isEqualTo(statement), referenceMetavariableEqualToMetavariable = this.reference.isMetavariableEqualToMetavariable(metavariable1);
                    if (statementEqualToStatement && referenceMetavariableEqualToMetavariable) {
                        substitutionMatches = true;
                    }
                }
                if (substitutionMatches) {
                    context.debug("...matches the '".concat(assumptionString, "' substitution against the '").concat(substitutionString, "' assumption."));
                }
                return substitutionMatches;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var assumptionString = this.string; ///
                context.trace("Verifying the '".concat(assumptionString, "' assumption..."));
                var simple = this.isSimple();
                if (simple) {
                    var referenceVerifiesAsMetavariable = this.verifyReferenceAsMetavariable(assignments, stated, context);
                    verifies = referenceVerifiesAsMetavariable; ///
                } else {
                    var referenceVerified = this.verifyReference(assignments, stated, context);
                    if (referenceVerified) {
                        var statementValidates = this.validateStatement(assignments, stated, context);
                        if (statementValidates) {
                            var verifiesWhenStated = false, verifiesWhenDerived = false;
                            if (stated) {
                                verifiesWhenStated = this.verifyWhenStated(assignments, context);
                            } else {
                                verifiesWhenDerived = this.verifyWhenDerived(context);
                            }
                            if (verifiesWhenStated || verifiesWhenDerived) {
                                verifies = true;
                            }
                        }
                    }
                    if (verifies) {
                        context.debug("...verified the '".concat(assumptionString, "' assumption."));
                    }
                }
                return verifies;
            }
        },
        {
            key: "verifyReference",
            value: function verifyReference(assignments, stated, context) {
                var referenceVerified;
                var referenceString = this.reference.getString(), assumptionString = this.string; ///
                context.trace("Verifying the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference..."));
                referenceVerified = this.reference.verify(context);
                if (referenceVerified) {
                    context.debug("...verified the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference."));
                }
                return referenceVerified;
            }
        },
        {
            key: "validateStatement",
            value: function validateStatement(assignments, stated, context) {
                var statementValidates;
                if (this.statement === null) {
                    statementValidates = true;
                } else {
                    var statementString = this.statement.getString();
                    context.trace("Validating the '".concat(statementString, "' statement..."));
                    stated = true; ///
                    assignments = null; ///
                    statementValidates = this.statement.validate(assignments, stated, context);
                    if (statementValidates) {
                        context.debug("...validated the '".concat(statementString, "' statement."));
                    }
                }
                return statementValidates;
            }
        },
        {
            key: "verifyReferenceAsMetavariable",
            value: function verifyReferenceAsMetavariable(assignments, stated, context) {
                var referenceVerifiesAsMetavariable = false;
                var referenceString = this.reference.getString(), assumptionString = this.string; ///
                context.trace("Verifying the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference as s metavariable..."));
                var metavariable = this.reference.getMetavariable(), metavariableName = metavariable.getName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
                if (metavariablePresent) {
                    referenceVerifiesAsMetavariable = true;
                }
                if (referenceVerifiesAsMetavariable) {
                    context.debug("...verified the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference as a metavariable."));
                }
                return referenceVerifiesAsMetavariable;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var _this = this;
                var verifiesWhenStated;
                var assumptionString = this.string; ///
                context.trace("Verifying the '".concat(assumptionString, "' stated assumption..."));
                var metavariablePresent = context.isMetavariablePresentByReference(this.reference);
                if (metavariablePresent) {
                    verifiesWhenStated = true;
                } else {
                    var metaLemmaMetatheorems = context.findMetaLemmaMetatheoremsByReference(this.reference), metaLemmaMetatheoremsUnify = metaLemmaMetatheorems.every(function(metaLemmaMetatheorem) {
                        var metaLemmaMetatheoremUnifies = _this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                        if (metaLemmaMetatheoremUnifies) {
                            return true;
                        }
                    });
                    verifiesWhenStated = metaLemmaMetatheoremsUnify; ///
                }
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(assumptionString, "' stated assumption."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiesWhenDerived;
                var assumptionString = this.string; ///
                context.trace("Verifying the '".concat(assumptionString, "' derived assumption..."));
                var metaLemmaMetatheoremPresent = context.isMetaLemmaMetatheoremPresentByReference(this.reference);
                verifiesWhenDerived = metaLemmaMetatheoremPresent; ///
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(assumptionString, "' derived assumption."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnifies;
                var simple = this.isSimple();
                if (simple) {
                    statementUnifies = false;
                } else {
                    var context = generalContext, statementString = statement.getString(), assumptionStatementString = this.statement.getString();
                    context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(assumptionStatementString, "' statement..."));
                    var generalStatement = this.statement, specificStatement = statement, statementUUnifiesIntrinsically = (0, _unify.unifyStatementIntrinsically)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                    statementUnifies = statementUUnifiesIntrinsically; ///
                    if (statementUnifies) {
                        context.debug("...unified the '".concat(statementString, "' statement with the '").concat(assumptionStatementString, "' statement."));
                    }
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyLabel",
            value: function unifyLabel(label, substitutions, generalContext, specificContext) {
                var labelUnifiesWithReference;
                var context = generalContext, labelString = label.getString(), assumptionString = this.string; //;/
                context.trace("Unifying the '".concat(labelString, "' label with the '").concat(assumptionString, "' assumption..."));
                var labelUnifies = this.reference.unifyLabel(label, substitutions, context);
                labelUnifiesWithReference = labelUnifies; ///
                if (labelUnifiesWithReference) {
                    context.debug("...unified the '".concat(labelString, "' label with the '").concat(assumptionString, "' assumption."));
                }
                return labelUnifiesWithReference;
            }
        },
        {
            key: "unifyMetaLemmaMetatheorem",
            value: function unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
                var metaLemmaMetatheoremUnifies = false;
                var assumptionString = this.string, metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();
                context.trace("Unifying the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(assumptionString, "' assumption..."));
                var generalContext = context; ///
                context = metaLemmaMetatheorem.getContext(); ///
                var Substitutions = _elements.default.Substitutions, specificContext = context, labelSubstitutions = Substitutions.fromNothing(), label = metaLemmaMetatheorem.getLabel(), substitutions = labelSubstitutions, labelUnifies = this.unifyLabel(label, substitutions, generalContext, specificContext);
                if (labelUnifies) {
                    var statementSubstitutions = Substitutions.fromNothing(), statement = metaLemmaMetatheorem.getStatement(), substitutions1 = statementSubstitutions, statementUUnifies = this.unifyStatement(statement, substitutions1, generalContext, specificContext);
                    if (statementUUnifies) {
                        var labelSubstitutionsCorrelateStatementSubstitutions = labelSubstitutions.correlateSubstitutions(statementSubstitutions);
                        if (labelSubstitutionsCorrelateStatementSubstitutions) {
                            metaLemmaMetatheoremUnifies = true; ///
                        }
                    }
                }
                if (metaLemmaMetatheoremUnifies) {
                    context = generalContext; ///
                    context.trace("...unified the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(assumptionString, "' assumption..."));
                }
                return metaLemmaMetatheoremUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var json = null;
                var simple = this.isSimple();
                if (simple) {
                    var reference = this, referenceJSON = (0, _json.referenceToReferenceJSON)(reference);
                    json = referenceJSON; ///
                }
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var assumption = null;
                if (json !== null) {
                    var string = null, node = null, statement = null, reference = (0, _json.referenceFromJSON)(json, context);
                    assumption = new Assumption(string, node, statement, reference);
                }
                return assumption;
            }
        }
    ]);
    return Assumption;
}(_wrap_native_super(_element.default)), _define_property(_Assumption, "name", "Assumption"), _Assumption));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHJlZmVyZW5jZUZyb21KU09OLCByZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEFzc3VtcHRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7IH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdGF0ZW1lbnQgPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25NYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGFnYWluc3QgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IGp1ZGdlbWVudC5nZXREZWNsYXJhdGlvbigpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbk1hdGNoZXMgPSBhc3N1bXB0aW9uLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgJiYgcmVmZXJlbmNlTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICBzdWJzdGl0dXRpb25NYXRjaGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlcyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25NYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXNBc01ldGF2YXJpYWJsZSA9IHRoaXMudmVyaWZ5UmVmZXJlbmNlQXNNZXRhdmFyaWFibGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVzID0gcmVmZXJlbmNlVmVyaWZpZXNBc01ldGF2YXJpYWJsZTsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlmaWVkO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmVyaWZ5UmVmZXJlbmNlQXNNZXRhdmFyaWFibGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllc0FzTWV0YXZhcmlhYmxlID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBhcyBzIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHJlZmVyZW5jZVZlcmlmaWVzQXNNZXRhdmFyaWFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllc0FzTWV0YXZhcmlhYmxlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgYXMgYSBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlmaWVzQXNNZXRhdmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgc3RhdGVkIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbXMgPSBjb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbXNVbmlmeSA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtcy5ldmVyeSgobWV0YUxlbW1hTWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzID0gdGhpcy51bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXNVbmlmeTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50OyAvLy9cblxuICAgIGlmICh2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGRlcml2ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGFzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudCxcbiAgICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RhdGVtZW50VVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAgLy8vXG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vOy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbFVuaWZpZXMgPSB0aGlzLnJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UgPSBsYWJlbFVuaWZpZXM7IC8vL1xuXG4gICAgaWYgKGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2U7XG4gIH1cblxuICB1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0Q29udGV4dCgpOyAgLy8vXG5cbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBsYWJlbFN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbGFiZWwgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRMYWJlbCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsU3Vic3RpdHV0aW9uc0NvcnJlbGF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnRTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAobGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucykge1xuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQganNvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04ocmVmZXJlbmNlKTtcblxuICAgICAganNvbiA9IHJlZmVyZW5jZUpTT047ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBc3N1bXB0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbiA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gbnVsbCxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXNzdW1wdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJtYXRjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXMiLCJhc3N1bXB0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGUiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUiLCJhc3N1bXB0aW9uIiwiZ2V0RGVjbGFyYXRpb24iLCJzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsInJlZmVyZW5jZVZlcmlmaWVzQXNNZXRhdmFyaWFibGUiLCJ2ZXJpZnlSZWZlcmVuY2VBc01ldGF2YXJpYWJsZSIsInJlZmVyZW5jZVZlcmlmaWVkIiwidmVyaWZ5UmVmZXJlbmNlIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwicmVmZXJlbmNlU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidmFsaWRhdGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtcyIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtc1VuaWZ5IiwiZXZlcnkiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnQiLCJpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiYXNzdW1wdGlvblN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSIsInVuaWZ5TGFiZWwiLCJsYWJlbCIsImxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UiLCJsYWJlbFN0cmluZyIsImxhYmVsVW5pZmllcyIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwiZ2V0Q29udGV4dCIsIlN1YnN0aXR1dGlvbnMiLCJlbGVtZW50cyIsImxhYmVsU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiZ2V0TGFiZWwiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50VVVuaWZpZXMiLCJsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInRvSlNPTiIsImpzb24iLCJyZWZlcmVuY2VKU09OIiwicmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OIiwiZnJvbUpTT04iLCJyZWZlcmVuY2VGcm9tSlNPTiIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7Ozs4REFQb0I7Z0VBQ0M7cUJBR3VCO29CQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVELFdBQWVBLElBQUFBLGdCQUFNLCtCQUFDOzthQUFNQyxXQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRDdCTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLFNBQVMsR0FBR0E7Ozs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FB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