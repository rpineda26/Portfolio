import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Senior High School - STEM Strand',
		description: '',
		location: 'Manila, Philippines',
		logo: Assets.Unknown,
		name: '',
		organization: 'University of Santo Tomas',
		period: { from: new Date(2023, 0, 1), to:new Date(2025, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: []
	},
	{
		degree: 'Bachelor degree and Masters degree of Computer Science',
		description: '',
		location: 'Manila, Philippines',
		logo: Assets.Unknown,
		name: '',
		organization: 'De La Salle University Manila',
		period: { from: new Date(2021, 12, 15), to:new Date(2021, 12, 15)},
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Data Structures', 'Algorithms', 'Machine Learning', 'Data Analysis', 'Software Development', 'Computer Architecture']
	}
	
];

export const title = 'Education';
