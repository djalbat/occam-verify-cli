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
        return verifyType;
    },
    verifyStandaloneType: function() {
        return verifyStandaloneType;
    }
});
var _type = /*#__PURE__*/ _interop_require_default(require("../type"));
var _name = require("../utilities/name");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyType(typeNode, superTypeNode, fileContext) {
    var typeVerified = false;
    var typeString = fileContext.nodeAsString(typeNode);
    fileContext.trace("Verifying the '".concat(typeString, "' type..."), typeNode);
    var typePresent = fileContext.isTypePresentByTypeNode(typeNode);
    if (typePresent) {
        var typeString1 = fileContext.nodeAsString(typeNode);
        fileContext.debug("The type '".concat(typeString1, "' is already present."), typeNode);
    } else {
        var type;
        var typeName = (0, _name.typeNameFromTypeNode)(typeNode);
        if (superTypeNode === null) {
            type = _type.default.fromTypeName(typeName);
        } else {
            var superType = fileContext.findTypeByTypeNode(superTypeNode);
            if (superType === null) {
                var superTypeString = fileContext.nodeAsString(superTypeNode);
                fileContext.debug("The super-type '".concat(superTypeString, "' is not present."), typeNode);
            } else {
                type = _type.default.fromTypeNameAndSuperType(typeName, superType);
            }
        }
        if (type !== null) {
            fileContext.addType(type);
            typeVerified = true;
        }
    }
    if (typeVerified) {
        fileContext.debug("...verified the '".concat(typeString, "' type."), typeNode);
    }
    return typeVerified;
}
function verifyStandaloneType(typeNode, localContext, verifyAhead) {
    var standaloneTypeVerified = false;
    var typeString = localContext.nodeAsString(typeNode);
    localContext.trace("Verifying the '".concat(typeString, "' standalone type..."), typeNode);
    var typePresent = localContext.isTypePresentByTypeNode(typeNode);
    if (typePresent) {
        var verifiedAhead = verifyAhead();
        standaloneTypeVerified = verifiedAhead; ///
    }
    if (standaloneTypeVerified) {
        localContext.debug("...verified the '".concat(typeString, "' standalone type."), typeNode);
    }
    return standaloneTypeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VHlwZSh0eXBlTm9kZSwgc3VwZXJUeXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCwgdHlwZU5vZGUpO1xuXG4gIGNvbnN0IHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gIGlmICh0eXBlUHJlc2VudCkge1xuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpO1xuXG4gICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSB0eXBlICcke3R5cGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCwgdHlwZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOYW1lKHR5cGVOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOb2RlKHN1cGVyVHlwZU5vZGUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhzdXBlclR5cGVOb2RlKTtcblxuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHN1cGVyLXR5cGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgaXMgbm90IHByZXNlbnQuYCwgdHlwZU5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICBmaWxlQ29udGV4dC5hZGRUeXBlKHR5cGUpO1xuXG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmAsIHR5cGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlVmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGFuZGFsb25lVHlwZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhbmRhbG9uZVR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHN0YW5kYWxvbmUgdHlwZS4uLmAsIHR5cGVOb2RlKTtcblxuICBjb25zdCB0eXBlUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICBzdGFuZGFsb25lVHlwZVZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gIH1cblxuICBpZiAoc3RhbmRhbG9uZVR5cGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyBzdGFuZGFsb25lIHR5cGUuYCwgdHlwZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YW5kYWxvbmVUeXBlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZSIsInZlcmlmeVN0YW5kYWxvbmVUeXBlIiwidHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0eXBlVmVyaWZpZWQiLCJ0eXBlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOb2RlIiwiZGVidWciLCJ0eXBlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsIlR5cGUiLCJmcm9tVHlwZU5hbWUiLCJzdXBlclR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiLCJzdXBlclR5cGVTdHJpbmciLCJmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUiLCJhZGRUeXBlIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJzdGFuZGFsb25lVHlwZVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTUEsT0E0Q0M7ZUE1Q3VCQTs7SUE4Q1JDLG9CQUFvQjtlQUFwQkE7OzsyREFsREM7b0JBRW9COzs7Ozs7QUFFdEIsU0FBU0QsV0FBV0UsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7SUFDckUsSUFBSUMsZUFBZTtJQUVuQixJQUFNQyxhQUFhRixZQUFZRyxZQUFZLENBQUNMO0lBRTVDRSxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyxjQUFZSjtJQUUzRCxJQUFNTyxjQUFjTCxZQUFZTSx1QkFBdUIsQ0FBQ1I7SUFFeEQsSUFBSU8sYUFBYTtRQUNmLElBQU1ILGNBQWFGLFlBQVlHLFlBQVksQ0FBQ0w7UUFFNUNFLFlBQVlPLEtBQUssQ0FBQyxBQUFDLGFBQXVCLE9BQVhMLGFBQVcsMEJBQXdCSjtJQUNwRSxPQUFPO1FBQ0wsSUFBSVU7UUFFSixJQUFNQyxXQUFXQyxJQUFBQSwwQkFBb0IsRUFBQ1o7UUFFdEMsSUFBSUMsa0JBQWtCLE1BQU07WUFDMUJTLE9BQU9HLGFBQUksQ0FBQ0MsWUFBWSxDQUFDSDtRQUMzQixPQUFPO1lBQ0wsSUFBTUksWUFBWWIsWUFBWWMsa0JBQWtCLENBQUNmO1lBRWpELElBQUljLGNBQWMsTUFBTTtnQkFDdEIsSUFBTUUsa0JBQWtCZixZQUFZRyxZQUFZLENBQUNKO2dCQUVqREMsWUFBWU8sS0FBSyxDQUFDLEFBQUMsbUJBQWtDLE9BQWhCUSxpQkFBZ0Isc0JBQW9CakI7WUFDM0UsT0FBTztnQkFDTFUsT0FBT0csYUFBSSxDQUFDSyx3QkFBd0IsQ0FBQ1AsVUFBVUk7WUFDakQ7UUFDRjtRQUVBLElBQUlMLFNBQVMsTUFBTTtZQUNqQlIsWUFBWWlCLE9BQU8sQ0FBQ1Q7WUFFcEJQLGVBQWU7UUFDakI7SUFDRjtJQUVBLElBQUlBLGNBQWM7UUFDaEJELFlBQVlPLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYTCxZQUFXLFlBQVVKO0lBQzdEO0lBRUEsT0FBT0c7QUFDVDtBQUVPLFNBQVNKLHFCQUFxQkMsUUFBUSxFQUFFb0IsWUFBWSxFQUFFQyxXQUFXO0lBQ3RFLElBQUlDLHlCQUF5QjtJQUU3QixJQUFNbEIsYUFBYWdCLGFBQWFmLFlBQVksQ0FBQ0w7SUFFN0NvQixhQUFhZCxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyx5QkFBdUJKO0lBRXZFLElBQU1PLGNBQWNhLGFBQWFaLHVCQUF1QixDQUFDUjtJQUV6RCxJQUFJTyxhQUFhO1FBQ2YsSUFBTWdCLGdCQUFnQkY7UUFFdEJDLHlCQUF5QkMsZUFBZSxHQUFHO0lBQzdDO0lBRUEsSUFBSUQsd0JBQXdCO1FBQzFCRixhQUFhWCxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWEwsWUFBVyx1QkFBcUJKO0lBQ3pFO0lBRUEsT0FBT3NCO0FBQ1QifQ==