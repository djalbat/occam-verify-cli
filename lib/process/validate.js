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
    get validateStatementAsCombinator () {
        return validateStatementAsCombinator;
    },
    get validateTerm () {
        return validateTerm;
    },
    get validateTermAsConstructor () {
        return validateTermAsConstructor;
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
class ConbinatorPass extends _occamlanguages.SimplePass {
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
                statement = statement.validate(stated, context);
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
class ConstructorPass extends _occamlanguages.SimplePass {
    run(termNode, context) {
        let success = false;
        const nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), descended = this.descend(childNodes, context);
        if (descended) {
            success = true;
        }
        return success;
    }
    static maps = [
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
const termPass = new TermPass(), statementPass = new StatementPass(), combinatorPass = new ConbinatorPass(), constructorPass = new ConstructorPass();
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
function validateTermAsConstructor(term, context) {
    let termValidatesAsConstructor = false;
    const termNode = term.getNode(), success = constructorPass.run(termNode, context);
    if (success) {
        termValidatesAsConstructor = true;
    }
    return termValidatesAsConstructor;
}
function validateStatementAsCombinator(statement, context) {
    let statementValidatesAsCombinator = false;
    const statementNode = statement.getNode(), success = combinatorPass.run(statementNode, context);
    if (success) {
        statementValidatesAsCombinator = true;
    }
    return statementValidatesAsCombinator;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZhbGlkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IFNpbXBsZVBhc3MsIEZvcndhcmRQYXNzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1Ob2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFRlcm1QYXNzIGV4dGVuZHMgRm9yd2FyZFBhc3Mge1xuICBydW4oc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcyk7ICAvLy9cblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBydW46ICh0eXBlTm9kZSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB2YWxpZGF0ZUZvcndhcmRzKCk7XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZHMpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gbm9taW5hbFR5cGVOYW1lOyAvLy9cblxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgU3RhdGVtZW50UGFzcyBleHRlbmRzIFNpbXBsZVBhc3Mge1xuICBydW4oc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHN0YXRlbWVudDtcblxuICAgICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlO1xuXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46ICh0ZXJtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB0ZXJtO1xuXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb25iaW5hdG9yUGFzcyBleHRlbmRzIFNpbXBsZVBhc3Mge1xuICBydW4oc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHN0YXRlbWVudDtcblxuICAgICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlO1xuXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHR5cGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29uc3RydWN0b3JQYXNzIGV4dGVuZHMgU2ltcGxlUGFzcyB7XG4gIHJ1bih0ZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICBkZXNjZW5kZWQgPSB0aGlzLmRlc2NlbmQoY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICBpZiAoZGVzY2VuZGVkKSB7XG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHRlcm07XG5cbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm0gPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBydW46ICh0eXBlTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRlcm1QYXNzID0gbmV3IFRlcm1QYXNzKCksXG4gICAgICBzdGF0ZW1lbnRQYXNzID0gbmV3IFN0YXRlbWVudFBhc3MoKSxcbiAgICAgIGNvbWJpbmF0b3JQYXNzID0gbmV3IENvbmJpbmF0b3JQYXNzKCksXG4gICAgICBjb25zdHJ1Y3RvclBhc3MgPSBuZXcgQ29uc3RydWN0b3JQYXNzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVRlcm0odGVybU5vZGUsIGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpIHtcbiAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICBzdWNlc3MgPSB0ZXJtUGFzcy5ydW4obm9kZSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcyk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN1Y2VzcyA9IHN0YXRlbWVudFBhc3MucnVuKG5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChzdWNlc3MpIHtcbiAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVGVybUFzQ29uc3RydWN0b3IodGVybSwgY29udGV4dCkge1xuICBsZXQgdGVybVZhbGlkYXRlc0FzQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gY29uc3RydWN0b3JQYXNzLnJ1bih0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICB0ZXJtVmFsaWRhdGVzQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybVZhbGlkYXRlc0FzQ29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVN0YXRlbWVudEFzQ29tYmluYXRvcihzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZhbGlkYXRlc0FzQ29tYmluYXRvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gY29tYmluYXRvclBhc3MucnVuKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VmFsaWRhdGVzQXNDb21iaW5hdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXNBc0NvbWJpbmF0b3I7XG59XG4iXSwibmFtZXMiOlsidmFsaWRhdGVTdGF0ZW1lbnQiLCJ2YWxpZGF0ZVN0YXRlbWVudEFzQ29tYmluYXRvciIsInZhbGlkYXRlVGVybSIsInZhbGlkYXRlVGVybUFzQ29uc3RydWN0b3IiLCJub2RlUXVlcnkiLCJxdWVyeVV0aWxpdGllcyIsInRlcm1Ob2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiVGVybVBhc3MiLCJGb3J3YXJkUGFzcyIsInJ1biIsInN0YXRlbWVudE5vZGUiLCJjb250ZXh0Iiwic3VjY2VzcyIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwiZGVzY2VuZCIsIm1hcHMiLCJ0ZXJtTm9kZSIsInZhbGlkYXRlRm9yd2FyZHMiLCJ0ZXJtIiwidGVybUZyb21UZXJtTm9kZSIsInZhbGlkYXRlIiwidHlwZU5vZGUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwidHlwZVN0cmluZyIsImRlYnVnIiwiU3RhdGVtZW50UGFzcyIsIlNpbXBsZVBhc3MiLCJzdGF0ZW1lbnQiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsIkNvbmJpbmF0b3JQYXNzIiwiQ29uc3RydWN0b3JQYXNzIiwidGVybVBhc3MiLCJzdGF0ZW1lbnRQYXNzIiwiY29tYmluYXRvclBhc3MiLCJjb25zdHJ1Y3RvclBhc3MiLCJ0ZXJtVmFsaWRhdGVzIiwibm9kZSIsInN1Y2VzcyIsInN0YXRlbWVudFZhbGlkYXRlcyIsInRlcm1WYWxpZGF0ZXNBc0NvbnN0cnVjdG9yIiwiZ2V0Tm9kZSIsInN0YXRlbWVudFZhbGlkYXRlc0FzQ29tYmluYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNlNnQkE7ZUFBQUE7O1FBMEJBQztlQUFBQTs7UUF2Q0FDO2VBQUFBOztRQTBCQUM7ZUFBQUE7OztnQ0F4VGU7eUJBRzhCO0FBRTdELE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdDLDhCQUFjO0FBRXBDLE1BQU1DLGdCQUFnQkYsVUFBVSxVQUMxQkcsZ0JBQWdCSCxVQUFVLFVBQzFCSSxxQkFBcUJKLFVBQVU7QUFFckMsTUFBTUssaUJBQWlCQywyQkFBVztJQUNoQ0MsSUFBSUMsYUFBYSxFQUFFQyxPQUFPLEVBQUU7UUFDMUIsSUFBSUMsVUFBVTtRQUVkLE1BQU1DLGtCQUFrQkgsZUFDbEJJLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsWUFBWSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0gsWUFBWUg7UUFFM0MsSUFBSUssV0FBVztZQUNiSixVQUFVO1FBQ1o7UUFF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