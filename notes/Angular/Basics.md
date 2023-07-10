1. What is Angular?
	-> Framework to build client side applications.
	-> Great for SPAs

2. Why Angular?
	-> Modular approach
	-> Components
	-> In-built capabilities
		Routing
		Validations
	-> Unit testable
	-> Typescript

3. How does it differ from AngularJS?
	AngularJS is the first version of Angular, built in 2010. After that the whole architecture changed and all newer versions are called Angular

4. Angular CLI
	-> ng new projectName
	-> ng serve
	-> The command line interface of angular, offering multiple commands for things like component and module generation
	-> ng g c component_name
	-> ng g m module_name
	-> ng g s service_name
	-> ng g c class_name

5. Component
	Template
		View
		HTML

	Class
		Code & Logic
		Typescript
		Data & Methods

	Metadata
		Information
		Decorator -> Feature in typescript A function that provides information about the class attached to id. (A function that attached to the class right below it)

6. Decorator data
	Selector
		A custom html tag with which the component will be invoked in the dom
		<app-root></app-root>
		<div class="app-root" ></div>
		<div app-root></div>
		selector: [app-root]
		<div app-root></div>
	
	templateUrl | template
		The html template bound to this component

	styleUrls | styles
		The style bound to the given component

7. Interpolation
	A way to display dynamic data within the HTML template
	Can only work with string values
	
8. Property Binding
	Binding a value to an elements property or attribute
	<button [disabled]="isButtonDisabled">Submit</button>
	<img [src]="imageUrl" alt="Image">
	<div [class.highlighted]="isHighlighted">Highlighted Text</div>
	<div [style.color]="textColor">Colored Text</div>
	<input [value]="inputValue" (input)="inputValue = $event.target.value">
	<input [value]="inputValue" (blur)="inputValue = $event.target.value">
	<input value="{{inputValue}}" (blur)="inputValue = $event.target.value">

9. Class Binding
	<div [class.highlighted]="isHighlighted">Highlighted Text</div>
	<div [class]="elementClass"></div>
	public elementClass:object = {
		"text-success": sent,
		"text-danger": !sent,
	}

10. Style Binding
	Similar to class binding

11. Event Binding
	<button (click)="handleClick()">Click me!</button>
	<input (input)="handleInput($event.target.value)">
	<input (keyup)="handleKeyUp($event)">
	<form (submit)="handleSubmit()">...</form>
	<select (change)="handleSelect($event.target.value)">...</select>

12. Template Reference Variables
	Access Dom elements and their properties
	<input type="text" #myInput>
	<button (click)="handleInputChange(myInput.value)"></button>

13. Two Way Binding
	Updates data in both directions between the component and the view. The view and the model should always be in sync.
	In the forms module. Make sure to import it
	<input [(ngModel)]="name" type="text">


----- Structural Directives
	Directives that allow you to add or remove elements from the DOM

14. ngIf
	Conditionally Render Html Elements
	<h2 *ngIf="truthyOrFalsyValue"></h2>

	<h2 *ngIf="displayName, else elseBlock"></h2>

	<ng-template #elseBlock>
		<h2>Name is hidden</h2>
	</ng-template>


	-----
	<div *ngIf="displayName; then ifBlock; else elseBlock"></div>
	<ng-template #ifBlock>
		<h2>Name goes here</h2>
	</ng-template>
	<ng-template #elseBlock>
		<h2>Name is hidden</h2>
	</ng-template>


15. ngSwitch
	Conditionally Render Html Elements
	<div [ngSwitch]="color">
		<div *ngSwitchCase="'red'">Red</div>
		<div *ngSwitchCase="'blue'">Blue</div>
		<div *ngSwitchCase="'green'">Green</div>
		<div *ngSwitchDefault>Pick a color</div>
	</div>

16. ngFor
	Render a list of html elements
	<div *ngFor="let color of colors">
		<h2>{{color}}</h2>
	</div>
	<div *ngFor="let color of colors; index as i">
		<h2>{{color}} {{i+1}}</h2>
	</div>
	<div *ngFor="let color of colors; first as f">
		It is the first element on the array
		<h2>{{color}} {{f}}</h2>
	</div>
	<div *ngFor="let color of colors; last as l">
		It is the last element on the array
		<h2>{{color}} {{l}}</h2>
	</div>
	<div *ngFor="let color of colors; odd as o">
		It is an odd number
		<h2>{{color}} {{o}}</h2>
	</div>
	<div *ngFor="let color of colors; event as e">
		It is an event number
		<h2>{{color}} {{e}}</h2>
	</div>

17. Component Interaction
	Input
		Send data from parent to child
		<app-test [parentData]="name"></app-test>
		@Input() public parentData;
		@Input('parentData') public name;

	Output
		Send data from child to parent
		import {EventEmitter, Output}
		@Output() public childeEvent = new EventEmitter();
		fireEvent(){
			this.childEvent.emit(' Hey Mario');
		}

		Parent
			public message = "";
			<app-test (childEvent)="message=$event"></app-test>

18. Pipes
	A middleware function that takes data as an argument, transforms it and returns the transformed data
	<h2>{{ name | uppercase}}</h2>
	<h2>{{ name | lowercase}}</h2>
	<h2>{{ name | titlecase}}</h2>
	<h2>{{ name | slice:0:2 }}</h2>
	<h2>{{ 5.678 | number:'1.2-5'}}</h2>
	<h2>{{ name | json}}</h2>

19. Services
	Services are a way to organize and share code and data across multiple components. 
	A class with a specific purpose
	Share Data Across multiple components
	Implement apllication logic
	External interaction

	1. Creating service
		ng g s service_name
	2. Register with Injector
		Multiple places where you can register the service but depends on hierarchical structure of Angular
		privideIn: 'root'
		or app.module.ts -> providers [ServiceName]

	3. Declare as a dependency in your components


20. Http & Observables
	Observables:
		A sequence of items that arrive asynchronously over time. Http is a single item response.

	RxJs:
		Reactive extensions for javascript
		External library to work with observables


	 this.http.get('https://api.example.com/data')
		.pipe(
			finalize(() => {
			// Code to execute regardless of the response
			console.log('Request completed.');
			})
		)
		.subscribe(
			response => {
			// Handle the successful response
			console.log(response);
			},
			error => {
			// Handle the error
			console.error(error);
			}
		);
	}

21. Routing
	1. Generate project with routing option
		If you don't initiate with it
			npm install @angular/router
			Import the RouterModule and Routes modules in app.modules.ts

	2. Configure routes
	3. Navigate with directives

	const routes: Routes = [
		/* Basic */
		{ path: 'home', component: HomeComponent },
		/* Parameters */
		{ path: 'users/:id', component: UserComponent },
		/* Optional Parameters */
		{ path: 'users/:id/:name?', component: UserComponent },
		/* Default Route */
		{ path: '', redirectTo: '/home', pathMatch: 'full' },
		/* Wildcard Fallback Route whenever no route is present */
		{ path: '**', component: NotFoundComponent },
		/* Redirection */
		{ path: 'legacy', redirectTo: '/new-path' },
		/* Nesting */
		{
			path: 'products', component: ProductListComponent,
			children: [
			{ path: '', component: ProductListComponent },
			{ path: 'details/:id', component: ProductDetailsComponent },
			]
		},
		/* Lazy loading. Load modules only when needed */
		{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
	];

