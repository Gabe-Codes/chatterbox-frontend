import tokenService from './tokenService';

const BASE_URL = '/api/users';

async function signup(user) {
		const response = await fetch(`${BASE_URL}/signup`, {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify(user),
		});
		const data = await response.json();
		if (response.ok) {
			tokenService.setToken(data.token.token);
		} else {
			const reason = Object.keys(data.keyValue)[0];
			throw new Error(`${reason} already taken!`);
		}
}

function getAll() {
	return fetch(BASE_URL).then((res) => res.json());
}

function getUser() {
	return tokenService.getUserFromToken();
}

function logout() {
	tokenService.removeToken();
}

function login(creds) {
	return fetch(`${BASE_URL}/login`, {
		method: 'POST',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify(creds),
	})
		.then((res) => {
			// Valid login if we have a status of 2xx (res.ok)
			if (res.ok) return res.json();
			throw new Error('Bad Credentials!');
		})
		.then(({ token }) => tokenService.setToken(token));
}

function deleteOne(id) {
	return fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE',
	}).then((res) => res.json());
}

function update(user) {
	return fetch(`${BASE_URL}/${user._id}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(user),
	}).then((res) => res.json());
}

export default {
	signup,
	getAll,
	getUser,
	logout,
	login,
	deleteOne,
	update,
};
