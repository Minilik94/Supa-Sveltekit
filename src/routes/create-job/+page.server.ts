// export const load: PageLoad = async () => {

import { json, type Actions, redirect } from '@sveltejs/kit';
import axios from 'axios';

// };

export const actions: Actions = {
	createJob: async ({ request }) => {
		const data = await request.formData();

		const title = data.get('title');
		const companyName = data.get('companyName');
		const position = data.get('position');
		const photo = data.get('photo');
		const location = data.get('location');
		const description = data.get('description');
		const requirements = data.get('requirements');
		const jobResponsibilities = data.get('jobResponsibilities');
		const salary = data.get('salary');
		const applicationDeadline = data.get('applicationDeadline');
		const experienceLevel = data.get('experienceLevel');
		const isRemote = data.get('isRemote');

		const newdata = {
			title,
			companyName,
			position,
			photo,
			location,
			description,
			requirements,
			jobResponsibilities,
			salary,
			applicationDeadline,
			experienceLevel,
			isRemote
		};
		await axios.post('http://localhost:5173/api/jobs', newdata);
		throw redirect(303, '/');
	}
};
