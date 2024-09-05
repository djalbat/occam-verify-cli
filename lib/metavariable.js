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
                            var termVerifiedAgainstTermType = verifyTermAgainstTermType(termNode, this.termType, localContext);
                            matchesNode = termVerifiedAgainstTermType; ///
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
function verifyTermAgainstTermType(termNode, termType, localContext) {
    var termVerifiedAgainstTermType;
    var type = termType, terms = [];
    termVerifiedAgainstTermType = (0, _term.default)(termNode, terms, localContext, function() {
        var verifiedAhead = false;
        var firstTerm = (0, _array.first)(terms), term = firstTerm, _$termType = term.getType(), termTypeEqualToOrSubTypeOfType = _$termType.isEqualToOrSubTypeOf(type);
        if (termTypeEqualToOrSubTypeOfType) {
            verifiedAhead = true;
        }
        return verifiedAhead;
    });
    return termVerifiedAgainstTermType;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuL3ZlcmlmeS90ZXJtXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQgfSBmcm9tIFwiLi9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudC90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50L3R5cGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhdmFyaWFibGUge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50ZXJtVHlwZSA9IHRlcm1UeXBlO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFRlcm1UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1UeXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gdGhpcy5tZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGVOYW1lO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgbWF0Y2hOb2RlKG5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBtYXRjaGVzTm9kZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAgIC8vL1xuICAgICAgICB9IGVsc2UgaWYgKCh0ZXJtTm9kZSA9PT0gbnVsbCkgJiYgKHRoaXMudGVybVR5cGUgPT09IG51bGwpKSB7XG4gICAgICAgICAgbWF0Y2hlc05vZGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCh0ZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHRoaXMudGVybVR5cGUgIT09IG51bGwpKSB7XG4gICAgICAgICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlID0gdmVyaWZ5VGVybUFnYWluc3RUZXJtVHlwZSh0ZXJtTm9kZSwgdGhpcy50ZXJtVHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIG1hdGNoZXNOb2RlID0gdGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc05vZGU7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gdGhpcy5tZXRhVHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG5vZGUgPSBzdHJpbmcsICAvL1xuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9OiR7bWV0YVR5cGVOYW1lfWA7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbm9kZSB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxleGVyICA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBub2RlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm1UeXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUobm9kZSwgbmFtZSwgdGVybVR5cGUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZShub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0VGVybVR5cGUodGVybU5vZGUsIHRlcm1UeXBlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFnYWluc3RUZXJtVHlwZTtcblxuICBjb25zdCB0eXBlID0gdGVybVR5cGUsICAvLy9cbiAgICAgICAgdGVybXMgPSBbXTtcblxuICB0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGUgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGU7XG59XG5cbmZ1bmN0aW9uIHRlcm1UeXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHRlcm1UeXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICB0ZXJtVHlwZSA9IHR5cGU7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0ZXJtVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJNZXRhdmFyaWFibGUiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIm5vZGUiLCJuYW1lIiwidGVybVR5cGUiLCJtZXRhVHlwZSIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0VGVybVR5cGUiLCJnZXRNZXRhVHlwZSIsImdldE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1hdGNoTmFtZSIsIm1hdGNoZXNOYW1lIiwibWF0Y2hOb2RlIiwibG9jYWxDb250ZXh0IiwibWF0Y2hlc05vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwidHlwZU5vZGUiLCJuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1WZXJpZmllZEFnYWluc3RUZXJtVHlwZSIsInZlcmlmeVRlcm1BZ2FpbnN0VGVybVR5cGUiLCJ0b0pTT04iLCJ0b2tlbnMiLCJtZXRhVHlwZUpTT04iLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJqc29uIiwiYXNTdHJpbmciLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwidmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGFUeXBlRnJvbUpTT05BbmRGaWxlQ29udGV4dCIsInRlcm1UeXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmcm9tTm9kZU5hbWVUZXJtVHlwZUFuZE1ldGFUeXBlIiwidHlwZSIsInRlcm1zIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJnZXRUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7OzJEQVpFO3FCQUVEO3FCQUNJO3NCQUNHO29CQUNZO3dCQUNNO29CQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZELElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFB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