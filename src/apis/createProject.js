import axios from './axios';

const createProject = async (success, id, body) => {
  if (success) {
    // successfully upload the project to ethernet -> call success api
    try {
      await axios.put(`/proposal?proposal_id=${id}`, body);
    } catch (e) {
      alert(e);
    }
  } else {
    // failed to upload the project to ethernet -> call failed api
    try {
      await axios.delete(`/proposal?proposal_id=${id}`);
    } catch (e) {
      alert(e);
    }
  }
};

export default createProject;
