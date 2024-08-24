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
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
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
    var type = termType, terms = [], localContext = _local.default.fromLocalMetaContext(localMetaContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IG1ldGFUeXBlRnJvbUpTT05BbmRGaWxlQ29udGV4dCB9IGZyb20gXCIuL21ldGFUeXBlXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50IS90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50IS90eXBlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgbmFtZSwgdGVybVR5cGUsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGVybVR5cGUgPSB0ZXJtVHlwZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUZXJtVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtVHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOb2RlKG5vZGUsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBsZXQgbm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBuYW1lID0gbmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAvLy9cbiAgICAgICAgfSBlbHNlIGlmICgodGVybU5vZGUgPT09IG51bGwpICYmICh0aGlzLnRlcm1UeXBlID09PSBudWxsKSkge1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICgodGVybU5vZGUgIT09IG51bGwpICYmICh0aGlzLnRlcm1UeXBlICE9PSBudWxsKSkge1xuICAgICAgICAgIGNvbnN0IHRlcm1WZXJpZmllZEFnYWluc3RUZXJtVHlwZSA9IHZlcmlmeVRlcm1BZ2FpbnN0VGVybVR5cGUodGVybU5vZGUsIHRoaXMudGVybVR5cGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGU7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSB0aGlzLm1ldGFUeXBlLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUsIHRva2VucyksXG4gICAgICAgICAgbm9kZSA9IHN0cmluZywgIC8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gdGhpcy5tZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgdG9rZW5zKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ306JHttZXRhVHlwZU5hbWV9YDsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyBub2RlIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGV4ZXIgID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IG5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcodmFyaWFibGVTdHJpbmcsIGxleGVyLCBwYXJzZXIpO1xuXG4gICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gICAganNvbiA9IG1ldGFUeXBlOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBuYW1lID0gbmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybVR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZU5hbWVUZXJtVHlwZUFuZE1ldGFUeXBlKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUobm9kZSwgbmFtZSwgdGVybVR5cGUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFnYWluc3RUZXJtVHlwZSh0ZXJtTm9kZSwgdGVybVR5cGUsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFnYWluc3RUZXJtVHlwZTtcblxuICBjb25zdCB0eXBlID0gdGVybVR5cGUsICAvLy9cbiAgICAgICAgdGVybXMgPSBbXSxcbiAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Mb2NhbE1ldGFDb250ZXh0KGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gIHRlcm1WZXJpZmllZEFnYWluc3RUZXJtVHlwZSA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RUZXJtVHlwZTtcbn1cblxuZnVuY3Rpb24gdGVybVR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdGVybVR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICB0ZXJtVHlwZSA9IHR5cGU7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0ZXJtVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJNZXRhdmFyaWFibGUiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIm5vZGUiLCJuYW1lIiwidGVybVR5cGUiLCJtZXRhVHlwZSIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0VGVybVR5cGUiLCJnZXRNZXRhVHlwZSIsIm1hdGNoTmFtZSIsIm5hbWVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibG9jYWxNZXRhQ29udGV4dCIsIm5vZGVNYXRjaGVzIiwibWV0YXZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwibmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGUiLCJ2ZXJpZnlUZXJtQWdhaW5zdFRlcm1UeXBlIiwidG9KU09OIiwidG9rZW5zIiwibWV0YVR5cGVKU09OIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwianNvbiIsImFzU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJ0ZXJtVHlwZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZSIsInR5cGUiLCJ0ZXJtcyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Mb2NhbE1ldGFDb250ZXh0IiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJnZXRUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7OzJEQWJFOzREQUNFO3FCQUVIO3FCQUNJO3NCQUNHO29CQUNZO3dCQUNNO29CQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZELElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxrQ0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixJQUFBLEFBQU1GLDZCQUFELEFBQUw7YUFBTUEsYUFDUEksSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsUUFBUTtnQ0FEdkJQO1FBRWpCLElBQUksQ0FBQ0ksSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQUxDUDs7WUFRbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osUUFBUTtZQUN0Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osUUFBUTtZQUN0Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVUCxJQUFJO2dCQUNaLElBQU1RLGNBQWUsSUFBSSxDQUFDUixJQUFJLEtBQUtBO2dCQUVuQyxPQUFPUTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVWLElBQUksRUFBRVcsZ0JBQWdCO2dCQUM5QixJQUFJQyxjQUFjO2dCQUVsQixJQUFNQyxtQkFBbUJiLE1BQ25CYyxXQUFXZixjQUFjYztnQkFFL0IsSUFBSUMsYUFBYSxNQUFNO29CQUNyQixJQUFNYixPQUFPYyxJQUFBQSw4QkFBd0IsRUFBQ0Y7b0JBRXRDLElBQUksSUFBSSxDQUFDWixJQUFJLEtBQUtBLE1BQU07d0JBQ3RCLElBQU1lLFdBQVduQixjQUFjZ0I7d0JBRS9CLElBQUksT0FBTzt3QkFDVCxHQUFHO3dCQUNMLE9BQU8sSUFBSSxBQUFDRyxhQUFhLFFBQVUsSUFBSSxDQUFDZCxRQUFRLEtBQUssTUFBTzs0QkFDMURVLGNBQWM7d0JBQ2hCLE9BQU8sSUFBSSxBQUFDSSxhQUFhLFFBQVUsSUFBSSxDQUFDZCxRQUFRLEtBQUssTUFBTzs0QkFDMUQsSUFBTWUsOEJBQThCQywwQkFBMEJGLFVBQVUsSUFBSSxDQUFDZCxRQUFRLEVBQUVTOzRCQUV2RkMsY0FBY0ssNkJBQThCLEdBQUc7d0JBQ2pEO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9MO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTTtnQkFDWCxJQUFNQyxlQUFlLElBQUksQ0FBQ2xCLFFBQVEsQ0FBQ2dCLE1BQU0sQ0FBQ0MsU0FDcENFLFNBQVNDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDdkIsSUFBSSxFQUFFb0IsU0FDakNwQixPQUFPc0IsUUFDUG5CLFdBQVdrQixjQUNYRyxPQUFPO29CQUNMeEIsTUFBQUE7b0JBQ0FHLFVBQUFBO2dCQUNGO2dCQUVOLE9BQU9xQjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNMLE1BQU07Z0JBQ2IsSUFBTU0sZUFBZSxJQUFJLENBQUN2QixRQUFRLENBQUNFLE9BQU87Z0JBRTFDLElBQUlpQixTQUFTQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ3ZCLElBQUksRUFBRW9CO2dCQUVyQ0UsU0FBUyxBQUFDLEdBQVlJLE9BQVZKLFFBQU8sS0FBZ0IsT0FBYkksZUFBZ0IsR0FBRztnQkFFekMsT0FBT0o7WUFDVDs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJILElBQUksRUFBRUksV0FBVztnQkFDN0MsSUFBSSxBQUFFNUIsT0FBU3dCLEtBQVR4QjtnQkFFTixJQUFNNkIsUUFBU0QsWUFBWUUsUUFBUSxJQUM3QkMsU0FBU0gsWUFBWUksU0FBUyxJQUM5QkMsaUJBQWlCakMsTUFDakJhLG1CQUFtQnFCLElBQUFBLDRDQUFzQyxFQUFDRCxnQkFBZ0JKLE9BQU9FO2dCQUV2Ri9CLE9BQU9hLGtCQUFtQixHQUFHO2dCQUU3QixJQUFJLEFBQUVWLFdBQWFxQixLQUFickI7Z0JBRU5xQixPQUFPckIsVUFBVyxHQUFHO2dCQUVyQkEsV0FBV2dDLElBQUFBLHdDQUE4QixFQUFDWCxNQUFNSTtnQkFFaEQsSUFBTTNCLE9BQU9jLElBQUFBLDhCQUF3QixFQUFDRixtQkFDaENYLFdBQVdrQyw2QkFBNkJ2QixrQkFBa0JlLGNBQzFEUyxlQUFlLElBbEdKekMsYUFrR3FCSSxNQUFNQyxNQUFNQyxVQUFVQztnQkFFNUQsT0FBT2tDO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxnQ0FBZ0N0QyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxRQUFRO2dCQUNuRSxJQUFNa0MsZUFBZSxJQXhHSnpDLGFBd0dxQkksTUFBTUMsTUFBTUMsVUFBVUM7Z0JBRTVELE9BQU9rQztZQUNUOzs7V0EzR21CekM7O0FBOEdyQixTQUFTc0IsMEJBQTBCRixRQUFRLEVBQUVkLFFBQVEsRUFBRVMsZ0JBQWdCO0lBQ3JFLElBQUlNO0lBRUosSUFBTXNCLE9BQU9yQyxVQUNQc0MsUUFBUSxFQUFFLEVBQ1ZDLGVBQWVDLGNBQVksQ0FBQ0Msb0JBQW9CLENBQUNoQztJQUV2RE0sOEJBQThCMkIsSUFBQUEsYUFBVSxFQUFDNUIsVUFBVXdCLE9BQU9DLGNBQWM7UUFDdEUsSUFBSUksZ0JBQWdCO1FBRXBCLElBQU1DLFlBQVlDLElBQUFBLFlBQUssRUFBQ1AsUUFDbEJRLE9BQU9GLFdBQ1A1QyxhQUFXOEMsS0FBS0MsT0FBTyxJQUN2QkMsaUNBQWlDaEQsV0FBU2lELG9CQUFvQixDQUFDWjtRQUVyRSxJQUFJVyxnQ0FBZ0M7WUFDbENMLGdCQUFnQjtRQUNsQjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPNUI7QUFDVDtBQUVBLFNBQVNtQiw2QkFBNkJ2QixnQkFBZ0IsRUFBRWUsV0FBVztJQUNqRSxJQUFJMUIsV0FBVztJQUVmLElBQU1ZLFdBQVdmLGNBQWNjO0lBRS9CLElBQUlDLGFBQWEsTUFBTTtRQUNuQixJQUFNeUIsT0FBT1gsWUFBWXdCLGtCQUFrQixDQUFDdEM7UUFFNUNaLFdBQVdxQyxNQUFPLEdBQUc7SUFDekI7SUFFQSxPQUFPckM7QUFDVCJ9