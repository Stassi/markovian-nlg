import { expect } from 'chai';
import { describe } from 'mocha';
import { lockeWandering } from './corpora';
import bigrams from '../src/bigrams';

describe('#bigrams', () => {
  const { corpus, bigrams: lockeBigrams } = lockeWandering;
  it('should return all bigrams within a corpus', () => {
    const res = bigrams(corpus);
    expect(res).to.have.members(lockeBigrams);
  });
});
