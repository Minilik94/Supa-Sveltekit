<script lang="ts">
	import axios from 'axios';
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);

	let title: String;
	let companyName: String;
	let position: String;
	let photo: String;
	let location: String;
	let description: String;
	let requirements: String;
	let jobResponsibilities: String;
	let salary: String;
	let applicationDeadline: String;
	let experienceLevel: String;
	let isRemote: String;

	let showSuccess = false;

	const createJob = async () => {
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
		const response = await axios.post('/api/jobs', newdata);

		if (response.status === 200) {
			showSuccess = true;

			title = '';
			companyName = '';
			position = '';
			photo = '';
			location = '';
			description = '';
			requirements = '';
			jobResponsibilities = '';
			salary = '';
			applicationDeadline = '';
			experienceLevel = '';
			isRemote = '';
		}
	};

	
</script>

{#if showSuccess}
	<div role="alert" class="alert alert-success">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="stroke-current shrink-0 h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
		<span>Job Successfuly created</span>
	</div>
{/if}
<div class="max-w-4xl mx-auto">
	<form action="?/createJob" method="POST"  class="my-4 bg-white border rounded-xl p-4">
		<!-- Job Title -->
		<div class="mb-4">
			<label for="title" class="block text-sm font-medium text-gray-700">Job Title</label>
			<input
				type="text"
				id="title"
				name="title"
				bind:value={title}
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>

		<!-- Company Name -->
		<div class="mb-4">
			<label for="companyName" class="block text-sm font-medium text-gray-700">Company Name</label>
			<input
				type="text"
				bind:value={companyName}
				id="companyName"
				name="companyName"
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>

		<!-- Position -->
		<div class="mb-4">
			<label for="position" class="block text-sm font-medium text-gray-700">Position</label>
			<input
				type="text"
				bind:value={position}
				id="position"
				name="position"
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>

		<!-- Photo -->
		<div class="mb-4">
			<label for="photo" class="block text-sm font-medium text-gray-700">Photo URL</label>
			<input
				type="text"
				id="photo"
				name="photo"
				bind:value={photo}
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>

		<!-- Location -->
		<div class="mb-4">
			<label for="location" class="block text-sm font-medium text-gray-700">Location</label>
			<input
				type="text"
				id="location"
				name="location"
				bind:value={location}
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>

		<div class="mb-4">
			<label for="requirements" class="block text-sm font-medium text-gray-700">Requirements</label>
			<input
				type="text"
				name="requirements"
				class="mt-1 p-2 w-full border rounded-md"
				required
				bind:value={requirements} />
		</div>

		<!-- Job Responsibilities -->
		<div class="mb-4">
			<label for="jobResponsibilities" class="block text-sm font-medium text-gray-700"
				>Job Responsibilities</label>
			<input
				type="text"
				name="jobResponsibilities"
				bind:value={jobResponsibilities}
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>

		<!-- Salary -->
		<div class="mb-4">
			<label for="salary" class="block text-sm font-medium text-gray-700">Salary</label>
			<input
				type="number"
				bind:value={salary}
				id="salary"
				name="salary"
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>

		<!-- Application Deadline -->
		<div class="mb-4">
			<label for="applicationDeadline" class="block text-sm font-medium text-gray-700"
				>Application Deadline</label>
			<input
				type="text"
				id="applicationDeadline"
				bind:value={applicationDeadline}
				name="applicationDeadline"
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>

		<!-- Experience Level -->
		<div class="mb-4">
			<label for="experienceLevel" class="block text-sm font-medium text-gray-700"
				>Experience Level</label>
			<input
				type="text"
				id="experienceLevel"
				bind:value={experienceLevel}
				name="experienceLevel"
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>

		<!-- Is Remote -->
		<div class="mb-4">
			<label for="isRemote" class="block text-sm font-medium text-gray-700">Is Remote</label>
			<select
				id="isRemote"
				name="isRemote"
				bind:value={isRemote}
				class="mt-1 p-2 w-full border rounded-md"
				required>
				<option value="true">Yes</option>
				<option value="false">No</option>
			</select>
		</div>

		<!-- Description -->
		<div class="mb-4">
			<label for="description" class="block text-sm font-medium text-gray-700">Description</label>
			<textarea
				id="description"
				name="description"
				bind:value={description}
				class="mt-1 p-2 w-full border rounded-md"
				required></textarea>
		</div>

		<!-- Submit Button -->
		<div class="mt-4">
			<button type="submit" class="btn btn-primary">Submit Job</button>
		</div>
	</form>
</div>
