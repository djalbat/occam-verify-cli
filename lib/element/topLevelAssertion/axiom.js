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
    static name = "Axiom";
    static fromJSON(json, context) {
        return _topLevelAssertion.default.fromJSON(Axiom, json, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4uL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXhpb20gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGdldEF4aW9tTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXhpb21Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gYXhpb21Ob2RlO1xuICB9XG5cbiAgaXNTYXRpc2ZpYWJsZSgpIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpLFxuICAgICAgICAgIHNhdGlzZmlhYmxlID0gKHNpZ25hdHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWFibGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U2lnbmF0dXJlKGNvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICB2ZXJpZmllcyA9IGF3YWl0IHN1cGVyLnZlcmlmeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGF4aW9tID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkQXhpb20oYXhpb20pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTaWduYXR1cmUoY29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmVWZXJpZmllcztcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSdzIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpO1xuXG4gICAgICBzaWduYXR1cmVWZXJpZmllcyA9IHNpZ25hdHVyZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmIChzaWduYXR1cmVWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSdzIHNpZ25hdHVyZS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2lnbmF0dXJlVmVyaWZpZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTaWduYXR1cmUoc2lnbmF0dXJlLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVVuaWZpZXM7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNpZ25hdHVyZVN0cmluZyA9IHNpZ25hdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTaWduYXR1cmUgPSBzaWduYXR1cmU7ICAvLy9cblxuICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU2lnbmF0dXJlID0gc2lnbmF0dXJlLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBudWxsO1xuXG4gICAgc2lnbmF0dXJlVW5pZmllcyA9IGdlbmVyYWxTaWduYXR1cmUudW5pZnlTaWduYXR1cmUoc3BlY2lmaWNTaWduYXR1cmUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVVbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkF4aW9tXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKEF4aW9tLCBqc29uLCBjb250ZXh0KTsgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXhpb20iLCJUb3BMZXZlbEFzc2VydGlvbiIsImdldEF4aW9tTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiYXhpb21Ob2RlIiwiaXNTYXRpc2ZpYWJsZSIsInNpZ25hdHVyZSIsImdldFNpZ25hdHVyZSIsInNhdGlzZmlhYmxlIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVzIiwiYnJlYWsiLCJheGlvbVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwic2lnbmF0dXJlVmVyaWZpZXMiLCJ2ZXJpZnlTaWduYXR1cmUiLCJheGlvbSIsImFkZEF4aW9tIiwiZGVidWciLCJ1bmlmeVNpZ25hdHVyZSIsInNpZ25hdHVyZVVuaWZpZXMiLCJzaWduYXR1cmVTdHJpbmciLCJzcGVjaWZpY1NpZ25hdHVyZSIsImdlbmVyYWxTaWduYXR1cmUiLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzBFQUo4QjswQkFFUDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsMEJBQWlCO0lBQ3pEQyxlQUFlO1FBQ2IsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFlBQVlGLE1BQU0sR0FBRztRQUUzQixPQUFPRTtJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCQyxjQUFlRixjQUFjO1FBRW5DLE9BQU9FO0lBQ1Q7SUFFQSxNQUFNQyxPQUFPQyxPQUFPLEVBQUU7UUFDcEIsSUFBSUM7UUFFSixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDRjtRQUVqQixNQUFNRyxjQUFjLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFekNKLFFBQVFLLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsWUFBWSxVQUFVLENBQUM7UUFFdkQsTUFBTUcsb0JBQW9CLElBQUksQ0FBQ0MsZUFBZSxDQUFDUDtRQUUvQyxJQUFJTSxtQkFBbUI7WUFDckJMLFdBQVcsTUFBTSxLQUFLLENBQUNGLE9BQU9DO1FBQ2hDO1FBRUEsSUFBSUMsVUFBVTtZQUNaLE1BQU1PLFFBQVEsSUFBSSxFQUFFLEdBQUc7WUFFdkJSLFFBQVFTLFFBQVEsQ0FBQ0Q7WUFFakJSLFFBQVFVLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFUCxZQUFZLFFBQVEsQ0FBQztRQUN6RDtRQUVBLE9BQU9GO0lBQ1Q7SUFFQU0sZ0JBQWdCUCxPQUFPLEVBQUU7UUFDdkIsSUFBSU07UUFFSixNQUFNUixjQUFjLElBQUksQ0FBQ0gsYUFBYTtRQUV0QyxJQUFJRyxhQUFhO1lBQ2YsTUFBTUssY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1lBRXpDSixRQUFRSyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLFlBQVksc0JBQXNCLENBQUM7WUFFbkUsTUFBTVAsWUFBWSxJQUFJLENBQUNDLFlBQVk7WUFFbkNTLG9CQUFvQlYsVUFBVUcsTUFBTSxDQUFDQztZQUVyQyxJQUFJTSxtQkFBbUI7Z0JBQ3JCTixRQUFRSyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRUYsWUFBWSxvQkFBb0IsQ0FBQztZQUNyRTtRQUNGLE9BQU87WUFDTEcsb0JBQW9CO1FBQ3RCO1FBRUEsT0FBT0E7SUFDVDtJQUVBSyxlQUFlZixTQUFTLEVBQUVJLE9BQU8sRUFBRTtRQUNqQyxJQUFJWTtRQUVKLE1BQU1ULGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQzVCUyxrQkFBa0JqQixVQUFVUSxTQUFTO1FBRTNDSixRQUFRSyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVRLGdCQUFnQixzQkFBc0IsRUFBRVYsWUFBWSxVQUFVLENBQUM7UUFFOUYsTUFBTVcsb0JBQW9CbEIsV0FBWSxHQUFHO1FBRXpDQSxZQUFZLElBQUksQ0FBQ0MsWUFBWTtRQUU3QixNQUFNa0IsbUJBQW1CbkIsV0FDbkJvQixrQkFBa0JoQixTQUNsQmlCLGlCQUFpQjtRQUV2QkwsbUJBQW1CRyxpQkFBaUJKLGNBQWMsQ0FBQ0csbUJBQW1CRyxnQkFBZ0JEO1FBRXRGLElBQUlKLGtCQUFrQjtZQUNwQlosUUFBUVUsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVHLGdCQUFnQixzQkFBc0IsRUFBRVYsWUFBWSxRQUFRLENBQUM7UUFDaEc7UUFFQSxPQUFPUztJQUNUO0lBRUEsT0FBT00sT0FBTyxRQUFRO0lBRXRCLE9BQU9DLFNBQVNDLElBQUksRUFBRXBCLE9BQU8sRUFBRTtRQUFFLE9BQU9WLDBCQUFpQixDQUFDNkIsUUFBUSxDQUFDOUIsT0FBTytCLE1BQU1wQjtJQUFVO0FBQzVGIn0=