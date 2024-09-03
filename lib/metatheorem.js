"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Metatheorem;
    }
});
var _metaLemmaMetatheorem = /*#__PURE__*/ _interop_require_default(require("./metaLemmaMetatheorem"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var Metatheorem = /*#__PURE__*/ function(MetaLemmaMetatheorem) {
    _inherits(Metatheorem, MetaLemmaMetatheorem);
    function Metatheorem() {
        _class_call_check(this, Metatheorem);
        return _call_super(this, Metatheorem, arguments);
    }
    _create_class(Metatheorem, null, [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                return _metaLemmaMetatheorem.default.fromJSONAndFileContext(Metatheorem, json, fileContext);
            }
        },
        {
            key: "fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext",
            value: function fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, fileContext) {
                return _metaLemmaMetatheorem.default.fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(Metatheorem, labels, suppositions, consequent, fileContext);
            }
        }
    ]);
    return Metatheorem;
}(_metaLemmaMetatheorem.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1ldGFMZW1tYU1ldGF0aGVvcmVtIGZyb20gXCIuL21ldGFMZW1tYU1ldGF0aGVvcmVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGF0aGVvcmVtIGV4dGVuZHMgTWV0YUxlbW1hTWV0YXRoZW9yZW0ge1xuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gTWV0YUxlbW1hTWV0YXRoZW9yZW0uZnJvbUpTT05BbmRGaWxlQ29udGV4dChNZXRhdGhlb3JlbSwganNvbiwgZmlsZUNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNNZXRhU3VwcG9zaXRpb25zTWV0YUNvbnNlcXVlbnRTdWJzdGl0dXRpb25zQW5kRmlsZUNvbnRleHQobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGZpbGVDb250ZXh0KSB7IHJldHVybiBNZXRhTGVtbWFNZXRhdGhlb3JlbS5mcm9tTGFiZWxzTWV0YVN1cHBvc2l0aW9uc01ldGFDb25zZXF1ZW50U3Vic3RpdHV0aW9uc0FuZEZpbGVDb250ZXh0KE1ldGF0aGVvcmVtLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgZmlsZUNvbnRleHQpOyB9XG59XG4iXSwibmFtZXMiOlsiTWV0YXRoZW9yZW0iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwianNvbiIsImZpbGVDb250ZXh0IiwiTWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJmcm9tTGFiZWxzTWV0YVN1cHBvc2l0aW9uc01ldGFDb25zZXF1ZW50U3Vic3RpdHV0aW9uc0FuZEZpbGVDb250ZXh0IiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkVBRlk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSw0QkFBRCxBQUFMO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCQyxJQUFJLEVBQUVDLFdBQVc7Z0JBQUksT0FBT0MsNkJBQW9CLENBQUNILHNCQUFzQixDQURsRkQsYUFDZ0dFLE1BQU1DO1lBQWM7OztZQUVoSUUsS0FBQUE7bUJBQVAsU0FBT0Esb0VBQW9FQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFTCxXQUFXO2dCQUFJLE9BQU9DLDZCQUFvQixDQUFDQyxtRUFBbUUsQ0FIeE1MLGFBR3NOTSxRQUFRQyxjQUFjQyxZQUFZTDtZQUFjOzs7V0FIdFFIO0VBQW9CSSw2QkFBb0IifQ==