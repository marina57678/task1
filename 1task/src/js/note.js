let id=3;
window.addEventListener('DOMContentLoaded' , () => { 


	let table = document.querySelector('.table');
	for(id;id<7;id++){
		let content0 = document.createElement('tr');
	content0.innerHTML = `
		<tr>
			<td id="line-id-${id}">
				${id}
			</td>
			<td class="table__text table__date">
				text-row-${id}
			</td>
			<td class="table__text  table__comment" id="text-row-${id}">
				text-row-${id}
			</td>
			<td class="table__text  table__type" id="type-row-${id}">
				text-row-${id}
			</td>
			<td class="table__text  table__time">
				text-row-${id}
			</td>
			<td class="delete">
				<input type="button" value="Удалить"  id="delete-row-${id}">
				<input type="button" value="Редакт"  id="re-row-${id}">
				<input type="button" value="Архив"  id="arh-row-${id}">
			</td> 
		</tr>
	`;
	document.querySelector('.table').appendChild(content0);
	content0.id= ('table_line-'+id);

	button();
	
	}

	

	document.getElementById('form-note').addEventListener('submit', (event) => {
		event.preventDefault();

		const form = document.getElementById('form-note');
		console.dir(form.elements.type.value);
		const date =  new Date();
		let error = formValidate(form);
		let data = document.querySelector('.form__content').value;		

		if(error === 0 ){
			let table = document.querySelector('.table');
			// console.log(table.rows.length);
			let content = document.createElement('tr');
			id++;
				// id=((table.rows.length)-1);
				// console.log(content.id);
			content.innerHTML = `
				<tr>
					<td class="table__text" id="line-id-${id}">
						${id}
					</td>
					<td class="table__text table__date">
						${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}
					</td>
					<td class="table__text  table__comment" id="text-row-${id}">
						${form.elements.comment.value} 
					</td>
					<td class="table__text  table__type" id="type-row-${id}">
						${form.elements.type.value}
					</td>
					<td class="table__text  table__time ">
						${form.elements.type.value}
					</td>
					<td class="delete">
						<input type="button" value="Редакт"  id="re-row-${id}" class="btn btn-re">
						<input type="button" value="Архив"  id="arh-row-${id}" class="btn btn-arh">
						<input type="button" value="Удалить"  id="delete-row-${id}" class="btn btn-del">
					</td> 
				</tr>
			`;
			document.querySelector('.table').appendChild(content);

			content.className = form.elements.type.value + " line";
			
			content.id= ('table_line-'+id);
				// console.dir(content.id);
			console.log(id);
			console.log('STEP1');
		// сюдаа
		}

		
		else alert("заполни!");
	
		button();
		

	});

	function button (){
		let delOneRow = document.getElementById("delete-row-"+id);
		let reOneRow = document.getElementById("re-row-"+id);
		let arhOneRow = document.getElementById("arh-row-"+id);

		if(delOneRow){delRow(id);}
		// delRow(id);
		if(reOneRow){reRow(id);}
		if(arhOneRow){arhRow(id);}
	}


	function delRow(id){
		console.log(id);
		let delRow = document.getElementById('delete-row-'+id);
		console.log(delRow);
		let row = document.getElementById('table_line-'+id);
		console.log(row);
		delRow.addEventListener('click', (e) => {
			e.preventDefault();	
			row.remove();
		})
	}

	function arhRow(id){
		console.log(id);
		console.log('STEP2');
		let arhRow = document.getElementById('arh-row-'+id);
		console.log(arhRow);
		let row = document.getElementById('table_line-'+id);
		console.log(row);

		arhRow.addEventListener('click', (e) => {
			e.preventDefault();
			console.log('STEP3');
			let copyRow = row.cloneNode(true);

			// console.dir(copyRow.lastElementChild.firstElementChild.nextElementSibling);
			let btnArch = copyRow.lastElementChild.firstElementChild.nextElementSibling;
			btnArch.defaultValue = 'Разархивировать';
			btnArch.className ="btn" +" "+ "btn-unarch";
			// btnArch.className = btnArch.className + " " + "btn-unarch";
			btnArch.id = 'unarh-row-'+id;
			// copyRow.className = currentСlass + " " + "archived";
			copyRow.classList.toggle('archived')
			console.log(copyRow);
			document.querySelector('.table-arh-container').appendChild(copyRow);

			

			row.remove();

			let unArhRow = document.getElementById("unarh-row-"+id);
			if (unArhRow) unArhOneRow(id);
			let delOneRow = document.getElementById("delete-row-"+id);
			let reOneRow = document.getElementById("re-row-"+id);

	
			if(delOneRow){delRow(id);}
			// delRow(id);
			if(reOneRow){reRow(id);}
	
		})
	}

	// function archived(copyRow){
	// 	document.querySelector('.table-arh-container').appendChild(copyRow);
	// 	let unArhRow = document.getElementById("unarh-row-"+id);
	// 	if (unArhRow) unArhOneRow(id);
	// }

	function unArhOneRow(id){
		console.log('working');
		console.log('STEP4');

		let unarhRow = document.getElementById('unarh-row-'+id);
		let row = document.getElementById('table_line-'+id);

		unarhRow.addEventListener('click', (e) => {
			e.preventDefault();

			let copyRow = row.cloneNode(true);
			let btnArch = copyRow.lastElementChild.firstElementChild.nextElementSibling;

			btnArch.defaultValue = 'Архив';
			btnArch.className ="btn" +" "+ "btn-arh";
			btnArch.id = 'arh-row-'+id;

			copyRow.classList.toggle('archived');

			document.getElementById('table_line-'+id).remove();
			document.querySelector('.table').appendChild(copyRow);

			button();
			
		});
	}

	function reRow(id){
		console.log(id);
		let reRow=document.getElementById('re-row-'+id);
		console.log(reRow);
		// let row = document.getElementById('table_line-'+id);
		// console.log(row);
		reRow.addEventListener('click', (e) => {
			console.log('class');
			e.preventDefault();
			let textRow = document.getElementById('text-row-'+id);
			console.log(textRow);
			let data = textRow.innerText;
			console.log(data);
			let oldTable = document.querySelector('.table-container');
			let reForm = document.createElement('form');
				
			// if(reForm.innerHTML!==``){reForm.remove();} 
				reForm.innerHTML = `
				<textarea name="recomment" cols="40" rows="10" class="form__recontent _req _content"></textarea>
				<div class="submit">
					<input type="submit" value="Отправить"  class="form__resubmit btn btn-re">
					<input type="button" value="выйти" class="reform__close btn btn-del"">
				</div>
				<div class="retype">
					<div class="type-1">
						<input id="reform-radio-1" name="type" type="radio" value="task">
						<label for="reform-radio-1">Задача</label>
					</div>
					<div  class="type-2">
						<input id="reform-radio-2" name="type" type="radio" value="random">
						<label for="reform-radio-2">Случайная мысль</label>
					</div> 
					<div  class="type-3">
						<input id="reform-radio-3" name="type" type="radio" value="idea" checked>
						<label  for="reform-radio-3">Идея</label>
				</div>
			</div>	
				`;

			reForm.id='form-renote';

			document.querySelector('.table-container').appendChild(reForm);

			const form = document.getElementById('form-renote');
			let reTextarea = 	document.querySelector('.form__recontent');
			console.log(reTextarea);
			reTextarea.innerHTML = data;

			form.addEventListener('submit', (event) => {
				event.preventDefault();

				let reData =  reTextarea.value;
				let reType = form.elements.type.value;
				let current = document.getElementById('table_line-'+id).className = reType;

				console.log(reType)
				console.log(reData);	
				console.dir(reType)

				document.getElementById('text-row-'+id).innerHTML = reData;
				document.getElementById('type-row-'+id).innerHTML = reType;
				
			
				console.log(current);
				reForm.remove();
			});
			document.querySelector('.reform__close').addEventListener('click', (event) => {
				event.preventDefault();
				reForm.remove();
			});
			console.dir(textRow.innerText);
		})	
	}

	function formValidate(form) {
		let error = 0;

		let formReq = document.querySelectorAll('._req');

		for (let i= 0; i < formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input); 
			if (input.classList.contains('_content')) {
				if (input.value === '' ) {
					formAddError(input);
					error++;
				}
		}
		console.log(error);
		return error;
		}
	}

	function formRemoveError(input) {
		// input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	function formAddError(input) {
		// input.parentElement.classList.add('_error');
		input.classList.add('_error');
		console.log('helpMe');
	}



});













	// const reFormSubmit = document.querySelector('.form__resubmit');
		// const reFormClose = document.querySelector('.reform__close');
		
		// if(reFormSubmit){
		// 	document.querySelector('.form__resubmit').addEventListener('submit', (event) => {
		// 		event.preventDefault();
		// 		let reData =  document.querySelector('.form__recontent').value;
		// 		console.log(reData);	
		// 		document.getElementById('text-row-'+id).innerHTML=reData;
		// 		reForm.remove();
		// 	});
		// // }
		// // if(reFormClose){
		// 	document.querySelector('.reform__close').addEventListener('click', (event) => {
		// 		event.preventDefault();
		// 		reForm.remove();
		// 	});
		// }
		// console.dir(row.innerText);

