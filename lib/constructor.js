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
var _dom = /*#__PURE__*/ _interop_require_default(require("./dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _query = require("./utilities/query");
var _unification = require("./utilities/unification");
var _json = require("./utilities/json");
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
            key: "unifyTerm",
            value: function unifyTerm(term, context, verifyAhead) {
                var termUnified = false;
                var constructor = this, termString = term.getString(), constructorString = constructor.getString();
                context.trace("Unifying the '".concat(termString, "' term with the '").concat(constructorString, "' constructor..."), term);
                var termUnifiedWithConstructor = (0, _unification.unifyTermWithConstructor)(term, constructor, context);
                if (termUnifiedWithConstructor) {
                    var verifiedAhead;
                    var type = constructor.getType();
                    term.setType(type);
                    verifiedAhead = verifyAhead();
                    termUnified = verifiedAhead; ///
                }
                if (termUnified) {
                    context.debug("...unified the '".concat(termString, "' term with the '").concat(constructorString, "' constructor."), term);
                }
                return termUnified;
            }
        },
        {
            key: "verifyWhenDeclared",
            value: function verifyWhenDeclared(fileContext) {
                var verifiedWhenDeclared;
                var constructorString = this.string; ///
                fileContext.trace("Verifying the '".concat(constructorString, "' constructor when declared..."));
                var termVerifiedAtTopLevel = this.term.verifyWhenDeclared(fileContext);
                if (termVerifiedAtTopLevel) {
                    verifiedWhenDeclared = true; ///
                }
                if (verifiedWhenDeclared) {
                    fileContext.debug("...verified the '".concat(constructorString, "' constructor when declared."));
                }
                return verifiedWhenDeclared;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var termJSON = (0, _json.termToTermJSON)(this.term), term = termJSON, json = {
                    term: term
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var term = (0, _json.termFromJSON)(json, fileContext), type = term.getType(), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
                return constructor;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var Term = _dom.default.Term, Type = _dom.default.Type, termNode = termNodeQuery(constructorDeclarationNode), typeNode = typeNodeQuery(constructorDeclarationNode), localContext = _local.default.fromFileContext(fileContext), context = localContext, type = Type.fromTypeNode(typeNode), term = Term.fromTermNodeAndType(termNode, type, context), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
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
        var typeName = type.getName();
        string = "".concat(termString, ":").concat(typeName);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciB9IGZyb20gXCIuL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgdGVybUZyb21KU09OLCB0ZXJtVG9UZXJtSlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvbi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3R5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy50ZXJtLmdldFR5cGUoKTsgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gLCB0ZXJtKTtcblxuICAgIGNvbnN0IHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3Rvcikge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBjb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICAgIHRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIHRlcm1VbmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVjbGFyZWQoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVjbGFyZWQ7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yIHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WZXJpZmllZEF0VG9wTGV2ZWwgPSB0aGlzLnRlcm0udmVyaWZ5V2hlbkRlY2xhcmVkKGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZWNsYXJlZCA9IHRydWU7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZWNsYXJlZCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yIHdoZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlY2xhcmVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1KU09OID0gdGVybVRvVGVybUpTT04odGhpcy50ZXJtKSxcbiAgICAgICAgICB0ZXJtID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUZXJtLCBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9OiR7dHlwZU5hbWV9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiQ29uc3RydWN0b3IiLCJzdHJpbmdGcm9tVGVybUFuZFR5cGUiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInN0cmluZyIsInRlcm0iLCJnZXRTdHJpbmciLCJnZXRUZXJtIiwiZ2V0VHlwZSIsInVuaWZ5VGVybSIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1VbmlmaWVkIiwiY29uc3RydWN0b3IiLCJ0ZXJtU3RyaW5nIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0cmFjZSIsInRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIiwidmVyaWZpZWRBaGVhZCIsInR5cGUiLCJzZXRUeXBlIiwiZGVidWciLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkV2hlbkRlY2xhcmVkIiwidGVybVZlcmlmaWVkQXRUb3BMZXZlbCIsInRvSlNPTiIsInRlcm1KU09OIiwidGVybVRvVGVybUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtRnJvbUpTT04iLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIlRlcm0iLCJkb20iLCJUeXBlIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImZyb21UeXBlTm9kZSIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFZcUJBOztJQW9HTEMscUJBQXFCO2VBQXJCQTs7OzBEQTlHQTs0REFDUztxQkFFQzsyQkFDZTtvQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsaUNBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakIsSUFBQSxBQUFNSCw0QkFBTjthQUFNQSxZQUNQSyxNQUFNLEVBQUVDLElBQUk7Z0NBRExOO1FBRWpCLElBQUksQ0FBQ0ssTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFH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