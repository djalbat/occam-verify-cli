"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Reference;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _label = /*#__PURE__*/ _interop_require_default(require("./unifier/label"));
var _query = require("./utilities/query");
var _metaType = require("./metaType");
var _json = require("./utilities/json");
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
var metavariableNodeQuery = (0, _query.nodeQuery)("//reference/metavariable");
var Reference = /*#__PURE__*/ function() {
    function Reference(metavariable) {
        _class_call_check(this, Reference);
        this.metavariable = metavariable;
    }
    _create_class(Reference, [
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.metavariable.getString();
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.metavariable.getTokens();
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                return this.metavariable.matchMetavariableNode(metavariableNode);
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = this.metavariable.getName();
                return metavariableName;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var metavariableNode = this.metavariable.getNode();
                return metavariableNode;
            }
        },
        {
            key: "unifyLabel",
            value: function unifyLabel(label, substitutions, generalContext, specificContext) {
                var labelUnified;
                var reference = this, labelString = label.getString(), referenceString = reference.getString();
                specificContext.trace("Unifying the '".concat(labelString, "' label with the '").concat(referenceString, "' reference..."));
                var tokens, context, localContext;
                var labelTokens = label.getTokens();
                context = generalContext; ///
                tokens = labelTokens; ///
                localContext = _local.default.fromContextAndTokens(context, tokens);
                generalContext = localContext; ///
                var referenceTokens = reference.getTokens();
                context = specificContext; ///
                tokens = referenceTokens; ///
                localContext = _local.default.fromContextAndTokens(context, tokens);
                specificContext = localContext; ///
                var labelMetavariable = label.getMetavariable(), referenceMetavariable = reference.getMetavariable(), labelMetavariableNode = labelMetavariable.getNode(), referenceMetavariableNode = referenceMetavariable.getNode();
                labelUnified = _label.default.unify(labelMetavariableNode, referenceMetavariableNode, substitutions, generalContext, specificContext);
                if (labelUnified) {
                    specificContext.debug("...unified the '".concat(labelString, "' label with the '").concat(referenceString, "' reference."));
                }
                return labelUnified;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var referenceString = this.getString(); ///
                context.trace("Verifying the '".concat(referenceString, "' reference..."));
                if (!verified) {
                    var metaType = _metaType.referenceMetaType, metavariableVerifiedGivenMetaType = this.metavariable.verifyGivenMetaType(metaType, context);
                    verified = metavariableVerifiedGivenMetaType; ///
                }
                if (verified) {
                    context.debug("...verified the '".concat(referenceString, "' reference."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metavariableJSON = (0, _json.metavariableToMetavariableJSON)(this.metavariable), metavariable = metavariableJSON, string1 = this.string, json = {
                    string: string1,
                    metavariable: metavariable
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var metavariable = (0, _json.metavariableFromJSON)(json, fileContext), reference = new Reference(string, metavariable);
                return reference;
            }
        },
        {
            key: "fromReferenceNode",
            value: function fromReferenceNode(referenceNode, fileContext) {
                var Metavariable = _shim.default.Metavariable, metavariableNode = metavariableNodeQuery(referenceNode), localContext = _local.default.fromFileContext(fileContext), context = localContext, metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), reference = new Reference(metavariable);
                return reference;
            }
        }
    ]);
    return Reference;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IGxhYmVsVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL2xhYmVsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgcmVmZXJlbmNlTWV0YVR5cGUgfSBmcm9tIFwiLi9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8vcmVmZXJlbmNlL21ldGF2YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVmZXJlbmNlIHtcbiAgY29uc3RydWN0b3IobWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRUb2tlbnMoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXRUb2tlbnMoKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZWQ7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLFxuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGxldCB0b2tlbnMsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGxvY2FsQ29udGV4dDtcblxuICAgIGNvbnN0IGxhYmVsVG9rZW5zID0gbGFiZWwuZ2V0VG9rZW5zKCk7XG5cbiAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgdG9rZW5zID0gbGFiZWxUb2tlbnM7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0QW5kVG9rZW5zKGNvbnRleHQsIHRva2Vucyk7XG5cbiAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgcmVmZXJlbmNlVG9rZW5zID0gcmVmZXJlbmNlLmdldFRva2VucygpO1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICB0b2tlbnMgPSByZWZlcmVuY2VUb2tlbnM7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0QW5kVG9rZW5zKGNvbnRleHQsIHRva2Vucyk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IGxhYmVsTWV0YXZhcmlhYmxlID0gbGFiZWwuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIGxhYmVsTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlTWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIGxhYmVsVW5pZmllZCA9IGxhYmVsVW5pZmllci51bmlmeShsYWJlbE1ldGF2YXJpYWJsZU5vZGUsIHJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlID0gcmVmZXJlbmNlTWV0YVR5cGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUudmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gbWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2Uoc3RyaW5nLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkocmVmZXJlbmNlTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UobWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRTdHJpbmciLCJnZXRUb2tlbnMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJ1bmlmeUxhYmVsIiwibGFiZWwiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJsYWJlbFVuaWZpZWQiLCJyZWZlcmVuY2UiLCJsYWJlbFN0cmluZyIsInJlZmVyZW5jZVN0cmluZyIsInRyYWNlIiwidG9rZW5zIiwiY29udGV4dCIsImxvY2FsQ29udGV4dCIsImxhYmVsVG9rZW5zIiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHRBbmRUb2tlbnMiLCJyZWZlcmVuY2VUb2tlbnMiLCJsYWJlbE1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZSIsImxhYmVsTWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUiLCJsYWJlbFVuaWZpZXIiLCJ1bmlmeSIsImRlYnVnIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJtZXRhVHlwZSIsInJlZmVyZW5jZU1ldGFUeXBlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsInRvSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJzdHJpbmciLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwiZnJvbVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiTWV0YXZhcmlhYmxlIiwic2hpbSIsImZyb21GaWxlQ29udGV4dCIsImZyb21NZXRhdmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzsyREFWSjs0REFDUTs0REFDQTtxQkFFQzt3QkFDUTtvQkFDbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckUsSUFBTUMsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXpCLElBQUEsQUFBTUYsMEJBQU47YUFBTUEsVUFDUEcsWUFBWTtnQ0FETEg7UUFFakIsSUFBSSxDQUFDRyxZQUFZLEdBQUdBOztrQkFGSEg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFlBQVk7WUFDMUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNGLFlBQVksQ0FBQ0UsU0FBUztZQUFJOzs7WUFFcERDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUks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