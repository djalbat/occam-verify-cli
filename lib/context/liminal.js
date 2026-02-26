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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZXNGcm9tU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCB7IGZpbmQsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGltaW5hbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldE5vblRyaXZpYWxTdWJzdGl0dXRpb25zKG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCBub25Ucml2aWFsU3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vblRyaXZpYWwgPSBzdWJzdGl0dXRpb24uaXNOb25Ucml2aWFsKCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBuZXN0ZWQpO1xuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24obmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldE5vblRyaXZpYWxTdWJzdGl0dXRpb25zKG5lc3RlZCksXG4gICAgICAgICAgbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGggPSBub25Ucml2aWFsU3Vic3RpdHV0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9uVHJpdmthbFN1YnN0aXR1dGlvbiA9IGZpcnN0KG5vblRyaXZpYWxTdWJzdGl0dXRpb25zKTtcblxuICAgICAgc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zID0gZmlyc3ROb25Ucml2a2FsU3Vic3RpdHV0aW9uOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgbGltaW5hbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgbGltaW5hbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBsaW1pbmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgc3Vic3RpdHV0aW9ucy5mb3JFYWNoKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIHRoaXMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlU3Vic3RpdHV0aW9ucyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWVzID0gbWV0YXZhcmlhYmxlTmFtZXNGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKTtcblxuICAgIG1ldGF2YXJpYWJsZU5hbWVzLmZvckVhY2goKG1ldGF2YXJpYWJsZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zLmZvckVhY2goKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gY29tcGxleFN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIHJlc29sdmVkID0gc3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgc3Vic3RpdHV0aW9uLnJlc29sdmUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkKCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lcyA9IG1ldGF2YXJpYWJsZU5hbWVzRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgcmVzb2x2ZWQgPSBtZXRhdmFyaWFibGVOYW1lcy5ldmVyeSgobWV0YXZhcmlhYmxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9ucy5ldmVyeSgoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIGNvbW1pdChjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYENvbW1pdGluZyB0aGUgbGltaWluYWwgY29udGV4dGApO1xuXG4gICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb25zKHRoaXMuc3Vic3RpdHV0aW9ucyk7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZChjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbnMoY2FsbGJhY2ssIG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9ucztcblxuICAgIHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMobmVzdGVkKTtcblxuICAgIHN1YnN0aXR1dGlvbnMgPSBmaW5kKHN1YnN0aXR1dGlvbnMsIGNhbGxiYWNrKTsgIC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIgPSBzdWJzdGl0dXRpb24uY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU2ltcGxlID0gc3Vic3RpdHV0aW9uLmlzU2ltcGxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25TaW1wbGUpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbkNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gc2ltcGxlU3Vic3RpdHV0aW9uLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBsZXggPSBzdWJzdGl0dXRpb24uaXNDb21wbGV4KCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wbGV4KSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbkNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gY29tcGxleFN1YnN0aXR1dGlvbi5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbkNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBzdWJzdGl0dXRpb24uY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uQkVxdWFsVG9TdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uQi5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkJFcXVhbFRvU3Vic3RpdHV0aW9uQSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKTsgIC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBsaW1pbmFsQ29udGV4dCA9IG5ldyBMaW1pbmFsQ29udGV4dChjb250ZXh0LCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBsaW1pbmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbWluYWxDb250ZXh0IiwiZmluZCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJDb250ZXh0IiwiY29udGV4dCIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwibmVzdGVkIiwiZ2V0Q29udGV4dCIsImdldE5vblRyaXZpYWxTdWJzdGl0dXRpb25zIiwibm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMiLCJmaW5kU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk5vblRyaXZpYWwiLCJpc05vblRyaXZpYWwiLCJnZXRTb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbiIsInNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9ucyIsIm5vblRyaXZpYWxTdWJzdGl0dXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3ROb25Ucml2a2FsU3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImlzRXF1YWxUbyIsImRlYnVnIiwicHVzaCIsImFkZFN1YnN0aXR1dGlvbnMiLCJmb3JFYWNoIiwicmVzb2x2ZVN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsIm1ldGF2YXJpYWJsZU5hbWVzIiwibWV0YXZhcmlhYmxlTmFtZXNGcm9tU3Vic3RpdHV0aW9ucyIsIm1ldGF2YXJpYWJsZU5hbWUiLCJjb21wbGV4U3Vic3RpdHV0aW9ucyIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZSIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJyZXNvbHZlZCIsImlzUmVzb2x2ZWQiLCJyZXNvbHZlIiwiYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiZXZlcnkiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkIiwiY29tbWl0IiwidW5kZWZpbmVkIiwiZmluZFN1YnN0aXR1dGlvbiIsImNhbGxiYWNrIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvblNpbXBsZSIsImlzU2ltcGxlIiwic2ltcGxlU3Vic3RpdHV0aW9uQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvbkNvbXBsZXgiLCJpc0NvbXBsZXgiLCJjb21wbGV4U3Vic3RpdHV0aW9uQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb25CRXF1YWxUb1N1YnN0aXR1dGlvbkEiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImZyb21Ob3RoaW5nIiwibGltaW5hbENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7MkJBUFU7K0JBQ29CO2dFQUUvQjs7Ozs7O0FBRXBCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7QUFFdkIsTUFBTUgsdUJBQXVCSSxn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