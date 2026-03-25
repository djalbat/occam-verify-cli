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
    static fromContexts(...contexts) {
        const lastContext = last(contexts), context = lastContext, syntheticContext = new SyntheticContext(context, contexts);
        return syntheticContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3N5bnRoZXRpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IHsgcHVzaCwgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bnRoZXRpY0NvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgY29udGV4dHMpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMuY29udGV4dHMgPSBjb250ZXh0cztcbiAgfVxuXG4gIGdldENvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHRzO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXTtcbiAgICBcbiAgICB0aGlzLmNvbnRleHRzLmZvckVhY2goKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHRUZXJtcyA9IGNvbnRleHQuZ2V0VGVybXMoKTtcbiAgICAgIFxuICAgICAgcHVzaCh0ZXJtcywgY29udGV4dFRlcm1zKTsgICAgICBcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gdGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMoKSB7XG4gICAgY29uc3QgZnJhbWVzID0gW107XG5cbiAgICB0aGlzLmNvbnRleHRzLmZvckVhY2goKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHRGcmFtZXMgPSBjb250ZXh0LmdldEZyYW1lcygpO1xuXG4gICAgICBwdXNoKGZyYW1lcywgY29udGV4dEZyYW1lcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnJhbWVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcygpIHtcbiAgICBjb25zdCBlcXVhbGl0aWVzID0gW107XG5cbiAgICB0aGlzLmNvbnRleHRzLmZvckVhY2goKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHRFcXVhbGl0aWVzID0gY29udGV4dC5nZXRFcXVhbGl0aWVzKCk7XG5cbiAgICAgIHB1c2goZXF1YWxpdGllcywgY29udGV4dEVxdWFsaXRpZXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVxdWFsaXRpZXM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSBbXTtcblxuICAgIHRoaXMuY29udGV4dHMuZm9yRWFjaCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dEp1ZGdlbWVudHMgPSBjb250ZXh0LmdldEp1ZGdlbWVudHMoKTtcblxuICAgICAgcHVzaChqdWRnZW1lbnRzLCBjb250ZXh0SnVkZ2VtZW50cyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50cztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50cyA9IFtdO1xuXG4gICAgdGhpcy5jb250ZXh0cy5mb3JFYWNoKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0U3RhdGVtZW50cyA9IGNvbnRleHQuZ2V0U3RhdGVtZW50cygpO1xuXG4gICAgICBwdXNoKHN0YXRlbWVudHMsIGNvbnRleHRTdGF0ZW1lbnRzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBhc3NlcnRpb25zID0gW107XG5cbiAgICB0aGlzLmNvbnRleHRzLmZvckVhY2goKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHRBc3NlcnRpb25zID0gY29udGV4dC5nZXRBc3NlcnRpb25zKCk7XG5cbiAgICAgIHB1c2goYXNzZXJ0aW9ucywgY29udGV4dEFzc2VydGlvbnMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBbXTtcblxuICAgIHRoaXMuY29udGV4dHMuZm9yRWFjaCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dFJlZmVyZW5jZXMgPSBjb250ZXh0LmdldFJlZmVyZW5jZXMoKTtcblxuICAgICAgcHVzaChyZWZlcmVuY2VzLCBjb250ZXh0UmVmZXJlbmNlcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIGNvbnN0IGFzc3VtcHRpb25zID0gW107XG5cbiAgICB0aGlzLmNvbnRleHRzLmZvckVhY2goKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHRBc3N1bXB0aW9ucyA9IGNvbnRleHQuZ2V0QXNzdW1wdGlvbnMoKTtcblxuICAgICAgcHVzaChhc3N1bXB0aW9ucywgY29udGV4dEFzc3VtcHRpb25zKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IFtdO1xuXG4gICAgdGhpcy5jb250ZXh0cy5mb3JFYWNoKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0TWV0YXZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgICBwdXNoKG1ldGF2YXJpYWJsZXMsIGNvbnRleHRNZXRhdmFyaWFibGVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW107XG5cbiAgICB0aGlzLmNvbnRleHRzLmZvckVhY2goKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHRTdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgIHB1c2goc3Vic3RpdHV0aW9ucywgY29udGV4dFN1YnN0aXR1dGlvbnMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRleHRzKC4uLmNvbnRleHRzKSB7XG4gICAgY29uc3QgbGFzdENvbnRleHQgPSBsYXN0KGNvbnRleHRzKSxcbiAgICAgICAgICBjb250ZXh0ID0gbGFzdENvbnRleHQsICAvLy9cbiAgICAgICAgICBzeW50aGV0aWNDb250ZXh0ID0gbmV3IFN5bnRoZXRpY0NvbnRleHQoY29udGV4dCwgY29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHN5bnRoZXRpY0NvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTeW50aGV0aWNDb250ZXh0IiwicHVzaCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIkNvbnRleHQiLCJjb250ZXh0IiwiY29udGV4dHMiLCJnZXRDb250ZXh0cyIsImdldFRlcm1zIiwidGVybXMiLCJmb3JFYWNoIiwiY29udGV4dFRlcm1zIiwiZ2V0RnJhbWVzIiwiZnJhbWVzIiwiY29udGV4dEZyYW1lcyIsImdldEVxdWFsaXRpZXMiLCJlcXVhbGl0aWVzIiwiY29udGV4dEVxdWFsaXRpZXMiLCJnZXRKdWRnZW1lbnRzIiwianVkZ2VtZW50cyIsImNvbnRleHRKdWRnZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsInN0YXRlbWVudHMiLCJjb250ZXh0U3RhdGVtZW50cyIsImdldEFzc2VydGlvbnMiLCJhc3NlcnRpb25zIiwiY29udGV4dEFzc2VydGlvbnMiLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsImNvbnRleHRSZWZlcmVuY2VzIiwiZ2V0QXNzdW1wdGlvbnMiLCJhc3N1bXB0aW9ucyIsImNvbnRleHRBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiY29udGV4dE1ldGF2YXJpYWJsZXMiLCJnZXRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHRTdWJzdGl0dXRpb25zIiwiZnJvbUNvbnRleHRzIiwibGFzdENvbnRleHQiLCJzeW50aGV0aWNDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXFCQTs7OzJCQU5VO2dFQUVYOzs7Ozs7QUFFcEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRSxHQUFHQyx5QkFBYztBQUV0QixNQUFNSCx5QkFBeUJJLGdCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsUUFBUSxDQUFFO1FBQzdCLEtBQUssQ0FBQ0Q7UUFFTixJQUFJLENBQUNDLFFBQVEsR0FBR0E7SUFDbEI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRCxRQUFRO0lBQ3RCO0lBRUFFLFdBQVc7UUFDVCxNQUFNQyxRQUFRLEVBQUU7UUFFaEIsSUFBSSxDQUFDSCxRQUFRLENBQUNJLE9BQU8sQ0FBQyxDQUFDTDtZQUNyQixNQUFNTSxlQUFlTixRQUFRRyxRQUFRO1lBRXJDUCxLQUFLUSxPQUFPRTtRQUNkO1FBRUEsT0FBT0Y7SUFDVDtJQUVBRyxZQUFZO1FBQ1YsTUFBTUMsU0FBUyxFQUFFO1FBRWpCLElBQUksQ0FBQ1AsUUFBUSxDQUFDSSxPQUFPLENBQUMsQ0FBQ0w7WUFDckIsTUFBTVMsZ0JBQWdCVCxRQUFRTyxTQUFTO1lBRXZDWCxLQUFLWSxRQUFRQztRQUNmO1FBRUEsT0FBT0Q7SUFDVDtJQUVBRSxnQkFBZ0I7UUFDZCxNQUFNQyxhQUFhLEVBQUU7UUFFckIsSUFBSSxDQUFDVixRQUFRLENBQUNJLE9BQU8sQ0FBQyxDQUFDTDtZQUNyQixNQUFNWSxvQkFBb0JaLFFBQVFVLGFBQWE7WUFFL0NkLEtBQUtlLFlBQVlDO1FBQ25CO1FBRUEsT0FBT0Q7SUFDVDtJQUVBRSxnQkFBZ0I7UUFDZCxNQUFNQyxhQUFhLEVBQUU7UUFFckIsSUFBSSxDQUFDYixRQUFRLENBQUNJLE9BQU8sQ0FBQyxDQUFDTDtZQUNyQixNQUFNZSxvQkFBb0JmLFFBQVFhLGFBQWE7WUFFL0NqQixLQUFLa0IsWUFBWUM7UUFDbkI7UUFFQSxPQUFPRDtJQUNUO0lBRUFFLGdCQUFnQjtRQUNkLE1BQU1DLGFBQWEsRUFBRTtRQUVyQixJQUFJLENBQUNoQixRQUFRLENBQUNJLE9BQU8sQ0FBQyxDQUFDTDtZQUNyQixNQUFNa0Isb0JBQW9CbEIsUUFBUWdCLGFBQWE7WUFFL0NwQixLQUFLcUIsWUFBWUM7UUFDbkI7UUFFQSxPQUFPRDtJQUNUO0lBRUFFLGdCQUFnQjtRQUNkLE1BQU1DLGFBQWEsRUFBRTtRQUVyQixJQUFJLENBQUNuQixRQUFRLENBQUNJLE9BQU8sQ0FBQyxDQUFDTDtZQUNyQixNQUFNcUIsb0JBQW9CckIsUUFBUW1CLGFBQWE7WUFFL0N2QixLQUFLd0IsWUFBWUM7UUFDbkI7UUFFQSxPQUFPRDtJQUNUO0lBRUFFLGdCQUFnQjtRQUNkLE1BQU1DLGFBQWEsRUFBRTtRQUVyQixJQUFJLENBQUN0QixRQUFRLENBQUNJLE9BQU8sQ0FBQyxDQUFDTDtZQUNyQixNQUFNd0Isb0JBQW9CeEIsUUFBUXNCLGFBQWE7WUFFL0MxQixLQUFLMkIsWUFBWUM7UUFDbkI7UUFFQSxPQUFPRDtJQUNUO0lBRUFFLGlCQUFpQjtRQUNmLE1BQU1DLGNBQWMsRUFBRTtRQUV0QixJQUFJLENBQUN6QixRQUFRLENBQUNJLE9BQU8sQ0FBQyxDQUFDTDtZQUNyQixNQUFNMkIscUJBQXFCM0IsUUFBUXlCLGNBQWM7WUFFakQ3QixLQUFLOEIsYUFBYUM7UUFDcEI7UUFFQSxPQUFPRDtJQUNUO0lBRUFFLG1CQUFtQjtRQUNqQixNQUFNQyxnQkFBZ0IsRUFBRTtRQUV4QixJQUFJLENBQUM1QixRQUFRLENBQUNJLE9BQU8sQ0FBQyxDQUFDTDtZQUNyQixNQUFNOEIsdUJBQXVCOUIsUUFBUTRCLGdCQUFnQjtZQUVyRGhDLEtBQUtpQyxlQUFlQztRQUN0QjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUUsbUJBQW1CO1FBQ2pCLE1BQU1DLGdCQUFnQixFQUFFO1FBRXhCLElBQUksQ0FBQy9CLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLENBQUNMO1lBQ3JCLE1BQU1pQyx1QkFBdUJqQyxRQUFRK0IsZ0JBQWdCO1lBRXJEbkMsS0FBS29DLGVBQWVDO1FBQ3RCO1FBRUEsT0FBT0Q7SUFDVDtJQUVBLE9BQU9FLGFBQWEsR0FBR2pDLFFBQVEsRUFBRTtRQUMvQixNQUFNa0MsY0FBY3RDLEtBQUtJLFdBQ25CRCxVQUFVbUMsYUFDVkMsbUJBQW1CLElBQUl6QyxpQkFBaUJLLFNBQVNDO1FBRXZELE9BQU9tQztJQUNUO0FBQ0YifQ==