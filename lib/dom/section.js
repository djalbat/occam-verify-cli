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
    function Section(fileContext, string, hypotheses) {
        _class_call_check(this, Section);
        this.fileContext = fileContext;
        this.string = string;
        this.hypotheses = hypotheses;
    }
    _create_class(Section, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
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
            value: function fromSectionNode(sectionNode, fileContext) {
                var hypothesisNodes = sectionNode.getHypothesisNodes(), hypotheses = hypothesesFromHypothesisNodes(hypothesisNodes, fileContext), string = stringFromHypotheses(hypotheses, fileContext), section = new Section(fileContext, string, hypotheses);
                return section;
            }
        }
    ]);
    return Section;
}(), _define_property(_Section, "name", "Section"), _Section));
function hypothesesFromHypothesisNodes(hypothesisNodes, fileContext) {
    var hypotheses = hypothesisNodes.map(function(hypothesisNode) {
        var Hypothesis = _dom.default.Hypothesis, hypothesis = Hypothesis.fromHypothesisNode(hypothesisNode, fileContext);
        return hypothesis;
    });
    return hypotheses;
}
function stringFromHypotheses(hypotheses, fileContext) {
    var firstHypothesis = first(hypotheses), hypothesis = firstHypothesis, hypothesisString = hypothesis.getString(), string = "'".concat(hypothesisString, "'...");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCBoeXBvdGhlc2VzKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRIeXBvdGhlc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmh5cG90aGVzZXM7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzZWN0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGRlYnVnZ2VyXG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2VjdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgaHlwb3RoZXNpc05vZGVzID0gc2VjdGlvbk5vZGUuZ2V0SHlwb3RoZXNpc05vZGVzKCksXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21IeXBvdGhlc2VzKGh5cG90aGVzZXMsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzZWN0aW9uID0gbmV3IFNlY3Rpb24oZmlsZUNvbnRleHQsIHN0cmluZywgaHlwb3RoZXNlcyk7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgaHlwb3RoZXNlcyA9IGh5cG90aGVzaXNOb2Rlcy5tYXAoKGh5cG90aGVzaXNOb2RlKSA9PiB7XG4gICAgY29uc3QgeyBIeXBvdGhlc2lzIH0gPSBkb20sXG4gICAgICAgICAgaHlwb3RoZXNpcyA9IEh5cG90aGVzaXMuZnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21IeXBvdGhlc2VzKGh5cG90aGVzZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IGZpcnN0SHlwb3RoZXNpcyA9IGZpcnN0KGh5cG90aGVzZXMpLFxuICAgICAgICBoeXBvdGhlc2lzID0gZmlyc3RIeXBvdGhlc2lzLFxuICAgICAgICBoeXBvdGhlc2lzU3RyaW5nID0gaHlwb3RoZXNpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYCcke2h5cG90aGVzaXNTdHJpbmd9Jy4uLmA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZG9tQXNzaWduZWQiLCJTZWN0aW9uIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJoeXBvdGhlc2VzIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRIeXBvdGhlc2VzIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJzZWN0aW9uU3RyaW5nIiwiZnJvbVNlY3Rpb25Ob2RlIiwic2VjdGlvbk5vZGUiLCJoeXBvdGhlc2lzTm9kZXMiLCJnZXRIeXBvdGhlc2lzTm9kZXMiLCJoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyIsInN0cmluZ0Zyb21IeXBvdGhlc2VzIiwic2VjdGlvbiIsIm5hbWUiLCJtYXAiLCJoeXBvdGhlc2lzTm9kZSIsIkh5cG90aGVzaXMiLCJkb20iLCJoeXBvdGhlc2lzIiwiZnJvbUh5cG90aGVzaXNOb2RlIiwiZmlyc3RIeXBvdGhlc2lzIiwiaHlwb3RoZXNpc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7eUJBUitCOzJEQUVmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEIsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7SUFFUixXQUFlRSxJQUFBQSxnQkFBVyw0QkFBQzthQUFNQyxRQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFVBQVU7Z0NBRFpIO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsVUFBVTtZQUN4Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLGdCQUFnQixJQUFJLENBQUNQLE1BQU0sRUFBRyxHQUFHO2dCQUV2QyxRQUFRO2dCQUVSLE9BQU9NO1lBQ1Q7Ozs7WUFJT0UsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCQyxXQUFXLEVBQUVWLFdBQVc7Z0JBQzdDLElBQU1XLGtCQUFrQkQsWUFBWUUsa0JBQWtCLElBQ2hEVixhQUFhVyw4QkFBOEJGLGlCQUFpQlgsY0FDNURDLFNBQVNhLHFCQUFxQlosWUFBWUYsY0FDMUNlLFVBQVUsSUFBSWhCLFFBQVFDLGFBQWFDLFFBQVFDO2dCQUVqRCxPQUFPYTtZQUNUOzs7O0tBVEEsMkJBQU9DLFFBQU87QUFZaEIsU0FBU0gsOEJBQThCRixlQUFlLEVBQUVYLFdBQVc7SUFDakUsSUFBTUUsYUFBYVMsZ0JBQWdCTSxHQUFHLENBQUMsU0FBQ0M7UUFDdEMsSUFBTSxBQUFFQyxhQUFlQyxZQUFHLENBQWxCRCxZQUNGRSxhQUFhRixXQUFXRyxrQkFBa0IsQ0FBQ0osZ0JBQWdCbEI7UUFFakUsT0FBT3FCO0lBQ1Q7SUFFQSxPQUFPbkI7QUFDVDtBQUVBLFNBQVNZLHFCQUFxQlosVUFBVSxFQUFFRixXQUFXO0lBQ25ELElBQU11QixrQkFBa0IzQixNQUFNTSxhQUN4Qm1CLGFBQWFFLGlCQUNiQyxtQkFBbUJILFdBQVdqQixTQUFTLElBQ3ZDSCxTQUFTLEFBQUMsSUFBb0IsT0FBakJ1QixrQkFBaUI7SUFFcEMsT0FBT3ZCO0FBQ1QifQ==