const Record = require('../model/Record');

const getAllRecords = async(req, res, next) => {
    let records;
    try {
        records = await Record.find();
    } catch(err) {
        console.log(err);
    }

    if (!records) {
        return res.status(404).json({message: 'No products found'})
    }
    return res.status(200).json({records})
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let record;
    try {
        record = await Record.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!record) {
        return res.status(404).json({message:'No book found'})
    }
    return res.status(200).json({ record })
}

const addRecord = async (req, res, next) => {
    const {name, artist, description, price, available, image} = req.body;
    let record;
    try {
        record = new Record({
            name,
            artist,
            description,
            price,
            available,
            image
        });
        await record.save();
    } catch (err) {
        console.log(err);
    }
    if (!record) {
        return res.status(500).json({message:'Unable to Add'})
    }
    return res.status(201).json({ record })
}

const updateRecord = async (req, res, next) => {
    const id = req.params.id;
    const {name, artist, description, price, available, image} = req.body;
    let record;
    try {
        record = await Record.findByIdAndUpdate(id, {
            name,
            artist,
            description,
            price,
            available,
            image
        });
        record = await record.save()
    } catch (err) {
        console.log(err)
    }
    if (!record) {
        return res.status(404).json({message:'Unable to update by this ID'})
    }
    return res.status(200).json({ record })
}

const deleteRecord = async (req, res, next) => {
    const id = req.params.id;
    let record;
    try {
        record = await Record.findByIdAndRemove(id)
    } catch (err) {
        console.log(err);
    }
    if (!record) {
        return res.status(404).json({message:'Unable to delete by this ID'})
    }
    return res.status(200).json({ message: 'Product successfully deleted' })
}

exports.getAllRecords = getAllRecords;
exports.addRecord = addRecord;
exports.getById = getById;
exports.updateRecord = updateRecord;
exports.deleteRecord = deleteRecord;