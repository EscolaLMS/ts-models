/**
 * This file is auto generated using 'php artisan typescript:generate'
 *
 * Changes to this file will be lost when the command is run again
 */

declare namespace App.Models {
    export interface User {
        id: number;
        first_name: string;
        last_name: string;
        email: string | null;
        phone: string | null;
        password: string | null;
        is_active: boolean;
        remember_token: string | null;
        password_reset_token: string | null;
        email_verified_at: string | null;
        path_avatar: string | null;
        gender: number | null;
        age: number | null;
        country: string | null;
        city: string | null;
        street: string | null;
        postcode: string | null;
        created_at: string | null;
        updated_at: string | null;
        points: number;
        notification_channels: string | null;
        notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        read_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        unread_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        roles?: Array<Spatie.Permission.Models.Role> | null;
        permissions?: Array<Spatie.Permission.Models.Permission> | null;
        clients?: Array<Laravel.Passport.Client> | null;
        tokens?: Array<Laravel.Passport.Token> | null;
        interests?: Array<EscolaLms.Categories.Models.Category> | null;
        settings?: Array<EscolaLms.Auth.Models.UserSetting> | null;
        groups?: Array<EscolaLms.Auth.Models.Group> | null;
        notifications_count?: number | null;
        read_notifications_count?: number | null;
        unread_notifications_count?: number | null;
        roles_count?: number | null;
        permissions_count?: number | null;
        clients_count?: number | null;
        tokens_count?: number | null;
        interests_count?: number | null;
        settings_count?: number | null;
        groups_count?: number | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
        readonly onboarding_completed?: any;
    }

}

declare namespace Illuminate.Notifications {
    export interface DatabaseNotification {
        id: string;
        type: string;
        notifiable_type: string;
        notifiable_id: number;
        data: string;
        read_at: string | null;
        created_at: string | null;
        updated_at: string | null;
        event: string;
        notifiable?: any | null;
    }

}

declare namespace Laravel.Passport {
    export interface Client {
        id: number;
        user_id: number | null;
        name: string;
        secret: string | null;
        provider: string | null;
        redirect: string;
        personal_access_client: boolean;
        password_client: boolean;
        revoked: boolean;
        created_at: string | null;
        updated_at: string | null;
        user?: App.Models.User | null;
        auth_codes?: Array<Laravel.Passport.AuthCode> | null;
        tokens?: Array<Laravel.Passport.Token> | null;
        auth_codes_count?: number | null;
        tokens_count?: number | null;
        readonly plain_secret?: any;
    }

    export interface AuthCode {
        id: string;
        user_id: number;
        client_id: number;
        scopes: string | null;
        revoked: boolean;
        expires_at: string | null;
        client?: Laravel.Passport.Client | null;
    }

    export interface PersonalAccessClient {
        id: number;
        client_id: number;
        created_at: string | null;
        updated_at: string | null;
        client?: Laravel.Passport.Client | null;
    }

    export interface RefreshToken {
        id: string;
        access_token_id: string;
        revoked: boolean;
        expires_at: string | null;
        access_token?: Laravel.Passport.Token | null;
    }

    export interface Token {
        id: string;
        user_id: number | null;
        client_id: number;
        name: string | null;
        scopes: string | null;
        revoked: boolean;
        created_at: string | null;
        updated_at: string | null;
        expires_at: string | null;
        client?: Laravel.Passport.Client | null;
        user?: App.Models.User | null;
    }

}

declare namespace Spatie.Permission.Models {
    export interface Permission {
        id: number;
        name: string;
        guard_name: string;
        created_at: string | null;
        updated_at: string | null;
        users?: Array<App.Models.User> | null;
        users_count?: number | null;
    }

    export interface Role {
        id: number;
        name: string;
        guard_name: string;
        created_at: string | null;
        updated_at: string | null;
        users?: Array<App.Models.User> | null;
        users_count?: number | null;
    }

}

declare namespace Peopleaps.Scorm.Model {
    export interface ScormScoModel {
        scorm?: Peopleaps.Scorm.Model.ScormModel | null;
        sco_trackings?: Array<Peopleaps.Scorm.Model.ScormScoTrackingModel> | null;
        sco_trackings_count?: number | null;
    }

    export interface ScormScoTrackingModel {
        sco?: Peopleaps.Scorm.Model.ScormScoModel | null;
    }

    export interface ScormModel {
        scos?: Array<Peopleaps.Scorm.Model.ScormScoModel> | null;
        scos_count?: number | null;
    }

}

