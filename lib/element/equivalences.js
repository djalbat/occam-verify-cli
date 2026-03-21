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
const _occamlanguages = require("occam-languages");
const _necessary = require("necessary");
const _elements = require("../elements");
const _constants = require("../constants");
const _equivalence = require("../utilities/equivalence");
const { push, separate } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class Equivalences extends _occamlanguages.Element {
    constructor(context, string, node, array){
        super(context, string, node);
        this.array = array;
    }
    getArray() {
        return this.array;
    }
    getEquivalencesNode() {
        const node = this.getNode(), equivalencesNode = node; ///
        return equivalencesNode;
    }
    getLength() {
        return this.array.length;
    }
    getTypes() {
        const types = this.array.map((equivalence)=>{
            const type = equivalence.getType();
            return type;
        });
        return types;
    }
    addEquivalence(equivalence) {
        this.array.push(equivalence);
    }
    addEquivalences(equivalences) {
        const array = equivalences.getArray();
        push(this.array, array);
    }
    someEquivalence(callback) {
        return this.array.some(callback);
    }
    everyEquivalence(callback) {
        return this.array.every(callback);
    }
    forEachEquivalence(callback) {
        this.array.forEach(callback);
    }
    findEquivalenceByTerm(term) {
        const equivalence = this.array.find((equivalence)=>{
            const equivalenceComparesToTerm = equivalence.compareTerm(term);
            if (equivalenceComparesToTerm) {
                return true;
            }
        }) || null;
        return equivalence;
    }
    findEquivalenceByTermNodes(termNodes) {
        const equivalence = this.array.find((equivalence)=>{
            const termNodeMatches = equivalence.matchTermNodes(termNodes);
            if (termNodeMatches) {
                return true;
            }
        }) || null;
        return equivalence;
    }
    mergedWith(equivalences, context) {
        let mergedEquivalences = this.clone(context); ///
        equivalences.forEachEquivalence((equivalence)=>{
            mergedEquivalences = mergedEquivalences.mergedWithEquivalence(equivalence, context);
        });
        return mergedEquivalences;
    }
    mergedWithEquivalence(equivalence, context) {
        const equivalences = Equivalences.fromNothing(context);
        let mergedEquivalence = equivalence; ///
        this.forEachEquivalence((equivalence)=>{
            const mergedEquivalenceDisjointFromEquivalence = mergedEquivalence.isDisjointFrom(equivalence);
            if (mergedEquivalenceDisjointFromEquivalence) {
                equivalences.addEquivalence(equivalence);
            } else {
                mergedEquivalence = mergedEquivalence.mergedWith(equivalence, context);
            }
        });
        equivalence = mergedEquivalence; ///
        equivalences.addEquivalence(equivalence);
        return equivalences;
    }
    separateEquivalences(equivalencesA, equivalencesB, callback) {
        const equivalencesAArray = equivalencesA.getArray(), equivalencesBArray = equivalencesB.getArray();
        separate(this.array, equivalencesAArray, equivalencesBArray, callback);
    }
    separateInitiallyGroundedEquivalences(remainingEquivalences, initiallyGroundedEquivalences, context) {
        this.separateEquivalences(remainingEquivalences, initiallyGroundedEquivalences, (equivalence)=>{
            const equivalenceInitiallyGrounded = equivalence.isInitiallyGrounded(context);
            if (!equivalenceInitiallyGrounded) {
                return true;
            }
        });
    }
    separateImplicitlyGroundedEquivalences(remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, context) {
        this.separateEquivalences(remainingEquivalences, implicitlyGroundedEquivalences, (equivalence)=>{
            const equivalenceImplicitlyGrounded = equivalence.isImplicitlyGrounded(definedVariables, context);
            if (!equivalenceImplicitlyGrounded) {
                return true;
            }
        });
    }
    separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context) {
        let equivalences = this, groundedEquivalences, remainingEquivalences, initiallyGroundedEquivalences, implicitlyGroundedEquivalences;
        remainingEquivalences = Equivalences.fromNothing(context);
        initiallyGroundedEquivalences = Equivalences.fromNothing(context);
        equivalences.separateInitiallyGroundedEquivalences(remainingEquivalences, initiallyGroundedEquivalences, context);
        const initiallyGroundedEquivalencesLength = initiallyGroundedEquivalences.getLength();
        if (initiallyGroundedEquivalencesLength > 0) {
            groundedEquivalences = initiallyGroundedEquivalences; ///
            let implicitlyGroundedEquivalencesLength = 1;
            while(implicitlyGroundedEquivalencesLength > 0){
                let definedVariablesLength = 0, previousDefinedVariablesLength = -1;
                while(definedVariablesLength > previousDefinedVariablesLength){
                    previousDefinedVariablesLength = definedVariablesLength; ///
                    groundedTermsFromGroundedEquivalencesAndDefinedVariables(groundedEquivalences, definedVariables, groundedTerms, context);
                    definedVariablesFromGroundedTerms(groundedTerms, definedVariables, context);
                    definedVariablesLength = definedVariables.length;
                }
                equivalences = remainingEquivalences; ///
                remainingEquivalences = [];
                implicitlyGroundedEquivalences = [];
                equivalences.separateImplicitlyGroundedEquivalences(remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, context);
                groundedEquivalences.addEquivalences(implicitlyGroundedEquivalences);
                implicitlyGroundedEquivalencesLength = implicitlyGroundedEquivalences.getLength(); ///
            }
        }
    }
    clone(context) {
        const string = _constants.EMPTY_STRING, node = null, array = [
            ...this.array
        ], equivalences = new Equivalences(context, string, node, array);
        return equivalences;
    }
    static name = "Equivalences";
    static fromNothing(context) {
        const string = _constants.EMPTY_STRING, node = null, array = [];
        context = null;
        const equivalences = new Equivalences(context, string, node, array);
        return equivalences;
    }
});
function definedVariablesFromGroundedTerms(groundedTerms, definedVariables, context) {
    groundedTerms.forEach((groundedTerm)=>{
        const term = groundedTerm, variables = (0, _equivalence.variablesFromTerm)(term, context);
        variables.forEach((variable)=>{
            const definedVariablesIncludesTermVariable = definedVariables.includes(variable);
            if (!definedVariablesIncludesTermVariable) {
                const definedVariable = variable; ///
                definedVariables.push(definedVariable);
            }
        });
    });
}
function groundedTermsFromGroundedEquivalencesAndDefinedVariables(groundedEquivalences, definedVariables, groundedTerms, context) {
    groundedEquivalences.forEachEquivalence((groundedEquivalence)=>{
        groundedEquivalence.getGroundedTerms(definedVariables, groundedTerms, context);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21UZXJtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lcXVpdmFsZW5jZVwiO1xuXG5jb25zdCB7IHB1c2gsIHNlcGFyYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVxdWl2YWxlbmNlcyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VzTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXNOb2RlO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBnZXRUeXBlcygpIHtcbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuYXJyYXkubWFwKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGVxdWl2YWxlbmNlLmdldFR5cGUoKTtcblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBhZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChlcXVpdmFsZW5jZSk7XG4gIH1cblxuICBhZGRFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBlcXVpdmFsZW5jZXMuZ2V0QXJyYXkoKTtcblxuICAgIHB1c2godGhpcy5hcnJheSwgYXJyYXkpO1xuICB9XG5cbiAgc29tZUVxdWl2YWxlbmNlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFcXVpdmFsZW5jZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRXF1aXZhbGVuY2UoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2UgPSB0aGlzLmFycmF5LmZpbmQoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZUNvbXBhcmVzVG9UZXJtID0gZXF1aXZhbGVuY2UuY29tcGFyZVRlcm0odGVybSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZUNvbXBhcmVzVG9UZXJtKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2Rlcyh0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZSA9IHRoaXMuYXJyYXkuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcyk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIG1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzLCBjb250ZXh0KSB7XG4gICAgbGV0ICBtZXJnZWRFcXVpdmFsZW5jZXMgPSB0aGlzLmNsb25lKGNvbnRleHQpOyAvLy9cblxuICAgIGVxdWl2YWxlbmNlcy5mb3JFYWNoRXF1aXZhbGVuY2UoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICBtZXJnZWRFcXVpdmFsZW5jZXMgPSBtZXJnZWRFcXVpdmFsZW5jZXMubWVyZ2VkV2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXJnZWRFcXVpdmFsZW5jZXM7XG4gIH1cblxuICBtZXJnZWRXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBsZXQgbWVyZ2VkRXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZTsgLy8vXG5cbiAgICB0aGlzLmZvckVhY2hFcXVpdmFsZW5jZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IG1lcmdlZEVxdWl2YWxlbmNlRGlzam9pbnRGcm9tRXF1aXZhbGVuY2UgPSBtZXJnZWRFcXVpdmFsZW5jZS5pc0Rpc2pvaW50RnJvbShlcXVpdmFsZW5jZSk7XG5cbiAgICAgIGlmIChtZXJnZWRFcXVpdmFsZW5jZURpc2pvaW50RnJvbUVxdWl2YWxlbmNlKSB7XG4gICAgICAgIGVxdWl2YWxlbmNlcy5hZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXJnZWRFcXVpdmFsZW5jZSA9IG1lcmdlZEVxdWl2YWxlbmNlLm1lcmdlZFdpdGgoZXF1aXZhbGVuY2UsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXF1aXZhbGVuY2UgPSBtZXJnZWRFcXVpdmFsZW5jZTsgIC8vL1xuXG4gICAgZXF1aXZhbGVuY2VzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBzZXBhcmF0ZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlc0FBcnJheSA9IGVxdWl2YWxlbmNlc0EuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXNCQXJyYXkgPSBlcXVpdmFsZW5jZXNCLmdldEFycmF5KCk7XG5cbiAgICBzZXBhcmF0ZSh0aGlzLmFycmF5LCBlcXVpdmFsZW5jZXNBQXJyYXksIGVxdWl2YWxlbmNlc0JBcnJheSwgY2FsbGJhY2spO1xuICB9XG5cbiAgc2VwYXJhdGVJbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5zZXBhcmF0ZUVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCAoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQgPSBlcXVpdmFsZW5jZS5pc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpO1xuXG4gICAgICBpZiAoIWVxdWl2YWxlbmNlSW5pdGlhbGx5R3JvdW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXBhcmF0ZUltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIHRoaXMuc2VwYXJhdGVFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMsIChlcXVpdmFsZW5jZSkgPT4ge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VJbXBsaWNpdGx5R3JvdW5kZWQgPSBlcXVpdmFsZW5jZS5pc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFlcXVpdmFsZW5jZUltcGxpY2l0bHlHcm91bmRlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGxldCBlcXVpdmFsZW5jZXMgPSB0aGlzLCAgLy8vXG4gICAgICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMsXG4gICAgICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXM7XG5cbiAgICByZW1haW5pbmdFcXVpdmFsZW5jZXMgPUVxdWl2YWxlbmNlcy5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlSW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlczsgLy8vXG5cbiAgICAgIGxldCBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSAxO1xuXG4gICAgICB3aGlsZSAoaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IDAsXG4gICAgICAgICAgICBwcmV2aW91c0RlZmluZWRWYXJpYWJsZXNMZW5ndGggPSAtMTtcblxuICAgICAgICB3aGlsZSAoZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA+IHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCkge1xuICAgICAgICAgIHByZXZpb3VzRGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IGRlZmluZWRWYXJpYWJsZXNMZW5ndGg7ICAvLy9cblxuICAgICAgICAgIGdyb3VuZGVkVGVybXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KTtcblxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRUZXJtcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSBkZWZpbmVkVmFyaWFibGVzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVxdWl2YWxlbmNlcyA9IHJlbWFpbmluZ0VxdWl2YWxlbmNlczsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICAgICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICBncm91bmRlZEVxdWl2YWxlbmNlcy5hZGRFcXVpdmFsZW5jZXMoaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzKTtcblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMuZ2V0TGVuZ3RoKCk7ICAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9uZShjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGFycmF5ID0gW1xuICAgICAgICAgICAgLi4udGhpcy5hcnJheVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gbmV3IEVxdWl2YWxlbmNlcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXF1aXZhbGVuY2VzXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgYXJyYXkgPSBbXTtcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgZXF1aXZhbGVuY2VzID0gbmV3IEVxdWl2YWxlbmNlcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkVGVybXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICBncm91bmRlZFRlcm1zLmZvckVhY2goKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgIGNvbnN0IHRlcm0gPSBncm91bmRlZFRlcm0sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgIHZhcmlhYmxlcy5mb3JFYWNoKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVGVybVZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZSA9IHZhcmlhYmxlOyAgLy8vXG5cbiAgICAgICAgZGVmaW5lZFZhcmlhYmxlcy5wdXNoKGRlZmluZWRWYXJpYWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBncm91bmRlZFRlcm1zRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZEVxdWl2YWxlbmNlcywgZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCkge1xuICBncm91bmRlZEVxdWl2YWxlbmNlcy5mb3JFYWNoRXF1aXZhbGVuY2UoKGdyb3VuZGVkRXF1aXZhbGVuY2UpID0+IHtcbiAgICBncm91bmRlZEVxdWl2YWxlbmNlLmdldEdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInB1c2giLCJzZXBhcmF0ZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiRXF1aXZhbGVuY2VzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYXJyYXkiLCJnZXRBcnJheSIsImdldEVxdWl2YWxlbmNlc05vZGUiLCJnZXROb2RlIiwiZXF1aXZhbGVuY2VzTm9kZSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFR5cGVzIiwidHlwZXMiLCJtYXAiLCJlcXVpdmFsZW5jZSIsInR5cGUiLCJnZXRUeXBlIiwiYWRkRXF1aXZhbGVuY2UiLCJhZGRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJzb21lRXF1aXZhbGVuY2UiLCJjYWxsYmFjayIsInNvbWUiLCJldmVyeUVxdWl2YWxlbmNlIiwiZXZlcnkiLCJmb3JFYWNoRXF1aXZhbGVuY2UiLCJmb3JFYWNoIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwidGVybSIsImZpbmQiLCJlcXVpdmFsZW5jZUNvbXBhcmVzVG9UZXJtIiwiY29tcGFyZVRlcm0iLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyIsInRlcm1Ob2RlcyIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGVzIiwibWVyZ2VkV2l0aCIsIm1lcmdlZEVxdWl2YWxlbmNlcyIsImNsb25lIiwibWVyZ2VkV2l0aEVxdWl2YWxlbmNlIiwiZnJvbU5vdGhpbmciLCJtZXJnZWRFcXVpdmFsZW5jZSIsIm1lcmdlZEVxdWl2YWxlbmNlRGlzam9pbnRGcm9tRXF1aXZhbGVuY2UiLCJpc0Rpc2pvaW50RnJvbSIsInNlcGFyYXRlRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzQSIsImVxdWl2YWxlbmNlc0IiLCJlcXVpdmFsZW5jZXNBQXJyYXkiLCJlcXVpdmFsZW5jZXNCQXJyYXkiLCJzZXBhcmF0ZUluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwicmVtYWluaW5nRXF1aXZhbGVuY2VzIiwiaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZUluaXRpYWxseUdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInNlcGFyYXRlSW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiZGVmaW5lZFZhcmlhYmxlcyIsImVxdWl2YWxlbmNlSW1wbGljaXRseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJzZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzIiwiZ3JvdW5kZWRUZXJtcyIsImdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGgiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGgiLCJkZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwicHJldmlvdXNEZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwiZ3JvdW5kZWRUZXJtc0Zyb21Hcm91bmRlZEVxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMiLCJkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkVGVybXMiLCJFTVBUWV9TVFJJTkciLCJuYW1lIiwiZ3JvdW5kZWRUZXJtIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbVRlcm0iLCJ2YXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1Rlcm1WYXJpYWJsZSIsImluY2x1ZGVzIiwiZGVmaW5lZFZhcmlhYmxlIiwiZ3JvdW5kZWRFcXVpdmFsZW5jZSIsImdldEdyb3VuZGVkVGVybXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dDQVR3QjsyQkFDTzswQkFFUjsyQkFDTTs2QkFDSztBQUVsQyxNQUFNLEVBQUVBLElBQUksRUFBRUMsUUFBUSxFQUFFLEdBQUdDLHlCQUFjO01BRXpDLFdBQWVD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