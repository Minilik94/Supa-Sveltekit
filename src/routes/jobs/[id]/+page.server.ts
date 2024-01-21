import { db } from '$lib/prismaDb';
import type { PageServerLoad } from '../../create-job/$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log(params, 'params');

	const jobDetail = await db.jobs.findUnique({
		where: {
			id: params.id
		}
	});


	return {
		jobDetail
	};
};
