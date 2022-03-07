import http from '../http-common';

const get = (data) => {
  return http.post('/users', data);
};

const create = (data) => {
  return http.post('/users', data);
};

const UserService = {
  get,
  create,
};

export default UserService;
