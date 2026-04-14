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
const _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("../topLevelAssertion"));
const _elements = require("../../elements");
const _supposition = /*#__PURE__*/ _interop_require_default(require("../proofAssertion/supposition"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class Axiom extends _topLevelAssertion.default {
    getAxiomNode() {
        const node = this.getNode(), axiomNode = node; ///
        return axiomNode;
    }
    isSatisfiable() {
        const signature = this.getSignature(), satisfiable = signature !== null;
        return satisfiable;
    }
    async verify(context) {
        let verifies;
        await this.break(context);
        const axiomString = this.getString(); ///
        context.trace(`Verifying the '${axiomString}' axiom...`);
        const signatureVerifies = this.verifySignature(context);
        if (signatureVerifies) {
            verifies = await super.verify(context);
        }
        if (verifies) {
            const axiom = this; ///
            context.addAxiom(axiom);
            context.debug(`...verified the '${axiomString}' axiom.`);
        }
        return verifies;
    }
    verifySignature(context) {
        let signatureVerifies;
        const satisfiable = this.isSatisfiable();
        if (satisfiable) {
            const axiomString = this.getString(); ///
            context.trace(`Verifying the '${axiomString}' axiom's signature...`);
            const signature = this.getSignature();
            signatureVerifies = signature.verify(context);
            if (signatureVerifies) {
                context.trace(`...verified the '${axiomString}' axiom's signature.`);
            }
        } else {
            signatureVerifies = true;
        }
        return signatureVerifies;
    }
    unifySignature(signature, context) {
        let signatureUnifies;
        const axiomString = this.getString(), signatureString = signature.getString();
        context.trace(`Unifying the '${signatureString}' signature with the '${axiomString}' axiom...`);
        const specificSignature = signature; ///
        signature = this.getSignature();
        const generalSignature = signature, specificContext = context, generalContext = null;
        signatureUnifies = generalSignature.unifySignature(specificSignature, generalContext, specificContext);
        if (signatureUnifies) {
            context.debug(`...unified the '${signatureString}' signature with the '${axiomString}' axiom.`);
        }
        return signatureUnifies;
    }
    async unifyDeduction(deduction, context) {
        let deductionUnifies;
        await this.break(context);
        const asiomString = this.getString(), deductionString = deduction.getString();
        context.trace(`Unifying the '${deductionString}' deduction with the '${asiomString}' axiom's deduction...`);
        deductionUnifies = this.deduction.unifyDeduction(deduction, context);
        if (deductionUnifies) {
            context.debug(`...unified the '${deductionString}' deduction with the '${asiomString}' axiom's deduction.`);
        }
        return deductionUnifies;
    }
    async unifyTopLevelAssertion(topLevelAssertion, context) {
        let topLevelAssertionUnifies = false;
        const deduction = topLevelAssertion.getDeduction(), deductionUnifies = await this.unifyDeduction(deduction, context);
        if (deductionUnifies) {
            const suppositions = topLevelAssertion.getSuppositions(), suppositionsUnify = await this.unifySuppositions(suppositions, context);
            if (suppositionsUnify) {
                topLevelAssertionUnifies = true;
            }
        }
        return topLevelAssertionUnifies;
    }
    static name = "Axiom";
    static fromJSON(json, context) {
        return _topLevelAssertion.default.fromJSON(Axiom, json, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4uL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHN1cHBvc2l0aW9uIGZyb20gXCIuLi9wcm9vZkFzc2VydGlvbi9zdXBwb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXhpb20gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGdldEF4aW9tTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXhpb21Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gYXhpb21Ob2RlO1xuICB9XG5cbiAgaXNTYXRpc2ZpYWJsZSgpIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpLFxuICAgICAgICAgIHNhdGlzZmlhYmxlID0gKHNpZ25hdHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWFibGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U2lnbmF0dXJlKGNvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICB2ZXJpZmllcyA9IGF3YWl0IHN1cGVyLnZlcmlmeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGF4aW9tID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkQXhpb20oYXhpb20pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTaWduYXR1cmUoY29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmVWZXJpZmllcztcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSdzIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpO1xuXG4gICAgICBzaWduYXR1cmVWZXJpZmllcyA9IHNpZ25hdHVyZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmIChzaWduYXR1cmVWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSdzIHNpZ25hdHVyZS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2lnbmF0dXJlVmVyaWZpZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTaWduYXR1cmUoc2lnbmF0dXJlLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVVuaWZpZXM7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNpZ25hdHVyZVN0cmluZyA9IHNpZ25hdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTaWduYXR1cmUgPSBzaWduYXR1cmU7ICAvLy9cblxuICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU2lnbmF0dXJlID0gc2lnbmF0dXJlLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBudWxsO1xuXG4gICAgc2lnbmF0dXJlVW5pZmllcyA9IGdlbmVyYWxTaWduYXR1cmUudW5pZnlTaWduYXR1cmUoc3BlY2lmaWNTaWduYXR1cmUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVVbmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXM7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgYXNpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy8sXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHthc2lvbVN0cmluZ30nIGF4aW9tJ3MgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdGhpcy5kZWR1Y3Rpb24udW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBjb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7YXNpb21TdHJpbmd9JyBheGlvbSdzIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5VG9wTGV2ZWxBc3NlcnRpb24odG9wTGV2ZWxBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb24gPSB0b3BMZXZlbEFzc2VydGlvbi5nZXREZWR1Y3Rpb24oKSxcbiAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gYXdhaXQgdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHRvcExldmVsQXNzZXJ0aW9uLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSBhd2FpdCB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmeSkge1xuICAgICAgICB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXhpb21cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbUpTT04oQXhpb20sIGpzb24sIGNvbnRleHQpOyB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBeGlvbSIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZ2V0QXhpb21Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJheGlvbU5vZGUiLCJpc1NhdGlzZmlhYmxlIiwic2lnbmF0dXJlIiwiZ2V0U2lnbmF0dXJlIiwic2F0aXNmaWFibGUiLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJicmVhayIsImF4aW9tU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJzaWduYXR1cmVWZXJpZmllcyIsInZlcmlmeVNpZ25hdHVyZSIsImF4aW9tIiwiYWRkQXhpb20iLCJkZWJ1ZyIsInVuaWZ5U2lnbmF0dXJlIiwic2lnbmF0dXJlVW5pZmllcyIsInNpZ25hdHVyZVN0cmluZyIsInNwZWNpZmljU2lnbmF0dXJlIiwiZ2VuZXJhbFNpZ25hdHVyZSIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJkZWR1Y3Rpb25VbmlmaWVzIiwiYXNpb21TdHJpbmciLCJkZWR1Y3Rpb25TdHJpbmciLCJ1bmlmeVRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMiLCJnZXREZWR1Y3Rpb24iLCJzdXBwb3NpdGlvbnMiLCJnZXRTdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnNVbmlmeSIsInVuaWZ5U3VwcG9zaXRpb25zIiwibmFtZSIsImZyb21KU09OIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFB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