<script lang="ts">
	import { page } from '$app/stores';
	import type { JobPosting } from '$lib/types';
	import '../app.css';
	import { fade, fly, scale, slide } from 'svelte/transition';
	const jobs: JobPosting[] = $page.data.jobs;
</script>

{#if jobs === null || jobs === undefined || $page.data === null}
	<div class="loading loading-ball"></div>
{:else}
	{#each jobs as job}
		<div class="max-w-4xl mx-auto">
			<a
				href="/jobs/{job.id}"
				class="transition-all my-4 group duration-200 ease-in-out hover:border-l-8 hover:ring-2 ring-brand-primary hover:border-brand-primary cursor-pointer relative bg-white block bg-white border rounded-xl p-4 transition-all group duration-200 ease-in-out hover:border-l-8 hover:ring-2 ring-brand-primary hover:border-brand-primary cursor-pointer relative bg-white"
				><!---->
				<div class="flex flex-col justify-center md:flex-row md:justify-start md:items-center">
					<div class="flex items-center">
						<div
							class="overflow-hidden flex items-center justify-center md:w-12 md:h-12 rounded-xl shrink-0">
							<img src={job.photo} alt="Logo dvxventures" class="object-contain h-10 w-10"  loading="lazy" />
						</div>
						<div class="ml-3">
							<div class="font-display text-lg leading-tight font-bold">
								{job.title}
							</div>
							<div>
								<div class="flex items-center text-sm font-medium text-muted">
									at {job.companyName}
								</div>
							</div>
						</div>
					</div>
					<div
						class="ml-auto font-display font-bold transition-opacity duration-400 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 text-sm">
						View details <i class="fa fa-arrow-right fa-fw ml-1" aria-hidden="true"></i>
					</div>
				</div>
				{#if job.isRemote}
					<div class="text-xs mt-3 flex gap-x-4 gap-y-1 flex-wrap items-center md:gap-2">
						<span class="inline-block bg-green-100 px-1.5 py-0.5 rounded-lg"
							><i class="fa-regular fa-check-circle text-green-500" aria-hidden="true"></i> Remote
						</span>
					</div>
				{/if}
			</a>
		</div>
	{/each}
{/if}
