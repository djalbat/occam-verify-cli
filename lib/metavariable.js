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
                    var name = (0, _name.nameFromMetavariableNode)(metavariableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtR2l2ZW5UeXBlIGZyb20gXCIuL3ZlcmlmeS90ZXJtR2l2ZW5UeXBlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudC90eXBlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgbmFtZSwgdGVybVR5cGUsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGVybVR5cGUgPSB0ZXJtVHlwZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUZXJtVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtVHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTmFtZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc05hbWUgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzTmFtZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlc05vZGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH0gZWxzZSBpZiAoKHRlcm1Ob2RlID09PSBudWxsKSAmJiAodGhpcy50ZXJtVHlwZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgICBtYXRjaGVzTm9kZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoKHRlcm1Ob2RlICE9PSBudWxsKSAmJiAodGhpcy50ZXJtVHlwZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy50ZXJtVHlwZSwgIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1VbmlmaWVkV2l0aFRlcm1UeXBlID0gdmVyaWZ5VGVybUdpdmVuVHlwZSh0ZXJtTm9kZSwgdHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIG1hdGNoZXNOb2RlID0gdGVybVVuaWZpZWRXaXRoVGVybVR5cGU7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzTm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9OiR7bWV0YVR5cGVOYW1lfWA7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZU5hbWVUZXJtVHlwZUFuZE1ldGFUeXBlKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUobm9kZSwgbmFtZSwgdGVybVR5cGUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNZXRhdmFyaWFibGUiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIm5vZGUiLCJuYW1lIiwidGVybVR5cGUiLCJtZXRhVHlwZSIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0VGVybVR5cGUiLCJnZXRNZXRhVHlwZSIsImdldE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1hdGNoTmFtZSIsIm1hdGNoZXNOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImxvY2FsQ29udGV4dCIsIm1hdGNoZXNOb2RlIiwidHlwZU5vZGUiLCJuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsInR5cGUiLCJ0ZXJtVW5pZmllZFdpdGhUZXJtVHlwZSIsInZlcmlmeVRlcm1HaXZlblR5cGUiLCJhc1N0cmluZyIsInRva2VucyIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImZy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