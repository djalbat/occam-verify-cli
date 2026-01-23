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
var _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../proofAssertion"));
var _assign = /*#__PURE__*/ _interop_require_default(require("../../process/assign"));
var _elements = require("../../elements");
var _context = require("../../utilities/context");
var _json = require("../../utilities/json");
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
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _Premise;
var _default = (0, _elements.define)((_Premise = /*#__PURE__*/ function(ProofAssertion) {
    _inherits(Premise, ProofAssertion);
    function Premise(context, string, node, statement, procedureCall) {
        _class_call_check(this, Premise);
        var _this;
        _this = _call_super(this, Premise, [
            context,
            string,
            node,
            statement
        ]);
        _this.procedureCall = procedureCall;
        return _this;
    }
    _create_class(Premise, [
        {
            key: "getProcedureCall",
            value: function getProcedureCall() {
                return this.procedureCall;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var _this = this;
                var verifies = false;
                var node = this.getNode(), premiseString = this.getString(); ///
                context.trace("Verifying the '".concat(premiseString, "' premise..."), node);
                var statement = this.getStatement(), procedureCall = this.getProcedureCall();
                if (statement !== null || procedureCall !== null) {
                    (0, _context.attempt)(function(context) {
                        if (statement !== null) {
                            var stated = true, assignments = [], statementValidates = statement.validate(assignments, stated, context);
                            if (statementValidates) {
                                var assignmentsAssigned = (0, _assign.default)(assignments, context);
                                if (assignmentsAssigned) {
                                    var subproofOrProofAssertion = _this; ///
                                    context.addSubproofOrProofAssertion(subproofOrProofAssertion);
                                    _this.setContext(context);
                                    verifies = true;
                                }
                            }
                        }
                        if (procedureCall !== null) {
                            var procedureCallValidates = _this.procedureCall.validate(context);
                            if (procedureCallValidates) {
                                _this.setContext(context);
                                verifies = true;
                            }
                        }
                    }, context);
                } else {
                    context.debug("Unable to verify the '".concat(premiseString, "' premise because it is nonsense."), node);
                }
                if (verifies) {
                    context.debug("...verified the '".concat(premiseString, "' premise."), node);
                }
                return verifies;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiesIndependently = false;
                var premiseString = this.getString(); ///
                context.trace("Unifying the '".concat(premiseString, "' premise independently..."));
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                var statement = this.getStatement();
                if (statement !== null) {
                    var statementUnifiesIndependently = statement.unifyIndependently(substitutions, generalContext, specificContext);
                    if (statementUnifiesIndependently) {
                        unifiesIndependently = true;
                    }
                }
                if (this.procedureCall !== null) {
                    var procedureCallResolvedIndependently = this.procedureCall.unifyIndependently(substitutions, context);
                    if (procedureCallResolvedIndependently) {
                        unifiesIndependently = true;
                    }
                }
                if (unifiesIndependently) {
                    context.debug("...unified the '".concat(premiseString, "' premise independenly."));
                }
                return unifiesIndependently;
            }
        },
        {
            key: "unifySubproofOrProofAssertion",
            value: function unifySubproofOrProofAssertion(subproofOrProofAssertion, substitutions, context) {
                var subproofOrProofAssertionUnifies = false;
                var subproofOrProofAssertionProofAssertion = subproofOrProofAssertion.isProofAssertion(), proofAssertion = subproofOrProofAssertionProofAssertion ? subproofOrProofAssertion : null, subproof = subproofOrProofAssertionProofAssertion ? null : subproofOrProofAssertion;
                substitutions.snapshot(context);
                if (subproof !== null) {
                    var subproofUnifies = this.unifySubproof(subproof, substitutions, context);
                    if (subproofUnifies) {
                        subproofOrProofAssertionUnifies = true;
                    }
                }
                if (proofAssertion !== null) {
                    var proofAssertionUnifies = this.unifyProofAssertion(proofAssertion, substitutions, context);
                    if (proofAssertionUnifies) {
                        subproofOrProofAssertionUnifies = true;
                    }
                }
                if (subproofOrProofAssertionUnifies) {
                    substitutions.resolve(context);
                }
                subproofOrProofAssertionUnifies ? substitutions.continue(context) : substitutions.rollback(context);
                return subproofOrProofAssertionUnifies;
            }
        },
        {
            key: "unifyProofAssertion",
            value: function unifyProofAssertion(proofAssertion, substitutions, context) {
                var _this = this;
                var proofAssertionUnifies = false;
                var premiseString = this.getString(), proofAssertionString = proofAssertion.getString();
                context.trace("Unifying the '".concat(proofAssertionString, "' proof assertion with the '").concat(premiseString, "' premise..."));
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                var proofAssertionContext = proofAssertion.getContext(), statementUnifies = (0, _context.synthetically)(function(specificContext) {
                    var statement = proofAssertion.getStatement(), statementUnifies = _this.unifyStatement(statement, substitutions, generalContext, specificContext);
                    return statementUnifies;
                }, specificContext, proofAssertionContext);
                if (statementUnifies) {
                    proofAssertionUnifies = true;
                }
                if (proofAssertionUnifies) {
                    context.debug("...unified the '".concat(proofAssertionString, "' proof assertion with the '").concat(premiseString, "' premise."));
                }
                return proofAssertionUnifies;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, context) {
                var subproofUnifies = false;
                var node = this.getNode(), premiseString = this.getString(), subproofString = subproof.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(premiseString, "' premise..."), node);
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                var statement = this.getStatement();
                if (statement !== null) {
                    var statementNode = statement.getNode(), subproofAssertionNode = statementNode.getSubproofAssertionNode();
                    if (subproofAssertionNode !== null) {
                        var _$context = generalContext, assertionNode = subproofAssertionNode, assertion = _$context.findAssertionByAssertionNode(assertionNode);
                        if (assertion !== null) {
                            var subproofAssertion = assertion; ///
                            subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                        }
                    }
                }
                if (subproofUnifies) {
                    context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(premiseString, "' premise."), node);
                }
                return subproofUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var frames, terms;
                frames = this.context.getFrames();
                terms = this.context.getTerms();
                var procedureCallJSON = (0, _json.procedureCallToProcedureCallJSON)(this.procedureCall), statementJSON = (0, _json.statementToStatementJSON)(this.statement), framesJSON = (0, _json.framesToFramesJSON)(frames), termsJSON = (0, _json.termsToTermsJSON)(terms);
                frames = framesJSON; ///
                terms = termsJSON; ///
                var procedureCall = procedureCallJSON, statement = statementJSON, json = {
                    procedureCall: procedureCall,
                    statement: statement,
                    frames: frames,
                    terms: terms
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var terms = (0, _json.termsFromJSON)(json, context), frames = (0, _json.framesFromJSON)(json, context), statement = (0, _json.statementFromJSON)(json, context), procedureCall = (0, _json.procedureCallFromJSON)(json, context);
                var string;
                if (statement !== null) {
                    string = statement.getString();
                }
                if (procedureCall !== null) {
                    string = procedureCall.getString();
                }
                var node = null;
                var premise = new Premise(context, string, node, statement, procedureCall);
                return premise;
            }
        }
    ]);
    return Premise;
}(_proofAssertion.default), _define_property(_Premise, "name", "Premise"), _Premise));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcbmltcG9ydCBhc3NpZ25Bc3NpZ25tZW50cyBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBzeW50aGV0aWNhbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyB0ZXJtc0Zyb21KU09OLFxuICAgICAgICAgZnJhbWVzRnJvbUpTT04sXG4gICAgICAgICB0ZXJtc1RvVGVybXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50RnJvbUpTT04sXG4gICAgICAgICBmcmFtZXNUb0ZyYW1lc0pTT04sXG4gICAgICAgICBwcm9jZWR1cmVDYWxsRnJvbUpTT04sXG4gICAgICAgICBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04sXG4gICAgICAgICBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJlbWlzZSBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSB0aGlzLmdldFByb2NlZHVyZUNhbGwoKTtcblxuICAgIGlmICgoc3RhdGVtZW50ICE9PSBudWxsKSB8fCAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkpIHtcbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBzdGF0ZW1lbnQudmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9IHRoaXMucHJvY2VkdXJlQ2FsbC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMucHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGluZGVwZW5kZW5seS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uaXNQcm9vZkFzc2VydGlvbigpLFxuICAgICAgICAgIHByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgc3VicHJvb2YgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdChjb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVzID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID9cbiAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoY29udGV4dCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBwcm9vZkFzc2VydGlvbkNvbnRleHQgPSBwcm9vZkFzc2VydGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHN5bnRoZXRpY2FsbHkoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgICAgICAgICB9LCBzcGVjaWZpY0NvbnRleHQsIHByb29mQXNzZXJ0aW9uQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgYXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpXG5cbiAgICAgICAgaWYgKGFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgZnJhbWVzLFxuICAgICAgICB0ZXJtcztcblxuICAgIGZyYW1lcyA9IHRoaXMuY29udGV4dC5nZXRGcmFtZXMoKTtcblxuICAgIHRlcm1zID0gdGhpcy5jb250ZXh0LmdldFRlcm1zKCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHRoaXMucHJvY2VkdXJlQ2FsbCksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpLFxuICAgICAgICAgIHRlcm1zSlNPTiA9IHRlcm1zVG9UZXJtc0pTT04odGVybXMpO1xuXG4gICAgZnJhbWVzID0gZnJhbWVzSlNPTjsgIC8vL1xuXG4gICAgdGVybXMgPSB0ZXJtc0pTT047ICAvLy9cblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsSlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCxcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIGZyYW1lcyxcbiAgICAgICAgICAgIHRlcm1zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByZW1pc2VcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBmcmFtZXMgPSBmcmFtZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gcHJvY2VkdXJlQ2FsbC5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHByZW1pc2UgPSBuZXcgUHJlbWlzZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJlbWlzZSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbCIsImdldFByb2NlZHVyZUNhbGwiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldE5vZGUiLCJwcmVtaXNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJnZXRTdGF0ZW1lbnQiLCJhdHRlbXB0Iiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInNldENvbnRleHQiLCJwcm9jZWR1cmVDYWxsVmFsaWRhdGVzIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSIsInByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mIiwic25hcHNob3QiLCJzdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlQcm9vZkFzc2VydGlvbiIsInJlc29sdmUiLCJjb250aW51ZSIsInJvbGxiYWNrIiwicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJwcm9vZkFzc2VydGlvbkNvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3ludGhldGljYWxseSIsInVuaWZ5U3RhdGVtZW50Iiwic3VicHJvb2ZTdHJpbmciLCJzdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsInRvSlNPTiIsImZyYW1lcyIsInRlcm1zIiwiZ2V0RnJhbWVzIiwiZ2V0VGVybXMiLCJwcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImZyYW1lc0pTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJ0ZXJtc0pTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwianNvbiIsImZyb21KU09OIiwidGVybXNGcm9tSlNPTiIsImZyYW1lc0Zyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJwcmVtaXNlIiwiUHJvb2ZBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUFBOzs7cUVBZDJCOzZEQUNHO3dCQUVQO3VCQUNnQjtvQkFRVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpELFdBQWVBLElBQUFBLGdCQUFNLDRCQUFDOzthQUFNQyxRQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLGFBQWE7Z0NBRGpDTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDO1lBQU1DOztRQUU3QixNQUFLQyxhQUFhLEdBQUdBOzs7OztZQUd2QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxhQUFhO1lBQzNCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9OLE9BQU87O2dCQUNaLElBQUlPLFdBQVc7Z0JBRWYsSUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGdCQUFnQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO2dCQUUzQ1YsUUFBUVcsS0FBSyxDQUFDLEFBQUMsa0JBQStCLE9BQWRGLGVBQWMsaUJBQWVQO2dCQUU3RCxJQUFNQyxZQUFZLElBQUksQ0FBQ1MsWUFBWSxJ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