import nlp from 'compromise';

const nounPlurals = corpus => nlp(corpus)
  .nouns()
  .isPlural()
  .out('array');

export default nounPlurals;
