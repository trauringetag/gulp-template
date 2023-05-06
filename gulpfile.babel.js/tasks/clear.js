import del from 'del';
import path from '../config/path.js';

export default () => del(path.root);