```
'rules': {
    'desc': '创建一个只有属性 setter 的对象是一个常见的错误，必须要创建相应的 getter',
    'accessor-pairs': 2,
    'desc': '箭头函数之前/之后标准化间距样式 --fix',
    'arrow-spacing': [2, {
        'before': true,
        'after': true
    }],
    'desc': '参数always，never。 always表示语法块内有空格或者无空格 --fix',
    'block-spacing': [2, 'always'],
    'desc': '参数1tbs，stroustrup，allman三种大括号的样式风格 --fix',
    'brace-style': [2, '1tbs', {
        '允许一个块打开和关闭括号在同一行': 'true/false'
        'allowSingleLine': true
    }],
    'desc': '!!!!!!!!!!'
    'camelcase': [0, {
        'properties': 'always'
    }],
    'desc': '参数always，never对象后是否添加逗号 --fix',
    'comma-dangle': [2, 'never'],
    'desc': '逗号分割的前后是否添加空格 --fix',
    'comma-spacing': [2, {
        'before': false,
        'after': true
    }],
    'desc': '参数last,first逗号放在前一行的尾部/第二行的头部 --fix',
    'comma-style': [2, 'last'],
    'desc': '构造函数必须使用super(),非构造函数不得调用super()',
    'constructor-super': 2,
    'desc': '参数all,multi,multi-line,multi-or-nest,consistent --fix',
    'curly': [2, 'multi-line'],
    'desc': '参数object,property成员表达式中的点之前或之后放置换行符 --fix',
    'dot-location': [2, 'property'],
    'desc': '参数always,never强制文件是否以换行符结束 --fix',
    'eol-last': [2,'always'],
    'desc': '参数always，never，ignore使用类型安全的相等的运算符=== --fix',
    'eqeqeq': [2, 'allow-null'],
    'desc': 'generator的一种用法*星前星后是否有空格 --fix',
    'generator-star-spacing': [2, {
        'before': true,
        'after': true
    }],
    'desc': '判断nodejs中处理回调是否判断error',
    'handle-callback-err': [2, '^(err|error)$'],
    'desc': '控制缩进的空格 --fix',
    'indent': [2, 4, {
        'SwitchCase': 2
    }],
    'desc': '参数prefer-double，prefer-single jsx内使用单引或者双引',
    'jsx-quotes': [2, 'prefer-single'],
    'desc': '对象字面量属性中强制在冒号的周围放置空格 --fix',
    'key-spacing': [2, {
        'beforeColon': false,
        'afterColon': true
    }],
    'desc': '围绕关键词使用的空格 --fix',
    'keyword-spacing': [2, {
        'before': true,
        'after': true
    }],
    'desc': '要求new使用大写启动函数，允许没有new操作符情况下调用大写启动函数',
    'new-cap': [1, {
        'newIsCap': true,
        'capIsNew': false
    }],
    'desc': 'new关键字调用不带参数的构造函数时需要括号 --fix',
    'new-parens': 2,
    'desc': '不鼓励使用构造函数来构造性Array数组',
    'no-array-constructor': 2,
    'desc': '不允许使用arguments.caller和arguments.callee',
    'no-caller': 2,
    'desc': '控制台不允许出现console,有如下参数也可以使用',
    'no-console': 'off',
    'no-console': { "allow": ["warn", "error"] },
    'desc': '如果给一个对象重新赋值需要创建一个变量，给变量赋值对象，我们可以修改变量',
    'no-class-assign': 2,
    'desc': '不允许在实验条件不明确赋值运算符if for =',
    'no-cond-assign': 2,
    'desc': '我们不能修改使用const关键字声明的变量，它会引发运行时错误，在非ES6环境下可能被忽略',
    'no-const-assign': 2,
    'desc': 'ASCII范围0-31中特殊的不可见字符',
    'no-control-regex': 0,
    'desc': '不允许在变量上使用delete操作符',
    'no-delete-var': 2,
    'desc': '不允许在函数声明或表达式中使用重复的参数名称',
    'no-dupe-args': 2,
    'desc': '在标记在级别成员中使用重复名称',
    'no-dupe-class-members': 2,
    'desc': '对象中不允许定义相同的键名',
    'no-dupe-keys': 2,
    'desc': '不允许在switch语句的case子句中使用重复的测试表达式',
    'no-duplicate-case': 2,
    'desc': '不允许在正则表达式中使用空字符类',
    'no-empty-character-class': 2,
    'desc': '解构赋值的时候默认值要使用=,不能使用:',
    'no-empty-pattern': 2,
    'desc': '禁止使用eval函数来防止潜在的危险',
    'no-eval': 2,
    'desc': 'try catch 不能引用错误参数赋值',
    'no-ex-assign': 2,
    'desc': '不允许直接修改内建对象的原型,还可以设定指定类型的修改',
    'no-extend-native': 2,
    'no-extend-native': [2,{ "exceptions": ["Object"] }],
    'no-extra-bind': 2,
    'desc': '该规则禁止不必要的布尔转换 --fix',
    'no-extra-boolean-cast': 2,
    'desc': '此规则仅在必要时限制使用括号 --fix',
    'no-extra-parens': [2, 'functions'],
    'desc': 'switch case判断结束后需要以throe,return,break结尾',
    'no-fallthrough': 2,
    'desc': '此规则旨在消除浮点小数点 --fix',
    'no-floating-decimal': 2,
    'desc': '此规则不允许重新分配function声明，如果要分配定义变量赋值function',
    'no-func-assign': 2,
    'desc': 'setTimeout，setInterval第一个参数可以是字符串，此规则规定一个参数为function',
    'no-implied-eval': 2,
    'desc': '这条规则要求函数声明和可选的变量声明位于程序的根节点或函数的主体中',
    'no-inner-declarations': [2, 'functions'],
    'desc': '此规则不允许RegExp构造函数中的无效正则表达式字符串',
    'no-invalid-regexp': 2,
    'desc': '!!!!!!!!!!!!!!!'
    'no-irregular-whitespace': 2,
    'desc': '遇到__iterator__财产时发出警告，使用ES6的新用法'
    'no-iterator': 2,
    'desc': '禁止创建与范围内的变量共享名称的标签'
    'no-label-var': 2,
}
```
