import nlp from 'compromise';

const nouns = corpus => nlp(corpus)
  .ngrams()
  .unigrams()
  .out('array');

export default nouns;
