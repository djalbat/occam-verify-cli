"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Declaration;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _reference = /*#__PURE__*/ _interop_require_default(require("./reference"));
var _query = require("./utilities/query");
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
            // getMetavariableNode() { return this.reference.getMetavariableNode(); }
            //
            // unifyStatement(statementNode) {
            //   statementNode = stripBracketsFromStatement(statementNode); ///
            //
            //   const statementNodeMatches = this.statementNode.match(statementNode),
            //         statementUnified = statementNodeMatches;  ///
            //
            //   return statementUnified;
            // }
            //
            // unifySubstitution(substitution) {
            //   const statementNode = substitution.getStatementNode(),
            //         metavariableNode = substitution.getMetavariableNode(),
            //         statementUnified = this.unifyStatement(statementNode),
            //         metavariableUnified = this.unifyMetavariable(metavariableNode),
            //         substitutionUnified = (metavariableUnified && statementUnified);
            //
            //   return substitutionUnified;
            // }
            //
            // unifyMetavariable(metavariable) {
            //   const metavariableNodeMatches = this.reference.matchMetavariableNode(metavariable);
            //
            //   return metavariableNodeMatches;
            // }
            //
            // unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) {
            //   const consequent = metaLemmaMetatheorem.getConsequent(),
            //         statementNode = consequent.getStatementNode(),
            //         statementNodeMatches = this.statementNode.match(statementNode),
            //         metaLemmaOrMetaTheoremUnified = statementNodeMatches;  ///
            //
            //   return metaLemmaOrMetaTheoremUnified;
            // }
            //
            // static fromReferenceAndStatementNode(reference, statementNode) {
            //   statementNode = stripBracketsFromStatement(statementNode); ///
            //
            //   const declaration = new Declaration(reference, statementNode);
            //
            //   return declaration;
            // }
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified;
                var declarationString = this.string; ///
                localContext.trace("Verifying the '".concat(declarationString, "' declaration..."));
                stated = true;
                assignments = null;
                var referenceVerified = this.reference.verify(localContext);
                if (referenceVerified) {
                    var statementVerified = this.statement.verify(assignments, stated, localContext);
                    verified = statementVerified; ///
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(declarationString, "' declaration."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromDeclarationNode",
            value: function fromDeclarationNode(declarationNode, localContext) {
                var declaration = null;
                if (declarationNode !== null) {
                    var Statement = _shim.default.Statement, referenceNode = referenceNodeQuery(declarationNode), statementNode = statementNodeQuery(declarationNode), reference = _reference.default.fromReferenceNode(referenceNode, localContext), statement = Statement.fromStatementNode(statementNode, localContext), node = declarationNode, string = localContext.nodeAsString(node);
                    declaration = new Declaration(string, reference, statement);
                }
                return declaration;
            }
        }
    ]);
    return Declaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tIFwiLi9yZWZlcmVuY2VcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHJlZmVyZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9yZWZlcmVuY2VcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVjbGFyYXRpb24vc3RhdGVtZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIC8vIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cbiAgLy9cbiAgLy8gdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSkge1xuICAvLyAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTsgLy8vXG4gIC8vXG4gIC8vICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLnN0YXRlbWVudE5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSksXG4gIC8vICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG4gIC8vXG4gIC8vICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIC8vIH1cbiAgLy9cbiAgLy8gdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gIC8vICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnROb2RlKCksXG4gIC8vICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gIC8vICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSksXG4gIC8vICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSksXG4gIC8vICAgICAgICAgc3Vic3RpdHV0aW9uVW5pZmllZCA9IChtZXRhdmFyaWFibGVVbmlmaWVkICYmIHN0YXRlbWVudFVuaWZpZWQpO1xuICAvL1xuICAvLyAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICAvLyB9XG4gIC8vXG4gIC8vIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAvLyAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5yZWZlcmVuY2UubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZSk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICAvLyB9XG4gIC8vXG4gIC8vIHVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSkge1xuICAvLyAgIGNvbnN0IGNvbnNlcXVlbnQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRDb25zZXF1ZW50KCksXG4gIC8vICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IGNvbnNlcXVlbnQuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAvLyAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5zdGF0ZW1lbnROb2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpLFxuICAvLyAgICAgICAgIG1ldGFMZW1tYU9yTWV0YVRoZW9yZW1VbmlmaWVkID0gc3RhdGVtZW50Tm9kZU1hdGNoZXM7ICAvLy9cbiAgLy9cbiAgLy8gICByZXR1cm4gbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQ7XG4gIC8vIH1cbiAgLy9cbiAgLy8gc3RhdGljIGZyb21SZWZlcmVuY2VBbmRTdGF0ZW1lbnROb2RlKHJlZmVyZW5jZSwgc3RhdGVtZW50Tm9kZSkge1xuICAvLyAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTsgLy8vXG4gIC8vXG4gIC8vICAgY29uc3QgZGVjbGFyYXRpb24gPSBuZXcgRGVjbGFyYXRpb24ocmVmZXJlbmNlLCBzdGF0ZW1lbnROb2RlKTtcbiAgLy9cbiAgLy8gICByZXR1cm4gZGVjbGFyYXRpb247XG4gIC8vIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIHN0YXRlZCA9IHRydWU7XG5cbiAgICBhc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMucmVmZXJlbmNlLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZGVjbGFyYXRpb24gPSBudWxsO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlTm9kZVF1ZXJ5KGRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGRlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgZGVjbGFyYXRpb24gPSBuZXcgRGVjbGFyYXRpb24oc3RyaW5nLCByZWZlcmVuY2UsIHN0YXRlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVjbGFyYXRpb24iLCJyZWZlcmVuY2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJzdHJpbmciLCJyZWZlcmVuY2UiLCJzdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRSZWZlcmVuY2UiLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwiZGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInJlZmVyZW5jZVZlcmlmaWVkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJkZWJ1ZyIsImZyb21EZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbiIsIlN0YXRlbWVudCIsInNoaW0iLCJyZWZlcmVuY2VOb2RlIiwic3RhdGVtZW50Tm9kZSIsIlJlZmVyZW5jZSIsImZyb21SZWZlcmVuY2VOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyREFSSjtnRUFDSztxQkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsMkJBQy9CQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRiw0QkFBTjthQUFNQSxZQUNQSSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUztnQ0FEckJOO1FBRWpCLElBQUksQ0FBQ0ksTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUpBTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFD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