"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Reference;
    }
});
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./metavariable"));
var _query = require("./utilities/query");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var metavariableNodeQuery = (0, _query.nodeQuery)("//reference/metavariable");
var Reference = /*#__PURE__*/ function() {
    function Reference(metavariable) {
        _class_call_check(this, Reference);
        this.metavariable = metavariable;
    }
    _create_class(Reference, [
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.metavariable.getString();
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                return this.metavariable.matchMetavariableNode(metavariableNode);
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var metavariableNode = this.metavariable.getNode();
                return metavariableNode;
            }
        },
        {
            key: "verify",
            value: function verify(fileContext) {
                var verified;
                var referenceString = this.getString(); ///
                fileContext.trace("Verifying the '".concat(referenceString, "' reference..."));
                verified = true;
                if (verified) {
                    fileContext.debug("...verified the '".concat(referenceString, "' reference."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metavariableJSON = this.metavariable.toJSON(), metavariable = metavariableJSON, string = this.string, json = {
                    string: string,
                    metavariable: metavariable
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string;
                var metavariable = json.metavariable;
                json = metavariable; ///
                metavariable = _metavariable.default.fromJSON(json, fileContext);
                var reference = new Reference(string, metavariable);
                return reference;
            }
        },
        {
            key: "fromReferenceNode",
            value: function fromReferenceNode(referenceNode, fileContext) {
                var metavariableNode = metavariableNodeQuery(referenceNode), metavariable = _metavariable.default.fromMetavariableNode(metavariableNode, fileContext), reference = new Reference(metavariable);
                return reference;
            }
        }
    ]);
    return Reference;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhdmFyaWFibGUgZnJvbSBcIi4vbWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvL3JlZmVyZW5jZS9tZXRhdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZmVyZW5jZSB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgdmVyaWZ5KGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIHZlcmlmaWVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSB0aGlzLm1ldGF2YXJpYWJsZS50b0pTT04oKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uO1xuXG4gICAgbGV0IHsgbWV0YXZhcmlhYmxlIH0gPSBqc29uO1xuXG4gICAganNvbiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2Uoc3RyaW5nLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkocmVmZXJlbmNlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0U3RyaW5nIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwidmVyaWZ5IiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZCIsInJlZmVyZW5jZVN0cmluZyIsInRyYWNlIiwiZGVidWciLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwic3RyaW5nIiwianNvbiIsImZyb21KU09OIiwiTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlIiwiZnJvbVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O21FQU5JO3FCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixJQUFBLEFBQU1GLDBCQUFOO2FBQU1BLFVBQ1BHLFlBQVk7Z0NBRExIO1FBRWpCLElBQUksQ0FBQ0csWUFBWSxHQUFHQTs7a0JBRkhIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxZQUFZO1lBQzFCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRixZQUFZLENBQUNFLFNBQVM7WUFBSTs7O1lBRXBEQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQUksT0FBTyxJQUFJLENBQUNKLFlBQVksQ0FBQ0cscUJBQXFCLENBQUNDO1lBQW1COzs7WUFFNUdDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxtQkFBbUIsSUFBSSxDQUFDSixZQUFZLENBQUNNLE9BQU87Z0JBRWxELE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVztnQkFDaEIsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCLElBQUksQ0FBQ1IsU0FBUyxJQUFJLEdBQUc7Z0JBRTdDTSxZQUFZRyxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJELGlCQUFnQjtnQkFFcERELFdBQVc7Z0JBRVgsSUFBSUEsVUFBVTtvQkFDWkQsWUFBWUksS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCRixpQkFBZ0I7Z0JBQ3hEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ2QsWUFBWSxDQUFDYSxNQUFNLElBQzNDYixlQUFlYyxrQkFDZkMsU0FBUyxJQUFJLENBQUNBLE1BQU0sRUFDcEJDLE9BQU87b0JBQ0xELFFBQUFBO29CQUNBZixjQUFBQTtnQkFDRjtnQkFFTixPQUFPZ0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVSLFdBQVc7Z0JBQy9CLElBQU0sQUFBRU8sU0FBV0MsS0FBWEQ7Z0JBRVIsSUFBSSxBQUFFZixlQUFpQmdCLEtBQWpCaEI7Z0JBRU5nQixPQUFPaEIsY0FBZSxHQUFHO2dCQUV6QkEsZUFBZWtCLHFCQUFZLENBQUNELFFBQVEsQ0FBQ0QsTUFBTVI7Z0JBRTNDLElBQU1XLFlBQVksSUF4RER0QixVQXdEZWtCLFFBQVFmO2dCQUV4QyxPQUFPbUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFYixXQUFXO2dCQUNqRCxJQUFNSixtQkFBbUJOLHNCQUFzQnVCLGdCQUN6Q3JCLGVBQWVrQixxQkFBWSxDQUFDSSxvQkFBb0IsQ0FBQ2xCLGtCQUFrQkksY0FDbkVXLFlBQVksSUFoRUR0QixVQWdFZUc7Z0JBRWhDLE9BQU9tQjtZQUNUOzs7V0FuRW1CdEIifQ==