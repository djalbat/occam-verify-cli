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
const _type = require("../utilities/type");
const _metaTypes = require("../metaTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { nominalLexerFromNothing } = _occamnominal.lexersUtilities, { nominalParserFromNothing } = _occamnominal.parsersUtilities;
const nominalLexer = nominalLexerFromNothing(_lexer.default), nominalParser = nominalParserFromNothing(_parser.default); ///
let baseType = null;
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
    findTypeByNominalTypeName(nominalTypeName) {
        let type = null;
        if (baseType === null) {
            baseType = (0, _type.baseTypeFromNothing)();
        }
        const comparesToNominalTypeName = baseType.compareNominalTypeName(nominalTypeName);
        if (comparesToNominalTypeName) {
            type = baseType; ///
        }
        return type;
    }
    findMetaTypeByMetaTypeName(metaTypeName) {
        return (0, _metaTypes.findMetaTypeByMetaTypeName)(metaTypeName);
    }
    static fromNothing() {
        const context = null, lexer = nominalLexer, parser = nominalParser, nominalContext = _occamlanguages.Context.fromNothing(NominalContext, lexer, parser, context);
        return nominalContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbm9taW5hbFwiO1xuXG5pbXBvcnQgTm9taW5hbExleGVyIGZyb20gXCIuLi9ub21pbmFsL2xleGVyXCI7XG5pbXBvcnQgTm9taW5hbFBhcnNlciBmcm9tIFwiLi4vbm9taW5hbC9wYXJzZXJcIjtcblxuaW1wb3J0IHsgYmFzZVR5cGVGcm9tTm90aGluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdHlwZVwiO1xuaW1wb3J0IHsgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5cbmNvbnN0IHsgbm9taW5hbExleGVyRnJvbU5vdGhpbmcgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Ob3RoaW5nIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5jb25zdCBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tTm90aGluZyhOb21pbmFsTGV4ZXIpLFxuICAgICAgbm9taW5hbFBhcnNlciA9IG5vbWluYWxQYXJzZXJGcm9tTm90aGluZyhOb21pbmFsUGFyc2VyKTsgLy8vXG5cbmxldCBiYXNlVHlwZSA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vbWluYWxDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGxleGVyLCBwYXJzZXIpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlcjtcbiAgfVxuXG4gIGZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgbGV0IHR5cGUgPSBudWxsO1xuXG4gICAgaWYgKGJhc2VUeXBlID09PSBudWxsKSB7XG4gICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gYmFzZVR5cGUuY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgaWYgKGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgIHR5cGUgPSBiYXNlVHlwZTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7IHJldHVybiBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpOyB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBudWxsLFxuICAgICAgICAgIGxleGVyID0gbm9taW5hbExleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBub21pbmFsUGFyc2VyLCAvLy9cbiAgICAgICAgICBub21pbmFsQ29udGV4dCA9IENvbnRleHQuZnJvbU5vdGhpbmcoTm9taW5hbENvbnRleHQsIGxleGVyLCBwYXJzZXIsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9taW5hbENvbnRleHQiLCJub21pbmFsTGV4ZXJGcm9tTm90aGluZyIsImxleGVyc1V0aWxpdGllcyIsIm5vbWluYWxQYXJzZXJGcm9tTm90aGluZyIsInBhcnNlcnNVdGlsaXRpZXMiLCJub21pbmFsTGV4ZXIiLCJOb21pbmFsTGV4ZXIiLCJub21pbmFsUGFyc2VyIiwiTm9taW5hbFBhcnNlciIsImJhc2VUeXBlIiwiQ29udGV4dCIsImNvbnRleHQiLCJsZXhlciIsInBhcnNlciIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwiY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsImZyb21Ob3RoaW5nIiwibm9taW5hbENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1CQTs7O2VBQXFCQTs7O2dDQWpCRzs4QkFDMEI7OERBRXpCOytEQUNDO3NCQUVVOzJCQUNPOzs7Ozs7QUFFM0MsTUFBTSxFQUFFQyx1QkFBdUIsRUFBRSxHQUFHQyw2QkFBZSxFQUM3QyxFQUFFQyx3QkFBd0IsRUFBRSxHQUFHQyw4QkFBZ0I7QUFFckQsTUFBTUMsZUFBZUosd0JBQXdCSyxjQUFZLEdBQ25EQyxnQkFBZ0JKLHlCQUF5QkssZUFBYSxHQUFHLEdBQUc7QUFFbEUsSUFBSUMsV0FBVztBQUVBLE1BQU1ULHVCQUF1QlUsdUJBQU87SUFDakQsWUFBWUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sQ0FBRTtRQUNsQyxLQUFLLENBQUNGO1FBRU4sSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO0lBQ2hCO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0YsS0FBSztJQUNuQjtJQUVBRyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNGLE1BQU07SUFDcEI7SUFFQUcsMEJBQTBCQyxlQUFlLEVBQUU7UUFDekMsSUFBSUMsT0FBTztRQUVYLElBQUlULGFBQWEsTUFBTTtZQUNyQkEsV0FBV1UsSUFBQUEseUJBQW1CO1FBQ2hDO1FBRUEsTUFBTUMsNEJBQTRCWCxTQUFTWSxzQkFBc0IsQ0FBQ0o7UUFFbEUsSUFBSUcsMkJBQTJCO1lBQzdCRixPQUFPVCxVQUFXLEdBQUc7UUFDdkI7UUFFQSxPQUFPUztJQUNUO0lBRUFJLDJCQUEyQkMsWUFBWSxFQUFFO1FBQUUsT0FBT0QsSUFBQUEscUNBQTBCLEVBQUNDO0lBQWU7SUFFNUYsT0FBT0MsY0FBYztRQUNuQixNQUFNYixVQUFVLE1BQ1ZDLFFBQVFQLGNBQ1JRLFNBQVNOLGVBQ1RrQixpQkFBaUJmLHVCQUFPLENBQUNjLFdBQVcsQ0FBQ3hCLGdCQUFnQlksT0FBT0MsUUFBUUY7UUFFMUUsT0FBT2M7SUFDVDtBQUNGIn0=