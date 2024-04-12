import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [

	{
		slug: 'software-freelance-junior',
		company: 'Student Lasallian Animators',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Leader,
		type: 'Software Development',
		location: 'DLSU',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Team Leader',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Team Leader for a student organization that volunteers in cofacilitating for student recollections.'
	}
];

export const title = 'Experience';
