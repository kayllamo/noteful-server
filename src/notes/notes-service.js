const NotesService = {
    getAllNotes(knex) {
        return knex
            .select('*')
            .from('notes')
    },

    insertNote(knex, newNotes) {
        return knex
            .insert(newNotes)
            .into('notes')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },

    getById(knex, id) {
        return knex
            .from('notes')
            .select('*')
            .where({ id })
            .first()
    },

    deleteNote(knex, id) {
        return knex
            .from('notes')
            .where({ id })
            .delete()
    },

    updateNote(knex, id, newNotesFields) {
        return knex
            .from('notes')
            .where({ id })
            .update(newNotesFields)
    },
}

module.exports = NotesService