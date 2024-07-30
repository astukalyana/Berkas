import axios from 'axios';

const url = "http://localhost:5000/nopel";


export const fetchNopel = () => axios.get(url);
export const getNopel = (id) => axios.get(`${url}/${id}`)
export const createNopel = (berkas) => axios.post(url, berkas);
export const updateNopel = (id, berkas) => axios.patch(`${url}/${id}`, berkas);
export const deleteNopel = (id) => axios.delete(`${url}/{id}`);

