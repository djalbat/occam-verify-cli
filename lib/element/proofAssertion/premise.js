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
var _temporary = /*#__PURE__*/ _interop_require_default(require("../../context/temporary"));
var _assign = /*#__PURE__*/ _interop_require_default(require("../../process/assign"));
var _elements = require("../../elements");
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
                var verifies = false;
                var temporaryContext = _temporary.default.fromNothing(context);
                context = temporaryContext; ///
                var node = this.getNode(), premiseString = this.getString(); ///
                context.trace("Verifying the '".concat(premiseString, "' premise..."), node);
                var statement = this.getStatement();
                if (statement === null && this.procedureCall === null) {
                    context.debug("Unable to verify the '".concat(premiseString, "' premise because it is nonsense."), node);
                } else {
                    if (statement !== null) {
                        var stated = true, assignments = [], statementValidates = statement.validate(assignments, stated, context);
                        if (statementValidates) {
                            var assignmentsAssigned = (0, _assign.default)(assignments, context);
                            if (assignmentsAssigned) {
                                var subproofOrProofAssertion = this; ///
                                context.addSubproofOrProofAssertion(subproofOrProofAssertion);
                                verifies = true;
                            }
                        }
                    }
                    if (this.procedureCall !== null) {
                        var stated1 = true, assignments1 = null, procedureCallVerifies = this.procedureCall.verify(assignments1, stated1, context);
                        if (procedureCallVerifies) {
                            verifies = true;
                        }
                    }
                }
                if (verifies) {
                    this.setContext(context);
                    context.debug("...verified the '".concat(premiseString, "' premise."), node);
                }
                return verifies;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiesIndependently = false;
                var node = this.getNode(), premiseString = this.getString(); ///
                context.trace("Unifying the '".concat(premiseString, "' premise independently..."), node);
                var generalContext = context; ///
                context = this.getContext();
                var specificContext = context; ///
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
                    context.debug("...unified the '".concat(premiseString, "' premise independenly."), node);
                }
                return unifiesIndependently;
            }
        },
        {
            key: "unifySubproofOrProofAssertion",
            value: function unifySubproofOrProofAssertion(subproofOrProofAssertion, substitutions, context) {
                var subproofOrProofAssertionUnifies = false;
                var subproofOrProofAssertionProofAssertion = subproofOrProofAssertion.isProofAssertion(), proofAssertion = subproofOrProofAssertionProofAssertion ? subproofOrProofAssertion : null, subproof = subproofOrProofAssertionProofAssertion ? null : subproofOrProofAssertion;
                substitutions.snapshot();
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
                subproofOrProofAssertionUnifies ? substitutions.continue() : substitutions.rollback(context);
                return subproofOrProofAssertionUnifies;
            }
        },
        {
            key: "unifyProofAssertion",
            value: function unifyProofAssertion(proofAssertion, substitutions, context) {
                var proofAssertionUnifies = false;
                var node = this.getNode(), premiseString = this.getString(), proofAssertionString = proofAssertion.getString();
                context.trace("Unifying the '".concat(proofAssertionString, "' proof assertion with the '").concat(premiseString, "' premise..."), node);
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                var statement = proofAssertion.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    proofAssertionUnifies = true;
                }
                if (proofAssertionUnifies) {
                    context.debug("...unified the '".concat(proofAssertionString, "' proof assertion with the '").concat(premiseString, "' premise."), node);
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
                var terms = (0, _json.termsFromJSON)(json, context), frames = (0, _json.framesFromJSON)(json, context), statement = (0, _json.statementFromJSON)(json, context), procedureCall = (0, _json.procedureCallFromJSON)(json, context), temporaryContext = _temporary.default.fromTermsAndFrames(terms, frames, context);
                var string;
                if (statement !== null) {
                    string = statement.getString();
                }
                if (procedureCall !== null) {
                    string = procedureCall.getString();
                }
                var node = null;
                context = temporaryContext; ///
                var premise = new Premise(context, string, node, statement, procedureCall);
                return premise;
            }
        }
    ]);
    return Premise;
}(_proofAssertion.default), _define_property(_Premise, "name", "Premise"), _Premise));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcbmltcG9ydCBUZW1wb3JhcnlDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3RlbXBvcmFyeVwiO1xuaW1wb3J0IGFzc2lnbkFzc2lnbm1lbnRzIGZyb20gXCIuLi8uLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1zRnJvbUpTT04sXG4gICAgICAgICBmcmFtZXNGcm9tSlNPTixcbiAgICAgICAgIHRlcm1zVG9UZXJtc0pTT04sXG4gICAgICAgICBzdGF0ZW1lbnRGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc1RvRnJhbWVzSlNPTixcbiAgICAgICAgIHByb2NlZHVyZUNhbGxGcm9tSlNPTixcbiAgICAgICAgIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTixcbiAgICAgICAgIHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcmVtaXNlIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZUNhbGw7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVtcG9yYXJ5Q29udGV4dCA9IFRlbXBvcmFyeUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gdGVtcG9yYXJ5Q29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGlmICgoc3RhdGVtZW50ID09PSBudWxsKSAmJiAodGhpcy5wcm9jZWR1cmVDYWxsID09PSBudWxsKSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBzdGF0ZW1lbnQudmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgICBwcm9jZWR1cmVDYWxsVmVyaWZpZXMgPSB0aGlzLnByb2NlZHVyZUNhbGwudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9jZWR1cmVDYWxsVmVyaWZpZXMpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGluZGVwZW5kZW50bHkuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkgPSB0aGlzLnByb2NlZHVyZUNhbGwudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBpbmRlcGVuZGVubHkuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmlzUHJvb2ZBc3NlcnRpb24oKSxcbiAgICAgICAgICBwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgc3VicHJvb2YgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdCgpO1xuXG4gICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhjb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgYXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSlcblxuICAgICAgICBpZiAoYXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBmcmFtZXMsXG4gICAgICAgIHRlcm1zO1xuXG4gICAgZnJhbWVzID0gdGhpcy5jb250ZXh0LmdldEZyYW1lcygpO1xuXG4gICAgdGVybXMgPSB0aGlzLmNvbnRleHQuZ2V0VGVybXMoKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04odGhpcy5wcm9jZWR1cmVDYWxsKSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBmcmFtZXNKU09OID0gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcyksXG4gICAgICAgICAgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcyk7XG5cbiAgICBmcmFtZXMgPSBmcmFtZXNKU09OOyAgLy8vXG5cbiAgICB0ZXJtcyA9IHRlcm1zSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsLFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgZnJhbWVzLFxuICAgICAgICAgICAgdGVybXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJlbWlzZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGZyYW1lcyA9IGZyYW1lc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IFRlbXBvcmFyeUNvbnRleHQuZnJvbVRlcm1zQW5kRnJhbWVzKHRlcm1zLCBmcmFtZXMsIGNvbnRleHQpO1xuXG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gcHJvY2VkdXJlQ2FsbC5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gbnVsbDtcblxuICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHByZW1pc2UgPSBuZXcgUHJlbWlzZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJlbWlzZSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbCIsImdldFByb2NlZHVyZUNhbGwiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInRlbXBvcmFyeUNvbnRleHQiLCJUZW1wb3JhcnlDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJnZXROb2RlIiwicHJlbWlzZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZ2V0U3RhdGVtZW50IiwiZGVidWciLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwicHJvY2VkdXJlQ2FsbFZlcmlmaWVzIiwic2V0Q29udGV4dCIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsImdlbmVyYWxDb250ZXh0IiwiZ2V0Q29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5IiwicHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uIiwiaXNQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uIiwic3VicHJvb2YiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJwcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVByb29mQXNzZXJ0aW9uIiwicmVzb2x2ZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnByb29mU3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb24iLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJ0b0pTT04iLCJmcmFtZXMiLCJ0ZXJtcyIsImdldEZyYW1lcyIsImdldFRlcm1zIiwicHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJmcmFtZXNKU09OIiwiZnJhbWVzVG9GcmFtZXNKU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1zRnJvbUpTT04iLCJmcmFtZXNGcm9tSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwicHJvY2VkdXJlQ2FsbEZyb21KU09OIiwiZnJvbVRlcm1zQW5kRnJhbWVzIiwicHJlbWlzZSIsIlByb29mQXNzZXJ0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBQTs7O3FFQWQyQjtnRUFDRTs2REFDQzt3QkFFUDtvQkFRMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqRCxXQUFlQSxJQUFBQSxnQkFBTSw0QkFBQzs7YUFBTUMsUUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxhQUFhO2dDQURqQ0w7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQztZQUFNQzs7UUFFN0IsTUFBS0MsYUFBYSxHQUFHQTs7Ozs7WUFHdkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsYUFBYTtZQUMzQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPTixPQUFPO2dCQUNaLElBQUlPLFdBQVc7Z0JBRWYsSUFBTUMsbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsV0FBVyxDQUFDVjtnQkFFdERBLFVBQVVRLGtCQUFrQixHQUFHO2dCQUUvQixJQUFNTixPQUFPLElBQUksQ0FBQ1MsT0FBTyxJQUNuQkMsZ0JBQWdCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7Z0JBRTNDYixRQUFRYyxLQUFLLENBQUMsQUFBQyxrQkFBK0IsT0FBZEYs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