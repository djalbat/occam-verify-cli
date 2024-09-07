"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTermAsConstructor;
    }
});
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
var _termAsConstructor = /*#__PURE__*/ _interop_require_default(require("../verifier/termAsConstructor"));
var _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyTermAsConstructor(termNode, typeNode, fileContext) {
    var termVerifiedAsConstructor = false;
    var termString = fileContext.nodeAsString(termNode);
    fileContext.debug("Verifying the '".concat(termString, "' term as a constructor..."), termNode);
    var types = [], typeVerified = verifyType(typeNode, types, fileContext);
    var type;
    if (typeVerified) {
        var firstType = (0, _array.first)(types);
        type = firstType; ///
        termVerifiedAsConstructor = _termAsConstructor.default.verify(termNode, fileContext);
    }
    if (termVerifiedAsConstructor) {
        var tokens = fileContext.getTokens(), constructor = _constructor.default.fromTermNodeTypeAndTokens(termNode, type, tokens);
        fileContext.addConstructor(constructor);
    }
    if (termVerifiedAsConstructor) {
        fileContext.debug("...verified the '".concat(termString, "' term as a constructor."), termNode);
    }
    return termVerifiedAsConstructor;
}
function verifyType(typeNode, types, fileContext) {
    var typeVerified = false;
    if (typeNode === null) {
        var type = null;
        types.push(type);
        typeVerified = true;
    } else {
        var type1 = fileContext.findTypeByTypeNode(typeNode);
        if (type1 !== null) {
            types.push(type1);
            typeVerified = true;
        } else {
            var typeString = fileContext.nodeAsString(typeNode);
            fileContext.debug("The '".concat(typeString, "' type is not present."), typeNode);
        }
    }
    return typeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCB0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci90ZXJtQXNDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzQ29uc3RydWN0b3IodGVybU5vZGUsIHR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdmVyaWZ5VHlwZSh0eXBlTm9kZSwgdHlwZXMsIGZpbGVDb250ZXh0KTtcblxuICBsZXQgdHlwZTtcblxuICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpO1xuXG4gICAgdHlwZSA9IGZpcnN0VHlwZTsgLy8vXG5cbiAgICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdGVybUFzQ29uc3RydWN0b3JWZXJpZmllci52ZXJpZnkodGVybU5vZGUsIGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgdG9rZW5zID0gZmlsZUNvbnRleHQuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zKHRlcm1Ob2RlLCB0eXBlLCB0b2tlbnMpO1xuXG4gICAgZmlsZUNvbnRleHQuYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpO1xuICB9XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVR5cGUodHlwZU5vZGUsIHR5cGVzLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZSA9IG51bGw7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICB0eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0eXBlTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJmaWxlQ29udGV4dCIsInRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJ0eXBlcyIsInR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJ0eXBlIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJ0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyIiwidmVyaWZ5IiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZVR5cGVBbmRUb2tlbnMiLCJhZGRDb25zdHJ1Y3RvciIsInB1c2giLCJmaW5kVHlwZUJ5VHlwZU5vZGUiLCJ0eXBlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7O2tFQUxBO3dFQUNjO3FCQUVoQjs7Ozs7O0FBRVAsU0FBU0Esd0JBQXdCQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsV0FBVztJQUM3RSxJQUFJQyw0QkFBNEI7SUFFaEMsSUFBTUMsYUFBYUYsWUFBWUcsWUFBWSxDQUFDTDtJQUU1Q0UsWUFBWUksS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsK0JBQTZCSjtJQUU1RSxJQUFNTyxRQUFRLEVBQUUsRUFDVkMsZUFBZUMsV0FBV1IsVUFBVU0sT0FBT0w7SUFFakQsSUFBSVE7SUFFSixJQUFJRixjQUFjO1FBQ2hCLElBQU1HLFlBQVlDLElBQUFBLFlBQUssRUFBQ0w7UUFFeEJHLE9BQU9DLFdBQVcsR0FBRztRQUVyQlIsNEJBQTRCVSwwQkFBeUIsQ0FBQ0MsTUFBTSxDQUFDZCxVQUFVRTtJQUN6RTtJQUVBLElBQUlDLDJCQUEyQjtRQUM3QixJQUFNWSxTQUFTYixZQUFZYyxTQUFTLElBQzlCQyxjQUFjQyxvQkFBVyxDQUFDQyx5QkFBeUIsQ0FBQ25CLFVBQVVVLE1BQU1LO1FBRTFFYixZQUFZa0IsY0FBYyxDQUFDSDtJQUM3QjtJQUVBLElBQUlkLDJCQUEyQjtRQUM3QkQsWUFBWUksS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhGLFlBQVcsNkJBQTJCSjtJQUM5RTtJQUVBLE9BQU9HO0FBQ1Q7QUFFQSxTQUFTTSxXQUFXUixRQUFRLEVBQUVNLEtBQUssRUFBRUwsV0FBVztJQUM5QyxJQUFJTSxlQUFlO0lBRW5CLElBQUlQLGFBQWEsTUFBTTtRQUNyQixJQUFNUyxPQUFPO1FBRWJILE1BQU1jLElBQUksQ0FBQ1g7UUFFWEYsZUFBZTtJQUNqQixPQUFPO1FBQ0wsSUFBTUUsUUFBT1IsWUFBWW9CLGtCQUFrQixDQUFDckI7UUFFNUMsSUFBSVMsVUFBUyxNQUFNO1lBQ2pCSCxNQUFNYyxJQUFJLENBQUNYO1lBRVhGLGVBQWU7UUFDakIsT0FBTztZQUNMLElBQU1lLGFBQWFyQixZQUFZRyxZQUFZLENBQUNKO1lBRTVDQyxZQUFZSSxLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYaUIsWUFBVywyQkFBeUJ0QjtRQUNoRTtJQUNGO0lBRUEsT0FBT087QUFDVCJ9