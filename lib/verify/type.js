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
function verifyType(typeNode, superTypeNode) {
    var context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    var typeVerified = false;
    context.begin(typeNode);
    var type = null;
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
    if (typePresent) {
        context.error("The type '".concat(typeName, "' is already present."));
    } else {
        var superTypeName = (0, _query.typeNameFromTypeNode)(superTypeNode);
        if (superTypeName === null) {
            type = _type.default.fromTypeName(typeName);
        } else {
            var superType = context.findTypeByTypeName(superTypeName);
            if (superType === null) {
                context.error("The super-type '".concat(superTypeName, "' is missing."));
            } else {
                type = _type.default.fromTypeNameAndSuperType(typeName, superType);
            }
        }
    }
    if (type !== null) {
        var typeString = (0, _string.nodeAsString)(typeNode);
        context.info("Verified the '".concat(typeString, "' type."));
        context.addType(type);
        typeVerified = true;
    }
    typeVerified ? context.complete(typeNode) : context.halt(typeNode);
    return typeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlKHR5cGVOb2RlLCBzdXBlclR5cGVOb2RlLCBjb250ZXh0ID0gdGhpcykge1xuICBsZXQgdHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29udGV4dC5iZWdpbih0eXBlTm9kZSk7XG5cbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICh0eXBlUHJlc2VudCkge1xuICAgIGNvbnRleHQuZXJyb3IoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKTtcblxuICAgIGlmIChzdXBlclR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWUodHlwZU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgc3VwZXItdHlwZSAnJHtzdXBlclR5cGVOYW1lfScgaXMgbWlzc2luZy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSBub2RlQXNTdHJpbmcodHlwZU5vZGUpO1xuXG4gICAgY29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG5cbiAgICBjb250ZXh0LmFkZFR5cGUodHlwZSk7XG5cbiAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgdHlwZVZlcmlmaWVkID9cbiAgICBjb250ZXh0LmNvbXBsZXRlKHR5cGVOb2RlKTpcbiAgICAgIGNvbnRleHQuaGFsdCh0eXBlTm9kZSk7XG5cbiAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlIiwidHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlIiwiY29udGV4dCIsInR5cGVWZXJpZmllZCIsImJlZ2luIiwidHlwZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZXJyb3IiLCJzdXBlclR5cGVOYW1lIiwiVHlwZSIsImZyb21UeXBlTmFtZSIsInN1cGVyVHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImZyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSIsInR5cGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJpbmZvIiwiYWRkVHlwZSIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUF3QkE7Ozt5REFMUDtzQkFFWTtxQkFDUTs7Ozs7O0FBRXRCLFNBQVNBLFdBQVdDLFFBQVEsRUFBRUMsYUFBYSxFQUFrQjtRQUFoQkMsVUFBQUEsaUVBQVUsSUFBSTtJQUN4RSxJQUFJQyxlQUFlLEtBQUs7SUFFeEJELFFBQVFFLEtBQUssQ0FBQ0o7SUFFZCxJQUFJSyxPQUFPLElBQUk7SUFFZixJQUFNQyxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ1AsV0FDaENRLGNBQWNOLFFBQVFPLHVCQUF1QixDQUFDSDtJQUVwRCxJQUFJRSxhQUFhO1FBQ2ZOLFFBQVFRLEtBQUssQ0FBQyxBQUFDLGFBQXFCLE9BQVRKLFVBQVM7SUFDdEMsT0FBTztRQUNMLElBQU1LLGdCQUFnQkosSUFBQUEsMkJBQW9CLEVBQUNOO1FBRTNDLElBQUlVLGtCQUFrQixJQUFJLEVBQUU7WUFDMUJOLE9BQU9PLGFBQUksQ0FBQ0MsWUFBWSxDQUFDUDtRQUMzQixPQUFPO1lBQ0wsSUFBTVEsWUFBWVosUUFBUWEsa0JBQWtCLENBQUNKO1lBRTdDLElBQUlHLGNBQWMsSUFBSSxFQUFFO2dCQUN0QlosUUFBUVEsS0FBSyxDQUFDLEFBQUMsbUJBQWdDLE9BQWRDLGVBQWM7WUFDakQsT0FBTztnQkFDTE4sT0FBT08sYUFBSSxDQUFDSSx3QkFBd0IsQ0FBQ1YsVUFBVVE7WUFDakQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSVQsU0FBUyxJQUFJLEVBQUU7UUFDakIsSUFBTVksYUFBYUMsSUFBQUEsb0JBQVksRUFBQ2xCO1FBRWhDRSxRQUFRaUIsSUFBSSxDQUFDLEFBQUMsaUJBQTJCLE9BQVhGLFlBQVc7UUFFekNmLFFBQVFrQixPQUFPLENBQUNmO1FBRWhCRixlQUFlLElBQUk7SUFDckIsQ0FBQztJQUVEQSxlQUNFRCxRQUFRbUIsUUFBUSxDQUFDckIsWUFDZkUsUUFBUW9CLElBQUksQ0FBQ3RCLFNBQVM7SUFFMUIsT0FBT0c7QUFDVCJ9