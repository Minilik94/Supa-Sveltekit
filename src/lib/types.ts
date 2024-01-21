export interface JobPosting {
	id: string;
	title: string;
	companyName: string;
	postition: string;
	photo: string;
	location: string;
	requirements: {
		items: string[];
		content: string;
	};
	jobResponsibilities: {
		items: string[];
		content: string;
	};
	salary: number;
	applicationDeadline: string;
	experienceLevel: string;
	isRemote: boolean;
	description: string;
}
