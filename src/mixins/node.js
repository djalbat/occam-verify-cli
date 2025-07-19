"use strict";

function fromFirstChildNode(callback) {
  let result;

  const firstIndex = 0;

  this.forwardsSomeChildNode((childNode, index) => {
    if (index === firstIndex) {
      const firstChildNode = childNode; ///

      result = callback(firstChildNode);

      return true;
    }
  });

  return result;
}

function fromSecondChildNode(callback) {
  let result;

  const secondIndex = 1;

  this.forwardsSomeChildNode((childNode, index) => {
    if (index === secondIndex) {
      const firstChildNode = childNode; ///

      result = callback(firstChildNode);

      return true;
    }
  });

  return result;
}

function fromThirdChildNode(callback) {
  let result;

  const thirdIndex = 2;

  this.forwardsSomeChildNode((childNode, index) => {
    if (index === thirdIndex) {
      const thirdChildNode = childNode; ///

      result = callback(thirdChildNode);

      return true;
    }
  });

  return result;
}

function fromFirstLastChildNode(callback) {
  let result;

  const multiplicity = this.getMultiplicity(),
        firstLastIndex = multiplicity - 1;

  this.backwardsSomeChildNode((childNode, index) => {
    if (index === firstLastIndex) {
      const thirdChildNode = childNode; ///

      result = callback(thirdChildNode);

      return true;
    }
  });

  return result;
}

function fromSecondLastChildNode(callback) {
  let result;

  const multiplicity = this.getMultiplicity(),
        secondLastIndex = multiplicity - 2;

  this.backwardsSomeChildNode((childNode, index) => {
    if (index === secondLastIndex) {
      const thirdChildNode = childNode; ///

      result = callback(thirdChildNode);

      return true;
    }
  });

  return result;
}

function fromThirdLastChildNode(callback) {
  let result;

  const multiplicity = this.getMultiplicity(),
        thirdLastIndex = multiplicity - 2;

  this.backwardsSomeChildNode((childNode, index) => {
    if (index === thirdLastIndex) {
      const thirdChildNode = childNode; ///

      result = callback(thirdChildNode);

      return true;
    }
  });

  return result;
}

const nodeMixins = {
  fromFirstChildNode,
  fromSecondChildNode,
  fromThirdChildNode,
  fromFirstLastChildNode,
  fromSecondLastChildNode,
  fromThirdLastChildNode
};

export default nodeMixins;
