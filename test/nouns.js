import { expect } from 'chai';
import { describe } from 'mocha';
import { lockeWandering } from './corpora';
import nouns from '../src/nouns';

describe('#nouns', () => {
  const { corpus, nouns: lockeNouns } = lockeWandering;
  it('should return all nouns within a corpus', () => {
    expect(nouns(corpus)).to.have.members(lockeNouns);
  });
});
