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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpdGVyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gPSBub2RlVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXRlcmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0b2tlbnMpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKTtcblxuICAgIHJldHVybiBsZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2Rlcykge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZXMsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbGl0ZXJhbENvbnRleHQgPSBuZXcgTGl0ZXJhbENvbnRleHQoY29udGV4dCwgdG9rZW5zKTtcblxuICAgIHJldHVybiBsaXRlcmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpdGVyYWxDb250ZXh0Iiwibm9kZUFzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVVdGlsaXRpZXMiLCJDb250ZXh0IiwiY29udGV4dCIsInRva2VucyIsImdldFRva2VucyIsImdldExleGVyIiwiZ2V0Q29udGV4dCIsImxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwic2V0VG9rZW5zIiwibm9kZSIsInN0cmluZyIsIm5vZGVzIiwiZnJvbU5vdGhpbmciLCJsaXRlcmFsQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7OztnQ0FOUztnRUFFVjs7Ozs7O0FBRXBCLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUUsR0FBR0MsNkJBQWE7QUFFdEMsTUFBTUgsdUJBQXVCSSxnQkFBTztJQUNqRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sQ0FBRTtRQUMzQixLQUFLLENBQUNEO1FBRU4sSUFBSSxDQUFDQyxNQUFNLEdBQUdBO0lBQ2hCO0lBRUFDLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0QsTUFBTTtJQUNwQjtJQUVBRSxXQUFXO1FBQ1QsTUFBTUgsVUFBVSxJQUFJLENBQUNJLFVBQVUsSUFDekJDLFFBQVFMLFFBQVFHLFFBQVE7UUFFOUIsT0FBT0U7SUFDVDtJQUVBQyxZQUFZO1FBQ1YsTUFBTU4sVUFBVSxJQUFJLENBQUNJLFVBQVUsSUFDekJHLFNBQVNQLFFBQVFNLFNBQVM7UUFFaEMsT0FBT0M7SUFDVDtJQUVBQyxVQUFVUCxNQUFNLEVBQUU7UUFDaEIsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO0lBQ2hCO0lBRUFMLGFBQWFhLElBQUksRUFBRTtRQUNqQixNQUFNQyxTQUFTZCxhQUFhYSxNQUFNLElBQUksQ0FBQ1IsTUFBTTtRQUU3QyxPQUFPUztJQUNUO0lBRUFiLGNBQWNjLEtBQUssRUFBRTtRQUNuQixNQUFNRCxTQUFTYixjQUFjYyxPQUFPLElBQUksQ0FBQ1YsTUFBTTtRQUUvQyxPQUFPUztJQUNUO0lBRUEsT0FBT0UsWUFBWVosT0FBTyxFQUFFO1FBQzFCLE1BQU1DLFNBQVMsTUFDVFksaUJBQWlCLElBQUlsQixlQUFlSyxTQUFTQztRQUVuRCxPQUFPWTtJQUNUO0FBQ0YifQ==