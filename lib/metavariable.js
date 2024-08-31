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
var termNodeQuery = (0, _query.nodeQuery)("/metavariable/argument!/term!"), typeNodeQuery = (0, _query.nodeQuery)("/metavariable/argument!/type!");
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
            value: function matchNode(node, localMetaContext) {
                var nodeMatches = false;
                var metavariableNode = node, typeNode = typeNodeQuery(metavariableNode);
                if (typeNode === null) {
                    var name = (0, _name.nameFromMetavariableNode)(metavariableNode);
                    if (this.name === name) {
                        var termNode = termNodeQuery(metavariableNode);
                        if (false) {
                        ///
                        } else if (termNode === null && this.termType === null) {
                            nodeMatches = true;
                        } else if (termNode !== null && this.termType !== null) {
                            var termVerifiedAgainstTermType = verifyTermAgainstTermType(termNode, this.termType, localMetaContext);
                            nodeMatches = termVerifiedAgainstTermType; ///
                        }
                    }
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
function verifyTermAgainstTermType(termNode, termType, localMetaContext) {
    var termVerifiedAgainstTermType;
    var type = termType, terms = [], localContext = localMetaContext; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuL3ZlcmlmeS90ZXJtXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQgfSBmcm9tIFwiLi9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudCEvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudCEvdHlwZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGF2YXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm1UeXBlID0gdGVybVR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGVybVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybVR5cGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTm9kZShub2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgbGV0IG5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH0gZWxzZSBpZiAoKHRlcm1Ob2RlID09PSBudWxsKSAmJiAodGhpcy50ZXJtVHlwZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoKHRlcm1Ob2RlICE9PSBudWxsKSAmJiAodGhpcy50ZXJtVHlwZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGUgPSB2ZXJpZnlUZXJtQWdhaW5zdFRlcm1UeXBlKHRlcm1Ob2RlLCB0aGlzLnRlcm1UeXBlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gdGhpcy5tZXRhVHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG5vZGUgPSBzdHJpbmcsICAvL1xuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9OiR7bWV0YVR5cGVOYW1lfWA7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbm9kZSB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxleGVyICA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBub2RlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm1UeXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUobm9kZSwgbmFtZSwgdGVybVR5cGUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZShub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0VGVybVR5cGUodGVybU5vZGUsIHRlcm1UeXBlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGU7XG5cbiAgY29uc3QgdHlwZSA9IHRlcm1UeXBlLCAgLy8vXG4gICAgICAgIHRlcm1zID0gW10sXG4gICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsTWV0YUNvbnRleHQ7ICAvLy9cblxuICB0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGUgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGU7XG59XG5cbmZ1bmN0aW9uIHRlcm1UeXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHRlcm1UeXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgICAgdGVybVR5cGUgPSB0eXBlOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdGVybVR5cGU7XG59XG4iXSwibmFtZXMiOlsiTWV0YXZhcmlhYmxlIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJub2RlIiwibmFtZSIsInRlcm1UeXBlIiwibWV0YVR5cGUiLCJnZXROb2RlIiwiZ2V0TmFtZSIsImdldFRlcm1UeXBlIiwiZ2V0TWV0YVR5cGUiLCJtYXRjaE5hbWUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImxvY2FsTWV0YUNvbnRleHQiLCJub2RlTWF0Y2hlcyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsIm5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwidGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlIiwidmVyaWZ5VGVybUFnYWluc3RUZXJtVHlwZSIsInRvSlNPTiIsInRva2VucyIsIm1ldGFUeXBlSlNPTiIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImpzb24iLCJhc1N0cmluZyIsIm1ldGFUeXBlTmFtZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwidGVybVR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZyb21Ob2RlTmFtZVRlcm1UeXBlQW5kTWV0YVR5cGUiLCJ0eXBlIiwidGVybXMiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlUZXJtIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VGVybSIsImZpcnN0IiwidGVybSIsImdldFR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImZpbmRUeXBlQnlUeXBlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFjcUJBOzs7MkRBWkU7cUJBRUQ7cUJBQ0k7c0JBQ0c7b0JBQ1k7d0JBQ007b0JBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLGtDQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpCLElB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