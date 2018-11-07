document.addEventListener('DOMContentLoaded', ()=> {

	let create = (tag, ...classList) => {
		let obj = document.createElement(tag);
			if(classList) obj.classList.add(...classList);
			return obj;
	};

	const arrCampus = [
		{"campus": "Nivki", "teacher": ['Misha Ryaboy', 'Senya Bystriy', 'Alex Teishera'] }, 
		{"campus": "Pechersk", "teacher": ['Alex Bolt', 'Vekentiy Tolstoy', 'Leha Medlenniy']}, 
		{"campus": "Nivki 2",  "teacher": ['Alex Krytoi', 'Grigory Zorkiy', 'Tolya Shpana']}
	];

	const teacher = [
		{"name": "Alex Volf"},
		{"name": "Ben Carol"},
		{"name": "Andrew Borsh"}
	]

	let wrp = create('div', 'wrp'),	
		groupCamp = create('div', 'group-campus');
		
	arrCampus.forEach( (v) => {
		let itemCamp = create('div','group-campus__item','campus'),
			campTitle = create('div', 'campus__title');
			campBlock = create('div', 'campus__block');
			campTitle.innerHTML = v.campus;

		v.teacher.forEach( t => {
			let user = create('div', 'campus__user');
				user.innerHTML = t;
			campBlock.appendChild(user);
		})

		itemCamp.appendChild(campTitle);
		itemCamp.appendChild(campBlock);
		groupCamp.appendChild(itemCamp)	
	})

	wrp.appendChild(groupCamp);
	document.body.appendChild(wrp);
})