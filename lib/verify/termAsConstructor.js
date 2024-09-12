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
        termVerifiedAsConstructor = _termAsConstructor.default.verifyTerm(termNode, fileContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCB0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci90ZXJtQXNDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzQ29uc3RydWN0b3IodGVybU5vZGUsIHR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdmVyaWZ5VHlwZSh0eXBlTm9kZSwgdHlwZXMsIGZpbGVDb250ZXh0KTtcblxuICBsZXQgdHlwZTtcblxuICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpO1xuXG4gICAgdHlwZSA9IGZpcnN0VHlwZTsgLy8vXG5cbiAgICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdGVybUFzQ29uc3RydWN0b3JWZXJpZmllci52ZXJpZnlUZXJtKHRlcm1Ob2RlLCBmaWxlQ29udGV4dCk7XG4gIH1cblxuICBpZiAodGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcikge1xuICAgIGNvbnN0IHRva2VucyA9IGZpbGVDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbVRlcm1Ob2RlVHlwZUFuZFRva2Vucyh0ZXJtTm9kZSwgdHlwZSwgdG9rZW5zKTtcblxuICAgIGZpbGVDb250ZXh0LmFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUeXBlKHR5cGVOb2RlLCB0eXBlcywgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gICAgdHlwZXMucHVzaCh0eXBlKTtcblxuICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZXMucHVzaCh0eXBlKTtcblxuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGVybUFzQ29uc3RydWN0b3IiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwidHlwZXMiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwidHlwZSIsImZpcnN0VHlwZSIsImZpcnN0IiwidGVybUFzQ29uc3RydWN0b3JWZXJpZmllciIsInZlcmlmeVRlcm0iLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJjb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIiwiZnJvbVRlcm1Ob2RlVHlwZUFuZFRva2VucyIsImFkZENvbnN0cnVjdG9yIiwicHVzaCIsImZpbmRUeXBlQnlUeXBlTm9kZSIsInR5cGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7a0VBTEE7d0VBQ2M7cUJBRWhCOzs7Ozs7QUFFUCxTQUFTQSx3QkFBd0JDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxXQUFXO0lBQzdFLElBQUlDLDRCQUE0QjtJQUVoQyxJQUFNQyxhQUFhRixZQUFZRyxZQUFZLENBQUNMO0lBRTVDRSxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVywrQkFBNkJKO0lBRTVFLElBQU1PLFFBQVEsRUFBRSxFQUNWQyxlQUFlQyxXQUFXUixVQUFVTSxPQUFPTDtJQUVqRCxJQUFJUTtJQUVKLElBQUlGLGNBQWM7UUFDaEIsSUFBTUcsWUFBWUMsSUFBQUEsWUFBSyxFQUFDTDtRQUV4QkcsT0FBT0MsV0FBVyxHQUFHO1FBRXJCUiw0QkFBNEJVLDBCQUF5QixDQUFDQyxVQUFVLENBQUNkLFVBQVVFO0lBQzdFO0lBRUEsSUFBSUMsMkJBQTJCO1FBQzdCLElBQU1ZLFNBQVNiLFlBQVljLFNBQVMsSUFDOUJDLGNBQWNDLG9CQUFXLENBQUNDLHlCQUF5QixDQUFDbkIsVUFBVVUsTUFBTUs7UUFFMUViLFlBQVlrQixjQUFjLENBQUNIO0lBQzdCO0lBRUEsSUFBSWQsMkJBQTJCO1FBQzdCRCxZQUFZSSxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWEYsWUFBVyw2QkFBMkJKO0lBQzlFO0lBRUEsT0FBT0c7QUFDVDtBQUVBLFNBQVNNLFdBQVdSLFFBQVEsRUFBRU0sS0FBSyxFQUFFTCxXQUFXO0lBQzlDLElBQUlNLGVBQWU7SUFFbkIsSUFBSVAsYUFBYSxNQUFNO1FBQ3JCLElBQU1TLE9BQU87UUFFYkgsTUFBTWMsSUFBSSxDQUFDWDtRQUVYRixlQUFlO0lBQ2pCLE9BQU87UUFDTCxJQUFNRSxRQUFPUixZQUFZb0Isa0JBQWtCLENBQUNyQjtRQUU1QyxJQUFJUyxVQUFTLE1BQU07WUFDakJILE1BQU1jLElBQUksQ0FBQ1g7WUFFWEYsZUFBZTtRQUNqQixPQUFPO1lBQ0wsSUFBTWUsYUFBYXJCLFlBQVlHLFlBQVksQ0FBQ0o7WUFFNUNDLFlBQVlJLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhpQixZQUFXLDJCQUF5QnRCO1FBQ2hFO0lBQ0Y7SUFFQSxPQUFPTztBQUNUIn0=