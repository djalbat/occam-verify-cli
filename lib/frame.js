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
            key: "unifySubstitution",
            value: function unifySubstitution(substitution) {
                var substitutionUnified = this.declarations.some(function(declaration) {
                    var substitutionUnifiedWithDeclaration = declaration.unifySubstitution(substitution);
                    if (substitutionUnifiedWithDeclaration) {
                        return true;
                    }
                });
                return substitutionUnified;
            }
        },
        {
            key: "unifyMetaLemmaOrMetatheorem",
            value: function unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) {
                var _this = this;
                var substitutions = metaLemmaMetatheorem.getSubstitutions(), substitutionsUnified = substitutions.everySubstitution(function(substitution) {
                    var substitutionUnified = _this.unifySubstitution(substitution);
                    if (substitutionUnified) {
                        return true;
                    }
                }), metaLemmaOrMetaTheoremUnified = substitutionsUnified; ///
                return metaLemmaOrMetaTheoremUnified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcHVzaCwgZmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbigpIHtcbiAgICBsZXQgZGVjbGFyYXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgZmlyc3REZWNsYXJhdGlvbiA9IGZpcnN0KHRoaXMuZGVjbGFyYXRpb25zKTtcblxuICAgICAgZGVjbGFyYXRpb24gPSBmaXJzdERlY2xhcmF0aW9uOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzaW5ndWxhciA9IChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDEpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgYWRkRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucykge1xuICAgIHB1c2godGhpcy5kZWNsYXJhdGlvbnMsIGRlY2xhcmF0aW9ucyk7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbnMuc29tZSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbi51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhEZWNsYXJhdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zVW5pZmllZCA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZShkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRnJhbWUiLCJkZWNsYXJhdGlvbnMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXREZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uIiwic2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZmlyc3REZWNsYXJhdGlvbiIsImZpcnN0IiwiZGVjbGFyYXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiYWRkRGVjbGFyYXRpb25zIiwicHVzaCIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllZCIsInNvbWUiLCJzdWJzdGl0dXRpb25VbmlmaWVkV2l0aERlY2xhcmF0aW9uIiwidW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNVbmlmaWVkIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJtZXRhTGVtbWFPck1ldGFUaGVvcmVtVW5pZmllZCIsImZyb21EZWNsYXJhdGlvbnMiLCJmcmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7cUJBRk87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsSUFBQSxBQUFNQSxzQkFBTjthQUFNQSxNQUNQQyxZQUFZO2dDQURMRDtRQUVqQixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUZIRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsWUFBWTtZQUMxQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxjQUFjO2dCQUVsQixJQUFNQyxXQUFXLElBQUksQ0FBQ0MsVUFBVTtnQkFFaEMsSUFBSUQsVUFBVTtvQkFDWixJQUFNRSxtQkFBbUJDLElBQUFBLFlBQUssRUFBQyxJQUFJLENBQUNQLFlBQVk7b0JBRWhERyxjQUFjRyxrQkFBa0IsR0FBRztnQkFDckM7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRyxxQkFBcUIsSUFBSSxDQUFDUixZQUFZLENBQUNTLE1BQU0sRUFDN0NMLFdBQVlJLHVCQUF1QjtnQkFFekMsT0FBT0o7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JWLFlBQVk7Z0JBQzFCVyxJQUFBQSxXQUFJLEVBQUMsSUFBSSxDQUFDWCxZQUFZLEVBQUVBO1lBQzFCOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWTtnQkFDNUIsSUFBTUMsc0JBQXNCLElBQUksQ0FBQ2QsWUFBWSxDQUFDZSxJQUFJLENBQUMsU0FBQ1o7b0JBQ2xELElBQU1hLHFDQUFxQ2IsWUFBWVMsaUJBQWlCLENBQUNDO29CQUV6RSxJQUFJRyxvQ0FBb0M7d0JBQ3RDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJDLG9CQUFvQjs7Z0JBQzlDLElBQU1DLGdCQUFnQkQscUJBQXFCRSxnQkFBZ0IsSUFDckRDLHVCQUF1QkYsY0FBY0csaUJBQWlCLENBQUMsU0FBQ1Q7b0JBQ3RELElBQU1DLHNCQUFzQixNQUFLRixpQkFBaUIsQ0FBQ0M7b0JBRW5ELElBQUlDLHFCQUFxQjt3QkFDdkIsT0FBTztvQkFDVDtnQkFDRixJQUNBUyxnQ0FBZ0NGLHNCQUFzQixHQUFHO2dCQUUvRCxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQnhCLFlBQVk7Z0JBQ2xDLElBQU15QixRQUFRLElBN0RHMUIsTUE2RE9DO2dCQUV4QixPQUFPeUI7WUFDVDs7O1dBaEVtQjFCIn0=