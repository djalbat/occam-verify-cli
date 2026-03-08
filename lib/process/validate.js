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
const { nodeQuery } = _occamlanguages.queryUtilities;
const termNodeQuery = nodeQuery("/term"), typeNodeQuery = nodeQuery("/type"), statementNodeQuery = nodeQuery("/statement");
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
const combinatorPass = new ConbinatorPass(), constructorPass = new ConstructorPass();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZhbGlkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTaW1wbGVQYXNzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IHRlcm1Gcm9tVGVybU5vZGUsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmNvbnN0IHsgbm9kZVF1ZXJ5IH0gPSBxdWVyeVV0aWxpdGllcztcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKTtcblxuY2xhc3MgQ29uYmluYXRvclBhc3MgZXh0ZW5kcyBTaW1wbGVQYXNzIHtcbiAgcnVuKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICBkZXNjZW5kZWQgPSB0aGlzLmRlc2NlbmQoY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICBpZiAoZGVzY2VuZGVkKSB7XG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBzdGF0ZW1lbnQ7XG5cbiAgICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZTtcblxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHRlcm07XG5cbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm0gPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBydW46ICh0eXBlTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbnN0cnVjdG9yUGFzcyBleHRlbmRzIFNpbXBsZVBhc3Mge1xuICBydW4odGVybU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46ICh0ZXJtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB0ZXJtO1xuXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBjb21iaW5hdG9yUGFzcyA9IG5ldyBDb25iaW5hdG9yUGFzcygpLFxuICAgICAgY29uc3RydWN0b3JQYXNzID0gbmV3IENvbnN0cnVjdG9yUGFzcygpO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVUZXJtQXNDb25zdHJ1Y3Rvcih0ZXJtLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtVmFsaWRhdGVzQXNDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb25zdHJ1Y3RvclBhc3MucnVuKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHRlcm1WYWxpZGF0ZXNBc0NvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmFsaWRhdGVzQXNDb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdGVtZW50QXNDb21iaW5hdG9yKHN0YXRlbWVudCwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzQXNDb21iaW5hdG9yID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb21iaW5hdG9yUGFzcy5ydW4oc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBzdGF0ZW1lbnRWYWxpZGF0ZXNBc0NvbWJpbmF0b3IgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlc0FzQ29tYmluYXRvcjtcbn1cbiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZVN0YXRlbWVudEFzQ29tYmluYXRvciIsInZhbGlkYXRlVGVybUFzQ29uc3RydWN0b3IiLCJub2RlUXVlcnkiLCJxdWVyeVV0aWxpdGllcyIsInRlcm1Ob2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiQ29uYmluYXRvclBhc3MiLCJTaW1wbGVQYXNzIiwicnVuIiwic3RhdGVtZW50Tm9kZSIsImNvbnRleHQiLCJzdWNjZXNzIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJkZXNjZW5kIiwibWFwcyIsInN0YXRlbWVudCIsInN0YXRlZCIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwidmFsaWRhdGUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0eXBlTm9kZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiQ29uc3RydWN0b3JQYXNzIiwiY29tYmluYXRvclBhc3MiLCJjb25zdHJ1Y3RvclBhc3MiLCJ0ZXJtVmFsaWRhdGVzQXNDb25zdHJ1Y3RvciIsImdldE5vZGUiLCJzdGF0ZW1lbnRWYWxpZGF0ZXNBc0NvbWJpbmF0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWlLZ0JBO2VBQUFBOztRQWJBQztlQUFBQTs7O2dDQWxKVzt5QkFHa0M7QUFFN0QsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsOEJBQWM7QUFFcEMsTUFBTUMsZ0JBQWdCRixVQUFVLFVBQzFCRyxnQkFBZ0JILFVBQVUsVUFDMUJJLHFCQUFxQkosVUFBVTtBQUVyQyxNQUFNSyx1QkFBdUJDLDBCQUFVO0lBQ3JDQyxJQUFJQyxhQUFhLEVBQUVDLE9BQU8sRUFBRTtRQUMxQixJQUFJQyxVQUFVO1FBRWQsTUFBTUMsa0JBQWtCSCxlQUNsQkksYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxZQUFZLElBQUksQ0FBQ0MsT0FBTyxDQUFDSCxZQUFZSDtRQUUzQyxJQUFJSyxXQUFXO1lBQ2JKLFVBQVU7UUFDWjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPTSxPQUFPO1FBQ1o7WUFDRWhCLFdBQVdJO1lBQ1hHLEtBQUssQ0FBQ0MsZUFBZUM7Z0JBQ25CLElBQUlDLFVBQVU7Z0JBRWQsSUFBSU87Z0JBRUosTUFBTUMsU0FBUztnQkFFZkQsWUFBWUUsSUFBQUEsbUNBQTBCLEVBQUNYLGVBQWVDO2dCQUV0RFEsWUFBWUEsVUFBVUcsUUFBUSxDQUFDRixRQUFRVDtnQkFFdkMsSUFBSVEsY0FBYyxNQUFNO29CQUN0QlAsVUFBVTtnQkFDWjtnQkFFQSxPQUFPQTtZQUNUO1FBQ0Y7UUFDQTtZQUNFVixXQUFXRTtZQUNYSyxLQUFLLENBQUNjLFVBQVVaO2dCQUNkLElBQUlDLFVBQVU7Z0JBRWQsSUFBSVk7Z0JBRUpBLE9BQU9DLElBQUFBLHlCQUFnQixFQUFDRixVQUFVWjtnQkFFbENhLE9BQU9BLEtBQUtGLFFBQVEsQ0FBQ1gsU0FBUztvQkFDNUIsTUFBTWUsb0JBQW9CO29CQUUxQixPQUFPQTtnQkFDVDtnQkFFQSxJQUFJRixTQUFTLE1BQU07b0JBQ2pCWixVQUFVO2dCQUNaO2dCQUVBLE9BQU9BO1lBQ1Q7UUFDRjtRQUNBO1lBQ0VWLFdBQVdHO1lBQ1hJLEtBQUssQ0FBQ2tCLFVBQVVoQjtnQkFDZCxJQUFJQyxVQUFVO2dCQUVkLE1BQU1nQixrQkFBa0JELFNBQVNFLGtCQUFrQixJQUM3Q0MsY0FBY25CLFFBQVFvQiw4QkFBOEIsQ0FBQ0g7Z0JBRTNELElBQUlFLGFBQWE7b0JBQ2ZsQixVQUFVO2dCQUNaO2dCQUVBLE9BQU9BO1lBQ1Q7UUFDRjtLQUNELENBQUM7QUFDSjtBQUVBLE1BQU1vQix3QkFBd0J4QiwwQkFBVTtJQUN0Q0MsSUFBSWMsUUFBUSxFQUFFWixPQUFPLEVBQUU7UUFDckIsSUFBSUMsVUFBVTtRQUVkLE1BQU1DLGtCQUFrQlUsVUFDbEJULGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsWUFBWSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0gsWUFBWUg7UUFFM0MsSUFBSUssV0FBVztZQUNiSixVQUFVO1FBQ1o7UUFFQSxPQUFPQTtJQUNUO0lBRUEsT0FBT00sT0FBTztRQUNaO1lBQ0VoQixXQUFXRTtZQUNYSyxLQUFLLENBQUNjLFVBQVVaO2dCQUNkLElBQUlDLFVBQVU7Z0JBRWQsSUFBSVk7Z0JBRUpBLE9BQU9DLElBQUFBLHlCQUFnQixFQUFDRixVQUFVWjtnQkFFbENhLE9BQU9BLEtBQUtGLFFBQVEsQ0FBQ1gsU0FBUztvQkFDNUIsTUFBTWUsb0JBQW9CO29CQUUxQixPQUFPQTtnQkFDVDtnQkFFQSxJQUFJRixTQUFTLE1BQU07b0JBQ2pCWixVQUFVO2dCQUNaO2dCQUVBLE9BQU9BO1lBQ1Q7UUFDRjtRQUNBO1lBQ0VWLFdBQVdHO1lBQ1hJLEtBQUssQ0FBQ2tCLFVBQVVoQjtnQkFDZCxJQUFJQyxVQUFVO2dCQUVkLE1BQU1nQixrQkFBa0JELFNBQVNFLGtCQUFrQixJQUM3Q0MsY0FBY25CLFFBQVFvQiw4QkFBOEIsQ0FBQ0g7Z0JBRTNELElBQUlFLGFBQWE7b0JBQ2ZsQixVQUFVO2dCQUNaO2dCQUVBLE9BQU9BO1lBQ1Q7UUFDRjtLQUNELENBQUM7QUFDSjtBQUVBLE1BQU1xQixpQkFBaUIsSUFBSTFCLGtCQUNyQjJCLGtCQUFrQixJQUFJRjtBQUVyQixTQUFTL0IsMEJBQTBCdUIsSUFBSSxFQUFFYixPQUFPO0lBQ3JELElBQUl3Qiw2QkFBNkI7SUFFakMsTUFBTVosV0FBV0MsS0FBS1ksT0FBTyxJQUN2QnhCLFVBQVVzQixnQkFBZ0J6QixHQUFHLENBQUNjLFVBQVVaO0lBRTlDLElBQUlDLFNBQVM7UUFDWHVCLDZCQUE2QjtJQUMvQjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTbkMsOEJBQThCbUIsU0FBUyxFQUFFUixPQUFPO0lBQzlELElBQUkwQixpQ0FBaUM7SUFFckMsTUFBTTNCLGdCQUFnQlMsVUFBVWlCLE9BQU8sSUFDakN4QixVQUFVcUIsZUFBZXhCLEdBQUcsQ0FBQ0MsZUFBZUM7SUFFbEQsSUFBSUMsU0FBUztRQUNYeUIsaUNBQWlDO0lBQ25DO0lBRUEsT0FBT0E7QUFDVCJ9