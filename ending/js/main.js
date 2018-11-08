document.addEventListener('DOMContentLoaded', ()=> {

	let create = (tag, ...classList) => {
		let obj = document.createElement(tag);
			if(classList) obj.classList.add(...classList);
			return obj;
	};

	const arrCampus = [
		{"campus": "Nivki", "teacher": ['Pauline Westwood', 'Anna Lukashevych', 'Olga Babiichuk'] }, 
		{"campus": "Pechersk", "teacher": ['Boris Yesipenko', 'Chloé Grunenwald', 'Daryna Nedashkivska',
		'Aleksei Molchaniyk', 'Aleksandr Markitan', 'Adam Renshaw']}, 
		{"campus": "Nivki Secondary",  "teacher": ['Aleksandr Maksimov', 'Alyona Cherednychenko', 'Chardonnay Pattison']}
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
			let userName = create('div', 'campus__user--name')
				userName.innerHTML = t;
				user.appendChild(userName);
			
			let online = create('div', 'campus__user--online');
				online.innerHTML = `<div class="online-ident turn-offline"> 
										<div class="online-ident-holder"> 
											<div class="online-ident-cyrcle"></div> 
											<div class="online-ident-text" offline="OFFLINE" online="ONLINE" lang_init=""></div>	
										</div> 
									</div>`
				user.appendChild(online);
			let userCheck = create('div', '.campus__user--checkbox');
				userCheck.innerHTML = `<div class="vacutable-cell" data-index="0" data-field="row_sel" data-value="">
											<div class="g-chkbx">
												<input type="checkbox" id="" name="check">
												<label for=""></label>
											</div>
										</div>`
				user.appendChild(userCheck);
			let menu = create('div', 'campus__user--menu');
					menu.innerHTML = `<i class="fas fa-align-right"></i>`
									  /*<div class='campus__hidden-menu hidden-menu'>
									  	<div class='hidden-menu__item'>1</div>
									  	<div class='hidden-menu__item'>2</div>
									  	<div class='hidden-menu__item'>3</div>
									  </div>;*/
				user.appendChild(menu);
			
			campBlock.appendChild(user);
		})

		itemCamp.appendChild(campTitle);
		itemCamp.appendChild(campBlock);
		groupCamp.appendChild(itemCamp)	
	})

	wrp.appendChild(groupCamp);
	document.body.appendChild(wrp);

	
	let elem = document.querySelectorAll('.campus');

	elem.forEach( (v)=> {
		let title = v.querySelector('.campus__title'),
			block = v.querySelector('.campus__block');
		title.addEventListener('click', ()=> {

			block.classList.toggle('campus__block_active')
		})
	})

	let hiddenMenu = document.querySelector('.hidden-menu');
	 	hiddenMenu.style.display = 'block';
})