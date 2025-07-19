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

function fromFourthChildNode(callback) {
  let result;

  const fourthIndex = 3;

  this.forwardsSomeChildNode((childNode, index) => {
    if (index === fourthIndex) {
      const fourthChildNode = childNode; ///

      result = callback(fourthChildNode);

      return true;
    }
  });

  return result;
}

function fromFifthChildNode(callback) {
  let result;

  const fifthIndex = 4;

  this.forwardsSomeChildNode((childNode, index) => {
    if (index === fifthIndex) {
      const fifthChildNode = childNode; ///

      result = callback(fifthChildNode);

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
      const firstLastChildNode = childNode; ///

      result = callback(firstLastChildNode);

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
      const secondLastChildNode = childNode; ///

      result = callback(secondLastChildNode);

      return true;
    }
  });

  return result;
}

function fromThirdLastChildNode(callback) {
  let result;

  const multiplicity = this.getMultiplicity(),
        thirdLastIndex = multiplicity - 3;

  this.backwardsSomeChildNode((childNode, index) => {
    if (index === thirdLastIndex) {
      const thirdLastChildNode = childNode; ///

      result = callback(thirdLastChildNode);

      return true;
    }
  });

  return result;
}

function fromFourthLastChildNode(callback) {
  let result;

  const multiplicity = this.getMultiplicity(),
        fourthLastIndex = multiplicity - 4;

  this.backwardsSomeChildNode((childNode, index) => {
    if (index === fourthLastIndex) {
      const fourthLastChildNode = childNode; ///

      result = callback(fourthLastChildNode);

      return true;
    }
  });

  return result;
}

function fromFifthLastChildNode(callback) {
  let result;

  const multiplicity = this.getMultiplicity(),
        fifthLastIndex = multiplicity - 5;

  this.backwardsSomeChildNode((childNode, index) => {
    if (index === fifthLastIndex) {
      const fifthLastChildNode = childNode; ///

      result = callback(fifthLastChildNode);

      return true;
    }
  });

  return result;
}

const nodeMixins = {
  fromFirstChildNode,
  fromSecondChildNode,
  fromThirdChildNode,
  fromFourthChildNode,
  fromFifthChildNode,
  fromFirstLastChildNode,
  fromSecondLastChildNode,
  fromThirdLastChildNode,
  fromFourthLastChildNode,
  fromFifthLastChildNode
};

export default nodeMixins;
