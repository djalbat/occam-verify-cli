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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcbmltcG9ydCBhc3NpZ25Bc3NpZ25tZW50cyBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBzeW50aGV0aWNhbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyB0ZXJtc0Zyb21KU09OLFxuICAgICAgICAgZnJhbWVzRnJvbUpTT04sXG4gICAgICAgICB0ZXJtc1RvVGVybXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50RnJvbUpTT04sXG4gICAgICAgICBmcmFtZXNUb0ZyYW1lc0pTT04sXG4gICAgICAgICBwcm9jZWR1cmVDYWxsRnJvbUpTT04sXG4gICAgICAgICBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04sXG4gICAgICAgICBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJlbWlzZSBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSB0aGlzLmdldFByb2NlZHVyZUNhbGwoKTtcblxuICAgIGlmICgoc3RhdGVtZW50ICE9PSBudWxsKSB8fCAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkpIHtcbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBzdGF0ZW1lbnQudmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9IHRoaXMucHJvY2VkdXJlQ2FsbC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMucHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGluZGVwZW5kZW5seS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uaXNQcm9vZkFzc2VydGlvbigpLFxuICAgICAgICAgIHByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgc3VicHJvb2YgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdChjb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVzID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID9cbiAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoY29udGV4dCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3ludGhldGljYWxseSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICAgICAgICAgIH0sIHNwZWNpZmljQ29udGV4dCwgcHJvb2ZBc3NlcnRpb25Db250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgYXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSlcblxuICAgICAgICBpZiAoYXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBmcmFtZXMsXG4gICAgICAgIHRlcm1zO1xuXG4gICAgZnJhbWVzID0gdGhpcy5jb250ZXh0LmdldEZyYW1lcygpO1xuXG4gICAgdGVybXMgPSB0aGlzLmNvbnRleHQuZ2V0VGVybXMoKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04odGhpcy5wcm9jZWR1cmVDYWxsKSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBmcmFtZXNKU09OID0gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcyksXG4gICAgICAgICAgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcyk7XG5cbiAgICBmcmFtZXMgPSBmcmFtZXNKU09OOyAgLy8vXG5cbiAgICB0ZXJtcyA9IHRlcm1zSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsLFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgZnJhbWVzLFxuICAgICAgICAgICAgdGVybXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJlbWlzZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGZyYW1lcyA9IGZyYW1lc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcmVtaXNlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Tm9kZSIsInByZW1pc2VTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImdldFN0YXRlbWVudCIsImF0dGVtcHQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic2V0Q29udGV4dCIsInByb2NlZHVyZUNhbGxWYWxpZGF0ZXMiLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5IiwicHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uIiwiaXNQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uIiwic3VicHJvb2YiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJwcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVByb29mQXNzZXJ0aW9uIiwicmVzb2x2ZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInByb29mQXNzZXJ0aW9uQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJzeW50aGV0aWNhbGx5IiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJwcm9vZlN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uIiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uIiwidG9KU09OIiwiZnJhbWVzIiwidGVybXMiLCJnZXRGcmFtZXMiLCJnZXRUZXJtcyIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwiZnJhbWVzSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsInRlcm1zSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInByb2NlZHVyZUNhbGxGcm9tSlNPTiIsInByZW1pc2UiLCJQcm9vZkFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQUE7OztxRUFkMkI7NkRBQ0c7d0JBRVA7dUJBQ2dCO29CQVFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sNEJBQUM7O2FBQU1DLFFBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsYUFBYTtnQ0FEakNMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7WUFBTUM7O1FBRTdCLE1BQUtDLGFBQWEsR0FBR0E7Ozs7O1lBR3ZCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGFBQWE7WUFDM0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT04sT0FBTzs7Z0JBQ1osSUFBSU8sV0FBVztnQkFFZixJQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsZ0JBQWdCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7Z0JBRTNDVixRQUFRVyxLQUFLLENBQUMsQUFBQyxrQkFBK0IsT0FBZEYsZUFBYyxpQkFBZVA7Z0JBRTdELElBQU1DLFlBQVksSUFBSSxDQUFDUyxZQUFZLElBQzdC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