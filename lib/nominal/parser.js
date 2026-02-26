"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NominalParser;
    }
});
const _occamlanguages = require("occam-languages");
const _occamgrammars = require("occam-grammars");
const _nonTerminalNodeMap = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNodeMap"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NominalParser extends _occamgrammars.NominalParser {
    static NonTerminalNodeMap = _nonTerminalNodeMap.default;
    static defaultNonTerminalNode = _occamlanguages.NonTerminalNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgTm9taW5hbFBhcnNlciBhcyBOb21pbmFsUGFyc2VyQmFzZSB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlTWFwIGZyb20gXCIuLi9ub25UZXJtaW5hbE5vZGVNYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9taW5hbFBhcnNlciBleHRlbmRzIE5vbWluYWxQYXJzZXJCYXNlIHtcbiAgc3RhdGljIE5vblRlcm1pbmFsTm9kZU1hcCA9IE5vblRlcm1pbmFsTm9kZU1hcDtcblxuICBzdGF0aWMgZGVmYXVsdE5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJOb21pbmFsUGFyc2VyIiwiTm9taW5hbFBhcnNlckJhc2UiLCJOb25UZXJtaW5hbE5vZGVNYXAiLCJkZWZhdWx0Tm9uVGVybWluYWxOb2RlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2dDQUxXOytCQUNtQjsyRUFFcEI7Ozs7OztBQUVoQixNQUFNQSxzQkFBc0JDLDRCQUFpQjtJQUMxRCxPQUFPQyxxQkFBcUJBLDJCQUFrQixDQUFDO0lBRS9DLE9BQU9DLHlCQUF5QkMsK0JBQWUsQ0FBQztBQUNsRCJ9