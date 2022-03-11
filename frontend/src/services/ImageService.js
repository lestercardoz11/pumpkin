import http from '../http-common';

const create = (data) => {
  return http.post('/images', data);
};

const get = () => {
  return http.get('/images');
};

const upload = (data) => {
  return http.post('/images/upload', data);
};

const findByContributer = (name) => {
  return http.get('/images/contributer', {
    params: {
      name,
    },
  });
};

const download = (data) => {
  return http.post('/images/download', data);
};

const filter = (value) => {
  return http.get('/images/category', {
    params: {
      value,
    },
  });
};

const ImageService = {
  create,
  get,
  upload,
  findByContributer,
  download,
  filter,
};

export default ImageService;