declare namespace EscolaLms.Auth.Models {
    export interface User {
        id: number;
        first_name: string;
        last_name: string;
        email: string | null;
        phone: string | null;
        password: string | null;
        is_active: boolean;
        remember_token: string | null;
        password_reset_token: string | null;
        email_verified_at: string | null;
        path_avatar: string | null;
        gender: number | null;
        age: number | null;
        country: string | null;
        city: string | null;
        street: string | null;
        postcode: string | null;
        created_at: string | null;
        updated_at: string | null;
        points: number;
        notification_channels: string | null;
        notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        read_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        unread_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        roles?: Array<Spatie.Permission.Models.Role> | null;
        permissions?: Array<Spatie.Permission.Models.Permission> | null;
        clients?: Array<Laravel.Passport.Client> | null;
        tokens?: Array<Laravel.Passport.Token> | null;
        notifications_count?: number | null;
        read_notifications_count?: number | null;
        unread_notifications_count?: number | null;
        roles_count?: number | null;
        permissions_count?: number | null;
        clients_count?: number | null;
        tokens_count?: number | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
        readonly onboarding_completed?: any;
    }

    export interface GroupUser {
        group_id: number;
        user_id: number;
    }

    export interface Group {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        name: string;
        registerable: boolean;
        parent_id: number | null;
        users?: Array<EscolaLms.Auth.Models.User> | null;
        parent?: EscolaLms.Auth.Models.Group | null;
        children?: Array<EscolaLms.Auth.Models.Group> | null;
        users_count?: number | null;
        children_count?: number | null;
        readonly name_with_breadcrumbs?: string;
    }

    export interface UserSetting {
        user_id: number;
        key: string;
        value: string | null;
        user?: EscolaLms.Auth.Models.User | null;
    }

}

declare namespace EscolaLms.Cart.Models {
    export interface User {
        id: number;
        first_name: string;
        last_name: string;
        email: string | null;
        phone: string | null;
        password: string | null;
        is_active: boolean;
        remember_token: string | null;
        password_reset_token: string | null;
        email_verified_at: string | null;
        path_avatar: string | null;
        gender: number | null;
        age: number | null;
        country: string | null;
        city: string | null;
        street: string | null;
        postcode: string | null;
        created_at: string | null;
        updated_at: string | null;
        points: number;
        notification_channels: string | null;
        notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        read_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        unread_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        roles?: Array<Spatie.Permission.Models.Role> | null;
        permissions?: Array<Spatie.Permission.Models.Permission> | null;
        clients?: Array<Laravel.Passport.Client> | null;
        tokens?: Array<Laravel.Passport.Token> | null;
        notifications_count?: number | null;
        read_notifications_count?: number | null;
        unread_notifications_count?: number | null;
        roles_count?: number | null;
        permissions_count?: number | null;
        clients_count?: number | null;
        tokens_count?: number | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
    }

    export interface Course {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        title: string;
        summary: string | null;
        image_path: string | null;
        video_path: string | null;
        base_price: number | null;
        duration: string | null;
        subtitle: string | null;
        language: string | null;
        description: string | null;
        level: string | null;
        poster_path: string | null;
        active_from: string | null;
        active_to: string | null;
        hours_to_complete: number | null;
        purchasable: boolean;
        findable: boolean;
        scorm_sco_id: number | null;
        target_group: string | null;
        status: string;
        teaser_url: string | null;
        authors?: Array<EscolaLms.Courses.Models.User> | null;
        lessons?: Array<EscolaLms.Courses.Models.Lesson> | null;
        categories?: Array<EscolaLms.Categories.Models.Category> | null;
        tags?: Array<EscolaLms.Tags.Models.Tag> | null;
        users?: Array<EscolaLms.Courses.Models.User> | null;
        groups?: Array<EscolaLms.Courses.Models.Group> | null;
        topics?: Array<EscolaLms.Courses.Models.Topic> | null;
        scorm_sco?: Peopleaps.Scorm.Model.ScormScoModel | null;
        authors_count?: number | null;
        lessons_count?: number | null;
        categories_count?: number | null;
        tags_count?: number | null;
        users_count?: number | null;
        groups_count?: number | null;
        topics_count?: number | null;
        readonly author?: any | null;
        readonly author_id?: number | null;
        readonly image_url?: string | null;
        readonly video_url?: string | null;
        readonly poster_url?: string | null;
        readonly is_active?: boolean;
    }

    export interface Order {
        id: number;
        user_id: number | null;
        status: number;
        total: number;
        subtotal: number;
        tax: number;
        created_at: string | null;
        updated_at: string | null;
        items?: Array<EscolaLms.Cart.Models.OrderItem> | null;
        courses?: Array<EscolaLms.Cart.Models.Course> | null;
        user?: App.Models.User | null;
        items_count?: number | null;
        courses_count?: number | null;
        readonly quantity?: number;
        readonly status_name?: string;
    }

