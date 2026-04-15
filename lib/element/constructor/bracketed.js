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
const _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
const _elements = require("../../elements");
const _element = require("../../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class BracketedConstructor extends _constructor.default {
    getBracketedConstructorNode() {
        const node = this.getNode(), bracketedConstructorNode = node; ///
        return bracketedConstructorNode;
    }
    unifyTerm(term, context, validateForwards) {
        let termUnifies;
        const termString = term.getString();
        context.trace(`Unifying the '${termString}' term with the bracketed constructor...`);
        termUnifies = super.unifyTerm(term, context, (term)=>{
            let validatesForwards = false;
            const bracketedTerm = term, bracketedTermNode = bracketedTerm.getNode(), singularTermNode = bracketedTermNode.getSingularTermNode();
            if (singularTermNode !== null) {
                const bracketlessTermNode = singularTermNode; ///
                let bracketlessTerm;
                bracketlessTerm = (0, _element.termFromTermNode)(bracketlessTermNode, context);
                bracketlessTerm = bracketlessTerm.validate(context, (bracketlessTerm)=>{
                    let validatesForwards;
                    const type = bracketlessTerm.getType(), provisional = bracketlessTerm.isProvisional();
                    bracketedTerm.setType(type);
                    bracketedTerm.setProvisional(provisional);
                    validatesForwards = validateForwards(bracketedTerm);
                    return validatesForwards;
                });
                if (bracketlessTerm !== null) {
                    validatesForwards = true;
                }
            }
            return validatesForwards;
        });
        if (termUnifies) {
            context.debug(`...unified the '${termString}' term with the bracketed constructor.`);
        }
        return termUnifies;
    }
    static name = "BracketedConstructor";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEJyYWNrZXRlZENvbnN0cnVjdG9yIGV4dGVuZHMgQ29uc3RydWN0b3Ige1xuICBnZXRCcmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBicmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGU7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykge1xuICAgIGxldCB0ZXJtVW5pZmllcztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgdGVybVVuaWZpZXMgPSBzdXBlci51bmlmeVRlcm0odGVybSwgY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBicmFja2V0ZWRUZXJtID0gdGVybSwgLy8vXG4gICAgICAgICAgICBicmFja2V0ZWRUZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc2luZ3VsYXJUZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlLmdldFNpbmd1bGFyVGVybU5vZGUoKTtcblxuICAgICAgaWYgKHNpbmd1bGFyVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYnJhY2tldGxlc3NUZXJtTm9kZSA9IHNpbmd1bGFyVGVybU5vZGU7IC8vL1xuXG4gICAgICAgIGxldCBicmFja2V0bGVzc1Rlcm07XG5cbiAgICAgICAgYnJhY2tldGxlc3NUZXJtID0gdGVybUZyb21UZXJtTm9kZShicmFja2V0bGVzc1Rlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBicmFja2V0bGVzc1Rlcm0gPSBicmFja2V0bGVzc1Rlcm0udmFsaWRhdGUoY29udGV4dCwgKGJyYWNrZXRsZXNzVGVybSkgPT4geyAgLy8vXG4gICAgICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzO1xuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IGJyYWNrZXRsZXNzVGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBicmFja2V0bGVzc1Rlcm0uaXNQcm92aXNpb25hbCgpO1xuXG4gICAgICAgICAgYnJhY2tldGVkVGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgICAgYnJhY2tldGVkVGVybS5zZXRQcm92aXNpb25hbChwcm92aXNpb25hbCk7XG5cbiAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHZhbGlkYXRlRm9yd2FyZHMoYnJhY2tldGVkVGVybSk7XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChicmFja2V0bGVzc1Rlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSBicmFja2V0ZWQgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkJyYWNrZXRlZENvbnN0cnVjdG9yXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJCcmFja2V0ZWRDb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIiwiZ2V0QnJhY2tldGVkQ29uc3RydWN0b3JOb2RlIiwibm9kZSIsImdldE5vZGUiLCJicmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGUiLCJ1bmlmeVRlcm0iLCJ0ZXJtIiwiY29udGV4dCIsInZhbGlkYXRlRm9yd2FyZHMiLCJ0ZXJtVW5pZmllcyIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwiYnJhY2tldGVkVGVybSIsImJyYWNrZXRlZFRlcm1Ob2RlIiwic2luZ3VsYXJUZXJtTm9kZSIsImdldFNpbmd1bGFyVGVybU5vZGUiLCJicmFja2V0bGVzc1Rlcm1Ob2RlIiwiYnJhY2tldGxlc3NUZXJtIiwidGVybUZyb21UZXJtTm9kZSIsInZhbGlkYXRlIiwidHlwZSIsImdldFR5cGUiLCJwcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwic2V0UHJvdmlzaW9uYWwiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O29FQUx3QjswQkFFRDt5QkFDVTs7Ozs7O01BRWpDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsNkJBQTZCQyxvQkFBVztJQUNsRUMsOEJBQThCO1FBQzVCLE1BQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQywyQkFBMkJGLE1BQU8sR0FBRztRQUUzQyxPQUFPRTtJQUNUO0lBRUFDLFVBQVVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxnQkFBZ0IsRUFBRTtRQUN6QyxJQUFJQztRQUVKLE1BQU1DLGFBQWFKLEtBQUtLLFNBQVM7UUFFakNKLFFBQVFLLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRUYsV0FBVyx3Q0FBd0MsQ0FBQztRQUVuRkQsY0FBYyxLQUFLLENBQUNKLFVBQVVDLE1BQU1DLFNBQVMsQ0FBQ0Q7WUFDNUMsSUFBSU8sb0JBQW9CO1lBRXhCLE1BQU1DLGdCQUFnQlIsTUFDaEJTLG9CQUFvQkQsY0FBY1gsT0FBTyxJQUN6Q2EsbUJBQW1CRCxrQkFBa0JFLG1CQUFtQjtZQUU5RCxJQUFJRCxxQkFBcUIsTUFBTTtnQkFDN0IsTUFBTUUsc0JBQXNCRixrQkFBa0IsR0FBRztnQkFFakQsSUFBSUc7Z0JBRUpBLGtCQUFrQkMsSUFBQUEseUJBQWdCLEVBQUNGLHFCQUFxQlg7Z0JBRXhEWSxrQkFBa0JBLGdCQUFnQkUsUUFBUSxDQUFDZCxTQUFTLENBQUNZO29CQUNuRCxJQUFJTjtvQkFFSixNQUFNUyxPQUFPSCxnQkFBZ0JJLE9BQU8sSUFDOUJDLGNBQWNMLGdCQUFnQk0sYUFBYTtvQkFFakRYLGNBQWNZLE9BQU8sQ0FBQ0o7b0JBRXRCUixjQUFjYSxjQUFjLENBQUNIO29CQUU3Qlgsb0JBQW9CTCxpQkFBaUJNO29CQUVyQyxPQUFPRDtnQkFDVDtnQkFFQSxJQUFJTSxvQkFBb0IsTUFBTTtvQkFDNUJOLG9CQUFvQjtnQkFDdEI7WUFDRjtZQUVBLE9BQU9BO1FBQ1Q7UUFFQSxJQUFJSixhQUFhO1lBQ2ZGLFFBQVFxQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRWxCLFdBQVcsc0NBQXNDLENBQUM7UUFDckY7UUFFQSxPQUFPRDtJQUNUO0lBRUEsT0FBT29CLE9BQU8sdUJBQXVCO0FBQ3ZDIn0=