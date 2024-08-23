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
var _query = require("./utilities/query");
var _string = require("./utilities/string");
var _name = require("./utilities/name");
var _metaType = require("./metaType");
var _node = require("./utilities/node");
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
var typeNodeQuery = (0, _query.nodeQuery)("/metavariable/argument!/type!");
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
            key: "matchName",
            value: function matchName(name) {
                var nameMatches = this.name === name;
                return nameMatches;
            }
        },
        {
            key: "matchNode",
            value: function matchNode(node) {
                var nodeMatches;
                var metavariableNode = node, name = (0, _name.nameFromMetavariableNode)(metavariableNode);
                if (this.name === name) {
                    nodeMatches = true;
                }
                return nodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var metaTypeJSON = this.metaType.toJSON(tokens), string = (0, _string.nodeAsString)(this.node, tokens), node = string, metaType = metaTypeJSON, json = {
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
                string = "".concat(string, ":").concat(metaTypeName); ///
                return string;
            }
        }
    ], [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var node = json.node;
                var lexer = fileContext.getLexer(), parser = fileContext.getParser(), variableString = node, metavariableNode = (0, _node.metavariableNodeFromMetavariableString)(variableString, lexer, parser);
                node = metavariableNode; ///
                var metaType = json.metaType;
                json = metaType; ///
                metaType = (0, _metaType.metaTypeFromJSONAndFileContext)(json, fileContext);
                var name = (0, _name.nameFromMetavariableNode)(metavariableNode), termType = termTypeFromMetavariableNode(metavariableNode, fileContext), metavariable = new Metavariable(node, name, termType, metaType);
                return metavariable;
            }
        },
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
function termTypeFromMetavariableNode(metavariableNode, fileContext) {
    var termType = null;
    var typeNode = typeNodeQuery(metavariableNode);
    if (typeNode !== null) {
        var type = fileContext.findTypeByTypeNode(typeNode);
        termType = type; ///
    }
    return termType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IG1ldGFUeXBlRnJvbUpTT05BbmRGaWxlQ29udGV4dCB9IGZyb20gXCIuL21ldGFUeXBlXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50IS90eXBlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgbmFtZSwgdGVybVR5cGUsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGVybVR5cGUgPSB0ZXJtVHlwZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUZXJtVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtVHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOb2RlKG5vZGUpIHtcbiAgICBsZXQgbm9kZU1hdGNoZXM7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBub2RlTWF0Y2hlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFUeXBlSlNPTiA9IHRoaXMubWV0YVR5cGUudG9KU09OKHRva2VucyksXG4gICAgICAgICAgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBub2RlID0gc3RyaW5nLCAgLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSB0aGlzLm1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGxldCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfToke21ldGFUeXBlTmFtZX1gOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IG5vZGUgfSA9IGpzb247XG5cbiAgICBjb25zdCBsZXhlciAgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gbm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyh2YXJpYWJsZVN0cmluZywgbGV4ZXIsIHBhcnNlcik7XG5cbiAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgbGV0IHsgbWV0YVR5cGUgfSA9IGpzb247XG5cbiAgICBqc29uID0gbWV0YVR5cGU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdGVybVR5cGUgPSB0ZXJtVHlwZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlTmFtZVRlcm1UeXBlQW5kTWV0YVR5cGUobm9kZSwgbmFtZSwgdGVybVR5cGUsIG1ldGFUeXBlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXJtVHlwZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0ZXJtVHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICAgIHRlcm1UeXBlID0gdHlwZTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRlcm1UeXBlO1xufVxuIl0sIm5hbWVzIjpbIk1ldGF2YXJpYWJsZSIsInR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJub2RlIiwibmFtZSIsInRlcm1UeXBlIiwibWV0YVR5cGUiLCJnZXROb2RlIiwiZ2V0TmFtZSIsImdldFRlcm1UeXBlIiwiZ2V0TWV0YVR5cGUiLCJtYXRjaE5hbWUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm5vZGVNYXRjaGVzIiwibWV0YXZhcmlhYmxlTm9kZSIsIm5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsIm1ldGFUeXBlSlNPTiIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImpzb24iLCJhc1N0cmluZyIsIm1ldGFUeXBlTmFtZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwidGVybVR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZyb21Ob2RlTmFtZVRlcm1UeXBlQW5kTWV0YVR5cGUiLCJ0eXBlTm9kZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFC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