    export interface OrderItem {
        id: number;
        order_id: number;
        buyable_type: string;
        buyable_id: number;
        quantity: number;
        options: string | null;
        created_at: string | null;
        updated_at: string | null;
        buyable?: any | null;
        readonly description?: any;
        readonly price?: any;
        readonly subtotal?: any;
        readonly extra_fees?: any;
        readonly total?: any;
        readonly identifier?: string;
    }

    export interface Product {
        id: number;
        price: number;
        created_at: string | null;
        updated_at: string | null;
    }

}

declare namespace EscolaLms.Categories.Models {
    export interface Category {
        id: number;
        name: string;
        slug: string | null;
        is_active: boolean;
        parent_id: number | null;
        icon: string | null;
        icon_class: string | null;
        created_at: string | null;
        updated_at: string | null;
        parent?: EscolaLms.Categories.Models.Category | null;
        children?: Array<EscolaLms.Categories.Models.Category> | null;
        users?: Array<App.Models.User> | null;
        courses?: Array<EscolaLms.Courses.Models.Course> | null;
        children_count?: number | null;
        users_count?: number | null;
        courses_count?: number | null;
        readonly name_with_breadcrumbs?: string;
    }

}

declare namespace EscolaLms.Core.Models {
    export interface User {
        id: number;
        first_name: string;
        last_name: string;
        email: string | null;
        phone: string | null;
        password: string | null;
        is_active: boolean;
        remember_token: string | null;
        password_reset_token: string | null;
        email_verified_at: string | null;
        path_avatar: string | null;
        gender: number | null;
        age: number | null;
        country: string | null;
        city: string | null;
        street: string | null;
        postcode: string | null;
        created_at: string | null;
        updated_at: string | null;
        points: number;
        notification_channels: string | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
    }

}

declare namespace EscolaLms.Courses.Models {
    export interface UserTopicTime {
        id: number;
        user_id: number;
        topic_id: number;
        created_at: string | null;
        updated_at: string | null;
    }

    export interface User {
        id: number;
        first_name: string;
        last_name: string;
        email: string | null;
        phone: string | null;
        password: string | null;
        is_active: boolean;
        remember_token: string | null;
        password_reset_token: string | null;
        email_verified_at: string | null;
        path_avatar: string | null;
        gender: number | null;
        age: number | null;
        country: string | null;
        city: string | null;
        street: string | null;
        postcode: string | null;
        created_at: string | null;
        updated_at: string | null;
        points: number;
        notification_channels: string | null;
        notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        read_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        unread_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        roles?: Array<Spatie.Permission.Models.Role> | null;
        permissions?: Array<Spatie.Permission.Models.Permission> | null;
        clients?: Array<Laravel.Passport.Client> | null;
        tokens?: Array<Laravel.Passport.Token> | null;
        interests?: Array<EscolaLms.Categories.Models.Category> | null;
        notifications_count?: number | null;
        read_notifications_count?: number | null;
        unread_notifications_count?: number | null;
        roles_count?: number | null;
        permissions_count?: number | null;
        clients_count?: number | null;
        tokens_count?: number | null;
        interests_count?: number | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
        readonly onboarding_completed?: any;
    }

    export interface CourseAuthorPivot {
        id: number;
        author_id: number;
        course_id: number;
        created_at: string | null;
        updated_at: string | null;
        author?: EscolaLms.Core.Models.User | null;
        course?: EscolaLms.Courses.Models.Course | null;
    }

    export interface Course {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        title: string;
        summary: string | null;
        image_path: string | null;
        video_path: string | null;
        base_price: number | null;
        duration: string | null;
        subtitle: string | null;
        language: string | null;
        description: string | null;
        level: string | null;
        poster_path: string | null;
        active_from: string | null;
        active_to: string | null;
        hours_to_complete: number | null;
        purchasable: boolean;
        findable: boolean;
        scorm_sco_id: number | null;
        target_group: string | null;
        status: string;
        teaser_url: string | null;
        authors?: Array<EscolaLms.Courses.Models.User> | null;
        lessons?: Array<EscolaLms.Courses.Models.Lesson> | null;
        categories?: Array<EscolaLms.Categories.Models.Category> | null;
        tags?: Array<EscolaLms.Tags.Models.Tag> | null;
        users?: Array<EscolaLms.Courses.Models.User> | null;
        groups?: Array<EscolaLms.Courses.Models.Group> | null;
        topics?: Array<EscolaLms.Courses.Models.Topic> | null;
        scorm_sco?: Peopleaps.Scorm.Model.ScormScoModel | null;
        authors_count?: number | null;
        lessons_count?: number | null;
        categories_count?: number | null;
        tags_count?: number | null;
        users_count?: number | null;
        groups_count?: number | null;
        topics_count?: number | null;
        readonly author?: any | null;
        readonly author_id?: number | null;
        readonly image_url?: string | null;
        readonly video_url?: string | null;
        readonly poster_url?: string | null;
        readonly is_active?: boolean;
    }

