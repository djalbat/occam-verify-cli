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
        termUnifies = super.unifyTerm(term, context, ()=>{
            let validatesForwards = false;
            const bracketedTerm = term, bracketedTermNode = bracketedTerm.getNode(), singularTermNode = bracketedTermNode.getSingularTermNode();
            if (singularTermNode !== null) {
                const termNode = singularTermNode; ///
                term = (0, _element.termFromTermNode)(termNode, context);
                term = term.validate(context, ()=>{
                    let validatesForwards;
                    const type = term.getType();
                    bracketedTerm.setType(type);
                    validatesForwards = validateForwards();
                    return validatesForwards;
                });
                if (term !== null) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEJyYWNrZXRlZENvbnN0cnVjdG9yIGV4dGVuZHMgQ29uc3RydWN0b3Ige1xuICBnZXRCcmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBicmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGU7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykge1xuICAgIGxldCB0ZXJtVW5pZmllcztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgdGVybVVuaWZpZXMgPSBzdXBlci51bmlmeVRlcm0odGVybSwgY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGJyYWNrZXRlZFRlcm0gPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgIGJyYWNrZXRlZFRlcm1Ob2RlID0gYnJhY2tldGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICBzaW5ndWxhclRlcm1Ob2RlID0gYnJhY2tldGVkVGVybU5vZGUuZ2V0U2luZ3VsYXJUZXJtTm9kZSgpO1xuXG4gICAgICBpZiAoc2luZ3VsYXJUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNpbmd1bGFyVGVybU5vZGU7ICAvLy9cblxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcztcblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgICAgIGJyYWNrZXRlZFRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdmFsaWRhdGVGb3J3YXJkcygpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQnJhY2tldGVkQ29uc3RydWN0b3JcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkJyYWNrZXRlZENvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiLCJnZXRCcmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImJyYWNrZXRlZENvbnN0cnVjdG9yTm9kZSIsInVuaWZ5VGVybSIsInRlcm0iLCJjb250ZXh0IiwidmFsaWRhdGVGb3J3YXJkcyIsInRlcm1VbmlmaWVzIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJicmFja2V0ZWRUZXJtIiwiYnJhY2tldGVkVGVybU5vZGUiLCJzaW5ndWxhclRlcm1Ob2RlIiwiZ2V0U2luZ3VsYXJUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybUZyb21UZXJtTm9kZSIsInZhbGlkYXRlIiwidHlwZSIsImdldFR5cGUiLCJzZXRUeXBlIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztvRUFMd0I7MEJBRUQ7eUJBQ1U7Ozs7OztNQUVqQyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDZCQUE2QkMsb0JBQVc7SUFDbEVDLDhCQUE4QjtRQUM1QixNQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsMkJBQTJCRixNQUFPLEdBQUc7UUFFM0MsT0FBT0U7SUFDVDtJQUVBQyxVQUFVQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsZ0JBQWdCLEVBQUU7UUFDekMsSUFBSUM7UUFFSixNQUFNQyxhQUFhSixLQUFLSyxTQUFTO1FBRWpDSixRQUFRSyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVGLFdBQVcsd0NBQXdDLENBQUM7UUFFbkZELGNBQWMsS0FBSyxDQUFDSixVQUFVQyxNQUFNQyxTQUFTO1lBQzNDLElBQUlNLG9CQUFvQjtZQUV4QixNQUFNQyxnQkFBZ0JSLE1BQ2hCUyxvQkFBb0JELGNBQWNYLE9BQU8sSUFDekNhLG1CQUFtQkQsa0JBQWtCRSxtQkFBbUI7WUFFOUQsSUFBSUQscUJBQXFCLE1BQU07Z0JBQzdCLE1BQU1FLFdBQVdGLGtCQUFtQixHQUFHO2dCQUV2Q1YsT0FBT2EsSUFBQUEseUJBQWdCLEVBQUNELFVBQVVYO2dCQUVsQ0QsT0FBT0EsS0FBS2MsUUFBUSxDQUFDYixTQUFTO29CQUM1QixJQUFJTTtvQkFFSixNQUFNUSxPQUFPZixLQUFLZ0IsT0FBTztvQkFFekJSLGNBQWNTLE9BQU8sQ0FBQ0Y7b0JBRXRCUixvQkFBb0JMO29CQUVwQixPQUFPSztnQkFDVDtnQkFFQSxJQUFJUCxTQUFTLE1BQU07b0JBQ2pCTyxvQkFBb0I7Z0JBQ3RCO1lBQ0Y7WUFFQSxPQUFPQTtRQUNUO1FBRUEsSUFBSUosYUFBYTtZQUNmRixRQUFRaUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVkLFdBQVcsc0NBQXNDLENBQUM7UUFDckY7UUFFQSxPQUFPRDtJQUNUO0lBRUEsT0FBT2dCLE9BQU8sdUJBQXVCO0FBQ3ZDIn0=