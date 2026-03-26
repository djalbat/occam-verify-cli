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
const { push, last } = _necessary.arrayUtilities;
class SyntheticContext extends _context.default {
    constructor(context, contexts){
        super(context);
        this.contexts = contexts;
    }
    getContexts() {
        return this.contexts;
    }
    getTerms() {
        const terms = [];
        this.contexts.forEach((context)=>{
            const contextTerms = context.getTerms();
            push(terms, contextTerms);
        });
        return terms;
    }
    getFrames() {
        const frames = [];
        this.contexts.forEach((context)=>{
            const contextFrames = context.getFrames();
            push(frames, contextFrames);
        });
        return frames;
    }
    getEqualities() {
        const equalities = [];
        this.contexts.forEach((context)=>{
            const contextEqualities = context.getEqualities();
            push(equalities, contextEqualities);
        });
        return equalities;
    }
    getJudgements() {
        const judgements = [];
        this.contexts.forEach((context)=>{
            const contextJudgements = context.getJudgements();
            push(judgements, contextJudgements);
        });
        return judgements;
    }
    getStatements() {
        const statements = [];
        this.contexts.forEach((context)=>{
            const contextStatements = context.getStatements();
            push(statements, contextStatements);
        });
        return statements;
    }
    getAssertions() {
        const assertions = [];
        this.contexts.forEach((context)=>{
            const contextAssertions = context.getAssertions();
            push(assertions, contextAssertions);
        });
        return assertions;
    }
    getReferences() {
        const references = [];
        this.contexts.forEach((context)=>{
            const contextReferences = context.getReferences();
            push(references, contextReferences);
        });
        return references;
    }
    getAssumptions() {
        const assumptions = [];
        this.contexts.forEach((context)=>{
            const contextAssumptions = context.getAssumptions();
            push(assumptions, contextAssumptions);
        });
        return assumptions;
    }
    getMetavariables() {
        const metavariables = [];
        this.contexts.forEach((context)=>{
            const contextMetavariables = context.getMetavariables();
            push(metavariables, contextMetavariables);
        });
        return metavariables;
    }
    getSubstitutions() {
        const substitutions = [];
        this.contexts.forEach((context)=>{
            const contextSubstitutions = context.getSubstitutions();
            push(substitutions, contextSubstitutions);
        });
        return substitutions;
    }
    findTermByTermNode(termNode) {
        const terms = this.getTerms(), term = terms.find((term)=>{
            const termNodeMatches = term.matchTermNode(termNode);
            if (termNodeMatches) {
                return true;
            }
        }) || null;
        return term;
    }
    findFrameByFrameNode(frameNode) {
        const frames = this.getFrames(), frame = frames.find((frame)=>{
            const frameNodeMatches = frame.matchFrameNode(frameNode);
            if (frameNodeMatches) {
                return true;
            }
        }) || null;
        return frame;
    }
    findEqualityByEqualityNode(equalityNode) {
        const equalities = this.getEqualities(), equality = equalities.find((equality)=>{
            const equalityNodeMatches = equality.matchEqualityNode(equalityNode);
            if (equalityNodeMatches) {
                return true;
            }
        }) || null;
        return equality;
    }
    findJudgementByJudgementNode(judgementNode) {
        const judgements = this.getJudgements(), judgement = judgements.find((judgement)=>{
            const judgementNodeMatches = judgement.matchJudgementNode(judgementNode);
            if (judgementNodeMatches) {
                return true;
            }
        }) || null;
        return judgement;
    }
    findStatementByStatementNode(statementNode) {
        const statements = this.getStatements(), statement = statements.find((statement)=>{
            const statementNodeMatches = statement.matchStatementNode(statementNode);
            if (statementNodeMatches) {
                return true;
            }
        }) || null;
        return statement;
    }
    findReferenceByReferenceNode(referenceNode) {
        const references = this.getReferences(), reference = references.find((reference)=>{
            const referenceMatcheReferenceNode = reference.matchReferenceNode(referenceNode);
            if (referenceMatcheReferenceNode) {
                return true;
            }
        }) || null;
        return reference;
    }
    findAssertionByAssertionNode(assertionNode) {
        const assertions = this.getAssertions(), assertion = assertions.find((assertion)=>{
            const assertionNodeMatches = assertion.matchAssertionNode(assertionNode);
            if (assertionNodeMatches) {
                return true;
            }
        }) || null;
        return assertion;
    }
    findAssumptionByAssumptionNode(assumptionNode) {
        const assumptions = this.getAssumptions(), assumption = assumptions.find((assumption)=>{
            const assumptionNodeMatches = assumption.matchAssumptionNode(assumptionNode);
            if (assumptionNodeMatches) {
                return true;
            }
        }) || null;
        return assumption;
    }
    findReferenceByMetavariableNode(metavariableNode) {
        const references = this.getReferences(), reference = references.find((reference)=>{
            const referenceMatcheMetavariableNode = reference.matchMetavariableNode(metavariableNode);
            if (referenceMatcheMetavariableNode) {
                return true;
            }
        }) || null;
        return reference;
    }
    findMetavariableByMetavariableNode(metavariableNode) {
        const metavariables = this.getMetavariables(), metavariable = metavariables.find((metavariable)=>{
            const metavariableNodeMatches = metavariable.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                return true;
            }
        }) || null;
        return metavariable;
    }
    findSubstitutionBySubstitutionNode(substitutionNode) {
        const substitutions = this.getSubstitutions(), substitution = substitutions.find((substitution)=>{
            const substitutionNodeMatches = substitution.matchSubstitutionNode(substitutionNode);
            if (substitutionNodeMatches) {
                return true;
            }
        }) || null;
        return substitution;
    }
    static fromContexts(...contexts) {
        const lastContext = last(contexts), context = lastContext, syntheticContext = new SyntheticContext(context, contexts);
        return syntheticContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3N5bnRoZXRpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IHsgcHVzaCwgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bnRoZXRpY0NvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgY29udGV4dHMpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMuY29udGV4dHMgPSBjb250ZXh0cztcbiAgfVxuXG4gIGdldENvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHRzO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXTtcblxuICAgIHRoaXMuY29udGV4dHMuZm9yRWFjaCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dFRlcm1zID0gY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgICBwdXNoKHRlcm1zLCBjb250ZXh0VGVybXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKCkge1xuICAgIGNvbnN0IGZyYW1lcyA9IFtdO1xuXG4gICAgdGhpcy5jb250ZXh0cy5mb3JFYWNoKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0RnJhbWVzID0gY29udGV4dC5nZXRGcmFtZXMoKTtcblxuICAgICAgcHVzaChmcmFtZXMsIGNvbnRleHRGcmFtZXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZyYW1lcztcbiAgfVxuXG4gIGdldEVxdWFsaXRpZXMoKSB7XG4gICAgY29uc3QgZXF1YWxpdGllcyA9IFtdO1xuXG4gICAgdGhpcy5jb250ZXh0cy5mb3JFYWNoKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0RXF1YWxpdGllcyA9IGNvbnRleHQuZ2V0RXF1YWxpdGllcygpO1xuXG4gICAgICBwdXNoKGVxdWFsaXRpZXMsIGNvbnRleHRFcXVhbGl0aWVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gW107XG5cbiAgICB0aGlzLmNvbnRleHRzLmZvckVhY2goKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHRKdWRnZW1lbnRzID0gY29udGV4dC5nZXRKdWRnZW1lbnRzKCk7XG5cbiAgICAgIHB1c2goanVkZ2VtZW50cywgY29udGV4dEp1ZGdlbWVudHMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudHMgPSBbXTtcblxuICAgIHRoaXMuY29udGV4dHMuZm9yRWFjaCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dFN0YXRlbWVudHMgPSBjb250ZXh0LmdldFN0YXRlbWVudHMoKTtcblxuICAgICAgcHVzaChzdGF0ZW1lbnRzLCBjb250ZXh0U3RhdGVtZW50cyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldEFzc2VydGlvbnMoKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9ucyA9IFtdO1xuXG4gICAgdGhpcy5jb250ZXh0cy5mb3JFYWNoKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0QXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0QXNzZXJ0aW9ucygpO1xuXG4gICAgICBwdXNoKGFzc2VydGlvbnMsIGNvbnRleHRBc3NlcnRpb25zKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCByZWZlcmVuY2VzID0gW107XG5cbiAgICB0aGlzLmNvbnRleHRzLmZvckVhY2goKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHRSZWZlcmVuY2VzID0gY29udGV4dC5nZXRSZWZlcmVuY2VzKCk7XG5cbiAgICAgIHB1c2gocmVmZXJlbmNlcywgY29udGV4dFJlZmVyZW5jZXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9ucyA9IFtdO1xuXG4gICAgdGhpcy5jb250ZXh0cy5mb3JFYWNoKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0QXNzdW1wdGlvbnMgPSBjb250ZXh0LmdldEFzc3VtcHRpb25zKCk7XG5cbiAgICAgIHB1c2goYXNzdW1wdGlvbnMsIGNvbnRleHRBc3N1bXB0aW9ucyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSBbXTtcblxuICAgIHRoaXMuY29udGV4dHMuZm9yRWFjaCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dE1ldGF2YXJpYWJsZXMgPSBjb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgICAgcHVzaChtZXRhdmFyaWFibGVzLCBjb250ZXh0TWV0YXZhcmlhYmxlcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdO1xuXG4gICAgdGhpcy5jb250ZXh0cy5mb3JFYWNoKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0U3Vic3RpdHV0aW9ucyA9IGNvbnRleHQuZ2V0U3Vic3RpdHV0aW9ucygpO1xuXG4gICAgICBwdXNoKHN1YnN0aXR1dGlvbnMsIGNvbnRleHRTdWJzdGl0dXRpb25zKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybXMgPSB0aGlzLmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybSA9IHRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWVzID0gdGhpcy5nZXRGcmFtZXMoKSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lcy5maW5kKChmcmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJhbWVOb2RlTWF0Y2hlcyA9IGZyYW1lLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBlcXVhbGl0aWVzID0gdGhpcy5nZXRFcXVhbGl0aWVzKCksXG4gICAgICAgICAgZXF1YWxpdHkgPSBlcXVhbGl0aWVzLmZpbmQoKGVxdWFsaXR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcXVhbGl0eU5vZGVNYXRjaGVzID0gZXF1YWxpdHkubWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50Tm9kZU1hdGNoZXMgPSBqdWRnZW1lbnQubWF0Y2hKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRzID0gdGhpcy5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IHRoaXMuZ2V0UmVmZXJlbmNlcygpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVSZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlLm1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZU1hdGNoZVJlZmVyZW5jZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb25zID0gdGhpcy5nZXRBc3NlcnRpb25zKCksXG4gICAgICAgICAgYXNzZXJ0aW9uID0gYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2VydGlvbk5vZGVNYXRjaGVzID0gYXNzZXJ0aW9uLm1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKGFzc2VydGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbnMgPSB0aGlzLmdldEFzc3VtcHRpb25zKCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25zLmZpbmQoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IGFzc3VtcHRpb24ubWF0Y2hBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChhc3N1bXB0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IHRoaXMuZ2V0UmVmZXJlbmNlcygpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dHMoLi4uY29udGV4dHMpIHtcbiAgICBjb25zdCBsYXN0Q29udGV4dCA9IGxhc3QoY29udGV4dHMpLFxuICAgICAgICAgIGNvbnRleHQgPSBsYXN0Q29udGV4dCwgIC8vL1xuICAgICAgICAgIHN5bnRoZXRpY0NvbnRleHQgPSBuZXcgU3ludGhldGljQ29udGV4dChjb250ZXh0LCBjb250ZXh0cyk7XG5cbiAgICByZXR1cm4gc3ludGhldGljQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN5bnRoZXRpY0NvbnRleHQiLCJwdXNoIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiQ29udGV4dCIsImNvbnRleHQiLCJjb250ZXh0cyIsImdldENvbnRleHRzIiwiZ2V0VGVybXMiLCJ0ZXJtcyIsImZvckVhY2giLCJjb250ZXh0VGVybXMiLCJnZXRGcmFtZXMiLCJmcmFtZXMiLCJjb250ZXh0RnJhbWVzIiwiZ2V0RXF1YWxpdGllcyIsImVxdWFsaXRpZXMiLCJjb250ZXh0RXF1YWxpdGllcyIsImdldEp1ZGdlbWVudHMiLCJqdWRnZW1lbnRzIiwiY29udGV4dEp1ZGdlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwic3RhdGVtZW50cyIsImNvbnRleHRTdGF0ZW1lbnRzIiwiZ2V0QXNzZXJ0aW9ucyIsImFzc2VydGlvbnMiLCJjb250ZXh0QXNzZXJ0aW9ucyIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwiY29udGV4dFJlZmVyZW5jZXMiLCJnZXRBc3N1bXB0aW9ucyIsImFzc3VtcHRpb25zIiwiY29udGV4dEFzc3VtcHRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXMiLCJjb250ZXh0TWV0YXZhcmlhYmxlcyIsImdldFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dFN1YnN0aXR1dGlvbnMiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJmaW5kIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWUiLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5IiwiZXF1YWxpdHlOb2RlTWF0Y2hlcyIsIm1hdGNoRXF1YWxpdHlOb2RlIiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoSnVkZ2VtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZU1hdGNoZVJlZmVyZW5jZU5vZGUiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImFzc2VydGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uIiwiYXNzdW1wdGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hBc3N1bXB0aW9uTm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tQ29udGV4dHMiLCJsYXN0Q29udGV4dCIsInN5bnRoZXRpY0NvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBcUJBOzs7MkJBTlU7Z0VBRVg7Ozs7OztBQUVwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFLEdBQUdDLHlCQUFjO0FBRXRCLE1BQU1ILHlCQUF5QkksZ0JBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxRQUFRLENBQUU7UUFDN0IsS0FBSyxDQUFDRDtRQUVOLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtJQUNsQjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNELFFBQVE7SUFDdEI7SUFFQUUsV0FBVztRQUNULE1BQU1DLFFBQVEsRUFBRTtRQUVoQixJQUFJLENBQUNILFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLENBQUNMO1lBQ3JCLE1BQU1NLGVBQWVOLFFBQVFHLFFBQVE7WUFFckNQLEtBQUtRLE9BQU9FO1FBQ2Q7UUFFQSxPQUFPRjtJQUNUO0lBRUFHLFlBQVk7UUFDVixNQUFNQyxTQUFTLEVBQUU7UUFFakIsSUFBSSxDQUFDUCxRQUFRLENBQUNJLE9BQU8sQ0FBQyxDQUFDTDtZQUNyQixNQUFNUyxnQkFBZ0JULFFBQVFPLFNBQVM7WUFFdkNYLEtBQUtZLFFBQVFDO1FBQ2Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFFLGdCQUFnQjtRQUNkLE1BQU1DLGFBQWEsRUFBRTtRQUVyQixJQUFJLENBQUNWLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLENBQUNMO1lBQ3JCLE1BQU1ZLG9CQUFvQlosUUFBUVUsYUFBYTtZQUUvQ2QsS0FBS2UsWUFBWUM7UUFDbkI7UUFFQSxPQUFPRDtJQUNUO0lBRUFFLGdCQUFnQjtRQUNkLE1BQU1DLGFBQWEsRUFBRTtRQUVyQixJQUFJLENBQUNiLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLENBQUNMO1lBQ3JCLE1BQU1lLG9CQUFvQmYsUUFBUWEsYUFBYTtZQUUvQ2pCLEtBQUtrQixZQUFZQztRQUNuQjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUUsZ0JBQWdCO1FBQ2QsTUFBTUMsYUFBYSxFQUFFO1FBRXJCLElBQUksQ0FBQ2hCLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLENBQUNMO1lBQ3JCLE1BQU1rQixvQkFBb0JsQixRQUFRZ0IsYUFBYTtZQUUvQ3BCLEtBQUtxQixZQUFZQztRQUNuQjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUUsZ0JBQWdCO1FBQ2QsTUFBTUMsYUFBYSxFQUFFO1FBRXJCLElBQUksQ0FBQ25CLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLENBQUNMO1lBQ3JCLE1BQU1xQixvQkFBb0JyQixRQUFRbUIsYUFBYTtZQUUvQ3ZCLEtBQUt3QixZQUFZQztRQUNuQjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUUsZ0JBQWdCO1FBQ2QsTUFBTUMsYUFBYSxFQUFFO1FBRXJCLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLENBQUNMO1lBQ3JCLE1BQU13QixvQkFBb0J4QixRQUFRc0IsYUFBYTtZQUUvQzFCLEtBQUsyQixZQUFZQztRQUNuQjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUUsaUJBQWlCO1FBQ2YsTUFBTUMsY0FBYyxFQUFFO1FBRXRCLElBQUksQ0FBQ3pCLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLENBQUNMO1lBQ3JCLE1BQU0yQixxQkFBcUIzQixRQUFReUIsY0FBYztZQUVqRDdCLEtBQUs4QixhQUFhQztRQUNwQjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUUsbUJBQW1CO1FBQ2pCLE1BQU1DLGdCQUFnQixFQUFFO1FBRXhCLElBQUksQ0FBQzVCLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLENBQUNMO1lBQ3JCLE1BQU04Qix1QkFBdUI5QixRQUFRNEIsZ0JBQWdCO1lBRXJEaEMsS0FBS2lDLGVBQWVDO1FBQ3RCO1FBRUEsT0FBT0Q7SUFDVDtJQUVBRSxtQkFBbUI7UUFDakIsTUFBTUMsZ0JBQWdCLEVBQUU7UUFFeEIsSUFBSSxDQUFDL0IsUUFBUSxDQUFDSSxPQUFPLENBQUMsQ0FBQ0w7WUFDckIsTUFBTWlDLHVCQUF1QmpDLFFBQVErQixnQkFBZ0I7WUFFckRuQyxLQUFLb0MsZUFBZUM7UUFDdEI7UUFFQSxPQUFPRDtJQUNUO0lBRUFFLG1CQUFtQkMsUUFBUSxFQUFFO1FBQzNCLE1BQU0vQixRQUFRLElBQUksQ0FBQ0QsUUFBUSxJQUNyQmlDLE9BQU9oQyxNQUFNaUMsSUFBSSxDQUFDLENBQUNEO1lBQ2pCLE1BQU1FLGtCQUFrQkYsS0FBS0csYUFBYSxDQUFDSjtZQUUzQyxJQUFJRyxpQkFBaUI7Z0JBQ25CLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFWixPQUFPRjtJQUNUO0lBRUFJLHFCQUFxQkMsU0FBUyxFQUFFO1FBQzlCLE1BQU1qQyxTQUFTLElBQUksQ0FBQ0QsU0FBUyxJQUN2Qm1DLFFBQVFsQyxPQUFPNkIsSUFBSSxDQUFDLENBQUNLO1lBQ25CLE1BQU1DLG1CQUFtQkQsTUFBTUUsY0FBYyxDQUFDSDtZQUU5QyxJQUFJRSxrQkFBa0I7Z0JBQ3BCLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFWixPQUFPRDtJQUNUO0lBRUFHLDJCQUEyQkMsWUFBWSxFQUFFO1FBQ3ZDLE1BQU1uQyxhQUFhLElBQUksQ0FBQ0QsYUFBYSxJQUMvQnFDLFdBQVdwQyxXQUFXMEIsSUFBSSxDQUFDLENBQUNVO1lBQzFCLE1BQU1DLHNCQUFzQkQsU0FBU0UsaUJBQWlCLENBQUNIO1lBRXZELElBQUlFLHFCQUFxQjtnQkFDdkIsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVaLE9BQU9EO0lBQ1Q7SUFFQUcsNkJBQTZCQyxhQUFhLEVBQUU7UUFDMUMsTUFBTXJDLGFBQWEsSUFBSSxDQUFDRCxhQUFhLElBQy9CdUMsWUFBWXRDLFdBQVd1QixJQUFJLENBQUMsQ0FBQ2U7WUFDM0IsTUFBTUMsdUJBQXVCRCxVQUFVRSxrQkFBa0IsQ0FBQ0g7WUFFMUQsSUFBSUUsc0JBQXNCO2dCQUN4QixPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosT0FBT0Q7SUFDVDtJQUVBRyw2QkFBNkJDLGFBQWEsRUFBRTtRQUMxQyxNQUFNdkMsYUFBYSxJQUFJLENBQUNELGFBQWEsSUFDL0J5QyxZQUFZeEMsV0FBV29CLElBQUksQ0FBQyxDQUFDb0I7WUFDM0IsTUFBTUMsdUJBQXVCRCxVQUFVRSxrQkFBa0IsQ0FBQ0g7WUFFMUQsSUFBSUUsc0JBQXNCO2dCQUN4QixPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosT0FBT0Q7SUFDVDtJQUVBRyw2QkFBNkJDLGFBQWEsRUFBRTtRQUMxQyxNQUFNdEMsYUFBYSxJQUFJLENBQUNELGFBQWEsSUFDL0J3QyxZQUFZdkMsV0FBV2MsSUFBSSxDQUFDLENBQUN5QjtZQUMzQixNQUFNQywrQkFBK0JELFVBQVVFLGtCQUFrQixDQUFDSDtZQUVsRSxJQUFJRSw4QkFBOEI7Z0JBQ2hDLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFWixPQUFPRDtJQUNUO0lBRUFHLDZCQUE2QkMsYUFBYSxFQUFFO1FBQzFDLE1BQU05QyxhQUFhLElBQUksQ0FBQ0QsYUFBYSxJQUMvQmdELFlBQVkvQyxXQUFXaUIsSUFBSSxDQUFDLENBQUM4QjtZQUMzQixNQUFNQyx1QkFBdUJELFVBQVVFLGtCQUFrQixDQUFDSDtZQUUxRCxJQUFJRSxzQkFBc0I7Z0JBQ3hCLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFWixPQUFPRDtJQUNUO0lBRUFHLCtCQUErQkMsY0FBYyxFQUFFO1FBQzdDLE1BQU03QyxjQUFjLElBQUksQ0FBQ0QsY0FBYyxJQUNqQytDLGFBQWE5QyxZQUFZVyxJQUFJLENBQUMsQ0FBQ21DO1lBQzdCLE1BQU1DLHdCQUF3QkQsV0FBV0UsbUJBQW1CLENBQUNIO1lBRTdELElBQUlFLHVCQUF1QjtnQkFDekIsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVaLE9BQU9EO0lBQ1Q7SUFFQUcsZ0NBQWdDQyxnQkFBZ0IsRUFBRTtRQUNoRCxNQUFNckQsYUFBYSxJQUFJLENBQUNELGFBQWEsSUFDL0J3QyxZQUFZdkMsV0FBV2MsSUFBSSxDQUFDLENBQUN5QjtZQUMzQixNQUFNZSxrQ0FBa0NmLFVBQVVnQixxQkFBcUIsQ0FBQ0Y7WUFFeEUsSUFBSUMsaUNBQWlDO2dCQUNuQyxPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosT0FBT2Y7SUFDVDtJQUVBaUIsbUNBQW1DSCxnQkFBZ0IsRUFBRTtRQUNuRCxNQUFNL0MsZ0JBQWdCLElBQUksQ0FBQ0QsZ0JBQWdCLElBQ3JDb0QsZUFBZW5ELGNBQWNRLElBQUksQ0FBQyxDQUFDMkM7WUFDakMsTUFBTUMsMEJBQTBCRCxhQUFhRixxQkFBcUIsQ0FBQ0Y7WUFFbkUsSUFBSUsseUJBQXlCO2dCQUMzQixPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosT0FBT0Q7SUFDVDtJQUVBRSxtQ0FBbUNDLGdCQUFnQixFQUFFO1FBQ25ELE1BQU1uRCxnQkFBZ0IsSUFBSSxDQUFDRCxnQkFBZ0IsSUFDckNxRCxlQUFlcEQsY0FBY0ssSUFBSSxDQUFDLENBQUMrQztZQUNqQyxNQUFNQywwQkFBMEJELGFBQWFFLHFCQUFxQixDQUFDSDtZQUVuRSxJQUFJRSx5QkFBeUI7Z0JBQzNCLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFWixPQUFPRDtJQUNUO0lBRUEsT0FBT0csYUFBYSxHQUFHdEYsUUFBUSxFQUFFO1FBQy9CLE1BQU11RixjQUFjM0YsS0FBS0ksV0FDbkJELFVBQVV3RixhQUNWQyxtQkFBbUIsSUFBSTlGLGlCQUFpQkssU0FBU0M7UUFFdkQsT0FBT3dGO0lBQ1Q7QUFDRiJ9