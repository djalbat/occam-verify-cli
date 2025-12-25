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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
var _constants = require("../constants");
var _metaTypeNames = require("../metaTypeNames");
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
var _Frame;
var first = _necessary.arrayUtilities.first;
var _default = (0, _ontology.define)((_Frame = /*#__PURE__*/ function() {
    function Frame(string, node, tokens, assumptions) {
        _class_call_check(this, Frame);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.assumptions = assumptions;
    }
    _create_class(Frame, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getAssumptions",
            value: function getAssumptions() {
                return this.assumptions;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                return this.assumptions.length;
            }
        },
        {
            key: "getAssumption",
            value: function getAssumption() {
                var assumption = null;
                var length = this.getLength();
                if (length === 1) {
                    var firstAssumption = first(this.assumptions);
                    assumption = firstAssumption; ///
                }
                return assumption;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                var metavariable = null;
                var simple = this.isSimple();
                if (simple) {
                    var assumption = this.getAssumption();
                    metavariable = assumption.getMetavariable();
                }
                return metavariable;
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                return this.node.isSimple();
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(frame) {
                var frameNode = frame.getNode(), matches = this.node.match(frameNode), equalTo = matches; ///
                return equalTo;
            }
        },
        {
            key: "matchFrameNode",
            value: function matchFrameNode(frameNode) {
                return this.node.match(frameNode);
            }
        },
        {
            key: "matchSubstitution",
            value: function matchSubstitution(substitution, context) {
                var substitutionMatches = false;
                var frameString = this.string, substitutionString = substitution.getString();
                context.trace("Matching the '".concat(substitutionString, "' substitution against the '").concat(frameString, "' frame..."));
                if (!substitutionMatches) {
                    substitutionMatches = this.assumptions.some(function(assumption) {
                        var substitutionMatchesAssumption = assumption.matchSubstitution(substitution, context);
                        if (substitutionMatchesAssumption) {
                            return true;
                        }
                    });
                }
                if (substitutionMatches) {
                    context.debug("...matched the '".concat(substitutionString, "' substitutions against the '").concat(frameString, "' frame."));
                }
                return substitutionMatches;
            }
        },
        {
            key: "matchSubstitutions",
            value: function matchSubstitutions(substitutions, context) {
                var _this = this;
                var substitutionsMatch;
                var frameString = this.string, substitutionsString = substitutions.asString();
                context.trace("Matching the '".concat(substitutionsString, "' substitutions against the '").concat(frameString, "' frame..."));
                substitutionsMatch = substitutions.everySubstitution(function(substitution) {
                    var substitutionMatches = _this.matchSubstitution(substitution, context);
                    if (substitutionMatches) {
                        return true;
                    }
                });
                if (substitutionsMatch) {
                    context.debug("...matched the '".concat(substitutionsString, "' substitutions against the '").concat(frameString, "' frame."));
                }
                return substitutionsMatch;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' frame..."));
                var assumptionsVerify = this.verifyAssumptions(assignments, stated, context);
                if (assumptionsVerify) {
                    var verifiesWhenStated = false, verifiesWhenDerived = false;
                    if (stated) {
                        verifiesWhenStated = this.verifyWhenStated(assignments, context);
                    } else {
                        verifiesWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiesWhenStated || verifiesWhenDerived) {
                        verifies = true;
                    }
                }
                if (verifies) {
                    var frame = this; ///
                    context.addFrame(frame);
                    context.debug("...verified the '".concat(frameString, "' frame."));
                }
                return verifies;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiesWhenStated = false;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' stated frame..."));
                var simple = this.isSimple();
                if (!simple) {
                    context.trace("The '".concat(frameString, "' stated frame must be simple."));
                } else {
                    verifiesWhenStated = true;
                }
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(frameString, "' stated frame."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiesWhenDerived;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' derived frame..."));
                verifiesWhenDerived = true;
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(frameString, "' derived frame."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "verifyAssumptions",
            value: function verifyAssumptions(assignments, stated, context) {
                var assumptionsVerify = true; ///
                var length = this.getLength();
                if (length > 0) {
                    var sOrNothing = length > 1 ? _constants.S : _constants.NOTHING, assumptionsString = assumptionsStringFromAssumptions(this.assumptions);
                    context.trace("Verifying the '".concat(assumptionsString, "' assumption").concat(sOrNothing, "..."));
                    stated = true; ///
                    assignments = null; ///
                    assumptionsVerify = this.assumptions.every(function(assumption) {
                        var assumptionVerifies = assumption.verify(assignments, stated, context);
                        return assumptionVerifies;
                    });
                    if (assumptionsVerify) {
                        context.debug("...verified the '".concat(assumptionsString, "' assumption").concat(sOrNothing, "."));
                    }
                }
                return assumptionsVerify;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, assignments, stated, context) {
                var verifiesGivenMetaType = false;
                var frameString = this.string, metaTypeString = metaType.getString();
                context.trace("Verifying the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME) {
                    var verifies = this.verify(assignments, stated, context);
                    verifiesGivenMetaType = verifies; ///
                }
                if (verifiesGivenMetaType) {
                    context.debug("...verified the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type."));
                }
                return verifiesGivenMetaType;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var json = null;
                var simple = this.isSimple();
                if (simple) {
                    var assumption = this.getAssumption(), assumptionJSON = assumption.toJSON();
                    json = assumptionJSON; ///
                }
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var frame = null;
                if (json !== null) {
                    var Assumption = _ontology.default.Assumption, assumption = Assumption.fromJSON(json, context), assumptions = [
                        assumption
                    ], string = null, node = null, tokens = null;
                    frame = new Frame(string, node, tokens, assumptions);
                }
                return frame;
            }
        },
        {
            key: "fromFrameNode",
            value: function fromFrameNode(frameNode, context) {
                var frame = null;
                if (frameNode !== null) {
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        },
        {
            key: "fromJudgementNode",
            value: function fromJudgementNode(judgementNode, context) {
                var frameNode = judgementNode.getFrameNode(), frame = frameFromFrameNode(frameNode, context);
                return frame;
            }
        },
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, context) {
                var frame = null;
                var frameNode = definedAssertionNode.getFrameNode();
                if (frameNode !== null) {
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, context) {
                var frame = null;
                var frameNode = containedAssertionNode.getFrameNode();
                if (frameNode !== null) {
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        }
    ]);
    return Frame;
}(), _define_property(_Frame, "name", "Frame"), _Frame));
function frameFromFrameNode(frameNode, context) {
    var Frame = _ontology.default.Frame, node = frameNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), assumptions = assumptionsFromFrameNode(frameNode, context), frame = new Frame(string, node, tokens, assumptions);
    return frame;
}
function assumptionsFromFrameNode(frameNode, context) {
    var Assumption = _ontology.default.Assumption, assumptionNodes = frameNode.getAssumptionNodes(), assumptions = assumptionNodes.map(function(assumptionNode) {
        var assumption = Assumption.fromAssumptionNode(assumptionNode, context);
        return assumption;
    });
    return assumptions;
}
function assumptionsStringFromAssumptions(assumptions) {
    var assumptionsString = assumptions.reduce(function(assumptionsString, assumption) {
        var assumptionString = assumption.getString();
        assumptionsString = assumptionsString === null ? assumptionString : "".concat(assumptionsString, ", ").concat(assumptionString);
        return assumptionsString;
    }, null);
    return assumptionsString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBTLCBOT1RISU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIGFzc3VtcHRpb25zKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hc3N1bXB0aW9ucy5sZW5ndGg7IH1cblxuICBnZXRBc3N1bXB0aW9uKCkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdEFzc3VtcHRpb24gPSBmaXJzdCh0aGlzLmFzc3VtcHRpb25zKTtcblxuICAgICAgYXNzdW1wdGlvbiA9IGZpcnN0QXNzdW1wdGlvbjsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5nZXRBc3N1bXB0aW9uKCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IGFzc3VtcHRpb24uZ2V0TWV0YXZhcmlhYmxlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkgeyByZXR1cm4gdGhpcy5ub2RlLmlzU2ltcGxlKCk7fVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKGZyYW1lTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSB7IHJldHVybiB0aGlzLm5vZGUubWF0Y2goZnJhbWVOb2RlKTsgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25NYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk1hdGNoZXMgPSB0aGlzLmFzc3VtcHRpb25zLnNvbWUoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc0Fzc3VtcHRpb24gPSBhc3N1bXB0aW9uLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNBc3N1bXB0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zTWF0Y2g7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBzdWJzdGl0dXRpb25zTWF0Y2ggPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXMgPSB0aGlzLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNNYXRjaCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc01hdGNoO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbnNWZXJpZnkgPSB0aGlzLnZlcmlmeUFzc3VtcHRpb25zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGFzc3VtcHRpb25zVmVyaWZ5KSB7XG4gICAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCB8fCB2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGZyYW1lID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkRnJhbWUoZnJhbWUpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKCFzaW1wbGUpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBtdXN0IGJlIHNpbXBsZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdmVyaWZ5QXNzdW1wdGlvbnMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uc1ZlcmlmeSA9IHRydWU7ICAvLy9cblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc09yTm90aGluZyA9IChsZW5ndGggPiAxKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9USElORyxcbiAgICAgICAgICAgIGFzc3VtcHRpb25zU3RyaW5nID0gYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnModGhpcy5hc3N1bXB0aW9ucyk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9uJHtzT3JOb3RoaW5nfS4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgIGFzc3VtcHRpb25zVmVyaWZ5ID0gdGhpcy5hc3N1bXB0aW9ucy5ldmVyeSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uVmVyaWZpZXMgPSBhc3N1bXB0aW9uLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gYXNzdW1wdGlvblZlcmlmaWVzO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uc1ZlcmlmeSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9uJHtzT3JOb3RoaW5nfS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbnNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBGUkFNRV9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZXMgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSB2ZXJpZmllczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc0dpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGpzb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuZ2V0QXNzdW1wdGlvbigpLFxuICAgICAgICAgICAgYXNzdW1wdGlvbkpTT04gPSBhc3N1bXB0aW9uLnRvSlNPTigpO1xuXG4gICAgICBqc29uID0gYXNzdW1wdGlvbkpTT047ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IEFzc3VtcHRpb24gfSA9b250b2xvZ3ksXG4gICAgICAgICAgICBhc3N1bXB0aW9uID0gQXNzdW1wdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGFzc3VtcHRpb25zID0gW1xuICAgICAgICAgICAgICBhc3N1bXB0aW9uXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgICAgdG9rZW5zID0gbnVsbDtcblxuICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIGFzc3VtcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lIH0gPSBvbnRvbG9neSxcbiAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIGFzc3VtcHRpb25zKTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPSBvbnRvbG9neSxcbiAgICAgICAgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IEFzc3VtcHRpb24uZnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zKGFzc3VtcHRpb25zKSB7XG4gIGNvbnN0IGFzc3VtcHRpb25zU3RyaW5nID0gYXNzdW1wdGlvbnMucmVkdWNlKChhc3N1bXB0aW9uc1N0cmluZywgYXNzdW1wdGlvbikgPT4ge1xuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSBhc3N1bXB0aW9uLmdldFN0cmluZygpO1xuXG4gICAgYXNzdW1wdGlvbnNTdHJpbmcgPSAoYXNzdW1wdGlvbnNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2Fzc3VtcHRpb25zU3RyaW5nfSwgJHthc3N1bXB0aW9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbnNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uc1N0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiRnJhbWUiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiYXNzdW1wdGlvbnMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0QXNzdW1wdGlvbnMiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsImZpcnN0QXNzdW1wdGlvbiIsImdldE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsInNpbXBsZSIsImlzU2ltcGxlIiwiaXNFcXVhbFRvIiwiZnJhbWUiLCJmcmFtZU5vZGUiLCJtYXRjaGVzIiwibWF0Y2giLCJlcXVhbFRvIiwibWF0Y2hGcmFtZU5vZGUiLCJtYXRjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25NYXRjaGVzIiwiZnJhbWVTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJzdWJzdGl0dXRpb25NYXRjaGVzQXNzdW1wdGlvbiIsImRlYnVnIiwibWF0Y2hTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNNYXRjaCIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsImFzc3VtcHRpb25zVmVyaWZ5IiwidmVyaWZ5QXNzdW1wdGlvbnMiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiYWRkRnJhbWUiLCJzT3JOb3RoaW5nIiwiUyIsIk5PVEhJTkciLCJhc3N1bXB0aW9uc1N0cmluZyIsImFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zIiwiZXZlcnkiLCJhc3N1bXB0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2ZXJpZmllc0dpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsInRvSlNPTiIsImpzb24iLCJhc3N1bXB0aW9uSlNPTiIsImZyb21KU09OIiwiQXNzdW1wdGlvbiIsIm9udG9sb2d5IiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImZyb21KdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImdldEZyYW1lTm9kZSIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwibmFtZSIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsImFzc3VtcHRpb25Ob2RlcyIsImdldEFzc3VtcHRpb25Ob2RlcyIsIm1hcCIsImFzc3VtcHRpb25Ob2RlIiwiZnJvbUFzc3VtcHRpb25Ob2RlIiwicmVkdWNlIiwiYXNzdW1wdGlvblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7eUJBVitCO2dFQUVWO3lCQUdNOzZCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7SUFFUixXQUFlRSxJQUFBQSxnQkFBTSwwQkFBQzthQUFNQyxNQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxXQUFXO2dDQURuQko7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOzs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFdBQVc7WUFDekI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNMLFdBQVcsQ0FBQ00sTUFBTTtZQUFFOzs7WUFFOUNDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxhQUFhO2dCQUVqQixJQUFNRixTQUFTLElBQUksQ0FBQ0QsU0FBUztnQkFFN0IsSUFBSUMsV0FBVyxHQUFHO29CQUNoQixJQUFNRyxrQkFBa0JoQixNQUFNLElBQUksQ0FB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