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
            value: function unifyStatement(statement, context) {
                var statementUnified;
                var statementString = statement.getString(), declarationStatementString = this.statement.getString(); ///
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(declarationStatementString, "' statement..."));
                var statementNode = statement.getNode();
                statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                var statementNodeMatches = this.statement.matchStatementNode(statementNode);
                statementUnified = statementNodeMatches; ///
                if (statementUnified) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(declarationStatementString, "' statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifyMetavariable",
            value: function unifyMetavariable(metavariable, context) {
                var metavariableUnified;
                var referenceString = this.reference.getString(), metavariableString = metavariable.getString();
                context.trace("Unifying the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference..."));
                var metavariableNode = metavariable.getNode(), metavariableNodeMatches = this.reference.matchMetavariableNode(metavariableNode);
                metavariableUnified = metavariableNodeMatches; ///
                if (metavariableUnified) {
                    context.debug("...unified the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference."));
                }
                return metavariableUnified;
            }
        },
        {
            key: "unifySubstitution",
            value: function unifySubstitution(substitution, context) {
                var substitutionUnified;
                var declarationString = this.string, substitutionString = substitution.getString();
                context.trace("Unifying the '".concat(substitutionString, "' substitution with the '").concat(declarationString, "' declaration..."));
                var statement = substitution.getStatement(), metavariable = substitution.getMetavariable(), statementUnified = this.unifyStatement(statement, context), metavariableUnified = this.unifyMetavariable(metavariable, context);
                substitutionUnified = metavariableUnified && statementUnified;
                if (substitutionUnified) {
                    context.debug("...unified the '".concat(declarationString, "' substitution with the '").concat(substitutionString, "' declaration."));
                }
                return substitutionUnified;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' declaration..."));
                stated = true; ///
                assignments = null; ///
                var referenceVerified = this.reference.verify(context);
                if (referenceVerified) {
                    var statementVerified = this.statement.verify(assignments, stated, context);
                    verified = statementVerified; ///
                }
                if (verified) {
                    context.debug("...verified the '".concat(declarationString, "' declaration."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromDeclarationNode",
            value: function fromDeclarationNode(declarationNode, context) {
                var declaration = null;
                if (declarationNode !== null) {
                    var Statement = _shim.default.Statement, referenceNode = referenceNodeQuery(declarationNode);
                    var statementNode = statementNodeQuery(declarationNode);
                    statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                    var reference = _reference.default.fromReferenceNode(referenceNode, context), statement = Statement.fromStatementNode(statementNode, context), node = declarationNode, string = context.nodeAsString(node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tIFwiLi9yZWZlcmVuY2VcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3QgcmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlY2xhcmF0aW9uL3JlZmVyZW5jZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBsZXQgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5zdGF0ZW1lbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZWQ7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLnJlZmVyZW5jZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZWQ7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSAobWV0YXZhcmlhYmxlVW5pZmllZCAmJiBzdGF0ZW1lbnRVbmlmaWVkKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMucmVmZXJlbmNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlY2xhcmF0aW9uID0gbnVsbDtcblxuICAgIGlmIChkZWNsYXJhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZU5vZGVRdWVyeShkZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgICBsZXQgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShkZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyAgLy8vXG5cbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBkZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihzdHJpbmcsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIERlY2xhcmF0aW9uXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRGVjbGFyYXRpb247XG4iXSwibmFtZXMiOlsicmVmZXJlbmNlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiRGVjbGFyYXRpb24iLCJzdHJpbmciLCJyZWZlcmVuY2UiLCJzdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRSZWZlcmVuY2UiLCJnZXRTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudCIsImNvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwiZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJkZWJ1ZyIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllZCIsInJlZmVyZW5jZVN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllZCIsImRlY2xhcmF0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0TWV0YXZhcmlhYmxlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInJlZmVyZW5jZVZlcmlmaWVkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb24iLCJTdGF0ZW1lbnQiLCJzaGltIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsImZyb21SZWZlcmVuY2VOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJu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