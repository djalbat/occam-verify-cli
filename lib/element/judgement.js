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
var _occamlanguages = require("occam-languages");
var _elements = require("../elements");
var _assign = require("../process/assign");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _Judgement;
var _default = (0, _elements.define)((_Judgement = /*#__PURE__*/ function(Element) {
    _inherits(Judgement, Element);
    function Judgement(context, string, node, frame, assumption) {
        _class_call_check(this, Judgement);
        var _this;
        _this = _call_super(this, Judgement, [
            context,
            string,
            node
        ]);
        _this.frame = frame;
        _this.assumption = assumption;
        return _this;
    }
    _create_class(Judgement, [
        {
            key: "getFrame",
            value: function getFrame() {
                return this.frame;
            }
        },
        {
            key: "getDeclaration",
            value: function getDeclaration() {
                return this.assumption;
            }
        },
        {
            key: "getJudgementNode",
            value: function getJudgementNode() {
                var node = this.getNode(), judgementNode = node; ///
                return judgementNode;
            }
        },
        {
            key: "isSingular",
            value: function isSingular() {
                var judgementNode = this.getJudgementNode(), singular = judgementNode.isSingular();
                return singular;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.frame.getMetavariable();
            }
        },
        {
            key: "compareMetavariableName",
            value: function compareMetavariableName(metavariableName) {
                return this.frame.compareMetavariableName(metavariableName);
            }
        },
        {
            key: "matchJudgementNode",
            value: function matchJudgementNode(judgementNode) {
                var judgementNodeA = judgementNode; ///
                judgementNode = this.getJudgementNode();
                var judgementNodeB = judgementNode, judgementNodeAAMatchesJudgementBNodeB = judgementNodeA.match(judgementNodeB), judgementNodeMatches = judgementNodeAAMatchesJudgementBNodeB; ///
                return judgementNodeMatches;
            }
        },
        {
            key: "findValidJudgement",
            value: function findValidJudgement(context) {
                var judgementNode = this.getJudgementNode(), judgement = context.findJudgementByJudgementNode(judgementNode), validJudgemenet = judgement; ///
                return validJudgemenet;
            }
        },
        {
            key: "validate",
            value: function validate(stated, context) {
                var judgement = null;
                var judgementString = this.getString(); ///
                context.trace("Validating the '".concat(judgementString, "' judgement..."));
                var validJudgement = this.findValidJudgement(context);
                if (validJudgement !== null) {
                    judgement = validJudgement; ///
                    context.debug("...the '".concat(judgementString, "' judgement is already valid."));
                } else {
                    var validates = false;
                    var frameValidates = this.validateFrame(stated, context);
                    if (frameValidates) {
                        var assumptionValidates = this.validateAssumption(stated, context);
                        if (assumptionValidates) {
                            var validatesWhenStated = false, validatesWhenDerived = false;
                            if (stated) {
                                validatesWhenStated = this.validateWhenStated(context);
                            } else {
                                validatesWhenDerived = this.validateWhenDerived(context);
                            }
                            if (validatesWhenStated || validatesWhenDerived) {
                                validates = true;
                            }
                        }
                    }
                    if (validates) {
                        var judgement1 = this; ///
                        context.addJudgement(judgement1);
                        context.debug("...validated the '".concat(judgementString, "' judgement."));
                    }
                }
                return judgement;
            }
        },
        {
            key: "validateFrame",
            value: function validateFrame(stated, context) {
                var frameValidates = false;
                var frameString = this.frame.getString(), judgementString = this.getString(); ///
                context.trace("Validating the '".concat(judgementString, "' judgement's '").concat(frameString, "' frame..."));
                var frame = this.frame.validate(stated, context);
                if (frame !== null) {
                    this.frame = frame;
                    frameValidates = true;
                }
                if (frameValidates) {
                    context.trace("...validated the '".concat(judgementString, "' judgement's '").concat(frameString, "' frame."));
                }
                return frameValidates;
            }
        },
        {
            key: "validateAssumption",
            value: function validateAssumption(stated, context) {
                var assumptionValidates = false;
                var assumptionString = this.assumption.getString(), judgementString = this.getString(); ///
                context.trace("Validating the '".concat(judgementString, "' judgement's '").concat(assumptionString, "' assumption..."));
                var assumption = this.assumption.validate(stated, context);
                if (assumption !== null) {
                    this.assumption = assumption;
                    assumptionValidates = true;
                }
                if (assumptionValidates) {
                    context.trace("...validated the '".concat(judgementString, "' judgement's '").concat(assumptionString, "' assumption."));
                }
                return assumptionValidates;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(context) {
                var validatesWhenStated;
                var judgementString = this.getString(); ///
                context.trace("Validating the '".concat(judgementString, "' stated judgement..."));
                validatesWhenStated = true;
                if (validatesWhenStated) {
                    context.debug("...validated the '".concat(judgementString, "' stated judgement."));
                }
                return validatesWhenStated;
            }
        },
        {
            key: "validateWhenDerived",
            value: function validateWhenDerived(context) {
                var validatesWhenDerived = false;
                var judgementString = this.getString(); ///
                context.trace("Validating the '".concat(judgementString, "' derived judgement..."));
                var metavariable = this.assumption.getMetavariable(), reference = referenceFromMetavariable(metavariable, context), topLevelMetaAssertion = context.findTopLevelMetaAssertionByReference(reference), substitutions = topLevelMetaAssertion.getSubstitutions(), frameComparesToSubstitutions = this.frame.compareSubstitutions(substitutions, context);
                if (frameComparesToSubstitutions) {
                    validatesWhenDerived = true;
                }
                if (validatesWhenDerived) {
                    context.debug("...validated the '".concat(judgementString, "' derived judgement."));
                }
                return validatesWhenDerived;
            }
        },
        {
            key: "assign",
            value: function assign(stated, context) {
                if (!stated) {
                    return;
                }
                var judgement = this, judgementAssignment = (0, _assign.judgementAssignmentFromJudgement)(judgement, context), assignment = judgementAssignment; ///
                context.addAssignment(assignment);
            }
        }
    ]);
    return Judgement;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Judgement, "name", "Judgement"), _Judgement));
function referenceFromMetavariable(metavariable, context) {
    var Reference = elements.Reference, metavariableNode = metavariable.getNode(), reference = Reference.fromMetavariableNode(metavariableNode, context);
    return reference;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgSnVkZ2VtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZnJhbWUsIGFzc3VtcHRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuYXNzdW1wdGlvbiA9IGFzc3VtcHRpb247XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb247XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHRoaXMuZ2V0SnVkZ2VtZW50Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0ganVkZ2VtZW50Tm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIG1hdGNoSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZUEgPSBqdWRnZW1lbnROb2RlOyAvLy9cblxuICAgIGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldEp1ZGdlbWVudE5vZGUoKTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGVCID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAganVkZ2VtZW50Tm9kZUFBTWF0Y2hlc0p1ZGdlbWVudEJOb2RlQiA9IGp1ZGdlbWVudE5vZGVBLm1hdGNoKGp1ZGdlbWVudE5vZGVCKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlTWF0Y2hlcyA9IGp1ZGdlbWVudE5vZGVBQU1hdGNoZXNKdWRnZW1lbnRCTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgZmluZFZhbGlkSnVkZ2VtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnROb2RlID0gdGhpcy5nZXRKdWRnZW1lbnROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbGlkSnVkZ2VtZW5ldCA9IGp1ZGdlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkSnVkZ2VtZW5ldDtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBqdWRnZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEp1ZGdlbWVudCA9IHRoaXMuZmluZFZhbGlkSnVkZ2VtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkSnVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBqdWRnZW1lbnQgPSB2YWxpZEp1ZGdlbWVudDsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBmcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVGcmFtZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVBc3N1bXB0aW9uKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEp1ZGdlbWVudChqdWRnZW1lbnQpXG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIHZhbGlkYXRlRnJhbWUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWUudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuXG4gICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9uKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5hc3N1bXB0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmFzc3VtcHRpb24udmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChhc3N1bXB0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuXG4gICAgICBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmFzc3VtcHRpb24uZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgZnJhbWVDb21wYXJlc1RvU3Vic3RpdHV0aW9ucyA9IHRoaXMuZnJhbWUuY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVDb21wYXJlc1RvU3Vic3RpdHV0aW9ucykge1xuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgaWYgKCFzdGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQoanVkZ2VtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDsgLy8vXG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiSnVkZ2VtZW50XCI7XG59KTtcblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJKdWRnZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImZyYW1lIiwiYXNzdW1wdGlvbiIsImdldEZyYW1lIiwiZ2V0RGVjbGFyYXRpb24iLCJnZXRKdWRnZW1lbnROb2RlIiwiZ2V0Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJnZXRNZXRhdmFyaWFibGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaEp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlQSIsImp1ZGdlbWVudE5vZGVCIiwianVkZ2VtZW50Tm9kZUFBTWF0Y2hlc0p1ZGdlbWVudEJOb2RlQiIsIm1hdGNoIiwianVkZ2VtZW50Tm9kZU1hdGNoZXMiLCJmaW5kVmFsaWRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlIiwidmFsaWRKdWRnZW1lbmV0IiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJqdWRnZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkSnVkZ2VtZW50IiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJmcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlRnJhbWUiLCJhc3N1bXB0aW9uVmFsaWRhdGVzIiwidmFsaWRhdGVBc3N1bXB0aW9uIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEp1ZGdlbWVudCIsImZyYW1lU3RyaW5nIiwiYXNzdW1wdGlvblN0cmluZyIsIm1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGUiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImZyYW1lQ29tcGFyZXNUb1N1YnN0aXR1dGlvbnMiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsImFzc2lnbiIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudCIsImFzc2lnbm1lbnQiLCJhZGRBc3NpZ25tZW50IiwiRWxlbWVudCIsIm5hbWUiLCJSZWZlcmVuY2UiLCJlbGVtZW50cyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7OEJBTHdCO3dCQUVEO3NCQUMwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sOEJBQUM7O2FBQU1DLFVBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsVUFBVTtnQ0FEMUJMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxVQUFVLEdBQUdBOzs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxnQkFBZ0JQLE1BQU0sR0FBRztnQkFFL0IsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxnQkFBZ0IsSUFBSSxDQUFDRixnQkFBZ0IsSUFDckNJLFdBQVdGLGNBQWNDLFVBQVU7Z0JBRXpDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQW9CLE9BQU8sSUFBSSxDQUFDVCxLQUFLLENBQUNTLGVBQWU7WUFBSTs7O1lBRXpEQyxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCQyxnQkFBZ0I7Z0JBQUksT0FBTyxJQUFJLENBQUNYLEtBQUssQ0FBQ1Us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