import nlp from 'compromise';

const nouns = corpus => nlp(corpus)
  .nouns()
  .out('array');

export default nouns;
