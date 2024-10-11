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
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
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
                var Term = _shim.default.Term, Type = _shim.default.Type, termNode = termNodeQuery(constructorDeclarationNode), typeNode = typeNodeQuery(constructorDeclarationNode), type = Type.fromTypeNode(typeNode), localContext = _local.default.fromFileContext(fileContext), term = Term.fromTermNodeAndType(termNode, type, localContext), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb24vdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvbi90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdHJ1Y3RvciB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMudGVybS5nZXRUeXBlKCk7IH1cblxuICB2ZXJpZnlBdFRvcExldmVsKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IgYXQgdG9wIGxldmVsLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZWRBdFRvcExldmVsID0gdGhpcy50ZXJtLnZlcmlmeUF0VG9wTGV2ZWwoZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHRydWU7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvciBhdCB0b3AgbGV2ZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRoaXMudGVybS50b0pTT04oKSxcbiAgICAgICAgICB0ZXJtID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICAgIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBUZXJtIH0gPSBzaGltO1xuXG4gICAgdGVybSA9IFRlcm0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFRlcm0sIFR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9YDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ306JHt0eXBlTmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJDb25zdHJ1Y3RvciIsInN0cmluZ0Zyb21UZXJtQW5kVHlwZSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwic3RyaW5nIiwidGVybSIsImdldFN0cmluZyIsImdldFRlcm0iLCJnZXRUeXBlIiwidmVyaWZ5QXRUb3BMZXZlbCIsImZpbGVDb250ZXh0IiwidmVyaWZpZWRBdFRvcExldmVsIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllZEF0VG9wTGV2ZWwiLCJkZWJ1ZyIsInRvSlNPTiIsInRlcm1KU09OIiwianNvbiIsImZyb21KU09OIiwiVGVybSIsInNoaW0iLCJ0eXBlIiwiY29uc3RydWN0b3IiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwiZnJvbVR5cGVOb2RlIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsInRlcm1TdHJpbmciLCJ0eXBlTmFtZSIsImdldE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFVcUJBOztJQThFTEMscUJBQXFCO2VBQXJCQTs7OzJEQXRGQzs0REFDUTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsaUNBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakIsSUFBQSxBQUFNSCw0QkFBTjthQUFNQSxZQUNQSyxNQUFNLEVBQUVDLElBQUk7Z0NBRExOO1FBRWpCLElBQUksQ0FBQ0ssTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSEtOOztZQU1uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDSCxJQUFJLENBQUNHLE9BQU87WUFBSTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxXQUFXO2dCQUMxQixJQUFJQztnQkFFSixJQUFNQyxvQkFBb0IsSUFBSSxDQUFDUixNQUFNLEVBQUcsR0FBRztnQkFFM0NNLFlBQVlHLEtBQUssQ0FBQyxBQUFDLGtCQUFtQyxPQUFsQkQsbUJBQWtCO2dCQUV0RCxJQUFNRSx5QkFBeUIsSUFBSSxDQUFDVCxJQUFJLENBQUNJLGdCQUFnQixDQUFDQztnQkFFMUQsSUFBSUksd0JBQXdCO29CQUMxQkgscUJBQXFCLE1BQU0sR0FBRztnQkFDaEM7Z0JBRUEsSUFBSUEsb0JBQW9CO29CQUN0QkQsWUFBWUssS0FBSyxDQUFDLEFBQUMsb0JBQXFDLE9BQWxCSCxtQkFBa0I7Z0JBQzFEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNaLElBQUksQ0FBQ1csTUFBTSxJQUMzQlgsT0FBT1ksVUFDUEMsT0FBTztvQkFDTGIsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2E7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVSLFdBQVc7Z0JBQy9CLElBQUksQUFBRUwsT0FBU2EsS0FBVGI7Z0JBRU4sSUFBTVksV0FBV1osTUFBTyxHQUFHO2dCQUUzQmEsT0FBT0QsVUFBVyxHQUFHO2dCQUVyQixJQUFNLEFBQUVHLE9BQVNDLGFBQUksQ0FBYkQ7Z0JBRVJmLE9BQU9lLEtBQUtELFFBQVEsQ0FBQ0QsTUFBTVI7Z0JBRTNCLElBQU1ZLE9BQU9qQixLQUFLRyxPQUFPLElBQ25CSixTQUFTSixzQkFBc0JLLE1BQU1pQixPQUNyQ0MsY0FBYyxJQTNESHhCLFlBMkRtQkssUUFBUUM7Z0JBRTVDLE9BQU9rQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCQywwQkFBMEIsRUFBRWYsV0FBVztnQkFDM0UsSUFBUVUsT0FBZUMsYUFBSSxDQUFuQkQsTUFBTU0sT0FBU0wsYUFBSSxDQUFiSyxNQUNSQyxXQUFXMUIsY0FBY3dCLDZCQUN6QkcsV0FBV3pCLGNBQWNzQiw2QkFDekJILE9BQU9JLEtBQUtHLFlBQVksQ0FBQ0QsV0FDekJFLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDdEIsY0FDNUNMLE9BQU9lLEtBQUthLG1CQUFtQixDQUFDTixVQUFVTCxNQUFNUSxlQUNoRDFCLFNBQVNKLHNCQUFzQkssTUFBTWlCLE9BQ3JDQyxjQUFjLElBeEVIeEIsWUF3RW1CSyxRQUFRQztnQkFFNUMsT0FBT2tCO1lBQ1Q7OztXQTNFbUJ4Qjs7QUE4RWQsU0FBU0Msc0JBQXNCSyxJQUFJLEVBQUVpQixJQUFJO0lBQzlDLElBQUlsQjtJQUVKLElBQU04QixhQUFhN0IsS0FBS0MsU0FBUztJQUVqQyxJQUFJZ0IsU0FBUyxNQUFNO1FBQ2pCbEIsU0FBUyxBQUFDLEdBQWEsT0FBWDhCO0lBQ2QsT0FBTztRQUNMLElBQU1DLFdBQVdiLEtBQUtjLE9BQU87UUFFN0JoQyxTQUFTLEFBQUMsR0FBZ0IrQixPQUFkRCxZQUFXLEtBQVksT0FBVEM7SUFDNUI7SUFFQSxPQUFPL0I7QUFDVCJ9