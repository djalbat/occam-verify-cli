"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ProcedureReferenceNode;
    }
});
const _occamlanguages = require("occam-languages");
class ProcedureReferenceNode extends _occamlanguages.NonTerminalNode {
    getName() {
        let name;
        this.someChildNode((childNode)=>{
            const childNodeTerminalNode = childNode.isTerminalNode();
            if (childNodeTerminalNode) {
                const terminalNode = childNode, content = terminalNode.getContent();
                name = content; ///
                return true;
            }
        });
        return name;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureReferenceNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Byb2NlZHVyZVJlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9jZWR1cmVSZWZlcmVuY2VOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0TmFtZSgpIHtcbiAgICBsZXQgbmFtZTtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgICBuYW1lID0gY29udGVudDsgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiUHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5hbWUiLCJuYW1lIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztnQ0FGVztBQUVqQixNQUFNQSwrQkFBK0JDLCtCQUFlO0lBQ2pFQyxVQUFVO1FBQ1IsSUFBSUM7UUFFSixJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDQztZQUNsQixNQUFNQyx3QkFBd0JELFVBQVVFLGNBQWM7WUFFdEQsSUFBSUQsdUJBQXVCO2dCQUN6QixNQUFNRSxlQUFlSCxXQUNmSSxVQUFVRCxhQUFhRSxVQUFVO2dCQUV2Q1AsT0FBT00sU0FBUyxHQUFHO2dCQUVuQixPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU9OO0lBQ1Q7SUFFQSxPQUFPUSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9kLCtCQUFlLENBQUNVLDBDQUEwQyxDQUFDWCx3QkFBd0JZLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDdk8ifQ==