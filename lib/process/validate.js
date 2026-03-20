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
    get validateStatementAsCombinator () {
        return validateStatementAsCombinator;
    },
    get validateTermAsConstructor () {
        return validateTermAsConstructor;
    }
});
const _occamlanguages = require("occam-languages");
const _element = require("../utilities/element");
const _context = require("../utilities/context");
const { nodeQuery } = _occamlanguages.queryUtilities;
const termNodeQuery = nodeQuery("/term"), typeNodeQuery = nodeQuery("/type"), statementNodeQuery = nodeQuery("/statement");
class CombinatorPass extends _occamlanguages.SimplePass {
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
                (0, _context.descend)((stated, context)=>{
                    let statement;
                    statement = (0, _element.statementFromStatementNode)(statementNode, context);
                    statement = statement.validate(stated, context); ///
                    if (statement !== null) {
                        success = true;
                    }
                }, context);
                return success;
            }
        },
        {
            nodeQuery: termNodeQuery,
            run: (termNode, context)=>{
                let success = false;
                let term;
                term = (0, _element.termFromTermNode)(termNode, context);
                term = term.validate(context, (term)=>{
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
                term = term.validate(context, (term)=>{
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
const combinatorPass = new CombinatorPass(), constructorPass = new ConstructorPass();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZhbGlkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTaW1wbGVQYXNzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IHRlcm1Gcm9tVGVybU5vZGUsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQge2Rlc2NlbmR9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIENvbWJpbmF0b3JQYXNzIGV4dGVuZHMgU2ltcGxlUGFzcyB7XG4gIHJ1bihzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBkZXNjZW5kKChzdGF0ZWQsIGNvbnRleHQpID0+IHtcbiAgICAgICAgICBsZXQgc3RhdGVtZW50O1xuXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHRlcm07XG5cbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm0gPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb25zdHJ1Y3RvclBhc3MgZXh0ZW5kcyBTaW1wbGVQYXNzIHtcbiAgcnVuKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBydW46ICh0eXBlTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IGNvbWJpbmF0b3JQYXNzID0gbmV3IENvbWJpbmF0b3JQYXNzKCksXG4gICAgICBjb25zdHJ1Y3RvclBhc3MgPSBuZXcgQ29uc3RydWN0b3JQYXNzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVRlcm1Bc0NvbnN0cnVjdG9yKHRlcm0sIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1WYWxpZGF0ZXNBc0NvbnN0cnVjdG9yID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgc3VjY2VzcyA9IGNvbnN0cnVjdG9yUGFzcy5ydW4odGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgdGVybVZhbGlkYXRlc0FzQ29uc3RydWN0b3IgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WYWxpZGF0ZXNBc0NvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTdGF0ZW1lbnRBc0NvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXNBc0NvbWJpbmF0b3IgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3VjY2VzcyA9IGNvbWJpbmF0b3JQYXNzLnJ1bihzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN0YXRlbWVudFZhbGlkYXRlc0FzQ29tYmluYXRvciA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzQXNDb21iaW5hdG9yO1xufVxuIl0sIm5hbWVzIjpbInZhbGlkYXRlU3RhdGVtZW50QXNDb21iaW5hdG9yIiwidmFsaWRhdGVUZXJtQXNDb25zdHJ1Y3RvciIsIm5vZGVRdWVyeSIsInF1ZXJ5VXRpbGl0aWVzIiwidGVybU5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJDb21iaW5hdG9yUGFzcyIsIlNpbXBsZVBhc3MiLCJydW4iLCJzdGF0ZW1lbnROb2RlIiwiY29udGV4dCIsInN1Y2Nlc3MiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImRlc2NlbmQiLCJtYXBzIiwic3RhdGVkIiwic3RhdGVtZW50Iiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJ2YWxpZGF0ZSIsInRlcm1Ob2RlIiwidGVybSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInR5cGVOb2RlIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJDb25zdHJ1Y3RvclBhc3MiLCJjb21iaW5hdG9yUGFzcyIsImNvbnN0cnVjdG9yUGFzcyIsInRlcm1WYWxpZGF0ZXNBc0NvbnN0cnVjdG9yIiwiZ2V0Tm9kZSIsInN0YXRlbWVudFZhbGlkYXRlc0FzQ29tYmluYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBa0tnQkE7ZUFBQUE7O1FBYkFDO2VBQUFBOzs7Z0NBbkpXO3lCQUdrQzt5QkFDdkM7QUFFdEIsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsOEJBQWM7QUFFcEMsTUFBTUMsZ0JBQWdCRixVQUFVLFVBQzFCRyxnQkFBZ0JILFVBQVUsVUFDMUJJLHFCQUFxQkosVUFBVTtBQUVyQyxNQUFNSyx1QkFBdUJDLDBCQUFVO0lBQ3JDQyxJQUFJQyxhQUFhLEVBQUVDLE9BQU8sRUFBRTtRQUMxQixJQUFJQyxVQUFVO1FBRWQsTUFBTUMsa0JBQWtCSCxlQUNsQkksYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxZQUFZLElBQUksQ0FBQ0MsT0FBTyxDQUFDSCxZQUFZSDtRQUUzQyxJQUFJSyxXQUFXO1lBQ2JKLFVBQVU7UUFDWjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPTSxPQUFPO1FBQ1o7WUFDRWhCLFdBQVdJO1lBQ1hHLEtBQUssQ0FBQ0MsZUFBZUM7Z0JBQ25CLElBQUlDLFVBQVU7Z0JBRWRLLElBQUFBLGdCQUFPLEVBQUMsQ0FBQ0UsUUFBUVI7b0JBQ2YsSUFBSVM7b0JBRUpBLFlBQVlDLElBQUFBLG1DQUEwQixFQUFDWCxlQUFlQztvQkFFdERTLFlBQVlBLFVBQVVFLFFBQVEsQ0FBQ0gsUUFBUVIsVUFBVyxHQUFHO29CQUVy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