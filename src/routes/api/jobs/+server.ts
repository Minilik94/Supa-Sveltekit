import { supabase } from '$lib/database';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { randomBytes } from 'crypto'

export const GET: RequestHandler = async () => {
	const { data, error } = await supabase.from('Jobs').select('*');

	if (error) {
		return json('Something went wrong', {
			status: 500
		});
	}

	let jobs = { jobs: data };
	return json(jobs, {
		status: 200
	});
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const response = await request.json();

		const title = response.title;
		const companyName = response.companyName;
		const position = response.position;
		const photo = response.photo;
		const location = response.location;
		const description = response.description;
		const requirements = response.requirements;
		const jobResponsibilities = response.jobResponsibilities;
		const salary = parseInt(response.salary);
		const applicationDeadline = response.applicationDeadline;
		const experienceLevel = response.experienceLevel;
		const isRemote = Boolean(response.isRemote); // Convert string to boolean
		// Perform Supabase insertion
		const {data, error} = await supabase.from('Jobs').insert({
			id: randomBytes(10).toString('hex'),
			title: title,
			companyName: companyName,
			postition: position,
			photo: photo,
			location: location,
			description: description,
			requirements: requirements,
			jobResponsibilities: jobResponsibilities,
			salary: salary,
			applicationDeadline: applicationDeadline,
			experienceLevel: experienceLevel,
			isRemote: isRemote
		});
		if (error) {
			return json({ error }, { status: 500 });
		}

		return json({ success: true }, { status: 200 });
	} catch (error) {
		console.error('Error processing form data:', error);
		return json({ error: 'Internal Server Error' }, { status: 500 });
	}
};
