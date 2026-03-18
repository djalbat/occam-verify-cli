"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NominalContext;
    }
});
const _occamlanguages = require("occam-languages");
const _occamnominal = require("occam-nominal");
const _lexer = /*#__PURE__*/ _interop_require_default(require("../nominal/lexer"));
const _parser = /*#__PURE__*/ _interop_require_default(require("../nominal/parser"));
const _metaTypes = require("../metaTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { nominalLexerFromNothing } = _occamnominal.lexersUtilities, { nominalParserFromNothing } = _occamnominal.parsersUtilities;
const nominalLexer = nominalLexerFromNothing(_lexer.default), nominalParser = nominalParserFromNothing(_parser.default); ///
class NominalContext extends _occamlanguages.Context {
    constructor(context, lexer, parser){
        super(context);
        this.lexer = lexer;
        this.parser = parser;
    }
    getLexer() {
        return this.lexer;
    }
    getParser() {
        return this.parser;
    }
    findMetaTypeByMetaTypeName(metaTypeName) {
        return (0, _metaTypes.findMetaTypeByMetaTypeName)(metaTypeName);
    }
    static fromNothing() {
        const context = null, lexer = nominalLexer, parser = nominalParser, nominalContext = _occamlanguages.Context.fromNothing(NominalContext, lexer, parser, context);
        return nominalContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbm9taW5hbFwiO1xuXG5pbXBvcnQgTm9taW5hbExleGVyIGZyb20gXCIuLi9ub21pbmFsL2xleGVyXCI7XG5pbXBvcnQgTm9taW5hbFBhcnNlciBmcm9tIFwiLi4vbm9taW5hbC9wYXJzZXJcIjtcblxuaW1wb3J0IHsgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5cbmNvbnN0IHsgbm9taW5hbExleGVyRnJvbU5vdGhpbmcgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Ob3RoaW5nIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5jb25zdCBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tTm90aGluZyhOb21pbmFsTGV4ZXIpLFxuICAgICAgbm9taW5hbFBhcnNlciA9IG5vbWluYWxQYXJzZXJGcm9tTm90aGluZyhOb21pbmFsUGFyc2VyKTsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vbWluYWxDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGxleGVyLCBwYXJzZXIpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlcjtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkgeyByZXR1cm4gZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbnVsbCxcbiAgICAgICAgICBsZXhlciA9IG5vbWluYWxMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbm9taW5hbFBhcnNlciwgLy8vXG4gICAgICAgICAgbm9taW5hbENvbnRleHQgPSBDb250ZXh0LmZyb21Ob3RoaW5nKE5vbWluYWxDb250ZXh0LCBsZXhlciwgcGFyc2VyLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBub21pbmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vbWluYWxDb250ZXh0Iiwibm9taW5hbExleGVyRnJvbU5vdGhpbmciLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbU5vdGhpbmciLCJwYXJzZXJzVXRpbGl0aWVzIiwibm9taW5hbExleGVyIiwiTm9taW5hbExleGVyIiwibm9taW5hbFBhcnNlciIsIk5vbWluYWxQYXJzZXIiLCJDb250ZXh0IiwiY29udGV4dCIsImxleGVyIiwicGFyc2VyIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsImZyb21Ob3RoaW5nIiwibm9taW5hbENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQXFCQTs7O2dDQWRHOzhCQUMwQjs4REFFekI7K0RBQ0M7MkJBRWlCOzs7Ozs7QUFFM0MsTUFBTSxFQUFFQyx1QkFBdUIsRUFBRSxHQUFHQyw2QkFBZSxFQUM3QyxFQUFFQyx3QkFBd0IsRUFBRSxHQUFHQyw4QkFBZ0I7QUFFckQsTUFBTUMsZUFBZUosd0JBQXdCSyxjQUFZLEdBQ25EQyxnQkFBZ0JKLHlCQUF5QkssZUFBYSxHQUFHLEdBQUc7QUFFbkQsTUFBTVIsdUJBQXVCUyx1QkFBTztJQUNqRCxZQUFZQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxDQUFFO1FBQ2xDLEtBQUssQ0FBQ0Y7UUFFTixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7SUFDaEI7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO0lBQ25CO0lBRUFHLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0YsTUFBTTtJQUNwQjtJQUVBRywyQkFBMkJDLFlBQVksRUFBRTtRQUFFLE9BQU9ELElBQUFBLHFDQUEwQixFQUFDQztJQUFlO0lBRTVGLE9BQU9DLGNBQWM7UUFDbkIsTUFBTVAsVUFBVSxNQUNWQyxRQUFRTixjQUNSTyxTQUFTTCxlQUNUVyxpQkFBaUJULHVCQUFPLENBQUNRLFdBQVcsQ0FBQ2pCLGdCQUFnQlcsT0FBT0MsUUFBUUY7UUFFMUUsT0FBT1E7SUFDVDtBQUNGIn0=