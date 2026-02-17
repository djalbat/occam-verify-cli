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
var _elements = require("../elements");
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
    function Assumption(context, string, node, reference, statement) {
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
            key: "compareSubstitution",
            value: function compareSubstitution(substitution, context) {
                var comparesToSubstituion = false;
                var assumptionString = this.getString(), substitutionString = substitution.getString();
                context.trace("Comparing the '".concat(assumptionString, "' assumption to the '").concat(substitutionString, "' substitution..."));
                var statement = substitution.getStatement(), metavariable = substitution.getMetavariable(generalContext, specificContext), statementEqualToStatement = this.statement.isEqualTo(statement), referenceMetavariableComparesToMetavariable = this.reference.compareMetavariable(metavariable);
                if (statementEqualToStatement && referenceMetavariableComparesToMetavariable) {
                    comparesToSubstituion = true;
                }
                if (comparesToSubstituion) {
                    context.debug("...compared the '".concat(substitutionString, "' assumption to the '").concat(assumptionString, "' substitution."));
                }
                return comparesToSubstituion;
            }
        },
        {
            key: "validate",
            value: function validate(assignments, stated, context) {
                var validates = false;
                var assumptionString = this.getString(); ///
                context.trace("Validating the '".concat(assumptionString, "' assumption..."));
                var referenceValidates = this.validateReference(assignments, stated, context);
                if (referenceValidates) {
                    var statementValidates = this.validateStatement(assignments, stated, context);
                    if (statementValidates) {
                        var validatesWhenStated = false, validatesWhenDerived = false;
                        if (stated) {
                            validatesWhenStated = this.validateWhenStated(assignments, context);
                        } else {
                            validatesWhenDerived = this.validateWhenDerived(context);
                        }
                        if (validatesWhenStated || validatesWhenDerived) {
                            validates = true;
                        }
                    }
                }
                if (validates) {
                    context.debug("...validated the '".concat(assumptionString, "' assumption."));
                }
                return validates;
            }
        },
        {
            key: "validateReference",
            value: function validateReference(assignments, stated, context) {
                var referenceValidates;
                var assumptionString = this.getString(), referenceString = this.reference.getString();
                context.trace("Validating the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference..."));
                referenceValidates = this.reference.validate(context);
                if (referenceValidates) {
                    context.debug("...validated the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' statement."));
                }
                return referenceValidates;
            }
        },
        {
            key: "validateStatement",
            value: function validateStatement(assignments, stated, context) {
                var statementValidates;
                var assumptionString = this.getString(), statementString = this.statement.getString();
                context.trace("Validating the '".concat(assumptionString, "' assumption's '").concat(statementString, "' statement..."));
                stated = true; ///
                assignments = null; ///
                statementValidates = this.statement.validate(assignments, stated, context);
                if (statementValidates) {
                    context.debug("...validated the '".concat(assumptionString, "' assumption's '").concat(statementString, "' statement."));
                }
                return statementValidates;
            }
        },
        {
            key: "validateReferenceAsMetavariable",
            value: function validateReferenceAsMetavariable(assignments, stated, context) {
                var referenceValidatesAsMetavariable;
                var referenceString = this.reference.getString(), assumptionString = this.getString(); ///
                context.trace("Validating the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference as s metavariable..."));
                referenceValidatesAsMetavariable = this.reference.validateAsMetavariable(context);
                if (referenceValidatesAsMetavariable) {
                    context.debug("...validated the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference as a metavariable."));
                }
                return referenceValidatesAsMetavariable;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(assignments, context) {
                var _this = this;
                var validatesWhenStated;
                var assumptionString = this.getString(); ///
                context.trace("Validating the '".concat(assumptionString, "' stated assumption..."));
                var metavariablePresent = context.isMetavariablePresentByReference(this.reference);
                if (metavariablePresent) {
                    validatesWhenStated = true;
                } else {
                    var topLevelMetaAssertions = context.findTopLevelMetaAssertionsByReference(this.reference), topLevelMetaAssertionsUnify = topLevelMetaAssertions.every(function(topLevelMetaAssertion) {
                        var topLevelMetaAssertionUnifies = _this.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
                        if (topLevelMetaAssertionUnifies) {
                            return true;
                        }
                    });
                    validatesWhenStated = topLevelMetaAssertionsUnify; ///
                }
                if (validatesWhenStated) {
                    context.debug("...validated the '".concat(assumptionString, "' stated assumption."));
                }
                return validatesWhenStated;
            }
        },
        {
            key: "validateWhenDerived",
            value: function validateWhenDerived(context) {
                var validatesWhenDerived;
                var assumptionString = this.getString(); ///
                context.trace("Validating the '".concat(assumptionString, "' derived assumption..."));
                var topLevelMetaAssertionPresent = context.isTopLevelMetaAssertionPresentByReference(this.reference);
                validatesWhenDerived = topLevelMetaAssertionPresent; ///
                if (validatesWhenDerived) {
                    context.debug("...validated the '".concat(assumptionString, "' derived assumption."));
                }
                return validatesWhenDerived;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext1, specificContext1) {
                var statementUnifies;
                var context = generalContext1, statementString = statement.getString(), assumptionStatementString = this.statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(assumptionStatementString, "' statement..."));
                var generalStatement = this.statement, specificStatement = statement, statementUUnifiesIntrinsically = (0, _unify.unifyStatementIntrinsically)(generalStatement, specificStatement, substitutions, generalContext1, specificContext1);
                statementUnifies = statementUUnifiesIntrinsically; ///
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(assumptionStatementString, "' statement."));
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyLabel",
            value: function unifyLabel(label, substitutions, generalContext1, specificContext1) {
                var labelUnifiesWithReference;
                var context = generalContext1, labelString = label.getString(), assumptionString = this.getString(); //;/
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
            key: "unifyTopLevelMetaAssertion",
            value: function unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
                var topLevelMetaAssertionUnifies = false;
                var assumptionString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
                context.trace("Unifying the '".concat(topLevelMetaAssertionString, "' top level meta-assertion with the '").concat(assumptionString, "' assumption..."));
                var generalContext1 = context; ///
                context = topLevelMetaAssertion.getContext(); ///
                var specificContext1 = context, labelSubstitutions = [], label = topLevelMetaAssertion.getLabel(), substitutions = labelSubstitutions, labelUnifies = this.unifyLabel(label, substitutions, generalContext1, specificContext1);
                if (labelUnifies) {
                    var statementSubstitutions = [], statement = topLevelMetaAssertion.getStatement(), substitutions1 = statementSubstitutions, statementUUnifies = this.unifyStatement(statement, substitutions1, generalContext1, specificContext1);
                    if (statementUUnifies) {
                        var labelSubstitutionsCorrelateStatementSubstitutions = labelSubstitutions.correlateSubstitutions(statementSubstitutions);
                        if (labelSubstitutionsCorrelateStatementSubstitutions) {
                            topLevelMetaAssertionUnifies = true; ///
                        }
                    }
                }
                if (topLevelMetaAssertionUnifies) {
                    context = generalContext1; ///
                    context.trace("...unified the '".concat(topLevelMetaAssertionString, "' top level meta-assertion with the '").concat(assumptionString, "' assumption..."));
                }
                return topLevelMetaAssertionUnifies;
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
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Assumption, "name", "Assumption"), _Assumption));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHJlZmVyZW5jZUZyb21KU09OLCByZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEFzc3VtcHRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7IH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHVpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiB0byB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCksXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IHRoaXMucmVmZXJlbmNlLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ICYmIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dWlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJzdGl0dWlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dWlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXM7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlQXNNZXRhdmFyaWFibGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXNBc01ldGF2YXJpYWJsZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGFzIHMgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICByZWZlcmVuY2VWYWxpZGF0ZXNBc01ldGF2YXJpYWJsZSA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlQXNNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzQXNNZXRhdmFyaWFibGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgYXMgYSBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBjb250ZXh0LmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc1VuaWZ5ID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucy5ldmVyeSgodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25zVW5pZnk7IC8vL1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQ7IC8vL1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXNzdW1wdGlvblN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy87L1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsVW5pZmllcyA9IHRoaXMucmVmZXJlbmNlLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IGxhYmVsVW5pZmllczsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZTtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldENvbnRleHQoKTsgIC8vL1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIGxhYmVsU3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIGxhYmVsID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldExhYmVsKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VVVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucy5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN0YXRlbWVudFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIGlmIChsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zKSB7XG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTihyZWZlcmVuY2UpO1xuXG4gICAgICBqc29uID0gcmVmZXJlbmNlSlNPTjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc3VtcHRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBudWxsLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlKVxuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBc3N1bXB0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJyZWZlcmVuY2UiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJnZXRNZXRhdmFyaWFibGUiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29tcGFyZXNUb1N1YnN0aXR1aW9uIiwiYXNzdW1wdGlvblN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJkZWJ1ZyIsInZhbGlkYXRlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsInJlZmVyZW5jZVN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInZhbGlkYXRlUmVmZXJlbmNlQXNNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VWYWxpZGF0ZXNBc01ldGF2YXJpYWJsZSIsInZhbGlkYXRlQXNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeSIsImV2ZXJ5IiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCIsImlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwic3RhdGVtZW50VW5pZmllcyIsImFzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmciLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkiLCJ1bmlmeUxhYmVsIiwibGFiZWwiLCJsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlIiwibGFiZWxTdHJpbmciLCJsYWJlbFVuaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJnZXRDb250ZXh0IiwibGFiZWxTdWJzdGl0dXRpb25zIiwiZ2V0TGFiZWwiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50VVVuaWZpZXMiLCJsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInRvSlNPTiIsImpzb24iLCJzaW1wbGUiLCJpc1NpbXBsZSIsInJlZmVyZW5jZUpTT04iLCJyZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04iLCJmcm9tSlNPTiIsImFzc3VtcHRpb24iLCJyZWZlcmVuY2VGcm9tSlNPTiIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7Ozs4QkFOd0I7d0JBRUQ7cUJBQ3FCO29CQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUQsV0FBZUEsSUFBQUEsZ0JBQU0sK0JBQUM7O2FBQU1DLFdBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUztnQ0FEN0JMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtFLFNBQVMsR0FBR0E7UUFDakIsTUFBS0QsU0FBUyxHQUFHQTs7Ozs7WUFHbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBb0IsT0FBTyxJQUFJLENBQUNKLFNBQVMsQ0FBQ0ksZUFBZTtZQUFJOzs7WUFFN0RDLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLFlBQVksRUFBRVQsT0FBTztnQkFDdkMsSUFBSVUsd0JBQXdCO2dCQUU1QixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQ2pDQyxxQkFBcUJKLGFBQWFHLFNBQVM7Z0JBRWpEWixRQUFRYyxLQUFLLENBQUMsQUFBQyxrQkFBeURELE9BQXhDRixrQkFBaUIseUJBQTBDLE9BQW5CRSxvQkFBbUI7Z0JBRTNGLElBQU1ULFlBQVlLLGFBQWFK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