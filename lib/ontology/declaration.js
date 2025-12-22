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
var _Declaration;
var _default = (0, _ontology.define)((_Declaration = /*#__PURE__*/ function() {
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
                    context = generalContext; ///
                    context.trace("...unified the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(declarationString, "' declaration..."));
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
                var declaration = null;
                if (json !== null) {
                    var string = null, node = null, statement = null, metavariable = (0, _json.metavariableFromJSON)(json, context);
                    declaration = new Declaration(string, node, statement, metavariable);
                }
                return declaration;
            }
        },
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
    var Reference = _ontology.default.Reference, metavariableNode = metavariable.getNode(), reference = Reference.fromMetavariableNode(metavariableNode, context);
    return reference;
}
function declarationFromDeclarationNode(declarationNode, context) {
    var Metavariable = _ontology.default.Metavariable, Declaration = _ontology.default.Declaration, Statement = _ontology.default.Statement, node = declarationNode, string = context.nodeAsString(node), statement = Statement.fromDeclarationNode(declarationNode, context), metavariable = Metavariable.fromDeclarationNode(declarationNode, context), declaration = new Declaration(string, node, statement, metavariable);
    return declaration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tSlNPTiwgbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gKHRoaXMuc3RhdGVtZW50ID09PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gYWdhaW5zdCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0ganVkZ2VtZW50LmdldERlY2xhcmF0aW9uKCk7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IGRlY2xhcmF0aW9uLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgJiYgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCkge1xuICAgICAgICBzdWJzdGl0dXRpb25NYXRjaGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlcyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gYWdhaW5zdCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCB2ZXJpZmllc0FzTWV0YXZhcmlhYmxlID0gdGhpcy52ZXJpZnlBc01ldGF2YXJpYWJsZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgPSB2ZXJpZmllc0FzTWV0YXZhcmlhYmxlOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZXNBc1JlZmVyZW5jZSA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlQXNSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllc0FzUmVmZXJlbmNlKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZUFzUmVmZXJlbmNlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZXNBc1JlZmVyZW5jZTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgYXMgYSByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZVZlcmlmaWVzID0gcmVmZXJlbmNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVzQXNSZWZlcmVuY2UgPSByZWZlcmVuY2VWZXJpZmllczsgIC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzQXNSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGFzIGEgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllc0FzUmVmZXJlbmNlO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUFzTWV0YXZhcmlhYmxlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNBc01ldGF2YXJpYWJsZTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbidzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgdmVyaWZpZXNBc01ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllc0FzTWV0YXZhcmlhYmxlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbidzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNBc01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN0YXRlZCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbXMgPSBjb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1zVW5pZnkgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXMuZXZlcnkoKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1zVW5pZnk7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN0YXRlZCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlcml2ZWQgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LFxuICAgICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseShnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHk7ICAvLy9cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLzsvXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICBsYWJlbFVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlID0gbGFiZWxVbmlmaWVzOyAvLy9cblxuICAgIGlmIChsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2U7XG4gIH1cblxuICB1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0Q29udGV4dCgpOyAgLy8vXG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgbGFiZWxTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGxhYmVsID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbGFiZWxTdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICBsYWJlbFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VVVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVVW5pZmllcykge1xuICAgICAgICBjb25zdCBsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zID0gbGFiZWxTdWJzdGl0dXRpb25zLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3RhdGVtZW50U3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgaWYgKGxhYmVsU3Vic3RpdHV0aW9uc0NvcnJlbGF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbnMpIHtcbiAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMgPSB0cnVlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke21ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQganNvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTihtZXRhdmFyaWFibGUpO1xuXG4gICAgICBqc29uID0gbWV0YXZhcmlhYmxlSlNPTjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZGVjbGFyYXRpb24gPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IG51bGwsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgZGVjbGFyYXRpb24gPSBuZXcgRGVjbGFyYXRpb24oc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RGVjbGFyYXRpb25Ob2RlKCksXG4gICAgICAgICAgZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbkZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25Gcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gb250b2xvZ3ksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZGVjbGFyYXRpb25Gcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSwgRGVjbGFyYXRpb24sIFN0YXRlbWVudCB9ID0gb250b2xvZ3ksXG4gICAgICAgIG5vZGUgPSBkZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBkZWNsYXJhdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJEZWNsYXJhdGlvbiIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0U3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJtYXRjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25NYXRjaGVzIiwiZGVjbGFyYXRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsImp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZSIsImRlY2xhcmF0aW9uIiwiZ2V0RGVjbGFyYXRpb24iLCJzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwibWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsInZlcmlmaWVzQXNNZXRhdmFyaWFibGUiLCJ2ZXJpZnlBc01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVzQXNSZWZlcmVuY2UiLCJ2ZXJpZnlNZXRhdmFyaWFibGVBc1JlZmVyZW5jZSIsInN0YXRlbWVudFZlcmlmaWVzIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInJlZmVyZW5jZSIsInJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VWZXJpZmllcyIsInN0YXRlbWVudFN0cmluZyIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtcyIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtc1VuaWZ5IiwiZXZlcnkiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnQiLCJpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmciLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkiLCJ1bmlmeUxhYmVsIiwibGFiZWwiLCJsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlIiwibGFiZWxTdHJpbmciLCJsYWJlbFVuaWZpZXMiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZyIsImdldENvbnRleHQiLCJsYWJlbFN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJnZXRMYWJlbCIsInN0YXRlbWVudFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRVVW5pZmllcyIsImxhYmVsU3Vic3RpdHV0aW9uc0NvcnJlbGF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbnMiLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwidG9KU09OIiwianNvbiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJmcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwiZnJvbUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlIiwiZGVjbGFyYXRpb25Ob2RlIiwiZ2V0RGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25Gcm9tRGVjbGFyYXRpb25Ob2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsIm5hbWUiLCJSZWZlcmVuY2UiLCJvbnRvbG9neSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsIk1ldGF2YXJpYWJsZSIsIlN0YXRlbWVudCIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0VBUHFCO29FQUNLOzJCQUdrQjtvQkFDeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJFLFdBQWVBLElBQUFBLGdCQUFNLGdDQUFDO2FBQU1DLFlBQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFlBQVk7Z0NBRHZCSjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOzs7O1lBR3RCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFlBQVk7WUFDMUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBVSxJQUFJLENBQUNQLFNBQVMsS0FBSztnQkFFbkMsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVksRUFBRUMsT0FBTztnQkFDckMsSUFBSUMsc0JBQXNCO2dCQUUxQixJQUFNQyxvQkFBb0IsSUFBSSxDQUFD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