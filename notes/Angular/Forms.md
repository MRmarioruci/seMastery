--- Template Driven Forms
	Easy to use and similar to AngularJS forms
	Two way data binding with ngModel
	Bulky html
	Unit testing is a challenge
	Readability decreases with complex forms and validations
	Suitable for simple scenarios

--- Reactive Forms




1. Import FormsModule in app.module.imports
	- Will track the form controls with the ngModel directive only not all of them
	<form #userform="ngForm">
		{{userForm.value | json}}
		<div class="form-group">
			<input type="text" ngModel name="username" placeholder="type your username" />
		</div>
	</form>
	ngModel
		1. Needs a name attribute

	ngModelGroup
		Grouping of properties

	userForm.value

2. Bind the data to a user defined model and send that model data to the server
	

	