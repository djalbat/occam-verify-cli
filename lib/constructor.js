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
var _string = require("./utilities/string");
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
var Constructor = /*#__PURE__*/ function() {
    function Constructor(termNode, string, type) {
        _class_call_check(this, Constructor);
        this.termNode = termNode;
        this.string = string;
        this.type = type;
    }
    _create_class(Constructor, [
        {
            key: "getTermNode",
            value: function getTermNode() {
                return this.termNode;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        }
    ], [
        {
            key: "fromTermNodeTypeAndTokens",
            value: function fromTermNodeTypeAndTokens(termNode, type, tokens) {
                var string = stringFromTermNodeTypeAndTokens(termNode, type, tokens), constructor = new Constructor(termNode, string, type);
                return constructor;
            }
        }
    ]);
    return Constructor;
}();
function stringFromTermNodeTypeAndTokens(termNode, type, tokens) {
    var string;
    var termString = (0, _string.nodeAsString)(termNode, tokens);
    if (type === null) {
        string = "".concat(termString);
    } else {
        var noSuperType = true, typeString = type.asString(tokens, noSuperType);
        string = "".concat(termString, ":").concat(typeString);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdHJ1Y3RvciB7XG4gIGNvbnN0cnVjdG9yKHRlcm1Ob2RlLCBzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zKHRlcm1Ob2RlLCB0eXBlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zKHRlcm1Ob2RlLCB0eXBlLCB0b2tlbnMpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHRlcm1Ob2RlLCBzdHJpbmcsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtTm9kZVR5cGVBbmRUb2tlbnModGVybU5vZGUsIHR5cGUsIHRva2Vucykge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGVybU5vZGUsIHRva2Vucyk7XG5cbiAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9TdXBlclR5cGUgPSB0cnVlLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlLmFzU3RyaW5nKHRva2Vucywgbm9TdXBlclR5cGUpO1xuXG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ306JHt0eXBlU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIkNvbnN0cnVjdG9yIiwidGVybU5vZGUiLCJzdHJpbmciLCJ0eXBlIiwiZ2V0VGVybU5vZGUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZnJvbVRlcm1Ob2RlVHlwZUFuZFRva2VucyIsInRva2VucyIsInN0cmluZ0Zyb21UZXJtTm9kZVR5cGVBbmRUb2tlbnMiLCJjb25zdHJ1Y3RvciIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJub1N1cGVyVHlwZSIsInR5cGVTdHJpbmciLCJhc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7c0JBRlE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSw0QkFBTjthQUFNQSxZQUNQQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FEZkg7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSktIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQk4sUUFBUSxFQUFFRSxJQUFJLEVBQUVLLE1BQU07Z0JBQ3JELElBQU1OLFNBQVNPLGdDQUFnQ1IsVUFBVUUsTUFBTUssU0FDekRFLGNBQWMsSUFyQkhWLFlBcUJtQkMsVUFBVUMsUUFBUUM7Z0JBRXRELE9BQU9PO1lBQ1Q7OztXQXhCbUJWOztBQTJCckIsU0FBU1MsZ0NBQWdDUixRQUFRLEVBQUVFLElBQUksRUFBRUssTUFBTTtJQUM3RCxJQUFJTjtJQUVKLElBQU1TLGFBQWFDLElBQUFBLG9CQUFZLEVBQUNYLFVBQVVPO0lBRTFDLElBQUlMLFNBQVMsTUFBTTtRQUNqQkQsU0FBUyxBQUFDLEdBQWEsT0FBWFM7SUFDZCxPQUFPO1FBQ0wsSUFBTUUsY0FBYyxNQUNkQyxhQUFhWCxLQUFLWSxRQUFRLENBQUNQLFFBQVFLO1FBRXpDWCxTQUFTLEFBQUMsR0FBZ0JZLE9BQWRILFlBQVcsS0FBYyxPQUFYRztJQUM1QjtJQUVBLE9BQU9aO0FBQ1QifQ==