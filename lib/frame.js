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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcHVzaCwgZmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbigpIHtcbiAgICBsZXQgZGVjbGFyYXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgZmlyc3REZWNsYXJhdGlvbiA9IGZpcnN0KHRoaXMuZGVjbGFyYXRpb25zKTtcblxuICAgICAgZGVjbGFyYXRpb24gPSBmaXJzdERlY2xhcmF0aW9uOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzaW5ndWxhciA9IChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDEpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgYWRkRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucykge1xuICAgIHB1c2godGhpcy5kZWNsYXJhdGlvbnMsIGRlY2xhcmF0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZShkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRnJhbWUiLCJkZWNsYXJhdGlvbnMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXREZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uIiwic2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZmlyc3REZWNsYXJhdGlvbiIsImZpcnN0IiwiZGVjbGFyYXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiYWRkRGVjbGFyYXRpb25zIiwicHVzaCIsImZyb21EZWNsYXJhdGlvbnMiLCJmcmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7cUJBRk87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsSUFBQSxBQUFNQSxzQkFBRCxBQUFMO2FBQU1BLE1BQ1BDLFlBQVk7Z0NBRExEO1FBRWpCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBRkhEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxZQUFZO1lBQzFCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGNBQWM7Z0JBRWxCLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxVQUFVO2dCQUVoQyxJQUFJRCxVQUFVO29CQUNaLElBQU1FLG1CQUFtQkMsSUFBQUEsWUFBSyxFQUFDLElBQUksQ0FBQ1AsWUFBWTtvQkFFaERHLGNBQWNHLGtCQUFrQixHQUFHO2dCQUNyQztnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1HLHFCQUFxQixJQUFJLENBQUNSLFlBQVksQ0FBQ1MsTUFBTSxFQUM3Q0wsV0FBWUksdUJBQXVCO2dCQUV6QyxPQUFPSjtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQlYsWUFBWTtnQkFDMUJXLElBQUFBLFdBQUksRUFBQyxJQUFJLENBQUNYLFlBQVksRUFBRUE7WUFDMUI7Ozs7WUFFT1ksS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCWixZQUFZO2dCQUNsQyxJQUFNYSxRQUFRLElBbkNHZCxNQW1DT0M7Z0JBRXhCLE9BQU9hO1lBQ1Q7OztXQXRDbUJkIn0=