// window.addEventListener('DOMContentLoaded' , () => { 
// 	console.log('work?');
// 	document.getElementById('form-note').addEventListener('submit', (event) => {
// 		event.preventDefault();

// 		console.log('hello');

// 		const form = document.getElementById('form-note');
// 		console.dir(form.elements.type.value);
// 		const date =  new Date();

// 		let error = formValidate(form);

// 		let data = document.querySelector('.form__content').value;
// 		console.log(data);


// 		if(error === 0 ){
// 			let table = document.querySelector('.table');
// 			console.log(table.rows.length);
			
// 				let content = document.createElement('tr');
// 				content.id=((table.rows.length)-1);
// 				let td1 = document.createElement('td');
// 				let td2 = document.createElement('td');
// 				// let td3 = document.createElement('td');
// 				// let td4 = document.createElement('td');
// 				// let td5 = document.createElement('button');
// 				// let td6 = document.createElement('button');
// 				// td5.className="btn-delete"

// 				td1.textContent = content.id; 
// 				td2.textContent = date.getFullYear()-date.getMonth()+1-date.getDay()/date.getHours()/date.getMinutes(); 

//       		content.appendChild(td1);
// 				content.appendChild(td2);
// 				console.log(td2);
// 		// 		td5.addEventListener('click', e => {  
// 		// });
// 	}
// 		else alert("заполни!");

// 	});

// });



// function try(){
// 	document.querySelector('.form__submit').addEventListener('click', () => {
// 		let data = document.querySelector('.form__content').value;
// 		// let type = document.querySelector('.')
// 		// document.querySelector('.out-form__content').innerHTML = data;
// 		console.log(data);
// 		let content = document.createElement('tr');
// 		content.classList.add('table_line')
// 		content.innerHTML = `
// 			<tr>
// 				<td class="table__text table__country_name">${data}
// 				</td>
// 				<td class="table__text  table__colum2">${data} 
// 				</td>
// 				<td class="table__text">${data}
// 				</td>
// 			</tr>
// 		`
// 		document.querySelector('.table').appendChild(content);
// 	});
// }