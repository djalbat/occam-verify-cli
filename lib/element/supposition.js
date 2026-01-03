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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _temporary = /*#__PURE__*/ _interop_require_default(require("../context/temporary"));
var _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
var _statement = require("../utilities/statement");
var _json = require("../utilities/json");
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
var _Supposition;
var _default = (0, _elements.define)((_Supposition = /*#__PURE__*/ function() {
    function Supposition(context, string, node, statement, procedureCall) {
        _class_call_check(this, Supposition);
        this.context = context;
        this.string = string;
        this.node = node;
        this.statement = statement;
        this.procedureCall = procedureCall;
    }
    _create_class(Supposition, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
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
                var suppositionString = this.string; ///
                context.trace("Verifying the '".concat(suppositionString, "' supposition..."), this.node);
                if (false) {
                ///
                } else if (this.statement !== null) {
                    var stated = true, assignments = [], statementVerifies = this.statement.verify(assignments, stated, context);
                    if (statementVerifies) {
                        var assignmentsAssigned = (0, _assign.default)(assignments, context);
                        if (assignmentsAssigned) {
                            var Step = _elements.default.Step, step = Step.fromStatement(this.statement, context), stepOrSubproof = step; ///
                            context.addStepOrSubproof(stepOrSubproof);
                            verifies = true;
                        }
                    }
                } else if (this.procedureCall !== null) {
                    var stated1 = true, assignments1 = null, procedureCallVerifies = this.procedureCall.verify(assignments1, stated1, context);
                    if (procedureCallVerifies) {
                        verifies = true;
                    }
                } else {
                    context.debug("Unable to verify the '".concat(suppositionString, "' supposition because it is nonsense."), this.node);
                }
                if (verifies) {
                    this.context = context;
                    context.debug("...verified the '".concat(suppositionString, "' supposition."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "unifySupposition",
            value: function unifySupposition(supposition, substitutions, generalContext1, specificContext) {
                var suppositionUnifies;
                var context = specificContext, specificSupposition = supposition, generalSuppositionString = this.string, specificSuppositionString = specificSupposition.getString();
                context.trace("Unifying the '".concat(specificSuppositionString, "' supposition with the '").concat(generalSuppositionString, "' supposition..."), this.node);
                var statement = specificSupposition.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, generalContext1, specificContext);
                suppositionUnifies = statementUnifies; ///
                if (suppositionUnifies) {
                    context.debug("...unified the '".concat(specificSuppositionString, "' supposition with the '").concat(generalSuppositionString, "' supposition."), this.node);
                }
                return suppositionUnifies;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiesIndependently = false;
                var suppositionString = this.string, generalContext1 = this.context, specificContext = context; ///
                context.trace("Unifying the '".concat(suppositionString, "' supposition independently..."), this.node);
                if (this.statement !== null) {
                    var statementUnifiesIndependently = this.statement.unifyIndependently(substitutions, generalContext1, specificContext);
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
                    context.debug("...unified the '".concat(suppositionString, "' supposition independenly."), this.node);
                }
                return unifiesIndependently;
            }
        },
        {
            key: "unifyStepOrSubproof",
            value: function unifyStepOrSubproof(stepOrSubproof, substitutions, context) {
                var stepOrSubproofUnifies = false;
                var stepOrSubProofStep = stepOrSubproof.isStep(), subproof = stepOrSubProofStep ? null : stepOrSubproof, step = stepOrSubProofStep ? stepOrSubproof : null;
                substitutions.snapshot();
                if (subproof !== null) {
                    var subproofUnifies = this.unifySubproof(subproof, substitutions, context);
                    stepOrSubproofUnifies = subproofUnifies; ///
                }
                if (step !== null) {
                    var statementUnifies = this.unifyStep(step, substitutions, context);
                    stepOrSubproofUnifies = statementUnifies; ///
                }
                if (stepOrSubproofUnifies) {
                    substitutions.resolve(context);
                }
                stepOrSubproofUnifies ? substitutions.continue() : substitutions.rollback(context);
                return stepOrSubproofUnifies;
            }
        },
        {
            key: "unifyStep",
            value: function unifyStep(step, substitutions, context) {
                var stepUnifies;
                context = step.getContext();
                var statement = step.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, context);
                stepUnifies = statementUnifies; ///
                return stepUnifies;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, context) {
                var subproofUnifies = false;
                var supposition = this, subproofString = subproof.getString(), suppositionStatement = supposition.getStatement(), suppositionStatementString = suppositionStatement.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement..."));
                if (this.statement !== null) {
                    var _$context = generalContext, subproofAssertion = (0, _statement.subproofAssertionFromStatement)(this.statement, _$context);
                    if (subproofAssertion !== null) {
                        var _$generalContext = this.context, specificContext = _$context; ///
                        subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, _$generalContext, specificContext);
                    }
                }
                if (subproofUnifies) {
                    context.debug("...unified the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement."));
                }
                return subproofUnifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, context) {
                var statementUnifies;
                var supposition = this, statementString = statement.getString(), suppositionString = supposition.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition..."));
                if (this.statement !== null) {
                    var generalContext1 = this.context, specificContext = context; ///
                    statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext1, specificContext);
                }
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition."));
                }
                return statementUnifies;
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
                var supposition = new Supposition(context, string, node, statement, procedureCall);
                return supposition;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, context) {
                var Statement = _elements.default.Statement, ProcedureCall = _elements.default.ProcedureCall, node = suppositionNode, string = context.nodeAsString(node), statement = Statement.fromSuppositionNode(suppositionNode, context), procedureCall = ProcedureCall.fromSuppositionNode(suppositionNode, context), temporaryContext = null;
                context = temporaryContext; ///
                var supposition = new Supposition(context, string, node, statement, procedureCall);
                return supposition;
            }
        }
    ]);
    return Supposition;
}(), _define_property(_Supposition, "name", "Supposition"), _Supposition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgVGVtcG9yYXJ5Q29udGV4dCBmcm9tIFwiLi4vY29udGV4dC90ZW1wb3JhcnlcIjtcbmltcG9ydCBhc3NpZ25Bc3NpZ25tZW50cyBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0YXRlbWVudFwiO1xuaW1wb3J0IHsgdGVybXNGcm9tSlNPTiwgZnJhbWVzRnJvbUpTT04sIHN0YXRlbWVudEZyb21KU09OLCBwcm9jZWR1cmVDYWxsRnJvbUpTT04sIHRlcm1zVG9UZXJtc0pTT04sIGZyYW1lc1RvRnJhbWVzSlNPTiwgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OLCBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3VwcG9zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZUNhbGw7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVtcG9yYXJ5Q29udGV4dCA9IFRlbXBvcmFyeUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gdGVtcG9yYXJ5Q29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllcykge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgICBzdGVwID0gU3RlcC5mcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IHN0ZXA7ICAvLy9cblxuICAgICAgICAgIGNvbnRleHQuYWRkU3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YpO1xuXG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsVmVyaWZpZXMgPSB0aGlzLnByb2NlZHVyZUNhbGwudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQ2FsbFZlcmlmaWVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVzID0gc3RhdGVtZW50VW5pZmllczsgIC8vL1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmNvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBpbmRlcGVuZGVudGx5Li4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkgPSB0aGlzLnN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMucHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbmx5LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBPclN1YlByb29mU3RlcCA9IHN0ZXBPclN1YnByb29mLmlzU3RlcCgpLFxuICAgICAgICAgIHN1YnByb29mID0gc3RlcE9yU3ViUHJvb2ZTdGVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwT3JTdWJwcm9vZixcbiAgICAgICAgICBzdGVwID0gc3RlcE9yU3ViUHJvb2ZTdGVwID9cbiAgICAgICAgICAgICAgICAgICBzdGVwT3JTdWJwcm9vZiA6XG4gICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdCgpO1xuXG4gICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBzdWJwcm9vZlVuaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIGlmIChzdGVwICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0ZXAoc3RlcCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHN0ZXBPclN1YnByb29mVW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXM7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RlcE9yU3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBzdWJzdGl0dXRpb25zLnJlc29sdmUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID9cbiAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2soY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RlcE9yU3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcFVuaWZpZXM7XG5cbiAgICBjb250ZXh0ID0gc3RlcC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBzdGVwVW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXM7ICAvLy9cblxuICAgIHJldHVybiBzdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnQgPSBzdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyA9IHN1cHBvc2l0aW9uU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgc3VwcG9zaXRpb24ncyAnJHtzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgc3VwcG9zaXRpb24ncyAnJHtzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5jb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgZnJhbWVzLFxuICAgICAgICB0ZXJtcztcblxuICAgIGZyYW1lcyA9IHRoaXMuY29udGV4dC5nZXRGcmFtZXMoKTtcblxuICAgIHRlcm1zID0gdGhpcy5jb250ZXh0LmdldFRlcm1zKCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHRoaXMucHJvY2VkdXJlQ2FsbCksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpLFxuICAgICAgICAgIHRlcm1zSlNPTiA9IHRlcm1zVG9UZXJtc0pTT04odGVybXMpO1xuXG4gICAgZnJhbWVzID0gZnJhbWVzSlNPTjsgIC8vL1xuXG4gICAgdGVybXMgPSB0ZXJtc0pTT047ICAvLy9cblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsSlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCxcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIGZyYW1lcyxcbiAgICAgICAgICAgIHRlcm1zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1cHBvc2l0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gVGVtcG9yYXJ5Q29udGV4dC5mcm9tVGVybXNBbmRGcmFtZXModGVybXMsIGZyYW1lcywgY29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQsIFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIG5vZGUgPSBzdXBwb3NpdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN1cHBvc2l0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsIiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJnZXRQcm9jZWR1cmVDYWxsIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0ZW1wb3JhcnlDb250ZXh0IiwiVGVtcG9yYXJ5Q29udGV4dCIsImZyb21Ob3RoaW5nIiwic3VwcG9zaXRpb25TdHJpbmciLCJ0cmFjZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZXMiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJTdGVwIiwiZWxlbWVudHMiLCJzdGVwIiwiZnJvbVN0YXRlbWVudCIsInN0ZXBPclN1YnByb29mIiwiYWRkU3RlcE9yU3VicHJvb2YiLCJwcm9jZWR1cmVDYWxsVmVyaWZpZXMiLCJkZWJ1ZyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmciLCJzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSIsInByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwic3RlcE9yU3ViUHJvb2ZTdGVwIiwiaXNTdGVwIiwic3VicHJvb2YiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJ1bmlmeVN0ZXAiLCJyZXNvbHZlIiwiY29udGludWUiLCJyb2xsYmFjayIsInN0ZXBVbmlmaWVzIiwic3VicHJvb2ZTdHJpbmciLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsInN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJ0b0pTT04iLCJmcmFtZXMiLCJ0ZXJtcyIsImdldEZyYW1lcyIsImdldFRlcm1zIiwicHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJmcmFtZXNKU09OIiwiZnJhbWVzVG9GcmFtZXNKU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1zRnJvbUpTT04iLCJmcmFtZXNGcm9tSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwicHJvY2VkdXJlQ2FsbEZyb21KU09OIiwiZnJvbVRlcm1zQW5kRnJhbWVzIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsIlN0YXRlbWVudCIsIlByb2NlZHVyZUNhbGwiLCJub2RlQXNTdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnRUFScUI7Z0VBQ1E7NkRBQ0M7eUJBR2lCO29CQUMySTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFMUwsV0FBZUEsSUFBQUEsZ0JBQU0sZ0NBQUM7YUFBTUMsWUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxhQUFhO2dDQURqQ0w7UUFFeEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1os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