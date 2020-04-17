// const BASE_URL = '/api/channels';
const BASE_URL = 'https://chatterbox-back.herokuapp.com/api/channels';

function getAll() {
	return fetch(BASE_URL).then((res) => res.json());
}

function create(channel) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(channel),
	}).then(async (res) => await res.json());
}

function deleteOne(id) {
	return fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE',
	}).then((res) => res.json());
}

function update(channel) {
	return fetch(`${BASE_URL}/${channel._id}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(channel),
	}).then((res) => res.json());
}

export default {
    getAll,
    create,
	deleteOne,
	update,
};