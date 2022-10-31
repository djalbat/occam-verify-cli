"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyType;
    }
});
var _type = /*#__PURE__*/ _interopRequireDefault(require("../type"));
var _string = require("../utilities/string");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyType(typeNode, superTypeNode, fileContext) {
    var typeVerified = false;
    fileContext.begin(typeNode);
    var type = null;
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
    if (typePresent) {
        fileContext.error("The type '".concat(typeName, "' is already present."));
    } else {
        var superTypeName = (0, _query.typeNameFromTypeNode)(superTypeNode);
        if (superTypeName === null) {
            type = _type.default.fromTypeName(typeName);
        } else {
            var superType = fileContext.findTypeByTypeName(superTypeName);
            if (superType === null) {
                fileContext.error("The super-type '".concat(superTypeName, "' is missing."));
            } else {
                type = _type.default.fromTypeNameAndSuperType(typeName, superType);
            }
        }
    }
    if (type !== null) {
        var typeString = (0, _string.nodeAsString)(typeNode);
        fileContext.info("Verified the '".concat(typeString, "' type."));
        fileContext.addType(type);
        typeVerified = true;
    }
    typeVerified ? fileContext.complete(typeNode) : fileContext.halt(typeNode);
    return typeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlKHR5cGVOb2RlLCBzdXBlclR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgZmlsZUNvbnRleHQuYmVnaW4odHlwZU5vZGUpO1xuXG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKTtcblxuICAgIGlmIChzdXBlclR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWUodHlwZU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSBzdXBlci10eXBlICcke3N1cGVyVHlwZU5hbWV9JyBpcyBtaXNzaW5nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZVN0cmluZyA9IG5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG5cbiAgICBmaWxlQ29udGV4dC5hZGRUeXBlKHR5cGUpO1xuXG4gICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHR5cGVWZXJpZmllZCA/XG4gICAgZmlsZUNvbnRleHQuY29tcGxldGUodHlwZU5vZGUpOlxuICAgICAgZmlsZUNvbnRleHQuaGFsdCh0eXBlTm9kZSk7XG5cbiAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlIiwidHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0eXBlVmVyaWZpZWQiLCJiZWdpbiIsInR5cGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImVycm9yIiwic3VwZXJUeXBlTmFtZSIsIlR5cGUiLCJmcm9tVHlwZU5hbWUiLCJzdXBlclR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUiLCJ0eXBlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiaW5mbyIsImFkZFR5cGUiLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7eURBTFA7c0JBRVk7cUJBQ1E7Ozs7OztBQUV0QixTQUFTQSxXQUFXQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFO0lBQ3ZFLElBQUlDLGVBQWUsS0FBSztJQUV4QkQsWUFBWUUsS0FBSyxDQUFDSjtJQUVsQixJQUFJSyxPQUFPLElBQUk7SUFFZixJQUFNQyxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ1AsV0FDaENRLGNBQWNOLFlBQVlPLHVCQUF1QixDQUFDSDtJQUV4RCxJQUFJRSxhQUFhO1FBQ2ZOLFlBQVlRLEtBQUssQ0FBQyxBQUFDLGFBQXFCLE9BQVRKLFVBQVM7SUFDMUMsT0FBTztRQUNMLElBQU1LLGdCQUFnQkosSUFBQUEsMkJBQW9CLEVBQUNOO1FBRTNDLElBQUlVLGtCQUFrQixJQUFJLEVBQUU7WUFDMUJOLE9BQU9PLGFBQUksQ0FBQ0MsWUFBWSxDQUFDUDtRQUMzQixPQUFPO1lBQ0wsSUFBTVEsWUFBWVosWUFBWWEsa0JBQWtCLENBQUNKO1lBRWpELElBQUlHLGNBQWMsSUFBSSxFQUFFO2dCQUN0QlosWUFBWVEsS0FBSyxDQUFDLEFBQUMsbUJBQWdDLE9BQWRDLGVBQWM7WUFDckQsT0FBTztnQkFDTE4sT0FBT08sYUFBSSxDQUFDSSx3QkFBd0IsQ0FBQ1YsVUFBVVE7WUFDakQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSVQsU0FBUyxJQUFJLEVBQUU7UUFDakIsSUFBTVksYUFBYUMsSUFBQUEsb0JBQVksRUFBQ2xCO1FBRWhDRSxZQUFZaUIsSUFBSSxDQUFDLEFBQUMsaUJBQTJCLE9BQVhGLFlBQVc7UUFFN0NmLFlBQVlrQixPQUFPLENBQUNmO1FBRXBCRixlQUFlLElBQUk7SUFDckIsQ0FBQztJQUVEQSxlQUNFRCxZQUFZbUIsUUFBUSxDQUFDckIsWUFDbkJFLFlBQVlvQixJQUFJLENBQUN0QixTQUFTO0lBRTlCLE9BQU9HO0FBQ1QifQ==