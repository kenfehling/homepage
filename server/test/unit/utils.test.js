/* global describe, it */

import {expect} from 'chai'
import {isLocal} from '../../utils'

const makeReq = (host) => ({
  headers: {
    host
  }
})

describe('utils', () => {
  describe('isLocal', () => {
    it('should return true if on LAN', () => {
      expect(isLocal(makeReq('localhost:8081'))).to.equal(true)
      expect(isLocal(makeReq('127.0.0.1'))).to.equal(true)
      expect(isLocal(makeReq('192.168.1.6:8081'))).to.equal(true)
      expect(isLocal(makeReq('10.0.0.2'))).to.equal(true)
    })

    it('should return false if deployed on server', () => {
      expect(isLocal(makeReq('kenfehling.com'))).to.equal(false)
      expect(isLocal(makeReq('www.kenfehling.com'))).to.equal(false)
    })
  })
})