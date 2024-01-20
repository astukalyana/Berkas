// pelayanan.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js'; // Path to your sequelize configuration file

const Nopel = sequelize.define('nopel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomor_pelayanan: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  tgl_pelayanan: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  nop: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nama_pemohon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alamat_pemohon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  keterangan: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  proses: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export default Nopel;
