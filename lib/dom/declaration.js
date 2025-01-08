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
var _query = require("../utilities/query");
var _unification = require("../utilities/unification");
var _brackets = require("../utilities/brackets");
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
var statementNodeQuery = (0, _query.nodeQuery)("/declaration/statement");
var _default = (0, _dom.domAssigned)((_Declaration = /*#__PURE__*/ function() {
    function Declaration(string, reference, statement) {
        _class_call_check(this, Declaration);
        this.string = string;
        this.reference = reference;
        this.statement = statement;
    }
    _create_class(Declaration, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "matchSubstitution",
            value: function matchSubstitution(substitution, context) {
                var substitutionMatches;
                var declarationString = this.string, substitutionString = substitution.getString();
                context.trace("Matching the '".concat(substitutionString, "' substitution with the '").concat(declarationString, "' declaration..."));
                var statement = substitution.getStatement(), metavariable = substitution.getMetavariable(), statementEqualToStatement = this.statement.isEqualTo(statement), referenceMetavariableEqualToMetavariable = this.reference.isMetavariableEqualTo(metavariable);
                substitutionMatches = referenceMetavariableEqualToMetavariable && statementEqualToStatement;
                if (substitutionMatches) {
                    context.debug("...matched the '".concat(declarationString, "' substitution with the '").concat(substitutionString, "' declaration."));
                }
                return substitutionMatches;
            }
        },
        {
            key: "verify",
            value: function verify(frame, assignments, stated, context) {
                var verified = false;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' declaration..."));
                var referenceVerified = this.verifyReference(assignments, stated, context);
                if (referenceVerified) {
                    var statementVerified = this.verifyStatement(assignments, stated, context);
                    if (statementVerified) {
                        var verifiedWhenStated = false, verifiedWhenDerived = false;
                        if (stated) {
                            verifiedWhenStated = this.verifyWhenStated(frame, assignments, context);
                        } else {
                            verifiedWhenDerived = this.verifyWhenDerived(frame, context);
                        }
                        if (verifiedWhenStated || verifiedWhenDerived) {
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    context.debug("...verified the '".concat(declarationString, "' declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyReference",
            value: function verifyReference(assignments, stated, context) {
                var referenceVerified;
                var referenceString = this.reference.getString(), declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' declaration's '").concat(referenceString, "' reference..."));
                referenceVerified = this.reference.verify(context);
                if (referenceVerified) {
                    context.debug("...verified the '".concat(declarationString, "' declaration's '").concat(referenceString, "' reference."));
                }
                return referenceVerified;
            }
        },
        {
            key: "verifyStatement",
            value: function verifyStatement(assignments, stated, context) {
                var statementVerified;
                var statementString = this.statement.getString(), declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' declaration's '").concat(statementString, "' statement..."));
                stated = true; ///
                assignments = null; ///
                statementVerified = this.statement.verify(assignments, stated, context);
                if (statementVerified) {
                    context.debug("...verified the '".concat(declarationString, "' declaration's '").concat(statementString, "' statement."));
                }
                return statementVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(frame, assignments, context) {
                var _this = this;
                var verifiedWhenStated;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' stated declaration..."));
                var metavariablePresent = context.isMetavariablePresentByReference(this.reference);
                if (metavariablePresent) {
                    verifiedWhenStated = true;
                } else {
                    var metaLemmaMetatheorems = context.findMetaLemmaMetatheoremsByReference(this.reference), metaLemmaMetatheoremsUnified = metaLemmaMetatheorems.every(function(metaLemmaMetatheorem) {
                        var metaLemmaMetatheoremUnified = _this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                        if (metaLemmaMetatheoremUnified) {
                            return true;
                        }
                    });
                    verifiedWhenStated = metaLemmaMetatheoremsUnified; ///
                }
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(declarationString, "' stated declaration."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(frame, context) {
                var verifiedWhenDerived;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' derived declaration..."));
                var metaLemmaMetatheorem = context.findMetaLemmaMetatheoremByReference(this.reference);
                if (metaLemmaMetatheorem !== null) {
                    var substitutions = metaLemmaMetatheorem.getSubstitutions(), substitutionsMatches = frame.matchSubstitutions(substitutions, context);
                    verifiedWhenDerived = substitutionsMatches; ///
                }
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(declarationString, "' derived declaration."));
                }
                return verifiedWhenDerived;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnified;
                var context = generalContext, statementString = statement.getString(), declarationString = this.string, declarationStatementString = this.statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(declarationString, "' declaration's '").concat(declarationStatementString, "' statement..."));
                var generalStatement = this.statement, specificStatement = statement, statementUUnifiedIntrinsically = (0, _unification.unifyStatementIntrinsically)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                statementUnified = statementUUnifiedIntrinsically; ///
                if (statementUnified) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(declarationString, "' declaration's '").concat(declarationStatementString, "' statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifyLabelWithReference",
            value: function unifyLabelWithReference(label, substitutions, generalContext, specificContext) {
                var labelUnifiedWithReference;
                var context = generalContext, labelString = label.getString(), referenceString = this.reference.getString(), declarationString = this.string; ///
                context.trace("Unifying the '".concat(labelString, "' label with the '").concat(declarationString, "' declaration's '").concat(referenceString, "' reference..."));
                var labelUnified = this.reference.unifyLabel(label, substitutions, context);
                labelUnifiedWithReference = labelUnified; ///
                if (labelUnifiedWithReference) {
                    context.debug("...unified the '".concat(labelString, "' label with the '").concat(declarationString, "' declaration's '").concat(referenceString, "' reference."));
                }
                return labelUnifiedWithReference;
            }
        },
        {
            key: "unifyMetaLemmaMetatheorem",
            value: function unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
                var metaLemmaMetatheoremUnified;
                var declarationString = this.string, metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();
                context.trace("Unifying the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(declarationString, "' declaration..."));
                var fileContext = metaLemmaMetatheorem.getFileContext(), generalContext = context, specificContext = fileContext, labelSubstitutions = _substitutions.default.fromNothing(), label = metaLemmaMetatheorem.getLabel(), substitutions = labelSubstitutions, labelUnifiedWithReference = this.unifyLabelWithReference(label, substitutions, generalContext, specificContext);
                if (labelUnifiedWithReference) {
                    var statementSubstitutions = _substitutions.default.fromNothing(), statement = metaLemmaMetatheorem.getStatement(), substitutions1 = statementSubstitutions, statementUUnified = this.unifyStatement(statement, substitutions1, generalContext, specificContext);
                    if (statementUUnified) {
                        var labelSubstitutionsMatchStatementSubstitutions = labelSubstitutions.matchSubstitutions(statementSubstitutions);
                        metaLemmaMetatheoremUnified = labelSubstitutionsMatchStatementSubstitutions; ///
                    }
                }
                if (metaLemmaMetatheoremUnified) {
                    context.trace("...unified the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(declarationString, "' declaration..."));
                }
                return metaLemmaMetatheoremUnified;
            }
        }
    ], [
        {
            key: "fromDeclarationNode",
            value: function fromDeclarationNode(declarationNode, context) {
                var Reference = _dom.default.Reference, Statement = _dom.default.Statement, node = declarationNode, string = context.nodeAsString(node);
                var statementNode;
                statementNode = statementNodeQuery(declarationNode);
                statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                var reference = Reference.fromDeclarationNode(declarationNode, context), statement = Statement.fromStatementNode(statementNode, context), declaration = new Declaration(string, reference, statement);
                return declaration;
            }
        }
    ]);
    return Declaration;
}(), _define_property(_Declaration, "name", "Declaration"), _Declaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9zdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZXM7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gdGhpcy5yZWZlcmVuY2UuaXNNZXRhdmFyaWFibGVFcXVhbFRvKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBzdWJzdGl0dXRpb25NYXRjaGVzID0gKHJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgJiYgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoZnJhbWUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGZyYW1lLCBhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoZnJhbWUsIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllZDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgcmVmZXJlbmNlVmVyaWZpZWQgPSB0aGlzLnJlZmVyZW5jZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoZnJhbWUsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBzdGF0ZWQgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbXMgPSBjb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbXNVbmlmaWVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1zLmV2ZXJ5KChtZXRhTGVtbWFNZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSB0aGlzLnVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtc1VuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN0YXRlZCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZXJpdmVkIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbSA9IGNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc01hdGNoZXMgPSBmcmFtZS5tYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBzdWJzdGl0dXRpb25zTWF0Y2hlczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlcml2ZWQgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbidzICcke2RlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllZEludHJpbnNpY2FsbHkgPSB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudFVVbmlmaWVkSW50cmluc2ljYWxseTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7ZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUxhYmVsV2l0aFJlZmVyZW5jZShsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZWRXaXRoUmVmZXJlbmNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsVW5pZmllZCA9IHRoaXMucmVmZXJlbmNlLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVkV2l0aFJlZmVyZW5jZSA9IGxhYmVsVW5pZmllZDsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVkV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZWRXaXRoUmVmZXJlbmNlO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQ7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gZmlsZUNvbnRleHQsXG4gICAgICAgICAgbGFiZWxTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGxhYmVsID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbGFiZWxTdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICBsYWJlbFVuaWZpZWRXaXRoUmVmZXJlbmNlID0gdGhpcy51bmlmeUxhYmVsV2l0aFJlZmVyZW5jZShsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobGFiZWxVbmlmaWVkV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VVVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVVW5pZmllZCkge1xuICAgICAgICBjb25zdCBsYWJlbFN1YnN0aXR1dGlvbnNNYXRjaFN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMubWF0Y2hTdWJzdGl0dXRpb25zKHN0YXRlbWVudFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IGxhYmVsU3Vic3RpdHV0aW9uc01hdGNoU3RhdGVtZW50U3Vic3RpdHV0aW9uczsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke21ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgUmVmZXJlbmNlLCBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gZGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICBsZXQgc3RhdGVtZW50Tm9kZTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoZGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHN0cmluZywgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkRlY2xhcmF0aW9uIiwic3RyaW5nIiwicmVmZXJlbmNlIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwibWF0Y2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9uTWF0Y2hlcyIsImRlY2xhcmF0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlRXF1YWxUbyIsImRlYnVnIiwidmVyaWZ5IiwiZnJhbWUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwicmVmZXJlbmNlVmVyaWZpZWQiLCJ2ZXJpZnlSZWZlcmVuY2UiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJyZWZlcmVuY2VTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbXMiLCJmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbXNVbmlmaWVkIiwiZXZlcnkiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZSIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc01hdGNoZXMiLCJtYXRjaFN1YnN0aXR1dGlvbnMiLCJ1bmlmeVN0YXRlbWVudCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsImRlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nIiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50Iiwic3RhdGVtZW50VVVuaWZpZWRJbnRyaW5zaWNhbGx5IiwidW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5IiwidW5pZnlMYWJlbFdpdGhSZWZlcmVuY2UiLCJsYWJlbCIsImxhYmVsVW5pZmllZFdpdGhSZWZlcmVuY2UiLCJsYWJlbFN0cmluZyIsImxhYmVsVW5pZmllZCIsInVuaWZ5TGFiZWwiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZyIsImZpbGVDb250ZXh0IiwiZ2V0RmlsZUNvbnRleHQiLCJsYWJlbFN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJnZXRMYWJlbCIsInN0YXRlbWVudFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRVVW5pZmllZCIsImxhYmVsU3Vic3RpdHV0aW9uc01hdGNoU3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsImZyb21EZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbk5vZGUiLCJSZWZlcmVuY2UiLCJkb20iLCJTdGF0ZW1lbnQiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwiZGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OzsyREFWZ0I7b0VBQ1U7cUJBRUE7MkJBRWtCO3dCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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