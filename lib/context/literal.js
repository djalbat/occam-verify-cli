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
const _metaTypes = require("../metaTypes");
const { nodeAsString, nodesAsString } = _occamlanguages.nodeUtilities;
class LiteralContext extends _occamlanguages.Context {
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
    findMetaTypeByMetaTypeName(metaTypeName) {
        return (0, _metaTypes.findMetaTypeByMetaTypeName)(metaTypeName);
    }
    static fromNothing(context) {
        const tokens = null, literalContext = new LiteralContext(context, tokens);
        return literalContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpdGVyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQsIG5vZGVVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuXG5jb25zdCB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9ID0gbm9kZVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl0ZXJhbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdG9rZW5zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZXMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7IHJldHVybiBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpOyB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIGxpdGVyYWxDb250ZXh0ID0gbmV3IExpdGVyYWxDb250ZXh0KGNvbnRleHQsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gbGl0ZXJhbENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaXRlcmFsQ29udGV4dCIsIm5vZGVBc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlVXRpbGl0aWVzIiwiQ29udGV4dCIsImNvbnRleHQiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJnZXRMZXhlciIsImdldENvbnRleHQiLCJsZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsInNldFRva2VucyIsIm5vZGUiLCJzdHJpbmciLCJub2RlcyIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwiZnJvbU5vdGhpbmciLCJsaXRlcmFsQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7OztnQ0FOa0I7MkJBRUk7QUFFM0MsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsRUFBRSxHQUFHQyw2QkFBYTtBQUV0QyxNQUFNSCx1QkFBdUJJLHVCQUFPO0lBQ2pELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxDQUFFO1FBQzNCLEtBQUssQ0FBQ0Q7UUFFTixJQUFJLENBQUNDLE1BQU0sR0FBR0E7SUFDaEI7SUFFQUMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDRCxNQUFNO0lBQ3BCO0lBRUFFLFdBQVc7UUFDVCxNQUFNSCxVQUFVLElBQUksQ0FBQ0ksVUFBVSxJQUN6QkMsUUFBUUwsUUFBUUcsUUFBUTtRQUU5QixPQUFPRTtJQUNUO0lBRUFDLFlBQVk7UUFDVixNQUFNTixVQUFVLElBQUksQ0FBQ0ksVUFBVSxJQUN6QkcsU0FBU1AsUUFBUU0sU0FBUztRQUVoQyxPQUFPQztJQUNUO0lBRUFDLFVBQVVQLE1BQU0sRUFBRTtRQUNoQixJQUFJLENBQUNBLE1BQU0sR0FBR0E7SUFDaEI7SUFFQUwsYUFBYWEsSUFBSSxFQUFFO1FBQ2pCLE1BQU1DLFNBQVNkLGFBQWFhLE1BQU0sSUFBSSxDQUFDUixNQUFNO1FBRTdDLE9BQU9TO0lBQ1Q7SUFFQWIsY0FBY2MsS0FBSyxFQUFFO1FBQ25CLE1BQU1ELFNBQVNiLGNBQWNjLE9BQU8sSUFBSSxDQUFDVixNQUFNO1FBRS9DLE9BQU9TO0lBQ1Q7SUFFQUUsMkJBQTJCQyxZQUFZLEVBQUU7UUFBRSxPQUFPRCxJQUFBQSxxQ0FBMEIsRUFBQ0M7SUFBZTtJQUU1RixPQUFPQyxZQUFZZCxPQUFPLEVBQUU7UUFDMUIsTUFBTUMsU0FBUyxNQUNUYyxpQkFBaUIsSUFBSXBCLGVBQWVLLFNBQVNDO1FBRW5ELE9BQU9jO0lBQ1Q7QUFDRiJ9