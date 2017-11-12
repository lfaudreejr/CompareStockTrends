import * as chai from 'chai'
import * as chaiPromise from 'chai-as-promised'
import * as mongoStocks from './stocksMongo'
chai.use(chaiPromise)

const assert = chai.assert

describe('connectDB', () => {
  const mongo = mongoStocks.connectDB()
  it('should return a mongo connection as a promise', (done) => {
    assert.typeOf(mongo, 'promise')
    done()
  })
  it('should have database name of stocktrends', (done) => {
    mongo.then((data: any) => {
      assert.equal(data.s.databaseName, 'stocktrends')
      done()
    })
  })
})
