<?php

use Based\TypeScript\Generators\ModelGenerator;
use Based\TypeScript\Generators\RequestGenerator as BaseRequestGenerator;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

use App\TypeScript\RequestGenerator;

return [
    'generators' => [
        Model::class => ModelGenerator::class,
        Request::class => RequestGenerator::class,
    ],

    'paths' => [

        // ----- MODELS ------ //
        'Illuminate\\Notifications\\' => 'vendor/laravel/framework/src/Illuminate/Notifications/',
        'Laravel\\Passport\\' => 'vendor/laravel/passport/src/',
        'Spatie\\Permission\Models\\' => 'vendor/spatie/laravel-permission/src/Models/',
        'Peopleaps\\Scorm\\Model\\' => 'vendor/devianl2/laravel-scorm/src/Model/',

        'EscolaLms\\AssignWithoutAccount\\Models\\' => "vendor/escolalms/assign-without-account/src/Models/",

        'EscolaLms\\Auth\\Models\\' => "vendor/escolalms/auth/src/Models/",

        'EscolaLms\\Cart\\Models\\' => "vendor/escolalms/cart/src/Models/",

        'EscolaLms\\Categories\\Models\\' => "vendor/escolalms/categories/src/Models/",

        'EscolaLms\\Webinar\\Models\\' => "vendor/escolalms/webinar/src/Models/",

        'EscolaLms\\Consultations\\Models\\' => "vendor/escolalms/consultations/src/Models/",

        'EscolaLms\\Core\\Models\\' => "vendor/escolalms/core/src/Models/",

        'EscolaLms\\Courses\\Models\\' => "vendor/escolalms/courses/src/Models/",
        'EscolaLms\\Courses\\Tests\\Models\\' => "vendor/escolalms/courses/tests/Models/",

        'EscolaLms\\CourseAccess\\Models\\' => "vendor/escolalms/course-access/src/Models/",

        'EscolaLms\\CoursesImportExport\\Models\\' => "vendor/escolalms/courses-import-export/src/Models/",

        'EscolaLms\\CsvUsers\\Models\\' => "vendor/escolalms/csv-users/src/Models/",

        //'EscolaLms\\Files\\Models\\' => "vendor/escolalms/files/src/Models/",

        'EscolaLms\\HeadlessH5P\\Models\\' => "vendor/escolalms/headless-h5p/src/Models/",

        //'EscolaLms\\Images\\Models\\' => "vendor/escolalms/images/src/Models/",

        //'EscolaLms\\Lrs\\Models\\' => "vendor/escolalms/lrs/src/Models/",

        //'EscolaLms\\MailerLite\\Models\\' => "vendor/escolalms/mailerlite/src/Models/",

        //'EscolaLms\\Mattermost\\Models\\' => "vendor/escolalms/mattermost/src/Models/",

        'EscolaLms\\ModelFields\\Models\\' => "vendor/escolalms/model-fields/src/Models/",


        'EscolaLms\\Notifications\\Models\\' => "vendor/escolalms/notifications/src/Models/",
        'EscolaLms\\Pages\\Models\\' => "vendor/escolalms/pages/src/Models/",
        'EscolaLms\\Payments\\Models\\' => "vendor/escolalms/payments/src/Models/",
        'EscolaLms\\Permissions\\Models\\' => "vendor/escolalms/permissions/src/Models/",
        'EscolaLms\\Reports\\Models\\' => "vendor/escolalms/reports/src/Models/",
        //'EscolaLms\\Scorm\\Models\\' => "vendor/escolalms/scorm/src/Models/",
        'EscolaLms\\Settings\\Models\\' => "vendor/escolalms/settings/src/Models/",
        'EscolaLms\\StationaryEvents\\Models\\' => "vendor/escolalms/stationary-events/src/Models/",
        'EscolaLms\\Tags\\Models\\' => "vendor/escolalms/tags/src/Models/",
        'EscolaLms\\Tasks\\Models\\' => "vendor/escolalms/tasks/src/Models/",
        'EscolaLms\\Templates\\Models\\' => "vendor/escolalms/templates/src/Models/",
        //'EscolaLms\\TemplatesEmail\\Models\\' => "vendor/escolalms/templates-email/src/Models/",
        'EscolaLms\\TemplatesPdf\\Models\\' => "vendor/escolalms/templates-pdf/src/Models/",
        //'EscolaLms\\TemplatesSms\\Models\\' => "vendor/escolalms/templates-sms/src/Models/",
        'EscolaLms\\TopicTypes\\Models\\' => "vendor/escolalms/topic-types/src/Models/",
        'EscolaLms\\Questionnaire\\Models\\' => "vendor/escolalms/questionnaire/src/Models/",
        'EscolaLms\\Video\\Models\\' => "vendor/escolalms/video/src/Models/",
        'EscolaLms\\Vouchers\\Models\\' => 'vendor/escolalms/vouchers/src/Models',
        'EscolaLms\\Tracker\\Models\\' => 'vendor/escolalms/tracker/src/Models',

        // ----- Requests ------ //

        'EscolaLms\\AssignWithoutAccount\\Requests\\' => "vendor/escolalms/assign-without-account/src/Http/Requests/",

        'EscolaLms\\Auth\\Http\\Requests\\' => "vendor/escolalms/auth/src/Http/Requests/",
        'EscolaLms\\Auth\\Http\\Requests\\Admin\\' => "vendor/escolalms/auth/src/Http/Requests/Admin/",

        'EscolaLms\\Cart\\Http\\Requests\\' => "vendor/escolalms/cart/src/Http/Requests/",
        'EscolaLms\\Cart\\Http\\Requests\\Admin\\' => "vendor/escolalms/cart/src/Http/Requests/Admin/",

        'EscolaLms\\Categories\\Http\\Requests\\' => "vendor/escolalms/categories/src/Http/Requests/",

        'EscolaLms\\Webinar\\Http\\Requests\\' => "vendor/escolalms/webinar/src/Http/Requests/",

        'EscolaLms\\Consultations\\Http\\Requests\\' => "vendor/escolalms/consultations/src/Http/Requests/",

        'EscolaLms\\Courses\\Http\\Requests\\' => "vendor/escolalms/courses/src/Http/Requests/", // waiting for custom role in https://github.com/EscolaLMS/Courses/blob/main/src/Http/Requests/UploadTopicResourceAPIRequest.php

        'EscolaLms\\CourseAccess\\Http\\Requests\\' => "vendor/escolalms/course-access/src/Http/Requests/",

        'EscolaLms\\CoursesImportExport\\Http\\Requests\\' => "vendor/escolalms/courses-import-export/src/Http/Requests/",

        'EscolaLms\\CsvUsers\\Http\\Requests\\' => "vendor/escolalms/csv-users/src/Http/Requests/",

        'EscolaLms\\Files\\Http\\Requests\\' => "vendor/escolalms/files/src/Http/Requests/",

        'EscolaLms\\HeadlessH5P\\Http\\Requests\\' => "vendor/escolalms/headless-h5p/src/Http/Requests/",

        'EscolaLms\\ModelFields\\Http\\Requests\\' => "vendor/escolalms/model-fields/src/Http/Requests/",

        'EscolaLms\\Notifications\\Http\\Requests\\' => "vendor/escolalms/notifications/src/Http/Requests/",

        'EscolaLms\\Pages\\Http\\Requests\\' => "vendor/escolalms/pages/src/Http/Requests/",

        'EscolaLms\\Payments\\Http\\Requests\\' => "vendor/escolalms/payments/src/Http/Requests/",
        'EscolaLms\\Payments\\Http\\Requests\\Admin\\' => "vendor/escolalms/payments/src/Http/Requests/Admin/",

        'EscolaLms\\Permissions\\Http\\Requests\\' => "vendor/escolalms/permissions/src/Http/Requests/",

        'EscolaLms\\Questionnaire\\Http\\Requests\\' => "vendor/escolalms/questionnaire/src/Http/Requests/", // waiting for custom role here https://github.com/EscolaLMS/Questionnaire/blob/main/src/Http/Requests/QuestionnaireStarsFrontRequest.php#L34

        'EscolaLms\\Reports\\Http\\Requests\\' => "vendor/escolalms/reports/src/Http/Requests/",
        'EscolaLms\\Reports\\Http\\Requests\\Admin\\' => "vendor/escolalms/reports/src/Http/Requests/Admin/",

        'EscolaLms\\Scorm\\Http\\Requests\\' => "vendor/escolalms/scorm/src/Http/Requests/",

        'EscolaLms\\Settings\\Http\\Requests\\Admin\\' => "vendor/escolalms/settings/src/Http/Requests/Admin/",

        'EscolaLms\\StationaryEvents\\Http\\Requests\\' => "vendor/escolalms/stationary-events/src/Http/Requests/",

        'EscolaLms\\Tags\\Http\\Request\\' => "vendor/escolalms/tags/src/Http/Request/",

        'EscolaLms\\Tasks\\Http\\Request\\' => "vendor/escolalms/tasks/src/Http/Request/",

        'EscolaLms\\Templates\\Http\\Requests\\' => "vendor/escolalms/templates/src/Http/Requests/",

        'EscolaLms\\TemplatesPdf\\Http\\Requests\\' =>  "vendor/escolalms/templates-pdf/src/Http/Requests",
        
        'EscolaLms\\Vouchers\\Http\\Requests\\' =>  "vendor/escolalms/vouchers/src/Http/Requests",

        'EscolaLms\\Translations\\Http\\Requests\\' =>  "vendor/escolalms/translations/src/Http/Requests",

    ],

    'customRules' => [
        // 'present' => 'any'
        // \App\Rules\MyCustomRule::class => 'string',
        // \App\Rules\MyOtherCustomRule::class => ['string', 'number'],
    ],

    'output' => app_path('/../models.d.ts'),

    'autoloadDev' => false,
];
