"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Constructor;
    }
});
var _type = /*#__PURE__*/ _interop_require_default(require("./type"));
var _term = /*#__PURE__*/ _interop_require_default(require("./term"));
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
            key: "verify",
            value: function verify(fileContext) {
                var verified;
                var constructorString = this.string; ///
                fileContext.trace("Verifying the '".concat(constructorString, "' constructor..."));
                var termTypeVerified = this.term.verifyType(fileContext);
                if (termTypeVerified) {
                    var termVerifiedAsConstructor = this.term.verifyAsConstructor(fileContext);
                    if (termVerifiedAsConstructor) {
                        verified = true; ///
                    }
                }
                if (verified) {
                    fileContext.debug("...verified the '".concat(constructorString, "' constructor."));
                }
                return verified;
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
                term = _term.default.fromJSON(json, fileContext);
                var type = term.getType(), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
                return constructor;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var termNode = termNodeQuery(constructorDeclarationNode), typeNode = typeNodeQuery(constructorDeclarationNode), type = _type.default.fromTypeNode(typeNode), term = _term.default.fromTermNodeAndType(termNode, type, fileContext), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IFRlcm0gZnJvbSBcIi4vdGVybVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb24vdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0VHlwZSgpOyB9XG5cbiAgdmVyaWZ5KGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3QgdGVybVR5cGVWZXJpZmllZCA9IHRoaXMudGVybS52ZXJpZnlUeXBlKGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVHlwZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdGhpcy50ZXJtLnZlcmlmeUFzQ29uc3RydWN0b3IoZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcikge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRoaXMudGVybS50b0pTT04oKSxcbiAgICAgICAgICB0ZXJtID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICAgIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gICAgdGVybSA9IFRlcm0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9YDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9OiR7dHlwZVN0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJDb25zdHJ1Y3RvciIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwic3RyaW5nIiwidGVybSIsImdldFN0cmluZyIsImdldFRlcm0iLCJnZXRUeXBlIiwidmVyaWZ5IiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZCIsImNvbnN0cnVjdG9yU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsInRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IiLCJ2ZXJpZnlBc0NvbnN0cnVjdG9yIiwiZGVidWciLCJ0b0pTT04iLCJ0ZXJtSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIlRlcm0iLCJ0eXBlIiwic3RyaW5nRnJvbVRlcm1BbmRUeXBlIiwiY29uc3RydWN0b3IiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJUeXBlIiwiZnJvbVR5cGVOb2RlIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsInRlcm1TdHJpbmciLCJ0eXBlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyREFSSjsyREFDQTtxQkFFUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsaUNBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakIsSUFBQSxBQUFNRiw0QkFBTjthQUFNQSxZQUNQSSxNQUFNLEVBQUVDLElBQUk7Z0NBRExMO1FBRWpCLElBQUksQ0FBQ0ksTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSEtMOztZQU1uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDSCxJQUFJLENBQUNHLE9BQU87WUFBSTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVztnQkFDaEIsSUFBSUM7Z0JBRUosSUFBTUMsb0JBQW9CLElBQUksQ0FBQ1IsTUFBTSxFQUFHLEdBQUc7Z0JBRTNDTSxZQUFZRyxLQUFLLENBQUMsQUFBQyxrQkFBbUMsT0FBbEJELG1CQUFrQjtnQkFFdEQsSUFBTUUsbUJBQW1CLElBQUksQ0FBQ1QsSUFBSSxDQUFDVSxVQUFVLENBQUNMO2dCQUU5QyxJQUFJSSxrQkFBa0I7b0JBQ3BCLElBQU1FLDRCQUE0QixJQUFJLENBQUNYLElBQUksQ0FBQ1ksbUJBQW1CLENBQUNQO29CQUVoRSxJQUFJTSwyQkFBMkI7d0JBQzdCTCxXQUFXLE1BQU0sR0FBRztvQkFDdEI7Z0JBQ0Y7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWkQsWUFBWVEsS0FBSyxDQUFDLEFBQUMsb0JBQXFDLE9BQWxCTixtQkFBa0I7Z0JBQzFEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNmLElBQUksQ0FBQ2MsTUFBTSxJQUMzQmQsT0FBT2UsVUFDUEMsT0FBTztvQkFDTGhCLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9nQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRVgsV0FBVztnQkFDL0IsSUFBSSxBQUFFTCxPQUFTZ0IsS0FBVGhCO2dCQUVOLElBQU1lLFdBQVdmLE1BQU8sR0FBRztnQkFFM0JnQixPQUFPRCxVQUFXLEdBQUc7Z0JBRXJCZixPQUFPa0IsYUFBSSxDQUFDRCxRQUFRLENBQUNELE1BQU1YO2dCQUUzQixJQUFNYyxPQUFPbkIsS0FBS0csT0FBTyxJQUNuQkosU0FBU3FCLHNCQUFzQnBCLE1BQU1tQixPQUNyQ0UsY0FBYyxJQTdESDFCLFlBNkRtQkksUUFBUUM7Z0JBRTVDLE9BQU9xQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCQywwQkFBMEIsRUFBRWxCLFdBQVc7Z0JBQzNFLElBQU1tQixXQUFXNUIsY0FBYzJCLDZCQUN6QkUsV0FBVzNCLGNBQWN5Qiw2QkFDekJKLE9BQU9PLGFBQUksQ0FBQ0MsWUFBWSxDQUFDRixXQUN6QnpCLE9BQU9rQixhQUFJLENBQUNVLG1CQUFtQixDQUFDSixVQUFVTCxNQUFNZCxjQUNoRE4sU0FBU3FCLHNCQUFzQnBCLE1BQU1tQixPQUNyQ0UsY0FBYyxJQXhFSDFCLFlBd0VtQkksUUFBUUM7Z0JBRTVDLE9BQU9xQjtZQUNUOzs7V0EzRW1CMUI7O0FBOEVyQixTQUFTeUIsc0JBQXNCcEIsSUFBSSxFQUFFbUIsSUFBSTtJQUN2QyxJQUFJcEI7SUFFSixJQUFNOEIsYUFBYTdCLEtBQUtDLFNBQVM7SUFFakMsSUFBSWtCLFNBQVMsTUFBTTtRQUNqQnBCLFNBQVMsQUFBQyxHQUFhLE9BQVg4QjtJQUNkLE9BQU87UUFDTCxJQUFNQyxhQUFhWCxLQUFLbEIsU0FBUztRQUVqQ0YsU0FBUyxBQUFDLEdBQWdCK0IsT0FBZEQsWUFBVyxLQUFjLE9BQVhDO0lBQzVCO0lBRUEsT0FBTy9CO0FBQ1QifQ==