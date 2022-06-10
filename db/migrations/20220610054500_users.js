exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.text('auth0Id', 128).notNullable()
    table.text('email', 128).notNullable()
    table.text('cohort', 128)
    table.text('image')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('users')
}
