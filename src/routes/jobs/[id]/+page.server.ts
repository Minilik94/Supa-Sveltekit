import { db } from '$lib/prismaDb';
import type { PageServerLoad } from '../../create-job/$types';

export const load: PageServerLoad = async ({ params }) => {

	const jobDetail = await db.jobs.update(
		{
		where: {
			id: params.id
		},
		data: {
			viewCount: {
				increment: 1
			}
		}
	});




	return {
		jobDetail
	};
};
