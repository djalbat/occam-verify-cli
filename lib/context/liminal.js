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
    getNonTrivialSubstitutions(nested = true) {
        const nonTrivialSubstitutions = this.findSubstitutions((substitution)=>{
            const substitutionNonTrivial = substitution.isNonTrivial();
            if (substitutionNonTrivial) {
                return true;
            }
        }, nested);
        return nonTrivialSubstitutions;
    }
    getSoleNonTrivialSubstitution(nested = true) {
        let soleNonTrivialSubstitutions = null;
        const nonTrivialSubstitutions = this.getNonTrivialSubstitutions(nested), nonTrivialSubstitutionsLength = nonTrivialSubstitutions.length;
        if (nonTrivialSubstitutionsLength === 1) {
            const firstNonTrivkalSubstitution = first(nonTrivialSubstitutions);
            soleNonTrivialSubstitutions = firstNonTrivkalSubstitution; ///
        }
        return soleNonTrivialSubstitutions;
    }
    addSubstitution(substitution, scoped = false) {
        if (scoped) {
            const context = this.getContext();
            context.addSubstitution(substitution, scoped);
            return;
        }
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
    commit(context) {
        if (context === undefined) {
            context = this.getContext();
        }
        context.debug(`Commiting the limiinal context`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZXNGcm9tU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCB7IGZpbmQsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGltaW5hbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldE5vblRyaXZpYWxTdWJzdGl0dXRpb25zKG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCBub25Ucml2aWFsU3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vblRyaXZpYWwgPSBzdWJzdGl0dXRpb24uaXNOb25Ucml2aWFsKCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBuZXN0ZWQpO1xuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24obmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldE5vblRyaXZpYWxTdWJzdGl0dXRpb25zKG5lc3RlZCksXG4gICAgICAgICAgbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGggPSBub25Ucml2aWFsU3Vic3RpdHV0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9uVHJpdmthbFN1YnN0aXR1dGlvbiA9IGZpcnN0KG5vblRyaXZpYWxTdWJzdGl0dXRpb25zKTtcblxuICAgICAgc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zID0gZmlyc3ROb25Ucml2a2FsU3Vic3RpdHV0aW9uOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc2NvcGVkID0gZmFsc2UpIHtcbiAgICBpZiAoc2NvcGVkKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc2NvcGVkKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgbGltaW5hbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgbGltaW5hbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBsaW1pbmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZVN1YnN0aXR1dGlvbnMoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lcyA9IG1ldGF2YXJpYWJsZU5hbWVzRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBtZXRhdmFyaWFibGVOYW1lcy5mb3JFYWNoKChtZXRhdmFyaWFibGVOYW1lKSA9PiB7XG4gICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBjb21wbGV4U3Vic3RpdHV0aW9ucy5mb3JFYWNoKChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IGNvbXBsZXhTdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICByZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgIHN1YnN0aXR1dGlvbi5yZXNvbHZlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCgpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZXMgPSBtZXRhdmFyaWFibGVOYW1lc0Zyb21TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHJlc29sdmVkID0gbWV0YXZhcmlhYmxlTmFtZXMuZXZlcnkoKG1ldGF2YXJpYWJsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbnMuZXZlcnkoKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICBjb21taXQoY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGBDb21taXRpbmcgdGhlIGxpbWlpbmFsIGNvbnRleHRgKTtcblxuICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9ucyh0aGlzLnN1YnN0aXR1dGlvbnMpO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbihjYWxsYmFjaykge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25zKGNhbGxiYWNrLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnM7XG5cbiAgICBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKG5lc3RlZCk7XG5cbiAgICBzdWJzdGl0dXRpb25zID0gZmluZChzdWJzdGl0dXRpb25zLCBjYWxsYmFjayk7ICAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblNpbXBsZSA9IHN1YnN0aXR1dGlvbi5pc1NpbXBsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uU2ltcGxlKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHNpbXBsZVN1YnN0aXR1dGlvbi5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wbGV4ID0gc3Vic3RpdHV0aW9uLmlzQ29tcGxleCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGxleCkge1xuICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGNvbXBsZXhTdWJzdGl0dXRpb24uY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkJFcXVhbFRvU3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbkIuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkEpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25CRXF1YWxUb1N1YnN0aXR1dGlvbkEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbik7ICAvLy9cblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgbGltaW5hbENvbnRleHQgPSBuZXcgTGltaW5hbENvbnRleHQoY29udGV4dCwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gbGltaW5hbENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaW1pbmFsQ29udGV4dCIsImZpbmQiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiQ29udGV4dCIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsIm5lc3RlZCIsImdldENvbnRleHQiLCJnZXROb25Ucml2aWFsU3Vic3RpdHV0aW9ucyIsIm5vblRyaXZpYWxTdWJzdGl0dXRpb25zIiwiZmluZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob25Ucml2aWFsIiwiaXNOb25Ucml2aWFsIiwiZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24iLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMiLCJub25Ucml2aWFsU3Vic3RpdHV0aW9uc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9uVHJpdmthbFN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInNjb3BlZCIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInN1YnN0aXR1dGlvbkIiLCJzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIiLCJpc0VxdWFsVG8iLCJkZWJ1ZyIsInB1c2giLCJyZXNvbHZlU3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwibWV0YXZhcmlhYmxlTmFtZXMiLCJtZXRhdmFyaWFibGVOYW1lc0Zyb21TdWJzdGl0dXRpb25zIiwiZm9yRWFjaCIsIm1ldGF2YXJpYWJsZU5hbWUiLCJjb21wbGV4U3Vic3RpdHV0aW9ucyIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZSIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJyZXNvbHZlZCIsImlzUmVzb2x2ZWQiLCJyZXNvbHZlIiwiYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiZXZlcnkiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkIiwiY29tbWl0IiwidW5kZWZpbmVkIiwiYWRkU3Vic3RpdHV0aW9ucyIsImZpbmRTdWJzdGl0dXRpb24iLCJjYWxsYmFjayIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInN1YnN0aXR1dGlvbkNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb25TaW1wbGUiLCJpc1NpbXBsZSIsInNpbXBsZVN1YnN0aXR1dGlvbkNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb25Db21wbGV4IiwiaXNDb21wbGV4IiwiY29tcGxleFN1YnN0aXR1dGlvbkNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uQkVxdWFsVG9TdWJzdGl0dXRpb25BIiwiaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJmcm9tTm90aGluZyIsImxpbWluYWxDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXFCQTs7OzJCQVBVOytCQUNvQjtnRUFFL0I7Ozs7OztBQUVwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdDLHlC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