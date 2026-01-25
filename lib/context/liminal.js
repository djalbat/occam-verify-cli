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
var _necessary = require("necessary");
var _occamfurtle = require("occam-furtle");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var extract = _necessary.arrayUtilities.extract, chainContext = _occamfurtle.contextUtilities.chainContext;
var LiminalContext = /*#__PURE__*/ function() {
    function LiminalContext(context, substitutions) {
        _class_call_check(this, LiminalContext);
        this.context = context;
        this.substitutions = substitutions;
        return chainContext(this);
    }
    _create_class(LiminalContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                var substitutions = this.context.getSubstitutions();
                substitutions = _to_consumable_array(this.substitutions).concat(_to_consumable_array(substitutions));
                return substitutions;
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution) {
                var context = this, substitutionA = substitution, substitutionString = substitution.getString();
                extract(this.substitutions, function(substitution) {
                    var substitutionB = substitution, substitutionAEqualToAssertionB = substitutionA.isEqualTo(substitutionB);
                    if (substitutionAEqualToAssertionB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(substitutionString, "' substitution to the context."));
                this.substitutions.push(substitution);
            }
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.context.getFileContext();
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = this.context.getDepth();
                depth++;
                return depth;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var substitutions = [], emphemeralContext = new LiminalContext(context, substitutions);
                return emphemeralContext;
            }
        }
    ]);
    return LiminalContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgY29udGV4dFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBleHRyYWN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2hhaW5Db250ZXh0IH0gPSBjb250ZXh0VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW1pbmFsQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG5cbiAgICByZXR1cm4gY2hhaW5Db250ZXh0KHRoaXMpO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9ucyA9IHRoaXMuY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICBzdWJzdGl0dXRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuc3Vic3RpdHV0aW9ucyxcbiAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICBdXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgZXh0cmFjdCh0aGlzLnN1YnN0aXR1dGlvbnMsIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25BRXF1YWxUb0Fzc2VydGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBjb250ZXh0LmApO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEZpbGVDb250ZXh0KCk7IH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBsZXQgZGVwdGggPSB0aGlzLmNvbnRleHQuZ2V0RGVwdGgoKTtcblxuICAgIGRlcHRoKys7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBMaW1pbmFsQ29udGV4dChjb250ZXh0LCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbWluYWxDb250ZXh0IiwiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwiY2hhaW5Db250ZXh0IiwiY29udGV4dFV0aWxpdGllcyIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiZ2V0Q29udGV4dCIsImdldFN1YnN0aXR1dGlvbnMiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiIsImlzRXF1YWxUbyIsInRyYWNlIiwicHVzaCIsImdldEZpbGVDb250ZXh0IiwiZ2V0RGVwdGgiLCJkZXB0aCIsImZyb21Ob3RoaW5nIiwiZW1waGVtZXJhbENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VOzJCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBTSxBQUFFQyxVQUFZQyx5QkFBYyxDQUExQkQsU0FDRixBQUFFRSxlQUFpQkMsNkJBQWdCLENBQWpDRDtBQUVPLElBQUEsQUFBTUgsK0JBQU47YUFBTUEsZUFDUEssT0FBTyxFQUFFQyxhQUFhO2dDQURmTjtRQUVqQixJQUFJLENBQUNLLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFFckIsT0FBT0gsYUFBYSxJQUFJOztrQkFMUEg7O1lBUW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUYsZ0JBQWdCLElBQUksQ0FBQ0QsT0FBTyxDQUFDRyxnQkFBZ0I7Z0JBRWpERixnQkFBZ0IsQUFDZCxxQkFBRyxJQUFJLENBQUNBLGFBQWEsU0FDckIscUJBQUdBO2dCQUdMLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxZQUFZO2dCQUMxQixJQUFNTCxVQUFVLElBQUksRUFDZE0sZ0JBQWdCRCxjQUNoQkUscUJBQXFCRixhQUFhRyxTQUFTO2dCQUVqRFosUUFBUSxJQUFJLENBQUNLLGFBQWEsRUFBRSxTQUFDSTtvQkFDM0IsSUFBTUksZ0JBQWdCSixjQUNoQkssaUNBQWlDSixjQUFjSyxTQUFTLENBQUNGO29CQUUvRCxJQUFJQyxnQ0FBZ0M7d0JBQ2xDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUFWLFFBQVFZLEtBQUssQ0FBQyxBQUFDLGNBQWdDLE9BQW5CTCxvQkFBbUI7Z0JBRS9DLElBQUksQ0FBQ04sYUFBYSxDQUFDWSxJQUFJLENBQUNSO1lBQzFCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFtQixPQUFPLElBQUksQ0FBQ2QsT0FBTyxDQUFDYyxjQUFjO1lBQUk7OztZQUV6REMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFFBQVEsSUFBSSxDQUFDaEIsT0FBTyxDQUFDZSxRQUFRO2dCQUVqQ0M7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZakIsT0FBTztnQkFDeEIsSUFBTUMsZ0JBQWdCLEVBQUUsRUFDbEJpQixvQkFBb0IsSUF0RFR2QixlQXNENEJLLFNBQVNDO2dCQUV0RCxPQUFPaUI7WUFDVDs7O1dBekRtQnZCIn0=