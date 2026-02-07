"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SyntheticContext;
    }
});
var _occamlanguages = require("occam-languages");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var chainContext = _occamlanguages.contextUtilities.chainContext;
var SyntheticContext = /*#__PURE__*/ function(Context) {
    _inherits(SyntheticContext, Context);
    function SyntheticContext(context, generalContext, specificContext) {
        _class_call_check(this, SyntheticContext);
        var _this;
        _this = _call_super(this, SyntheticContext, [
            context
        ]);
        _this.generalContext = generalContext;
        _this.specificContext = specificContext;
        return _possible_constructor_return(_this, chainContext(_this));
    }
    _create_class(SyntheticContext, [
        {
            key: "getGeneralContext",
            value: function getGeneralContext() {
                return this.generalContext;
            }
        },
        {
            key: "getSpecificContext",
            value: function getSpecificContext() {
                return this.specificContext;
            }
        },
        {
            key: "findTermByTermNode",
            value: function findTermByTermNode(termNode) {
                return this.specificContext.findTermByTermNode(termNode);
            }
        },
        {
            key: "findFrameByFrameNode",
            value: function findFrameByFrameNode(frameNode) {
                return this.specificContext.findFrameByFrameNode(frameNode);
            }
        },
        {
            key: "findTypeByNominalTypeName",
            value: function findTypeByNominalTypeName(nominalTypeName) {
                return this.specificContext.findTypeByNominalTypeName(nominalTypeName);
            }
        },
        {
            key: "isTypePresentByNominalTypeName",
            value: function isTypePresentByNominalTypeName(nominalTypeName) {
                return this.specificContext.isTypePresentByNominalTypeName(nominalTypeName);
            }
        },
        {
            key: "findVariableByVariableIdentifier",
            value: function findVariableByVariableIdentifier(variableIdentifier) {
                return this.generalContext.findVariableByVariableIdentifier(variableIdentifier);
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                return this.generalContext.findMetavariableByMetavariableName(metavariableName);
            }
        },
        {
            key: "isVariablePresentByVariableIdentifier",
            value: function isVariablePresentByVariableIdentifier(variableIdentifier) {
                this.generalContext.isVariablePresentByVariableIdentifier(variableIdentifier);
            }
        },
        {
            key: "isMetavariablePresentByMetavariableName",
            value: function isMetavariablePresentByMetavariableName(metavariableName) {
                this.generalContext.isMetavariablePresentByMetavariableName(metavariableName);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(generalContext, specificContext) {
                var context = specificContext, syntheticContext = new SyntheticContext(context, generalContext, specificContext);
                return syntheticContext;
            }
        }
    ]);
    return SyntheticContext;
}(_occamlanguages.Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3N5bnRoZXRpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29udGV4dCwgY29udGV4dFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuY29uc3QgeyBjaGFpbkNvbnRleHQgfSA9IGNvbnRleHRVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bnRoZXRpY0NvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5nZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxDb250ZXh0O1xuICAgIHRoaXMuc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0O1xuXG4gICAgcmV0dXJuIGNoYWluQ29udGV4dCh0aGlzKTtcbiAgfVxuXG4gIGdldEdlbmVyYWxDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmdlbmVyYWxDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3BlY2lmaWNDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnNwZWNpZmljQ29udGV4dDtcbiAgfVxuXG4gIGZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSkgeyByZXR1cm4gdGhpcy5zcGVjaWZpY0NvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTsgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkgeyByZXR1cm4gdGhpcy5zcGVjaWZpY0NvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTsgfVxuXG4gIGZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7IHJldHVybiB0aGlzLnNwZWNpZmljQ29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7IHJldHVybiB0aGlzLnNwZWNpZmljQ29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTsgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikgeyByZXR1cm4gdGhpcy5nZW5lcmFsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpOyB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmdlbmVyYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikgeyB0aGlzLmdlbmVyYWxDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHRoaXMuZ2VuZXJhbENvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3ludGhldGljQ29udGV4dCA9IG5ldyBTeW50aGV0aWNDb250ZXh0KGNvbnRleHQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN5bnRoZXRpY0NvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTeW50aGV0aWNDb250ZXh0IiwiY2hhaW5Db250ZXh0IiwiY29udGV4dFV0aWxpdGllcyIsImNvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllciIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImZyb21Ob3RoaW5nIiwic3ludGhldGljQ29udGV4dCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzhCQUpxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTSxBQUFFQyxlQUFpQkMsZ0NBQWdCLENBQWpDRDtBQUVPLElBQUEsQUFBTUQsaUNBQU47Y0FBTUE7YUFBQUEsaUJBQ1BHLE9BQU8sRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dDQURqQ0w7O2dCQUVqQixrQkFGaUJBO1lBRVhHOztRQUVOLE1BQUtDLGNBQWMsR0FBR0E7UUFDdEIsTUFBS0MsZUFBZSxHQUFHQTtRQUV2QiwyQ0FBT0o7O2tCQVBVRDs7WUFVbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsY0FBYztZQUM1Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsZUFBZTtZQUM3Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNKLGVBQWUsQ0FBQ0csa0JBQWtCLENBQUNDO1lBQVc7OztZQUV6RkMsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkMsU0FBUztnQkFBSSxPQUFPLElBQUksQ0FBQ04sZUFBZSxDQUFDSyxvQkFBb0IsQ0FBQ0M7WUFBWTs7O1lBRS9GQyxLQUFBQTttQkFBQUEsU0FBQUEsMEJBQTBCQyxlQUFlO2dCQUFJLE9BQU8sSUFBSSxDQUFDUixlQUFlLENBQUNPLHlCQUF5QixDQUFDQztZQUFrQjs7O1lBRXJIQyxLQUFBQTttQkFBQUEsU0FBQUEsK0JBQStCRCxlQUFlO2dCQUFJLE9BQU8sSUFBSSxDQUFDUixlQUFlLENBQUNTLDhCQUE4QixDQUFDRDtZQUFrQjs7O1lBRS9IRSxLQUFBQTttQkFBQUEsU0FBQUEsaUNBQWlDQyxrQkFBa0I7Z0JBQUksT0FBTyxJQUFJLENBQUNaLGNBQWMsQ0FBQ1csZ0NBQWdDLENBQUNDO1lBQXFCOzs7WUFFeElDLEtBQUFBO21CQUFBQSxTQUFBQSxtQ0FBbUNDLGdCQUFnQjtnQkFBSSxPQUFPLElBQUksQ0FBQ2QsY0FBYyxDQUFDYSxrQ0FBa0MsQ0FBQ0M7WUFBbUI7OztZQUV4SUMsS0FBQUE7bUJBQUFBLFNBQUFBLHNDQUFzQ0gsa0JBQWtCO2dCQUFJLElBQUksQ0FBQ1osY0FBYyxDQUFDZSxxQ0FBcUMsQ0FBQ0g7WUFBcUI7OztZQUUzSUksS0FBQUE7bUJBQUFBLFNBQUFBLHdDQUF3Q0YsZ0JBQWdCO2dCQUFJLElBQUksQ0FBQ2QsY0FBYyxDQUFDZ0IsdUNBQXVDLENBQUNGO1lBQW1COzs7O1lBRXBJRyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZakIsY0FBYyxFQUFFQyxlQUFlO2dCQUNoRCxJQUFNRixVQUFVRSxpQkFDVmlCLG1CQUFtQixJQXBDUnRCLGlCQW9DNkJHLFNBQVNDLGdCQUFnQkM7Z0JBRXZFLE9BQU9pQjtZQUNUOzs7V0F2Q21CdEI7RUFBeUJ1Qix1QkFBTyJ9