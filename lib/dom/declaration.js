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
    function Declaration(string, node, statement, metavariable) {
        _class_call_check(this, Declaration);
        this.string = string;
        this.node = node;
        this.statement = statement;
        this.metavariable = metavariable;
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
                var declarationString = this.string, substitutionString = substitution.getString();
                context.trace("Matching the '".concat(substitutionString, "' substitution against the '").concat(declarationString, "' declaration..."));
                var simple = this.isSimple();
                if (simple) {
                    var judgement = context.findJudgementByMetavariable(this.metavariable);
                    if (judgement !== null) {
                        var declaration = judgement.getDeclaration();
                        substitutionMatches = declaration.matchSubstitution(substitution, context);
                    }
                } else {
                    var statement = substitution.getStatement(), metavariable = substitution.getMetavariable(), statementEqualToStatement = this.statement.isEqualTo(statement), metavariableEqualToMetavariable = this.metavariable.isEqualTo(metavariable);
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
                var declarationString = this.string, metavariableString = this.metavariable.getString();
                context.trace("Verifying the '".concat(declarationString, "' declaration's '").concat(metavariableString, "' metavariable as a reference..."));
                var reference = referenceFromMetavariable(this.metavariable, context), referenceVerifies = reference.verify(context);
                metavariableVerifiesAsReference = referenceVerifies; ///
                if (metavariableVerifiesAsReference) {
                    context.debug("...verified the '".concat(declarationString, "' declaration's '").concat(metavariableString, "' metavariable as a reference."));
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
                var declarationString = this.string, metavariableString = this.metavariable.getString();
                context.trace("Verifying the '".concat(declarationString, "' declaration's '").concat(metavariableString, "' metavariable..."));
                verifiesAsMetavariable = this.metavariable.verify(context);
                if (verifiesAsMetavariable) {
                    context.debug("...verified the '".concat(declarationString, "' declaration's '").concat(metavariableString, "' metavariable."));
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
                var reference = referenceFromMetavariable(this.metavariable, context), metaLemmaMetatheoremPresent = context.isMetaLemmaMetatheoremPresentByReference(reference);
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
                var reference = referenceFromMetavariable(this.metavariable, context), labelUnifies = reference.unifyLabel(label, substitutions, context);
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
function referenceFromMetavariable(metavariable, context) {
    var Reference = _dom.default.Reference, metavariableNode = metavariable.getNode(), reference = Reference.fromMetavariableNode(metavariableNode, context);
    return reference;
}
function declarationFromDeclarationNode(declarationNode, context) {
    var Metavariable = _dom.default.Metavariable, Declaration = _dom.default.Declaration, Statement = _dom.default.Statement, node = declarationNode, string = context.nodeAsString(node), metavariable = Metavariable.fromDeclarationNode(declarationNode, context), statement = Statement.fromDeclarationNode(declarationNode, context), declaration = new Declaration(string, node, statement, metavariable);
    return declaration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdGF0ZW1lbnQgPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25NYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBqdWRnZW1lbnQuZ2V0RGVjbGFyYXRpb24oKTtcblxuICAgICAgICBzdWJzdGl0dXRpb25NYXRjaGVzID0gZGVjbGFyYXRpb24ubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSAmJiBzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbk1hdGNoZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVzIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVzQXNNZXRhdmFyaWFibGUgPSB0aGlzLnZlcmlmeUFzTWV0YXZhcmlhYmxlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllcyA9IHZlcmlmaWVzQXNNZXRhdmFyaWFibGU7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllc0FzUmVmZXJlbmNlID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVBc1JlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzQXNSZWZlcmVuY2UpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlQXNSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWZXJpZmllc0FzUmVmZXJlbmNlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbidzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBhcyBhIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlVmVyaWZpZXMgPSByZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgbWV0YXZhcmlhYmxlVmVyaWZpZXNBc1JlZmVyZW5jZSA9IHJlZmVyZW5jZVZlcmlmaWVzOyAgLy8vXG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXNBc1JlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgYXMgYSByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVzQXNSZWZlcmVuY2U7XG4gIH1cblxuICB2ZXJpZnlTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCA9PT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5QXNNZXRhdmFyaWFibGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0FzTWV0YXZhcmlhYmxlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICB2ZXJpZmllc0FzTWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzQXNNZXRhdmFyaWFibGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc0FzTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgc3RhdGVkIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtcyA9IGNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbXNVbmlmeSA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtcy5ldmVyeSgobWV0YUxlbW1hTWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzID0gdGhpcy51bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXNVbmlmeTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgc3RhdGVkIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50ID0gY29udGV4dC5pc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50OyAvLy9cblxuICAgIGlmICh2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZXJpdmVkIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsXG4gICAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseTsgIC8vL1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vOy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UgPSBsYWJlbFVuaWZpZXM7IC8vL1xuXG4gICAgaWYgKGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZTtcbiAgfVxuXG4gIHVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRDb250ZXh0KCk7ICAvLy9cblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBsYWJlbFN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbGFiZWwgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRMYWJlbCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsU3Vic3RpdHV0aW9uc0NvcnJlbGF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnRTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAobGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucykge1xuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldERlY2xhcmF0aW9uTm9kZSgpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25Gcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uRnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBkZWNsYXJhdGlvbkZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlLCBEZWNsYXJhdGlvbiwgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBkZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBkZWNsYXJhdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkRlY2xhcmF0aW9uIiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRTdGF0ZW1lbnQiLCJnZXRNZXRhdmFyaWFibGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsIm1hdGNoU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvbk1hdGNoZXMiLCJkZWNsYXJhdGlvblN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwiZGVjbGFyYXRpb24iLCJnZXREZWNsYXJhdGlvbiIsInN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZGVidWciLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVzIiwidmVyaWZpZXNBc01ldGF2YXJpYWJsZSIsInZlcmlmeUFzTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVmVyaWZpZXNBc1JlZmVyZW5jZSIsInZlcmlmeU1ldGF2YXJpYWJsZUFzUmVmZXJlbmNlIiwic3RhdGVtZW50VmVyaWZpZXMiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZVZlcmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1zIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1zVW5pZnkiLCJldmVyeSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzIiwidW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudCIsImlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSIsInVuaWZ5TGFiZWwiLCJsYWJlbCIsImxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UiLCJsYWJlbFN0cmluZyIsImxhYmVsVW5pZmllcyIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwiZ2V0Q29udGV4dCIsImxhYmVsU3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImdldExhYmVsIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudFVVbmlmaWVzIiwibGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJmcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJkZWNsYXJhdGlvbk5vZGUiLCJnZXREZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbkZyb21EZWNsYXJhdGlvbk5vZGUiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwibmFtZSIsIlJlZmVyZW5jZSIsImRvbSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsIk1ldGF2YXJpYWJsZSIsIlN0YXRlbWVudCIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7MkRBTmdCO29FQUNVOzJCQUdrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUMsV0FBZUEsSUFBQUEsZ0JBQVcsZ0NBQUM7YUFBTUMsWUFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFlBQVk7Z0NBRGxCSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOzs7O1lBR3RCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFlBQVk7WUFDMUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBVSxJQUFJLENBQUNQLFNBQVMsS0FBSztnQkFFbkMsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVksRUFBRUMsT0FBTztnQkFDckMsSUFBSUMsc0JBQXNCO2dCQUUxQixJQUFNQyxvQkFBb0IsSUFBSSxDQUFDZCxNQUFNLEVBQy9CZSxxQkFBcUJKLGFBQWFQLFNBQVM7Z0JBRWpEUSxRQUFRSSxLQUFLLENBQUMsQUFBQyxpQkFBaUVGLE9BQWpEQyxvQkFBbUIsZ0NBQWdELE9BQWxCRCxtQkFBa0I7Z0JBRWxHLElBQU1MLFNBQVMsSUFBSSxDQUFDRCxRQUFRO2dCQUU1QixJQUFJQyxRQUFRO29CQUNWLElBQU1RLFlBQVlMLFFBQVFNLDJCQUEyQixDQUFDLElBQUksQ0FBQ2YsWUFBWTtvQkFFdkUsSUFBSWMsY0FBYyxNQUFNO3dCQUN0QixJQUFNRSxjQUFjRixVQUFVRyxjQUFjO3dCQUU1Q1Asc0JBQXNCTSxZQUFZVCxpQkFBaUIsQ0FBQ0MsY0FBY0M7b0JBQ3BFO2dCQUNGLE9BQU87b0JBQ0wsSUFBTVYsWUFBWVMsYUFBYUwsWUFBWSxJQUNyQ0gsZUFBZVEsYUFBYUosZUFBZSxJQUMzQ2MsNEJBQTRCLElBQUksQ0FBQ25CLFNBQVMsQ0FBQ29CLFNBQVMsQ0FBQ3BCLFlBQ3JEcUIsa0NBQWtDLElBQUksQ0FBQ3BCLFlBQVksQ0FBQ21CLFNBQVMsQ0FBQ25CO29CQUVwRSxJQUFJb0IsbUNBQW1DRiwyQkFBMkI7d0JBQ2hFUixzQkFBc0I7b0JBQ3hCO2dCQUNGO2dCQUVBLElBQUlBLHFCQUFxQjtvQkFDdkJELFFBQVFZLEtBQUssQ0FBQyxBQUFDLG1CQUFrRVQsT0FBaERELG1CQUFrQixnQ0FBaUQsT0FBbkJDLG9CQUFtQjtnQkFDdEc7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRWYsT0FBTztnQkFDakMsSUFBSWdCLFdBQVc7Z0JBRWYsSUFBTWQsb0JBQW9CLElBQUksQ0FBQ2QsTUFBTSxFQUFHLEdBQUc7Z0JBRTNDWSxRQUFRSSxLQUFLLENBQUMsQUFBQyxrQkFBbUMsT0FBbEJGLG1CQUFrQjtnQkFFbEQsSUFBTUwsU0FBUyxJQUFJLENBQUNELFFBQVE7Z0JBRTVCLElBQUlDLFFBQVE7b0JBQ1YsSUFBTW9CLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSixhQUFhQyxRQUFRZjtvQkFFOUVnQixXQUFXQyx3QkFBd0IsR0FBRztnQkFDeEMsT0FBTztvQkFDTCxJQUFNRSxrQ0FBa0MsSUFBSSxDQUFDQyw2QkFBNkIsQ0FBQ04sYUFBYUMsUUFBUWY7b0JBRWhHLElBQUltQixpQ0FBaUM7d0JBQ25DLElBQU1FLG9CQUFvQixJQUFJLENBQUNDLGVBQWUsQ0FBQ1IsYUFBYUMsUUFBUWY7d0JBRXBFLElBQUlxQixtQkFBbUI7NEJBQ3JCLElBQUlFLHFCQUFxQixPQUNyQkMsc0JBQXNCOzRCQUUxQixJQUFJVCxRQUFRO2dDQUNWUSxxQkFBcUIsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ1gsYUFBYWQ7NEJBQzFELE9BQU87Z0NBQ0x3QixzQkFBc0IsSUFBSSxDQUFDRSxpQkFBaUIsQ0FBQzFCOzRCQUMvQzs0QkFFQSxJQUFJdUIsc0JBQXNCQyxxQkFBcUI7Z0NBQzdDUixXQUFXOzRCQUNiO3dCQUNGO29CQUNGO29CQUVBLElBQUlBLFVBQVU7d0JBQ1poQixRQUFRWSxLQUFLLENBQUMsQUFBQyxvQkFBcUMsT0FBbEJWLG1CQUFrQjtvQkFDdEQ7Z0JBQ0Y7Z0JBRUEsT0FBT2M7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJOLFdBQVcsRUFBRUMsTUFBTSxFQUFFZixPQUFPO2dCQUN4RCxJQUFJbUI7Z0JBRUosSUFBTWpCLG9CQUFvQixJQUFJLENBQUNkLE1BQU0sRUFDL0J1QyxxQkFBcUIsSUFBSSxDQUFDcEMsWUFBWSxDQUFDQyxTQUFTO2dCQUV0RFEsUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQXNEdUIsT0FBckN6QixtQkFBa0IscUJBQXNDLE9BQW5CeUIsb0JBQW1CO2dCQUV4RixJQUFNQyxZQUFZQywwQkFBMEIsSUFBSSxDQUFDdEMsWUFBWSxFQUFFUyxVQUN6RDhCLG9CQUFvQkYsVUFBVWYsTUFBTSxDQUFDYjtnQkFFM0NtQixrQ0FBa0NXLG1CQUFvQixHQUFHO2dCQUV6RCxJQUFJWCxpQ0FBaUM7b0JBQ25DbkIsUUFBUVksS0FBSyxDQUFDLEFBQUMsb0JBQXdEZSxPQUFyQ3pCLG1CQUFrQixxQkFBc0MsT0FBbkJ5QixvQkFBbUI7Z0JBQzVGO2dCQUVBLE9BQU9SO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCUixXQUFXLEVBQUVDLE1BQU0sRUFBRWYsT0FBTztnQkFDMUMsSUFBSXFCO2dCQUVKLElBQUksSUFBSSxDQUFDL0IsU0FBUyxLQUFLLE1BQU07b0JBQzNCK0Isb0JBQW9CO2dCQUN0QixPQUFPO29CQUNMLElBQU1VLGtCQUFrQixJQUFJLENBQUN6QyxTQUFTLENBQUNFLFNBQVM7b0JBRWhEUSxRQUFRSSxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEIyQixpQkFBZ0I7b0JBRWhEaEIsU0FBUyxNQUFPLEdBQUc7b0JBRW5CRCxjQUFjLE1BQU0sR0FBRztvQkFFdkJPLG9CQUFvQixJQUFJLENBQUMvQixTQUFTLENBQUN1QixNQUFNLENBQUNDLGFBQWFDLFFBQVFmO29CQUUvRCxJQUFJcUIsbUJBQW1CO3dCQUNyQnJCLFFBQVFZLEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQm1CLGlCQUFnQjtvQkFDcEQ7Z0JBQ0Y7Z0JBRUEsT0FBT1Y7WUFDVDs7O1lBRUFILEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJKLFdBQVcsRUFBRUMsTUFBTSxFQUFFZixPQUFPO2dCQUMvQyxJQUFJaUI7Z0JBRUosSUFBTWYsb0JBQW9CLElBQUksQ0FBQ2QsTUFBTSxFQUMvQnVDLHFCQUFxQixJQUFJLENBQUNwQyxZQUFZLENBQUNDLFNBQVM7Z0JBRXREUSxRQUFRSSxLQUFLLENBQUMsQUFBQyxrQkFBc0R1QixPQUFyQ3pCLG1CQUFrQixxQkFBc0MsT0FBbkJ5QixvQkFBbUI7Z0JBRXhGVix5QkFBeUIsSUFBSSxDQUFDMUIsWUFBWSxDQUFDc0IsTUFBTSxDQUFDYjtnQkFFbEQsSUFBSWlCLHdCQUF3QjtvQkFDMUJqQixRQUFRWSxLQUFLLENBQUMsQUFBQyxvQkFBd0RlLE9BQXJDekIsbUJBQWtCLHFCQUFzQyxPQUFuQnlCLG9CQUFtQjtnQkFDNUY7Z0JBRUEsT0FBT1Y7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJYLFdBQVcsRUFBRWQsT0FBTzs7Z0JBQ25DLElBQUl1QjtnQkFFSixJQUFNckIsb0JBQW9CLElBQUksQ0FBQ2QsTUFBTSxFQUFHLEdBQUc7Z0JBRTNDWSxRQUFRSSxLQUFLLENBQUMsQUFBQyxrQkFBbUMsT0FBbEJGLG1CQUFrQjtnQkFFbEQsSUFBTTBCLFlBQVlDLDBCQUEwQixJQUFJLENBQUN0QyxZQUFZLEVBQUVTLFVBQ3pEZ0Msc0JBQXNCaEMsUUFBUWlDLGdDQUFnQyxDQUFDTDtnQkFFckUsSUFBSUkscUJBQXFCO29CQUN2QlQscUJBQXFCO2dCQUN2QixPQUFPO29CQUNMLElBQU1XLHdCQUF3QmxDLFFBQVFtQyxvQ0FBb0MsQ0FBQ1AsWUFDckVRLDZCQUE2QkYsc0JBQXNCRyxLQUFLLENBQUMsU0FBQ0M7d0JBQ3hELElBQU1DLDhCQUE4QixNQUFLQyx5QkFBeUIsQ0FBQ0Ysc0JBQXNCdEM7d0JBRXpGLElBQUl1Qyw2QkFBNkI7NEJBQy9CLE9BQU87d0JBQ1Q7b0JBQ0Y7b0JBRU5oQixxQkFBcUJhLDRCQUE0QixHQUFHO2dCQUN0RDtnQkFFQSxJQUFJYixvQkFBb0I7b0JBQ3RCdkIsUUFBUVksS0FBSyxDQUFDLEFBQUMsb0JBQXFDLE9BQWxCVixtQkFBa0I7Z0JBQ3REO2dCQUVBLE9BQU9xQjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjFCLE9BQU87Z0JBQ3ZCLElBQUl3QjtnQkFFSixJQUFNdEIsb0JBQW9CLElBQUksQ0FBQ2QsTUFBTSxFQUFHLEdBQUc7Z0JBRTNDWSxRQUFRSSxLQUFLLENBQUMsQUFBQyxrQkFBbUMsT0FBbEJGLG1CQUFrQjtnQkFFbEQsSUFBTTBCLFlBQVlDLDBCQUEwQixJQUFJLENBQUN0QyxZQUFZLEVBQUVTLFVBQ3pEeUMsOEJBQThCekMsUUFBUTBDLHdDQUF3QyxDQUFDZDtnQkFFckZKLHNCQUFzQmlCLDZCQUE2QixHQUFHO2dCQUV0RCxJQUFJakIscUJBQXFCO29CQUN2QnhCLFFBQVFZLEtBQUssQ0FBQyxBQUFDLG9CQUFxQyxPQUFsQlYsbUJBQWtCO2dCQUN0RDtnQkFFQSxPQUFPc0I7WUFDVDs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUEsZUFBZXJELFNBQVMsRUFBRXNELGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dCQUN0RSxJQUFJQztnQkFFSixJQUFNbEQsU0FBUyxJQUFJLENBQUNELFFBQVE7Z0JBRTVCLElBQUlDLFFBQVE7b0JBQ1ZrRCxtQkFBbUI7Z0JBQ3JCLE9BQU87b0JBQ0wsSUFBTS9DLFVBQVU2QyxnQkFDVmQsa0JBQWtCekMsVUFBVUUsU0FBUyxJQUNyQ3dELDZCQUE2QixJQUFJLENBQUMxRCxTQUFTLENBQUNFLFNBQVM7b0JBRTNEUSxRQUFRSSxLQUFLLENBQUMsQUFBQyxpQkFBd0Q0QyxPQUF4Q2pCLGlCQUFnQiwwQkFBbUQsT0FBM0JpQiw0QkFBMkI7b0JBRWxHLElBQU1DLG1CQUFtQixJQUFJLENBQUMzRCxTQUFTLEVBQ2pDNEQsb0JBQW9CNUQsV0FDcEI2RCxpQ0FBaUNDLElBQUFBLHdDQUEyQixFQUFDSCxrQkFBa0JDLG1CQUFtQk4sZUFBZUMsZ0JBQWdCQztvQkFFdklDLG1CQUFtQkksZ0NBQWlDLEdBQUc7b0JBRXZELElBQUlKLGtCQUFrQjt3QkFDcEIvQyxRQUFRWSxLQUFLLENBQUMsQUFBQyxtQkFBMERvQyxPQUF4Q2pCLGlCQUFnQiwwQkFBbUQsT0FBM0JpQiw0QkFBMkI7b0JBQ3RHO2dCQUNGO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsS0FBSyxFQUFFVixhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQkFDOUQsSUFBSVM7Z0JBRUosSUFBTXZELFVBQVU2QyxnQkFDVlcsY0FBY0YsTUFBTTlELFNBQVMsSUFDN0JVLG9CQUFvQixJQUFJLENBQUNkLE1BQU0sRUFBRyxJQUFJO2dCQUU1Q1ksUUFBUUksS0FBSyxDQUFDLEFBQUMsaUJBQWdERixPQUFoQ3NELGFBQVksc0JBQXNDLE9BQWxCdEQsbUJBQWtCO2dCQUVqRixJQUFNMEIsWUFBWUMsMEJBQTBCLElBQUksQ0FBQ3RDLFlBQVksRUFBRVMsVUFDekR5RCxlQUFlN0IsVUFBVXlCLFVBQVUsQ0FBQ0MsT0FBT1YsZUFBZTVDO2dCQUVoRXVELDRCQUE0QkUsY0FBYyxHQUFHO2dCQUU3QyxJQUFJRiwyQkFBMkI7b0JBQzdCdkQsUUFBUVksS0FBSyxDQUFDLEFBQUMsbUJBQWtEVixPQUFoQ3NELGFBQVksc0JBQXNDLE9BQWxCdEQsbUJBQWtCO2dCQUNyRjtnQkFFQSxPQUFPcUQ7WUFDVDs7O1lBRUFmLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEJGLG9CQUFvQixFQUFFdEMsT0FBTztnQkFDckQsSUFBSXVDLDhCQUE4QjtnQkFFbEMsSUFBTXJDLG9CQUFvQixJQUFJLENBQUNkLE1BQU0sRUFDL0JzRSw2QkFBNkJwQixxQkFBcUI5QyxTQUFTO2dCQUVqRVEsUUFBUUksS0FBSyxDQUFDLEFBQUMsaUJBQW1GRixPQUFuRXdELDRCQUEyQiwwQ0FBMEQsT0FBbEJ4RCxtQkFBa0I7Z0JBRXBILElBQU0yQyxpQkFBaUI3QyxTQUFTLEdBQUc7Z0JBRW5DQSxVQUFVc0MscUJBQXFCcUIsVUFBVSxJQUFLLEdBQUc7Z0JBRWpELElBQU1iLGtCQUFrQjlDLFNBQ2xCNEQscUJBQXFCQyxzQkFBYSxDQUFDQyxXQUFXLElBQzlDUixRQUFRaEIscUJBQXFCeUIsUUFBUSxJQUNyQ25CLGdCQUFnQmdCLG9CQUNoQkgsZUFBZSxJQUFJLENBQUNKLFVBQVUsQ0FBQ0MsT0FBT1YsZUFBZUMsZ0JBQWdCQztnQkFFM0UsSUFBSVcsY0FBYztvQkFDaEIsSUFBTU8seUJBQXlCSCxzQkFBYSxDQUFDQyxXQUFXLElBQ2xEeEUsWUFBWWdELHFCQUFxQjVDLFlBQVksSUFDN0NrRCxpQkFBZ0JvQix3QkFDaEJDLG9CQUFvQixJQUFJLENBQUN0QixjQUFjLENBQUNyRCxXQUFXc0QsZ0JBQWVDLGdCQUFnQkM7b0JBRXhGLElBQUltQixtQkFBbUI7d0JBQ3JCLElBQU1DLG9EQUFvRE4sbUJBQW1CTyxzQkFBc0IsQ0FBQ0g7d0JBRXBHLElBQUlFLG1EQUFtRDs0QkFDckQzQiw4QkFBOEIsTUFBTSxHQUFHO3dCQUN6QztvQkFDRjtnQkFDRjtnQkFFQSxJQUFJQSw2QkFBNkI7b0JBQy9CdkMsUUFBUUksS0FBSyxDQUFDLEFBQUMsbUJBQXFGRixPQUFuRXdELDRCQUEyQiwwQ0FBMEQsT0FBbEJ4RCxtQkFBa0I7Z0JBQ3hIO2dCQUVBLE9BQU9xQztZQUNUOzs7O1lBSU82QixLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRXJFLE9BQU87Z0JBQzdDLElBQU1zRSxrQkFBa0JELGNBQWNFLGtCQUFrQixJQUNsRGhFLGNBQWNpRSwrQkFBK0JGLGlCQUFpQnRFO2dCQUVwRSxPQUFPTztZQUNUOzs7WUFFT2tFLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQkgsZUFBZSxFQUFFdEUsT0FBTztnQkFDakQsSUFBTU8sY0FBY2lFLCtCQUErQkYsaUJBQWlCdEU7Z0JBRXBFLE9BQU9PO1lBQ1Q7Ozs7S0FiQSwrQkFBT21FLFFBQU87QUFnQmhCLFNBQVM3QywwQkFBMEJ0QyxZQUFZLEVBQUVTLE9BQU87SUFDdEQsSUFBTSxBQUFFMkUsWUFBY0MsWUFBRyxDQUFqQkQsV0FDRkUsbUJBQW1CdEYsYUFBYUUsT0FBTyxJQUN2Q21DLFlBQVkrQyxVQUFVRyxvQkFBb0IsQ0FBQ0Qsa0JBQWtCN0U7SUFFbkUsT0FBTzRCO0FBQ1Q7QUFFQSxTQUFTNEMsK0JBQStCRixlQUFlLEVBQUV0RSxPQUFPO0lBQzlELElBQVErRSxlQUF5Q0gsWUFBRyxDQUE1Q0csY0FBYzVGLGNBQTJCeUYsWUFBRyxDQUE5QnpGLGFBQWE2RixZQUFjSixZQUFHLENBQWpCSSxXQUM3QjNGLE9BQU9pRixpQkFDUGxGLFNBQVNZLFFBQVFpRixZQUFZLENBQUM1RixPQUM5QkUsZUFBZXdGLGFBQWFOLG1CQUFtQixDQUFDSCxpQkFBaUJ0RSxVQUNqRVYsWUFBWTBGLFVBQVVQLG1CQUFtQixDQUFDSCxpQkFBaUJ0RSxVQUMzRE8sY0FBYyxJQUFJcEIsWUFBWUMsUUFBUUMsTUFBTUMsV0FBV0M7SUFFN0QsT0FBT2dCO0FBQ1QifQ==