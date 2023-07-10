1. What is angular and how does it differ from AngularJS
	Web development framework. It differs from AngularJS in terms of architecture, performance, and features.

2. Explain the key features and benefits of Angular.
	Key features of Angular include components, templates, data binding, dependency injection, and routing. Benefits include improved developer productivity, scalability, and performance.

3. What are the differences between components and directives in Angular?
	Components are building blocks with a template, while directives modify or enhance element behavior.

4. Describe the Angular component lifecycle hooks and their usage.
	ngOnInit(): Called once, after the first ngOnChanges() and angular has insantiated the component
	ngOnChanges(): Called whenever one or more data-bound input properties change just before before ngOnInit().
	ngDoCheck(): Called on every change detection run, and once after ngOnChanges() and ngOnInit() respectively. The purpose of this lifecycle hook is to act upon changes that Angular can't or won't detect on its own.
	ngAfterContentInit(): Called once after the first ngDoCheck(). The purpose of this lifecycle hook is to respond after angular has finished loading any external data into its component.
	ngAfterContentChecked(): Called after ngAfterContentInit() and every subsequent ngDoCheck(). The purpose of this lifecycle hook is to check the content projected into the directive or component.
	ngAfterViewInit(): Called once after the first ngAfterContentChecked(), This lifecycle hook is invoked when angular initializes the component's views and child views
	ngAfterViewChecked(): Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked(). This lifecycle hook is invoked after angualr checks the component's views and child views, or the view that contains the directive.
	ngOnDestroy(): Called immediately before Angular destroys the directive or component. We can use this lifecycle hook for Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks.

5. DATA BINDING
	Data synchronization between view and component. Interpolation, property binding, and event binding.

6. DI
	Dependency injection is a design pattern in Angular for managing component dependencies and promoting code reusability.

7. Explain the purpose and usage of Angular services and when to use them.
	Sharing data and functionality across components. Injected into components, providing a central place for logic.

8. What are Angular templates? How do you define and use templates in Angular?
	Angular templates define the structure and layout of the view. They are written in HTML with additional Angular-specific syntax and directives.

9. Describe Angular modules and their significance in organizing an Angular application.
	A group of related components, services, and other artifacts together.

10. What is Angular routing? How do you implement routing in an Angular application?
	Routing enables navigation between different views/components. Implemented using RouterModule and router-outlet directive
	
11. What is Angular CLI, and what are its benefits? How do you create a new Angular project using Angular CLI?
	Angular CLI is a command-line interface for scaffolding, building, and managing Angular projects. You can create a new Angular project using the command "ng new project-name".

12. Explain the concept of Angular directives and provide examples of built-in and custom directives.
	Markers on elements that modify their behavior or appearance. Examples include ngIf, ngFor (built-in), and custom directives created by developers.

13. How does angular handle forms
	Angular handles forms through template-driven forms and reactive forms. Template-driven forms rely on directives, while reactive forms use reactive programming with form controls.

14. Change detection
	Detects changes to data and updates the view accordingly. It efficiently determines which parts of the view need to be updated.

15. What are pipes
	Transforming/Manipulating data before displaying on the view.
	<!-- Angular pipes are used for transforming data in templates. They format, filter, or manipulate data before it is displayed in the view. -->


16. Explain Components, Modules and Services in Angular
	Components -> Main building block. Consists of 4 files by default, view, class. Represents a piece of a module.
	Modules -> A group of artifacts, representing a logical section of the application. Includes components, services, custom pipes and more.
	Services -> Are used for sharing data and functionality across components, Example of a routing service that keeps track of the current page.

Could you walk me through the development process? Let's say you have a new project or feature.
What do you use for testing?
Are you using something for state management?

