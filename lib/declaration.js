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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _reference = /*#__PURE__*/ _interop_require_default(require("./reference"));
var _query = require("./utilities/query");
var _brackets = require("./utilities/brackets");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var referenceNodeQuery = (0, _query.nodeQuery)("/declaration/reference"), statementNodeQuery = (0, _query.nodeQuery)("/declaration/statement");
var Declaration = /*#__PURE__*/ function() {
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
            key: "unifyStatement",
            value: function unifyStatement(statement, localContext) {
                var statementUnified;
                var statementString = statement.getString(), declarationStatementString = this.statement.getString(); ///
                localContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(declarationStatementString, "' statement..."));
                var statementNode = statement.getNode();
                statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                var statementNodeMatches = this.statement.matchStatementNode(statementNode);
                statementUnified = statementNodeMatches; ///
                if (statementUnified) {
                    localContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(declarationStatementString, "' statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifyMetavariable",
            value: function unifyMetavariable(metavariable, localContext) {
                var metavariableUnified;
                var referenceString = this.reference.getString(), metavariableString = metavariable.getString();
                localContext.trace("Unifying the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference..."));
                var metavariableNode = metavariable.getNode(), metavariableNodeMatches = this.reference.matchMetavariableNode(metavariableNode);
                metavariableUnified = metavariableNodeMatches; ///
                if (metavariableUnified) {
                    localContext.debug("...unified the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference."));
                }
                return metavariableUnified;
            }
        },
        {
            key: "unifySubstitution",
            value: function unifySubstitution(substitution, localContext) {
                var substitutionUnified;
                var declarationString = this.string, substitutionString = substitution.getString();
                localContext.trace("Unifying the '".concat(substitutionString, "' substitution with the '").concat(declarationString, "' declaration..."));
                var statement = substitution.getStatement(), metavariable = substitution.getMetavariable(), statementUnified = this.unifyStatement(statement, localContext), metavariableUnified = this.unifyMetavariable(metavariable, localContext);
                substitutionUnified = metavariableUnified && statementUnified;
                if (substitutionUnified) {
                    localContext.debug("...unified the '".concat(declarationString, "' substitution with the '").concat(substitutionString, "' declaration."));
                }
                return substitutionUnified;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified = false;
                var declarationString = this.string; ///
                localContext.trace("Verifying the '".concat(declarationString, "' declaration..."));
                if (!verified) {
                    var verifiedAtMetaLevel = this.verifyAtMetaLevel(assignments, stated, localContext);
                    verified = verifiedAtMetaLevel; ///
                }
                if (!verified) {
                    var verifiedAtIntrinsicLevel = this.verifyAtIntrinsicLevel(assignments, stated, localContext);
                    verified = verifiedAtIntrinsicLevel; ///
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(declarationString, "' declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyAtMetaLevel",
            value: function verifyAtMetaLevel(assignments, stated, localContext) {
                var verifiedAtMetaLevel;
                var declarationString = this.string; ///
                localContext.trace("Verifying the '".concat(declarationString, "' declaration at meta level..."));
                stated = true; ///
                assignments = null; ///
                var referenceVerified = this.reference.verify(localContext), statementVerified = this.statement.verify(assignments, stated, localContext);
                verifiedAtMetaLevel = referenceVerified && statementVerified;
                if (verifiedAtMetaLevel) {
                    localContext.debug("...verified the '".concat(declarationString, "' declaration at meta level."));
                }
                return verifiedAtMetaLevel;
            }
        },
        {
            key: "verifyAtIntrinsicLevel",
            value: function verifyAtIntrinsicLevel(assignments, stated, localContext) {
                var verifiedAtIntrinsicLevel = false;
                var declarationString = this.string; ///
                localContext.trace("Verifying the '".concat(declarationString, "' declaration at intrinsic level..."));
                var lemma = localContext.findLemmaByReference(this.reference), theorem = localContext.findTheoremByReference(this.reference), lemmaOrTheorem = lemma || theorem;
                if (lemmaOrTheorem !== null) {
                    var lemmaOrTheoremStatement = lemmaOrTheorem.getStatement(), lemmaOrTheoremStatementEqualToStatement = lemmaOrTheoremStatement.isEqualTo(this.statement);
                    verifiedAtIntrinsicLevel = lemmaOrTheoremStatementEqualToStatement; ///
                }
                if (verifiedAtIntrinsicLevel) {
                    localContext.debug("...verified the '".concat(declarationString, "' declaration at intrinsic level."));
                }
                return verifiedAtIntrinsicLevel;
            }
        }
    ], [
        {
            key: "fromDeclarationNode",
            value: function fromDeclarationNode(declarationNode, localContext) {
                var declaration = null;
                if (declarationNode !== null) {
                    var Statement = _shim.default.Statement, referenceNode = referenceNodeQuery(declarationNode);
                    var statementNode = statementNodeQuery(declarationNode);
                    statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                    var reference = _reference.default.fromReferenceNode(referenceNode, localContext), statement = Statement.fromStatementNode(statementNode, localContext), node = declarationNode, string = localContext.nodeAsString(node);
                    declaration = new Declaration(string, reference, statement);
                }
                return declaration;
            }
        }
    ]);
    return Declaration;
}();
Object.assign(_shim.default, {
    Declaration: Declaration
});
var _default = Declaration;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tIFwiLi9yZWZlcmVuY2VcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3QgcmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlY2xhcmF0aW9uL3JlZmVyZW5jZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgbGV0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMuc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnROb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllZDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5yZWZlcmVuY2UubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgbWV0YXZhcmlhYmxlVW5pZmllZCA9IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgc3Vic3RpdHV0aW9uVW5pZmllZCA9IChtZXRhdmFyaWFibGVVbmlmaWVkICYmIHN0YXRlbWVudFVuaWZpZWQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgdmVyaWZpZWRBdE1ldGFMZXZlbCA9IHRoaXMudmVyaWZ5QXRNZXRhTGV2ZWwoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSB2ZXJpZmllZEF0TWV0YUxldmVsOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEF0SW50cmluc2ljTGV2ZWwgPSB0aGlzLnZlcmlmeUF0SW50cmluc2ljTGV2ZWwoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSB2ZXJpZmllZEF0SW50cmluc2ljTGV2ZWw7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXRNZXRhTGV2ZWwoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRNZXRhTGV2ZWw7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbiBhdCBtZXRhIGxldmVsLi4uYCk7XG5cbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZWQgPSB0aGlzLnJlZmVyZW5jZS52ZXJpZnkobG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRBdE1ldGFMZXZlbCA9IChyZWZlcmVuY2VWZXJpZmllZCAmJiBzdGF0ZW1lbnRWZXJpZmllZCk7XG5cbiAgICBpZiAodmVyaWZpZWRBdE1ldGFMZXZlbCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbiBhdCBtZXRhIGxldmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0TWV0YUxldmVsO1xuICB9XG5cbiAgdmVyaWZ5QXRJbnRyaW5zaWNMZXZlbChhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdEludHJpbnNpY0xldmVsID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbiBhdCBpbnRyaW5zaWMgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IGxlbW1hID0gbG9jYWxDb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICB0aGVvcmVtID0gbG9jYWxDb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgIGxlbW1hT3JUaGVvcmVtID0gKGxlbW1hIHx8IHRoZW9yZW0pO1xuXG4gICAgaWYgKGxlbW1hT3JUaGVvcmVtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsZW1tYU9yVGhlb3JlbVN0YXRlbWVudCA9IGxlbW1hT3JUaGVvcmVtLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgbGVtbWFPclRoZW9yZW1TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gbGVtbWFPclRoZW9yZW1TdGF0ZW1lbnQuaXNFcXVhbFRvKHRoaXMuc3RhdGVtZW50KTtcblxuICAgICAgdmVyaWZpZWRBdEludHJpbnNpY0xldmVsID0gbGVtbWFPclRoZW9yZW1TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRBdEludHJpbnNpY0xldmVsKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uIGF0IGludHJpbnNpYyBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdEludHJpbnNpY0xldmVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZGVjbGFyYXRpb24gPSBudWxsO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlTm9kZVF1ZXJ5KGRlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGRlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7ICAvLy9cblxuICAgICAgY29uc3QgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBkZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHN0cmluZywgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgRGVjbGFyYXRpb25cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEZWNsYXJhdGlvbjtcbiJdLCJuYW1lcyI6WyJyZWZlcmVuY2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJEZWNsYXJhdGlvbiIsInN0cmluZyIsInJlZmVyZW5jZSIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFJlZmVyZW5jZSIsImdldFN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50IiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsImRlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiZGVidWciLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZWQiLCJyZWZlcmVuY2VTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJkZWNsYXJhdGlvblN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldE1ldGF2YXJpYWJsZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJ2ZXJpZmllZEF0TWV0YUxldmVsIiwidmVyaWZ5QXRNZXRhTGV2ZWwiLCJ2ZXJpZmllZEF0SW50cmluc2ljTGV2ZWwiLCJ2ZXJpZnlBdEludHJpbnNpY0xldmVsIiwicmVmZXJlbmNlVmVyaWZpZWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsImxlbW1hIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJ0aGVvcmVtIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsImxlbW1hT3JUaGVvcmVtIiwibGVtbWFPclRoZW9yZW1TdGF0ZW1lbnQiLCJsZW1tYU9yVGhlb3JlbVN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb24iLCJTdGF0ZW1lbnQiLCJzaGltIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsImZyb21SZWZlcmVuY2VOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvTUE7OztlQUFBOzs7MkRBbE1pQjtnRUFDSztxQkFFSTt3QkFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBTUEscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLDJCQUMvQkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUUsNEJBQU47YUFBTUEsWUFDUUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRHBDSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUpmSDs7WUFPSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVKLFNBQVMsRUFBRUssWUFBWTtnQkFDcEMsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCUCxVQUFVQyxTQUFTLElBQ3JD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