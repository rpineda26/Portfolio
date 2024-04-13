import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Ralph Dawson';

export const lastName = 'Pineda';

export const description =
'I am an aspiring software engineer with a passion for creating solutions with practical applications. My passion in computer science is rooted in my curiosity for how the technology we use everyday works.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/rpineda26' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/ralph-pineda-881031232/'
	},
	{
		platform: Platform.Email,
		link: 'rp.pineda26@gmail.com'
	},

];

export const skills = getSkills('sql', 'nosql', 'android-app', 'web-app', 'test', 'git');
