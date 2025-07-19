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
function fromFirstChildNode(callback) {
    var result;
    var firstIndex = 0;
    this.forwardsSomeChildNode(function(childNode, index) {
        if (index === firstIndex) {
            var firstChildNode = childNode; ///
            result = callback(firstChildNode);
            return true;
        }
    });
    return result;
}
function fromSecondChildNode(callback) {
    var result;
    var secondIndex = 1;
    this.forwardsSomeChildNode(function(childNode, index) {
        if (index === secondIndex) {
            var firstChildNode = childNode; ///
            result = callback(firstChildNode);
            return true;
        }
    });
    return result;
}
function fromThirdChildNode(callback) {
    var result;
    var thirdIndex = 2;
    this.forwardsSomeChildNode(function(childNode, index) {
        if (index === thirdIndex) {
            var thirdChildNode = childNode; ///
            result = callback(thirdChildNode);
            return true;
        }
    });
    return result;
}
function fromFourthChildNode(callback) {
    var result;
    var fourthIndex = 3;
    this.forwardsSomeChildNode(function(childNode, index) {
        if (index === fourthIndex) {
            var fourthChildNode = childNode; ///
            result = callback(fourthChildNode);
            return true;
        }
    });
    return result;
}
function fromFifthChildNode(callback) {
    var result;
    var fifthIndex = 4;
    this.forwardsSomeChildNode(function(childNode, index) {
        if (index === fifthIndex) {
            var fifthChildNode = childNode; ///
            result = callback(fifthChildNode);
            return true;
        }
    });
    return result;
}
function fromFirstLastChildNode(callback) {
    var result;
    var multiplicity = this.getMultiplicity(), firstLastIndex = multiplicity - 1;
    this.backwardsSomeChildNode(function(childNode, index) {
        if (index === firstLastIndex) {
            var firstLastChildNode = childNode; ///
            result = callback(firstLastChildNode);
            return true;
        }
    });
    return result;
}
function fromSecondLastChildNode(callback) {
    var result;
    var multiplicity = this.getMultiplicity(), secondLastIndex = multiplicity - 2;
    this.backwardsSomeChildNode(function(childNode, index) {
        if (index === secondLastIndex) {
            var secondLastChildNode = childNode; ///
            result = callback(secondLastChildNode);
            return true;
        }
    });
    return result;
}
function fromThirdLastChildNode(callback) {
    var result;
    var multiplicity = this.getMultiplicity(), thirdLastIndex = multiplicity - 3;
    this.backwardsSomeChildNode(function(childNode, index) {
        if (index === thirdLastIndex) {
            var thirdLastChildNode = childNode; ///
            result = callback(thirdLastChildNode);
            return true;
        }
    });
    return result;
}
function fromFourthLastChildNode(callback) {
    var result;
    var multiplicity = this.getMultiplicity(), fourthLastIndex = multiplicity - 4;
    this.backwardsSomeChildNode(function(childNode, index) {
        if (index === fourthLastIndex) {
            var fourthLastChildNode = childNode; ///
            result = callback(fourthLastChildNode);
            return true;
        }
    });
    return result;
}
function fromFifthLastChildNode(callback) {
    var result;
    var multiplicity = this.getMultiplicity(), fifthLastIndex = multiplicity - 5;
    this.backwardsSomeChildNode(function(childNode, index) {
        if (index === fifthLastIndex) {
            var fifthLastChildNode = childNode; ///
            result = callback(fifthLastChildNode);
            return true;
        }
    });
    return result;
}
var nodeMixins = {
    fromFirstChildNode: fromFirstChildNode,
    fromSecondChildNode: fromSecondChildNode,
    fromThirdChildNode: fromThirdChildNode,
    fromFourthChildNode: fromFourthChildNode,
    fromFifthChildNode: fromFifthChildNode,
    fromFirstLastChildNode: fromFirstLastChildNode,
    fromSecondLastChildNode: fromSecondLastChildNode,
    fromThirdLastChildNode: fromThirdLastChildNode,
    fromFourthLastChildNode: fromFourthLastChildNode,
    fromFifthLastChildNode: fromFifthLastChildNode
};
var _default = nodeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZnJvbUZpcnN0Q2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgZmlyc3RJbmRleCA9IDA7XG5cbiAgdGhpcy5mb3J3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IGZpcnN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZmlyc3RDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21TZWNvbmRDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBzZWNvbmRJbmRleCA9IDE7XG5cbiAgdGhpcy5mb3J3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IHNlY29uZEluZGV4KSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGZpcnN0Q2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmcm9tVGhpcmRDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCB0aGlyZEluZGV4ID0gMjtcblxuICB0aGlzLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gdGhpcmRJbmRleCkge1xuICAgICAgY29uc3QgdGhpcmRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlyZENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbUZvdXJ0aENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IGZvdXJ0aEluZGV4ID0gMztcblxuICB0aGlzLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gZm91cnRoSW5kZXgpIHtcbiAgICAgIGNvbnN0IGZvdXJ0aENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGZvdXJ0aENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbUZpZnRoQ2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgZmlmdGhJbmRleCA9IDQ7XG5cbiAgdGhpcy5mb3J3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IGZpZnRoSW5kZXgpIHtcbiAgICAgIGNvbnN0IGZpZnRoQ2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZmlmdGhDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21GaXJzdExhc3RDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0aGlzLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICBmaXJzdExhc3RJbmRleCA9IG11bHRpcGxpY2l0eSAtIDE7XG5cbiAgdGhpcy5iYWNrd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBmaXJzdExhc3RJbmRleCkge1xuICAgICAgY29uc3QgZmlyc3RMYXN0Q2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZmlyc3RMYXN0Q2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmcm9tU2Vjb25kTGFzdENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgIHNlY29uZExhc3RJbmRleCA9IG11bHRpcGxpY2l0eSAtIDI7XG5cbiAgdGhpcy5iYWNrd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBzZWNvbmRMYXN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IHNlY29uZExhc3RDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayhzZWNvbmRMYXN0Q2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmcm9tVGhpcmRMYXN0Q2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgdGhpcmRMYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSAzO1xuXG4gIHRoaXMuYmFja3dhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gdGhpcmRMYXN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IHRoaXJkTGFzdENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKHRoaXJkTGFzdENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbUZvdXJ0aExhc3RDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0aGlzLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICBmb3VydGhMYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSA0O1xuXG4gIHRoaXMuYmFja3dhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gZm91cnRoTGFzdEluZGV4KSB7XG4gICAgICBjb25zdCBmb3VydGhMYXN0Q2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZm91cnRoTGFzdENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbUZpZnRoTGFzdENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgIGZpZnRoTGFzdEluZGV4ID0gbXVsdGlwbGljaXR5IC0gNTtcblxuICB0aGlzLmJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IGZpZnRoTGFzdEluZGV4KSB7XG4gICAgICBjb25zdCBmaWZ0aExhc3RDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayhmaWZ0aExhc3RDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmNvbnN0IG5vZGVNaXhpbnMgPSB7XG4gIGZyb21GaXJzdENoaWxkTm9kZSxcbiAgZnJvbVNlY29uZENoaWxkTm9kZSxcbiAgZnJvbVRoaXJkQ2hpbGROb2RlLFxuICBmcm9tRm91cnRoQ2hpbGROb2RlLFxuICBmcm9tRmlmdGhDaGlsZE5vZGUsXG4gIGZyb21GaXJzdExhc3RDaGlsZE5vZGUsXG4gIGZyb21TZWNvbmRMYXN0Q2hpbGROb2RlLFxuICBmcm9tVGhpcmRMYXN0Q2hpbGROb2RlLFxuICBmcm9tRm91cnRoTGFzdENoaWxkTm9kZSxcbiAgZnJvbUZpZnRoTGFzdENoaWxkTm9kZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZU1peGlucztcbiJdLCJuYW1lcyI6WyJmcm9tRmlyc3RDaGlsZE5vZGUiLCJjYWxsYmFjayIsInJlc3VsdCIsImZpcnN0SW5kZXgiLCJmb3J3YXJkc1NvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJpbmRleCIsImZpcnN0Q2hpbGROb2RlIiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZEluZGV4IiwiZnJvbVRoaXJkQ2hpbGROb2RlIiwidGhpcmRJbmRleCIsInRoaXJkQ2hpbGROb2RlIiwiZnJvbUZvdXJ0aENoaWxkTm9kZSIsImZvdXJ0aEluZGV4IiwiZm91cnRoQ2hpbGROb2RlIiwiZnJvbUZpZnRoQ2hpbGROb2RlIiwiZmlmdGhJbmRleCIsImZpZnRoQ2hpbGROb2RlIiwiZnJvbUZpcnN0TGFzdENoaWxkTm9kZSIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsImZpcnN0TGFzdEluZGV4IiwiYmFja3dhcmRzU29tZUNoaWxkTm9kZSIsImZpcnN0TGFzdENoaWxkTm9kZSIsImZyb21TZWNvbmRMYXN0Q2hpbGROb2RlIiwic2Vjb25kTGFzdEluZGV4Iiwic2Vjb25kTGFzdENoaWxkTm9kZSIsImZyb21UaGlyZExhc3RDaGlsZE5vZGUiLCJ0aGlyZExhc3RJbmRleCIsInRoaXJkTGFzdENoaWxkTm9kZSIsImZyb21Gb3VydGhMYXN0Q2hpbGROb2RlIiwiZm91cnRoTGFzdEluZGV4IiwiZm91cnRoTGFzdENoaWxkTm9kZSIsImZyb21GaWZ0aExhc3RDaGlsZE5vZGUiLCJmaWZ0aExhc3RJbmRleCIsImZpZnRoTGFzdENoaWxkTm9kZSIsIm5vZGVNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdNQTs7O2VBQUE7OztBQXRNQSxTQUFTQSxtQkFBbUJDLFFBQVE7SUFDbEMsSUFBSUM7SUFFSixJQUFNQyxhQUFhO0lBRW5CLElBQUksQ0FBQ0MscUJBQXFCLENBQUMsU0FBQ0MsV0FBV0M7UUFDckMsSUFBSUEsVUFBVUgsWUFBWTtZQUN4QixJQUFNSSxpQkFBaUJGLFdBQVcsR0FBRztZQUVyQ0gsU0FBU0QsU0FBU007WUFFbEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPTDtBQUNUO0FBRUEsU0FBU00sb0JBQW9CUCxRQUFRO0lBQ25DLElBQUlDO0lBRUosSUFBTU8sY0FBYztJQUVwQixJQUFJLENBQUNMLHFCQUFxQixDQUFDLFNBQUNDLFdBQVdDO1FBQ3JDLElBQUlBLFVBQVVHLGFBQWE7WUFDekIsSUFBTUYsaUJBQWlCRixXQUFXLEdBQUc7WUFFckNILFNBQVNELFNBQVNNO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0w7QUFDVDtBQUVBLFNBQVNRLG1CQUFtQlQsUUFBUTtJQUNsQyxJQUFJQztJQUVKLElBQU1TLGFBQWE7SUFFbkIsSUFBSSxDQUFDUCxxQkFBcUIsQ0FBQyxTQUFDQyxXQUFXQztRQUNyQyxJQUFJQSxVQUFVSyxZQUFZO1lBQ3hCLElBQU1DLGlCQUFpQlAsV0FBVyxHQUFHO1lBRXJDSCxTQUFTRCxTQUFTVztZQUVsQixPQUFPO1FBQ1Q7SUFDRjtJQUVB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