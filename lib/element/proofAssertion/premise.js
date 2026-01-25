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
var _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../proofAssertion"));
var _assign = /*#__PURE__*/ _interop_require_default(require("../../process/assign"));
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
var define = _occamfurtle.elements.define;
var _default = define((_Premise = /*#__PURE__*/ function(ProofAssertion) {
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
            key: "isStated",
            value: function isStated() {
                var stated = true; ///
                return stated;
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
                            var assignments = [], statementValidates = _this.validateStatement(assignments, context);
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
                            var procedureCallValidates = procedureCall.validate(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGF0dGVtcHQsIHN5bnRoZXRpY2FsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHRlcm1zRnJvbUpTT04sXG4gICAgICAgICBmcmFtZXNGcm9tSlNPTixcbiAgICAgICAgIHRlcm1zVG9UZXJtc0pTT04sXG4gICAgICAgICBzdGF0ZW1lbnRGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc1RvRnJhbWVzSlNPTixcbiAgICAgICAgIHByb2NlZHVyZUNhbGxGcm9tSlNPTixcbiAgICAgICAgIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTixcbiAgICAgICAgIHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZGVmaW5lIH0gPSBlbGVtZW50cztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByZW1pc2UgZXh0ZW5kcyBQcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHN0YXRlZCA9IHRydWU7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICBpZiAoKHN0YXRlbWVudCAhPT0gbnVsbCkgfHwgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpKSB7XG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgICAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG5cbiAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSBwcm9jZWR1cmVDYWxsLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5ID0gc3RhdGVtZW50LnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy5wcm9jZWR1cmVDYWxsLnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgaW5kZXBlbmRlbmx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5pc1Byb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzdWJwcm9vZiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb247XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZShjb250ZXh0KSA6XG4gICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2soY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3ludGhldGljYWxseSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICAgICAgICAgIH0sIHNwZWNpZmljQ29udGV4dCwgcHJvb2ZBc3NlcnRpb25Db250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgYXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSlcblxuICAgICAgICBpZiAoYXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBmcmFtZXMsXG4gICAgICAgIHRlcm1zO1xuXG4gICAgZnJhbWVzID0gdGhpcy5jb250ZXh0LmdldEZyYW1lcygpO1xuXG4gICAgdGVybXMgPSB0aGlzLmNvbnRleHQuZ2V0VGVybXMoKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04odGhpcy5wcm9jZWR1cmVDYWxsKSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBmcmFtZXNKU09OID0gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcyksXG4gICAgICAgICAgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcyk7XG5cbiAgICBmcmFtZXMgPSBmcmFtZXNKU09OOyAgLy8vXG5cbiAgICB0ZXJtcyA9IHRlcm1zSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsLFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgZnJhbWVzLFxuICAgICAgICAgICAgdGVybXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJlbWlzZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGZyYW1lcyA9IGZyYW1lc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJlbGVtZW50cyIsIlByZW1pc2UiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsInByb2NlZHVyZUNhbGwiLCJnZXRQcm9jZWR1cmVDYWxsIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldE5vZGUiLCJwcmVtaXNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJnZXRTdGF0ZW1lbnQiLCJhdHRlbXB0IiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInNldENvbnRleHQiLCJwcm9jZWR1cmVDYWxsVmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5IiwicHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uIiwiaXNQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uIiwic3VicHJvb2YiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJwcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVByb29mQXNzZXJ0aW9uIiwicmVzb2x2ZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInByb29mQXNzZXJ0aW9uQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJzeW50aGV0aWNhbGx5IiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJwcm9vZlN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uIiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uIiwidG9KU09OIiwiZnJhbWVzIiwidGVybXMiLCJnZXRGcmFtZXMiLCJnZXRUZXJtcyIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwiZnJhbWVzSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsInRlcm1zSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInByb2NlZHVyZUNhbGxGcm9tSlNPTiIsInByZW1pc2UiLCJQcm9vZkFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1CQTs7O2VBQUE7OzsyQkFqQnlCO3FFQUVFOzZEQUNHO3VCQUVTO29CQVFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBTSxBQUFFQSxTQUFXQyxxQkFBUSxDQUFuQkQ7SUFFUixXQUFlQSxpQ0FBTzs7YUFBTUUsUUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxhQUFhO2dDQURqQ0w7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQztZQUFNQzs7UUFFN0IsTUFBS0MsYUFBYSxHQUFHQTs7Ozs7WUFHdkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsYUFBYTtZQUMzQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLE1BQU0sR0FBRztnQkFFeEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFB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