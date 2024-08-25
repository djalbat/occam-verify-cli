"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Judgement;
    }
});
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
var Judgement = /*#__PURE__*/ function() {
    function Judgement(node, frame, metavariable) {
        _class_call_check(this, Judgement);
        this.node = node;
        this.frame = frame;
        this.metavariable = metavariable;
    }
    _create_class(Judgement, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getFrame",
            value: function getFrame() {
                return this.frame;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "matchMetavariable",
            value: function matchMetavariable(metavariable) {
                var metavariableMatches = this.metavariable === metavariable;
                return metavariableMatches;
            }
        }
    ], [
        {
            key: "fromJudgementNodeFrameAndMetavariable",
            value: function fromJudgementNodeFrameAndMetavariable(judgementNode, frame, metavariable) {
                var node = judgementNode, judgement = new Judgement(node, frame, metavariable);
                return judgement;
            }
        }
    ]);
    return Judgement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1hdGNoZXMgPSAodGhpcy5tZXRhdmFyaWFibGUgPT09bWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnROb2RlRnJhbWVBbmRNZXRhdmFyaWFibGUoanVkZ2VtZW50Tm9kZSwgZnJhbWUsIG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IG5vZGUgPSBqdWRnZW1lbnROb2RlLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IG5ldyBKdWRnZW1lbnQobm9kZSwgZnJhbWUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSnVkZ2VtZW50Iiwibm9kZSIsImZyYW1lIiwibWV0YXZhcmlhYmxlIiwiZ2V0Tm9kZSIsImdldEZyYW1lIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWF0Y2hNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVNYXRjaGVzIiwiZnJvbUp1ZGdlbWVudE5vZGVGcmFtZUFuZE1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsMEJBQUQsQUFBTDthQUFNQSxVQUNQQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsWUFBWTtnQ0FEbEJIO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBSkhIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxZQUFZO1lBQzFCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkosWUFBWTtnQkFDNUIsSUFBTUssc0JBQXVCLElBQUksQ0FBQ0wsWUFBWSxLQUFJQTtnQkFFbEQsT0FBT0s7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxzQ0FBc0NDLGFBQWEsRUFBRVIsS0FBSyxFQUFFQyxZQUFZO2dCQUM3RSxJQUFNRixPQUFPUyxlQUNQQyxZQUFZLElBM0JEWCxVQTJCZUMsTUFBTUMsT0FBT0M7Z0JBRTdDLE9BQU9RO1lBQ1Q7OztXQTlCbUJYIn0=