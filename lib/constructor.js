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
                var Term = _shim.default.Term, Type = _shim.default.Type, termNode = termNodeQuery(constructorDeclarationNode), typeNode = typeNodeQuery(constructorDeclarationNode), type = typeNode === null ? _type.objectType : Type.fromTypeNode(typeNode), term = Term.fromTermNodeAndType(termNode, type, fileContext), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvbi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3R5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy50ZXJtLmdldFR5cGUoKTsgfVxuXG4gIHZlcmlmeUF0VG9wTGV2ZWwoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvciBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1UeXBlVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5VHlwZShmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodGVybVR5cGVWZXJpZmllZCkge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVkQXRUb3BMZXZlbCA9IHRoaXMudGVybS52ZXJpZnlBdFRvcExldmVsKGZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yIGF0IHRvcCBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1KU09OID0gdGhpcy50ZXJtLnRvSlNPTigpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgdGVybSB9ID0ganNvbjtcblxuICAgIGNvbnN0IHRlcm1KU09OID0gdGVybTsgIC8vL1xuXG4gICAganNvbiA9IHRlcm1KU09OOyAgLy8vXG5cbiAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW07XG5cbiAgICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVGVybSwgVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZSA9ICh0eXBlTm9kZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOlxuICAgICAgICAgICAgICAgICAgICAgVHlwZS5mcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9YDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9OiR7dHlwZVN0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJDb25zdHJ1Y3RvciIsInN0cmluZ0Zyb21UZXJtQW5kVHlwZSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwic3RyaW5nIiwidGVybSIsImdldFN0cmluZyIsImdldFRlcm0iLCJnZXRUeXBlIiwidmVyaWZ5QXRUb3BMZXZlbCIsImZpbGVDb250ZXh0IiwidmVyaWZpZWRBdFRvcExldmVsIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0cmFjZSIsInRlcm1UeXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwidGVybVZlcmlmaWVkQXRUb3BMZXZlbCIsImRlYnVnIiwidG9KU09OIiwidGVybUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJUZXJtIiwic2hpbSIsInR5cGUiLCJjb25zdHJ1Y3RvciIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJvYmplY3RUeXBlIiwiZnJvbVR5cGVOb2RlIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsInRlcm1TdHJpbmciLCJ0eXBlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBVXFCQTs7SUFtRkxDLHFCQUFxQjtlQUFyQkE7OzsyREEzRkM7cUJBRVM7b0JBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLGlDQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpCLElBQUEsQUFBTUgsNEJBQU47YUFBTUEsWUFDUEssTUFBTSxFQUFFQyxJQUFJO2dDQURMTjtRQUVqQixJQUFJLENBQUNLLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUhLTjs7WUFNbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7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