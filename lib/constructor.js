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
        return _default;
    },
    stringFromTermAndType: function() {
        return stringFromTermAndType;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
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
                var Term = _shim.default.Term, Type = _shim.default.Type, termNode = termNodeQuery(constructorDeclarationNode), typeNode = typeNodeQuery(constructorDeclarationNode), localContext = _local.default.fromFileContext(fileContext), context = localContext, type = Type.fromTypeNode(typeNode), term = Term.fromTermNodeAndType(termNode, type, context), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
                return constructor;
            }
        }
    ]);
    return Constructor;
}();
Object.assign(_shim.default, {
    Constructor: Constructor
});
var _default = Constructor;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUpTT04sIHRlcm1Ub1Rlcm1KU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb24vdHlwZVwiKTtcblxuY2xhc3MgQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0VHlwZSgpOyB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1VbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmAsIHRlcm0pO1xuXG4gICAgY29uc3QgdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IgPSB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IodGVybSwgY29uc3RydWN0b3IsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgY29uc3QgdHlwZSA9IGNvbnN0cnVjdG9yLmdldFR5cGUoKTtcblxuICAgICAgdGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgdGVybVVuaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm0pO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZWNsYXJlZChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZWNsYXJlZDtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3Igd2hlbiBkZWNsYXJlZC4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVkQXRUb3BMZXZlbCA9IHRoaXMudGVybS52ZXJpZnlXaGVuRGVjbGFyZWQoZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIHZlcmlmaWVkV2hlbkRlY2xhcmVkID0gdHJ1ZTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3Igd2hlbiBkZWNsYXJlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVjbGFyZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtVG9UZXJtSlNPTih0aGlzLnRlcm0pLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFRlcm0sIFR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIENvbnN0cnVjdG9yXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uc3RydWN0b3I7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ31gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVOYW1lfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInN0cmluZ0Zyb21UZXJtQW5kVHlwZSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiQ29uc3RydWN0b3IiLCJzdHJpbmciLCJ0ZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0VGVybSIsImdldFR5cGUiLCJ1bmlmeVRlcm0iLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVW5pZmllZCIsImNvbnN0cnVjdG9yIiwidGVybVN0cmluZyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsInZlcmlmaWVkQWhlYWQiLCJ0eXBlIiwic2V0VHlwZSIsImRlYnVnIiwidmVyaWZ5V2hlbkRlY2xhcmVkIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZFdoZW5EZWNsYXJlZCIsInRlcm1WZXJpZmllZEF0VG9wTGV2ZWwiLCJ0b0pTT04iLCJ0ZXJtSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwianNvbiIsImZyb21KU09OIiwidGVybUZyb21KU09OIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJUZXJtIiwic2hpbSIsIlR5cGUiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbVR5cGVOb2RlIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsIk9iamVjdCIsImFzc2lnbiIsInR5cGVOYW1lIiwiZ2V0TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBb0hBLE9BQTJCO2VBQTNCOztJQUVnQkEscUJBQXFCO2VBQXJCQTs7OzJEQXBIQzs0REFDUTtxQkFFQzsyQkFDZTtvQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsaUNBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNRSw0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