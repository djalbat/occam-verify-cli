"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LiminalContext;
    }
});
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _context = require("../utilities/context");
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
var LiminalContext = /*#__PURE__*/ function() {
    function LiminalContext(context, substitutions) {
        _class_call_check(this, LiminalContext);
        this.context = context;
        this.substitutions = substitutions;
        return (0, _context.chainContext)(this);
    }
    _create_class(LiminalContext, [
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution) {
                var context = this; ///
                this.substitutions.addSubstitution(substitution, context);
            }
        },
        {
            key: "removeSubstitution",
            value: function removeSubstitution(substitution) {
                var context = this; ///
                this.substitutions.removeSubstitution(substitution, context);
            }
        },
        {
            key: "snapshot",
            value: function snapshot() {
                var context = this; ///
                this.substitutions.snapshot(context);
            }
        },
        {
            key: "rollback",
            value: function rollback() {
                var context = this; ///
                this.substitutions.rollback(context);
            }
        },
        {
            key: "continue",
            value: function _continue() {
                var context = this; ///
                this.substitutions.continue(context);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var Substitutions = _elements.default.Substitutions, substitutions = Substitutions.fromNothing(context), emphemeralContext = new LiminalContext(context, substitutions);
                return emphemeralContext;
            }
        }
    ]);
    return LiminalContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgY2hhaW5Db250ZXh0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbWluYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3Vic3RpdHV0aW9ucykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcblxuICAgIHJldHVybiBjaGFpbkNvbnRleHQodGhpcyk7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmVtb3ZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucy5yZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHNuYXBzaG90KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucy5zbmFwc2hvdChjb250ZXh0KTtcbiAgfVxuXG4gIHJvbGxiYWNrKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhjb250ZXh0KTtcbiAgfVxuXG4gIGNvbnRpbnVlKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucy5jb250aW51ZShjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBMaW1pbmFsQ29udGV4dChjb250ZXh0LCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbWluYWxDb250ZXh0IiwiY29udGV4dCIsInN1YnN0aXR1dGlvbnMiLCJjaGFpbkNvbnRleHQiLCJnZXRTdWJzdGl0dXRpb25zIiwiYWRkU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwicmVtb3ZlU3Vic3RpdHV0aW9uIiwic25hcHNob3QiLCJyb2xsYmFjayIsImNvbnRpbnVlIiwiZnJvbU5vdGhpbmciLCJTdWJzdGl0dXRpb25zIiwiZWxlbWVudHMiLCJlbXBoZW1lcmFsQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkE7dUJBRVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLCtCQUFOO2FBQU1BLGVBQ1BDLE9BQU8sRUFBRUMsYUFBYTtnQ0FEZkY7UUFFakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBRXJCLE9BQU9DLElBQUFBLHFCQUFZLEVBQUMsSUFBSTs7a0JBTFBIOztZQVFuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsWUFBWTtnQkFDMUIsSUFBTUwsVUFBVSxJQUFJLEVBQUUsR0FBRztnQkFFekIsSUFBSSxDQUFDQyxhQUFhLENBQUNHLGVBQWUsQ0FBQ0MsY0FBY0w7WUFDbkQ7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CRCxZQUFZO2dCQUM3QixJQUFNTCxVQUFVLElBQUksRUFBRSxHQUFHO2dCQUV6QixJQUFJLENBQUNDLGFBQWEsQ0FBQ0ssa0JBQWtCLENBQUNELGNBQWNMO1lBQ3REOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFVBQVUsSUFBSSxFQUFFLEdBQUc7Z0JBRXpCLElBQUksQ0FBQ0MsYUFBYSxDQUFDTSxRQUFRLENBQUNQO1lBQzlCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1SLFVBQVUsSUFBSSxFQUFFLEdBQUc7Z0JBRXpCLElBQUksQ0FBQ0MsYUFBYSxDQUFDTyxRQUFRLENBQUNSO1lBQzlCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ULFVBQVUsSUFBSSxFQUFFLEdBQUc7Z0JBRXpCLElBQUksQ0FBQ0MsYUFBYSxDQUFDUSxRQUFRLENBQUNUO1lBQzlCOzs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlWLE9BQU87Z0JBQ3hCLElBQU0sQUFBRVcsZ0JBQWtCQyxpQkFBUSxDQUExQkQsZUFDRlYsZ0JBQWdCVSxjQUFjRCxXQUFXLENBQUNWLFVBQzFDYSxvQkFBb0IsSUE3Q1RkLGVBNkM0QkMsU0FBU0M7Z0JBRXRELE9BQU9ZO1lBQ1Q7OztXQWhEbUJkIn0=