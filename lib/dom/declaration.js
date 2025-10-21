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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _unification = require("../utilities/unification");
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
var _Declaration;
var _default = (0, _dom.domAssigned)((_Declaration = /*#__PURE__*/ function() {
    function Declaration(string, node, statement, simpleReference) {
        _class_call_check(this, Declaration);
        this.string = string;
        this.node = node;
        this.statement = statement;
        this.simpleReference = simpleReference;
    }
    _create_class(Declaration, [
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
            key: "getSimpleReference",
            value: function getSimpleReference() {
                return this.simpleReference;
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
                var declarationString = this.string, substitutionString = substitution.getString();
                context.trace("Matching the '".concat(substitutionString, "' substitution against the '").concat(declarationString, "' declaration..."));
                var simple = this.isSimple();
                if (simple) {
                    var judgement = context.findJudgementBySimpleReference(this.simpleReference);
                    if (judgement !== null) {
                        var declaration = judgement.getDeclaration();
                        substitutionMatches = declaration.matchSubstitution(substitution, context);
                    }
                } else {
                    var statement = substitution.getStatement(), simpleReference = substitution.getMetavariable(), statementEqualToStatement = this.statement.isEqualTo(statement), metavariableEqualToMetavariable = this.simpleReference.isEqualTo(simpleReference);
                    if (metavariableEqualToMetavariable && statementEqualToStatement) {
                        substitutionMatches = true;
                    }
                }
                if (substitutionMatches) {
                    context.debug("...matches the '".concat(declarationString, "' substitution against the '").concat(substitutionString, "' declaration."));
                }
                return substitutionMatches;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' declaration..."));
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
                        context.debug("...verified the '".concat(declarationString, "' declaration."));
                    }
                }
                return verifies;
            }
        },
        {
            key: "verifyMetavariableAsReference",
            value: function verifyMetavariableAsReference(assignments, stated, context) {
                var metavariableVerifiesAsReference;
                var declarationString = this.string, metavariableString = this.simpleReference.getString();
                context.trace("Verifying the '".concat(declarationString, "' declaration's '").concat(metavariableString, "' simpleReference as a reference..."));
                var reference = referenceFromMetavariable(this.simpleReference, context), referenceVerifies = reference.verify(context);
                metavariableVerifiesAsReference = referenceVerifies; ///
                if (metavariableVerifiesAsReference) {
                    context.debug("...verified the '".concat(declarationString, "' declaration's '").concat(metavariableString, "' simpleReference as a reference."));
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
                var declarationString = this.string, metavariableString = this.simpleReference.getString();
                context.trace("Verifying the '".concat(declarationString, "' declaration's '").concat(metavariableString, "' simpleReference..."));
                verifiesAsMetavariable = this.simpleReference.verify(context);
                if (verifiesAsMetavariable) {
                    context.debug("...verified the '".concat(declarationString, "' declaration's '").concat(metavariableString, "' simpleReference."));
                }
                return verifiesAsMetavariable;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var _this = this;
                var verifiesWhenStated;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' stated declaration..."));
                var reference = referenceFromMetavariable(this.simpleReference, context), metavariablePresent = context.isMetavariablePresentByReference(reference);
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
                    context.debug("...verified the '".concat(declarationString, "' stated declaration."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiesWhenDerived;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' derived declaration..."));
                var reference = referenceFromMetavariable(this.simpleReference, context), metaLemmaMetatheoremPresent = context.isMetaLemmaMetatheoremPresentByReference(reference);
                verifiesWhenDerived = metaLemmaMetatheoremPresent; ///
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(declarationString, "' derived declaration."));
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
                    var context = generalContext, statementString = statement.getString(), declarationStatementString = this.statement.getString();
                    context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(declarationStatementString, "' statement..."));
                    var generalStatement = this.statement, specificStatement = statement, statementUUnifiesIntrinsically = (0, _unification.unifyStatementIntrinsically)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                    statementUnifies = statementUUnifiesIntrinsically; ///
                    if (statementUnifies) {
                        context.debug("...unified the '".concat(statementString, "' statement with the '").concat(declarationStatementString, "' statement."));
                    }
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyLabel",
            value: function unifyLabel(label, substitutions, generalContext, specificContext) {
                var labelUnifiesWithReference;
                var context = generalContext, labelString = label.getString(), declarationString = this.string; //;/
                context.trace("Unifying the '".concat(labelString, "' label with the '").concat(declarationString, "' declaration..."));
                var reference = referenceFromMetavariable(this.simpleReference, context), labelUnifies = reference.unifyLabel(label, substitutions, context);
                labelUnifiesWithReference = labelUnifies; ///
                if (labelUnifiesWithReference) {
                    context.debug("...unified the '".concat(labelString, "' label with the '").concat(declarationString, "' declaration."));
                }
                return labelUnifiesWithReference;
            }
        },
        {
            key: "unifyMetaLemmaMetatheorem",
            value: function unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
                var metaLemmaMetatheoremUnifies = false;
                var declarationString = this.string, metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();
                context.trace("Unifying the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(declarationString, "' declaration..."));
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
                    context.trace("...unified the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(declarationString, "' declaration..."));
                }
                return metaLemmaMetatheoremUnifies;
            }
        }
    ], [
        {
            key: "fromJudgementNode",
            value: function fromJudgementNode(judgementNode, context) {
                var declarationNode = judgementNode.getDeclarationNode(), declaration = declarationFromDeclarationNode(declarationNode, context);
                return declaration;
            }
        },
        {
            key: "fromDeclarationNode",
            value: function fromDeclarationNode(declarationNode, context) {
                var declaration = declarationFromDeclarationNode(declarationNode, context);
                return declaration;
            }
        }
    ]);
    return Declaration;
}(), _define_property(_Declaration, "name", "Declaration"), _Declaration));
function referenceFromMetavariable(simpleReference, context) {
    var Reference = _dom.default.Reference, metavariableNode = simpleReference.getNode(), reference = Reference.fromMetavariableNode(metavariableNode, context);
    return reference;
}
function declarationFromDeclarationNode(declarationNode, context) {
    var Metavariable = _dom.default.Metavariable, Declaration = _dom.default.Declaration, Statement = _dom.default.Statement, node = declarationNode, string = context.nodeAsString(node), simpleReference = Metavariable.fromDeclarationNode(declarationNode, context), statement = Statement.fromDeclarationNode(declarationNode, context), declaration = new Declaration(string, node, statement, simpleReference);
    return declaration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHNpbXBsZVJlZmVyZW5jZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5zaW1wbGVSZWZlcmVuY2UgPSBzaW1wbGVSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFNpbXBsZVJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaW1wbGVSZWZlcmVuY2U7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdGF0ZW1lbnQgPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25NYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeVNpbXBsZVJlZmVyZW5jZSh0aGlzLnNpbXBsZVJlZmVyZW5jZSk7XG5cbiAgICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBqdWRnZW1lbnQuZ2V0RGVjbGFyYXRpb24oKTtcblxuICAgICAgICBzdWJzdGl0dXRpb25NYXRjaGVzID0gZGVjbGFyYXRpb24ubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc2ltcGxlUmVmZXJlbmNlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IHRoaXMuc2ltcGxlUmVmZXJlbmNlLmlzRXF1YWxUbyhzaW1wbGVSZWZlcmVuY2UpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSAmJiBzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbk1hdGNoZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVzIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVzQXNNZXRhdmFyaWFibGUgPSB0aGlzLnZlcmlmeUFzTWV0YXZhcmlhYmxlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllcyA9IHZlcmlmaWVzQXNNZXRhdmFyaWFibGU7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllc0FzUmVmZXJlbmNlID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVBc1JlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzQXNSZWZlcmVuY2UpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlQXNSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWZXJpZmllc0FzUmVmZXJlbmNlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnNpbXBsZVJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbidzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIHNpbXBsZVJlZmVyZW5jZSBhcyBhIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZSh0aGlzLnNpbXBsZVJlZmVyZW5jZSwgY29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlVmVyaWZpZXMgPSByZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgbWV0YXZhcmlhYmxlVmVyaWZpZXNBc1JlZmVyZW5jZSA9IHJlZmVyZW5jZVZlcmlmaWVzOyAgLy8vXG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXNBc1JlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBzaW1wbGVSZWZlcmVuY2UgYXMgYSByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVzQXNSZWZlcmVuY2U7XG4gIH1cblxuICB2ZXJpZnlTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCA9PT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5QXNNZXRhdmFyaWFibGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0FzTWV0YXZhcmlhYmxlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc2ltcGxlUmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgc2ltcGxlUmVmZXJlbmNlLi4uYCk7XG5cbiAgICB2ZXJpZmllc0FzTWV0YXZhcmlhYmxlID0gdGhpcy5zaW1wbGVSZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzQXNNZXRhdmFyaWFibGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgc2ltcGxlUmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc0FzTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgc3RhdGVkIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlKHRoaXMuc2ltcGxlUmVmZXJlbmNlLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtcyA9IGNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbXNVbmlmeSA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtcy5ldmVyeSgobWV0YUxlbW1hTWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzID0gdGhpcy51bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXNVbmlmeTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgc3RhdGVkIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZSh0aGlzLnNpbXBsZVJlZmVyZW5jZSwgY29udGV4dCksXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50ID0gY29udGV4dC5pc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50OyAvLy9cblxuICAgIGlmICh2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZXJpdmVkIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsXG4gICAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseTsgIC8vL1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vOy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGUodGhpcy5zaW1wbGVSZWZlcmVuY2UsIGNvbnRleHQpLFxuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UgPSBsYWJlbFVuaWZpZXM7IC8vL1xuXG4gICAgaWYgKGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZTtcbiAgfVxuXG4gIHVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRDb250ZXh0KCk7ICAvLy9cblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBsYWJlbFN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbGFiZWwgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRMYWJlbCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsU3Vic3RpdHV0aW9uc0NvcnJlbGF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnRTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAobGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucykge1xuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldERlY2xhcmF0aW9uTm9kZSgpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25Gcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uRnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZShzaW1wbGVSZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHNpbXBsZVJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBkZWNsYXJhdGlvbkZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlLCBEZWNsYXJhdGlvbiwgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBkZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHNpbXBsZVJlZmVyZW5jZSA9IE1ldGF2YXJpYWJsZS5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBzaW1wbGVSZWZlcmVuY2UpO1xuXG4gIHJldHVybiBkZWNsYXJhdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkRlY2xhcmF0aW9uIiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsInNpbXBsZVJlZmVyZW5jZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRTdGF0ZW1lbnQiLCJnZXRTaW1wbGVSZWZlcmVuY2UiLCJpc1NpbXBsZSIsInNpbXBsZSIsIm1hdGNoU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvbk1hdGNoZXMiLCJkZWNsYXJhdGlvblN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5U2ltcGxlUmVmZXJlbmNlIiwiZGVjbGFyYXRpb24iLCJnZXREZWNsYXJhdGlvbiIsImdldE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZGVidWciLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVzIiwidmVyaWZpZXNBc01ldGF2YXJpYWJsZSIsInZlcmlmeUFzTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVmVyaWZpZXNBc1JlZmVyZW5jZSIsInZlcmlmeU1ldGF2YXJpYWJsZUFzUmVmZXJlbmNlIiwic3RhdGVtZW50VmVyaWZpZXMiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZVZlcmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1zIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1zVW5pZnkiLCJldmVyeSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzIiwidW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudCIsImlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSIsInVuaWZ5TGFiZWwiLCJsYWJlbCIsImxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UiLCJsYWJlbFN0cmluZyIsImxhYmVsVW5pZmllcyIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwiZ2V0Q29udGV4dCIsImxhYmVsU3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImdldExhYmVsIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudFVVbmlmaWVzIiwibGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJmcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJkZWNsYXJhdGlvbk5vZGUiLCJnZXREZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbkZyb21EZWNsYXJhdGlvbk5vZGUiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwibmFtZSIsIlJlZmVyZW5jZSIsImRvbSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsIk1ldGF2YXJpYWJsZSIsIlN0YXRlbWVudCIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7MkRBTmdCO29FQUNVOzJCQUdrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUMsV0FBZUEsSUFBQUEsZ0JBQVcsZ0NBQUM7YUFBTUMsWUFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLGVBQWU7Z0NBRHJCSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBOzs7O1lBR3pCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGVBQWU7WUFDN0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBVSxJQUFJLENBQUNQLFNBQVMsS0FBSztnQkFFbkMsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFB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