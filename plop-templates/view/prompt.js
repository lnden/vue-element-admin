const { notEmpty } = require('../utils.js');

module.exports = {
    description: 'generate a view',
    prompts: [{
            type: 'input',
            name: 'name',
            message: 'Please enter the component name!',
            validate: notEmpty('component name')
        },
        {
            type: 'input',
            name: 'uname',
            message: 'Please enter your name!',
            validate: notEmpty('you name')
        },
        {
            type: 'checkbox',
            name: 'blocks',
            message: 'Blocks:',
            choices: [{
                name: '<template>',
                value: 'template',
                checked: true
            },
            {
                name: '<script>',
                value: 'script',
                checked: true
            },
            {
                name: 'style',
                value: 'style',
                checked: true
            }],
            validate(value) {
                if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
                    return 'View require at least a <script> or <template> tag.'
                }
                return true
            }
        }
    ],
    actions: data => {
        const name = '{{name}}';
        const date = new Date();
        const actions = [{
            type: 'add',
            path: `src/views/${name}/index.vue`,
            templateFile: 'plop-templates/view/index.hbs',
            data: {
                name: name,
                template: data.blocks.includes('template'),
                script: data.blocks.includes('script'),
                style: data.blocks.includes('style'),
                date: `${date.getFullYear()}-${(date.getMonth()+1)}-${date.getDate()}`
            }
        }];
        return actions
    }
};