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
    function Assumption(string, node, statement, reference) {
        _class_call_check(this, Assumption);
        this.string = string;
        this.node = node;
        this.statement = statement;
        this.reference = reference;
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
                    var metavariable = this.reference.getMetavariable(), judgement = context.findJudgementByMetavariable(metavariable);
                    if (judgement !== null) {
                        var assumption = judgement.getDeclaration();
                        substitutionMatches = assumption.matchSubstitution(substitution, context);
                    }
                } else {
                    var statement = substitution.getStatement(), metavariable1 = substitution.getMetavariable(), statementEqualToStatement = this.statement.isEqualTo(statement), referenceMetavariableEqualToMetavariable = this.reference.isMetavariableEqualToMetavariable(metavariable1);
                    if (statementEqualToStatement && referenceMetavariableEqualToMetavariable) {
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
                    var referenceVerifiesAsMetavariable = this.verifyReferenceAsMetavariable(assignments, stated, context);
                    verifies = referenceVerifiesAsMetavariable; ///
                } else {
                    var referenceVerified = this.verifyReference(assignments, stated, context);
                    if (referenceVerified) {
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
            key: "verifyReference",
            value: function verifyReference(assignments, stated, context) {
                var referenceVerified;
                var referenceString = this.reference.getString(), assumptionString = this.string; ///
                context.trace("Verifying the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference..."));
                referenceVerified = this.reference.verify(context);
                if (referenceVerified) {
                    context.debug("...verified the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference."));
                }
                return referenceVerified;
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
            key: "verifyReferenceAsMetavariable",
            value: function verifyReferenceAsMetavariable(assignments, stated, context) {
                var referenceVerifiesAsMetavariable = false;
                var referenceString = this.reference.getString(), assumptionString = this.string; ///
                context.trace("Verifying the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference as s metavariable..."));
                var metavariable = this.reference.getMetavariable(), metavariableName = metavariable.getName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
                if (metavariablePresent) {
                    referenceVerifiesAsMetavariable = true;
                }
                if (referenceVerifiesAsMetavariable) {
                    context.debug("...verified the '".concat(assumptionString, "' assumption's '").concat(referenceString, "' reference as a metavariable."));
                }
                return referenceVerifiesAsMetavariable;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var _this = this;
                var verifiesWhenStated;
                var assumptionString = this.string; ///
                context.trace("Verifying the '".concat(assumptionString, "' stated assumption..."));
                var metavariablePresent = context.isMetavariablePresentByReference(this.reference);
                if (metavariablePresent) {
                    verifiesWhenStated = true;
                } else {
                    var metaLemmaMetatheorems = context.findMetaLemmaMetatheoremsByReference(this.reference), metaLemmaMetatheoremsUnify = metaLemmaMetatheorems.every(function(metaLemmaMetatheorem) {
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
                var metaLemmaMetatheoremPresent = context.isMetaLemmaMetatheoremPresentByReference(this.reference);
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
                var labelUnifies = this.reference.unifyLabel(label, substitutions, context);
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
                var Substitutions = _ontology.default.Substitutions, specificContext = context, labelSubstitutions = Substitutions.fromNothing(), label = metaLemmaMetatheorem.getLabel(), substitutions = labelSubstitutions, labelUnifies = this.unifyLabel(label, substitutions, generalContext, specificContext);
                if (labelUnifies) {
                    var statementSubstitutions = Substitutions.fromNothing(), statement = metaLemmaMetatheorem.getStatement(), substitutions1 = statementSubstitutions, statementUUnifies = this.unifyStatement(statement, substitutions1, generalContext, specificContext);
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
function assumptionFromAssumptionNode(assumptionNode, context) {
    var Reference = _ontology.default.Reference, Assumption = _ontology.default.Assumption, Statement = _ontology.default.Statement, node = assumptionNode, string = context.nodeAsString(node), statement = Statement.fromAssumptionNode(assumptionNode, context), reference = Reference.fromAssumptionNode(assumptionNode, context), assumption = new Assumption(string, node, statement, reference);
    return assumption;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9hc3N1bXB0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uL29udG9sb2d5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgcmVmZXJlbmNlRnJvbUpTT04sIHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXNzdW1wdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7IH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdGF0ZW1lbnQgPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25NYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGFnYWluc3QgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IGp1ZGdlbWVudC5nZXREZWNsYXJhdGlvbigpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbk1hdGNoZXMgPSBhc3N1bXB0aW9uLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgJiYgcmVmZXJlbmNlTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICBzdWJzdGl0dXRpb25NYXRjaGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlcyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25NYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXNBc01ldGF2YXJpYWJsZSA9IHRoaXMudmVyaWZ5UmVmZXJlbmNlQXNNZXRhdmFyaWFibGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVzID0gcmVmZXJlbmNlVmVyaWZpZXNBc01ldGF2YXJpYWJsZTsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllcykge1xuICAgICAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCB8fCB2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UmVmZXJlbmNlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgcmVmZXJlbmNlVmVyaWZpZWQgPSB0aGlzLnJlZmVyZW5jZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCA9PT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UmVmZXJlbmNlQXNNZXRhdmFyaWFibGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllc0FzTWV0YXZhcmlhYmxlID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBhcyBzIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHJlZmVyZW5jZVZlcmlmaWVzQXNNZXRhdmFyaWFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllc0FzTWV0YXZhcmlhYmxlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgYXMgYSBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlmaWVzQXNNZXRhdmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgc3RhdGVkIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbXMgPSBjb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbXNVbmlmeSA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtcy5ldmVyeSgobWV0YUxlbW1hTWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzID0gdGhpcy51bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXNVbmlmeTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50OyAvLy9cblxuICAgIGlmICh2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGRlcml2ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGFzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudCxcbiAgICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RhdGVtZW50VVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAgLy8vXG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vOy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbFVuaWZpZXMgPSB0aGlzLnJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UgPSBsYWJlbFVuaWZpZXM7IC8vL1xuXG4gICAgaWYgKGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2U7XG4gIH1cblxuICB1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0Q29udGV4dCgpOyAgLy8vXG5cbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBsYWJlbFN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbGFiZWwgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRMYWJlbCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsU3Vic3RpdHV0aW9uc0NvcnJlbGF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnRTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAobGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucykge1xuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQganNvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04ocmVmZXJlbmNlKTtcblxuICAgICAganNvbiA9IHJlZmVyZW5jZUpTT047ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBc3N1bXB0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbiA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gbnVsbCxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEFzc3VtcHRpb25Ob2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlLCBBc3N1bXB0aW9uLCBTdGF0ZW1lbnQgfSA9IG9udG9sb2d5LFxuICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IG5ldyBBc3N1bXB0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkFzc3VtcHRpb24iLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFN0YXRlbWVudCIsImdldFJlZmVyZW5jZSIsImdldE1ldGF2YXJpYWJsZSIsImlzU2ltcGxlIiwic2ltcGxlIiwibWF0Y2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9uTWF0Y2hlcyIsImFzc3VtcHRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZSIsImFzc3VtcHRpb24iLCJnZXREZWNsYXJhdGlvbiIsInN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZGVidWciLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVzIiwicmVmZXJlbmNlVmVyaWZpZXNBc01ldGF2YXJpYWJsZSIsInZlcmlmeVJlZmVyZW5jZUFzTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlVmVyaWZpZWQiLCJ2ZXJpZnlSZWZlcmVuY2UiLCJzdGF0ZW1lbnRWZXJpZmllcyIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmaWVzV2hlblN0YXRlZCIsInZlcmlmaWVzV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJyZWZlcmVuY2VTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtcyIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtc1VuaWZ5IiwiZXZlcnkiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnQiLCJpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiYXNzdW1wdGlvblN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSIsInVuaWZ5TGFiZWwiLCJsYWJlbCIsImxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UiLCJsYWJlbFN0cmluZyIsImxhYmVsVW5pZmllcyIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwiZ2V0Q29udGV4dCIsIlN1YnN0aXR1dGlvbnMiLCJvbnRvbG9neSIsImxhYmVsU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiZ2V0TGFiZWwiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50VVVuaWZpZXMiLCJsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInRvSlNPTiIsImpzb24iLCJyZWZlcmVuY2VKU09OIiwicmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OIiwiZnJvbUpTT04iLCJyZWZlcmVuY2VGcm9tSlNPTiIsImZyb21KdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlIiwiZnJvbUFzc3VtcHRpb25Ob2RlIiwibmFtZSIsIlJlZmVyZW5jZSIsIlN0YXRlbWVudCIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0VBTnFCOzJCQUd1QjtvQkFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1RCxXQUFlQSxJQUFBQSxnQkFBTSwrQkFBQzthQUFNQyxXQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTO2dDQURwQko7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FB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