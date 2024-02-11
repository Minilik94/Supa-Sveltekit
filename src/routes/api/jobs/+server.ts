import { supabase } from '$lib/database';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { randomBytes } from 'crypto';
import slugify from 'slugify';
import { db } from '$lib/prismaDb';

export const GET: RequestHandler = async () => {
	let { data, error } = await supabase.from('Jobs').select('*');

	if (error) {
		return json('Something went wrong', {
			status: 500
		});
	}

	let jobs = data;
	return json(jobs, {
		status: 200
	});
};

//  async function trackJobViews(event) {
// 	const jobId = event.url.searchParams.get("id"); // Get job ID from URL
// 	if (!jobId) return event; // Skip if no job ID is present

// 	await event.context.db.jobs.update({
// 	  where: { id: jobId },
// 	  data: { viewCount: { increment: 1 } },
// 	});

// 	return event;
//   }

function createSlug(text: string) {
	// console.log(slugify(text, { lower: true }));
	return slugify(text, { lower: true });
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const response = await request.json();

		console.log(response, 'post res');
		console.log(request, 'post resres');

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
		const { data, error } = await supabase.from('Jobs').insert({
			id: randomBytes(10).toString('hex'),
			title: title,
			companyName: companyName,
			postition: position,
			photo: photo,
			location: location,
			slug: createSlug(title),
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

export const PATCH: RequestHandler = async ({ request }) => {
	const response = await request.json();

	console.log(response, 'patch res');
	console.log(request, 'patch resres');

	// const id = response.id;);
	const id = response.id;
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
	const isRemote = Boolean(response.isRemote);

	const data = await supabase
		.from('Jobs')
		.update({
			title,
			companyName,
			position,
			location,
			description,
			requirements,
			jobResponsibilities,
			salary,
			applicationDeadline,
			experienceLevel,
			isRemote
		})
		.match({ id });

	console.log(data, 'from patch');

	if (data.error) {
		return json({ error: 'Something went wron' }, { status: 500 });
	}

	return json({ data }, { status: 200 });
};
