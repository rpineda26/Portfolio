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
			'I have good foundation in designing normalized relational database schemas and writing optimized queries. I have experience with integrating SQL databases with web applications and android applications. I also have experience with deploying distributed database with horizontal fragmentation.',
		logo: Assets.JavaScript,
		name: 'SQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'nosql',
		color: 'yellow',
		description:
			'I have experience with NoSQL databases such as MongoDB, Firebase Firestore. I have experience with designing NoSQL database schemas and integrating them with web applications and android applications.',
		logo: Assets.JavaScript,
		name: 'NOSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'web-app',
		color: 'yellow',
		description: 'I have strong foundations on creating a full stack web application with CRUD capabilities. My skills are more refined in backend development. I can recreate predesigned frontend pages but I have still a lot of room for progress in terms of creating my own designs.',
		logo: Assets.JavaScript,
		name: 'web application',
		category: 'soft-dev'
	}),
	defineSkill({
		slug: 'android-app',
		color: 'yellow',
		description: 'I can develop full-stack android applications usign Java or Kotlin. I have strong fundamentals in object-oriented paradigm, android lifecycle activies, and the model-view-cotnroller structure. I can create applications with concurrent threads and services.',	
		logo: Assets.JavaScript,
		name: 'android application',
		category: 'soft-dev'
	}),
	defineSkill({
		slug: 'test',
		color: 'yellow',
		description: 'I have strong foundations on creating a full stack web application with CRUD capabilities. My skills are more refined in backend development. I can recreate predesigned frontend pages but I have still a lot of room for progress in terms of creating my own designs.',
		logo: Assets.JavaScript,
		name: 'Quality Test',
		category: 'soft-dev'
	}),


	defineSkill({
		slug: 'communication',
		color: 'green',
		description: 'I am a team player',
		name: 'Communication',
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
