const BASE_URL = '/api/lobbies';

function getAll() {
	return fetch(BASE_URL).then((res) => res.json());
}

function create(lobby) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(lobby),
	}).then((res) => res.json());
}

function deleteOne(id) {
	return fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE',
	}).then((res) => res.json());
}

function update(lobby) {
	return fetch(`${BASE_URL}/${lobby._id}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(lobby),
	}).then((res) => res.json());
}

export default {
    getAll,
    create,
	deleteOne,
	update,
};
