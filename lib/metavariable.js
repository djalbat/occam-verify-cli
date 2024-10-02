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
var _metaType = require("./metaType");
var _name = require("./utilities/name");
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
var Metavariable = /*#__PURE__*/ function() {
    function Metavariable(string, node, name, metaType) {
        _class_call_check(this, Metavariable);
        this.string = string;
        this.node = node;
        this.name = name;
        this.metaType = metaType;
    }
    _create_class(Metavariable, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
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
                var nameMatches = this.name === name;
                return nameMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = this.node.match(metavariableNode);
                return metavariableNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metaTypeJSON = this.metaType !== null ? this.metaType.toJSON() : null, string = this.string, metaType = metaTypeJSON, json = {
                    string: string,
                    metaType: metaType
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metavariableString = string, metavariableNode = (0, _node.metavariableNodeFromMetavariableString)(metavariableString, lexer, parser), node = metavariableNode; ///
                var metaType = json.metaType;
                json = metaType; ///
                metaType = (0, _metaType.metaTypeFromJSON)(json, fileContext);
                var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, metavariable = new Metavariable(string, node, name, metaType);
                return metavariable;
            }
        },
        {
            key: "fromMetavariableNode",
            value: function fromMetavariableNode(metavariableNode, fileContext) {
                var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, node = metavariableNode, string = fileContext.nodeAsString(node), metaType = null, metavariable = new Metavariable(string, node, name, metaType);
                return metavariable;
            }
        },
        {
            key: "fromMetavariableNodeAndMetaType",
            value: function fromMetavariableNodeAndMetaType(metavariableNode, metaType, fileContext) {
                var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, node = metavariableNode, string = fileContext.nodeAsString(node), metavariable = new Metavariable(string, node, name, metaType);
                return metavariable;
            }
        }
    ]);
    return Metavariable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1ldGFUeXBlRnJvbUpTT04gfSBmcm9tIFwiLi9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gdGhpcy5tZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGVOYW1lO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSAodGhpcy5tZXRhVHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyICA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nKG1ldGF2YXJpYWJsZVN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gICAganNvbiA9IG1ldGFUeXBlOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbnVsbCxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKHN0cmluZywgbm9kZSwgbmFtZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZE1ldGFUeXBlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFUeXBlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKHN0cmluZywgbm9kZSwgbmFtZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1ldGF2YXJpYWJsZSIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwibWV0YVR5cGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0TmFtZSIsImdldE1ldGFUeXBlIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWF0Y2hOYW1lIiwibmFtZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaCIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21NZXRhdmFyaWFibGVOb2RlQW5kTWV0YVR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3dCQUpZO29CQUNvQjtvQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNQ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