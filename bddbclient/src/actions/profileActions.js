import axios from 'axios';

export function getAllPublishedProjects(queryString){
	const apiCall = '/api/profile/published?'+queryString
	return dispatch => {
		return axios.get(apiCall);
	}
}

export function getAllDrafts(queryString){
	const apiCall = '/api/profile/drafts?'+queryString;
	return dispatch => {
		return axios.get(apiCall);
	}
}

export function deleteProject(queryString) {
	console.log('here in actiopns');
	const apiCall = '/api/projects?'+queryString;
	return dispatch => {
		return axios.delete(apiCall);
	}
}

/*
export function getProjectsFiltered(queryString) {
	const apiCall = '/api/projects/filter?'+queryString;
	return dispatch => {
		return axios.get(apiCall);
	}
}*/
