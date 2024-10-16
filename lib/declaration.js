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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tIFwiLi9yZWZlcmVuY2VcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHJlZmVyZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9yZWZlcmVuY2VcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVjbGFyYXRpb24vc3RhdGVtZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIC8vIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUpIHtcbiAgLy8gICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7IC8vL1xuICAvL1xuICAvLyAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5zdGF0ZW1lbnROb2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpLFxuICAvLyAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnROb2RlTWF0Y2hlczsgIC8vL1xuICAvL1xuICAvLyAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICAvLyB9XG4gIC8vXG4gIC8vIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAvLyAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAvLyAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAvLyAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUpLFxuICAvLyAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZWQgPSB0aGlzLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAvLyAgICAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSAobWV0YXZhcmlhYmxlVW5pZmllZCAmJiBzdGF0ZW1lbnRVbmlmaWVkKTtcbiAgLy9cbiAgLy8gICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgLy8gfVxuICAvL1xuICAvLyB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgLy8gICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMucmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGUpO1xuICAvL1xuICAvLyAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgLy8gfVxuICAvL1xuICAvLyB1bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pIHtcbiAgLy8gICBjb25zdCBjb25zZXF1ZW50ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0Q29uc2VxdWVudCgpLFxuICAvLyAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBjb25zZXF1ZW50LmdldFN0YXRlbWVudE5vZGUoKSxcbiAgLy8gICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMuc3RhdGVtZW50Tm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlKSxcbiAgLy8gICAgICAgICBtZXRhTGVtbWFPck1ldGFUaGVvcmVtVW5pZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG4gIC8vXG4gIC8vICAgcmV0dXJuIG1ldGFMZW1tYU9yTWV0YVRoZW9yZW1VbmlmaWVkO1xuICAvLyB9XG4gIC8vXG4gIC8vIHN0YXRpYyBmcm9tUmVmZXJlbmNlQW5kU3RhdGVtZW50Tm9kZShyZWZlcmVuY2UsIHN0YXRlbWVudE5vZGUpIHtcbiAgLy8gICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7IC8vL1xuICAvL1xuICAvLyAgIGNvbnN0IGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHJlZmVyZW5jZSwgc3RhdGVtZW50Tm9kZSk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAvLyB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBzdGF0ZWQgPSB0cnVlO1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZWQgPSB0aGlzLnJlZmVyZW5jZS52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGRlY2xhcmF0aW9uID0gbnVsbDtcblxuICAgIGlmIChkZWNsYXJhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZU5vZGVRdWVyeShkZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShkZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBkZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHN0cmluZywgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlY2xhcmF0aW9uIiwicmVmZXJlbmNlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwic3RyaW5nIiwicmVmZXJlbmNlIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsImRlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJyZWZlcmVuY2VWZXJpZmllZCIsInN0YXRlbWVudFZlcmlmaWVkIiwiZGVidWciLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb24iLCJTdGF0ZW1lbnQiLCJzaGltIiwicmVmZXJlbmNlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJSZWZlcmVuY2UiLCJmcm9tUmVmZXJlbmNlTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7MkRBUko7Z0VBQ0s7cUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLDJCQUMvQkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLElBQUEsQUFBTUYsNEJBQU47YUFBTUEsWUFDUEksTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRHJCTjtRQUVqQixJQUFJLENBQUNJLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFKQU47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBLGtDQUFrQztZQUNsQyxtRUFBbUU7WUFDbkUsRUFBRTtZQUNGLDBFQUEwRTtZQUMxRSx3REFBd0Q7WUFDeEQsRUFBRTtZQUNGLDZCQUE2QjtZQUM3QixJQUFJO1lBQ0osRUFBRTtZQUNGLG9DQUFvQztZQUNwQywyREFBMkQ7WUFDM0QsaUVBQWlFO1lBQ2pFLGlFQUFpRTtZQUNqRSwwRUFBMEU7WUFDMUUsMkVBQTJFO1lBQzNFLEVBQUU7WUFDRixnQ0FBZ0M7WUFDaEMsSUFBSTtZQUNKLEVBQUU7WUFDRixvQ0FBb0M7WUFDcEMsd0ZBQXdGO1lBQ3hGLEVBQUU7WUFDRixvQ0FBb0M7WUFDcEMsSUFBSTtZQUNKLEVBQUU7WUFDRixzREFBc0Q7WUFDdEQsNkRBQTZEO1lBQzdELHlEQUF5RDtZQUN6RCwwRUFBMEU7WUFDMUUscUVBQXFFO1lBQ3JFLEVBQUU7WUFDRiwwQ0FBMEM7WUFDMUMsSUFBSTtZQUNKLEVBQUU7WUFDRixtRUFBbUU7WUFDbkUsbUVBQW1FO1lBQ25FLEVBQUU7WUFDRixtRUFBbUU7WUFDbkUsRUFBRTtZQUNGLHdCQUF3QjtZQUN4QixJQUFJO1lBRUpJLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtnQkFDdEMsSUFBSUM7Z0JBRUosSUFBTUMsb0JBQW9CLElBQUksQ0FBQ1gsTUFBTSxFQUFHLEdBQUc7Z0JBRTNDUyxhQUFhRyxLQUFLLENBQUMsQUFBQyxrQkFBbUMsT0FBbEJELG1CQUFrQjtnQkFFdkRILFNBQVM7Z0JBRVRELGNBQWM7Z0JBRWQsSUFBTU0sb0JBQW9CLElBQUksQ0FBQ1osU0FBUyxDQUFDSyxNQUFNLENBQUNHO2dCQUVoRCxJQUFJSSxtQkFBbUI7b0JBQ3JCLElBQU1DLG9CQUFvQixJQUFJLENBQUNaLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDQyxhQUFhQyxRQUFRQztvQkFFckVDLFdBQVdJLG1CQUFtQixHQUFHO2dCQUNuQztnQkFFQSxJQUFJSixVQUFVO29CQUNaRCxhQUFhTSxLQUFLLENBQUMsQUFBQyxvQkFBcUMsT0FBbEJKLG1CQUFrQjtnQkFDM0Q7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JDLGVBQWUsRUFBRVIsWUFBWTtnQkFDdEQsSUFBSVMsY0FBYztnQkFFbEIsSUFBSUQsb0JBQW9CLE1BQU07b0JBQzVCLElBQU0sQUFBRUUsWUFBY0MsYUFBSSxDQUFsQkQsV0FDRkUsZ0JBQWdCeEIsbUJBQW1Cb0Isa0JBQ25DSyxnQkFBZ0J2QixtQkFBbUJrQixrQkFDbkNoQixZQUFZc0Isa0JBQVMsQ0FBQ0MsaUJBQWlCLENBQUNILGVBQWVaLGVBQ3ZEUCxZQUFZaUIsVUFBVU0saUJBQWlCLENBQUNILGVBQWViLGVBQ3ZEaUIsT0FBT1QsaUJBQ1BqQixTQUFTUyxhQUFha0IsWUFBWSxDQUFDRDtvQkFFekNSLGNBQWMsSUFuR0N0QixZQW1HZUksUUFBUUMsV0FBV0M7Z0JBQ25EO2dCQUVBLE9BQU9nQjtZQUNUOzs7V0F2R21CdEIifQ==