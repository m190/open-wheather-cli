module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
    ],
    "extends": [
        "airbnb-typescript/base",
    ],
    "parserOptions": {
        "project": "./tsconfig.eslint.json",
    },
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "jasmine": true,
        "es6": true,
        "jest": true
    },
    "globals": {
        "isNaN": true,
        "require": true,
        "angular": true,
        "noUiSlider": true,
        "Awesomplete": true,
        "Brick": true,
        "MailParser": true,
        "moment": true,
        "openpgp": true,
        "jQuery": true,
        "Mousetrap": true,
        "_rAF": true,
        "base32": true,
        "$": true,
        "Cypress": true,
        "cy": true,
        "after": true,
        "before": true
    },
    "rules": {
        "object-shorthand": ["error", "always", {"avoidExplicitReturnArrows": true}],
        "arrow-parens": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "no-shadow": ["off", {"hoist": "never", "builtinGlobals": true}],
        "array-bracket-spacing": ["off", "never"],
        "object-property-newline": "off",
        "no-sequences": "off",
        "no-param-reassign": ["error", {"props": false}],
        "no-unused-expressions": ["error", {"allowShortCircuit": true}],
        "padded-blocks": ["off", "always"],
        "arrow-body-style": ["off", "as-needed"],
        "no-use-before-define": ["error", {"functions": false, "classes": true}],
        "new-cap": ["error", {
            "properties": true,
            "capIsNewExceptionPattern": "^Awesomplete.",
            "newIsCapExceptions": ["vCard"]
        }],
        "no-mixed-operators": ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}],
        "no-return-assign": "off",
        "max-len": ["error", {
            "ignoreComments": true,
            "code": 120,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
        }],
        "consistent-return": "off",
        "default-case": "off",
        "no-plusplus": "off",
        "no-bitwise": "off",
        "no-debugger": "off",
        "prefer-template": "off",
        "class-methods-use-this": "off",
        "func-names": ["off", "never"],
        "prefer-destructuring": "off",
        "function-paren-newline": "off",
        "prefer-promise-reject-errors": "off",
        "import/prefer-default-export": "off",
        "no-console": "off",
        "object-curly-newline": "off",
        "space-before-function-paren": "off",
        "global-require": "off",
        "indent": "off",
        "import/no-unresolved": [2, {"commonjs": true, "amd": true}],
        "import/named": 2,
        "import/namespace": 2,
        "import/default": 2,
        "import/export": 2,
        "operator-linebreak": "off",
        "implicit-arrow-linebreak": "off",
        "no-await-in-loop": "off",
        "no-restricted-globals": ["error", "event"],
        "no-restricted-syntax": ["error", "WithStatement"],
        "linebreak-style": "off",
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/indent": ["error", 4],
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }]
    },
    "overrides": [
        {
            "files": ["*Modal.js"],
            "rules": {
                "object-shorthand": "off"
            }
        }
    ]
};
