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
var _necessary = require("necessary");
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _Section;
var first = _necessary.arrayUtilities.first;
var _default = (0, _dom.domAssigned)((_Section = /*#__PURE__*/ function() {
    function Section(context, string, hypotheses) {
        _class_call_check(this, Section);
        this.context = context;
        this.string = string;
        this.hypotheses = hypotheses;
    }
    _create_class(Section, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getHypotheses",
            value: function getHypotheses() {
                return this.hypotheses;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var sectionString = this.string; ///
                debugger;
                return verifies;
            }
        }
    ], [
        {
            key: "fromSectionNode",
            value: function fromSectionNode(sectionNode, context) {
                var hypothesisNodes = sectionNode.getHypothesisNodes(), hypotheses = hypothesesFromHypothesisNodes(hypothesisNodes, context), string = stringFromHypotheses(hypotheses, context), section = new Section(context, string, hypotheses);
                return section;
            }
        }
    ]);
    return Section;
}(), _define_property(_Section, "name", "Section"), _Section));
function hypothesesFromHypothesisNodes(hypothesisNodes, context) {
    var hypotheses = hypothesisNodes.map(function(hypothesisNode) {
        var Hypothesis = _dom.default.Hypothesis, hypothesis = Hypothesis.fromHypothesisNode(hypothesisNode, context);
        return hypothesis;
    });
    return hypotheses;
}
function stringFromHypotheses(hypotheses, context) {
    var firstHypothesis = first(hypotheses), hypothesis = firstHypothesis, hypothesisString = hypothesis.getString(), string = "'".concat(hypothesisString, "'...");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIGh5cG90aGVzZXMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2VjdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNlY3Rpb25cIjtcblxuICBzdGF0aWMgZnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaHlwb3RoZXNpc05vZGVzID0gc2VjdGlvbk5vZGUuZ2V0SHlwb3RoZXNpc05vZGVzKCksXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUh5cG90aGVzZXMoaHlwb3RoZXNlcywgY29udGV4dCksXG4gICAgICAgICAgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKGNvbnRleHQsIHN0cmluZywgaHlwb3RoZXNlcyk7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2VzID0gaHlwb3RoZXNpc05vZGVzLm1hcCgoaHlwb3RoZXNpc05vZGUpID0+IHtcbiAgICBjb25zdCB7IEh5cG90aGVzaXMgfSA9IGRvbSxcbiAgICAgICAgICBoeXBvdGhlc2lzID0gSHlwb3RoZXNpcy5mcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tSHlwb3RoZXNlcyhoeXBvdGhlc2VzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZpcnN0SHlwb3RoZXNpcyA9IGZpcnN0KGh5cG90aGVzZXMpLFxuICAgICAgICBoeXBvdGhlc2lzID0gZmlyc3RIeXBvdGhlc2lzLCAvLy9cbiAgICAgICAgaHlwb3RoZXNpc1N0cmluZyA9IGh5cG90aGVzaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGAnJHtoeXBvdGhlc2lzU3RyaW5nfScuLi5gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImRvbUFzc2lnbmVkIiwiU2VjdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJoeXBvdGhlc2VzIiwiZ2V0Q29udGV4dCIsImdldFN0cmluZyIsImdldEh5cG90aGVzZXMiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNlY3Rpb25TdHJpbmciLCJmcm9tU2VjdGlvbk5vZGUiLCJzZWN0aW9uTm9kZSIsImh5cG90aGVzaXNOb2RlcyIsImdldEh5cG90aGVzaXNOb2RlcyIsImh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzIiwic3RyaW5nRnJvbUh5cG90aGVzZXMiLCJzZWN0aW9uIiwibmFtZSIsIm1hcCIsImh5cG90aGVzaXNOb2RlIiwiSHlwb3RoZXNpcyIsImRvbSIsImh5cG90aGVzaXMiLCJmcm9tSHlwb3RoZXNpc05vZGUiLCJmaXJzdEh5cG90aGVzaXMiLCJoeXBvdGhlc2lzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7Ozt5QkFSK0I7MkRBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUloQixJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFXLDRCQUFDO2FBQU1DLFFBQ25CQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsVUFBVTtnQ0FEUkg7UUFFN0IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDUCxNQUFNLEVBQUcsR0FBRztnQkFFdkMsUUFBUTtnQkFFUixPQUFPTTtZQUNUOzs7O1lBSU9FLEtBQUFBO21CQUFQLFNBQU9BLGdCQUFnQkMsV0FBVyxFQUFFVixPQUFPO2dCQUN6QyxJQUFNVyxrQkFBa0JELFlBQVlFLGtCQUFrQixJQUNoRFYsYUFBYVcsOEJBQThCRixpQkFBaUJYLFVBQzVEQyxTQUFTYSxxQkFBcUJaLFlBQVlGLFVBQzFDZSxVQUFVLElBQUloQixRQUFRQyxTQUFTQyxRQUFRQztnQkFFN0MsT0FBT2E7WUFDVDs7OztLQVRBLDJCQUFPQyxRQUFPO0FBWWhCLFNBQVNILDhCQUE4QkYsZUFBZSxFQUFFWCxPQUFPO0lBQzdELElBQU1FLGFBQWFTLGdCQUFnQk0sR0FBRyxDQUFDLFNBQUNDO1FBQ3RDLElBQU0sQUFBRUMsYUFBZUMsWUFBRyxDQUFsQkQsWUFDRkUsYUFBYUYsV0FBV0csa0JBQWtCLENBQUNKLGdCQUFnQmxCO1FBRWpFLE9BQU9xQjtJQUNUO0lBRUEsT0FBT25CO0FBQ1Q7QUFFQSxTQUFTWSxxQkFBcUJaLFVBQVUsRUFBRUYsT0FBTztJQUMvQyxJQUFNdUIsa0JBQWtCM0IsTUFBTU0sYUFDeEJtQixhQUFhRSxpQkFDYkMsbUJBQW1CSCxXQUFXakIsU0FBUyxJQUN2Q0gsU0FBUyxBQUFDLElBQW9CLE9BQWpCdUIsa0JBQWlCO0lBRXBDLE9BQU92QjtBQUNUIn0=