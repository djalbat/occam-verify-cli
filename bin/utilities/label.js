"use strict";

function labelNameFromLabelNameNode(labelNameNode) {
  const labelNameNodeContent = labelNameNode.getContent(),
        labelName = labelNameNodeContent; ///

  return labelName;
}
module.exports = {
  labelNameFromLabelNameNode
};
