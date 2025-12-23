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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9hc3N1bXB0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uL29udG9sb2d5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXNzdW1wdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gKHRoaXMuc3RhdGVtZW50ID09PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSBqdWRnZW1lbnQuZ2V0RGVjbGFyYXRpb24oKTtcblxuICAgICAgICBzdWJzdGl0dXRpb25NYXRjaGVzID0gYXNzdW1wdGlvbi5tYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlICYmIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZXMgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gYWdhaW5zdCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVzQXNNZXRhdmFyaWFibGUgPSB0aGlzLnZlcmlmeUFzTWV0YXZhcmlhYmxlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllcyA9IHZlcmlmaWVzQXNNZXRhdmFyaWFibGU7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllc0FzUmVmZXJlbmNlID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVBc1JlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzQXNSZWZlcmVuY2UpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZUFzUmVmZXJlbmNlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZXNBc1JlZmVyZW5jZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgYXMgYSByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZVZlcmlmaWVzID0gcmVmZXJlbmNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVzQXNSZWZlcmVuY2UgPSByZWZlcmVuY2VWZXJpZmllczsgIC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzQXNSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBhcyBhIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZXNBc1JlZmVyZW5jZTtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ID09PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlBc01ldGF2YXJpYWJsZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzQXNNZXRhdmFyaWFibGU7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIHZlcmlmaWVzQXNNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXNBc01ldGF2YXJpYWJsZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc0FzTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtcyA9IGNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbXNVbmlmeSA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtcy5ldmVyeSgobWV0YUxlbW1hTWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzID0gdGhpcy51bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXNVbmlmeTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsXG4gICAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseTsgIC8vL1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLzsvXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gcmVmZXJlbmNlLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IGxhYmVsVW5pZmllczsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZTtcbiAgfVxuXG4gIHVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRDb250ZXh0KCk7ICAvLy9cblxuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIGxhYmVsU3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBsYWJlbCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldExhYmVsKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VVVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucy5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN0YXRlbWVudFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIGlmIChsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zKSB7XG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzID0gdHJ1ZTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXNzdW1wdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb24gPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IG51bGwsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgYXNzdW1wdGlvbiA9IG5ldyBBc3N1bXB0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0ganVkZ2VtZW50Tm9kZS5nZXRBc3N1bXB0aW9uTm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IG9udG9sb2d5LFxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGUsIEFzc3VtcHRpb24sIFN0YXRlbWVudCB9ID0gb250b2xvZ3ksXG4gICAgICAgIG5vZGUgPSBhc3N1bXB0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXNzdW1wdGlvbiIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0U3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJtYXRjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25NYXRjaGVzIiwiYXNzdW1wdGlvblN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwiYXNzdW1wdGlvbiIsImdldERlY2xhcmF0aW9uIiwic3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsIm1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJkZWJ1ZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZXMiLCJ2ZXJpZmllc0FzTWV0YXZhcmlhYmxlIiwidmVyaWZ5QXNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVWZXJpZmllc0FzUmVmZXJlbmNlIiwidmVyaWZ5TWV0YXZhcmlhYmxlQXNSZWZlcmVuY2UiLCJzdGF0ZW1lbnRWZXJpZmllcyIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmaWVzV2hlblN0YXRlZCIsInZlcmlmaWVzV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlVmVyaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbXMiLCJmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbXNVbmlmeSIsImV2ZXJ5IiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMiLCJ1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50IiwiaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllcyIsImFzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmciLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkiLCJ1bmlmeUxhYmVsIiwibGFiZWwiLCJsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlIiwibGFiZWxTdHJpbmciLCJsYWJlbFVuaWZpZXMiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZyIsImdldENvbnRleHQiLCJTdWJzdGl0dXRpb25zIiwib250b2xvZ3kiLCJsYWJlbFN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImdldExhYmVsIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudFVVbmlmaWVzIiwibGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJ0b0pTT04iLCJqc29uIiwibWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJmcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImdldEFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZSIsImZyb21Bc3N1bXB0aW9uTm9kZSIsIm5hbWUiLCJSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJN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