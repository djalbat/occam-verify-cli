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
        return MetaType;
    },
    metaTypeFromJSONAndFileContext: function() {
        return metaTypeFromJSONAndFileContext;
    }
});
var _name = require("./utilities/name");
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
var MetaType = /*#__PURE__*/ function() {
    function MetaType(name) {
        _class_call_check(this, MetaType);
        this.name = name;
    }
    _create_class(MetaType, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(metaType) {
                var equalTo = this === metaType;
                return equalTo;
            }
        },
        {
            key: "match",
            value: function match(metaType) {
                var equalToMetaType = this.isEqualTo(metaType), matches = equalToMetaType; ///
                return matches;
            }
        },
        {
            key: "matchName",
            value: function matchName(name) {
                var matchesName = this.name === name;
                return matchesName;
            }
        },
        {
            key: "matchMetaTypeName",
            value: function matchMetaTypeName(metaTypeName) {
                var matchesMetaTypeName = this.name === metaTypeName;
                return matchesMetaTypeName;
            }
        },
        {
            key: "matchMetaTypeNode",
            value: function matchMetaTypeNode(metaTypeNode) {
                var metaTypeName = (0, _name.metaTypeNameFromMetaTypeNode)(metaTypeNode), matchesMetaTypeName = this.matchMetaTypeName(metaTypeName), matchesMetaTypeNode = matchesMetaTypeName; ///
                return matchesMetaTypeNode;
            }
        },
        {
            key: "asString",
            value: function asString(tokens) {
                var string = "".concat(this.name);
                return string;
            }
        }
    ], [
        {
            key: "fromMetaTypeName",
            value: function fromMetaTypeName(metaTypeName) {
                var name = metaTypeName, metaType = new MetaType(name);
                return metaType;
            }
        }
    ]);
    return MetaType;
}();
function metaTypeFromJSONAndFileContext(json, fileContext) {
    var metaType;
    var name = json.name;
    metaType = new MetaType(name);
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFUeXBlIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBpc0VxdWFsVG8obWV0YVR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gKHRoaXMgPT09IG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2gobWV0YVR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvTWV0YVR5cGUgPSB0aGlzLmlzRXF1YWxUbyhtZXRhVHlwZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IGVxdWFsVG9NZXRhVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOYW1lID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc05hbWU7XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YVR5cGVOYW1lID0gKHRoaXMubmFtZSA9PT0gbWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzTWV0YVR5cGVOYW1lO1xuICB9XG5cbiAgbWF0Y2hNZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpLFxuICAgICAgICAgIG1hdGNoZXNNZXRhVHlwZU5hbWUgPSB0aGlzLm1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgbWF0Y2hlc01ldGFUeXBlTm9kZSA9IG1hdGNoZXNNZXRhVHlwZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBtYXRjaGVzTWV0YVR5cGVOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYCR7dGhpcy5uYW1lfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IG1ldGFUeXBlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbmV3IE1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IG1ldGFUeXBlO1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICBtZXRhVHlwZSA9IG5ldyBNZXRhVHlwZShuYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG4iXSwibmFtZXMiOlsiTWV0YVR5cGUiLCJtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJuYW1lIiwiZ2V0TmFtZSIsImlzRXF1YWxUbyIsIm1ldGFUeXBlIiwiZXF1YWxUbyIsIm1hdGNoIiwiZXF1YWxUb01ldGFUeXBlIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsIm1hdGNoZXNOYW1lIiwibWF0Y2hNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtYXRjaGVzTWV0YVR5cGVOYW1lIiwibWF0Y2hNZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWVGcm9tTWV0YVR5cGVOb2RlIiwibWF0Y2hlc01ldGFUeXBlTm9kZSIsImFzU3RyaW5nIiwidG9rZW5zIiwic3RyaW5nIiwiZnJvbU1ldGFUeXBlTmFtZSIsImpzb24iLCJmaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQUlxQkE7O0lBd0RMQyw4QkFBOEI7ZUFBOUJBOzs7b0JBMUQ2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBQSxBQUFNRCx5QkFBTjthQUFNQSxTQUNQRSxJQUFJO2dDQURHRjtRQUVqQixJQUFJLENBQUNFLElBQUksR0FBR0E7O2tCQUZLRjs7WUFLbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxRQUFRO2dCQUNoQixJQUFNQyxVQUFXLElBQUksS0FBS0Q7Z0JBRTFCLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUYsUUFBUTtnQkFDWixJQUFNRyxrQkFBa0IsSUFBSSxDQUFDSixTQUFTLENBQUNDLFdBQ2pDSSxVQUFVRCxpQkFBa0IsR0FBRztnQkFFckMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVUixJQUFJO2dCQUNaLElBQU1TLGNBQWUsSUFBSSxDQUFDVCxJQUFJLEtBQUtBO2dCQUVuQyxPQUFPUztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWTtnQkFDNUIsSUFBTUMsc0JBQXVCLElBQUksQ0FBQ1osSUFBSSxLQUFLVztnQkFFM0MsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVk7Z0JBQzVCLElBQU1ILGVBQWVJLElBQUFBLGtDQUE0QixFQUFDRCxlQUM1Q0Ysc0JBQXNCLElBQUksQ0FBQ0YsaUJBQWlCLENBQUNDLGVBQzdDSyxzQkFBc0JKLHFCQUFzQixHQUFHO2dCQUVyRCxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE1BQU07Z0JBQ2IsSUFBTUMsU0FBUyxBQUFDLEdBQVksT0FBVixJQUFJLENBQUNuQixJQUFJO2dCQUUzQixPQUFPbUI7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJULFlBQVk7Z0JBQ2xDLElBQU1YLE9BQU9XLGNBQ1BSLFdBQVcsSUFsREFMLFNBa0RhRTtnQkFFOUIsT0FBT0c7WUFDVDs7O1dBckRtQkw7O0FBd0RkLFNBQVNDLCtCQUErQnNCLElBQUksRUFBRUMsV0FBVztJQUM5RCxJQUFJbkI7SUFFSixJQUFNLEFBQUVILE9BQVNxQixLQUFUckI7SUFFUkcsV0FBVyxJQUFJTCxTQUFTRTtJQUV4QixPQUFPRztBQUNUIn0=