"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
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
        const metaType = (0, _metaTypes.findMetaTypeByMetaTypeName)(metaTypeName);
        return metaType;
    }
    static fromNothing() {
        const context = null, lexer = nominalLexer, parser = nominalParser, nominalContext = _occamlanguages.Context.fromNothing(NominalContext, lexer, parser, context);
        return nominalContext;
    }
}
const nominalContext = NominalContext.fromNothing();
const _default = nominalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbm9taW5hbFwiO1xuXG5pbXBvcnQgTm9taW5hbExleGVyIGZyb20gXCIuLi9ub21pbmFsL2xleGVyXCI7XG5pbXBvcnQgTm9taW5hbFBhcnNlciBmcm9tIFwiLi4vbm9taW5hbC9wYXJzZXJcIjtcblxuaW1wb3J0IHsgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5cbmNvbnN0IHsgbm9taW5hbExleGVyRnJvbU5vdGhpbmcgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Ob3RoaW5nIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5jb25zdCBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tTm90aGluZyhOb21pbmFsTGV4ZXIpLFxuICAgICAgbm9taW5hbFBhcnNlciA9IG5vbWluYWxQYXJzZXJGcm9tTm90aGluZyhOb21pbmFsUGFyc2VyKTsgLy8vXG5cbmNsYXNzIE5vbWluYWxDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGxleGVyLCBwYXJzZXIpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlcjtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlID0gZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbnVsbCxcbiAgICAgICAgICBsZXhlciA9IG5vbWluYWxMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbm9taW5hbFBhcnNlciwgLy8vXG4gICAgICAgICAgbm9taW5hbENvbnRleHQgPSBDb250ZXh0LmZyb21Ob3RoaW5nKE5vbWluYWxDb250ZXh0LCBsZXhlciwgcGFyc2VyLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBub21pbmFsQ29udGV4dDtcbiAgfVxufVxuXG5jb25zdCBub21pbmFsQ29udGV4dCA9IE5vbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5vbWluYWxDb250ZXh0O1xuIl0sIm5hbWVzIjpbIm5vbWluYWxMZXhlckZyb21Ob3RoaW5nIiwibGV4ZXJzVXRpbGl0aWVzIiwibm9taW5hbFBhcnNlckZyb21Ob3RoaW5nIiwicGFyc2Vyc1V0aWxpdGllcyIsIm5vbWluYWxMZXhlciIsIk5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJOb21pbmFsUGFyc2VyIiwiTm9taW5hbENvbnRleHQiLCJDb250ZXh0IiwiY29udGV4dCIsImxleGVyIiwicGFyc2VyIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZnJvbU5vdGhpbmciLCJub21pbmFsQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0RBOzs7ZUFBQTs7O2dDQWhEd0I7OEJBQzBCOzhEQUV6QjsrREFDQzsyQkFFaUI7Ozs7OztBQUUzQyxNQUFNLEVBQUVBLHVCQUF1QixFQUFFLEdBQUdDLDZCQUFlLEVBQzdDLEVBQUVDLHdCQUF3QixFQUFFLEdBQUdDLDhCQUFnQjtBQUVyRCxNQUFNQyxlQUFlSix3QkFBd0JLLGNBQVksR0FDbkRDLGdCQUFnQkoseUJBQXlCSyxlQUFhLEdBQUcsR0FBRztBQUVsRSxNQUFNQyx1QkFBdUJDLHVCQUFPO0lBQ2xDLFlBQVlDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLENBQUU7UUFDbEMsS0FBSyxDQUFDRjtRQUVOLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtJQUNoQjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUs7SUFDbkI7SUFFQUcsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDRixNQUFNO0lBQ3BCO0lBRUFHLDJCQUEyQkMsWUFBWSxFQUFFO1FBQ3ZDLE1BQU1DLFdBQVdGLElBQUFBLHFDQUEwQixFQUFDQztRQUU1QyxPQUFPQztJQUNUO0lBRUEsT0FBT0MsY0FBYztRQUNuQixNQUFNUixVQUFVLE1BQ1ZDLFFBQVFQLGNBQ1JRLFNBQVNOLGVBQ1RhLGlCQUFpQlYsdUJBQU8sQ0FBQ1MsV0FBVyxDQUFDVixnQkFBZ0JHLE9BQU9DLFFBQVFGO1FBRTFFLE9BQU9TO0lBQ1Q7QUFDRjtBQUVBLE1BQU1BLGlCQUFpQlgsZUFBZVUsV0FBVztNQUVqRCxXQUFlQyJ9