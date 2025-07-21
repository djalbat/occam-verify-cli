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
var _occamcustomgrammars = require("occam-custom-grammars");
var _lexer = /*#__PURE__*/ _interop_require_default(require("../nominal/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../nominal/parser"));
var _customGrammar = require("./customGrammar");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var nominalLexerFromCombinedCustomGrammar = _occamcustomgrammars.lexersUtilities.nominalLexerFromCombinedCustomGrammar, nominalParserFromCombinedCustomGrammar = _occamcustomgrammars.parsersUtilities.nominalParserFromCombinedCustomGrammar;
var combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromNothing)();
var nominalLexer = nominalLexerFromCombinedCustomGrammar(_lexer.default, combinedCustomGrammar);
var nominalParser = nominalParserFromCombinedCustomGrammar(_parser.default, combinedCustomGrammar);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9taW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbGV4ZXJzVXRpbGl0aWVzLCBwYXJzZXJzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWN1c3RvbS1ncmFtbWFyc1wiO1xuXG5pbXBvcnQgTm9taW5hbExleGVyIGZyb20gXCIuLi9ub21pbmFsL2xleGVyXCI7XG5pbXBvcnQgTm9taW5hbFBhcnNlciBmcm9tIFwiLi4vbm9taW5hbC9wYXJzZXJcIjtcblxuaW1wb3J0IHsgY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyXCI7XG5cbmNvbnN0IHsgbm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGNvbnN0IG5vbWluYWxMZXhlciA9IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbExleGVyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG5leHBvcnQgY29uc3Qgbm9taW5hbFBhcnNlciA9IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKE5vbWluYWxQYXJzZXIsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcik7XG4iXSwibmFtZXMiOlsibm9taW5hbExleGVyIiwibm9taW5hbFBhcnNlciIsIm5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tTm90aGluZyIsIk5vbWluYWxMZXhlciIsIk5vbWluYWxQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWNhQTtlQUFBQTs7UUFFQUM7ZUFBQUE7OzttQ0FkcUM7NERBRXpCOzZEQUNDOzZCQUV1Qjs7Ozs7O0FBRWpELElBQU0sQUFBRUMsd0NBQTBDQyxvQ0FBZSxDQUF6REQsdUNBQ0YsQUFBRUUseUNBQTJDQyxxQ0FBZ0IsQ0FBM0REO0FBRVIsSUFBTUUsd0JBQXdCQyxJQUFBQSwrQ0FBZ0M7QUFFdkQsSUFBTVAsZUFBZUUsc0NBQXNDTSxjQUFZLEVBQUVGO0FBRXpFLElBQU1MLGdCQUFnQkcsdUNBQXVDSyxlQUFhLEVBQUVIIn0=