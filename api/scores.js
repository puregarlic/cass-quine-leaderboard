const Airtable = require('airtable')
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  'appzEU3fEkbkJGNPa'
)

module.exports = async (req, res) => {
  try {
    let people = []
    await base('Leaderboard')
      .select({
        sort: [{ field: 'score', direction: 'desc' }]
      })
      .eachPage((records, next) => {
        records.forEach((r, i) => {
          let person = r.fields
          person.rank = i + 1
          people.push(person)
          next()
        })
      })
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate')
    res.status(200).json(people)
  } catch (e) {
    res.states(500).send(e)
  }
}
