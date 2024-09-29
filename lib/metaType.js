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
    metaTypeFromJSON: function() {
        return metaTypeFromJSON;
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
                var nameMatches = this.name === name;
                return nameMatches;
            }
        },
        {
            key: "matchMetaTypeName",
            value: function matchMetaTypeName(metaTypeName) {
                var metaTypeNameMatches = this.name === metaTypeName;
                return metaTypeNameMatches;
            }
        },
        {
            key: "matchMetaTypeNode",
            value: function matchMetaTypeNode(metaTypeNode) {
                var metaTypeName = (0, _name.metaTypeNameFromMetaTypeNode)(metaTypeNode), metaTypeNameMatches = this.matchMetaTypeName(metaTypeName), metaTypeNodeMatches = metaTypeNameMatches; ///
                return metaTypeNodeMatches;
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
function metaTypeFromJSON(json, fileContext) {
    var metaType;
    var name = json.name;
    metaType = new MetaType(name);
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFUeXBlIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBpc0VxdWFsVG8obWV0YVR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gKHRoaXMgPT09IG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2gobWV0YVR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvTWV0YVR5cGUgPSB0aGlzLmlzRXF1YWxUbyhtZXRhVHlwZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IGVxdWFsVG9NZXRhVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgbWV0YVR5cGVOb2RlTWF0Y2hlcyA9IG1ldGFUeXBlTmFtZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBtZXRhVHlwZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYCR7dGhpcy5uYW1lfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IG1ldGFUeXBlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbmV3IE1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCBtZXRhVHlwZTtcblxuICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUobmFtZSk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbIk1ldGFUeXBlIiwibWV0YVR5cGVGcm9tSlNPTiIsIm5hbWUiLCJnZXROYW1lIiwiaXNFcXVhbFRvIiwibWV0YVR5cGUiLCJlcXVhbFRvIiwibWF0Y2giLCJlcXVhbFRvTWV0YVR5cGUiLCJtYXRjaGVzIiwibWF0Y2hOYW1lIiwibmFtZU1hdGNoZXMiLCJtYXRjaE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZU1hdGNoZXMiLCJtYXRjaE1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTmFtZUZyb21NZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGVNYXRjaGVzIiwiYXNTdHJpbmciLCJ0b2tlbnMiLCJzdHJpbmciLCJmcm9tTWV0YVR5cGVOYW1lIiwianNvbiIsImZpbGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBSXFCQTs7SUF3RExDLGdCQUFnQjtlQUFoQkE7OztvQkExRDZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFBLEFBQU1ELHlCQUFOO2FBQU1BLFNBQ1BFLElBQUk7Z0NBREdGO1FBRWpCLElBQUksQ0FBQ0UsSUFBSSxHQUFHQTs7a0JBRktGOztZQUtuQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLFFBQVE7Z0JBQ2hCLElBQU1DLFVBQVcsSUFBSSxLQUFLRDtnQkFFMUIsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNRixRQUFRO2dCQUNaLElBQU1HLGtCQUFrQixJQUFJLENBQUNKLFNBQVMsQ0FBQ0MsV0FDakNJLFVBQVVELGlCQUFrQixHQUFHO2dCQUVyQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVSLElBQUk7Z0JBQ1osSUFBTVMsY0FBZSxJQUFJLENBQUNULElBQUksS0FBS0E7Z0JBRW5DLE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZO2dCQUM1QixJQUFNQyxzQkFBdUIsSUFBSSxDQUFDWixJQUFJLEtBQUtXO2dCQUUzQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWTtnQkFDNUIsSUFBTUgsZUFBZUksSUFBQUEsa0NBQTRCLEVBQUNELGVBQzVDRixzQkFBc0IsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQ0MsZUFDN0NLLHNCQUFzQkoscUJBQXNCLEdBQUc7Z0JBRXJELE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsTUFBTTtnQkFDYixJQUFNQyxTQUFTLEFBQUMsR0FBWSxPQUFWLElBQUksQ0FBQ25CLElBQUk7Z0JBRTNCLE9BQU9tQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQlQsWUFBWTtnQkFDbEMsSUFBTVgsT0FBT1csY0FDUFIsV0FBVyxJQWxEQUwsU0FrRGFFO2dCQUU5QixPQUFPRztZQUNUOzs7V0FyRG1CTDs7QUF3RGQsU0FBU0MsaUJBQWlCc0IsSUFBSSxFQUFFQyxXQUFXO0lBQ2hELElBQUluQjtJQUVKLElBQU0sQUFBRUgsT0FBU3FCLEtBQVRyQjtJQUVSRyxXQUFXLElBQUlMLFNBQVNFO0lBRXhCLE9BQU9HO0FBQ1QifQ==