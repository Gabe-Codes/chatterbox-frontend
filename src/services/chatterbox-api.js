const BASE_URL = '/api/chatterbox';

export function getAllUsers() {
	return fetch(`${BASE_URL}/users`).then((res) => res.json());
}