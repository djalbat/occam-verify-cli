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
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getAssumptionNode",
            value: function getAssumptionNode() {
                var node = this.getNode(), assumptionNode = node; ///
                return assumptionNode;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.reference.getMetavariable();
            }
        },
        {
            key: "matchAssumptionNode",
            value: function matchAssumptionNode(assumptionode) {
                var assumptionodeA = assumptionode; ///
                assumptionode = this.getAssumptionNode();
                var assumptionodeB = assumptionode, assumptionodeAAMatchesAssumptionBNodeB = assumptionodeA.match(assumptionodeB), assumptionodeMatches = assumptionodeAAMatchesAssumptionBNodeB; ///
                return assumptionodeMatches;
            }
        },
        {
            key: "compareSubstitution",
            value: function compareSubstitution(substitution, context) {
                var comparesToSubstituion = false;
                var assumptionString = this.getString(), substitutionString = substitution.getString();
                context.trace("Comparing the '".concat(assumptionString, "' assumption to the '").concat(substitutionString, "' substitution..."));
                var statement = substitution.getStatement(), metavariableName = substitution.getMetavariableName(), statementEqualToStatement = this.statement.isEqualTo(statement), referenceMetavariableComparesToMetavariable = this.reference.compareMetavariableName(metavariableName);
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
            key: "findValidAssumption",
            value: function findValidAssumption(context) {
                var assumptionNode = this.getAssumptionNode(), assumption = context.findAssumptionByAssumptionNode(assumptionNode), validAssumption = assumption; ///
                return validAssumption;
            }
        },
        {
            key: "validate",
            value: function validate(stated, context) {
                var assumption = null;
                var assumptionString = this.getString(); ///
                context.trace("Validating the '".concat(assumptionString, "' assumption..."));
                var validAssumption = this.findValidAssumption(context);
                if (validAssumption) {
                    assumption = validAssumption; ///
                    context.debug("...the '".concat(assumptionString, "' assumption is already valid."));
                } else {
                    var validates = false;
                    var referenceValidates = this.validateReference(stated, context);
                    if (referenceValidates) {
                        var statementValidates = this.validateStatement(stated, context);
                        if (statementValidates) {
                            var validatesWhenStated = false, validatesWhenDerived = false;
                            if (stated) {
                                validatesWhenStated = this.validateWhenStated(context);
                            } else {
                                validatesWhenDerived = this.validateWhenDerived(context);
                            }
                            if (validatesWhenStated || validatesWhenDerived) {
                                validates = true;
                            }
                        }
                    }
                    if (validates) {
                        assumption = this; ///
                        context.addAssumption(assumption);
                        context.debug("...validated the '".concat(assumptionString, "' assumption."));
                    }
                }
                return assumption;
            }
        },
        {
            key: "validateReference",
            value: function validateReference(stated, context) {
                var referenceValidates = false;
                var assumptionString = this.getString(), referenceString = this.reference.getString();
                context.trace("Validating the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference..."));
                var reference = this.reference.validate(context);
                if (reference !== null) {
                    referenceValidates = true;
                }
                if (referenceValidates) {
                    context.debug("...validated the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' statement."));
                }
                return referenceValidates;
            }
        },
        {
            key: "validateStatement",
            value: function validateStatement(stated, context) {
                var statementValidates = false;
                var assumptionString = this.getString(), statementString = this.statement.getString();
                context.trace("Validating the '".concat(assumptionString, "' assumption's '").concat(statementString, "' statement..."));
                stated = true; ///
                var statement = this.statement.validate(stated, context);
                if (statement !== null) {
                    statementValidates = true;
                }
                if (statementValidates) {
                    context.debug("...validated the '".concat(assumptionString, "' assumption's '").concat(statementString, "' statement."));
                }
                return statementValidates;
            }
        },
        {
            key: "validateReferenceAsMetavariable",
            value: function validateReferenceAsMetavariable(stated, context) {
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
            value: function validateWhenStated(context) {
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
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnifies;
                var context = generalContext, statementString = statement.getString(), assumptionStatementString = this.statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(assumptionStatementString, "' statement..."));
                var generalStatement = this.statement, specificStatement = statement, statementUUnifiesIntrinsically = (0, _unify.unifyStatementIntrinsically)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                statementUnifies = statementUUnifiesIntrinsically; ///
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(assumptionStatementString, "' statement."));
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyLabel",
            value: function unifyLabel(label, substitutions, generalContext, specificContext) {
                var labelUnifiesWithReference;
                var context = generalContext, labelString = label.getString(), assumptionString = this.getString(); //;/
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
                var generalContext = context; ///
                context = topLevelMetaAssertion.getContext(); ///
                var specificContext = context, labelSubstitutions = [], label = topLevelMetaAssertion.getLabel(), substitutions = labelSubstitutions, labelUnifies = this.unifyLabel(label, substitutions, generalContext, specificContext);
                if (labelUnifies) {
                    var statementSubstitutions = [], statement = topLevelMetaAssertion.getStatement(), substitutions1 = statementSubstitutions, statementUUnifies = this.unifyStatement(statement, substitutions1, generalContext, specificContext);
                    if (statementUUnifies) {
                        var labelSubstitutionsCorrelateStatementSubstitutions = labelSubstitutions.correlateSubstitutions(statementSubstitutions);
                        if (labelSubstitutionsCorrelateStatementSubstitutions) {
                            topLevelMetaAssertionUnifies = true; ///
                        }
                    }
                }
                if (topLevelMetaAssertionUnifies) {
                    context = generalContext; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHJlZmVyZW5jZUZyb21KU09OLCByZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEFzc3VtcHRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7IH1cblxuICBtYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25vZGUpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9ub2RlQSA9IGFzc3VtcHRpb25vZGU7IC8vL1xuXG4gICAgYXNzdW1wdGlvbm9kZSA9IHRoaXMuZ2V0QXNzdW1wdGlvbk5vZGUoKTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25vZGVCID0gYXNzdW1wdGlvbm9kZSwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbm9kZUFBTWF0Y2hlc0Fzc3VtcHRpb25CTm9kZUIgPSBhc3N1bXB0aW9ub2RlQS5tYXRjaChhc3N1bXB0aW9ub2RlQiksXG4gICAgICAgICAgYXNzdW1wdGlvbm9kZU1hdGNoZXMgPSBhc3N1bXB0aW9ub2RlQUFNYXRjaGVzQXNzdW1wdGlvbkJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHVpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiB0byB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ICYmIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dWlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJzdGl0dWlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dWlvbjtcbiAgfVxuXG4gIGZpbmRWYWxpZEFzc3VtcHRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0gdGhpcy5nZXRBc3N1bXB0aW9uTm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgdmFsaWRBc3N1bXB0aW9uID0gYXNzdW1wdGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkQXNzdW1wdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3N1bXB0aW9uID0gdGhpcy5maW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzdW1wdGlvbikge1xuICAgICAgYXNzdW1wdGlvbiA9IHZhbGlkQXNzdW1wdGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2Uoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGFzc3VtcHRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2VBc01ldGF2YXJpYWJsZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzQXNNZXRhdmFyaWFibGU7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBhcyBzIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgcmVmZXJlbmNlVmFsaWRhdGVzQXNNZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZUFzTWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGFzIGEgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXNBc01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBjb250ZXh0LmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc1VuaWZ5ID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucy5ldmVyeSgodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25zVW5pZnk7IC8vL1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQ7IC8vL1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXNzdW1wdGlvblN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy87L1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsVW5pZmllcyA9IHRoaXMucmVmZXJlbmNlLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IGxhYmVsVW5pZmllczsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZTtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldENvbnRleHQoKTsgIC8vL1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIGxhYmVsU3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIGxhYmVsID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldExhYmVsKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VVVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucy5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN0YXRlbWVudFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIGlmIChsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zKSB7XG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTihyZWZlcmVuY2UpO1xuXG4gICAgICBqc29uID0gcmVmZXJlbmNlSlNPTjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc3VtcHRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBudWxsLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlKVxuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBc3N1bXB0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJyZWZlcmVuY2UiLCJzdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJnZXRTdGF0ZW1lbnQiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImdldE5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImdldE1ldGF2YXJpYWJsZSIsIm1hdGNoQXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9ub2RlIiwiYXNzdW1wdGlvbm9kZUEiLCJhc3N1bXB0aW9ub2RlQiIsImFzc3VtcHRpb25vZGVBQU1hdGNoZXNBc3N1bXB0aW9uQk5vZGVCIiwibWF0Y2giLCJhc3N1bXB0aW9ub2RlTWF0Y2hlcyIsImNvbXBhcmVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJjb21wYXJlc1RvU3Vic3RpdHVpb24iLCJhc3N1bXB0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJkZWJ1ZyIsImZpbmRWYWxpZEFzc3VtcHRpb24iLCJhc3N1bXB0aW9uIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwidmFsaWRBc3N1bXB0aW9uIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEFzc3VtcHRpb24iLCJyZWZlcmVuY2VTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ2YWxpZGF0ZVJlZmVyZW5jZUFzTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlVmFsaWRhdGVzQXNNZXRhdmFyaWFibGUiLCJ2YWxpZGF0ZUFzTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zVW5pZnkiLCJldmVyeSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQiLCJpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllcyIsImFzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmciLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkiLCJ1bmlmeUxhYmVsIiwibGFiZWwiLCJsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlIiwibGFiZWxTdHJpbmciLCJsYWJlbFVuaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJnZXRDb250ZXh0IiwibGFiZWxTdWJzdGl0dXRpb25zIiwiZ2V0TGFiZWwiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50VVVuaWZpZXMiLCJsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInRvSlNPTiIsImpzb24iLCJzaW1wbGUiLCJpc1NpbXBsZSIsInJlZmVyZW5jZUpTT04iLCJyZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04iLCJmcm9tSlNPTiIsInJlZmVyZW5jZUZyb21KU09OIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzhCQU53Qjt3QkFFRDtxQkFDcUI7b0JBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1RCxXQUFlQSxJQUFBQSxnQkFBTSwrQkFBQzs7YUFBTUMsV0FDZEMs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