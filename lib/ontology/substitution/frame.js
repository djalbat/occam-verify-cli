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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _instantiate = require("../../process/instantiate");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var _FrameSubstitution;
var _default = (0, _ontology.define)((_FrameSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(FrameSubstitution, Substitution);
    function FrameSubstitution(context, string, node, frame, metavariable) {
        _class_call_check(this, FrameSubstitution);
        var _this;
        _this = _call_super(this, FrameSubstitution, [
            context,
            string,
            node
        ]);
        _this.frame = frame;
        _this.metavariable = metavariable;
        return _this;
    }
    _create_class(FrameSubstitution, [
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
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var frameNode = this.frame.getNode(), replacementNode = frameNode; ///
                return replacementNode;
            }
        },
        {
            key: "isFrameEqualToFrame",
            value: function isFrameEqualToFrame(frame) {
                return this.frame.isEqualTo(frame);
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable) {
                return this.metavariable.isEqualTo(metavariable);
            }
        },
        {
            key: "matchParameter",
            value: function matchParameter(parameter) {
                return this.metavariable.matchParameter(parameter);
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies = false;
                var frameSubstitutionString = this.string; ///
                context.trace("Verifiying the '".concat(frameSubstitutionString, "' frame substitution..."));
                var frameSingular = this.frame.isSingular();
                if (frameSingular) {
                    if (this.metavariable !== null) {
                        var metavariablePresent = context.isMetavariablePresent(this.metavariable);
                        if (metavariablePresent) {
                            var frameMetavariable = this.frame.getMetavariable(), frameMetavariablePresent = context.isMetavariablePresent(frameMetavariable);
                            if (frameMetavariablePresent) {
                                verifies = true;
                            } else {
                                context.debug("The '".concat(frameSubstitutionString, "' frame substitution's general frame's metavariable is not present."));
                            }
                        } else {
                            context.debug("The '".concat(frameSubstitutionString, "' frame substitution's specific frame's metavariable is not present."));
                        }
                    } else {
                        context.debug("The '".concat(frameSubstitutionString, "' frame substitution's general frame is not singular."));
                    }
                } else {
                    context.debug("The '".concat(frameSubstitutionString, "' frame substitution's specific frame is not singular."));
                }
                if (verifies) {
                    var substititoin = this; ///
                    context.addSubstitution(substititoin);
                    context.debug("...verified the '".concat(frameSubstitutionString, "' frame substitution."));
                }
                return verifies;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var frameSubstitution = null;
                var statementNode = statement.getNode(), frameSubstitutionNode = statementNode.getFrameSubstitutionNode();
                if (frameSubstitutionNode !== null) {
                    var Frame = _ontology.default.Frame, Metavariable = _ontology.default.Metavariable, firstFrameNode = frameSubstitutionNode.getFirstFrameNode(), lastMetavariableNode = frameSubstitutionNode.getLastMetavariableNode(), metavariableNode = lastMetavariableNode, frameNode = firstFrameNode, node = frameSubstitutionNode, string = context.nodeAsString(node), frame = Frame.fromFrameNode(frameNode, context), metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
                    frameSubstitution = new FrameSubstitution(context, string, node, frame, metavariable);
                }
                return frameSubstitution;
            }
        },
        {
            key: "fromFrameAndMetavariable",
            value: function fromFrameAndMetavariable(frame, metavariable, context) {
                var string = stringFromFrameAndMetavariable(frame, metavariable), frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context), node = frameSubstitutionNode, frameSubstitution = new FrameSubstitution(context, string, node, frame, metavariable);
                return frameSubstitution;
            }
        }
    ]);
    return FrameSubstitution;
}(_substitution.default), _define_property(_FrameSubstitution, "name", "FrameSubstitution"), _FrameSubstitution));
function stringFromFrameAndMetavariable(frame, metavariable) {
    var frameString = frame.getString(), metavariableString = metavariable.getString(), string = "[".concat(frameString, " for [").concat(metavariableString, "]]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vLi4vb250b2xvZ3lcIjtcbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IGZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgaXNGcmFtZUVxdWFsVG9GcmFtZShmcmFtZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5pc0VxdWFsVG8oZnJhbWUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7IH1cblxuICBtYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcik7IH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZpeWluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lU2luZ3VsYXIgPSB0aGlzLmZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICBpZiAodGhpcy5tZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlID0gdGhpcy5mcmFtZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChmcmFtZU1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzIGdlbmVyYWwgZnJhbWUncyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzIHNwZWNpZmljIGZyYW1lJ3MgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyBnZW5lcmFsIGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3Mgc3BlY2lmaWMgZnJhbWUgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3Qgc3Vic3RpdGl0b2luID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0aXRvaW4pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IEZyYW1lLCBNZXRhdmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgZmlyc3RGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0Rmlyc3RGcmFtZU5vZGUoKSxcbiAgICAgICAgICAgIGxhc3RNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldExhc3RNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbGFzdE1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIGZyYW1lTm9kZSA9IGZpcnN0RnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZnJhbWUsIG1ldGF2YXJpYWJsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7ZnJhbWVTdHJpbmd9IGZvciBbJHttZXRhdmFyaWFibGVTdHJpbmd9XV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImZyYW1lIiwibWV0YXZhcmlhYmxlIiwiZ2V0RnJhbWUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJmcmFtZU5vZGUiLCJnZXROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNGcmFtZUVxdWFsVG9GcmFtZSIsImlzRXF1YWxUbyIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsIm1hdGNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJmcmFtZVN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwiZnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwiZnJhbWVNZXRhdmFyaWFibGUiLCJmcmFtZU1ldGF2YXJpYWJsZVByZXNlbnQiLCJkZWJ1ZyIsInN1YnN0aXRpdG9pbiIsImFkZFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJmcmFtZVN1YnN0aXR1dGlvbiIsInN0YXRlbWVudE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJGcmFtZSIsIm9udG9sb2d5IiwiTWV0YXZhcmlhYmxlIiwiZmlyc3RGcmFtZU5vZGUiLCJnZXRGaXJzdEZyYW1lTm9kZSIsImxhc3RNZXRhdmFyaWFibGVOb2RlIiwiZ2V0TGFzdE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbUZyYW1lTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwic3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiLCJmcmFtZVN0cmluZyIsImdldFN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0VBTnFCO21FQUNJOzJCQUdvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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