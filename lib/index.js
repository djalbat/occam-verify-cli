"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Log: function() {
        return _log.default;
    },
    ReleaseContext: function() {
        return _release.default;
    },
    customGrammarUtilities: function() {
        return _customGrammar.default;
    },
    releaseContextUtilities: function() {
        return _releaseContext.default;
    },
    releaseUtilities: function() {
        return _release1.default;
    }
});
var _type = /*#__PURE__*/ _interop_require_default(require("./type"));
var _term = /*#__PURE__*/ _interop_require_default(require("./term"));
var _rule = /*#__PURE__*/ _interop_require_default(require("./rule"));
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _axiom = /*#__PURE__*/ _interop_require_default(require("./axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("./lemma"));
var _premise = /*#__PURE__*/ _interop_require_default(require("./premise"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("./theorem"));
var _metaType = /*#__PURE__*/ _interop_require_default(require("./metaType"));
var _variable = /*#__PURE__*/ _interop_require_default(require("./variable"));
var _statement = /*#__PURE__*/ _interop_require_default(require("./statement"));
var _proofStep = /*#__PURE__*/ _interop_require_default(require("./proofStep"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("./consequent"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("./conjecture"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("./combinator"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("./conclusion"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("./constructor"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("./metatheorem"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./metavariable"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("./statement/unqualified"));
var _log = /*#__PURE__*/ _interop_require_default(require("./log"));
var _release = /*#__PURE__*/ _interop_require_default(require("./context/release"));
var _release1 = /*#__PURE__*/ _interop_require_default(require("./utilities/release"));
var _customGrammar = /*#__PURE__*/ _interop_require_default(require("./utilities/customGrammar"));
var _releaseContext = /*#__PURE__*/ _interop_require_default(require("./utilities/releaseContext"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IFRlcm0gZnJvbSBcIi4vdGVybVwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4vcnVsZVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4vYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi9sZW1tYVwiO1xuaW1wb3J0IFByZW1pc2UgZnJvbSBcIi4vcHJlbWlzZVwiO1xuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4vdGhlb3JlbVwiO1xuaW1wb3J0IE1ldGFUeXBlIGZyb20gXCIuL21ldGFUeXBlXCI7XG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4vdmFyaWFibGVcIjtcbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSBcIi4vc3RhdGVtZW50XCI7XG5pbXBvcnQgUHJvb2ZTdGVwIGZyb20gXCIuL3Byb29mU3RlcFwiO1xuaW1wb3J0IENvbnNlcXVlbnQgZnJvbSBcIi4vY29uc2VxdWVudFwiO1xuaW1wb3J0IENvbmplY3R1cmUgZnJvbSBcIi4vY29uamVjdHVyZVwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbmNsdXNpb24gZnJvbSBcIi4vY29uY2x1c2lvblwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBNZXRhdGhlb3JlbSBmcm9tIFwiLi9tZXRhdGhlb3JlbVwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi9tZXRhdmFyaWFibGVcIjtcbmltcG9ydCBVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi9zdGF0ZW1lbnQvdW5xdWFsaWZpZWRcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2cgfSBmcm9tIFwiLi9sb2dcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVsZWFzZUNvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0L3JlbGVhc2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVsZWFzZVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9yZWxlYXNlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGN1c3RvbUdyYW1tYXJVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWxlYXNlQ29udGV4dFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9yZWxlYXNlQ29udGV4dFwiO1xuIl0sIm5hbWVzIjpbIkxvZyIsIlJlbGVhc2VDb250ZXh0IiwiY3VzdG9tR3JhbW1hclV0aWxpdGllcyIsInJlbGVhc2VDb250ZXh0VXRpbGl0aWVzIiwicmVsZWFzZVV0aWxpdGllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBd0JvQkEsR0FBRztlQUFIQSxZQUFHOztJQUNIQyxjQUFjO2VBQWRBLGdCQUFjOztJQUVkQyxzQkFBc0I7ZUFBdEJBLHNCQUFzQjs7SUFDdEJDLHVCQUF1QjtlQUF2QkEsdUJBQXVCOztJQUZ2QkMsZ0JBQWdCO2VBQWhCQSxpQkFBZ0I7OzsyREF4Qm5COzJEQUNBOzJEQUNBOzREQUNDOzREQUNBOzREQUNBOzhEQUNFOzhEQUNBOytEQUNDOytEQUNBO2dFQUNDO2dFQUNBO2lFQUNDO2lFQUNBO2lFQUNBO2lFQUNBO2tFQUNDO2tFQUNBO2tFQUNBO21FQUNDO2tFQUNROzBEQUVGOzhEQUNXOytEQUNFO29FQUNNO3FFQUNDIn0=