    export interface Group {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        name: string;
        registerable: boolean;
        parent_id: number | null;
        courses?: Array<EscolaLms.Courses.Models.Course> | null;
        users?: Array<EscolaLms.Auth.Models.User> | null;
        parent?: EscolaLms.Auth.Models.Group | null;
        children?: Array<EscolaLms.Auth.Models.Group> | null;
        courses_count?: number | null;
        users_count?: number | null;
        children_count?: number | null;
        readonly name_with_breadcrumbs?: string;
    }

    export interface TopicResource {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        topic_id: number;
        path: string;
        name: string;
        topic?: EscolaLms.Courses.Models.Topic | null;
        readonly url?: any;
    }

    export interface H5PUserProgress {
        id: number;
        topic_id: number;
        user_id: number;
        event: string;
        data: string;
        created_at: string | null;
        updated_at: string | null;
        user?: EscolaLms.Courses.Tests.Models.User | null;
        topic?: EscolaLms.Courses.Models.Topic | null;
    }

    export interface Topic {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        title: string | null;
        lesson_id: number;
        topicable_id: number | null;
        topicable_type: string | null;
        order: number;
        active: boolean;
        preview: boolean;
        summary: string | null;
        json: string | null;
        can_skip: boolean;
        introduction: string | null;
        description: string | null;
        lesson?: EscolaLms.Courses.Models.Lesson | null;
        topicable?: any | null;
        progress?: Array<EscolaLms.Courses.Models.CourseProgress> | null;
        resources?: Array<EscolaLms.Courses.Models.TopicResource> | null;
        progress_count?: number | null;
        resources_count?: number | null;
        readonly storage_directory?: string;
        readonly course?: any | null;
        readonly is_active?: boolean;
    }

    export interface Lesson {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        title: string;
        duration: string | null;
        order: number;
        course_id: number;
        active: boolean;
        summary: string | null;
        course?: EscolaLms.Courses.Models.Course | null;
        topics?: Array<EscolaLms.Courses.Models.Topic> | null;
        topics_count?: number | null;
    }

    export interface CourseGroupPivot {
        course_id: number;
        group_id: number;
    }

    export interface CourseProgress {
        id: number;
        user_id: number;
        topic_id: number;
        status: boolean;
        finished_at: string | null;
        created_at: string | null;
        updated_at: string | null;
        seconds: number | null;
        started_at: string | null;
        user?: EscolaLms.Courses.Models.User | null;
        topic?: EscolaLms.Courses.Models.Topic | null;
    }

    export interface CourseUserPivot {
        id: number;
        user_id: number;
        course_id: number;
        created_at: string | null;
        updated_at: string | null;
        finished: boolean;
        deadline: string | null;
        user?: EscolaLms.Core.Models.User | null;
        course?: EscolaLms.Courses.Models.Course | null;
    }

}

declare namespace EscolaLms.Courses.Tests.Models.TopicContent {
    export interface ExampleTopicType {
        topic?: EscolaLms.Courses.Models.Topic | null;
    }

    export interface SecondExampleTopicType {
        topic?: EscolaLms.Courses.Models.Topic | null;
    }

}

declare namespace EscolaLms.Courses.Tests.Models {
    export interface User {
        id: number;
        first_name: string;
        last_name: string;
        email: string | null;
        phone: string | null;
        password: string | null;
        is_active: boolean;
        remember_token: string | null;
        password_reset_token: string | null;
        email_verified_at: string | null;
        path_avatar: string | null;
        gender: number | null;
        age: number | null;
        country: string | null;
        city: string | null;
        street: string | null;
        postcode: string | null;
        created_at: string | null;
        updated_at: string | null;
        points: number;
        notification_channels: string | null;
        notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        read_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        unread_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        roles?: Array<Spatie.Permission.Models.Role> | null;
        permissions?: Array<Spatie.Permission.Models.Permission> | null;
        clients?: Array<Laravel.Passport.Client> | null;
        tokens?: Array<Laravel.Passport.Token> | null;
        interests?: Array<EscolaLms.Categories.Models.Category> | null;
        settings?: Array<EscolaLms.Auth.Models.UserSetting> | null;
        groups?: Array<EscolaLms.Auth.Models.Group> | null;
        courses?: Array<EscolaLms.Courses.Models.Course> | null;
        authored_courses?: Array<EscolaLms.Courses.Models.Course> | null;
        notifications_count?: number | null;
        read_notifications_count?: number | null;
        unread_notifications_count?: number | null;
        roles_count?: number | null;
        permissions_count?: number | null;
        clients_count?: number | null;
        tokens_count?: number | null;
        interests_count?: number | null;
        settings_count?: number | null;
        groups_count?: number | null;
        courses_count?: number | null;
        authored_courses_count?: number | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
        readonly onboarding_completed?: any;
    }

}

