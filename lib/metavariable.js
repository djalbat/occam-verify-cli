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
    verifyTermAgainstTermType: function() {
        return verifyTermAgainstTermType;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuL3ZlcmlmeS90ZXJtXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQgfSBmcm9tIFwiLi9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudC90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50L3R5cGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhdmFyaWFibGUge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50ZXJtVHlwZSA9IHRlcm1UeXBlO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFRlcm1UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1UeXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gdGhpcy5tZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGVOYW1lO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgbWF0Y2hOb2RlKG5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBtYXRjaGVzTm9kZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAgIC8vL1xuICAgICAgICB9IGVsc2UgaWYgKCh0ZXJtTm9kZSA9PT0gbnVsbCkgJiYgKHRoaXMudGVybVR5cGUgPT09IG51bGwpKSB7XG4gICAgICAgICAgbWF0Y2hlc05vZGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCh0ZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHRoaXMudGVybVR5cGUgIT09IG51bGwpKSB7XG4gICAgICAgICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlID0gdmVyaWZ5VGVybUFnYWluc3RUZXJtVHlwZSh0ZXJtTm9kZSwgdGhpcy50ZXJtVHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIG1hdGNoZXNOb2RlID0gdGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc05vZGU7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gdGhpcy5tZXRhVHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG5vZGUgPSBzdHJpbmcsICAvL1xuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9OiR7bWV0YVR5cGVOYW1lfWA7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbm9kZSB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxleGVyICA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBub2RlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm1UeXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUobm9kZSwgbmFtZSwgdGVybVR5cGUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZShub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdFRlcm1UeXBlKHRlcm1Ob2RlLCB0ZXJtVHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGU7XG5cbiAgY29uc3QgdHlwZSA9IHRlcm1UeXBlLCAgLy8vXG4gICAgICAgIHRlcm1zID0gW107XG5cbiAgdGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUpIHtcbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICB9KTtcblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlO1xufVxuXG5mdW5jdGlvbiB0ZXJtVHlwZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0ZXJtVHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgdGVybVR5cGUgPSB0eXBlOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdGVybVR5cGU7XG59XG4iXSwibmFtZXMiOlsiTWV0YXZhcmlhYmxlIiwidmVyaWZ5VGVybUFnYWluc3RUZXJtVHlwZSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZSIsIm5hbWUiLCJ0ZXJtVHlwZSIsIm1ldGFUeXBlIiwiZ2V0Tm9kZSIsImdldE5hbWUiLCJnZXRUZXJtVHlwZSIsImdldE1ldGFUeXBlIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWF0Y2hOYW1lIiwibWF0Y2hlc05hbWUiLCJtYXRjaE5vZGUiLCJsb2NhbENvbnRleHQiLCJtYXRjaGVzTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsIm5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwidGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlIiwidG9KU09OIiwidG9rZW5zIiwibWV0YVR5cGVKU09OIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwianNvbiIsImFzU3RyaW5nIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJ0ZXJtVHlwZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZSIsInR5cGUiLCJ0ZXJtcyIsInZlcmlmeVRlcm0iLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwiZ2V0VHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZmluZFR5cGVCeVR5cGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBY3FCQTs7SUFvSExDLHlCQUF5QjtlQUF6QkE7OzsyREFoSU87cUJBRUQ7cUJBQ0k7c0JBQ0c7b0JBQ1k7d0JBQ007b0JBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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