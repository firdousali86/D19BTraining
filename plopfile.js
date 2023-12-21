module.exports = function (plop) {
    // Component generator
    plop.setGenerator('component', {
        description: 'Generate a React component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Component name:'
        }],
        actions: [{
            type: 'add',
            path: 'src/components/{{pascalCase name}}.js',
            templateFile: 'plop-templates/component.hbs'
        }]
    });
};