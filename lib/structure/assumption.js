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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../structure"));
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
var _default = (0, _structure.define)((_Assumption = /*#__PURE__*/ function() {
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
                var Substitutions = _structure.default.Substitutions, specificContext = context, labelSubstitutions = Substitutions.fromNothing(), label = metaLemmaMetatheorem.getLabel(), substitutions = labelSubstitutions, labelUnifies = this.unifyLabel(label, substitutions, generalContext, specificContext);
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
    var Reference = _structure.default.Reference, Assumption = _structure.default.Assumption, Statement = _structure.default.Statement, node = assumptionNode, string = context.nodeAsString(node), statement = Statement.fromAssumptionNode(assumptionNode, context), reference = Reference.fromAssumptionNode(assumptionNode, context), assumption = new Assumption(string, node, statement, reference);
    return assumption;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvYXNzdW1wdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHN0cnVjdHVyZSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IHJlZmVyZW5jZUZyb21KU09OLCByZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEFzc3VtcHRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gKHRoaXMuc3RhdGVtZW50ID09PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSBqdWRnZW1lbnQuZ2V0RGVjbGFyYXRpb24oKTtcblxuICAgICAgICBzdWJzdGl0dXRpb25NYXRjaGVzID0gYXNzdW1wdGlvbi5tYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCksXG4gICAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gdGhpcy5yZWZlcmVuY2UuaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ICYmIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZXMgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gYWdhaW5zdCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVzQXNNZXRhdmFyaWFibGUgPSB0aGlzLnZlcmlmeVJlZmVyZW5jZUFzTWV0YXZhcmlhYmxlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllcyA9IHJlZmVyZW5jZVZlcmlmaWVzQXNNZXRhdmFyaWFibGU7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMudmVyaWZ5UmVmZXJlbmNlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVJlZmVyZW5jZUFzTWV0YXZhcmlhYmxlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmVyaWZpZXNBc01ldGF2YXJpYWJsZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgYXMgcyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICByZWZlcmVuY2VWZXJpZmllc0FzTWV0YXZhcmlhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZXNBc01ldGF2YXJpYWJsZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGFzIGEgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllc0FzTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YUxlbW1hTWV0YXRoZW9yZW1zID0gY29udGV4dC5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1zVW5pZnkgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXMuZXZlcnkoKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1zVW5pZnk7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgc3RhdGVkIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsXG4gICAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseTsgIC8vL1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLzsvXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxVbmlmaWVzID0gdGhpcy5yZWZlcmVuY2UudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlID0gbGFiZWxVbmlmaWVzOyAvLy9cblxuICAgIGlmIChsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldENvbnRleHQoKTsgIC8vL1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIGxhYmVsU3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBsYWJlbCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldExhYmVsKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VVVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucy5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN0YXRlbWVudFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIGlmIChsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zKSB7XG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzID0gdHJ1ZTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTihyZWZlcmVuY2UpO1xuXG4gICAgICBqc29uID0gcmVmZXJlbmNlSlNPTjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc3VtcHRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBudWxsLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlKVxuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UsIEFzc3VtcHRpb24sIFN0YXRlbWVudCB9ID0gc3RydWN0dXJlLFxuICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IG5ldyBBc3N1bXB0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkFzc3VtcHRpb24iLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFN0YXRlbWVudCIsImdldFJlZmVyZW5jZSIsImdldE1ldGF2YXJpYWJsZSIsImlzU2ltcGxlIiwic2ltcGxlIiwibWF0Y2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9uTWF0Y2hlcyIsImFzc3VtcHRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZSIsImFzc3VtcHRpb24iLCJnZXREZWNsYXJhdGlvbiIsInN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZGVidWciLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVzIiwicmVmZXJlbmNlVmVyaWZpZXNBc01ldGF2YXJpYWJsZSIsInZlcmlmeVJlZmVyZW5jZUFzTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlVmVyaWZpZWQiLCJ2ZXJpZnlSZWZlcmVuY2UiLCJzdGF0ZW1lbnRWZXJpZmllcyIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmaWVzV2hlblN0YXRlZCIsInZlcmlmaWVzV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJyZWZlcmVuY2VTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtcyIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtc1VuaWZ5IiwiZXZlcnkiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnQiLCJpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiYXNzdW1wdGlvblN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSIsInVuaWZ5TGFiZWwiLCJsYWJlbCIsImxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UiLCJsYWJlbFN0cmluZyIsImxhYmVsVW5pZmllcyIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwiZ2V0Q29udGV4dCIsIlN1YnN0aXR1dGlvbnMiLCJzdHJ1Y3R1cmUiLCJsYWJlbFN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImdldExhYmVsIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudFVVbmlmaWVzIiwibGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJ0b0pTT04iLCJqc29uIiwicmVmZXJlbmNlSlNPTiIsInJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTiIsImZyb21KU09OIiwicmVmZXJlbmNlRnJvbUpTT04iLCJmcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImdldEFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZSIsImZyb21Bc3N1bXB0aW9uTm9kZSIsIm5hbWUiLCJSZWZlcmVuY2UiLCJTdGF0ZW1lbnQiLCJub2RlQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2lFQU5zQjsyQkFHc0I7b0JBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUQsV0FBZUEsSUFBQUEsaUJBQU0sK0JBQUM7YUFBTUMsV0FDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUztnQ0FEcEJKO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsU0FBUyxH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