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
var _ephemeral = /*#__PURE__*/ _interop_require_default(require("../../context/ephemeral"));
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
                var verifies = false;
                var ephemeralContext = _ephemeral.default.fromNothing(context);
                context = ephemeralContext; ///
                var node = this.getNode(), suppositionString = this.getString(); ///
                context.trace("Verifying the '".concat(suppositionString, "' supposition..."), node);
                var statement = this.getStatement();
                if (statement === null && this.procedureCall === null) {
                    context.debug("Unable to verify the '".concat(suppositionString, "' supposition because it is nonsense."), node);
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
                        var procedureCallValidates = this.procedureCall.validate(context);
                        if (procedureCallValidates) {
                            verifies = true;
                        }
                    }
                }
                if (verifies) {
                    this.setContext(context);
                    context.debug("...verified the '".concat(suppositionString, "' supposition."), node);
                }
                return verifies;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiesIndependently = false;
                var suppositionString = this.getString();
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
                var node = this.getNode(), subproofString = subproof.getString(), suppositionString = this.getString();
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
                var terms = (0, _json.termsFromJSON)(json, context), frames = (0, _json.framesFromJSON)(json, context), statement = (0, _json.statementFromJSON)(json, context), procedureCall = (0, _json.procedureCallFromJSON)(json, context), ephemeralContext = _ephemeral.default.fromTermsAndFrames(terms, frames, context);
                var string;
                if (statement !== null) {
                    string = statement.getString();
                }
                if (procedureCall !== null) {
                    string = procedureCall.getString();
                }
                var node = null;
                context = ephemeralContext; ///
                var supposition = new Supposition(context, string, node, statement, procedureCall);
                return supposition;
            }
        }
    ]);
    return Supposition;
}(_proofAssertion.default), _define_property(_Supposition, "name", "Supposition"), _Supposition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBhc3NpZ25Bc3NpZ25tZW50cyBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzeW50aGV0aWNhbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyB0ZXJtc0Zyb21KU09OLFxuICAgICAgICAgZnJhbWVzRnJvbUpTT04sXG4gICAgICAgICB0ZXJtc1RvVGVybXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50RnJvbUpTT04sXG4gICAgICAgICBmcmFtZXNUb0ZyYW1lc0pTT04sXG4gICAgICAgICBwcm9jZWR1cmVDYWxsRnJvbUpTT04sXG4gICAgICAgICBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04sXG4gICAgICAgICBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3VwcG9zaXRpb24gZXh0ZW5kcyBQcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKChzdGF0ZW1lbnQgPT09IG51bGwpICYmICh0aGlzLnByb2NlZHVyZUNhbGwgPT09IG51bGwpKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSB0aGlzLnByb2NlZHVyZUNhbGwudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkgPSB0aGlzLnByb2NlZHVyZUNhbGwudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW5seS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVN1YnByb29mT3JQcm9vc0Fzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uaXNQcm9vZkFzc2VydGlvbigpLFxuICAgICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbixcbiAgICAgICAgICBwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdCgpO1xuXG4gICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhjb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBwcm9vZkFzc2VydGlvbkNvbnRleHQgPSBwcm9vZkFzc2VydGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHN5bnRoZXRpY2FsbHkoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgICAgICAgICB9LCBzcGVjaWZpY0NvbnRleHQsIHByb29mQXNzZXJ0aW9uQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgYXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSlcblxuICAgICAgICBpZiAoYXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgZnJhbWVzLFxuICAgICAgICB0ZXJtcztcblxuICAgIGZyYW1lcyA9IHRoaXMuY29udGV4dC5nZXRGcmFtZXMoKTtcblxuICAgIHRlcm1zID0gdGhpcy5jb250ZXh0LmdldFRlcm1zKCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHRoaXMucHJvY2VkdXJlQ2FsbCksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpLFxuICAgICAgICAgIHRlcm1zSlNPTiA9IHRlcm1zVG9UZXJtc0pTT04odGVybXMpO1xuXG4gICAgZnJhbWVzID0gZnJhbWVzSlNPTjsgIC8vL1xuXG4gICAgdGVybXMgPSB0ZXJtc0pTT047ICAvLy9cblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsSlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCxcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIGZyYW1lcyxcbiAgICAgICAgICAgIHRlcm1zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1cHBvc2l0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBlcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tVGVybXNBbmRGcmFtZXModGVybXMsIGZyYW1lcywgY29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdXBwb3NpdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbCIsImdldFByb2NlZHVyZUNhbGwiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImVwaGVtZXJhbENvbnRleHQiLCJFcGhlbWVyYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJnZXROb2RlIiwic3VwcG9zaXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImdldFN0YXRlbWVudCIsImRlYnVnIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInByb2NlZHVyZUNhbGxWYWxpZGF0ZXMiLCJzZXRDb250ZXh0IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3Vic3RpdHV0aW9ucyIsInVuaWZpZXNJbmRlcGVuZGVudGx5Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkiLCJwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidW5pZnlTdWJwcm9vZk9yUHJvb3NBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24iLCJpc1Byb29mQXNzZXJ0aW9uIiwic3VicHJvb2YiLCJwcm9vZkFzc2VydGlvbiIsInNuYXBzaG90Iiwic3VicHJvb2ZVbmlmaWVzIiwidW5pZnlTdWJwcm9vZiIsInByb29mQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5UHJvb2ZBc3NlcnRpb24iLCJyZXNvbHZlIiwiY29udGludWUiLCJyb2xsYmFjayIsInByb29mQXNzZXJ0aW9uU3RyaW5nIiwicHJvb2ZBc3NlcnRpb25Db250ZXh0Iiwic3RhdGVtZW50VW5pZmllcyIsInN5bnRoZXRpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnByb29mU3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb24iLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZXMiLCJzcGVjaWZpY1N1cHBvc2l0aW9uIiwiZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nIiwic3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyIsInRvSlNPTiIsImZyYW1lcyIsInRlcm1zIiwiZ2V0RnJhbWVzIiwiZ2V0VGVybXMiLCJwcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImZyYW1lc0pTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJ0ZXJtc0pTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwianNvbiIsImZyb21KU09OIiwidGVybXNGcm9tSlNPTiIsImZyYW1lc0Zyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJmcm9tVGVybXNBbmRGcmFtZXMiLCJQcm9vZkFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQUE7OztxRUFmMkI7Z0VBQ0U7NkRBQ0M7d0JBRVA7dUJBQ087b0JBUW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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