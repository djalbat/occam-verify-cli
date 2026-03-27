"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LiminalContext;
    }
});
const _necessary = require("necessary");
const _substitutions = require("../utilities/substitutions");
const _context = /*#__PURE__*/ _interop_require_default(require("../context"));
const _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { find, first } = _necessary.arrayUtilities;
class LiminalContext extends _context.default {
    constructor(context, substitutions){
        super(context);
        this.substitutions = substitutions;
    }
    getSubstitutions(nested = true) {
        let substitutions;
        if (nested) {
            const context = this.getContext();
            substitutions = context.getSubstitutions();
            substitutions = [
                ...this.substitutions,
                ...substitutions
            ];
        } else {
            substitutions = this.substitutions;
        }
        return substitutions;
    }
    getSoleSubstitution(nested = true) {
        let soleSubstitution = null;
        const substitutions = this.getSubstitutions(nested), substitutionsLength = substitutions.length;
        if (substitutionsLength === 1) {
            const firstSubstitution = first(substitutions);
            soleSubstitution = firstSubstitution; ///
        }
        return soleSubstitution;
    }
    getSoleNonTrivialSubstitution(nested = true) {
        let soleNonTrivialSubstitution = null;
        const soleSubstitution = this.getSoleSubstitution(nested);
        if (soleSubstitution !== null) {
            const soleSubstitutionNonTrivial = soleSubstitution.isNonTrivial();
            if (soleSubstitutionNonTrivial) {
                soleNonTrivialSubstitution = soleSubstitution; ///
            }
        }
        return soleNonTrivialSubstitution;
    }
    addSubstitution(substitution) {
        const context = this, substitutionA = substitution, substitutionString = substitution.getString();
        context.trace(`Adding the '${substitutionString}' substitution to the liminal context...`);
        const substitutionB = this.substitutions.find((substitution)=>{
            const substitutionB = substitution, substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
            if (substitutionAEqualToSubstitutionB) {
                return true;
            }
        }) || null;
        if (substitutionB !== null) {
            context.debug(`The '${substitutionString}' substitution has already been added to the liminal context.`);
        } else {
            this.substitutions.push(substitution);
        }
        context.debug(`...added the '${substitutionString}' substitution to the liminal context.`);
    }
    addSubstitutions(substitutions) {
        substitutions.forEach((substitution)=>{
            this.addSubstitution(substitution);
        });
    }
    resolveSubstitutions(generalContext, specificContext) {
        const substitutions = this.getSubstitutions(), metavariableNodes = (0, _substitutions.metavariableNodesFromSubstitutions)(substitutions);
        metavariableNodes.forEach((metavariableNode)=>{
            const complexSubstitutions = this.findComplexSubstitutionsByMetavariableNode(metavariableNode);
            complexSubstitutions.forEach((complexSubstitution)=>{
                const substitution = complexSubstitution, resolved = substitution.isResolved();
                if (!resolved) {
                    substitution.resolve(generalContext, specificContext);
                }
            });
        });
    }
    areSubstitutionsResolved() {
        const substitutions = this.getSubstitutions(), metavariableNodes = (0, _substitutions.metavariableNodesFromSubstitutions)(substitutions), resolved = metavariableNodes.every((metavariableNode)=>{
            const complexSubstitutions = this.findComplexSubstitutionsByMetavariableNode(metavariableNode), complexSubstitutionsResolved = complexSubstitutions.every((complexSubstitution)=>{
                const complexSubstitutionResolved = complexSubstitution.isResolved();
                if (complexSubstitutionResolved) {
                    return true;
                }
            });
            if (complexSubstitutionsResolved) {
                return true;
            }
        });
        return resolved;
    }
    isEmpty() {
        const substitutionsLength = this.substitutions.length, empty = substitutionsLength === 0;
        return empty;
    }
    qualify(assumption, metaLevelAssumption) {
        let qualifies = false;
        const empty = this.isEmpty();
        if (empty) {
            qualifies = true;
        } else {
            const nested = false, soleSubstitution = this.getSoleSubstitution(nested);
            if (soleSubstitution !== null) {
                const { ReferenceSubstitution } = _elements.default, context = this, referenceSubstitution = ReferenceSubstitution.fromAssumptionAndMetaLevelAssumption(assumption, metaLevelAssumption, context), soleSubstitutionCompares = referenceSubstitution.compareSubstitution(soleSubstitution);
                if (soleSubstitutionCompares) {
                    qualifies = true;
                }
            }
        }
        return qualifies;
    }
    commit(context) {
        if (context === undefined) {
            context = this.getContext();
        }
        context.debug(`Committing the limiinal context`);
        context.addSubstitutions(this.substitutions);
    }
    findSubstitution(callback) {
        const substitutions = this.getSubstitutions(), substitution = substitutions.find(callback);
        return substitution;
    }
    findSubstitutions(callback, nested = true) {
        let substitutions;
        substitutions = this.getSubstitutions(nested);
        substitutions = find(substitutions, callback); ///
        return substitutions;
    }
    findSubstitutionByVariableNode(variableNode) {
        const substitution = this.findSubstitution((substitution)=>{
            const substitutionComparesToVariableNode = substitution.compareVariableNode(variableNode);
            if (substitutionComparesToVariableNode) {
                return true;
            }
        }) || null;
        return substitution;
    }
    findSubstitutionByMetavariableNode(metavariableNode) {
        const simpleSubstitution = this.findSimpleSubstitutionByMetavariableNode(metavariableNode), substitution = simpleSubstitution; ///
        return substitution;
    }
    findSimpleSubstitutionByMetavariableNode(metavariableNode) {
        const simpleSubstitution = this.findSubstitution((substitution)=>{
            const substitutionSimple = substitution.isSimple();
            if (substitutionSimple) {
                const simpleSubstitution = substitution, metavariableNodeMatches = simpleSubstitution.matchMetavariableNode(metavariableNode);
                if (metavariableNodeMatches) {
                    return true;
                }
            }
        }) || null;
        return simpleSubstitution;
    }
    findComplexSubstitutionsByMetavariableNode(metavariableNode) {
        const complexSubstitution = this.findSubstitutions((substitution)=>{
            const substitutionComplex = substitution.isComplex();
            if (substitutionComplex) {
                const complexSubstitution = substitution, metavariableNodeMatches = complexSubstitution.matchMetavariableNode(metavariableNode);
                if (metavariableNodeMatches) {
                    return true;
                }
            }
        }) || null;
        return complexSubstitution;
    }
    findSubstitutionByMetavariableNodeAndSubstitution(metavariableNode, substitution) {
        const substitutionA = substitution; ///
        substitution = this.findSubstitution((substitution)=>{
            const metavariableNodeMatches = substitution.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                const substitutionB = substitution, substitutionBEqualToSubstitutionA = substitutionB.isEqualTo(substitutionA);
                if (substitutionBEqualToSubstitutionA) {
                    return true;
                }
            }
        }) || null;
        return substitution;
    }
    isSubstitutionPresentByMetavariableNode(metavariableNode) {
        const substitution = this.findSubstitutionByMetavariableNode(metavariableNode), substitutionPresent = substitution !== null;
        return substitutionPresent;
    }
    isSubstitutionPresentByMetavariableNodeAndSubstitution(metavariableNode, substitution) {
        substitution = this.findSubstitutionByMetavariableNodeAndSubstitution(metavariableNode, substitution); ///
        const substitutionPresent = substitution !== null;
        return substitutionPresent;
    }
    static fromNothing(context) {
        const substitutions = [], liminalContext = new LiminalContext(context, substitutions);
        return liminalContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTm9kZXNGcm9tU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5jb25zdCB7IGZpbmQsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGltaW5hbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFNvbGVTdWJzdGl0dXRpb24obmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzb2xlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMobmVzdGVkKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdWJzdGl0dXRpb24gPSBmaXJzdChzdWJzdGl0dXRpb25zKTtcblxuICAgICAgc29sZVN1YnN0aXR1dGlvbiA9IGZpcnN0U3Vic3RpdHV0aW9uOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc29sZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uKG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc29sZVN1YnN0aXR1dGlvbiA9IHRoaXMuZ2V0U29sZVN1YnN0aXR1dGlvbihuZXN0ZWQpO1xuXG4gICAgaWYgKHNvbGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNvbGVTdWJzdGl0dXRpb25Ob25Ucml2aWFsID0gc29sZVN1YnN0aXR1dGlvbi5pc05vblRyaXZpYWwoKTtcblxuICAgICAgaWYgKHNvbGVTdWJzdGl0dXRpb25Ob25Ucml2aWFsKSB7XG4gICAgICAgIHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uID0gc29sZVN1YnN0aXR1dGlvbjsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGxpbWluYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHRoaXMuc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGxpbWluYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBsaW1pbmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBzdWJzdGl0dXRpb25zLmZvckVhY2goKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgdGhpcy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVTdWJzdGl0dXRpb25zKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc0Zyb21TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgbWV0YXZhcmlhYmxlTm9kZXMuZm9yRWFjaCgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnMuZm9yRWFjaCgoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBjb21wbGV4U3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgcmVzb2x2ZWQgPSBzdWJzdGl0dXRpb24uaXNSZXNvbHZlZCgpO1xuXG4gICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICBzdWJzdGl0dXRpb24ucmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQoKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzID0gbWV0YXZhcmlhYmxlTm9kZXNGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICByZXNvbHZlZCA9IG1ldGF2YXJpYWJsZU5vZGVzLmV2ZXJ5KChtZXRhdmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5KChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb24uaXNSZXNvbHZlZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zTGVuZ3RoID0gdGhpcy5zdWJzdGl0dXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChzdWJzdGl0dXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIHF1YWxpZnkoYXNzdW1wdGlvbiwgbWV0YUxldmVsQXNzdW1wdGlvbikge1xuICAgIGxldCBxdWFsaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XG5cbiAgICBpZiAoZW1wdHkpIHtcbiAgICAgIHF1YWxpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgICAgc29sZVN1YnN0aXR1dGlvbiA9IHRoaXMuZ2V0U29sZVN1YnN0aXR1dGlvbihuZXN0ZWQpO1xuXG4gICAgICBpZiAoc29sZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBSZWZlcmVuY2VTdWJzdGl0dXRpb24uZnJvbUFzc3VtcHRpb25BbmRNZXRhTGV2ZWxBc3N1bXB0aW9uKGFzc3VtcHRpb24sIG1ldGFMZXZlbEFzc3VtcHRpb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzb2xlU3Vic3RpdHV0aW9uQ29tcGFyZXMgPSByZWZlcmVuY2VTdWJzdGl0dXRpb24uY29tcGFyZVN1YnN0aXR1dGlvbihzb2xlU3Vic3RpdHV0aW9uKTtcblxuICAgICAgICBpZiAoc29sZVN1YnN0aXR1dGlvbkNvbXBhcmVzKSB7XG4gICAgICAgICAgcXVhbGlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWFsaWZpZXM7XG4gIH1cblxuICBjb21taXQoY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGBDb21taXR0aW5nIHRoZSBsaW1paW5hbCBjb250ZXh0YCk7XG5cbiAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbnModGhpcy5zdWJzdGl0dXRpb25zKTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb24oY2FsbGJhY2spIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9ucyhjYWxsYmFjaywgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucyhuZXN0ZWQpO1xuXG4gICAgc3Vic3RpdHV0aW9ucyA9IGZpbmQoc3Vic3RpdHV0aW9ucywgY2FsbGJhY2spOyAgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1ZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5jb21wYXJlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wYXJlc1RvVmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TaW1wbGUgPSBzdWJzdGl0dXRpb24uaXNTaW1wbGUoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblNpbXBsZSkge1xuICAgICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzaW1wbGVTdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBsZXggPSBzdWJzdGl0dXRpb24uaXNDb21wbGV4KCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wbGV4KSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBjb21wbGV4U3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29tcGxleFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uQkVxdWFsVG9TdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uQi5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkJFcXVhbFRvU3Vic3RpdHV0aW9uQSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTsgIC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBsaW1pbmFsQ29udGV4dCA9IG5ldyBMaW1pbmFsQ29udGV4dChjb250ZXh0LCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBsaW1pbmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbWluYWxDb250ZXh0IiwiZmluZCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJDb250ZXh0IiwiY29udGV4dCIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwibmVzdGVkIiwiZ2V0Q29udGV4dCIsImdldFNvbGVTdWJzdGl0dXRpb24iLCJzb2xlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0U3Vic3RpdHV0aW9uIiwiZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24iLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbiIsInNvbGVTdWJzdGl0dXRpb25Ob25Ucml2aWFsIiwiaXNOb25Ucml2aWFsIiwiYWRkU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImlzRXF1YWxUbyIsImRlYnVnIiwicHVzaCIsImFkZFN1YnN0aXR1dGlvbnMiLCJmb3JFYWNoIiwicmVzb2x2ZVN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsIm1ldGF2YXJpYWJsZU5vZGVzIiwibWV0YXZhcmlhYmxlTm9kZXNGcm9tU3Vic3RpdHV0aW9ucyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJjb21wbGV4U3Vic3RpdHV0aW9ucyIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZSIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJyZXNvbHZlZCIsImlzUmVzb2x2ZWQiLCJyZXNvbHZlIiwiYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiZXZlcnkiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkIiwiaXNFbXB0eSIsImVtcHR5IiwicXVhbGlmeSIsImFzc3VtcHRpb24iLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwicXVhbGlmaWVzIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJmcm9tQXNzdW1wdGlvbkFuZE1ldGFMZXZlbEFzc3VtcHRpb24iLCJzb2xlU3Vic3RpdHV0aW9uQ29tcGFyZXMiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwiY29tbWl0IiwidW5kZWZpbmVkIiwiZmluZFN1YnN0aXR1dGlvbiIsImNhbGxiYWNrIiwiZmluZFN1YnN0aXR1dGlvbnMiLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb25Db21wYXJlc1RvVmFyaWFibGVOb2RlIiwiY29tcGFyZVZhcmlhYmxlTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uU2ltcGxlIiwiaXNTaW1wbGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbkNvbXBsZXgiLCJpc0NvbXBsZXgiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQkVxdWFsVG9TdWJzdGl0dXRpb25BIiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbiIsImZyb21Ob3RoaW5nIiwibGltaW5hbENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBcUJBOzs7MkJBUlU7K0JBQ29CO2dFQUUvQjtpRUFDQzs7Ozs7O0FBRXJCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7QUFFdkIsTUFBTUgsdUJBQXVCSSxnQkFBTztJQUNqRCxZQUFZQyxPQUFPLEVBQUVDLGFBQWEsQ0FBRTtRQUNsQyxLQUFLLENBQUNEO1FBRU4sSUFBSSxDQUFDQyxhQUFhLEdBQUdBO0lBQ3ZCO0lBRUFDLGlCQUFpQkMsU0FBUyxJQUFJLEVBQUU7UUFDOUIsSUFBSUY7UUFFSixJQUFJ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