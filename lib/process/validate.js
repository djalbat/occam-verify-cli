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
                (0, _context.descend)((context)=>{
                    let statement;
                    statement = (0, _element.statementFromStatementNode)(statementNode, context);
                    const stated = true; ///
                    statement = statement.validate(stated, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZhbGlkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTaW1wbGVQYXNzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IHRlcm1Gcm9tVGVybU5vZGUsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQge2Rlc2NlbmR9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIENvbWJpbmF0b3JQYXNzIGV4dGVuZHMgU2ltcGxlUGFzcyB7XG4gIHJ1bihzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgbGV0IHN0YXRlbWVudDtcblxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBydW46ICh0eXBlTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbnN0cnVjdG9yUGFzcyBleHRlbmRzIFNpbXBsZVBhc3Mge1xuICBydW4odGVybU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46ICh0ZXJtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB0ZXJtO1xuXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHR5cGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgY29tYmluYXRvclBhc3MgPSBuZXcgQ29tYmluYXRvclBhc3MoKSxcbiAgICAgIGNvbnN0cnVjdG9yUGFzcyA9IG5ldyBDb25zdHJ1Y3RvclBhc3MoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVGVybUFzQ29uc3RydWN0b3IodGVybSwgY29udGV4dCkge1xuICBsZXQgdGVybVZhbGlkYXRlc0FzQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gY29uc3RydWN0b3JQYXNzLnJ1bih0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICB0ZXJtVmFsaWRhdGVzQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybVZhbGlkYXRlc0FzQ29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVN0YXRlbWVudEFzQ29tYmluYXRvcihzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZhbGlkYXRlc0FzQ29tYmluYXRvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gY29tYmluYXRvclBhc3MucnVuKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VmFsaWRhdGVzQXNDb21iaW5hdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXNBc0NvbWJpbmF0b3I7XG59XG4iXSwibmFtZXMiOlsidmFsaWRhdGVTdGF0ZW1lbnRBc0NvbWJpbmF0b3IiLCJ2YWxpZGF0ZVRlcm1Bc0NvbnN0cnVjdG9yIiwibm9kZVF1ZXJ5IiwicXVlcnlVdGlsaXRpZXMiLCJ0ZXJtTm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIkNvbWJpbmF0b3JQYXNzIiwiU2ltcGxlUGFzcyIsInJ1biIsInN0YXRlbWVudE5vZGUiLCJjb250ZXh0Iiwic3VjY2VzcyIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwiZGVzY2VuZCIsIm1hcHMiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlZCIsInZhbGlkYXRlIiwidGVybU5vZGUiLCJ0ZXJtIiwidGVybUZyb21UZXJtTm9kZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwidHlwZU5vZGUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsIkNvbnN0cnVjdG9yUGFzcyIsImNvbWJpbmF0b3JQYXNzIiwiY29uc3RydWN0b3JQYXNzIiwidGVybVZhbGlkYXRlc0FzQ29uc3RydWN0b3IiLCJnZXROb2RlIiwic3RhdGVtZW50VmFsaWRhdGVzQXNDb21iaW5hdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFvS2dCQTtlQUFBQTs7UUFiQUM7ZUFBQUE7OztnQ0FySlc7eUJBR2tDO3lCQUN2QztBQUV0QixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyw4QkFBYztBQUVwQyxNQUFNQyxnQkFBZ0JGLFVBQVUsVUFDMUJHLGdCQUFnQkgsVUFBVSxVQUMxQkkscUJBQXFCSixVQUFVO0FBRXJDLE1BQU1LLHVCQUF1QkMsMEJBQVU7SUFDckNDLElBQUlDLGFBQWEsRUFBRUMsT0FBTyxFQUFFO1FBQzFCLElBQUlDLFVBQVU7UUFFZCxNQUFNQyxrQkFBa0JILGVBQ2xCSSxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLFlBQVksSUFBSSxDQUFDQyxPQUFPLENBQUNILFlBQVlIO1FBRTNDLElBQUlLLFdBQVc7WUFDYkosVUFBVTtRQUNaO1FBRUEsT0FBT0E7SUFDVDtJQUVBLE9BQU9NLE9BQU87UUFDWjtZQUNFaEIsV0FBV0k7WUFDWEcsS0FBSyxDQUFDQyxlQUFlQztnQkFDbkIsSUFBSUMsVUFBVTtnQkFFZEssSUFBQUEsZ0JBQU8sRUFBQyxDQUFDTjtvQkFDUCxJQUFJUTtvQkFFSkEsWUFBWUMsSUFBQUEsbUNBQTBCLEVBQUNWLGVBQWVDO29CQUV0RCxNQUFNVSxTQUFTLE1BQU8sR0FBRztvQkFF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