declare namespace EscolaLms.CoursesImportExport.Models {
    export interface Course {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        title: string;
        summary: string | null;
        image_path: string | null;
        video_path: string | null;
        base_price: number | null;
        duration: string | null;
        subtitle: string | null;
        language: string | null;
        description: string | null;
        level: string | null;
        poster_path: string | null;
        active_from: string | null;
        active_to: string | null;
        hours_to_complete: number | null;
        purchasable: boolean;
        findable: boolean;
        scorm_sco_id: number | null;
        target_group: string | null;
        status: string;
        teaser_url: string | null;
        authors?: Array<EscolaLms.Courses.Models.User> | null;
        lessons?: Array<EscolaLms.Courses.Models.Lesson> | null;
        categories?: Array<EscolaLms.Categories.Models.Category> | null;
        tags?: Array<EscolaLms.Tags.Models.Tag> | null;
        users?: Array<EscolaLms.Courses.Models.User> | null;
        groups?: Array<EscolaLms.Courses.Models.Group> | null;
        topics?: Array<EscolaLms.Courses.Models.Topic> | null;
        scorm_sco?: Peopleaps.Scorm.Model.ScormScoModel | null;
        authors_count?: number | null;
        lessons_count?: number | null;
        categories_count?: number | null;
        tags_count?: number | null;
        users_count?: number | null;
        groups_count?: number | null;
        topics_count?: number | null;
        readonly author?: any | null;
        readonly author_id?: number | null;
        readonly image_url?: string | null;
        readonly video_url?: string | null;
        readonly poster_url?: string | null;
        readonly is_active?: boolean;
    }

}

declare namespace EscolaLms.CsvUsers.Models {
    export interface User {
        id: number;
        first_name: string;
        last_name: string;
        email: string | null;
        phone: string | null;
        password: string | null;
        is_active: boolean;
        remember_token: string | null;
        password_reset_token: string | null;
        email_verified_at: string | null;
        path_avatar: string | null;
        gender: number | null;
        age: number | null;
        country: string | null;
        city: string | null;
        street: string | null;
        postcode: string | null;
        created_at: string | null;
        updated_at: string | null;
        points: number;
        notification_channels: string | null;
        notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        read_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        unread_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        roles?: Array<Spatie.Permission.Models.Role> | null;
        permissions?: Array<Spatie.Permission.Models.Permission> | null;
        clients?: Array<Laravel.Passport.Client> | null;
        tokens?: Array<Laravel.Passport.Token> | null;
        interests?: Array<EscolaLms.Categories.Models.Category> | null;
        settings?: Array<EscolaLms.Auth.Models.UserSetting> | null;
        groups?: Array<EscolaLms.Auth.Models.Group> | null;
        notifications_count?: number | null;
        read_notifications_count?: number | null;
        unread_notifications_count?: number | null;
        roles_count?: number | null;
        permissions_count?: number | null;
        clients_count?: number | null;
        tokens_count?: number | null;
        interests_count?: number | null;
        settings_count?: number | null;
        groups_count?: number | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
        readonly onboarding_completed?: any;
    }

}

declare namespace EscolaLms.HeadlessH5P.Models {
    export interface H5PContentLibrary {
        content_id: number;
        library_id: number;
        dependency_type: string;
        weight: number;
        drop_css: boolean;
        library?: EscolaLms.HeadlessH5P.Models.H5PLibrary | null;
        content?: EscolaLms.HeadlessH5P.Models.H5PContent | null;
    }

    export interface H5PContent {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        user_id: number | null;
        title: string;
        library_id: number;
        parameters: string;
        nonce: string;
        filtered: string | null;
        slug: string | null;
        embed_type: string | null;
        disable: number;
        content_type: string | null;
        author: string | null;
        license: string | null;
        keywords: string | null;
        description: string | null;
        library?: EscolaLms.HeadlessH5P.Models.H5PLibrary | null;
        libraries?: Array<EscolaLms.HeadlessH5P.Models.H5PContentLibrary> | null;
        libraries_count?: number | null;
    }

    export interface H5PLibraryLanguage {
        library_id: number;
        language_code: string;
        translation: string;
        library?: EscolaLms.HeadlessH5P.Models.H5PLibrary | null;
    }

