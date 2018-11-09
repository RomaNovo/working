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
			campTitle = create('div', 'campus__title'),
			titleName = create('div', 'campus__name'),
			titleIcon = create('div', 'campus__icon'),
			campBlock = create('div', 'campus__block');
			
			titleName.innerHTML = v.campus;
			titleIcon.innerHTML = `<span class='mdi-plus mdi'></span>`;
			/*campTitle.appendChild(titleName);
			campTitle.appendChild(titleIcon);*/
			campTitle.innerHTML = titleName.outerHTML + titleIcon.outerHTML;

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
				userCheck.innerHTML = `<div class="online-ident turn-offline"> 
										<div class="online-ident-holder"> 
											<div class="online-ident-cyrcle"></div> 
											<div class="online-ident-text" offline="OFFLINE" online="ONLINE" lang_init=""></div>	
										</div> 
									</div>`
				user.appendChild(userCheck);
			let userIcon = create('div', 'campus__user--icon-menu');
					userIcon.innerHTML = `<i class="fas fa-align-right"></i>`
									  /*<div class='campus__hidden-menu hidden-menu'>
									  	<div class='hidden-menu__item'>1</div>
									  	<div class='hidden-menu__item'>2</div>
									  	<div class='hidden-menu__item'>3</div>
									  </div>;*/
				user.appendChild(userIcon);
			let userMenu = create('div', 'campus__user--hid-menu');
				userMenu.innerHTML =`
									<div class='campus__user--hid-menu__item'>
										<div class='campus__user--hid-menu__item-icon'>
											<i class='mdi-rotate-3d mdi'></i>
										</div>
										<div class='campus__user--hid-menu__item-text'>Action</div>
									</div>
									<div class='campus__user--hid-menu__item'>
										<div class='campus__user--hid-menu__item-icon'>
											<i class='mdi-rotate-3d mdi'></i>
										</div>
										<div class='campus__user--hid-menu__item-text'>Another action</div>
									</div>
									<div class='campus__user--hid-menu__item'>
										<div class='campus__user--hid-menu__item-icon'>
											<i class='mdi-rotate-3d mdi'></i>
										</div>
										<div class='campus__user--hid-menu__item-text'>Something else here</div>
									</div>
									`	;
			user.appendChild(userMenu);
			
			campBlock.appendChild(user);
		})

		/*itemCamp.appendChild(campTitle);
		itemCamp.appendChild(campBlock);*/
		itemCamp.innerHTML += campTitle.outerHTML + campBlock.outerHTML;
		groupCamp.appendChild(itemCamp)	
	})

	wrp.appendChild(groupCamp);
	document.body.appendChild(wrp);

	
	let elem = document.querySelectorAll('.campus');

	elem.forEach( (v)=> {
		let title = v.querySelector('.campus__title'),
			block = v.querySelector('.campus__block'),
			icon = v.querySelector('.mdi');
		title.addEventListener('click', ()=> {
			if(icon.classList.contains('mdi-plus')) {
				icon.classList.remove('mdi-plus');
				icon.classList.add('mdi-minus');
			} else {
				icon.classList.remove('mdi-minus');
				icon.classList.add('mdi-plus');
			}
			
			block.classList.toggle('campus__block_active')

		})
	})

	let userBlock = document.querySelectorAll('.campus__user');
	let allMenu = document.querySelectorAll('.campus__user--hid-menu');

	userBlock.forEach((v)=> {
		let menu = v.querySelector('.campus__user--icon-menu')
		let hide = v.querySelector('.campus__user--hid-menu');
		menu.addEventListener('click', ()=> {
			let condition;
			condition = (hide.classList.contains('campus__user--hid-menu_active'))? true : false;
			allMenu.forEach( v => {
				v.classList.remove('campus__user--hid-menu_active');
			})	
			if(!condition) hide.classList.add('campus__user--hid-menu_active')
		})
	})


})