const request = require('supertest')
const { expect } = require('chai')
const app = require('../index')

// Unit Test 1: generateId erzeugt fortlaufende IDs
describe('generateId', () => {
  it('should return next id', () => {
    const notes = [{ id: 1 }, { id: 2 }]
    const generateId = () => {
      const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0
      return maxId + 1
    }
    expect(generateId()).to.equal(3)
  })
})

// Unit Test 2: POST /api/notes ohne content gibt Fehler 400
describe('POST /api/notes', () => {
  it('should return 400 if content is missing', async () => {
    await request(app)
      .post('/api/notes')
      .send({ important: true })
      .expect(400)
  })
})

// Unit Test 3: GET / gibt HTML zurück
describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/')
    expect(res.text).to.include('Hello World')
  })
})

// Integration Test 1: GET /api/notes gibt alle Notizen zurück
describe('GET /api/notes', () => {
  it('should return all notes', async () => {
    const res = await request(app).get('/api/notes')
    expect(res.status).to.equal(200)
    expect(res.body).to.be.an('array')
    expect(res.body.length).to.be.at.least(1)
  })
})

// Integration Test 2: POST /api/notes fügt eine neue Notiz hinzu
describe('POST /api/notes', () => {
  it('should add a new note', async () => {
    const newNote = { content: 'Testnote', important: false }
    const res = await request(app)
      .post('/api/notes')
      .send(newNote)
      .expect(200)
    expect(res.body.content).to.equal('Testnote')
    expect(res.body.important).to.equal(false)
  })
})