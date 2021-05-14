import axios from './axios';

const createProject = async (success, id, body) => {
  if (success) {
    // successfully upload the project to ethernet
    try {
      axios.put(`/proposal?proposal_id=${id}`, body);
      console.log('success');
    } catch (e) {
      alert(e);
    }
  } else {
    // failed to upload the project to ethernet
    try {
      axios.delete(`/proposal?proposal_id=${id}`);
      console.log('success');
    } catch (e) {
      alert(e);
    }
  }
};

export default createProject;
