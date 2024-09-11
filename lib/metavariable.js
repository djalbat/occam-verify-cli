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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuL3ZlcmlmeS90ZXJtXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50L3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnQvdHlwZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGF2YXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm1UeXBlID0gdGVybVR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGVybVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybVR5cGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSB0aGlzLm1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU5hbWU7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOYW1lID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc05hbWU7XG4gIH1cblxuICBtYXRjaE5vZGUobm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IG1hdGNoZXNOb2RlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH0gZWxzZSBpZiAoKHRlcm1Ob2RlID09PSBudWxsKSAmJiAodGhpcy50ZXJtVHlwZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgICBtYXRjaGVzTm9kZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoKHRlcm1Ob2RlICE9PSBudWxsKSAmJiAodGhpcy50ZXJtVHlwZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtVW5pZmllZEFnYWluc3RUZXJtVHlwZSA9IHVuaWZ5VGVybUFnYWluc3RUZXJtVHlwZSh0ZXJtTm9kZSwgdGhpcy50ZXJtVHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIG1hdGNoZXNOb2RlID0gdGVybVVuaWZpZWRBZ2FpbnN0VGVybVR5cGU7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzTm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9OiR7bWV0YVR5cGVOYW1lfWA7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZU5hbWVUZXJtVHlwZUFuZE1ldGFUeXBlKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUobm9kZSwgbmFtZSwgdGVybVR5cGUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5VGVybUFnYWluc3RUZXJtVHlwZSh0ZXJtTm9kZSwgdGVybVR5cGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdGVybVVuaWZpZWRBZ2FpbnN0VGVybVR5cGU7XG5cbiAgY29uc3QgdHlwZSA9IHRlcm1UeXBlLCAgLy8vXG4gICAgICAgIHRlcm1zID0gW10sXG4gICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgdGVybVVuaWZpZWRBZ2FpbnN0VGVybVR5cGUgPSB0ZXJtVmVyaWZpZWQ7ICAvLy9cblxuICByZXR1cm4gdGVybVVuaWZpZWRBZ2FpbnN0VGVybVR5cGU7XG59XG5cbmZ1bmN0aW9uIHRlcm1UeXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHRlcm1UeXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICB0ZXJtVHlwZSA9IHR5cGU7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0ZXJtVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJNZXRhdmFyaWFibGUiLCJ1bmlmeVRlcm1BZ2FpbnN0VGVybVR5cGUiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIm5vZGUiLCJuYW1lIiwidGVybVR5cGUiLCJtZXRhVHlwZSIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0VGVybVR5cGUiLCJnZXRNZXRhVHlwZSIsImdldE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1hdGNoTmFtZSIsIm1hdGNoZXNOYW1lIiwibWF0Y2hOb2RlIiwibG9jYWxDb250ZXh0IiwibWF0Y2hlc05vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwidHlwZU5vZGUiLCJuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1VbmlmaWVkQWdhaW5zdFRlcm1UeXBlIiwiYXNTdHJpbmciLCJ0b2tlbnMiLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJmcm9tTm9kZU5hbWVUZXJtVHlwZUFuZE1ldGFUeXBlIiwibWV0YXZhcmlhYmxlIiwidHlwZSIsInRlcm1zIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJnZXRUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ0ZXJtVHlwZUZyb21NZXRhdmFyaWFibGVOb2RlIiwiZmlsZUNvbnRleHQiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFZcUJBOztJQWdGTEMsd0JBQXdCO2VBQXhCQTs7OzJEQTFGTztxQkFFRDtxQkFDSTtzQkFDRztvQkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsaUNBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakIsSUFBQSxBQUFNSCw2QkFBTjthQUFNQSxhQUNQSyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxRQUFRO2dDQUR2QlI7UUFFakIsSUFBSSxDQUFDSyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBTENSOztZQVFuQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFB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