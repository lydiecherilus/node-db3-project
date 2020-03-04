const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove,
}

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes")
        .where({ id })
        .first()
}

function findSteps(id) {
    return db("steps")
        .join("schemes", "schemes.id", "=", "steps.scheme_id")
        .select("schemes.scheme_name", "steps.step_number", "steps.instructions")
        .where({ scheme_id: id })
}

function add(schemes) {
    return db("schemes")
        .insert(schemes)
        .then(([id]) => {
            return findById(id)
        })
}

function addStep(step, scheme_id) {
    return db("steps")
        .insert({ ...step, scheme_id })
        .then(Id => {
            return db("steps")
                .where({ id: Id[0] })
                .first()
                .then(addedStep => addedStep)
        })
}

function update(updating, id) {
    return db("schemes")
        .update(updating)
        .where({ id })
}

function remove(id) {
    return db("schemes")
        .where({ id })
        .delete()
}