    export interface H5PLibrary {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        name: string;
        title: string;
        major_version: number;
        minor_version: number;
        patch_version: number;
        runnable: number;
        restricted: number;
        fullscreen: number;
        embed_types: string;
        preloaded_js: string | null;
        preloaded_css: string | null;
        drop_library_css: string | null;
        semantics: string;
        tutorial_url: string;
        has_icon: number;
        dependencies?: Array<EscolaLms.HeadlessH5P.Models.H5PLibraryDependency> | null;
        children?: Array<EscolaLms.HeadlessH5P.Models.H5PLibrary> | null;
        languages?: Array<EscolaLms.HeadlessH5P.Models.H5PLibraryLanguage> | null;
        dependencies_count?: number | null;
        children_count?: number | null;
        languages_count?: number | null;
        readonly library_id?: any;
        readonly machine_name?: string;
        readonly uber_name?: string;
    }

    export interface H5PLibraryDependency {
        library_id: number;
        required_library_id: number;
        dependency_type: string;
        library?: EscolaLms.HeadlessH5P.Models.H5PLibrary | null;
        required_library?: EscolaLms.HeadlessH5P.Models.H5PLibrary | null;
    }

    export interface H5PTempFile {
        id: number;
        path: string;
        nonce: string | null;
        created_at: string | null;
        updated_at: string | null;
    }

}

declare namespace EscolaLms.Notifications.Models {
    export interface User {
        id: number;
        first_name: string;
        last_name: string;
        email: string | null;
        phone: string | null;
        password: string | null;
        is_active: boolean;
        remember_token: string | null;
        password_reset_token: string | null;
        email_verified_at: string | null;
        path_avatar: string | null;
        gender: number | null;
        age: number | null;
        country: string | null;
        city: string | null;
        street: string | null;
        postcode: string | null;
        created_at: string | null;
        updated_at: string | null;
        points: number;
        notification_channels: string | null;
        roles?: Array<Spatie.Permission.Models.Role> | null;
        permissions?: Array<Spatie.Permission.Models.Permission> | null;
        clients?: Array<Laravel.Passport.Client> | null;
        tokens?: Array<Laravel.Passport.Token> | null;
        roles_count?: number | null;
        permissions_count?: number | null;
        clients_count?: number | null;
        tokens_count?: number | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
    }

    export interface DatabaseNotification {
        id: string;
        type: string;
        notifiable_type: string;
        notifiable_id: number;
        data: string;
        read_at: string | null;
        created_at: string | null;
        updated_at: string | null;
        event: string;
        notifiable?: any | null;
    }

}

declare namespace EscolaLms.Pages.Models {
    export interface Page {
        id: number;
        slug: string;
        title: string;
        author_id: number;
        content: string;
        active: boolean;
        author?: EscolaLms.Core.Models.User | null;
    }

}

declare namespace EscolaLms.Payments.Models {
    export interface Billable {
        id: number;
        first_name: string;
        last_name: string;
        email: string | null;
        phone: string | null;
        password: string | null;
        is_active: boolean;
        remember_token: string | null;
        password_reset_token: string | null;
        email_verified_at: string | null;
        path_avatar: string | null;
        gender: number | null;
        age: number | null;
        country: string | null;
        city: string | null;
        street: string | null;
        postcode: string | null;
        created_at: string | null;
        updated_at: string | null;
        points: number;
        notification_channels: string | null;
        notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        read_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        unread_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        roles?: Array<Spatie.Permission.Models.Role> | null;
        permissions?: Array<Spatie.Permission.Models.Permission> | null;
        clients?: Array<Laravel.Passport.Client> | null;
        tokens?: Array<Laravel.Passport.Token> | null;
        notifications_count?: number | null;
        read_notifications_count?: number | null;
        unread_notifications_count?: number | null;
        roles_count?: number | null;
        permissions_count?: number | null;
        clients_count?: number | null;
        tokens_count?: number | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
    }

    export interface Payment {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        amount: number;
        currency: string;
        description: string | null;
        order_id: string | null;
        status: string;
        payable_type: string | null;
        payable_id: number | null;
        billable_type: string | null;
        billable_id: number | null;
        payable?: any | null;
        billable?: any | null;
    }

}

declare namespace EscolaLms.Permissions.Models {
    export interface UserAdmin {
        notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        read_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        unread_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        roles?: Array<Spatie.Permission.Models.Role> | null;
        permissions?: Array<Spatie.Permission.Models.Permission> | null;
        clients?: Array<Laravel.Passport.Client> | null;
        tokens?: Array<Laravel.Passport.Token> | null;
        interests?: Array<EscolaLms.Categories.Models.Category> | null;
        settings?: Array<EscolaLms.Auth.Models.UserSetting> | null;
        groups?: Array<EscolaLms.Auth.Models.Group> | null;
        notifications_count?: number | null;
        read_notifications_count?: number | null;
        unread_notifications_count?: number | null;
        roles_count?: number | null;
        permissions_count?: number | null;
        clients_count?: number | null;
        tokens_count?: number | null;
        interests_count?: number | null;
        settings_count?: number | null;
        groups_count?: number | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
        readonly onboarding_completed?: any;
    }

}

