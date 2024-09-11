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
        return Metavariable;
    },
    unifyTermAgainstTermType: function() {
        return unifyTermAgainstTermType;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("./verify/term"));
var _array = require("./utilities/array");
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
            key: "matchNode",
            value: function matchNode(node, localContext) {
                var matchesNode = false;
                var metavariableNode = node, typeNode = typeNodeQuery(metavariableNode);
                if (typeNode === null) {
                    var name = (0, _name.nameFromMetavariableNode)(metavariableNode);
                    if (this.name === name) {
                        var termNode = termNodeQuery(metavariableNode);
                        if (false) {
                        ///
                        } else if (termNode === null && this.termType === null) {
                            matchesNode = true;
                        } else if (termNode !== null && this.termType !== null) {
                            var termUnifiedAgainstTermType = unifyTermAgainstTermType(termNode, this.termType, localContext);
                            matchesNode = termUnifiedAgainstTermType; ///
                        }
                    }
                }
                return matchesNode;
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
function unifyTermAgainstTermType(termNode, termType, localContext) {
    var termUnifiedAgainstTermType;
    var type = termType, terms = [], termVerified = (0, _term.default)(termNode, terms, localContext, function() {
        var verifiedAhead = false;
        var firstTerm = (0, _array.first)(terms), term = firstTerm, _$termType = term.getType(), termTypeEqualToOrSubTypeOfType = _$termType.isEqualToOrSubTypeOf(type);
        if (termTypeEqualToOrSubTypeOfType) {
            verifiedAhead = true;
        }
        return verifiedAhead;
    });
    termUnifiedAgainstTermType = termVerified; ///
    return termUnifiedAgainstTermType;
}
function termTypeFromMetavariableNode(metavariableNode, fileContext) {
    var termType = null;
    var typeNode = typeNodeQuery(metavariableNode);
    if (typeNode !== null) {
        var type = fileContext.findTypeByTypeNode(typeNode);
        termType = type; ///
    }
    return termType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuL3ZlcmlmeS90ZXJtXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQgfSBmcm9tIFwiLi9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudC90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50L3R5cGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhdmFyaWFibGUge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50ZXJtVHlwZSA9IHRlcm1UeXBlO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFRlcm1UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1UeXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gdGhpcy5tZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGVOYW1lO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgbWF0Y2hOb2RlKG5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBtYXRjaGVzTm9kZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAgIC8vL1xuICAgICAgICB9IGVsc2UgaWYgKCh0ZXJtTm9kZSA9PT0gbnVsbCkgJiYgKHRoaXMudGVybVR5cGUgPT09IG51bGwpKSB7XG4gICAgICAgICAgbWF0Y2hlc05vZGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCh0ZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHRoaXMudGVybVR5cGUgIT09IG51bGwpKSB7XG4gICAgICAgICAgY29uc3QgdGVybVVuaWZpZWRBZ2FpbnN0VGVybVR5cGUgPSB1bmlmeVRlcm1BZ2FpbnN0VGVybVR5cGUodGVybU5vZGUsIHRoaXMudGVybVR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBtYXRjaGVzTm9kZSA9IHRlcm1VbmlmaWVkQWdhaW5zdFRlcm1UeXBlOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc05vZGU7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gdGhpcy5tZXRhVHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG5vZGUgPSBzdHJpbmcsICAvL1xuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9OiR7bWV0YVR5cGVOYW1lfWA7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbm9kZSB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxleGVyICA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBub2RlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm1UeXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUobm9kZSwgbmFtZSwgdGVybVR5cGUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZShub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVRlcm1BZ2FpbnN0VGVybVR5cGUodGVybU5vZGUsIHRlcm1UeXBlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHRlcm1VbmlmaWVkQWdhaW5zdFRlcm1UeXBlO1xuXG4gIGNvbnN0IHR5cGUgPSB0ZXJtVHlwZSwgIC8vL1xuICAgICAgICB0ZXJtcyA9IFtdLFxuICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1VbmlmaWVkQWdhaW5zdFRlcm1UeXBlID0gdGVybVZlcmlmaWVkOyAgLy8vXG5cbiAgcmV0dXJuIHRlcm1VbmlmaWVkQWdhaW5zdFRlcm1UeXBlO1xufVxuXG5mdW5jdGlvbiB0ZXJtVHlwZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0ZXJtVHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgdGVybVR5cGUgPSB0eXBlOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdGVybVR5cGU7XG59XG4iXSwibmFtZXMiOlsiTWV0YXZhcmlhYmxlIiwidW5pZnlUZXJtQWdhaW5zdFRlcm1UeXBlIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJub2RlIiwibmFtZSIsInRlcm1UeXBlIiwibWV0YVR5cGUiLCJnZXROb2RlIiwiZ2V0TmFtZSIsImdldFRlcm1UeXBlIiwiZ2V0TWV0YVR5cGUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtYXRjaE5hbWUiLCJtYXRjaGVzTmFtZSIsIm1hdGNoTm9kZSIsImxvY2FsQ29udGV4dCIsIm1hdGNoZXNOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwibmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJ0ZXJtVW5pZmllZEFnYWluc3RUZXJtVHlwZSIsInRvSlNPTiIsInRva2VucyIsIm1ldGFUeXBlSlNPTiIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImpzb24iLCJhc1N0cmluZyIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwidGVybVR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZyb21Ob2RlTmFtZVRlcm1UeXBlQW5kTWV0YVR5cGUiLCJ0eXBlIiwidGVybXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VGVybSIsImZpcnN0IiwidGVybSIsImdldFR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImZpbmRUeXBlQnlUeXBlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7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