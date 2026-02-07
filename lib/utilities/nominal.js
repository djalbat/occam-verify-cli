"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get nominalLexer () {
        return nominalLexer;
    },
    get nominalParser () {
        return nominalParser;
    }
});
var _occamnominal = require("occam-nominal");
var _lexer = /*#__PURE__*/ _interop_require_default(require("../nominal/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../nominal/parser"));
var _customGrammar = require("./customGrammar");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var nominalLexerFromCombinedCustomGrammar = _occamnominal.lexersUtilities.nominalLexerFromCombinedCustomGrammar, nominalParserFromCombinedCustomGrammar = _occamnominal.parsersUtilities.nominalParserFromCombinedCustomGrammar;
var combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromNothing)();
var nominalLexer = nominalLexerFromCombinedCustomGrammar(_lexer.default, combinedCustomGrammar);
var nominalParser = nominalParserFromCombinedCustomGrammar(_parser.default, combinedCustomGrammar);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9taW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbGV4ZXJzVXRpbGl0aWVzLCBwYXJzZXJzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLW5vbWluYWxcIjtcblxuaW1wb3J0IE5vbWluYWxMZXhlciBmcm9tIFwiLi4vbm9taW5hbC9sZXhlclwiO1xuaW1wb3J0IE5vbWluYWxQYXJzZXIgZnJvbSBcIi4uL25vbWluYWwvcGFyc2VyXCI7XG5cbmltcG9ydCB7IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21Ob3RoaW5nIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hclwiO1xuXG5jb25zdCB7IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBjb25zdCBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKE5vbWluYWxMZXhlciwgY29tYmluZWRDdXN0b21HcmFtbWFyKTtcblxuZXhwb3J0IGNvbnN0IG5vbWluYWxQYXJzZXIgPSBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihOb21pbmFsUGFyc2VyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuIl0sIm5hbWVzIjpbIm5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwibm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbU5vdGhpbmciLCJOb21pbmFsTGV4ZXIiLCJOb21pbmFsUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFjYUE7ZUFBQUE7O1FBRUFDO2VBQUFBOzs7NEJBZHFDOzREQUV6Qjs2REFDQzs2QkFFdUI7Ozs7OztBQUVqRCxJQUFNLEFBQUVDLHdDQUEwQ0MsNkJBQWUsQ0FBekRELHVDQUNGLEFBQUVFLHlDQUEyQ0MsOEJBQWdCLENBQTNERDtBQUVSLElBQU1FLHdCQUF3QkMsSUFBQUEsK0NBQWdDO0FBRXZELElBQU1QLGVBQWVFLHNDQUFzQ00sY0FBWSxFQUFFRjtBQUV6RSxJQUFNTCxnQkFBZ0JHLHVDQUF1Q0ssZUFBYSxFQUFFSCJ9