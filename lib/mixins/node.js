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
function fromFirstLastChildNode(callback) {
    var result;
    var multiplicity = this.getMultiplicity(), firstLastIndex = multiplicity - 1;
    this.backwardsSomeChildNode(function(childNode, index) {
        if (index === firstLastIndex) {
            var thirdChildNode = childNode; ///
            result = callback(thirdChildNode);
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
            var thirdChildNode = childNode; ///
            result = callback(thirdChildNode);
            return true;
        }
    });
    return result;
}
function fromThirdLastChildNode(callback) {
    var result;
    var multiplicity = this.getMultiplicity(), thirdLastIndex = multiplicity - 2;
    this.backwardsSomeChildNode(function(childNode, index) {
        if (index === thirdLastIndex) {
            var thirdChildNode = childNode; ///
            result = callback(thirdChildNode);
            return true;
        }
    });
    return result;
}
var nodeMixins = {
    fromFirstChildNode: fromFirstChildNode,
    fromSecondChildNode: fromSecondChildNode,
    fromThirdChildNode: fromThirdChildNode,
    fromFirstLastChildNode: fromFirstLastChildNode,
    fromSecondLastChildNode: fromSecondLastChildNode,
    fromThirdLastChildNode: fromThirdLastChildNode
};
var _default = nodeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZnJvbUZpcnN0Q2hpbGROb2RlKGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgZmlyc3RJbmRleCA9IDA7XG5cbiAgdGhpcy5mb3J3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IGZpcnN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZmlyc3RDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21TZWNvbmRDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBzZWNvbmRJbmRleCA9IDE7XG5cbiAgdGhpcy5mb3J3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IHNlY29uZEluZGV4KSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGZpcnN0Q2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmcm9tVGhpcmRDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCB0aGlyZEluZGV4ID0gMjtcblxuICB0aGlzLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gdGhpcmRJbmRleCkge1xuICAgICAgY29uc3QgdGhpcmRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlyZENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZnJvbUZpcnN0TGFzdENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgIGZpcnN0TGFzdEluZGV4ID0gbXVsdGlwbGljaXR5IC0gMTtcblxuICB0aGlzLmJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IGZpcnN0TGFzdEluZGV4KSB7XG4gICAgICBjb25zdCB0aGlyZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKHRoaXJkQ2hpbGROb2RlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmcm9tU2Vjb25kTGFzdENoaWxkTm9kZShjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgIHNlY29uZExhc3RJbmRleCA9IG11bHRpcGxpY2l0eSAtIDI7XG5cbiAgdGhpcy5iYWNrd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSBzZWNvbmRMYXN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IHRoaXJkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVzdWx0ID0gY2FsbGJhY2sodGhpcmRDaGlsZE5vZGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZyb21UaGlyZExhc3RDaGlsZE5vZGUoY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0aGlzLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICB0aGlyZExhc3RJbmRleCA9IG11bHRpcGxpY2l0eSAtIDI7XG5cbiAgdGhpcy5iYWNrd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSB0aGlyZExhc3RJbmRleCkge1xuICAgICAgY29uc3QgdGhpcmRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlyZENoaWxkTm9kZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuY29uc3Qgbm9kZU1peGlucyA9IHtcbiAgZnJvbUZpcnN0Q2hpbGROb2RlLFxuICBmcm9tU2Vjb25kQ2hpbGROb2RlLFxuICBmcm9tVGhpcmRDaGlsZE5vZGUsXG4gIGZyb21GaXJzdExhc3RDaGlsZE5vZGUsXG4gIGZyb21TZWNvbmRMYXN0Q2hpbGROb2RlLFxuICBmcm9tVGhpcmRMYXN0Q2hpbGROb2RlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBub2RlTWl4aW5zO1xuIl0sIm5hbWVzIjpbImZyb21GaXJzdENoaWxkTm9kZSIsImNhbGxiYWNrIiwicmVzdWx0IiwiZmlyc3RJbmRleCIsImZvcndhcmRzU29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImluZGV4IiwiZmlyc3RDaGlsZE5vZGUiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kSW5kZXgiLCJmcm9tVGhpcmRDaGlsZE5vZGUiLCJ0aGlyZEluZGV4IiwidGhpcmRDaGlsZE5vZGUiLCJmcm9tRmlyc3RMYXN0Q2hpbGROb2RlIiwibXVsdGlwbGljaXR5IiwiZ2V0TXVsdGlwbGljaXR5IiwiZmlyc3RMYXN0SW5kZXgiLCJiYWNrd2FyZHNTb21lQ2hpbGROb2RlIiwiZnJvbVNlY29uZExhc3RDaGlsZE5vZGUiLCJzZWNvbmRMYXN0SW5kZXgiLCJmcm9tVGhpcmRMYXN0Q2hpbGROb2RlIiwidGhpcmRMYXN0SW5kZXgiLCJub2RlTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwSEE7OztlQUFBOzs7QUF4SEEsU0FBU0EsbUJBQW1CQyxRQUFRO0lBQ2xDLElBQUlDO0lBRUosSUFBTUMsYUFBYTtJQUVuQixJQUFJLENBQUNDLHFCQUFxQixDQUFDLFNBQUNDLFdBQVdDO1FBQ3JDLElBQUlBLFVBQVVILFlBQVk7WUFDeEIsSUFBTUksaUJBQWlCRixXQUFXLEdBQUc7WUFFckNILFNBQVNELFNBQVNNO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0w7QUFDVDtBQUVBLFNBQVNNLG9CQUFvQlAsUUFBUTtJQUNuQyxJQUFJQztJQUVKLElBQU1PLGNBQWM7SUFFcEIsSUFBSSxDQUFDTCxxQkFBcUIsQ0FBQyxTQUFDQyxXQUFXQztRQUNyQyxJQUFJQSxVQUFVRyxhQUFhO1lBQ3pCLElBQU1GLGlCQUFpQkYsV0FBVyxHQUFHO1lBRXJDSCxTQUFTRCxTQUFTTTtZQUVsQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9MO0FBQ1Q7QUFFQSxTQUFTUSxtQkFBbUJULFFBQVE7SUFDbEMsSUFBSUM7SUFFSixJQUFNUyxhQUFhO0lBRW5CLElBQUksQ0FBQ1AscUJBQXFCLENBQUMsU0FBQ0MsV0FBV0M7UUFDckMsSUFBSUEsVUFBVUssWUFBWTtZQUN4QixJQUFNQyxpQkFBaUJQLFdBQVcsR0FBRztZQUVyQ0gsU0FBU0QsU0FBU1c7WUFFbEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPVjtBQUNUO0FBRUEsU0FBU1csdUJBQXVCWixRQUFRO0lBQ3RDLElBQUlDO0lBRUosSUFBTVksZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNDLGlCQUFpQkYsZUFBZTtJQUV0QyxJQUFJLENBQUNHLHNCQUFzQixDQUFDLFNBQUNaLFdBQVdDO1FBQ3RDLElBQUlBLFVBQVVVLGdCQUFnQjtZQUM1QixJQUFNSixpQkFBaUJQLFdBQVcsR0FBRztZQUVyQ0gsU0FBU0QsU0FBU1c7WUFFbEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPVjtBQUNUO0FBRUEsU0FBU2dCLHdCQUF3QmpCLFFBQVE7SUFDdkMsSUFBSUM7SUFFSixJQUFNWSxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0ksa0JBQWtCTCxlQUFlO0lBRXZDLElBQUksQ0FBQ0csc0JBQXNCLENBQUMsU0FBQ1osV0FBV0M7UUFDdEMsSUFBSUEsVUFBVWEsaUJBQWlCO1lBQzdCLElBQU1QLGlCQUFpQlAsV0FBVyxHQUFHO1lBRXJDSCxTQUFTRCxTQUFTVztZQUVsQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9WO0FBQ1Q7QUFFQSxTQUFTa0IsdUJBQXVCbkIsUUFBUTtJQUN0QyxJQUFJQztJQUVKLElBQU1ZLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DTSxpQkFBaUJQLGVBQWU7SUFFdEMsSUFBSSxDQUFDRyxzQkFBc0IsQ0FBQyxTQUFDWixXQUFXQztRQUN0QyxJQUFJQSxVQUFVZSxnQkFBZ0I7WUFDNUIsSUFBTVQsaUJBQWlCUCxXQUFXLEdBQUc7WUFFckNILFNBQVNELFNBQVNXO1lBRWxCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT1Y7QUFDVDtBQUVBLElBQU1vQixhQUFhO0lBQ2pCdEIsb0JBQUFBO0lBQ0FRLHFCQUFBQTtJQUNBRSxvQkFBQUE7SUFDQUcsd0JBQUFBO0lBQ0FLLHlCQUFBQTtJQUNBRSx3QkFBQUE7QUFDRjtJQUVBLFdBQWVFIn0=