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
var _necessary = require("necessary");
var _type = /*#__PURE__*/ _interopRequireDefault(require("../type"));
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var log = _necessary.loggingUtilities.log;
function verifyType(typeNode, superTypeNode, context) {
    var typeVerified = false;
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
    if (typePresent) {
        log.error("The type '".concat(typeName, "' is already present."));
    } else {
        var superTypeName = (0, _query.typeNameFromTypeNode)(superTypeNode);
        if (superTypeName === null) {
            var type = _type.default.fromTypeName(typeName), typeString = type.asString();
            context.addType(type);
            typeVerified = true;
            log.info("Verified the '".concat(typeString, "' type."));
        } else {
            var superType = context.findTypeByTypeName(superTypeName);
            if (superType === null) {
                log.error("The super-type '".concat(superTypeName, "' is missing."));
            } else {
                var type1 = _type.default.fromTypeNameAndSuperType(typeName, superType), typeString1 = type1.asString();
                context.addType(type1);
                typeVerified = true;
                log.info("Verified the '".concat(typeString1, "' type."));
            }
        }
    }
    return typeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbG9nZ2luZ1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgbG9nIH0gPSBsb2dnaW5nVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlKHR5cGVOb2RlLCBzdXBlclR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICBsb2cuZXJyb3IoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKTtcblxuICAgIGlmIChzdXBlclR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuYXNTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5hZGRUeXBlKHR5cGUpO1xuXG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgICBsb2cuaW5mbyhgVmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBsb2cuZXJyb3IoYFRoZSBzdXBlci10eXBlICcke3N1cGVyVHlwZU5hbWV9JyBpcyBtaXNzaW5nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IFR5cGUuZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpLFxuICAgICAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZS5hc1N0cmluZygpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkVHlwZSh0eXBlKTtcblxuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgICAgIGxvZy5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbn1cblxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGUiLCJsb2ciLCJsb2dnaW5nVXRpbGl0aWVzIiwidHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlIiwiY29udGV4dCIsInR5cGVWZXJpZmllZCIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZXJyb3IiLCJzdXBlclR5cGVOYW1lIiwidHlwZSIsIlR5cGUiLCJmcm9tVHlwZU5hbWUiLCJ0eXBlU3RyaW5nIiwiYXNTdHJpbmciLCJhZGRUeXBlIiwiaW5mbyIsInN1cGVyVHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImZyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7Ozt5QkFSUzt5REFFaEI7cUJBRW9COzs7Ozs7QUFFckMsSUFBTSxBQUFFQyxNQUFRQywyQkFBZ0IsQ0FBeEJEO0FBRU8sU0FBU0QsV0FBV0csUUFBUSxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRTtJQUNuRSxJQUFJQyxlQUFlLEtBQUs7SUFFeEIsSUFBTUMsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNMLFdBQ2hDTSxjQUFjSixRQUFRSyx1QkFBdUIsQ0FBQ0g7SUFFcEQsSUFBSUUsYUFBYTtRQUNmUixJQUFJVSxLQUFLLENBQUMsQUFBQyxhQUFxQixPQUFUSixVQUFTO0lBQ2xDLE9BQU87UUFDTCxJQUFNSyxnQkFBZ0JKLElBQUFBLDJCQUFvQixFQUFDSjtRQUUzQyxJQUFJUSxrQkFBa0IsSUFBSSxFQUFFO1lBQzFCLElBQU1DLE9BQU9DLGFBQUksQ0FBQ0MsWUFBWSxDQUFDUixXQUN6QlMsYUFBYUgsS0FBS0ksUUFBUTtZQUVoQ1osUUFBUWEsT0FBTyxDQUFDTDtZQUVoQlAsZUFBZSxJQUFJO1lBRW5CTCxJQUFJa0IsSUFBSSxDQUFDLEFBQUMsaUJBQTJCLE9BQVhILFlBQVc7UUFDdkMsT0FBTztZQUNMLElBQU1JLFlBQVlmLFFBQVFnQixrQkFBa0IsQ0FBQ1Q7WUFFN0MsSUFBSVEsY0FBYyxJQUFJLEVBQUU7Z0JBQ3RCbkIsSUFBSVUsS0FBSyxDQUFDLEFBQUMsbUJBQWdDLE9BQWRDLGVBQWM7WUFDN0MsT0FBTztnQkFDTCxJQUFNQyxRQUFPQyxhQUFJLENBQUNRLHdCQUF3QixDQUFDZixVQUFVYSxZQUMvQ0osY0FBYUgsTUFBS0ksUUFBUTtnQkFFaENaLFFBQVFhLE9BQU8sQ0FBQ0w7Z0JBRWhCUCxlQUFlLElBQUk7Z0JBRW5CTCxJQUFJa0IsSUFBSSxDQUFDLEFBQUMsaUJBQTJCLE9BQVhILGFBQVc7WUFDdkMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT1Y7QUFDVCJ9