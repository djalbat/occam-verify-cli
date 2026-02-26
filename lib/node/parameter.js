"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ParameterNode;
    }
});
const _occamlanguages = require("occam-languages");
const _tokenTypes = require("../tokenTypes");
class ParameterNode extends _occamlanguages.NonTerminalNode {
    getName() {
        let name = null;
        this.someChildNode((childNode, index)=>{
            const terminalNode = childNode, type = terminalNode.getType();
            if (type === _tokenTypes.NAME_TOKEN_TYPE) {
                const content = terminalNode.getContent();
                name = content; ///
            }
            if (index === 0) {
                return true;
            }
        });
        return name;
    }
    getIdentifier() {
        let identifier = null;
        this.someChildNode((childNode, index)=>{
            const terminalNode = childNode, type = terminalNode.getType();
            if (type === _tokenTypes.IDENTIFIER_TOKEN_TYPE) {
                const content = terminalNode.getContent();
                identifier = content; ///
            }
            if (index === 0) {
                return true;
            }
        });
        return identifier;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParameterNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBOQU1FX1RPS0VOX1RZUEUsIElERU5USUZJRVJfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi90b2tlblR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFtZXRlck5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXROYW1lKCkge1xuICAgIGxldCBuYW1lID0gbnVsbDtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gTkFNRV9UT0tFTl9UWVBFKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIG5hbWUgPSBjb250ZW50OyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICBsZXQgaWRlbnRpZmllciA9IG51bGw7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHR5cGUgPT09IElERU5USUZJRVJfVE9LRU5fVFlQRSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgICBpZGVudGlmaWVyID0gY29udGVudDsgIC8vL1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUGFyYW1ldGVyTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiUGFyYW1ldGVyTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5hbWUiLCJuYW1lIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImluZGV4IiwidGVybWluYWxOb2RlIiwidHlwZSIsImdldFR5cGUiLCJOQU1FX1RPS0VOX1RZUEUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImdldElkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwiSURFTlRJRklFUl9UT0tFTl9UWVBFIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7Z0NBSlc7NEJBRXVCO0FBRXhDLE1BQU1BLHNCQUFzQkMsK0JBQWU7SUFDeERDLFVBQVU7UUFDUixJQUFJQyxPQUFPO1FBRVgsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQ0MsV0FBV0M7WUFDN0IsTUFBTUMsZUFBZUYsV0FDZkcsT0FBT0QsYUFBYUUsT0FBTztZQUVqQyxJQUFJRCxTQUFTRSwyQkFBZSxFQUFFO2dCQUM1QixNQUFNQyxVQUFVSixhQUFhSyxVQUFVO2dCQUV2Q1QsT0FBT1EsU0FBVSxHQUFHO1lBQ3RCO1lBRUEsSUFBSUwsVUFBVSxHQUFHO2dCQUNmLE9BQU87WUFDVDtRQUNGO1FBRUEsT0FBT0g7SUFDVDtJQUVBVSxnQkFBZ0I7UUFDZCxJQUFJQyxhQUFhO1FBRWpCLElBQUksQ0FBQ1YsYUFBYSxDQUFDLENBQUNDLFdBQVdDO1lBQzdCLE1BQU1DLGVBQWVGLFdBQ2ZHLE9BQU9ELGFBQWFFLE9BQU87WUFFakMsSUFBSUQsU0FBU08saUNBQXFCLEVBQUU7Z0JBQ2xDLE1BQU1KLFVBQVVKLGFBQWFLLFVBQVU7Z0JBRXZDRSxhQUFhSCxTQUFVLEdBQUc7WUFDNUI7WUFFQSxJQUFJTCxVQUFVLEdBQUc7Z0JBQ2YsT0FBTztZQUNUO1FBQ0Y7UUFFQSxPQUFPUTtJQUNUO0lBRUEsT0FBT0UsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPbkIsK0JBQWUsQ0FBQ2UsMENBQTBDLENBQUNoQixlQUFlaUIsVUFBVUMsWUFBWUMsU0FBU0M7SUFBYTtBQUM5TiJ9