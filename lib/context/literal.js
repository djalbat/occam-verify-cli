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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpdGVyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gPSBub2RlVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXRlcmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0b2tlbnMpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGVzKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlcywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBsaXRlcmFsQ29udGV4dCA9IG5ldyBMaXRlcmFsQ29udGV4dChjb250ZXh0LCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGxpdGVyYWxDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTGl0ZXJhbENvbnRleHQiLCJub2RlQXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZVV0aWxpdGllcyIsIkNvbnRleHQiLCJjb250ZXh0IiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwic2V0VG9rZW5zIiwibm9kZSIsInN0cmluZyIsIm5vZGVzIiwiZnJvbU5vdGhpbmciLCJsaXRlcmFsQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7OztnQ0FOUztnRUFFVjs7Ozs7O0FBRXBCLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUUsR0FBR0MsNkJBQWE7QUFFdEMsTUFBTUgsdUJBQXVCSSxnQkFBTztJQUNqRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sQ0FBRTtRQUMzQixLQUFLLENBQUNEO1FBRU4sSUFBSSxDQUFDQyxNQUFNLEdBQUdBO0lBQ2hCO0lBRUFDLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0QsTUFBTTtJQUNwQjtJQUVBRSxVQUFVRixNQUFNLEVBQUU7UUFDaEIsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO0lBQ2hCO0lBRUFMLGFBQWFRLElBQUksRUFBRTtRQUNqQixNQUFNQyxTQUFTVCxhQUFhUSxNQUFNLElBQUksQ0FBQ0gsTUFBTTtRQUU3QyxPQUFPSTtJQUNUO0lBRUFSLGNBQWNTLEtBQUssRUFBRTtRQUNuQixNQUFNRCxTQUFTUixjQUFjUyxPQUFPLElBQUksQ0FBQ0wsTUFBTTtRQUUvQyxPQUFPSTtJQUNUO0lBRUEsT0FBT0UsWUFBWVAsT0FBTyxFQUFFO1FBQzFCLE1BQU1DLFNBQVMsTUFDVE8saUJBQWlCLElBQUliLGVBQWVLLFNBQVNDO1FBRW5ELE9BQU9PO0lBQ1Q7QUFDRiJ9