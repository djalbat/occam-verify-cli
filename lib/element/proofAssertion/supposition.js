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
var _Supposition;
var _default = (0, _elements.define)((_Supposition = /*#__PURE__*/ function(ProofAssertion) {
    _inherits(Supposition, ProofAssertion);
    function Supposition(context, string, node, statement, procedureCall) {
        _class_call_check(this, Supposition);
        var _this;
        _this = _call_super(this, Supposition, [
            context,
            string,
            node,
            statement
        ]);
        _this.procedureCall = procedureCall;
        return _this;
    }
    _create_class(Supposition, [
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
                var node = this.getNode(), suppositionString = this.getString(); ///
                context.trace("Verifying the '".concat(suppositionString, "' supposition..."), node);
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
                    context.debug("Unable to verify the '".concat(suppositionString, "' supposition because it is nonsense."), node);
                }
                if (verifies) {
                    context.debug("...verified the '".concat(suppositionString, "' supposition."), node);
                }
                return verifies;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiesIndependently = false;
                var suppositionString = this.getString(); ///
                context.trace("Unifying the '".concat(suppositionString, "' supposition independently..."));
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
                    context.debug("...unified the '".concat(suppositionString, "' supposition independenly."));
                }
                return unifiesIndependently;
            }
        },
        {
            key: "unifySubproofOrProosAssertion",
            value: function unifySubproofOrProosAssertion(subproofOrProofAssertion, substitutions, context) {
                var subproofOrProofAssertionUnifies = false;
                var subproofOrProofAssertionProofAssertion = subproofOrProofAssertion.isProofAssertion(), subproof = subproofOrProofAssertionProofAssertion ? null : subproofOrProofAssertion, proofAssertion = subproofOrProofAssertionProofAssertion ? subproofOrProofAssertion : null;
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
                var suppositionString = this.getString(), proofAssertionString = proofAssertion.getString();
                context.trace("Unifying the '".concat(proofAssertionString, "' proof assertion with the '").concat(suppositionString, "' supposition..."));
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
                    context.debug("...unified the '".concat(proofAssertionString, "' proof assertion with the '").concat(suppositionString, "' supposition."));
                }
                return proofAssertionUnifies;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, context) {
                var subproofUnifies = false;
                var node = this.getNode(), subproofString = subproof.getString(), suppositionString = this.getString(); ///
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(suppositionString, "' supposition..."), node);
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
                    context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(suppositionString, "' supposition."), node);
                }
                return subproofUnifies;
            }
        },
        {
            key: "unifySupposition",
            value: function unifySupposition(supposition, substitutions, generalContext, specificContext) {
                var suppositionUnifies;
                var node = this.getNode(), context = specificContext, specificSupposition = supposition, generalSuppositionString = this.getString(), specificSuppositionString = specificSupposition.getString();
                context.trace("Unifying the '".concat(specificSuppositionString, "' supposition with the '").concat(generalSuppositionString, "' supposition..."), node);
                var statement = specificSupposition.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                suppositionUnifies = statementUnifies; ///
                if (suppositionUnifies) {
                    context.debug("...unified the '".concat(specificSuppositionString, "' supposition with the '").concat(generalSuppositionString, "' supposition."), node);
                }
                return suppositionUnifies;
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
                var supposition = new Supposition(context, string, node, statement, procedureCall);
                return supposition;
            }
        }
    ]);
    return Supposition;
}(_proofAssertion.default), _define_property(_Supposition, "name", "Supposition"), _Supposition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgc3ludGhldGljYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdGVybXNGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc0Zyb21KU09OLFxuICAgICAgICAgdGVybXNUb1Rlcm1zSlNPTixcbiAgICAgICAgIHN0YXRlbWVudEZyb21KU09OLFxuICAgICAgICAgZnJhbWVzVG9GcmFtZXNKU09OLFxuICAgICAgICAgcHJvY2VkdXJlQ2FsbEZyb21KU09OLFxuICAgICAgICAgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OLFxuICAgICAgICAgcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1cHBvc2l0aW9uIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZUNhbGw7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKChzdGF0ZW1lbnQgIT09IG51bGwpIHx8IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSkge1xuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID0gdGhpcy5wcm9jZWR1cmVDYWxsLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMucHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbmx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZPclByb29zQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5pc1Byb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgc3VicHJvb2YgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLFxuICAgICAgICAgIHByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZShjb250ZXh0KSA6XG4gICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2soY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3ludGhldGljYWxseSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICAgICAgICAgIH0sIHNwZWNpZmljQ29udGV4dCwgcHJvb2ZBc3NlcnRpb25Db250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgYXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSlcblxuICAgICAgICBpZiAoYXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgZnJhbWVzLFxuICAgICAgICB0ZXJtcztcblxuICAgIGZyYW1lcyA9IHRoaXMuY29udGV4dC5nZXRGcmFtZXMoKTtcblxuICAgIHRlcm1zID0gdGhpcy5jb250ZXh0LmdldFRlcm1zKCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHRoaXMucHJvY2VkdXJlQ2FsbCksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpLFxuICAgICAgICAgIHRlcm1zSlNPTiA9IHRlcm1zVG9UZXJtc0pTT04odGVybXMpO1xuXG4gICAgZnJhbWVzID0gZnJhbWVzSlNPTjsgIC8vL1xuXG4gICAgdGVybXMgPSB0ZXJtc0pTT047ICAvLy9cblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsSlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCxcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIGZyYW1lcyxcbiAgICAgICAgICAgIHRlcm1zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1cHBvc2l0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN1cHBvc2l0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Tm9kZSIsInN1cHBvc2l0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJnZXRTdGF0ZW1lbnQiLCJhdHRlbXB0Iiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInNldENvbnRleHQiLCJwcm9jZWR1cmVDYWxsVmFsaWRhdGVzIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSIsInByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVN1YnByb29mT3JQcm9vc0Fzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZiIsInByb29mQXNzZXJ0aW9uIiwic25hcHNob3QiLCJzdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlQcm9vZkFzc2VydGlvbiIsInJlc29sdmUiLCJjb250aW51ZSIsInJvbGxiYWNrIiwicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJwcm9vZkFzc2VydGlvbkNvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3ludGhldGljYWxseSIsInVuaWZ5U3RhdGVtZW50Iiwic3VicHJvb2ZTdHJpbmciLCJzdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmciLCJzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nIiwidG9KU09OIiwiZnJhbWVzIiwidGVybXMiLCJnZXRGcmFtZXMiLCJnZXRUZXJtcyIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwiZnJhbWVzSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsInRlcm1zSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInByb2NlZHVyZUNhbGxGcm9tSlNPTiIsIlByb29mQXNzZXJ0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBQTs7O3FFQWQyQjs2REFDRzt3QkFFUDt1QkFDZ0I7b0JBUVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqRCxXQUFlQSxJQUFBQSxnQkFBTSxnQ0FBQzs7YUFBTUMsWUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxhQUFhO2dDQURqQ0w7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQztZQUFNQzs7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