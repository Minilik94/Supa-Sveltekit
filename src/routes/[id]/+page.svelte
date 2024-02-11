<script lang="ts">
	import type { JobPosting } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;
    let job: JobPosting = data.jobDetail;
</script>




<div class="max-w-4xl mx-auto">
	<form action="?/updateJob" method="POST" class="my-4 bg-white border rounded-xl p-4">
		<!-- Job Title -->
		<div class="mb-4">
			<label for="title" class="block text-sm font-medium text-gray-700">Job Title</label>
			<input
				type="text"
				id="title"
                value="{job.title}"
				name="title"
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>

		<!-- Company Name -->
		<div class="mb-4">
			<label for="companyName" class="block text-sm font-medium text-gray-700">Company Name</label>
			<input
				type="text"
				id="companyName"
				name="companyName"
                value="{job.companyName}"
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>

		<!-- Position -->
		<div class="mb-4">
			<label for="position" class="block text-sm font-medium text-gray-700">Position</label>
			<input
				type="text"
				id="position"
                value="{job.postition}"
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
                value="{job.photo}"
				name="photo"
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>

		<!-- Location -->
		<div class="mb-4">
			<label for="location" class="block text-sm font-medium text-gray-700">Location</label>
			<input
				type="text"
                value="{job.location}"
				id="location"
				name="location"
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>


		<!-- Job Responsibilities -->
		<div class="mb-4">
			<label for="requirements" class="block text-sm font-medium text-gray-700"
				>Job Responsibilities</label>
			<input
				type="text"
				name="requirements"
                value="{job.requirements}"
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>
		<div class="mb-4">
			<label for="jobResponsibilities" class="block text-sm font-medium text-gray-700"
				>Job Responsibilities</label>
			<input
				type="text"
				name="jobResponsibilities"
                value="{job.jobResponsibilities}"
				class="mt-1 p-2 w-full border rounded-md"
				required />
		</div>

		<!-- Salary -->
		<div class="mb-4">
			<label for="salary" class="block text-sm font-medium text-gray-700">Salary</label>
			<input
				type="number"
				id="salary"
                value="{job.salary}"
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
                value="{job.applicationDeadline}"
				id="applicationDeadline"
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
                value="{job.experienceLevel}"
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
                value="{job.isRemote}"
				class="mt-1 p-2 w-full border rounded-md"
				required>
                    
				<option value="{job.isRemote}" selected>Yes</option>
				<option value="false">No</option>
			</select>
		</div>

		<!-- Description -->
		<div class="mb-4">
			<label for="description" class="block text-sm font-medium text-gray-700">Description</label>
			<textarea
				id="description"
                value="{job.description}"
				name="description"
				class="mt-1 p-2 w-full border rounded-md"
				required></textarea>
		</div>

		<!-- Submit Button -->
		<div class="mt-4">
			<button type="submit" class="btn btn-primary">Submit Job</button>
		</div>
	</form>
</div>
