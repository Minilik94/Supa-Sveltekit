import { db } from '$lib/prismaDb';
import axios from 'axios';
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const jobDetail = await db.jobs.findUnique({
		where: {
			id: params.id
		}
	});

	return {
		jobDetail
	};
};

export const actions: Actions = {
	updateJob: async ({ request, params }) => {
		const response = await request.formData();

		const title = response.get('title');
		const companyName = response.get('companyName');
		const position = response.get('position');
		const photo = response.get('photo');
		const location = response.get('location');
		const description = response.get('description');
		const requirements = response.get('requirements');
		const jobResponsibilities = response.get('jobResponsibilities');
		const salary = response.get('salary');
		const applicationDeadline = response.get('applicationDeadline');
		const experienceLevel = response.get('experienceLevel');
		const isRemote = Boolean(response.get('isRemote'));

		const newdata = {
			id: params.id,
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

		const dataUpdated = await db.jobs.updateMany({
			where: {
				id: params.id
			},
			data: {
				title,
				companyName,
				postition: position,
				photo,
				location,
				description,
				requirements,
				jobResponsibilities,
				salary: parseInt(salary),
				applicationDeadline: new Date(applicationDeadline),
				experienceLevel,
				isRemote
			}
		});
		throw redirect(303, '/');
	}
};
