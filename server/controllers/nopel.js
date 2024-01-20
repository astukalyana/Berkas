import Nopel from '../models/nopelModel.js';

export const getAllNopel = async (req, res) => {
    try {
        const allNopel = await Nopel.findAll();

        res.json(allNopel);
    } catch (error) {
        res.json({ error: error.message });
        throw error;
    }
};

export const getNopel = async (req, res) => {
    const { nopel } = req.params;
    console.log(nopel)

    try {
        const nopelFound = await Nopel.findOne({
            where: {
                nomor_pelayanan: nopel
            }
        })

        res.json(nopelFound);
    } catch (error) {
        res.json({ error: error.message });      
    }
}

export const createNopel = async (req, res) => {
    const data = req.body;
    console.log(req.headers)
    console.log(req.body);
    try {
        const newNopel = await Nopel.create(data);

        res.send(`Berkas dengan nopel ${data['nomor_pelayanan']} successfully created.`);
    } catch (error) {
        res.json({ error: error.message });
    }
}

export const updateNopel = async (req, res) => {
    const { nopel } = req.params;
    const newData = req.body;

    console.log(newData)

    try {
        const [updatedRows, updatedRowsCount] = await Nopel.update({ ...newData, updatedAt: Date.now() }, {
          where: {
            nomor_pelayanan: nopel
          },
          returning: true, // Include the updated rows in the result
        });

        console.log(updatedRows);
        if (updatedRowsCount === 0) {
          throw new Error(`Berkas with nopel ${nopel} not found`);
        }
    
        res.send(`Berkas with nopel ${nopel} successfully updated.`);
      } catch (error) {
        console.error('Error updating Berkas by Nopel:', error);
        res.json({ error: error.message })
      }

}

export const deleteNopel = async (req, res) => {
    const nopel = req.params;

    try {
        const deletedRowCount = await Nopel.destroy({
          where: {
            nomor_pelayanan: nopel,
          },
        });
    
        if (deletedRowCount === 0) {
          throw new Error(`Berkas with nopel ${nopel} not found`);
        }
    
        console.log(`Deleted ${deletedRowCount} record(s) with nopel ${nopel}`);
      } catch (error) {
        console.error('Error deleting Pelayanan by ID:', error);
        res.json({ error: error.message });
      }
}