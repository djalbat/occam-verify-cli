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
                var Term = _shim.default.Term, Type = _shim.default.Type, termNode = termNodeQuery(constructorDeclarationNode), typeNode = typeNodeQuery(constructorDeclarationNode), type = Type.fromTypeNode(typeNode), localContext = _local.default.fromFileContext(fileContext), term = Term.fromTermNodeAndType(termNode, type, localContext), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdGVybUZyb21KU09OLCB0ZXJtVG9UZXJtSlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvbi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3R5cGVcIik7XG5cbmNsYXNzIENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy50ZXJtLmdldFR5cGUoKTsgfVxuXG4gIHZlcmlmeUF0VG9wTGV2ZWwoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvciBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WZXJpZmllZEF0VG9wTGV2ZWwgPSB0aGlzLnRlcm0udmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yIGF0IHRvcCBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1KU09OID0gdGVybVRvVGVybUpTT04odGhpcy50ZXJtKSxcbiAgICAgICAgICB0ZXJtID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUZXJtLCBUeXBlIH0gPSBzaGltLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIENvbnN0cnVjdG9yXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uc3RydWN0b3I7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ31gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVOYW1lfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInN0cmluZ0Zyb21UZXJtQW5kVHlwZSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiQ29uc3RydWN0b3IiLCJzdHJpbmciLCJ0ZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0VGVybSIsImdldFR5cGUiLCJ2ZXJpZnlBdFRvcExldmVsIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJjb25zdHJ1Y3RvclN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVkQXRUb3BMZXZlbCIsImRlYnVnIiwidG9KU09OIiwidGVybUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1Gcm9tSlNPTiIsInR5cGUiLCJjb25zdHJ1Y3RvciIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiVGVybSIsInNoaW0iLCJUeXBlIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsImZyb21UeXBlTm9kZSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXJtU3RyaW5nIiwidHlwZU5hbWUiLCJnZXROYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFvRkEsT0FBMkI7ZUFBM0I7O0lBRWdCQSxxQkFBcUI7ZUFBckJBOzs7MkRBcEZDOzREQUNRO3FCQUVDO29CQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsaUNBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNRSw0QkFBTjthQUFNQSxZQUNRQyxNQUFNLEVBQUVDLElBQUk7Z0NBRHBCRjtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSFZGOztZQU1KRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVksT0FBTyxJQUFJLENBQUNILElBQUksQ0FBQ0csT0FBTztZQUFJOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFdBQVc7Z0JBQzFCLElBQUlDO2dCQUVKLElBQU1DLG9CQUFvQixJQUFJLENBQUNSLE1BQU0sRUFBRyxHQUFHO2dCQUUzQ00sWUFBWUcsS0FBSyxDQUFDLEFBQUMsa0JBQW1DLE9BQWxCRCxtQkFBa0I7Z0JBRXRELElBQU1FLHlCQUF5QixJQUFJLENBQUNULElBQUksQ0FBQ0ksZ0JBQWdCLENBQUNDO2dCQUUxRCxJQUFJSSx3QkFBd0I7b0JBQzFCSCxxQkFBcUIsTUFBTSxHQUFHO2dCQUNoQztnQkFFQSxJQUFJQSxvQkFBb0I7b0JBQ3RCRCxZQUFZSyxLQUFLLENBQUMsQUFBQyxvQkFBcUMsT0FBbEJILG1CQUFrQjtnQkFDMUQ7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyxJQUFBQSxvQkFBYyxFQUFDLElBQUksQ0FBQ2IsSUFBSSxHQUNuQ0EsT0FBT1ksVUFDUEUsT0FBTztvQkFDTGQsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVULFdBQVc7Z0JBQy9CLElBQU1MLE9BQU9nQixJQUFBQSxrQkFBWSxFQUFDRixNQUFNVCxjQUMxQlksT0FBT2pCLEtBQUtHLE9BQU8sSUFDbkJKLFNBQVNMLHNCQUFzQk0sTUFBTWlCLE9BQ3JDQyxjQUFjLElBbERsQnBCLFlBa0RrQ0MsUUFBUUM7Z0JBRTVDLE9BQU9rQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCQywwQkFBMEIsRUFBRWYsV0FBVztnQkFDM0UsSUFBUWdCLE9BQWVDLGFBQUksQ0FBbkJELE1BQU1FLE9BQVNELGFBQUksQ0FBYkMsTUFDUkMsV0FBVzdCLGNBQWN5Qiw2QkFDekJLLFdBQVc1QixjQUFjdUIsNkJBQ3pCSCxPQUFPTSxLQUFLRyxZQUFZLENBQUNELFdBQ3pCRSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ3hCLGNBQzVDTCxPQUFPcUIsS0FBS1MsbUJBQW1CLENBQUNOLFVBQVVQLE1BQU1VLGVBQ2hENUIsU0FBU0wsc0JBQXNCTSxNQUFNaUIsT0FDckNDLGNBQWMsSUEvRGxCcEIsWUErRGtDQyxRQUFRQztnQkFFNUMsT0FBT2tCO1lBQ1Q7OztXQWxFSXBCOztBQXFFTmlDLE9BQU9DLE1BQU0sQ0FBQ1YsYUFBSSxFQUFFO0lBQ2xCeEIsYUFBQUE7QUFDRjtJQUVBLFdBQWVBO0FBRVIsU0FBU0osc0JBQXNCTSxJQUFJLEVBQUVpQixJQUFJO0lBQzlDLElBQUlsQjtJQUVKLElBQU1rQyxhQUFhakMsS0FBS0MsU0FBUztJQUVqQyxJQUFJZ0IsU0FBUyxNQUFNO1FBQ2pCbEIsU0FBUyxBQUFDLEdBQWEsT0FBWGtDO0lBQ2QsT0FBTztRQUNMLElBQU1DLFdBQVdqQixLQUFLa0IsT0FBTztRQUU3QnBDLFNBQVMsQUFBQyxHQUFnQm1DLE9BQWRELFlBQVcsS0FBWSxPQUFUQztJQUM1QjtJQUVBLE9BQU9uQztBQUNUIn0=