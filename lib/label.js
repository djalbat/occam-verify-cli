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
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _intrinsicLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/intrinsicLevel"));
var _query = require("./utilities/query");
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
var metavariableNodeQuery = (0, _query.nodeQuery)("//label/metavariable");
var Label = /*#__PURE__*/ function() {
    function Label(metavariable) {
        _class_call_check(this, Label);
        this.metavariable = metavariable;
    }
    _create_class(Label, [
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
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                return this.metavariable.matchMetavariableNode(metavariableNode);
            }
        },
        {
            key: "unifyReference",
            value: function unifyReference(reference, generalContext, specificContext) {
                var Substitutions = _shim.default.Substitutions, metavariableNode = this.metavariable.getNode(), referenceMetavariable = reference.getMetavariable(), referenceMetavariableNode = referenceMetavariable.getNode(), generalMetavariableNode = metavariableNode, specificMetavariableNode = referenceMetavariableNode, substitutions = Substitutions.fromNothing(), metavariableUnified = _intrinsicLevel.default.unify(generalMetavariableNode, specificMetavariableNode, substitutions, generalContext, specificContext);
                return metavariableUnified;
            }
        },
        {
            key: "verifyWhenDeclared",
            value: function verifyWhenDeclared(fileContext) {
                var verifiedAtTopLevel = false;
                var labelString = this.getString(); ///
                fileContext.trace("Verifying the '".concat(labelString, "' label when declared..."));
                var metavariableNode = this.metavariable.getNode(), labelPresent = fileContext.isLabelPresentByMetavariableNode(metavariableNode);
                if (labelPresent) {
                    fileContext.debug("The '".concat(labelString, "' label is already present."));
                } else {
                    verifiedAtTopLevel = true;
                }
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(labelString, "' label when declared."));
                }
                return verifiedAtTopLevel;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metavariableJSON = (0, _json.metavariableToMetavariableJSON)(this.metavariable), metavariable = metavariableJSON, json = {
                    metavariable: metavariable
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var metavariable = (0, _json.metavariableFromJSON)(json, fileContext), label = new Label(metavariable);
                return label;
            }
        },
        {
            key: "fromLabelNode",
            value: function fromLabelNode(labelNode, fileContext) {
                var Metavariable = _shim.default.Metavariable, metavariableNode = metavariableNodeQuery(labelNode), localContext = _local.default.fromFileContext(fileContext), metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext), label = new Label(metavariable);
                return label;
            }
        }
    ]);
    return Label;
}();
Object.assign(_shim.default, {
    Label: Label
});
var _default = Label;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgaW50cmluc2ljTGV2ZWxVbmlmaWVyIGZyb20gXCIuL3VuaWZpZXIvaW50cmluc2ljTGV2ZWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tSlNPTiwgbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLy9sYWJlbC9tZXRhdmFyaWFibGVcIik7XG5cbmNsYXNzIExhYmVsIHtcbiAgY29uc3RydWN0b3IobWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZCA9IGludHJpbnNpY0xldmVsVW5pZmllci51bmlmeShnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlY2xhcmVkKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2hlbiBkZWNsYXJlZC4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBmaWxlQ29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChsYWJlbFByZXNlbnQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdoZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkobGFiZWxOb2RlKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBMYWJlbFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuIl0sIm5hbWVzIjpbIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIkxhYmVsIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0U3RyaW5nIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInVuaWZ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJTdWJzdGl0dXRpb25zIiwic2hpbSIsImdldE5vZGUiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwiaW50cmluc2ljTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsImxhYmVsU3RyaW5nIiwidHJhY2UiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImRlYnVnIiwidG9KU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwibGFiZWwiLCJmcm9tTGFiZWxOb2RlIiwibGFiZWxOb2RlIiwiTWV0YXZhcmlhYmxlIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRGQTs7O2VBQUE7OzsyREExRmlCOzREQUNRO3FFQUNTO3FCQUVSO29CQUMyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRSxJQUFNQSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFeEMsSUFBQSxBQUFNQyxzQkFBTjthQUFNQSxNQUNRQyxZQUFZO2dDQURwQkQ7UUFFRixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUZsQkQ7O1lBS0pFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsWUFBWTtZQUMxQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0YsWUFBWSxDQUFDRSxTQUFTO1lBQUk7OztZQUVwREMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCO2dCQUFJLE9BQU8sSUFBSSxDQUFDSixZQUFZLENBQUNHLHFCQUFxQixDQUFDQztZQUFtQjs7O1lBRTVHQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUyxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ3ZELElBQU0sQUFBRUMsZ0JBQWtCQyxhQUFJLENBQXRCRCxlQUNGTCxtQkFBbUIsSUFBSSxDQUFDSixZQUFZLENBQUNXLE9BQU8sSUFDNUNDLHdCQUF3Qk4sVUFBVUwsZUFBZSxJQUNqRFksNEJBQTRCRCxzQkFBc0JELE9BQU8sSUFDekRHLDBCQUEwQlYsa0JBQzFCVywyQkFBMkJGLDJCQUMzQkcsZ0JBQWdCUCxjQUFjUSxXQUFXLElBQ3pDQyxzQkFBc0JDLHVCQUFxQixDQUFDQyxLQUFLLENBQUNOLHlCQUF5QkMsMEJBQTBCQyxlQUFlVCxnQkFBZ0JDO2dCQUUxSSxPQUFPVTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsV0FBVztnQkFDNUIsSUFBSUMscUJBQXFCO2dCQUV6QixJQUFNQyxjQUFjLElBQUksQ0FBQ3RCLFNBQVMsSUFBSSxHQUFHO2dCQUV6Q29CLFlBQVlHLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaRCxhQUFZO2dCQUVoRCxJQUFNcEIsbUJBQW1CLElBQUksQ0FBQ0osWUFBWSxDQUFDVyxPQUFPLElBQzVDZSxlQUFlSixZQUFZSyxnQ0FBZ0MsQ0FBQ3ZCO2dCQUVsRSxJQUFJc0IsY0FBYztvQkFDaEJKLFlBQVlNLEtBQUssQ0FBQyxBQUFDLFFBQW1CLE9BQVpKLGFBQVk7Z0JBQ3hDLE9BQU87b0JBQ0xELHFCQUFxQjtnQkFDdkI7Z0JBRUEsSUFBSUEsb0JBQW9CO29CQUN0QkQsWUFBWU0sS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpKLGFBQVk7Z0JBQ3BEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CQyxJQUFBQSxvQ0FBOEIsRUFBQyxJQUFJLENBQUMvQixZQUFZLEdBQ25FQSxlQUFlOEIsa0JBQ2ZFLE9BQU87b0JBQ0xoQyxjQUFBQTtnQkFDRjtnQkFFTixPQUFPZ0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVWLFdBQVc7Z0JBQy9CLElBQU10QixlQUFla0MsSUFBQUEsMEJBQW9CLEVBQUNGLE1BQU1WLGNBQzFDYSxRQUFRLElBN0RacEMsTUE2RHNCQztnQkFFeEIsT0FBT21DO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVmLFdBQVc7Z0JBQ3pDLElBQU0sQUFBRWdCLGVBQWlCNUIsYUFBSSxDQUFyQjRCLGNBQ0ZsQyxtQkFBbUJQLHNCQUFzQndDLFlBQ3pDRSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ25CLGNBQzVDdEIsZUFBZXNDLGFBQWFJLG9CQUFvQixDQUFDdEMsa0JBQWtCbUMsZUFDbkVKLFFBQVEsSUF2RVpwQyxNQXVFc0JDO2dCQUV4QixPQUFPbUM7WUFDVDs7O1dBMUVJcEM7O0FBNkVONEMsT0FBT0MsTUFBTSxDQUFDbEMsYUFBSSxFQUFFO0lBQ2xCWCxPQUFBQTtBQUNGO0lBRUEsV0FBZUEifQ==