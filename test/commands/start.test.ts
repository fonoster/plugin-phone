import {expect, test} from '@oclif/test'

describe('start', () => {
  test
  .stdout()
  .command(['start'])
  .it('start server secured mode', ctx => {
    // expect(ctx.stdout).to.contain('')
  })
})
