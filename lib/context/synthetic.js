"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SyntheticContext;
    }
});
const _necessary = require("necessary");
const _context = /*#__PURE__*/ _interop_require_default(require("../context"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { last } = _necessary.arrayUtilities;
class SyntheticContext extends _context.default {
    constructor(context, contexts){
        super(context);
        this.contexts = contexts;
    }
    getContexts() {
        return this.contexts;
    }
    addSubstitutions(substitutions) {
        const context = this.getContext();
        context.addSubstitutions(substitutions);
    }
    findTermByTermNode(termNode) {
        let term = null;
        this.contexts.some((context)=>{
            term = context.findTermByTermNode(termNode);
            if (term !== null) {
                return true;
            }
        });
        return term;
    }
    findFrameByFrameNode(frameNode) {
        let frame = null;
        this.contexts.some((context)=>{
            frame = context.findFrameByFrameNode(frameNode);
            if (frame !== null) {
                return true;
            }
        });
        return frame;
    }
    findStatementByStatementNode(statementNode) {
        let statement = null;
        this.contexts.some((context)=>{
            statement = context.findStatementByStatementNode(statementNode);
            if (statement !== null) {
                return true;
            }
        });
        return statement;
    }
    findSubstitutionBySubstitutionNode(substitutionNode) {
        let substitution = null;
        this.contexts.some((context)=>{
            substitution = context.findSubstitutionBySubstitutionNode(substitutionNode);
            if (substitution !== null) {
                return true;
            }
        });
        return substitution;
    }
    findReferenceByMetavariableNode(metavariableNode) {
        let reference = null;
        this.contexts.some((context)=>{
            reference = context.findReferenceByMetavariableNode(metavariableNode);
            if (reference !== null) {
                return true;
            }
        });
        return reference;
    }
    findVariableByVariableIdentifier(variableIdentifier) {
        let variable = null;
        this.contexts.some((context)=>{
            variable = context.findVariableByVariableIdentifier(variableIdentifier);
            if (variable !== null) {
                return true;
            }
        });
        return variable;
    }
    findMetavariableByMetavariableName(metavariableName) {
        let metavariable = null;
        this.contexts.some((context)=>{
            metavariable = context.findMetavariableByMetavariableName(metavariableName);
            if (metavariable !== null) {
                return true;
            }
        });
        return metavariable;
    }
    isTermPresentByTermNode(termNode) {
        const term = this.findTermByTermNode(termNode), termPresent = term !== null;
        return termPresent;
    }
    isFramePresentByFrameNode(frameNode) {
        const frame = this.findFrameByFrameNode(frameNode), framePresent = frame !== null;
        return framePresent;
    }
    isStatementPresentByStatementNode(statementNode) {
        const statement = this.findStatementByStatementNode(statementNode), statementPresent = statement !== null;
        return statementPresent;
    }
    isSubstitutionPresentBySubstitutionNode(substitutionNode) {
        const substitution = this.findSubstitutionBySubstitutionNode(substitutionNode), substitutionPresent = substitution !== null;
        return substitutionPresent;
    }
    isReferencePresentByMetavariableNode(metavariableNode) {
        const reference = this.findReferenceByMetavariableNode(metavariableNode), referencePresent = reference !== null;
        return referencePresent;
    }
    isVariablePresentByVariableIdentifier(variableIdentifier) {
        const variable = this.findVariableByVariableIdentifier(variableIdentifier), variablePresent = variable !== null;
        return variablePresent;
    }
    isMetavariablePresentByMetavariableName(metavariableName) {
        const metavariable = this.findMetavariableByMetavariableName(metavariableName), metavariablePresent = metavariable !== null;
        return metavariablePresent;
    }
    static fromContexts(...contexts) {
        const lastContext = last(contexts), context = lastContext, syntheticContext = new SyntheticContext(context, contexts);
        return syntheticContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3N5bnRoZXRpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bnRoZXRpY0NvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgY29udGV4dHMpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMuY29udGV4dHMgPSBjb250ZXh0cztcbiAgfVxuXG4gIGdldENvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHRzO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgdGhpcy5jb250ZXh0cy5zb21lKChjb250ZXh0KSA9PiB7XG4gICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIHRoaXMuY29udGV4dHMuc29tZSgoY29udGV4dCkgPT4ge1xuICAgICAgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jb250ZXh0cy5zb21lKChjb250ZXh0KSA9PiB7XG4gICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICB0aGlzLmNvbnRleHRzLnNvbWUoKGNvbnRleHQpID0+IHtcbiAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIHRoaXMuY29udGV4dHMuc29tZSgoY29udGV4dCkgPT4ge1xuICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICB0aGlzLmNvbnRleHRzLnNvbWUoKGNvbnRleHQpID0+IHtcbiAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIHRoaXMuY29udGV4dHMuc29tZSgoY29udGV4dCkgPT4ge1xuICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICB0ZXJtUHJlc2VudCA9ICh0ZXJtICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0ZXJtUHJlc2VudDtcbiAgfVxuXG4gIGlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgZnJhbWVQcmVzZW50ID0gKGZyYW1lICE9PSBudWxsKTtcblxuICAgIHJldHVybiBmcmFtZVByZXNlbnQ7XG4gIH1cblxuICBpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRQcmVzZW50ID0gKHN0YXRlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICByZWZlcmVuY2VQcmVzZW50ID0gKHJlZmVyZW5jZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dHMoLi4uY29udGV4dHMpIHtcbiAgICBjb25zdCBsYXN0Q29udGV4dCA9IGxhc3QoY29udGV4dHMpLFxuICAgICAgICAgIGNvbnRleHQgPSBsYXN0Q29udGV4dCwgIC8vL1xuICAgICAgICAgIHN5bnRoZXRpY0NvbnRleHQgPSBuZXcgU3ludGhldGljQ29udGV4dChjb250ZXh0LCBjb250ZXh0cyk7XG5cbiAgICByZXR1cm4gc3ludGhldGljQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN5bnRoZXRpY0NvbnRleHQiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJDb250ZXh0IiwiY29udGV4dCIsImNvbnRleHRzIiwiZ2V0Q29udGV4dHMiLCJhZGRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImdldENvbnRleHQiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJzb21lIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50IiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZSIsImlzVGVybVByZXNlbnRCeVRlcm1Ob2RlIiwidGVybVByZXNlbnQiLCJpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlIiwiZnJhbWVQcmVzZW50IiwiaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50UHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJmcm9tQ29udGV4dHMiLCJsYXN0Q29udGV4dCIsInN5bnRoZXRpY0NvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFB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