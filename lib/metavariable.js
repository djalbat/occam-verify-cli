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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuL3ZlcmlmeS90ZXJtXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQgfSBmcm9tIFwiLi9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudCEvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudCEvdHlwZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGF2YXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm1UeXBlID0gdGVybVR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGVybVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybVR5cGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSB0aGlzLm1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU5hbWU7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOYW1lID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc05hbWU7XG4gIH1cblxuICBtYXRjaE5vZGUobm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IG1hdGNoZXNOb2RlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH0gZWxzZSBpZiAoKHRlcm1Ob2RlID09PSBudWxsKSAmJiAodGhpcy50ZXJtVHlwZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgICBtYXRjaGVzTm9kZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoKHRlcm1Ob2RlICE9PSBudWxsKSAmJiAodGhpcy50ZXJtVHlwZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGUgPSB2ZXJpZnlUZXJtQWdhaW5zdFRlcm1UeXBlKHRlcm1Ob2RlLCB0aGlzLnRlcm1UeXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgbWF0Y2hlc05vZGUgPSB0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGU7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzTm9kZTtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSB0aGlzLm1ldGFUeXBlLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUsIHRva2VucyksXG4gICAgICAgICAgbm9kZSA9IHN0cmluZywgIC8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gdGhpcy5tZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgdG9rZW5zKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ306JHttZXRhVHlwZU5hbWV9YDsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyBub2RlIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGV4ZXIgID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IG5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcodmFyaWFibGVTdHJpbmcsIGxleGVyLCBwYXJzZXIpO1xuXG4gICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gICAganNvbiA9IG1ldGFUeXBlOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBuYW1lID0gbmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybVR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZU5hbWVUZXJtVHlwZUFuZE1ldGFUeXBlKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUobm9kZSwgbmFtZSwgdGVybVR5cGUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFnYWluc3RUZXJtVHlwZSh0ZXJtTm9kZSwgdGVybVR5cGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlO1xuXG4gIGNvbnN0IHR5cGUgPSB0ZXJtVHlwZSwgIC8vL1xuICAgICAgICB0ZXJtcyA9IFtdO1xuXG4gIHRlcm1WZXJpZmllZEFnYWluc3RUZXJtVHlwZSA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RUZXJtVHlwZTtcbn1cblxuZnVuY3Rpb24gdGVybVR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdGVybVR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgIHRlcm1UeXBlID0gdHlwZTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRlcm1UeXBlO1xufVxuIl0sIm5hbWVzIjpbIk1ldGF2YXJpYWJsZSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZSIsIm5hbWUiLCJ0ZXJtVHlwZSIsIm1ldGFUeXBlIiwiZ2V0Tm9kZSIsImdldE5hbWUiLCJnZXRUZXJtVHlwZSIsImdldE1ldGFUeXBlIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWF0Y2hOYW1lIiwibWF0Y2hlc05hbWUiLCJtYXRjaE5vZGUiLCJsb2NhbENvbnRleHQiLCJtYXRjaGVzTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsIm5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwidGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlIiwidmVyaWZ5VGVybUFnYWluc3RUZXJtVHlwZSIsInRvSlNPTiIsInRva2VucyIsIm1ldGFUeXBlSlNPTiIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImpzb24iLCJhc1N0cmluZyIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwidGVybVR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZyb21Ob2RlTmFtZVRlcm1UeXBlQW5kTWV0YVR5cGUiLCJ0eXBlIiwidGVybXMiLCJ2ZXJpZnlUZXJtIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VGVybSIsImZpcnN0IiwidGVybSIsImdldFR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImZpbmRUeXBlQnlUeXBlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFjcUJBOzs7MkRBWkU7cUJBRUQ7cUJBQ0k7c0JBQ0c7b0JBQ1k7d0JBQ007b0JBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxF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