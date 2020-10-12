
exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
    table.increments('post_id').notNullable();
    table.string('path').notNullable();
    table.string('title', 60).notNullable();
    table.string('content').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.string('author').notNullable();

    table.foreign('author').references('username').inTable('users');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
