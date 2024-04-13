import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Software Development', slug: 'soft-dev' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Algorithms', slug: 'algo' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'sql',
		color: 'yellow',
		description:
			'I have a good foundation in designing normalized relational database schemas and writing optimized queries based on given requirements. I have projects where I have integrating SQL databases with web applications and android applications. I also have experience with deploying distributed database with horizontal fragmentation.',
		logo: Assets.PostgreSQL,
		name: 'SQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'nosql',
		color: 'yellow',
		description:
			'I have developed web applications and android applications that connect with a nosql database. I have a solid grasp on designing schemas based on on application requirements.',
		logo: Assets.MongoDB,
		name: 'NOSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'web-app',
		color: 'blue',
		description: 'I have strong foundations on creating a full stack web application with CRUD capabilities. My skills are more refined in backend development. I can recreate predesigned frontend pages but I have still a lot of room for progress in terms of creating my own designs.',
		logo: Assets.JavaScript,
		name: 'web application',
		category: 'soft-dev'
	}),
	defineSkill({
		slug: 'android-app',
		color: 'blue',
		description: 'I can develop full-stack android applications using Java or Kotlin. I have strong fundamentals in object-oriented paradigm, android lifecycle activies, and the model-view-cotnroller structure. I can create applications with concurrent threads and services.',	
		logo: Assets.Android,
		name: 'android application',
		category: 'soft-dev'
	}),
	defineSkill({
		slug: 'test',
		color: 'blue',
		description: 
		'I have taken the role of quality assurance tester in group projects that observe the AGILE methodology. ;'
		+'I can create unit tests and implement a test-driven development practice in a project. I have used JUnit, Mockito, and Jest in my projects.'
		+' I am used to creating test cases based on the requirements even for small individual projects to make sure the program I am making is correct.',
		logo: Assets.Jest,
		name: 'Quality Test',
		category: 'soft-dev'
	}),
	defineSkill({
		slug: 'git',
		color: 'blue',
		description: 
		'I use git for version control in my projects. I follow the best practices in creating branches, merging, and writing commit messages. I utilize the git issues feature in tracking the bugs for our sprints as a tester in a project.',
		logo: Assets.JavaScript,
		name: 'Git',
		category: 'soft-dev'
	}),

	defineSkill({
		slug: 'communication',
		color: 'green',
		description: 'I communicate with my team members and am not afraid to ask questions or clarify things. I can express my ideas with clarity . I take the initiative to ask for feedback and I am open to constructive criticism. I can also give feedback to my team members in a respectful manner.',
		name: 'Communication',
		category: 'soft',
		logo: Assets.Svelte
	}),
	defineSkill({
		slug: 'learner',
		color: 'green',
		description: 'I am an eager learner and am always curious about new technologies and methodologies. I love taking on new challenges and putting myself on the edge of my comfort zone.',
		name: 'Learner',
		category: 'soft',
		logo: Assets.Svelte
	}),

] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