declare namespace EscolaLms.Reports.Models {
    export interface Report {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        metric: string;
        measurements?: Array<EscolaLms.Reports.Models.Measurement> | null;
        measurements_count?: number | null;
    }

    export interface Measurement {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        report_id: number;
        label: string;
        value: number;
        measurable_type: string;
        measurable_id: number;
        report?: EscolaLms.Reports.Models.Report | null;
        measurable?: any | null;
    }

}

declare namespace EscolaLms.Settings.Models {
    export interface Config {
        id: number;
        value: string;
    }

    export interface Setting {
        id: number;
        key: string;
        group: string;
        value: string;
        public: boolean;
        enumerable: boolean;
        sort: number;
        type: any;
        created_at: string | null;
        updated_at: string | null;
        readonly data?: any;
    }

}

declare namespace EscolaLms.StationaryEvents.Models {
    export interface StationaryEventUserPivot {
        id: number;
        user_id: number;
        stationary_event_id: number;
        created_at: string | null;
        updated_at: string | null;
        user?: EscolaLms.Auth.Models.User | null;
        stationary_event?: EscolaLms.StationaryEvents.Models.StationaryEvent | null;
    }

    export interface StationaryEventAuthorPivot {
        author?: EscolaLms.Auth.Models.User | null;
        stationary_event?: EscolaLms.StationaryEvents.Models.StationaryEvent | null;
    }

    export interface StationaryEvent {
        id: number;
        name: string;
        description: string;
        started_at: string;
        finished_at: string;
        max_participants: number | null;
        place: string | null;
        program: string | null;
        created_at: string | null;
        updated_at: string | null;
        image_path: string | null;
        users?: Array<EscolaLms.Auth.Models.User> | null;
        authors?: Array<EscolaLms.Auth.Models.User> | null;
        categories?: Array<EscolaLms.Categories.Models.Category> | null;
        users_count?: number | null;
        authors_count?: number | null;
        categories_count?: number | null;
    }

}

declare namespace EscolaLms.Tags.Models {
    export interface Tag {
        id: number;
        title: string | null;
        morphable_type: string;
        morphable_id: number;
        created_at: string | null;
        updated_at: string | null;
        morphable?: any | null;
    }

}

declare namespace EscolaLms.Templates.Models {
    export interface TemplateSection {
        id: number;
        key: string;
        content: string;
        template_id: number;
        created_at: string | null;
        updated_at: string | null;
        template?: EscolaLms.Templates.Models.Template | null;
    }

    export interface Template {
        id: number;
        name: string;
        event: string;
        channel: string;
        created_at: string | null;
        updated_at: string | null;
        assignable_type: string | null;
        assignable_id: number | null;
        default: boolean;
        sections?: Array<EscolaLms.Templates.Models.TemplateSection> | null;
        templatables?: Array<EscolaLms.Templates.Models.Templatable> | null;
        sections_count?: number | null;
        templatables_count?: number | null;
        readonly is_valid?: boolean;
        readonly is_assignable?: boolean;
        readonly assignable_class?: string | null;
        readonly variable_class?: string | null;
    }

    export interface Templatable {
        id: number;
        channel: string;
        event: string;
        template_id: number;
        templatable_type: string;
        templatable_id: number;
        created_at: string | null;
        updated_at: string | null;
        template?: EscolaLms.Templates.Models.Template | null;
        templatable?: any | null;
    }

}

declare namespace EscolaLms.TemplatesPdf.Models {
    export interface FabricPDF {
        id: number;
        user_id: number;
        template_id: number;
        path: string | null;
        content: string;
        created_at: string | null;
        updated_at: string | null;
        title: string | null;
        user?: EscolaLms.Core.Models.User | null;
        template?: EscolaLms.Templates.Models.Template | null;
    }

}

declare namespace EscolaLms.TopicTypes.Models.TopicContent {
    export interface Audio {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: string;
        length: number;
        topic?: EscolaLms.Courses.Models.Topic | null;
        readonly url?: string;
    }

    export interface Image {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: string;
        width: number | null;
        height: number | null;
        topic?: EscolaLms.Courses.Models.Topic | null;
        readonly url?: string;
    }

    export interface H5P {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: number;
        topic?: EscolaLms.Courses.Models.Topic | null;
    }

    export interface OEmbed {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: string;
        topic?: EscolaLms.Courses.Models.Topic | null;
    }

