const FoldersService = {
    getAllFolders(knex) {
        return knex
            .select('*')
            .from('folders')
    },

    insertFolder(knex, newFolders) {
        return knex
            .insert(newFolders)
            .into('folders')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },

    getById(knex, id) {
        return knex
            .from('folders')
            .select('*')
            .where({ id })
            .first()
    },

    deleteFolder(knex, id) {
        return knex
            .from('folders')
            .where({ id })
            .delete()
    },

    updateFolder(knex, id, newFoldersFields) {
        return knex
            .from('folders')
            .where({ id })
            .update(newFoldersFields)
    },
}

module.exports = FoldersService;