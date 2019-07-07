'use strict';

const dom = require('occam-dom'),
      necessary = require('necessary');

const verifyTypeDeclarationNode = require('../../verify/node/declaration/type');

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first, second } = arrayUtilities;

const maximumDepth = 1,
      keywordQuery = Query.fromExpression('//@keyword', maximumDepth);

function verifyDeclarationNode(declarationNode, context) {
  const keywordNodes = keywordQuery.execute(declarationNode),
        firstKeywordNode = first(keywordNodes),
        firstKeywordNodeContent = firstKeywordNode.getContent(),
        keyword = firstKeywordNodeContent,  ///
        childNodes = declarationNode.getChildNodes(),
        secondChildNode = second(childNodes);

  switch (keyword) {
    case 'Type': {
      const typeDeclarationNode = secondChildNode;  ///

      verifyTypeDeclarationNode(typeDeclarationNode, context);

      break;
    }
  }
}

module.exports = verifyDeclarationNode;