    export interface Video {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: string;
        poster: string | null;
        width: number | null;
        height: number | null;
        topic?: EscolaLms.Courses.Models.Topic | null;
        readonly poster_url?: string | null;
        readonly url?: string;
    }

    export interface ScormSco {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: string;
        topic?: EscolaLms.Courses.Models.Topic | null;
    }

    export interface PDF {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: string;
        topic?: EscolaLms.Courses.Models.Topic | null;
        readonly url?: string;
    }

    export interface RichText {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: string;
        topic?: EscolaLms.Courses.Models.Topic | null;
    }

}

declare namespace EscolaLms.Questionnaire.Models {
    export interface QuestionAnswer {
        id: number;
        user_id: number;
        question_id: number;
        questionnaire_model_id: number;
        rate: number | null;
        created_at: string | null;
        updated_at: string | null;
        note: string | null;
        question?: EscolaLms.Questionnaire.Models.Question | null;
        user?: EscolaLms.Core.Models.User | null;
        questionnaire_model?: EscolaLms.Questionnaire.Models.QuestionnaireModel | null;
    }

    export interface Questionnaire {
        id: number;
        title: string;
        active: boolean;
        created_at: string | null;
        updated_at: string | null;
        questions?: Array<EscolaLms.Questionnaire.Models.Question> | null;
        questionnaire_models?: Array<EscolaLms.Questionnaire.Models.QuestionnaireModel> | null;
        questions_count?: number | null;
        questionnaire_models_count?: number | null;
    }

    export interface QuestionnaireModel {
        id: number;
        questionnaire_id: number;
        model_type_id: number;
        model_id: number;
        created_at: string | null;
        updated_at: string | null;
        questionnaire?: EscolaLms.Questionnaire.Models.Questionnaire | null;
        modelable_type?: EscolaLms.Questionnaire.Models.QuestionnaireModelType | null;
    }

    export interface Question {
        id: number;
        questionnaire_id: number;
        title: string;
        description: string;
        position: number;
        active: boolean;
        created_at: string | null;
        updated_at: string | null;
        type: string;
        questionnaire?: EscolaLms.Questionnaire.Models.Questionnaire | null;
        answers?: Array<EscolaLms.Questionnaire.Models.QuestionAnswer> | null;
        answers_count?: number | null;
    }

    export interface QuestionnaireModelType {
        id: number;
        title: string;
        model_class: string;
        created_at: string | null;
        updated_at: string | null;
    }

}

declare namespace EscolaLms.Consultations.Models {
    export interface ConsultationProposedTerm {
        id: number;
        consultation_id: number;
        proposed_at: string;
        created_at: string | null;
        updated_at: string | null;
        consultation?: EscolaLms.Consultations.Models.Consultation | null;
    }

    export interface Consultation {
        id: number;
        author_id: number | null;
        base_price: number | null;
        name: string;
        status: string;
        description: string;
        active_from: string | null;
        active_to: string | null;
        created_at: string | null;
        updated_at: string | null;
        duration: string | null;
        image_path: string | null;
        author?: EscolaLms.Auth.Models.User | null;
        order_items?: Array<EscolaLms.Cart.Models.OrderItem> | null;
        proposed_terms?: Array<EscolaLms.Consultations.Models.ConsultationProposedTerm> | null;
        categories?: Array<EscolaLms.Categories.Models.Category> | null;
        order_items_count?: number | null;
        proposed_terms_count?: number | null;
        categories_count?: number | null;
        readonly image_url?: string | null;
    }

    export interface ConsultationTerm {
        id: number;
        user_id: number;
        order_item_id: number;
        executed_at: string | null;
        executed_status: string | null;
        created_at: string | null;
        updated_at: string | null;
        order_item?: EscolaLms.Cart.Models.OrderItem | null;
        user?: EscolaLms.Auth.Models.User | null;
    }

}

declare namespace EscolaLms.AssignWithoutAccount.Models {
    export interface UserSubmission {
        id: number;
        access_url_id: number;
        email: string;
        frontend_url: string;
        status: number;
        created_at: string | null;
        updated_at: string | null;
        access_url?: EscolaLms.AssignWithoutAccount.Models.AccessUrl | null;
    }

    export interface AccessUrl {
        id: number;
        url: string;
        modelable_type: string;
        modelable_id: number;
        created_at: string | null;
        updated_at: string | null;
        modelable?: any | null;
        user_submissions?: Array<EscolaLms.AssignWithoutAccount.Models.UserSubmission> | null;
        user_submissions_count?: number | null;
    }

}

declare namespace EscolaLms.Video.Models {
    export interface Video {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: string;
        poster: string | null;
        width: number | null;
        height: number | null;
        topic?: EscolaLms.Courses.Models.Topic | null;
        readonly poster_url?: string | null;
        readonly url?: string;
    }

}
