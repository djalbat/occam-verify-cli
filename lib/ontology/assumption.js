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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _unification = require("../utilities/unification");
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
var _Assumption;
var _default = (0, _ontology.define)((_Assumption = /*#__PURE__*/ function() {
    function Assumption(string, node, statement, metavariable) {
        _class_call_check(this, Assumption);
        this.string = string;
        this.node = node;
        this.statement = statement;
        this.metavariable = metavariable;
    }
    _create_class(Assumption, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
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
                    var judgement = context.findJudgementByMetavariable(this.metavariable);
                    if (judgement !== null) {
                        var assumption = judgement.getDeclaration();
                        substitutionMatches = assumption.matchSubstitution(substitution, context);
                    }
                } else {
                    var statement = substitution.getStatement(), metavariable = substitution.getMetavariable(), statementEqualToStatement = this.statement.isEqualTo(statement), metavariableEqualToMetavariable = this.metavariable.isEqualTo(metavariable);
                    if (metavariableEqualToMetavariable && statementEqualToStatement) {
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
                    var verifiesAsMetavariable = this.verifyAsMetavariable(assignments, stated, context);
                    verifies = verifiesAsMetavariable; ///
                } else {
                    var metavariableVerifiesAsReference = this.verifyMetavariableAsReference(assignments, stated, context);
                    if (metavariableVerifiesAsReference) {
                        var statementVerifies = this.verifyStatement(assignments, stated, context);
                        if (statementVerifies) {
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
            key: "verifyMetavariableAsReference",
            value: function verifyMetavariableAsReference(assignments, stated, context) {
                var metavariableVerifiesAsReference;
                var assumptionString = this.string, metavariableString = this.metavariable.getString();
                context.trace("Verifying the '".concat(assumptionString, "' assumption's '").concat(metavariableString, "' metavariable as a reference..."));
                var reference = referenceFromMetavariable(this.metavariable, context), referenceVerifies = reference.verify(context);
                metavariableVerifiesAsReference = referenceVerifies; ///
                if (metavariableVerifiesAsReference) {
                    context.debug("...verified the '".concat(assumptionString, "' assumption's '").concat(metavariableString, "' metavariable as a reference."));
                }
                return metavariableVerifiesAsReference;
            }
        },
        {
            key: "verifyStatement",
            value: function verifyStatement(assignments, stated, context) {
                var statementVerifies;
                if (this.statement === null) {
                    statementVerifies = true;
                } else {
                    var statementString = this.statement.getString();
                    context.trace("Verifying the '".concat(statementString, "' statement..."));
                    stated = true; ///
                    assignments = null; ///
                    statementVerifies = this.statement.verify(assignments, stated, context);
                    if (statementVerifies) {
                        context.debug("...verified the '".concat(statementString, "' statement."));
                    }
                }
                return statementVerifies;
            }
        },
        {
            key: "verifyAsMetavariable",
            value: function verifyAsMetavariable(assignments, stated, context) {
                var verifiesAsMetavariable;
                var assumptionString = this.string, metavariableString = this.metavariable.getString();
                context.trace("Verifying the '".concat(assumptionString, "' assumption's '").concat(metavariableString, "' metavariable..."));
                verifiesAsMetavariable = this.metavariable.verify(context);
                if (verifiesAsMetavariable) {
                    context.debug("...verified the '".concat(assumptionString, "' assumption's '").concat(metavariableString, "' metavariable."));
                }
                return verifiesAsMetavariable;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var _this = this;
                var verifiesWhenStated;
                var assumptionString = this.string; ///
                context.trace("Verifying the '".concat(assumptionString, "' stated assumption..."));
                var reference = referenceFromMetavariable(this.metavariable, context), metavariablePresent = context.isMetavariablePresentByReference(reference);
                if (metavariablePresent) {
                    verifiesWhenStated = true;
                } else {
                    var metaLemmaMetatheorems = context.findMetaLemmaMetatheoremsByReference(reference), metaLemmaMetatheoremsUnify = metaLemmaMetatheorems.every(function(metaLemmaMetatheorem) {
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
                var reference = referenceFromMetavariable(this.metavariable, context), metaLemmaMetatheoremPresent = context.isMetaLemmaMetatheoremPresentByReference(reference);
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
                    var generalStatement = this.statement, specificStatement = statement, statementUUnifiesIntrinsically = (0, _unification.unifyStatementIntrinsically)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
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
                var reference = referenceFromMetavariable(this.metavariable, context), labelUnifies = reference.unifyLabel(label, substitutions, context);
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
                var specificContext = context, labelSubstitutions = _substitutions.default.fromNothing(), label = metaLemmaMetatheorem.getLabel(), substitutions = labelSubstitutions, labelUnifies = this.unifyLabel(label, substitutions, generalContext, specificContext);
                if (labelUnifies) {
                    var statementSubstitutions = _substitutions.default.fromNothing(), statement = metaLemmaMetatheorem.getStatement(), substitutions1 = statementSubstitutions, statementUUnifies = this.unifyStatement(statement, substitutions1, generalContext, specificContext);
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
                    var metavariable = this.getMetavariable(), metavariableJSON = (0, _json.metavariableToMetavariableJSON)(metavariable);
                    json = metavariableJSON; ///
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
                    var string = null, node = null, statement = null, metavariable = (0, _json.metavariableFromJSON)(json, context);
                    assumption = new Assumption(string, node, statement, metavariable);
                }
                return assumption;
            }
        },
        {
            key: "fromJudgementNode",
            value: function fromJudgementNode(judgementNode, context) {
                var assumptionNode = judgementNode.getAssumptionNode(), assumption = assumptionFromAssumptionNode(assumptionNode, context);
                return assumption;
            }
        },
        {
            key: "fromAssumptionNode",
            value: function fromAssumptionNode(assumptionNode, context) {
                var assumption = assumptionFromAssumptionNode(assumptionNode, context);
                return assumption;
            }
        }
    ]);
    return Assumption;
}(), _define_property(_Assumption, "name", "Assumption"), _Assumption));
function referenceFromMetavariable(metavariable, context) {
    var Reference = _ontology.default.Reference, metavariableNode = metavariable.getNode(), reference = Reference.fromMetavariableNode(metavariableNode, context);
    return reference;
}
function assumptionFromAssumptionNode(assumptionNode, context) {
    var Metavariable = _ontology.default.Metavariable, Assumption = _ontology.default.Assumption, Statement = _ontology.default.Statement, node = assumptionNode, string = context.nodeAsString(node), statement = Statement.fromAssumptionNode(assumptionNode, context), metavariable = Metavariable.fromAssumptionNode(assumptionNode, context), assumption = new Assumption(string, node, statement, metavariable);
    return assumption;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9hc3N1bXB0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21KU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEFzc3VtcHRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN0YXRlbWVudCA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gYWdhaW5zdCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uID0ganVkZ2VtZW50LmdldERlY2xhcmF0aW9uKCk7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IGFzc3VtcHRpb24ubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSAmJiBzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbk1hdGNoZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVzIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGFnYWluc3QgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCB2ZXJpZmllc0FzTWV0YXZhcmlhYmxlID0gdGhpcy52ZXJpZnlBc01ldGF2YXJpYWJsZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgPSB2ZXJpZmllc0FzTWV0YXZhcmlhYmxlOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZXNBc1JlZmVyZW5jZSA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlQXNSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllc0FzUmVmZXJlbmNlKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGVBc1JlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVzQXNSZWZlcmVuY2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGFzIGEgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2VWZXJpZmllcyA9IHJlZmVyZW5jZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBtZXRhdmFyaWFibGVWZXJpZmllc0FzUmVmZXJlbmNlID0gcmVmZXJlbmNlVmVyaWZpZXM7ICAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllc0FzUmVmZXJlbmNlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgYXMgYSByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVzQXNSZWZlcmVuY2U7XG4gIH1cblxuICB2ZXJpZnlTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCA9PT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5QXNNZXRhdmFyaWFibGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0FzTWV0YXZhcmlhYmxlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICB2ZXJpZmllc0FzTWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzQXNNZXRhdmFyaWFibGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNBc01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbXMgPSBjb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1zVW5pZnkgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXMuZXZlcnkoKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1zVW5pZnk7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgc3RhdGVkIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgYXNzdW1wdGlvblN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2Fzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LFxuICAgICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseShnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHk7ICAvLy9cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2Fzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy87L1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UgPSBsYWJlbFVuaWZpZXM7IC8vL1xuXG4gICAgaWYgKGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2U7XG4gIH1cblxuICB1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0Q29udGV4dCgpOyAgLy8vXG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgbGFiZWxTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGxhYmVsID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbGFiZWxTdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICBsYWJlbFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VVVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVVW5pZmllcykge1xuICAgICAgICBjb25zdCBsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zID0gbGFiZWxTdWJzdGl0dXRpb25zLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3RhdGVtZW50U3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgaWYgKGxhYmVsU3Vic3RpdHV0aW9uc0NvcnJlbGF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbnMpIHtcbiAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMgPSB0cnVlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke21ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGpzb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04obWV0YXZhcmlhYmxlKTtcblxuICAgICAganNvbiA9IG1ldGF2YXJpYWJsZUpTT047ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBc3N1bXB0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbiA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gbnVsbCxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEFzc3VtcHRpb25Ob2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gb250b2xvZ3ksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSwgQXNzdW1wdGlvbiwgU3RhdGVtZW50IH0gPSBvbnRvbG9neSxcbiAgICAgICAgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBc3N1bXB0aW9uIiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRTdGF0ZW1lbnQiLCJnZXRNZXRhdmFyaWFibGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsIm1hdGNoU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvbk1hdGNoZXMiLCJhc3N1bXB0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUiLCJhc3N1bXB0aW9uIiwiZ2V0RGVjbGFyYXRpb24iLCJzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwibWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsInZlcmlmaWVzQXNNZXRhdmFyaWFibGUiLCJ2ZXJpZnlBc01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVzQXNSZWZlcmVuY2UiLCJ2ZXJpZnlNZXRhdmFyaWFibGVBc1JlZmVyZW5jZSIsInN0YXRlbWVudFZlcmlmaWVzIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInJlZmVyZW5jZSIsInJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VWZXJpZmllcyIsInN0YXRlbWVudFN0cmluZyIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtcyIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtc1VuaWZ5IiwiZXZlcnkiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnQiLCJpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiYXNzdW1wdGlvblN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSIsInVuaWZ5TGFiZWwiLCJsYWJlbCIsImxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UiLCJsYWJlbFN0cmluZyIsImxhYmVsVW5pZmllcyIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwiZ2V0Q29udGV4dCIsImxhYmVsU3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImdldExhYmVsIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudFVVbmlmaWVzIiwibGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJ0b0pTT04iLCJqc29uIiwibWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJmcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImdldEFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZSIsImZyb21Bc3N1bXB0aW9uTm9kZSIsIm5hbWUiLCJSZWZlcmVuY2UiLCJvbnRvbG9neSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxl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