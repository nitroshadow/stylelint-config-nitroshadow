'use strict';

module.exports = {
    'extends': [
        'stylelint-config-standard',
        'stylelint-config-recess-order'
    ],
    'rules': {},
    'overrides': [
        {
            'files': '**/*.scss',
            'extends': [
                'stylelint-config-standard-scss',
                'stylelint-config-recess-order'
            ],
            'rules': {}
        }
    ]
};
