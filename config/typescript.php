<?php

use Based\TypeScript\Generators\ModelGenerator;
use Illuminate\Database\Eloquent\Model;

return [
    'generators' => [
        Model::class => ModelGenerator::class,
    ],

    'paths' => [

        'Illuminate\\Notifications\\' => 'vendor/laravel/framework/src/Illuminate/Notifications/',
        'Laravel\\Passport\\' => 'vendor/laravel/passport/src/',
        'Spatie\\Permission\Models\\' => 'vendor/spatie/laravel-permission/src/Models/',
        'Peopleaps\\Scorm\\Model\\' => 'vendor/devianl2/laravel-scorm/src/Model/',

        'EscolaLms\\Auth\\Models\\' => 'vendor/escolalms/auth/src/Models/',
        'EscolaLms\\Auth\\Models\\' => "vendor/escolalms/auth/src/Models/",
        'EscolaLms\\Cart\\Models\\' => "vendor/escolalms/cart/src/Models/",
        'EscolaLms\\Categories\\Models\\' => "vendor/escolalms/categories/src/Models/",
        'EscolaLms\\Core\\Models\\' => "vendor/escolalms/core/src/Models/",
        'EscolaLms\\Courses\\Models\\' => "vendor/escolalms/courses/src/Models/",
        'EscolaLms\\Courses\\Tests\\Models\\' => "vendor/escolalms/courses/tests/Models/",
        'EscolaLms\\CoursesImportExport\\Models\\' => "vendor/escolalms/courses-import-export/src/Models/",
        'EscolaLms\\CsvUsers\\Models\\' => "vendor/escolalms/csv-users/src/Models/",
        //'EscolaLms\\Files\\Models\\' => "vendor/escolalms/files/src/Models/",
        'EscolaLms\\HeadlessH5P\\Models\\' => "vendor/escolalms/headless-h5p/src/Models/",
        //'EscolaLms\\Images\\Models\\' => "vendor/escolalms/images/src/Models/",
        //'EscolaLms\\Lrs\\Models\\' => "vendor/escolalms/lrs/src/Models/",
        //'EscolaLms\\MailerLite\\Models\\' => "vendor/escolalms/mailerlite/src/Models/",
        //'EscolaLms\\Mattermost\\Models\\' => "vendor/escolalms/mattermost/src/Models/",
        'EscolaLms\\Notifications\\Models\\' => "vendor/escolalms/notifications/src/Models/",
        'EscolaLms\\Pages\\Models\\' => "vendor/escolalms/pages/src/Models/",
        'EscolaLms\\Payments\\Models\\' => "vendor/escolalms/payments/src/Models/",
        'EscolaLms\\Permissions\\Models\\' => "vendor/escolalms/permissions/src/Models/",
        'EscolaLms\\Reports\\Models\\' => "vendor/escolalms/reports/src/Models/",
        //'EscolaLms\\Scorm\\Models\\' => "vendor/escolalms/scorm/src/Models/",
        'EscolaLms\\Settings\\Models\\' => "vendor/escolalms/settings/src/Models/",
        'EscolaLms\\StationaryEvents\\Models\\' => "vendor/escolalms/stationary-events/src/Models/",
        'EscolaLms\\Tags\\Models\\' => "vendor/escolalms/tags/src/Models/",
        'EscolaLms\\Templates\\Models\\' => "vendor/escolalms/templates/src/Models/",
        //'EscolaLms\\TemplatesEmail\\Models\\' => "vendor/escolalms/templates-email/src/Models/",
        'EscolaLms\\TemplatesPdf\\Models\\' => "vendor/escolalms/templates-pdf/src/Models/",
        //'EscolaLms\\TemplatesSms\\Models\\' => "vendor/escolalms/templates-sms/src/Models/",
        'EscolaLms\\TopicTypes\\Models\\' => "vendor/escolalms/topic-types/src/Models/",
        'EscolaLms\\Questionnaire\\Models\\' => "vendor/escolalms/questionnaire/src/Models/",
        'EscolaLms\\Consultations\\Models\\' => "vendor/escolalms/consultations/src/Models/",
        'EscolaLms\\AssignWithoutAccount\\Models\\' => "vendor/escolalms/assign-without-account/src/Models/",
        'EscolaLms\\Video\\Models\\' => "vendor/escolalms/video/src/Models/",

        //
    ],

    'customRules' => [
        // \App\Rules\MyCustomRule::class => 'string',
        // \App\Rules\MyOtherCustomRule::class => ['string', 'number'],
    ],

    'output' => app_path('/../models.d.ts'),

    'autoloadDev' => false,
];
