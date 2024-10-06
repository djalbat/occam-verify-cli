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
    default: function() {
        return Constructor;
    },
    stringFromTermAndType: function() {
        return stringFromTermAndType;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _query = require("./utilities/query");
var _type = require("./type");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/term"), typeNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/type");
var Constructor = /*#__PURE__*/ function() {
    function Constructor(string, term) {
        _class_call_check(this, Constructor);
        this.string = string;
        this.term = term;
    }
    _create_class(Constructor, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.term.getType();
            }
        },
        {
            key: "verifyAtTopLevel",
            value: function verifyAtTopLevel(fileContext) {
                var verifiedAtTopLevel;
                var constructorString = this.string; ///
                fileContext.trace("Verifying the '".concat(constructorString, "' constructor at top level..."));
                var termTypeVerified = this.term.verifyType(fileContext);
                if (termTypeVerified) {
                    var termVerifiedAtTopLevel = this.term.verifyAtTopLevel(fileContext);
                    if (termVerifiedAtTopLevel) {
                        verifiedAtTopLevel = true; ///
                    }
                }
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(constructorString, "' constructor at top level."));
                }
                return verifiedAtTopLevel;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var termJSON = this.term.toJSON(), term = termJSON, json = {
                    term: term
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var term = json.term;
                var termJSON = term; ///
                json = termJSON; ///
                var Term = _shim.default.Term;
                term = Term.fromJSON(json, fileContext);
                var type = term.getType(), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
                return constructor;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var Term = _shim.default.Term, Type = _shim.default.Type, termNode = termNodeQuery(constructorDeclarationNode), typeNode = typeNodeQuery(constructorDeclarationNode), type = typeNode === null ? _type.objectType : Type.fromTypeNode(typeNode), term = Term.fromTermNodeAndType(termNode, type), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
                return constructor;
            }
        }
    ]);
    return Constructor;
}();
function stringFromTermAndType(term, type) {
    var string;
    var termString = term.getString();
    if (type === null) {
        string = "".concat(termString);
    } else {
        var typeString = type.getString();
        string = "".concat(termString, ":").concat(typeString);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvbi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3R5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy50ZXJtLmdldFR5cGUoKTsgfVxuXG4gIHZlcmlmeUF0VG9wTGV2ZWwoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvciBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1UeXBlVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5VHlwZShmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodGVybVR5cGVWZXJpZmllZCkge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVkQXRUb3BMZXZlbCA9IHRoaXMudGVybS52ZXJpZnlBdFRvcExldmVsKGZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yIGF0IHRvcCBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1KU09OID0gdGhpcy50ZXJtLnRvSlNPTigpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgdGVybSB9ID0ganNvbjtcblxuICAgIGNvbnN0IHRlcm1KU09OID0gdGVybTsgIC8vL1xuXG4gICAganNvbiA9IHRlcm1KU09OOyAgLy8vXG5cbiAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW07XG5cbiAgICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVGVybSwgVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZSA9ICh0eXBlTm9kZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOlxuICAgICAgICAgICAgICAgICAgICAgVHlwZS5mcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ31gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ306JHt0eXBlU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIkNvbnN0cnVjdG9yIiwic3RyaW5nRnJvbVRlcm1BbmRUeXBlIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJzdHJpbmciLCJ0ZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0VGVybSIsImdldFR5cGUiLCJ2ZXJpZnlBdFRvcExldmVsIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJjb25zdHJ1Y3RvclN0cmluZyIsInRyYWNlIiwidGVybVR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJ0ZXJtVmVyaWZpZWRBdFRvcExldmVsIiwiZGVidWciLCJ0b0pTT04iLCJ0ZXJtSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIlRlcm0iLCJzaGltIiwidHlwZSIsImNvbnN0cnVjdG9yIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsIm9iamVjdFR5cGUiLCJmcm9tVHlwZU5vZGUiLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwidGVybVN0cmluZyIsInR5cGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFVcUJBOztJQW1GTEMscUJBQXFCO2VBQXJCQTs7OzJEQTNGQztxQkFFUztvQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsaUNBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakIsSUFBQSxBQUFNSCw0QkFBTjthQUFNQSxZQUNQSyxNQUFNLEVBQUVDLElBQUk7Z0NBRExOO1FBRWpCLElBQUksQ0FBQ0ssTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSEtOOztZQU1uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7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