"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Frame;
    }
});
var _array = require("./utilities/array");
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
var Frame = /*#__PURE__*/ function() {
    function Frame(declarations) {
        _class_call_check(this, Frame);
        this.declarations = declarations;
    }
    _create_class(Frame, [
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "getDeclaration",
            value: function getDeclaration() {
                var declaration = null;
                var singular = this.isSingular();
                if (singular) {
                    var firstDeclaration = (0, _array.first)(this.declarations);
                    declaration = firstDeclaration; ///
                }
                return declaration;
            }
        },
        {
            key: "isSingular",
            value: function isSingular() {
                var declarationsLength = this.declarations.length, singular = declarationsLength === 1;
                return singular;
            }
        },
        {
            key: "addDeclarations",
            value: function addDeclarations(declarations) {
                (0, _array.push)(this.declarations, declarations);
            }
        },
        {
            key: "matchSubstitution",
            value: function matchSubstitution(substitution) {
                var matchesSubstitution = this.declarations.some(function(declaration) {
                    var declarationMatchesSubstitution = declaration.matchSubstitution(substitution);
                    if (declarationMatchesSubstitution) {
                        return true;
                    }
                });
                return matchesSubstitution;
            }
        },
        {
            key: "matchMetaLemmaOrMetaTheorem",
            value: function matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem) {
                var _this = this;
                var substitutions = metaLemmaMetatheorem.getSubstitutions(), matchesMetaLemmaOrMetaTheorem = substitutions.every(function(substitution) {
                    var frameMatchesSubstitution = _this.matchSubstitution(substitution);
                    if (frameMatchesSubstitution) {
                        return true;
                    }
                });
                return matchesMetaLemmaOrMetaTheorem;
            }
        }
    ], [
        {
            key: "fromDeclarations",
            value: function fromDeclarations(declarations) {
                var frame = new Frame(declarations);
                return frame;
            }
        }
    ]);
    return Frame;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcHVzaCwgZmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbigpIHtcbiAgICBsZXQgZGVjbGFyYXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgZmlyc3REZWNsYXJhdGlvbiA9IGZpcnN0KHRoaXMuZGVjbGFyYXRpb25zKTtcblxuICAgICAgZGVjbGFyYXRpb24gPSBmaXJzdERlY2xhcmF0aW9uOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzaW5ndWxhciA9IChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDEpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgYWRkRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucykge1xuICAgIHB1c2godGhpcy5kZWNsYXJhdGlvbnMsIGRlY2xhcmF0aW9ucyk7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBtYXRjaGVzU3Vic3RpdHV0aW9uID0gdGhpcy5kZWNsYXJhdGlvbnMuc29tZSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uTWF0Y2hlc1N1YnN0aXR1dGlvbiA9IGRlY2xhcmF0aW9uLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGlmIChkZWNsYXJhdGlvbk1hdGNoZXNTdWJzdGl0dXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIG1hdGNoTWV0YUxlbW1hT3JNZXRhVGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgbWF0Y2hlc01ldGFMZW1tYU9yTWV0YVRoZW9yZW0gPSBzdWJzdGl0dXRpb25zLmV2ZXJ5KChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lTWF0Y2hlc1N1YnN0aXR1dGlvbiA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGZyYW1lTWF0Y2hlc1N1YnN0aXR1dGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTWV0YUxlbW1hT3JNZXRhVGhlb3JlbTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucykge1xuICAgIGNvbnN0IGZyYW1lID0gbmV3IEZyYW1lKGRlY2xhcmF0aW9ucyk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGcmFtZSIsImRlY2xhcmF0aW9ucyIsImdldERlY2xhcmF0aW9ucyIsImdldERlY2xhcmF0aW9uIiwiZGVjbGFyYXRpb24iLCJzaW5ndWxhciIsImlzU2luZ3VsYXIiLCJmaXJzdERlY2xhcmF0aW9uIiwiZmlyc3QiLCJkZWNsYXJhdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJhZGREZWNsYXJhdGlvbnMiLCJwdXNoIiwibWF0Y2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJtYXRjaGVzU3Vic3RpdHV0aW9uIiwic29tZSIsImRlY2xhcmF0aW9uTWF0Y2hlc1N1YnN0aXR1dGlvbiIsIm1hdGNoTWV0YUxlbW1hT3JNZXRhVGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJtYXRjaGVzTWV0YUxlbW1hT3JNZXRhVGhlb3JlbSIsImV2ZXJ5IiwiZnJhbWVNYXRjaGVzU3Vic3RpdHV0aW9uIiwiZnJvbURlY2xhcmF0aW9ucyIsImZyYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztxQkFGTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFBLEFBQU1BLHNCQUFELEFBQUw7YUFBTUEsTUFDUEMsWUFBWTtnQ0FETEQ7UUFFakIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztrQkFGSEQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFlBQVk7WUFDMUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsY0FBYztnQkFFbEIsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFVBQVU7Z0JBRWhDLElBQUlELFVBQVU7b0JBQ1osSUFBTUUsbUJBQW1CQyxJQUFBQSxZQUFLLEVBQUMsSUFBSSxDQUFDUCxZQUFZO29CQUVoREcsY0FBY0csa0JBQWtCLEdBQUc7Z0JBQ3JDO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUcscUJBQXFCLElBQUksQ0FBQ1IsWUFBWSxDQUFDUyxNQUFNLEVBQzdDTCxXQUFZSSx1QkFBdUI7Z0JBRXpDLE9BQU9KO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCVixZQUFZO2dCQUMxQlcsSUFBQUEsV0FBSSxFQUFDLElBQUksQ0FBQ1gsWUFBWSxFQUFFQTtZQUMxQjs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVk7Z0JBQzVCLElBQU1DLHNCQUFzQixJQUFJLENBQUNkLFlBQVksQ0FBQ2UsSUFBSSxDQUFDLFNBQUNaO29CQUNsRCxJQUFNYSxpQ0FBaUNiLFlBQVlTLGlCQUFpQixDQUFDQztvQkFFckUsSUFBSUcsZ0NBQWdDO3dCQUNsQyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCQyxvQkFBb0I7O2dCQUM5QyxJQUFNQyxnQkFBZ0JELHFCQUFxQkUsZ0JBQWdCLElBQ3JEQyxnQ0FBZ0NGLGNBQWNHLEtBQUssQ0FBQyxTQUFDVDtvQkFDbkQsSUFBTVUsMkJBQTJCLE1BQUtYLGlCQUFpQixDQUFDQztvQkFFeEQsSUFBSVUsMEJBQTBCO3dCQUM1QixPQUFPO29CQUNUO2dCQUNGO2dCQUVOLE9BQU9GO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCeEIsWUFBWTtnQkFDbEMsSUFBTXlCLFFBQVEsSUE1REcxQixNQTRET0M7Z0JBRXhCLE9BQU95QjtZQUNUOzs7V0EvRG1CMUIifQ==