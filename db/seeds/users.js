exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      auth0Id: 'auth0Id',
      email: 'example1@example.com',
      cohort: 'kahikatea-2022',
    },
    {
      id: 2,
      auth0Id: 'auth0Id',
      email: 'example2@example.com',
      cohort: 'kahikatea-2022',
    },
    {
      id: 3,
      auth0Id: 'auth0Id',
      email: 'example3@example.com',
      cohort: 'kahikatea-2022',
    },
  ])
}
