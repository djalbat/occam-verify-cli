"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _unify = /*#__PURE__*/ _interop_require_default(require("./mixins/statement/unify"));
var _verify = /*#__PURE__*/ _interop_require_default(require("./mixins/statement/verify"));
var _statementAsCombinator = /*#__PURE__*/ _interop_require_default(require("./verifier/statementAsCombinator"));
var _node = require("./utilities/node");
var _metaTypeNames = require("./metaTypeNames");
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
var Statement = /*#__PURE__*/ function() {
    function Statement(string, node) {
        _class_call_check(this, Statement);
        this.string = string;
        this.node = node;
    }
    _create_class(Statement, [
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
            key: "isEqualTo",
            value: function isEqualTo(statement) {
                var node = statement.getNode(), matches = this.node.match(node), equalTo = matches; ///
                return equalTo;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified = false;
                var statement = this, statementString = this.string; ///
                localContext.trace("Verifying the '".concat(statementString, "' statement..."));
                if (!verified) {
                    verified = _unify.default.some(function(unifyMixin) {
                        var unified = unifyMixin(statement, assignments, stated, localContext);
                        if (unified) {
                            return true;
                        }
                    });
                }
                if (!verified) {
                    verified = _verify.default.some(function(verifyMixin) {
                        var verified = verifyMixin(statement, assignments, stated, localContext);
                        if (verified) {
                            return true;
                        }
                    });
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(statementString, "' statement."));
                }
                return verified;
            }
        },
        {
            key: "unifyWithMetaType",
            value: function unifyWithMetaType(metaType, assignments, stated, localContext) {
                var unifiedWithMetaType;
                var verifiedGivenMetaType = this.verifyGivenMetaType(metaType, assignments, stated, localContext);
                unifiedWithMetaType = verifiedGivenMetaType; ///
                return unifiedWithMetaType;
            }
        },
        {
            key: "verifyAsCombinator",
            value: function verifyAsCombinator(fileContext) {
                var verifiedAsCombinator;
                var statementNode = this.node, statementString = this.string; ///
                fileContext.trace("Verifying the '".concat(statementString, "' statement as a combinator..."));
                verifiedAsCombinator = _statementAsCombinator.default.verifyStatement(statementNode, fileContext);
                if (verifiedAsCombinator) {
                    fileContext.debug("...verified the '".concat(statementString, "' statement as a combinator."), statementNode);
                }
                return verifiedAsCombinator;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, assignments, stated, localContext) {
                var verifiedGivenMetaType;
                var metaTypeName = metaType.getName();
                switch(metaTypeName){
                    case _metaTypeNames.FRAME_META_TYPE_NAME:
                    case _metaTypeNames.REFERENCE_META_TYPE_NAME:
                        {
                            debugger;
                            break;
                        }
                    case _metaTypeNames.STATEMENT_META_TYPE_NAME:
                        {
                            var verified = this.verify(assignments, stated, localContext);
                            verifiedGivenMetaType = verified; ///
                            break;
                        }
                }
                return verifiedGivenMetaType;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var string = this.string, json = {
                    string: string
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string, statementString = string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), node = statementNode, statement = new Statement(string, node);
                return statement;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, localContext) {
                var statement;
                if (statementNode !== null) {
                    var node = statementNode, string = localContext.nodeAsString(node);
                    statement = new Statement(string, node);
                }
                return statement;
            }
        }
    ]);
    return Statement;
}();
Object.assign(_shim.default, {
    Statement: Statement
});
Object.assign(Statement.prototype, _unify.default);
var _default = Statement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3RhdGVtZW50L3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZW1lbnQvdmVyaWZ5XCI7XG5pbXBvcnQgc3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvc3RhdGVtZW50QXNDb21iaW5hdG9yXCI7XG5cbmltcG9ydCB7IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuL21ldGFUeXBlTmFtZXNcIjtcblxuY2xhc3MgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBpc0VxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgbm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChub2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgdmVyaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7IC8vL1xuICAgICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbihzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgdmVyaWZpZWQgPSB2ZXJpZnlNaXhpbnMuc29tZSgodmVyaWZ5TWl4aW4pID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWQgPSB2ZXJpZnlNaXhpbihzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5V2l0aE1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhNZXRhVHlwZTtcblxuICAgIGNvbnN0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHRoaXMudmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHVuaWZpZWRXaXRoTWV0YVR5cGUgPSB2ZXJpZmllZEdpdmVuTWV0YVR5cGU7ICAvLy9cblxuICAgIHJldHVybiB1bmlmaWVkV2l0aE1ldGFUeXBlO1xuICB9XG5cbiAgdmVyaWZ5QXNDb21iaW5hdG9yKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXNDb21iaW5hdG9yO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBjb21iaW5hdG9yLi4uYCk7XG5cbiAgICB2ZXJpZmllZEFzQ29tYmluYXRvciA9IHN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyLnZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRBc0NvbWJpbmF0b3IpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgY29tYmluYXRvci5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBc0NvbWJpbmF0b3I7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgc3dpdGNoIChtZXRhVHlwZU5hbWUpIHtcbiAgICAgIGNhc2UgRlJBTUVfTUVUQV9UWVBFX05BTUU6XG4gICAgICBjYXNlIFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRToge1xuICAgICAgICBkZWJ1Z2dlclxuXG4gICAgICAgIC8vIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuICAgICAgICAvL1xuICAgICAgICAvLyBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAvLyAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgIC8vICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBtZXRhdmFyaWFibGVNZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZSgpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgaWYgKG1ldGF2YXJpYWJsZU1ldGFUeXBlID09PSBtZXRhVHlwZSkge1xuICAgICAgICAvLyAgICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRToge1xuICAgICAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dClcblxuICAgICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0cmluZywgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50O1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdGF0ZW1lbnRcbn0pO1xuXG5PYmplY3QuYXNzaWduKFN0YXRlbWVudC5wcm90b3R5cGUsIHVuaWZ5TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50O1xuXG4iXSwibmFtZXMiOlsiU3RhdGVtZW50Iiwic3RyaW5nIiwibm9kZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJpc0VxdWFsVG8iLCJzdGF0ZW1lbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJlcXVhbFRvIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwidW5pZnlNaXhpbnMiLCJzb21lIiwidW5pZnlNaXhpbiIsInVuaWZpZWQiLCJ2ZXJpZnlNaXhpbnMiLCJ2ZXJpZnlNaXhpbiIsImRlYnVnIiwidW5pZnlXaXRoTWV0YVR5cGUiLCJtZXRhVHlwZSIsInVuaWZpZWRXaXRoTWV0YVR5cGUiLCJ2ZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwidmVyaWZ5QXNDb21iaW5hdG9yIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZEFzQ29tYmluYXRvciIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciIsInZlcmlmeVN0YXRlbWVudCIsIm1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsIlJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyIsImZyb21TdGF0ZW1lbnROb2RlIiwibm9kZUFzU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSIsInByb3RvdHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUxBOzs7ZUFBQTs7OzJEQS9LaUI7NERBQ087NkRBQ0M7NEVBQ2lCO29CQUVPOzZCQUN3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RixJQUFBLEFBQU1BLDBCQUFOO2FBQU1BLFVBQ1FDLE1BQU0sRUFBRUMsSUFBSTtnQ0FEcEJGO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFIVkY7O1lBTUpHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxTQUFTO2dCQUNqQixJQUFNSixPQUFPSSxVQUFVRixPQUFPLElBQ3hCRyxVQUFVLElBQUksQ0FBQ0wsSUFBSSxDQUFDTSxLQUFLLENBQUNOLE9BQzFCTyxVQUFVRixTQUFVLEdBQUc7Z0JBRTdCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7Z0JBQ3RDLElBQUlDLFdBQVc7Z0JBRWYsSUFBTVIsWUFBWSxJQUFJLEVBQ2hCUyxrQkFBa0IsSUFBSSxDQUFDZCxNQUFNLEVBQUcsR0FBRztnQkFFekNZLGFBQWFHLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkQsaUJBQWdCO2dCQUVyRCxJQUFJLENBQUNELFVBQVU7b0JBQ2JBLFdBQVdHLGNBQVcsQ0FBQ0MsSUFBSSxDQUFDLFNBQUND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