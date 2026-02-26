"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get validateStatement () {
        return validateStatement;
    },
    get validateTerm () {
        return validateTerm;
    }
});
const _occamlanguages = require("occam-languages");
const _element = require("../utilities/element");
const { nodeQuery } = _occamlanguages.queryUtilities;
const termNodeQuery = nodeQuery("/term"), typeNodeQuery = nodeQuery("/type"), statementNodeQuery = nodeQuery("/statement");
class TermPass extends _occamlanguages.ForwardPass {
    run(statementNode, context) {
        let success = false;
        const nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), descended = this.descend(childNodes, context);
        if (descended) {
            success = true;
        }
        return success;
    }
    static maps = [
        {
            nodeQuery: termNodeQuery,
            run: (termNode, context, validateForwards)=>{
                let success = false;
                let term;
                term = (0, _element.termFromTermNode)(termNode, context);
                term = term.validate(context, validateForwards); ///
                if (term !== null) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: typeNodeQuery,
            run: (typeNode, context, validateForwards)=>{
                let success = false;
                const nominalTypeName = typeNode.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                if (typePresent) {
                    const validatesForwards = validateForwards();
                    if (validatesForwards) {
                        success = true;
                    }
                } else {
                    const typeString = nominalTypeName; ///
                    context.debug(`The '${typeString}' type is not present.`);
                    success = false;
                }
                return success;
            }
        }
    ];
}
class StatementPass extends _occamlanguages.SimplePass {
    run(statementNode, context) {
        let success = false;
        const nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), descended = this.descend(childNodes, context);
        if (descended) {
            success = true;
        }
        return success;
    }
    static maps = [
        {
            nodeQuery: statementNodeQuery,
            run: (statementNode, context)=>{
                let success = false;
                let statement;
                const stated = true;
                statement = (0, _element.statementFromStatementNode)(statementNode, context);
                statement = statement.validate(stated, context); ///
                if (statement !== null) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: termNodeQuery,
            run: (termNode, context)=>{
                let success = false;
                let term;
                term = (0, _element.termFromTermNode)(termNode, context);
                term = term.validate(context, ()=>{
                    const validatesForwards = true;
                    return validatesForwards;
                });
                if (term !== null) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: typeNodeQuery,
            run: (typeNode, context)=>{
                let success = false;
                const nominalTypeName = typeNode.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                if (typePresent) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
const termPass = new TermPass(), statementPass = new StatementPass();
function validateTerm(termNode, context, validateForwards) {
    let termValidates = false;
    const node = termNode, sucess = termPass.run(node, context, validateForwards);
    if (sucess) {
        termValidates = true;
    }
    return termValidates;
}
function validateStatement(statementNode, context) {
    let statementValidates = false;
    const node = statementNode, sucess = statementPass.run(node, context);
    if (sucess) {
        statementValidates = true;
    }
    return statementValidates;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZhbGlkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IFNpbXBsZVBhc3MsIEZvcndhcmRQYXNzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1Ob2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFRlcm1QYXNzIGV4dGVuZHMgRm9yd2FyZFBhc3Mge1xuICBydW4oc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcyk7ICAvLy9cblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBydW46ICh0eXBlTm9kZSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB2YWxpZGF0ZUZvcndhcmRzKCk7XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZHMpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gbm9taW5hbFR5cGVOYW1lOyAvLy9cblxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgU3RhdGVtZW50UGFzcyBleHRlbmRzIFNpbXBsZVBhc3Mge1xuICBydW4oc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHN0YXRlbWVudDtcblxuICAgICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlO1xuXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46ICh0ZXJtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB0ZXJtO1xuXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0ZXJtUGFzcyA9IG5ldyBUZXJtUGFzcygpLFxuICAgICAgc3RhdGVtZW50UGFzcyA9IG5ldyBTdGF0ZW1lbnRQYXNzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVRlcm0odGVybU5vZGUsIGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpIHtcbiAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICBzdWNlc3MgPSB0ZXJtUGFzcy5ydW4obm9kZSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcyk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN1Y2VzcyA9IHN0YXRlbWVudFBhc3MucnVuKG5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChzdWNlc3MpIHtcbiAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbn1cbiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZVN0YXRlbWVudCIsInZhbGlkYXRlVGVybSIsIm5vZGVRdWVyeSIsInF1ZXJ5VXRpbGl0aWVzIiwidGVybU5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJUZXJtUGFzcyIsIkZvcndhcmRQYXNzIiwicnVuIiwic3RhdGVtZW50Tm9kZSIsImNvbnRleHQiLCJzdWNjZXNzIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJkZXNjZW5kIiwibWFwcyIsInRlcm1Ob2RlIiwidmFsaWRhdGVGb3J3YXJkcyIsInRlcm0iLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidmFsaWRhdGUiLCJ0eXBlTm9kZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0eXBlU3RyaW5nIiwiZGVidWciLCJTdGF0ZW1lbnRQYXNzIiwiU2ltcGxlUGFzcyIsInN0YXRlbWVudCIsInN0YXRlZCIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwidGVybVBhc3MiLCJzdGF0ZW1lbnRQYXNzIiwidGVybVZhbGlkYXRlcyIsIm5vZGUiLCJzdWNlc3MiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXVLZ0JBO2VBQUFBOztRQWJBQztlQUFBQTs7O2dDQXhKZTt5QkFHOEI7QUFFN0QsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsOEJBQWM7QUFFcEMsTUFBTUMsZ0JBQWdCRixVQUFVLFVBQzFCRyxnQkFBZ0JILFVBQVUsVUFDMUJJLHFCQUFxQkosVUFBVTtBQUVyQyxNQUFNSyxpQkFBaUJDLDJCQUFXO0lBQ2hDQyxJQUFJQyxhQUFhLEVBQUVDLE9BQU8sRUFBRTtRQUMxQixJQUFJQyxVQUFVO1FBRWQsTUFBTUMsa0JBQWtCSCxlQUNsQkksYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxZQUFZLElBQUksQ0FBQ0MsT0FBTyxDQUFDSCxZQUFZSDtRQUUzQyxJQUFJSyxXQUFXO1lBQ2JKLFVBQVU7UUFDWjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPTSxPQUFPO1FBQ1o7WUFDRWhCLFdBQVdFO1lBQ1hLLEtBQUssQ0FBQ1UsVUFBVVIsU0FBU1M7Z0JBQ3ZCLElBQUlSLFVBQVU7Z0JBRWQsSUFBSVM7Z0JBRUpBLE9BQU9DLElBQUFBLHlCQUFnQixFQUFDSCxVQUFVUjtnQkFFbENVLE9BQU9BLEtBQUtFLFFBQVEsQ0FBQ1osU0FBU1MsbUJBQW9CLEdBQUc7Z0JBRXJELElB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