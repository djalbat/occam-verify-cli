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
var _termGivenType = /*#__PURE__*/ _interop_require_default(require("./verify/termGivenType"));
var _query = require("./utilities/query");
var _string = require("./utilities/string");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/metavariable/argument/term!"), typeNodeQuery = (0, _query.nodeQuery)("/metavariable/argument/type!");
var Metavariable = /*#__PURE__*/ function() {
    function Metavariable(node, name, termType, metaType) {
        _class_call_check(this, Metavariable);
        this.node = node;
        this.name = name;
        this.termType = termType;
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
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getTermType",
            value: function getTermType() {
                return this.termType;
            }
        },
        {
            key: "getMetaType",
            value: function getMetaType() {
                return this.metaType;
            }
        },
        {
            key: "getMetaTypeName",
            value: function getMetaTypeName() {
                var metaTypeName = this.metaType.getName();
                return metaTypeName;
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
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode, localContext) {
                var matchesNode = false;
                var typeNode = typeNodeQuery(metavariableNode);
                if (typeNode === null) {
                    var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName; ///
                    if (this.name === name) {
                        var termNode = termNodeQuery(metavariableNode);
                        if (false) {
                        ///
                        } else if (termNode === null && this.termType === null) {
                            matchesNode = true;
                        } else if (termNode !== null && this.termType !== null) {
                            var type = this.termType, termUnifiedWithTermType = (0, _termGivenType.default)(termNode, type, localContext);
                            matchesNode = termUnifiedWithTermType; ///
                        }
                    }
                }
                return matchesNode;
            }
        },
        {
            key: "asString",
            value: function asString(tokens) {
                var metaTypeName = this.metaType.getName();
                var string = (0, _string.nodeAsString)(this.node, tokens);
                string = "".concat(string, ":").concat(metaTypeName); ///
                return string;
            }
        }
    ], [
        {
            key: "fromNodeNameTermTypeAndMetaType",
            value: function fromNodeNameTermTypeAndMetaType(node, name, termType, metaType) {
                var metavariable = new Metavariable(node, name, termType, metaType);
                return metavariable;
            }
        }
    ]);
    return Metavariable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtR2l2ZW5UeXBlIGZyb20gXCIuL3ZlcmlmeS90ZXJtR2l2ZW5UeXBlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudC90eXBlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgbmFtZSwgdGVybVR5cGUsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGVybVR5cGUgPSB0ZXJtVHlwZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUZXJtVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtVHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTmFtZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc05hbWUgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzTmFtZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlc05vZGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAgIC8vL1xuICAgICAgICB9IGVsc2UgaWYgKCh0ZXJtTm9kZSA9PT0gbnVsbCkgJiYgKHRoaXMudGVybVR5cGUgPT09IG51bGwpKSB7XG4gICAgICAgICAgbWF0Y2hlc05vZGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCh0ZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHRoaXMudGVybVR5cGUgIT09IG51bGwpKSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMudGVybVR5cGUsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVW5pZmllZFdpdGhUZXJtVHlwZSA9IHZlcmlmeVRlcm1HaXZlblR5cGUodGVybU5vZGUsIHR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBtYXRjaGVzTm9kZSA9IHRlcm1VbmlmaWVkV2l0aFRlcm1UeXBlOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc05vZGU7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSB0aGlzLm1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGxldCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfToke21ldGFUeXBlTmFtZX1gOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZShub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWV0YXZhcmlhYmxlIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJub2RlIiwibmFtZSIsInRlcm1UeXBlIiwibWV0YVR5cGUiLCJnZXROb2RlIiwiZ2V0TmFtZSIsImdldFRlcm1UeXBlIiwiZ2V0TWV0YVR5cGUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtYXRjaE5hbWUiLCJtYXRjaGVzTmFtZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJsb2NhbENvbnRleHQiLCJtYXRjaGVzTm9kZSIsInR5cGVOb2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwidHlwZSIsInRlcm1VbmlmaWVkV2l0aFRlcm1UeXBlIiwidmVyaWZ5VGVybUdpdmVuVHlwZSIsImFzU3RyaW5nIiwidG9rZW5zIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7b0VBVFc7cUJBRU47c0JBQ0c7b0JBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJELElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixJQUFBLEFBQU1GLDZCQUFOO2FBQU1BLGFBQ1BJLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFFBQVE7Z0NBRHZCUDtRQUVqQixJQUFJLENBQUNJLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFMQ1A7O1lBUW5CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZSxJQUFJLENBQUNOLFFBQVEsQ0FBQ0UsT0FBTztnQkFFMUMsT0FBT0k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVVCxJQUFJO2dCQUNaLElBQU1VLGNBQWUsSUFBSSxDQUFDVixJQUFJLEtBQUtBO2dCQUVuQyxPQUFPVTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVDLFlBQVk7Z0JBQ2xELElBQUlDLGNBQWM7Z0JBRWxCLElBQU1DLFdBQVdqQixjQUFjYztnQkFFL0IsSUFBSUcsYUFBYSxNQUFNO29CQUNyQixJQUFNQyxtQkFBbUJDLElBQUFBLDBDQUFvQyxFQUFDTCxtQkFDeERaLE9BQU9nQixrQkFBbUIsR0FBRztvQkFFbkMsSUFBSSxJQUFJLENBQUNoQixJQUFJLEtBQUtBLE1BQU07d0JBQ3RCLElBQU1rQixXQUFXdEIsY0FBY2dCO3dCQUUvQixJQUFJLE9BQU87d0JBQ1QsR0FBRzt3QkFDTCxPQUFPLElBQUksQUFBQ00sYUFBYSxRQUFVLElBQUksQ0FBQ2pCLFFBQVEsS0FBSyxNQUFPOzRCQUMxRGEsY0FBYzt3QkFDaEIsT0FBTyxJQUFJLEFBQUNJLGFBQWEsUUFBVSxJQUFJLENBQUNqQixRQUFRLEtBQUssTUFBTzs0QkFDMUQsSUFBTWtCLE9BQU8sSUFBSSxDQUFDbEIsUUFBUSxFQUNwQm1CLDBCQUEwQkMsSUFBQUEsc0JBQW1CLEVBQUNILFVBQVVDLE1BQU1OOzRCQUVwRUMsY0FBY00seUJBQTBCLEdBQUc7d0JBQzdDO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9OO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsTUFBTTtnQkFDYixJQUFNZixlQUFlLElBQUksQ0FBQ04sUUFBUSxDQUFDRSxPQUFPO2dCQUUxQyxJQUFJb0IsU0FBU0MsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUMxQixJQUFJLEVBQUV3QjtnQkFFckNDLFNBQVMsQUFBQyxHQUFZaEIsT0FBVmdCLFFBQU8sS0FBZ0IsT0FBYmhCLGVBQWdCLEdBQUc7Z0JBRXpDLE9BQU9nQjtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLGdDQUFnQzNCLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFFBQVE7Z0JBQ25FLElBQU15QixlQUFlLElBM0VKaEMsYUEyRXFCSSxNQUFNQyxNQUFNQyxVQUFVQztnQkFFNUQsT0FBT3lCO1lBQ1Q7OztXQTlFbUJoQyJ9