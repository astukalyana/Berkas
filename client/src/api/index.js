import axios from 'axios';

const url = "http://localhost:5000/nopel";


const fetchNopel = () => axios.get(url);
const getNopel = (id) => axios.get(`${url}/${id}`)
const createNopel = (berkas) => axios.post(url, berkas);
const updateNopel = (id, berkas) => axios.patch(`${url}/${id}`, berkas);
const deleteNopel = (id) => axios.delete(`${url}/{id}`);