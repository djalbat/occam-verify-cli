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
            context.debug(`...added the '${substitutionString}' substitution to the liminal context.`);
        }
    }
    addSubstitutions(substitutions) {
        substitutions.forEach((substitution)=>{
            this.addSubstitution(substitution);
        });
    }
    resolveSubstitutions(generalContext, specificContext) {
        const substitutions = this.getSubstitutions(), metavariableNames = (0, _substitutions.metavariableNamesFromSubstitutions)(substitutions);
        metavariableNames.forEach((metavariableName)=>{
            const complexSubstitutions = this.findComplexSubstitutionsByMetavariableName(metavariableName);
            complexSubstitutions.forEach((complexSubstitution)=>{
                const substitution = complexSubstitution, resolved = substitution.isResolved();
                if (!resolved) {
                    substitution.resolve(generalContext, specificContext);
                }
            });
        });
    }
    areSubstitutionsResolved() {
        const substitutions = this.getSubstitutions(), metavariableNames = (0, _substitutions.metavariableNamesFromSubstitutions)(substitutions), resolved = metavariableNames.every((metavariableName)=>{
            const complexSubstitutions = this.findComplexSubstitutionsByMetavariableName(metavariableName), complexSubstitutionsResolved = complexSubstitutions.every((complexSubstitution)=>{
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
    findSubstitutionByVariableIdentifier(variableIdentifier) {
        const substitution = this.findSubstitution((substitution)=>{
            const substitutionComparesToVariableIdentifier = substitution.compareVariableIdentifier(variableIdentifier);
            if (substitutionComparesToVariableIdentifier) {
                return true;
            }
        }) || null;
        return substitution;
    }
    findSubstitutionByMetavariableName(metavariableName) {
        const simpleSubstitution = this.findSimpleSubstitutionByMetavariableName(metavariableName), substitution = simpleSubstitution; ///
        return substitution;
    }
    findSimpleSubstitutionByMetavariableName(metavariableName) {
        const simpleSubstitution = this.findSubstitution((substitution)=>{
            const substitutionSimple = substitution.isSimple();
            if (substitutionSimple) {
                const simpleSubstitution = substitution, simpleSubstitutionComparesToMetavariableName = simpleSubstitution.compareMetavariableName(metavariableName);
                if (simpleSubstitutionComparesToMetavariableName) {
                    return true;
                }
            }
        }) || null;
        return simpleSubstitution;
    }
    findComplexSubstitutionsByMetavariableName(metavariableName) {
        const complexSubstitution = this.findSubstitutions((substitution)=>{
            const substitutionComplex = substitution.isComplex();
            if (substitutionComplex) {
                const complexSubstitution = substitution, complexSubstitutionComparesToMetavariableName = complexSubstitution.compareMetavariableName(metavariableName);
                if (complexSubstitutionComparesToMetavariableName) {
                    return true;
                }
            }
        }) || null;
        return complexSubstitution;
    }
    findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution) {
        const substitutionA = substitution; ///
        substitution = this.findSubstitution((substitution)=>{
            const substitutionComparesToMetavariableName = substitution.compareMetavariableName(metavariableName);
            if (substitutionComparesToMetavariableName) {
                const substitutionB = substitution, substitutionBEqualToSubstitutionA = substitutionB.isEqualTo(substitutionA);
                if (substitutionBEqualToSubstitutionA) {
                    return true;
                }
            }
        }) || null;
        return substitution;
    }
    isSubstitutionPresentByMetavariableName(metavariableName) {
        const substitution = this.findSubstitutionByMetavariableName(metavariableName), substitutionPresent = substitution !== null;
        return substitutionPresent;
    }
    isSimpleSubstitutionPresentByMetavariableName(metavariableName) {
        const simpleSubstitution = this.findSimpleSubstitutionByMetavariableName(metavariableName), simpleSubstitutionPresent = simpleSubstitution !== null;
        return simpleSubstitutionPresent;
    }
    isSubstitutionPresentByMetavariableNameAndSubstitution(metavariableName, substitution) {
        substitution = this.findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution); ///
        const substitutionPresent = substitution !== null;
        return substitutionPresent;
    }
    static fromNothing(context) {
        const substitutions = [], liminalContext = new LiminalContext(context, substitutions);
        return liminalContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZXNGcm9tU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5jb25zdCB7IGZpbmQsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGltaW5hbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFNvbGVTdWJzdGl0dXRpb24obmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzb2xlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMobmVzdGVkKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdWJzdGl0dXRpb24gPSBmaXJzdChzdWJzdGl0dXRpb25zKTtcblxuICAgICAgc29sZVN1YnN0aXR1dGlvbiA9IGZpcnN0U3Vic3RpdHV0aW9uOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc29sZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uKG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc29sZVN1YnN0aXR1dGlvbiA9IHRoaXMuZ2V0U29sZVN1YnN0aXR1dGlvbihuZXN0ZWQpO1xuXG4gICAgaWYgKHNvbGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNvbGVTdWJzdGl0dXRpb25Ob25Ucml2aWFsID0gc29sZVN1YnN0aXR1dGlvbi5pc05vblRyaXZpYWwoKTtcblxuICAgICAgaWYgKHNvbGVTdWJzdGl0dXRpb25Ob25Ucml2aWFsKSB7XG4gICAgICAgIHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uID0gc29sZVN1YnN0aXR1dGlvbjsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGxpbWluYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHRoaXMuc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGxpbWluYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgbGltaW5hbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucykge1xuICAgIHN1YnN0aXR1dGlvbnMuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICB0aGlzLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZVN1YnN0aXR1dGlvbnMoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lcyA9IG1ldGF2YXJpYWJsZU5hbWVzRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBtZXRhdmFyaWFibGVOYW1lcy5mb3JFYWNoKChtZXRhdmFyaWFibGVOYW1lKSA9PiB7XG4gICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBjb21wbGV4U3Vic3RpdHV0aW9ucy5mb3JFYWNoKChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IGNvbXBsZXhTdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICByZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgIHN1YnN0aXR1dGlvbi5yZXNvbHZlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCgpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZXMgPSBtZXRhdmFyaWFibGVOYW1lc0Zyb21TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHJlc29sdmVkID0gbWV0YXZhcmlhYmxlTmFtZXMuZXZlcnkoKG1ldGF2YXJpYWJsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbnMuZXZlcnkoKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNMZW5ndGggPSB0aGlzLnN1YnN0aXR1dGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKHN1YnN0aXR1dGlvbnNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgcXVhbGlmeShhc3N1bXB0aW9uLCBtZXRhTGV2ZWxBc3N1bXB0aW9uKSB7XG4gICAgbGV0IHF1YWxpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZW1wdHkgPSB0aGlzLmlzRW1wdHkoKTtcblxuICAgIGlmIChlbXB0eSkge1xuICAgICAgcXVhbGlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmVzdGVkID0gZmFsc2UsXG4gICAgICAgICAgICBzb2xlU3Vic3RpdHV0aW9uID0gdGhpcy5nZXRTb2xlU3Vic3RpdHV0aW9uKG5lc3RlZCk7XG5cbiAgICAgIGlmIChzb2xlU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IFJlZmVyZW5jZVN1YnN0aXR1dGlvbi5mcm9tQXNzdW1wdGlvbkFuZE1ldGFMZXZlbEFzc3VtcHRpb24oYXNzdW1wdGlvbiwgbWV0YUxldmVsQXNzdW1wdGlvbiwgY29udGV4dCksXG4gICAgICAgICAgICAgIHNvbGVTdWJzdGl0dXRpb25Db21wYXJlcyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbi5jb21wYXJlU3Vic3RpdHV0aW9uKHNvbGVTdWJzdGl0dXRpb24pO1xuXG4gICAgICAgIGlmIChzb2xlU3Vic3RpdHV0aW9uQ29tcGFyZXMpIHtcbiAgICAgICAgICBxdWFsaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1YWxpZmllcztcbiAgfVxuXG4gIGNvbW1pdChjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYENvbW1pdHRpbmcgdGhlIGxpbWlpbmFsIGNvbnRleHRgKTtcblxuICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9ucyh0aGlzLnN1YnN0aXR1dGlvbnMpO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbihjYWxsYmFjaykge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25zKGNhbGxiYWNrLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnM7XG5cbiAgICBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKG5lc3RlZCk7XG5cbiAgICBzdWJzdGl0dXRpb25zID0gZmluZChzdWJzdGl0dXRpb25zLCBjYWxsYmFjayk7ICAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblNpbXBsZSA9IHN1YnN0aXR1dGlvbi5pc1NpbXBsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uU2ltcGxlKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHNpbXBsZVN1YnN0aXR1dGlvbi5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wbGV4ID0gc3Vic3RpdHV0aW9uLmlzQ29tcGxleCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGxleCkge1xuICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGNvbXBsZXhTdWJzdGl0dXRpb24uY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkJFcXVhbFRvU3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbkIuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkEpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25CRXF1YWxUb1N1YnN0aXR1dGlvbkEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKTsgIC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBsaW1pbmFsQ29udGV4dCA9IG5ldyBMaW1pbmFsQ29udGV4dChjb250ZXh0LCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBsaW1pbmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbWluYWxDb250ZXh0IiwiZmluZCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJDb250ZXh0IiwiY29udGV4dCIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwibmVzdGVkIiwiZ2V0Q29udGV4dCIsImdldFNvbGVTdWJzdGl0dXRpb24iLCJzb2xlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0U3Vic3RpdHV0aW9uIiwiZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24iLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbiIsInNvbGVTdWJzdGl0dXRpb25Ob25Ucml2aWFsIiwiaXNOb25Ucml2aWFsIiwiYWRkU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImlzRXF1YWxUbyIsImRlYnVnIiwicHVzaCIsImFkZFN1YnN0aXR1dGlvbnMiLCJmb3JFYWNoIiwicmVzb2x2ZVN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsIm1ldGF2YXJpYWJsZU5hbWVzIiwibWV0YXZhcmlhYmxlTmFtZXNGcm9tU3Vic3RpdHV0aW9ucyIsIm1ldGF2YXJpYWJsZU5hbWUiLCJjb21wbGV4U3Vic3RpdHV0aW9ucyIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZSIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJyZXNvbHZlZCIsImlzUmVzb2x2ZWQiLCJyZXNvbHZlIiwiYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiZXZlcnkiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkIiwiaXNFbXB0eSIsImVtcHR5IiwicXVhbGlmeSIsImFzc3VtcHRpb24iLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwicXVhbGlmaWVzIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJmcm9tQXNzdW1wdGlvbkFuZE1ldGFMZXZlbEFzc3VtcHRpb24iLCJzb2xlU3Vic3RpdHV0aW9uQ29tcGFyZXMiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwiY29tbWl0IiwidW5kZWZpbmVkIiwiZmluZFN1YnN0aXR1dGlvbiIsImNhbGxiYWNrIiwiZmluZFN1YnN0aXR1dGlvbnMiLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJzdWJzdGl0dXRpb25Db21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uU2ltcGxlIiwiaXNTaW1wbGUiLCJzaW1wbGVTdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uQ29tcGxleCIsImlzQ29tcGxleCIsImNvbXBsZXhTdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvbkJFcXVhbFRvU3Vic3RpdHV0aW9uQSIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uIiwiZnJvbU5vdGhpbmciLCJsaW1pbmFsQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFxQkE7OzsyQkFSVTsrQkFDb0I7Z0VBRS9CO2lFQUNDOzs7Ozs7QUFFckIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHQyx5QkFBYztBQUV2QixNQUFNSCx1QkFBdUJJLGdCQUFPO0lBQ2pELFlBQVlDLE9BQU8sRUFBRUMsYUFBYSxDQUFFO1FBQ2xDLEtBQUssQ0FBQ0Q7UUFFTixJQUFJLENBQUNDLGFBQWEsR0FBR0E7SUFDdkI7SUFFQUMsaUJBQWlCQyxTQUFTLElBQUksRUFBRTtRQUM5QixJQUFJRjtRQUVKLElBQUlFLFFBQVE7WUFDVixNQUFNSCxVQUFVLElBQUksQ0FBQ0ksVUFBVTtZQUUvQkgsZ0JBQWdCRCxRQUFRRSxnQkFBZ0I7WUFFeENELGdCQUFnQjttQkFDWCxJQUFJLENBQUNBLGFBQWE7bUJBQ2xCQTthQUNKO1FBQ0gsT0FBTztZQUNMQSxnQkFBZ0IsSUFBSSxDQUFDQSxhQUFhO1FBQ3BDO1FBRUEsT0FBT0E7SUFDVDtJQUVBSSxvQkFBb0JGLFNBQVMsSUFBSSxFQUFFO1FBQ2pDLElBQUlHLG1CQUFtQjtRQUV2QixNQUFNTCxnQkFBZ0Is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