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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuL3ZlcmlmeS90ZXJtXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQgfSBmcm9tIFwiLi9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudCEvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudCEvdHlwZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGF2YXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm1UeXBlID0gdGVybVR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGVybVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybVR5cGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc05hbWUgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzTmFtZTtcbiAgfVxuXG4gIG1hdGNoTm9kZShub2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlc05vZGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBuYW1lID0gbmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAvLy9cbiAgICAgICAgfSBlbHNlIGlmICgodGVybU5vZGUgPT09IG51bGwpICYmICh0aGlzLnRlcm1UeXBlID09PSBudWxsKSkge1xuICAgICAgICAgIG1hdGNoZXNOb2RlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICgodGVybU5vZGUgIT09IG51bGwpICYmICh0aGlzLnRlcm1UeXBlICE9PSBudWxsKSkge1xuICAgICAgICAgIGNvbnN0IHRlcm1WZXJpZmllZEFnYWluc3RUZXJtVHlwZSA9IHZlcmlmeVRlcm1BZ2FpbnN0VGVybVR5cGUodGVybU5vZGUsIHRoaXMudGVybVR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBtYXRjaGVzTm9kZSA9IHRlcm1WZXJpZmllZEFnYWluc3RUZXJtVHlwZTsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNOb2RlO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFUeXBlSlNPTiA9IHRoaXMubWV0YVR5cGUudG9KU09OKHRva2VucyksXG4gICAgICAgICAgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBub2RlID0gc3RyaW5nLCAgLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSB0aGlzLm1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGxldCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfToke21ldGFUeXBlTmFtZX1gOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IG5vZGUgfSA9IGpzb247XG5cbiAgICBjb25zdCBsZXhlciAgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gbm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyh2YXJpYWJsZVN0cmluZywgbGV4ZXIsIHBhcnNlcik7XG5cbiAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgbGV0IHsgbWV0YVR5cGUgfSA9IGpzb247XG5cbiAgICBqc29uID0gbWV0YVR5cGU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdGVybVR5cGUgPSB0ZXJtVHlwZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlTmFtZVRlcm1UeXBlQW5kTWV0YVR5cGUobm9kZSwgbmFtZSwgdGVybVR5cGUsIG1ldGFUeXBlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdFRlcm1UeXBlKHRlcm1Ob2RlLCB0ZXJtVHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGU7XG5cbiAgY29uc3QgdHlwZSA9IHRlcm1UeXBlLCAgLy8vXG4gICAgICAgIHRlcm1zID0gW107XG5cbiAgdGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUpIHtcbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICB9KTtcblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlO1xufVxuXG5mdW5jdGlvbiB0ZXJtVHlwZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0ZXJtVHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgdGVybVR5cGUgPSB0eXBlOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdGVybVR5cGU7XG59XG4iXSwibmFtZXMiOlsiTWV0YXZhcmlhYmxlIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJub2RlIiwibmFtZSIsInRlcm1UeXBlIiwibWV0YVR5cGUiLCJnZXROb2RlIiwiZ2V0TmFtZSIsImdldFRlcm1UeXBlIiwiZ2V0TWV0YVR5cGUiLCJtYXRjaE5hbWUiLCJtYXRjaGVzTmFtZSIsIm1hdGNoTm9kZSIsImxvY2FsQ29udGV4dCIsIm1hdGNoZXNOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwibmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGUiLCJ2ZXJpZnlUZXJtQWdhaW5zdFRlcm1UeXBlIiwidG9KU09OIiwidG9rZW5zIiwibWV0YVR5cGVKU09OIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwianNvbiIsImFzU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhVHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJ0ZXJtVHlwZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZSIsInR5cGUiLCJ0ZXJtcyIsInZlcmlmeVRlcm0iLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwiZ2V0VHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZmluZFR5cGVCeVR5cGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OzsyREFaRTtxQkFFRDtxQkFDSTtzQkFDRztvQkFDWTt3QkFDTTtvQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsa0NBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakIsSUFBQSxBQUFNRiw2QkFBRCxBQUFMO2FBQU1BLGFBQ1BJLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFFBQVE7Z0NBRHZCUDtRQUVq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