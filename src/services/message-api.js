const BASE_URL = process.env.DEV_MESSAGE_URL || 'https://chatterbox-back.herokuapp.com/api/messages';

function create(message) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(message),
	}).then((res) => res.json());
}

function deleteOne(id) {
	return fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE',
	}).then((res) => res.json());
}

function update(message) {
	return fetch(`${BASE_URL}/${message._id}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(message),
	}).then((res) => res.json());
}

export default {
    create,
	deleteOne,
	update,
};