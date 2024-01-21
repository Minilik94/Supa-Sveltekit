<script lang="ts">
	import { goto } from '$app/navigation';
	import type { JobPosting } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;
	let job: JobPosting = data.jobDetail;
	console.log(job);

	const id = job.id
</script>

{#if !job || job === undefined || job === null}
	<div class="loading loading-ball text-green-600 backdrop-hue-rotate-180"></div>
{/if}

<div class="max-w-4xl mx-auto">
	{#if job}
		<div class="card w-96 bg-white shadow-xl text-blue-400">
			<div class="card-body bg-gray-100 p-6 rounded-lg">
				<h2 class="card-title text-xl font-semibold">{job.title}</h2>
				<p class="text-gray-600 mt-2">{job.description}</p>

				<div class="mt-4">
					<div class="flex items-center justify-between">
						<p class="text-gray-500">{job.companyName}</p>
						<p class="text-gray-500">{job.location}</p>
					</div>

					<div class="flex items-center justify-between mt-2">
						<p class="text-gray-500">{job.postition}</p>
						<p class="text-gray-500">{job.experienceLevel}</p>
					</div>

					<div class="flex items-center justify-between mt-2">
						<p class="text-gray-500">Salary: ${job.salary}</p>
						<p class="text-gray-500">Remote: {job.isRemote ? 'Yes' : 'No'}</p>
					</div>
				</div>

				<div class="mt-4">
					<h3 class="text-lg font-semibold">Requirements</h3>
					{#if job.requirements}
							
						<p class="text-gray-600 mt-2">{job.requirements}</p>
					{/if}
				</div>

				<div class="mt-4">
					<h3 class="text-lg font-semibold">Job Responsibilities</h3>
					{#if job.jobResponsibilities}
					
						<p class="text-gray-600 mt-2">{job.jobResponsibilities}</p>
					{/if}
				</div>

				<div class="card-actions justify-end mt-4">
					<button class="btn btn-primary" type="submit" on:click={() => goto(`/${job.id}`)}>Apply Now</button>
				</div>
			</div>
		</div>
	{/if}
</div>
