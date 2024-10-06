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
                var termVerifiedAtTopLevel = this.term.verifyAtTopLevel(fileContext);
                if (termVerifiedAtTopLevel) {
                    verifiedAtTopLevel = true; ///
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
        var typeName = type.getName();
        string = "".concat(termString, ":").concat(typeName);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvbi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3R5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy50ZXJtLmdldFR5cGUoKTsgfVxuXG4gIHZlcmlmeUF0VG9wTGV2ZWwoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvciBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WZXJpZmllZEF0VG9wTGV2ZWwgPSB0aGlzLnRlcm0udmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yIGF0IHRvcCBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1KU09OID0gdGhpcy50ZXJtLnRvSlNPTigpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgdGVybSB9ID0ganNvbjtcblxuICAgIGNvbnN0IHRlcm1KU09OID0gdGVybTsgIC8vL1xuXG4gICAganNvbiA9IHRlcm1KU09OOyAgLy8vXG5cbiAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW07XG5cbiAgICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVGVybSwgVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZSA9ICh0eXBlTm9kZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOlxuICAgICAgICAgICAgICAgICAgICAgVHlwZS5mcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9YDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ306JHt0eXBlTmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJDb25zdHJ1Y3RvciIsInN0cmluZ0Zyb21UZXJtQW5kVHlwZSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwic3RyaW5nIiwidGVybSIsImdldFN0cmluZyIsImdldFRlcm0iLCJnZXRUeXBlIiwidmVyaWZ5QXRUb3BMZXZlbCIsImZpbGVDb250ZXh0IiwidmVyaWZpZWRBdFRvcExldmVsIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllZEF0VG9wTGV2ZWwiLCJkZWJ1ZyIsInRvSlNPTiIsInRlcm1KU09OIiwianNvbiIsImZyb21KU09OIiwiVGVybSIsInNoaW0iLCJ0eXBlIiwiY29uc3RydWN0b3IiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwib2JqZWN0VHlwZSIsImZyb21UeXBlTm9kZSIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJ0ZXJtU3RyaW5nIiwidHlwZU5hbWUiLCJnZXROYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBVXFCQTs7SUErRUxDLHFCQUFxQjtlQUFyQkE7OzsyREF2RkM7cUJBRVM7b0JBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLGlDQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpCLElBQUEsQUFBTUgsNEJBQU47YUFBTUEsWUFDUEssTUFBTSxFQUFFQyxJQUFJO2dDQURMTjtRQUVqQixJQUFJLENBQUNLLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUhLTjs7WUFNbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBWSxPQUFPLElBQUksQ0FBQ0gsSUFBSSxDQUFDRyxPQUFPO1lBQUk7OztZQUV4Q0MsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsV0FBVztnQkFDMUIsSUFBSUM7Z0JBRUosSUFBTUMsb0JBQW9CLElBQUksQ0FBQ1IsTUFBTSxFQUFHLEdBQUc7Z0JBRTNDTSxZQUFZRyxLQUFLLENBQUMsQUFBQyxrQkFBbUMsT0FBbEJELG1CQUFrQjtnQkFFdEQsSUFBTUUseUJBQXlCLElBQUksQ0FBQ1QsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQ0M7Z0JBRTFELElBQUlJLHdCQUF3QjtvQkFDMUJILHFCQUFxQixNQUFNLEdBQUc7Z0JBQ2hDO2dCQUVBLElBQUlBLG9CQUFvQjtvQkFDdEJELFlBQVlLLEtBQUssQ0FBQyxBQUFDLG9CQUFxQyxPQUFsQkgsbUJBQWtCO2dCQUMxRDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDWixJQUFJLENBQUNXLE1BQU0sSUFDM0JYLE9BQU9ZLFVBQ1BDLE9BQU87b0JBQ0xiLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9hO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFUixXQUFXO2dCQUMvQixJQUFJLEFBQUVMLE9BQVNhLEtBQVRiO2dCQUVOLElBQU1ZLFdBQVdaLE1BQU8sR0FBRztnQkFFM0JhLE9BQU9ELFVBQVcsR0FBRztnQkFFckIsSUFBTSxBQUFFRyxPQUFTQyxhQUFJLENBQWJEO2dCQUVSZixPQUFPZSxLQUFLRCxRQUFRLENBQUNELE1BQU1SO2dCQUUzQixJQUFNWSxPQUFPakIsS0FBS0csT0FBTyxJQUNuQkosU0FBU0osc0JBQXNCSyxNQUFNaUIsT0FDckNDLGNBQWMsSUEzREh4QixZQTJEbUJLLFFBQVFDO2dCQUU1QyxPQUFPa0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLCtCQUErQkMsMEJBQTBCLEVBQUVmLFdBQVc7Z0JBQzNFLElBQVFVLE9BQWVDLGFBQUksQ0FBbkJELE1BQU1NLE9BQVNMLGFBQUksQ0FBYkssTUFDUkMsV0FBVzFCLGNBQWN3Qiw2QkFDekJHLFdBQVd6QixjQUFjc0IsNkJBQ3pCSCxPQUFPLEFBQUNNLGFBQWEsT0FDWkMsZ0JBQVUsR0FDUkgsS0FBS0ksWUFBWSxDQUFDRixXQUM3QnZCLE9BQU9lLEtBQUtXLG1CQUFtQixDQUFDSixVQUFVTCxNQUFNWixjQUNoRE4sU0FBU0osc0JBQXNCSyxNQUFNaUIsT0FDckNDLGNBQWMsSUF6RUh4QixZQXlFbUJLLFFBQVFDO2dCQUU1QyxPQUFPa0I7WUFDVDs7O1dBNUVtQnhCOztBQStFZCxTQUFTQyxzQkFBc0JLLElBQUksRUFBRWlCLElBQUk7SUFDOUMsSUFBSWxCO0lBRUosSUFBTTRCLGFBQWEzQixLQUFLQyxTQUFTO0lBRWpDLElBQUlnQixTQUFTLE1BQU07UUFDakJsQixTQUFTLEFBQUMsR0FBYSxPQUFYNEI7SUFDZCxPQUFPO1FBQ0wsSUFBTUMsV0FBV1gsS0FBS1ksT0FBTztRQUU3QjlCLFNBQVMsQUFBQyxHQUFnQjZCLE9BQWRELFlBQVcsS0FBWSxPQUFUQztJQUM1QjtJQUVBLE9BQU83QjtBQUNUIn0=