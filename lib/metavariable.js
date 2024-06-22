"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Metavariable;
    }
});
var _string = require("./utilities/string");
var _metaType = require("./metaType");
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
var Metavariable = /*#__PURE__*/ function() {
    function Metavariable(node, metaType) {
        _class_call_check(this, Metavariable);
        this.node = node;
        this.metaType = metaType;
    }
    _create_class(Metavariable, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getMetaType",
            value: function getMetaType() {
                return this.metaType;
            }
        },
        {
            key: "matchNode",
            value: function matchNode(node) {
                var nodeMatches = this.node.match(node);
                return nodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var metaTypeJSON = this.metaType.toJSON(tokens), metaType = metaTypeJSON, string = (0, _string.nodeAsString)(this.node, tokens), node = string, json = {
                    node: node,
                    metaType: metaType
                };
                return json;
            }
        },
        {
            key: "asString",
            value: function asString(tokens) {
                var metaTypeName = this.metaType.getName();
                var string = (0, _string.nodeAsString)(this.node, tokens);
                string = "".concat(string, ":").concat(metaTypeName);
                return string;
            }
        }
    ], [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var node = json.node;
                var metaType = json.metaType;
                json = metaType; ///
                metaType = (0, _metaType.metaTypeFromJSONAndFileContext)(json, fileContext);
                var metavariable = new Metavariable(node, metaType);
                return metavariable;
            }
        },
        {
            key: "fromMetavariableNodeAndMetaType",
            value: function fromMetavariableNodeAndMetaType(metavariableNode, metaType) {
                var node = metavariableNode, metavariable = new Metavariable(node, metaType);
                return metavariable;
            }
        }
    ]);
    return Metavariable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG1ldGFUeXBlRnJvbUpTT05BbmRGaWxlQ29udGV4dCB9IGZyb20gXCIuL21ldGFUeXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGF2YXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIG1hdGNoTm9kZShub2RlKSB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gdGhpcy5tZXRhVHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUsIHRva2VucyksXG4gICAgICAgICAgbm9kZSA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSB0aGlzLm1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGxldCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfToke21ldGFUeXBlTmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBub2RlIH0gPSBqc29uO1xuXG4gICAgbGV0IHsgbWV0YVR5cGUgfSA9IGpzb247XG5cbiAgICBqc29uID0gbWV0YVR5cGU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUobm9kZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZE1ldGFUeXBlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFUeXBlKSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKG5vZGUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNZXRhdmFyaWFibGUiLCJub2RlIiwibWV0YVR5cGUiLCJnZXROb2RlIiwiZ2V0TWV0YVR5cGUiLCJtYXRjaE5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoIiwidG9KU09OIiwidG9rZW5zIiwibWV0YVR5cGVKU09OIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwianNvbiIsImFzU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsIm1ldGFUeXBlRnJvbUpTT05BbmRGaWxlQ29udGV4dCIsIm1ldGF2YXJpYWJsZSIsImZyb21NZXRhdmFyaWFibGVOb2RlQW5kTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OztzQkFIUTt3QkFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQUEsQUFBTUEsNkJBQUQsQUFBTDthQUFNQSxhQUNQQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRFBGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBSENGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVKLElBQUk7Z0JBQ1osSUFBTUssY0FBYyxJQUFJLENBQUNMLElBQUksQ0FBQ00sS0FBSyxDQUFDTjtnQkFFcEMsT0FBT0s7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNO2dCQUNYLElBQU1DLGVBQWUsSUFBSSxDQUFDUixRQUFRLENBQUNNLE1BQU0sQ0FBQ0MsU0FDcENQLFdBQVdRLGNBQ1hDLFNBQVNDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDWCxJQUFJLEVBQUVRLFNBQ2pDUixPQUFPVSxRQUNQRSxPQUFPO29CQUNMWixNQUFBQTtvQkFDQUMsVUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT1c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTTCxNQUFNO2dCQUNiLElBQU1NLGVBQWUsSUFBSSxDQUFDYixRQUFRLENBQUNjLE9BQU87Z0JBRTFDLElBQUlMLFNBQVNDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDWCxJQUFJLEVBQUVRO2dCQUVyQ0UsU0FBUyxBQUFDLEdBQVlJLE9BQVZKLFFBQU8sS0FBZ0IsT0FBYkk7Z0JBRXRCLE9BQU9KO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCSixJQUFJLEVBQUVLLFdBQVc7Z0JBQzdDLElBQU0sQUFBRWpCLE9BQVNZLEtBQVRaO2dCQUVSLElBQUksQUFBRUMsV0FBYVcsS0FBYlg7Z0JBRU5XLE9BQU9YLFVBQVcsR0FBRztnQkFFckJBLFdBQVdpQixJQUFBQSx3Q0FBOEIsRUFBQ04sTUFBTUs7Z0JBRWhELElBQU1FLGVBQWUsSUFwREpwQixhQW9EcUJDLE1BQU1DO2dCQUU1QyxPQUFPa0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGdDQUFnQ0MsZ0JBQWdCLEVBQUVwQixRQUFRO2dCQUMvRCxJQUFNRCxPQUFPcUIsa0JBQ1BGLGVBQWUsSUEzREpwQixhQTJEcUJDLE1BQU1DO2dCQUU1QyxPQUFPa0I7WUFDVDs7O1dBOURtQnBCIn0=