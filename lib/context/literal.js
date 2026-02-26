"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LiteralContext;
    }
});
const _occamlanguages = require("occam-languages");
const _context = /*#__PURE__*/ _interop_require_default(require("../context"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { nodeAsString, nodesAsString } = _occamlanguages.nodeUtilities;
class LiteralContext extends _context.default {
    constructor(context, tokens){
        super(context);
        this.tokens = tokens;
    }
    getTokens() {
        return this.tokens;
    }
    getLexer() {
        const context = this.getContext(), lexer = context.getLexer();
        return lexer;
    }
    getParser() {
        const context = this.getContext(), parser = context.getParser();
        return parser;
    }
    setTokens(tokens) {
        this.tokens = tokens;
    }
    nodeAsString(node) {
        const string = nodeAsString(node, this.tokens);
        return string;
    }
    nodesAsString(nodes) {
        const string = nodesAsString(nodes, this.tokens);
        return string;
    }
    static fromNothing(context) {
        const tokens = null, literalContext = new LiteralContext(context, tokens);
        return literalContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpdGVyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7ICBub2RlVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9ID0gbm9kZVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl0ZXJhbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdG9rZW5zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZXMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIGxpdGVyYWxDb250ZXh0ID0gbmV3IExpdGVyYWxDb250ZXh0KGNvbnRleHQsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gbGl0ZXJhbENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaXRlcmFsQ29udGV4dCIsIm5vZGVBc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlVXRpbGl0aWVzIiwiQ29udGV4dCIsImNvbnRleHQiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJnZXRMZXhlciIsImdldENvbnRleHQiLCJsZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsInNldFRva2VucyIsIm5vZGUiLCJzdHJpbmciLCJub2RlcyIsImZyb21Ob3RoaW5nIiwibGl0ZXJhbENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBcUJBOzs7Z0NBTlU7Z0VBRVg7Ozs7OztBQUVwQixNQUFNLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFLEdBQUdDLDZCQUFhO0FBRXRDLE1BQU1ILHVCQUF1QkksZ0JBQU87SUFDakQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLENBQUU7UUFDM0IsS0FBSyxDQUFDRDtRQUVOLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtJQUNoQjtJQUVBQyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNELE1BQU07SUFDcEI7SUFFQUUsV0FBVztRQUNULE1BQU1ILFVBQVUsSUFBSSxDQUFDSSxVQUFVLElBQ3pCQyxRQUFRTCxRQUFRRyxRQUFRO1FBRTlCLE9BQU9FO0lBQ1Q7SUFFQUMsWUFBWTtRQUNWLE1BQU1OLFVBQVUsSUFBSSxDQUFDSSxVQUFVLElBQ3pCRyxTQUFTUCxRQUFRTSxTQUFTO1FBRWhDLE9BQU9DO0lBQ1Q7SUFFQUMsVUFBVVAsTUFBTSxFQUFFO1FBQ2hCLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtJQUNoQjtJQUVBTCxhQUFhYSxJQUFJLEVBQUU7UUFDakIsTUFBTUMsU0FBU2QsYUFBYWEsTUFBTSxJQUFJLENBQUNSLE1BQU07UUFFN0MsT0FBT1M7SUFDVDtJQUVBYixjQUFjYyxLQUFLLEVBQUU7UUFDbkIsTUFBTUQsU0FBU2IsY0FBY2MsT0FBTyxJQUFJLENBQUNWLE1BQU07UUFFL0MsT0FBT1M7SUFDVDtJQUVBLE9BQU9FLFlBQVlaLE9BQU8sRUFBRTtRQUMxQixNQUFNQyxTQUFTLE1BQ1RZLGlCQUFpQixJQUFJbEIsZUFBZUssU0FBU0M7UUFFbkQsT0FBT1k7SUFDVDtBQUNGIn0=