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
var _type = /*#__PURE__*/ _interop_require_default(require("./type"));
var _query = require("./utilities/query");
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
                var Term1 = _shim.default.Term;
                term = Term1.fromJSON(json, fileContext);
                var type = term.getType(), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
                return constructor;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var termNode = termNodeQuery(constructorDeclarationNode), typeNode = typeNodeQuery(constructorDeclarationNode), type = _type.default.fromTypeNode(typeNode), term = Term.fromTermNodeAndType(termNode, type), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb24vdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0VHlwZSgpOyB9XG5cbiAgdmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWw7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yIGF0IHRvcCBsZXZlbC4uLmApO1xuXG4gICAgY29uc3QgdGVybVR5cGVWZXJpZmllZCA9IHRoaXMudGVybS52ZXJpZnlUeXBlKGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVHlwZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB0ZXJtVmVyaWZpZWRBdFRvcExldmVsID0gdGhpcy50ZXJtLnZlcmlmeUF0VG9wTGV2ZWwoZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSB0cnVlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IgYXQgdG9wIGxldmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0aGlzLnRlcm0udG9KU09OKCksXG4gICAgICAgICAgdGVybSA9IHRlcm1KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRlcm1cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyB0ZXJtIH0gPSBqc29uO1xuXG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtOyAgLy8vXG5cbiAgICBqc29uID0gdGVybUpTT047ICAvLy9cblxuICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbTtcblxuICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVTdHJpbmd9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiQ29uc3RydWN0b3IiLCJzdHJpbmdGcm9tVGVybUFuZFR5cGUiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInN0cmluZyIsInRlcm0iLCJnZXRTdHJpbmciLCJnZXRUZXJtIiwiZ2V0VHlwZSIsInZlcmlmeUF0VG9wTGV2ZWwiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsImNvbnN0cnVjdG9yU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsInRlcm1WZXJpZmllZEF0VG9wTGV2ZWwiLCJkZWJ1ZyIsInRvSlNPTiIsInRlcm1KU09OIiwianNvbiIsImZyb21KU09OIiwiVGVybSIsInNoaW0iLCJ0eXBlIiwiY29uc3RydWN0b3IiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJUeXBlIiwiZnJvbVR5cGVOb2RlIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsInRlcm1TdHJpbmciLCJ0eXBlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBVXFCQTs7SUFnRkxDLHFCQUFxQjtlQUFyQkE7OzsyREF4RkM7MkRBQ0E7cUJBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLGlDQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpCLElBQUEsQUFBTUgsNEJBQU47YUFBTUEsWUFDUEssTUFBTSxFQUFFQyxJQUFJO2dDQURMTjtRQUVqQixJQUFJLENBQUNLLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUhLTjs7WUFNbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBWSxPQUFPLElBQUksQ0FBQ0gsSUFBSSxDQUFDRyxPQUFPO1lBQUk7OztZQUV4Q0MsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsV0FBVztnQkFDMUIsSUFBSUM7Z0JBRUosSUFBTUMsb0JBQW9CLElBQUksQ0FBQ1IsTUFBTSxFQUFHLEdBQUc7Z0JBRTNDTSxZQUFZRyxLQUFLLENBQUMsQUFBQyxrQkFBbUMsT0FBbEJELG1CQUFrQjtnQkFFdEQsSUFBTUUsbUJBQW1CLElBQUksQ0FBQ1QsSUFBSSxDQUFDVSxVQUFVLENBQUNMO2dCQUU5QyxJQUFJSSxrQkFBa0I7b0JBQ3BCLElBQU1FLHlCQUF5QixJQUFJLENBQUNYLElBQUksQ0FBQ0ksZ0JBQWdCLENBQUNDO29CQUUxRCxJQUFJTSx3QkFBd0I7d0JBQzFCTCxxQkFBcUIsTUFBTSxHQUFHO29CQUNoQztnQkFDRjtnQkFFQSxJQUFJQSxvQkFBb0I7b0JBQ3RCRCxZQUFZTyxLQUFLLENBQUMsQUFBQyxvQkFBcUMsT0FBbEJMLG1CQUFrQjtnQkFDMUQ7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ2QsSUFBSSxDQUFDYSxNQUFNLElBQzNCYixPQUFPYyxVQUNQQyxPQUFPO29CQUNMZixNQUFBQTtnQkFDRjtnQkFFTixPQUFPZTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRVYsV0FBVztnQkFDL0IsSUFBSSxBQUFFTCxPQUFTZSxLQUFUZjtnQkFFTixJQUFNYyxXQUFXZCxNQUFPLEdBQUc7Z0JBRTNCZSxPQUFPRCxVQUFXLEdBQUc7Z0JBRXJCLElBQU0sQUFBRUcsUUFBU0MsYUFBSSxDQUFiRDtnQkFFUmpCLE9BQU9pQixNQUFLRCxRQUFRLENBQUNELE1BQU1WO2dCQUUzQixJQUFNYyxPQUFPbkIsS0FBS0csT0FBTyxJQUNuQkosU0FBU0osc0JBQXNCSyxNQUFNbUIsT0FDckNDLGNBQWMsSUEvREgxQixZQStEbUJLLFFBQVFDO2dCQUU1QyxPQUFPb0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLCtCQUErQkMsMEJBQTBCLEVBQUVqQixXQUFXO2dCQUMzRSxJQUFNa0IsV0FBVzNCLGNBQWMwQiw2QkFDekJFLFdBQVcxQixjQUFjd0IsNkJBQ3pCSCxPQUFPTSxhQUFJLENBQUNDLFlBQVksQ0FBQ0YsV0FDekJ4QixPQUFPaUIsS0FBS1UsbUJBQW1CLENBQUNKLFVBQVVKLE9BQzFDcEIsU0FBU0osc0JBQXNCSyxNQUFNbUIsT0FDckNDLGNBQWMsSUExRUgxQixZQTBFbUJLLFFBQVFDO2dCQUU1QyxPQUFPb0I7WUFDVDs7O1dBN0VtQjFCOztBQWdGZCxTQUFTQyxzQkFBc0JLLElBQUksRUFBRW1CLElBQUk7SUFDOUMsSUFBSXBCO0lBRUosSUFBTTZCLGFBQWE1QixLQUFLQyxTQUFTO0lBRWpDLElBQUlrQixTQUFTLE1BQU07UUFDakJwQixTQUFTLEFBQUMsR0FBYSxPQUFYNkI7SUFDZCxPQUFPO1FBQ0wsSUFBTUMsYUFBYVYsS0FBS2xCLFNBQVM7UUFFakNGLFNBQVMsQUFBQyxHQUFnQjhCLE9BQWRELFlBQVcsS0FBYyxPQUFYQztJQUM1QjtJQUVBLE9BQU85QjtBQUNUIn0=