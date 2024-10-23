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
            value: function unifyReference(reference, localContextA, localContextB) {
                var Substitutions = _shim.default.Substitutions, metavariableNode = this.metavariable.getNode(), referenceMetavariable = reference.getMetavariable(), referenceMetavariableNode = referenceMetavariable.getNode(), metavariableNodeA = referenceMetavariableNode, metavariableNodeB = metavariableNode, substitutions = Substitutions.fromNothing(), metavariableUnified = _intrinsicLevel.default.unify(metavariableNodeA, metavariableNodeB, substitutions, localContextA, localContextB);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgaW50cmluc2ljTGV2ZWxVbmlmaWVyIGZyb20gXCIuL3VuaWZpZXIvaW50cmluc2ljTGV2ZWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tSlNPTiwgbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLy9sYWJlbC9tZXRhdmFyaWFibGVcIik7XG5cbmNsYXNzIExhYmVsIHtcbiAgY29uc3RydWN0b3IobWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVBID0gcmVmZXJlbmNlTWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVCID0gbWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gaW50cmluc2ljTGV2ZWxVbmlmaWVyLnVuaWZ5KG1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhdmFyaWFibGVOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZWNsYXJlZChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTih0aGlzLm1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwobWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGxhYmVsTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwobWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgTGFiZWxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMYWJlbDtcbiJdLCJuYW1lcyI6WyJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJMYWJlbCIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImdldFN0cmluZyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJ1bmlmeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwiU3Vic3RpdHV0aW9ucyIsInNoaW0iLCJnZXROb2RlIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXZhcmlhYmxlTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwiaW50cmluc2ljTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsImxhYmVsU3RyaW5nIiwidHJhY2UiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImRlYnVnIiwidG9KU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwibGFiZWwiLCJmcm9tTGFiZWxOb2RlIiwibGFiZWxOb2RlIiwiTWV0YXZhcmlhYmxlIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRGQTs7O2VBQUE7OzsyREExRmlCOzREQUNRO3FFQUNTO3FCQUVSO29CQUMyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRSxJQUFNQSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFeEMsSUFBQSxBQUFNQyxzQkFBTjthQUFNQSxNQUNRQyxZQUFZO2dDQURwQkQ7UUFFRixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUZsQkQ7O1lBS0pFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsWUFBWTtZQUMxQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0YsWUFBWSxDQUFDRSxTQUFTO1lBQUk7OztZQUVwREMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCO2dCQUFJLE9BQU8sSUFBSSxDQUFDSixZQUFZLENBQUNHLHFCQUFxQixDQUFDQztZQUFtQjs7O1lBRTVHQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUyxFQUFFQyxhQUFhLEVBQUVDLGFBQWE7Z0JBQ3BELElBQU0sQUFBRUMsZ0JBQWtCQyxhQUFJLENBQXRCRCxlQUNGTCxtQkFBbUIsSUFBSSxDQUFDSixZQUFZLENBQUNXLE9BQU8sSUFDNUNDLHdCQUF3Qk4sVUFBVUwsZUFBZSxJQUNqRFksNEJBQTRCRCxzQkFBc0JELE9BQU8sSUFDekRHLG9CQUFvQkQsMkJBQ3BCRSxvQkFBb0JYLGtCQUNwQlksZ0JBQWdCUCxjQUFjUSxXQUFXLElBQ3pDQyxzQkFBc0JDLHVCQUFxQixDQUFDQyxLQUFLLENBQUNOLG1CQUFtQkMsbUJBQW1CQyxlQUFlVCxlQUFlQztnQkFFNUgsT0FBT1U7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLFdBQVc7Z0JBQzVCLElBQUlDLHFCQUFxQjtnQkFFekIsSUFBTUMsY0FBYyxJQUFJLENBQUN0QixTQUFTLElBQUksR0FBRztnQkFFekNvQixZQUFZRyxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkQsYUFBWTtnQkFFaEQsSUFBTXBCLG1CQUFtQixJQUFJLENBQUNKLFlBQVksQ0FBQ1csT0FBTyxJQUM1Q2UsZUFBZUosWUFBWUssZ0NBQWdDLENBQUN2QjtnQkFFbEUsSUFBSXNCLGNBQWM7b0JBQ2hCSixZQUFZTSxLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaSixhQUFZO2dCQUN4QyxPQUFPO29CQUNMRCxxQkFBcUI7Z0JBQ3ZCO2dCQUVBLElBQUlBLG9CQUFvQjtvQkFDdEJELFlBQVlNLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFaSixhQUFZO2dCQUNwRDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQkMsSUFBQUEsb0NBQThCLEVBQUMsSUFBSSxDQUFDL0IsWUFBWSxHQUNuRUEsZUFBZThCLGtCQUNmRSxPQUFPO29CQUNMaEMsY0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2dDO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFVixXQUFXO2dCQUMvQixJQUFNdEIsZUFBZWtDLElBQUFBLDBCQUFvQixFQUFDRixNQUFNVixjQUMxQ2EsUUFBUSxJQTdEWnBDLE1BNkRzQkM7Z0JBRXhCLE9BQU9tQztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFZixXQUFXO2dCQUN6QyxJQUFNLEFBQUVnQixlQUFpQjVCLGFBQUksQ0FBckI0QixjQUNGbEMsbUJBQW1CUCxzQkFBc0J3QyxZQUN6Q0UsZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNuQixjQUM1Q3RCLGVBQWVzQyxhQUFhSSxvQkFBb0IsQ0FBQ3RDLGtCQUFrQm1DLGVBQ25FSixRQUFRLElBdkVacEMsTUF1RXNCQztnQkFFeEIsT0FBT21DO1lBQ1Q7OztXQTFFSXBDOztBQTZFTjRDLE9BQU9DLE1BQU0sQ0FBQ2xDLGFBQUksRUFBRTtJQUNsQlgsT0FBQUE7QUFDRjtJQUVBLFdBQWVBIn0=