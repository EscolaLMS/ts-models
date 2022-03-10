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
        notification_channels: Array<any> | any | null;
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
        client_id: string;
        name: string | null;
        scopes: string | null;
        revoked: boolean;
        created_at: string | null;
        updated_at: string | null;
        expires_at: string | null;
        client?: Laravel.Passport.Client | null;
        user?: App.Models.User | null;
    }

    export interface PersonalAccessClient {
        id: number;
        client_id: string;
        created_at: string | null;
        updated_at: string | null;
        client?: Laravel.Passport.Client | null;
    }

    export interface AuthCode {
        id: string;
        user_id: number;
        client_id: string;
        scopes: string | null;
        revoked: boolean;
        expires_at: string | null;
        client?: Laravel.Passport.Client | null;
    }

    export interface Client {
        id: string;
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

}

declare namespace Spatie.Permission.Models {
    export interface Role {
        id: number;
        name: string;
        guard_name: string;
        created_at: string | null;
        updated_at: string | null;
        users?: Array<App.Models.User> | null;
        users_count?: number | null;
    }

    export interface Permission {
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
    export interface ScormScoTrackingModel {
        sco?: Peopleaps.Scorm.Model.ScormScoModel | null;
    }

    export interface ScormScoModel {
        scorm?: Peopleaps.Scorm.Model.ScormModel | null;
        sco_trackings?: Array<Peopleaps.Scorm.Model.ScormScoTrackingModel> | null;
        sco_trackings_count?: number | null;
    }

    export interface ScormModel {
        scos?: Array<Peopleaps.Scorm.Model.ScormScoModel> | null;
        scos_count?: number | null;
    }

}

declare namespace EscolaLms.AssignWithoutAccount.Models {
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

}

declare namespace EscolaLms.Auth.Models {
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
        notification_channels: Array<any> | any | null;
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

}

declare namespace EscolaLms.Cart.Models {
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
        products?: Array<EscolaLms.Cart.Models.Product> | null;
        parent?: EscolaLms.Categories.Models.Category | null;
        children?: Array<EscolaLms.Categories.Models.Category> | null;
        users?: Array<App.Models.User> | null;
        courses?: Array<EscolaLms.Courses.Models.Course> | null;
        products_count?: number | null;
        children_count?: number | null;
        users_count?: number | null;
        courses_count?: number | null;
        readonly name_with_breadcrumbs?: string;
    }

    export interface Cart {
        id: number;
        user_id: number | null;
        created_at: string | null;
        updated_at: string | null;
        user?: EscolaLms.Cart.Models.User | null;
        items?: Array<EscolaLms.Cart.Models.CartItem> | null;
        items_count?: number | null;
        readonly subtotal?: number;
        readonly total?: number;
    }

    export interface Product {
        id: number;
        name: string;
        type: string;
        price: number;
        price_old: number | null;
        tax_rate: number;
        extra_fees: number;
        purchasable: boolean;
        teaser_url: string | null;
        description: string | null;
        poster_url: string | null;
        duration: string | null;
        limit_per_user: number | null;
        limit_total: number | null;
        created_at: string | null;
        updated_at: string | null;
        productables?: Array<EscolaLms.Cart.Models.ProductProductable> | null;
        users?: Array<EscolaLms.Cart.Models.User> | null;
        tags?: Array<EscolaLms.Tags.Models.Tag> | null;
        categories?: Array<EscolaLms.Cart.Models.Category> | null;
        productables_count?: number | null;
        users_count?: number | null;
        tags_count?: number | null;
        categories_count?: number | null;
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
        client_name: string | null;
        client_street: string | null;
        client_postal: string | null;
        client_city: string | null;
        client_country: string | null;
        client_company: string | null;
        client_taxid: string | null;
        items?: Array<EscolaLms.Cart.Models.OrderItem> | null;
        user?: EscolaLms.Cart.Models.User | null;
        items_count?: number | null;
        readonly quantity?: number;
        readonly status_name?: string;
    }

    export interface CartItem {
        id: number;
        cart_id: number;
        buyable_type: string;
        buyable_id: number;
        quantity: number;
        options: Array<any> | any | null;
        created_at: string | null;
        updated_at: string | null;
        buyable?: any | null;
        readonly subtotal?: any;
        readonly total?: any;
        readonly description?: any;
        readonly price?: any;
        readonly extra_fees?: any;
        readonly identifier?: string;
    }

    export interface OrderItem {
        id: number;
        order_id: number;
        buyable_type: string;
        buyable_id: number;
        quantity: number;
        options: Array<any> | any | null;
        created_at: string | null;
        updated_at: string | null;
        price: number | null;
        extra_fees: number;
        tax_rate: number;
        name: string | null;
        buyable?: any | null;
        order?: EscolaLms.Cart.Models.Order | null;
        readonly description?: string | null;
        readonly subtotal?: number;
        readonly total?: number;
        readonly tax?: number;
        readonly total_with_tax?: number;
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
        notification_channels: Array<any> | any | null;
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

    export interface ProductProductable {
        id: number;
        product_id: number;
        productable_type: string;
        productable_id: number;
        created_at: string | null;
        updated_at: string | null;
        product?: EscolaLms.Cart.Models.Product | null;
        productable?: any | null;
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

declare namespace EscolaLms.Consultations.Models {
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

    export interface ConsultationProposedTerm {
        id: number;
        consultation_id: number;
        proposed_at: string;
        created_at: string | null;
        updated_at: string | null;
        consultation?: EscolaLms.Consultations.Models.Consultation | null;
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
        notification_channels: Array<any> | any | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
    }

}

declare namespace EscolaLms.Courses.Models {
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

    export interface CourseGroupPivot {
        course_id: number;
        group_id: number;
    }

    export interface H5PUserProgress {
        id: number;
        topic_id: number;
        user_id: number;
        event: string;
        data: Array<any> | any;
        created_at: string | null;
        updated_at: string | null;
        user?: EscolaLms.Courses.Tests.Models.User | null;
        topic?: EscolaLms.Courses.Models.Topic | null;
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

    export interface CourseProgress {
        id: number;
        user_id: number;
        topic_id: number;
        status: number;
        finished_at: string | null;
        created_at: string | null;
        updated_at: string | null;
        seconds: number | null;
        started_at: string | null;
        user?: EscolaLms.Courses.Models.User | null;
        topic?: EscolaLms.Courses.Models.Topic | null;
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
        notification_channels: Array<any> | any | null;
        notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        read_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        unread_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        roles?: Array<Spatie.Permission.Models.Role> | null;
        permissions?: Array<Spatie.Permission.Models.Permission> | null;
        clients?: Array<Laravel.Passport.Client> | null;
        tokens?: Array<Laravel.Passport.Token> | null;
        interests?: Array<EscolaLms.Categories.Models.Category> | null;
        fields?: Array<EscolaLms.ModelFields.Models.Field> | null;
        notifications_count?: number | null;
        read_notifications_count?: number | null;
        unread_notifications_count?: number | null;
        roles_count?: number | null;
        permissions_count?: number | null;
        clients_count?: number | null;
        tokens_count?: number | null;
        interests_count?: number | null;
        fields_count?: number | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
        readonly onboarding_completed?: any;
    }

    export interface UserTopicTime {
        id: number;
        user_id: number;
        topic_id: number;
        created_at: string | null;
        updated_at: string | null;
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
        json: Array<any> | any | null;
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
        notification_channels: Array<any> | any | null;
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
        fields?: Array<EscolaLms.ModelFields.Models.Field> | null;
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
        fields_count?: number | null;
        courses_count?: number | null;
        authored_courses_count?: number | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
        readonly onboarding_completed?: any;
    }

}

declare namespace EscolaLms.Courses.Tests.Models.TopicContent {
    export interface SecondExampleTopicType {
        topic?: EscolaLms.Courses.Models.Topic | null;
    }

    export interface ExampleTopicType {
        topic?: EscolaLms.Courses.Models.Topic | null;
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
        notification_channels: Array<any> | any | null;
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
        fields?: Array<EscolaLms.ModelFields.Models.Field> | null;
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
        fields_count?: number | null;
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

    export interface H5PLibraryDependency {
        library_id: number;
        required_library_id: number;
        dependency_type: string;
        library?: EscolaLms.HeadlessH5P.Models.H5PLibrary | null;
        required_library?: EscolaLms.HeadlessH5P.Models.H5PLibrary | null;
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

    export interface H5PLibraryLanguage {
        library_id: number;
        language_code: string;
        translation: string;
        library?: EscolaLms.HeadlessH5P.Models.H5PLibrary | null;
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

    export interface H5PTempFile {
        id: number;
        path: string;
        nonce: string | null;
        created_at: string | null;
        updated_at: string | null;
    }

}

declare namespace EscolaLms.ModelFields.Models {
    export interface Metadata {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        name: string;
        type: string;
        rules: Array<any> | any | null;
        extra: Array<any> | any | null;
        default: string | null;
        class_type: string;
        visibility: number;
    }

    export interface Field {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        name: string;
        value: string;
        class_type: string;
        class_id: number;
    }

}

declare namespace EscolaLms.Notifications.Models {
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
        notification_channels: Array<any> | any | null;
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
        notification_channels: Array<any> | any | null;
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
        fields?: Array<EscolaLms.ModelFields.Models.Field> | null;
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
        fields_count?: number | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
        readonly onboarding_completed?: any;
    }

}

declare namespace EscolaLms.Reports.Models {
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

    export interface Report {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        metric: string;
        measurements?: Array<EscolaLms.Reports.Models.Measurement> | null;
        measurements_count?: number | null;
    }

}

declare namespace EscolaLms.Settings.Models {
    export interface Config {
        id: number;
        value: Array<any> | any;
    }

    export interface Setting {
        id: number;
        key: string;
        group: string;
        value: string;
        public: boolean;
        enumerable: boolean;
        sort: number;
        type: string;
        created_at: string | null;
        updated_at: string | null;
        readonly data?: any;
    }

}

declare namespace EscolaLms.StationaryEvents.Models {
    export interface StationaryEventAuthorPivot {
        author?: EscolaLms.Auth.Models.User | null;
        stationary_event?: EscolaLms.StationaryEvents.Models.StationaryEvent | null;
    }

    export interface StationaryEventUserPivot {
        id: number;
        user_id: number;
        stationary_event_id: number;
        created_at: string | null;
        updated_at: string | null;
        user?: EscolaLms.Auth.Models.User | null;
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

    export interface TemplateSection {
        id: number;
        key: string;
        content: string;
        template_id: number;
        created_at: string | null;
        updated_at: string | null;
        template?: EscolaLms.Templates.Models.Template | null;
    }

}

declare namespace EscolaLms.TemplatesPdf.Models {
    export interface FabricPDF {
        id: number;
        user_id: number;
        template_id: number;
        path: string | null;
        content: Array<any> | any;
        created_at: string | null;
        updated_at: string | null;
        title: string | null;
        user?: EscolaLms.Core.Models.User | null;
        template?: EscolaLms.Templates.Models.Template | null;
    }

}

declare namespace EscolaLms.TopicTypes.Models.TopicContent {
    export interface RichText {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: string;
        topic?: EscolaLms.Courses.Models.Topic | null;
    }

    export interface ScormSco {
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

    export interface Audio {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: string;
        length: number;
        topic?: EscolaLms.Courses.Models.Topic | null;
        readonly url?: string;
    }

    export interface PDF {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: string;
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

}

declare namespace EscolaLms.Questionnaire.Models {
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

    export interface QuestionnaireModelType {
        id: number;
        title: string;
        model_class: string;
        created_at: string | null;
        updated_at: string | null;
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

declare namespace EscolaLms.Auth.Http.Requests {
    export interface ForgotPasswordRequest {
        email: string;
        return_url: string;
    }

    export interface MyProfileRequest {}

    export interface RefreshTokenRequest {}

    export interface UploadAvatarRequest {
        avatar: Blob | File;
    }

    export interface RegisterRequest {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        password_confirmation: string;
        return_url: string;
        groups?: Array<number>;
        settings?: Array<{
            key: string;
            value: string | null;
        }>;
    }

    export interface ResendVerificationEmailRequest {
        email: string;
        return_url?: string | null;
    }

    export interface ProfileUpdateRequest {
        first_name?: string;
        last_name?: string;
        age?: number;
        gender?: any;
    }

    export interface LoginRequest {
        email: string;
        password: string;
        remember_me?: boolean;
    }

    export interface ResetPasswordRequest {
        email: string;
        token: string;
        password: string;
    }

    export interface ProfileUpdateAuthDataRequest {
        email: string;
    }

    export interface LogoutRequest {}

    export interface UpdateInterests {
        interests: Array<number>;
    }

    export interface SocialAuthRequest {
        provider: string;
        return_url?: string | null;
    }

    export interface UserSettingsUpdateRequest {}

    export interface ProfileUpdatePasswordRequest {
        current_password: string;
        new_password: string;
    }

}

declare namespace EscolaLms.Auth.Http.Requests.Admin {
    export interface UserAvatarDeleteRequest {}

    export interface UserGroupMemberAddRequest {}

    export interface UserGetRequest {}

    export interface UserGroupMemberRemoveRequest {}

    export interface UserInterestsUpdateRequest {
        interests: Array<number>;
    }

    export interface UserGroupListRequest {
        search?: string;
        parent_id?: number;
    }

    export interface UserGroupGetRequest {}

    export interface UsersListRequest {
        from?: string | null;
        to?: string | null;
    }

    export interface UserInterestAddRequest {}

    export interface UserInterestsListRequest {}

    export interface UserGroupCreateRequest {
        name: string;
        parent_id?: number | null;
        registerable?: boolean;
    }

    export interface UserGroupDeleteRequest {}

    export interface UserAvatarUploadRequest {}

    export interface UserUpdateRequest {
        first_name?: string;
        last_name?: string;
        email?: string;
        email_verified?: boolean;
        password?: string;
        roles?: any;
    }

    export interface UserCreateRequest {
        first_name: string;
        last_name: string;
        email: string;
        verified?: boolean;
        password: string;
        roles?: any;
        groups?: Array<number>;
        settings?: Array<{
            key: string;
            value: string | null;
        }>;
    }

    export interface UserInterestDeleteRequest {}

    export interface UserDeleteRequest {}

    export interface UserSettingsListRequest {}

    export interface UserSettingsUpdateRequest {
        settings: Array<{
            key: string;
            value: string | null;
        }>;
    }

    export interface UserGroupUpdateRequest {
        name: string;
        parent_id?: number | null;
        registerable?: boolean;
    }

    export interface UserAvatarDeleteRequest {}

    export interface UserGroupMemberAddRequest {}

    export interface UserGetRequest {}

    export interface UserGroupMemberRemoveRequest {}

    export interface UserInterestsUpdateRequest {
        interests: Array<number>;
    }

    export interface UserGroupListRequest {
        search?: string;
        parent_id?: number;
    }

    export interface UserGroupGetRequest {}

    export interface UsersListRequest {
        from?: string | null;
        to?: string | null;
    }

    export interface UserInterestAddRequest {}

    export interface UserInterestsListRequest {}

    export interface UserGroupCreateRequest {
        name: string;
        parent_id?: number | null;
        registerable?: boolean;
    }

    export interface UserGroupDeleteRequest {}

    export interface UserAvatarUploadRequest {}

    export interface UserUpdateRequest {
        first_name?: string;
        last_name?: string;
        email?: string;
        email_verified?: boolean;
        password?: string;
        roles?: any;
    }

    export interface UserCreateRequest {
        first_name: string;
        last_name: string;
        email: string;
        verified?: boolean;
        password: string;
        roles?: any;
        groups?: Array<number>;
        settings?: Array<{
            key: string;
            value: string | null;
        }>;
    }

    export interface UserInterestDeleteRequest {}

    export interface UserDeleteRequest {}

    export interface UserSettingsListRequest {}

    export interface UserSettingsUpdateRequest {
        settings: Array<{
            key: string;
            value: string | null;
        }>;
    }

    export interface UserGroupUpdateRequest {
        name: string;
        parent_id?: number | null;
        registerable?: boolean;
    }

}

declare namespace EscolaLms.Cart.Http.Requests {
    export interface ProductRemoveFromCartRequest {
        id: number;
    }

    export interface OrderSearchRequest {
        date_from?: string;
        date_to?: string;
        product_id?: number;
        productable_id?: number;
        productable_type?: string;
        per_page?: number;
        page?: number;
    }

    export interface ProductAddToCartRequest {
        id: number;
    }

    export interface ProductSearchRequest {
        productable_id?: number;
        productable_type?: string;
        name?: string;
        free?: boolean;
        per_page?: number;
        page?: number;
    }

    export interface OrderViewRequest {
        id: number;
    }

    export interface ProductableAddToCartRequest {
        productable_id: number;
        productable_type: string;
    }

    export interface ProductReadRequest {
        id: number;
    }

    export interface CartItemRemoveFromCartRequest {
        id: number;
    }

    export interface PaymentRequest {
        client_name?: string;
        client_street?: string;
        client_postal?: string;
        client_city?: string;
        client_country?: string;
        client_company?: string;
        client_taxid?: string;
    }

}

declare namespace EscolaLms.Cart.Http.Requests.Admin {
    export interface OrderSearchRequest {
        date_from?: string;
        date_to?: string;
        user_id?: number;
        product_id?: number;
        productable_id?: number;
        productable_type?: string;
        per_page?: number;
        page?: number;
    }

    export interface ProductableDetachRequest {
        productable_type: string;
        user_id: number;
    }

    export interface ProductSearchRequest {
        productable_id?: number;
        productable_type?: string;
        name?: string;
        free?: boolean;
        purchasable?: boolean;
        per_page?: number;
        page?: number;
    }

    export interface ProductableAttachRequest {
        productable_type: string;
        user_id: number;
    }

    export interface ProductAttachRequest {
        user_id: number;
    }

    export interface ProductReadRequest {
        id: number;
    }

    export interface ProductableRegisteredListRequest {}

    export interface ProductDeleteRequest {
        id: number;
    }

    export interface ProductCreateRequest {
        name: string;
        description?: string | null;
        price: number;
        price_old?: number | null;
        tax_rate?: number;
        extra_fees?: number;
        purchasable?: boolean;
        teaser_url?: string | null;
        poster?: Blob | File | null;
        duration?: string | null;
        limit_per_user?: number | null;
        limit_total?: number | null;
        productables?: Array<{
            id?: number;
            class?: string;
        }>;
        categories?: Array<number>;
    }

    export interface ProductUpdateRequest {
        name?: string;
        description?: string | null;
        price?: number;
        price_old?: number | null;
        tax_rate?: number;
        extra_fees?: number;
        purchasable?: boolean;
        teaser_url?: string | null;
        poster_url?: string | null;
        poster?: Blob | File | null;
        duration?: string | null;
        limit_per_user?: number | null;
        limit_total?: number | null;
        productables?: Array<{
            id?: number;
            class?: string;
        }>;
        categories?: Array<number>;
    }

    export interface ProductDetachRequest {
        user_id: number;
    }

    export interface OrderSearchRequest {
        date_from?: string;
        date_to?: string;
        user_id?: number;
        product_id?: number;
        productable_id?: number;
        productable_type?: string;
        per_page?: number;
        page?: number;
    }

    export interface ProductableDetachRequest {
        productable_type: string;
        user_id: number;
    }

    export interface ProductSearchRequest {
        productable_id?: number;
        productable_type?: string;
        name?: string;
        free?: boolean;
        purchasable?: boolean;
        per_page?: number;
        page?: number;
    }

    export interface ProductableAttachRequest {
        productable_type: string;
        user_id: number;
    }

    export interface ProductAttachRequest {
        user_id: number;
    }

    export interface ProductReadRequest {
        id: number;
    }

    export interface ProductableRegisteredListRequest {}

    export interface ProductDeleteRequest {
        id: number;
    }

    export interface ProductCreateRequest {
        name: string;
        description?: string | null;
        price: number;
        price_old?: number | null;
        tax_rate?: number;
        extra_fees?: number;
        purchasable?: boolean;
        teaser_url?: string | null;
        poster?: Blob | File | null;
        duration?: string | null;
        limit_per_user?: number | null;
        limit_total?: number | null;
        productables?: Array<{
            id?: number;
            class?: string;
        }>;
        categories?: Array<number>;
    }

    export interface ProductUpdateRequest {
        name?: string;
        description?: string | null;
        price?: number;
        price_old?: number | null;
        tax_rate?: number;
        extra_fees?: number;
        purchasable?: boolean;
        teaser_url?: string | null;
        poster_url?: string | null;
        poster?: Blob | File | null;
        duration?: string | null;
        limit_per_user?: number | null;
        limit_total?: number | null;
        productables?: Array<{
            id?: number;
            class?: string;
        }>;
        categories?: Array<number>;
    }

    export interface ProductDetachRequest {
        user_id: number;
    }

}

declare namespace EscolaLms.Categories.Http.Requests {
    export interface CategoryReadRequest {}

    export interface CategoryListRequest {}

    export interface CategoryCreateRequest {
        name: string;
    }

    export interface CategoryDeleteRequest {}

    export interface CategoryUpdateRequest {}

}

declare namespace EscolaLms.Consultations.Http.Requests {
    export interface ScheduleConsultationRequest {
        date_from?: string;
        date_to?: string;
        status?: string;
    }

    export interface ReportTermConsultationRequest {
        term: string;
    }

    export interface ShowAPIConsultationRequest {}

    export interface StoreConsultationRequest {
        base_price?: number;
        name: string;
        status: string;
        description: string;
        duration?: string | null;
        image?: Blob | File | null;
        author_id: number;
        active_from?: string;
        active_to?: string;
        proposed_dates?: Array<string>;
        categories?: Array<number>;
    }

    export interface UpdateConsultationRequest {
        base_price?: number;
        name?: string;
        status?: string;
        description?: string;
        duration?: string | null;
        image?: Blob | File | null;
        author_id?: number;
        active_from?: string;
        active_to?: string;
        proposed_dates?: Array<string>;
        categories?: Array<number>;
    }

    export interface ListAPIConsultationsRequest {
        name?: string;
        base_price?: number;
        status?: Array<string>;
    }

    export interface ListConsultationsRequest {
        name?: string;
        base_price?: number;
        status?: Array<string>;
    }

    export interface ShowConsultationRequest {}

}

declare namespace EscolaLms.Courses.Http.Requests {
    export interface DeleteCourseAPIRequest {}

    export interface SortAPIRequest {
        course_id: number;
        orders: Array<{
            0?: number;
            1?: number;
        }>;
    }

    export interface CreateTopicAPIRequest {
        title?: string;
        summary?: string;
        introduction?: string;
        description?: string;
        lesson_id: number;
        topicable_type?: string;
        order?: number;
        active?: boolean;
        preview?: boolean;
        can_skip?: boolean;
        json?: string;
    }

    export interface ListAccessAPIRequest {}

    export interface DeleteTopicAPIRequest {}

    export interface AddAccessAPIRequest {
        groups?: Array<number>;
        users?: Array<number>;
    }

    export interface CreateCourseAPIRequest {
        title: string;
        summary?: string | null;
        image_path?: string | null;
        video_path?: string | null;
        base_price?: number | null;
        duration?: string | null;
        image?: Blob | File;
        video?: Blob | File;
        status?: string;
        subtitle?: string | null;
        language?: string | null;
        description?: string | null;
        level?: string | null;
        poster_path?: string | null;
        poster?: Blob | File;
        active_from?: string | null;
        active_to?: string | null;
        hours_to_complete?: number | null;
        purchasable?: boolean;
        findable?: boolean;
        target_group?: string | null;
        teaser_url?: string | null;
        authors?: Array<number> | null;
    }

    export interface GetCourseAPIRequest {}

    export interface RemoveAccessAPIRequest {
        groups?: Array<number>;
        users?: Array<number>;
    }

    export interface ListCourseAPIRequest {}

    export interface UpdateCourseAPIRequest {
        title?: string;
        summary?: string | null;
        image_path?: string | null;
        video_path?: string | null;
        base_price?: number | null;
        duration?: string | null;
        image?: any;
        video?: any;
        status?: string;
        subtitle?: string | null;
        language?: string | null;
        description?: string | null;
        level?: string | null;
        poster_path?: string | null;
        poster?: any;
        active_from?: string | null;
        active_to?: string | null;
        hours_to_complete?: number | null;
        purchasable?: boolean;
        findable?: boolean;
        target_group?: string | null;
        teaser_url?: string | null;
        authors?: Array<number> | null;
    }

    export interface UpdateTopicAPIRequest {
        title?: string;
        summary?: string;
        introduction?: string;
        description?: string;
        lesson_id?: number;
        topicable_type?: string;
        order?: number;
        active?: boolean;
        preview?: boolean;
        can_skip?: boolean;
        json?: string;
    }

    export interface CourseProgressAPIRequest {
        progress?: Array<{
            topic_id?: number;
            status?: number;
        }>;
    }

    export interface UpdateLessonAPIRequest {
        title: string;
        duration?: string | null;
        order: number;
        summary?: string | null;
        active?: boolean;
    }

    export interface UploadTopicResourceAPIRequest {}

    export interface GetLessonAPIRequest {}

    export interface CloneLessonAPIRequest {}

    export interface DeleteTopicResourceAPIRequest {}

    export interface ListTopicResourceAPIRequest {}

    export interface SetAccessAPIRequest {
        groups?: Array<number>;
        users?: Array<number>;
    }

    export interface CreateLessonAPIRequest {
        title: string;
        duration?: string | null;
        order: number;
        summary?: string | null;
        active?: boolean;
    }

    export interface CloneTopicAPIRequest {}

    export interface DeleteLessonAPIRequest {}

    export interface AssignAuthorApiRequest {}

    export interface GetTopicAPIRequest {}

    export interface RenameTopicResourceAPIRequest {
        name: string;
    }

    export interface GetCourseCurriculumAPIRequest {}

}

declare namespace EscolaLms.CoursesImportExport.Http.Requests {
    export interface CloneCourseAPIRequest {}

    export interface GetCourseExportAPIRequest {}

    export interface CourseImportAPIRequest {
        file: Blob | File;
    }

}

declare namespace EscolaLms.CsvUsers.Http.Requests {
    export interface ExportUsersToCsvAPIRequest {
        from?: string | null;
        to?: string | null;
    }

    export interface ImportUsersFromCsvAPIRequest {
        file: Blob | File;
        return_url: string;
    }

}

declare namespace EscolaLms.Files.Http.Requests {
    export interface FileMoveRequest {
        source_url: string;
        destination_url: string;
    }

    export interface FileUploadRequest {}

    export interface FileListingRequest {
        page?: number | null;
        perPage?: number | null;
    }

    export interface FileFindByNameRequest {
        page?: number | null;
        perPage?: number | null;
    }

    export interface FileDeleteRequest {
        url: string;
    }

}

declare namespace EscolaLms.HeadlessH5P.Http.Requests {
    export interface ContentDeleteRequest {}

    export interface LibraryStoreRequest {}

    export interface ContentStoreRequest {
        title: string;
        library: string;
        params: string;
        nonce: string;
    }

    export interface ContentListRequest {
        title?: string | null;
        library_id?: number | null;
    }

    export interface LibraryDeleteRequest {}

    export interface ContentReadRequest {}

    export interface LibraryListRequest {}

    export interface FilesStoreRequest {
        field: string;
        contentId: string;
    }

}

declare namespace EscolaLms.ModelFields.Http.Requests {
    export interface MetadataCreateOrUpdateRequest {
        name: string;
        rules?: string;
        extra?: string;
        default?: string;
        class_type: string;
    }

    export interface MetadataDeleteRequest {
        name: string;
        class_type: string;
    }

    export interface MetadataListRequest {}

}

declare namespace EscolaLms.Notifications.Http.Requests {
    export interface NotificationsRequest {
        event?: string | null;
        include_read?: boolean;
        date_from?: string;
        date_to?: string;
    }

    export interface NotificationReadRequest {
        notification: string;
    }

    export interface NotificationEventsRequest {}

    export interface NotificationsUserRequest {
        user: number;
        event?: string | null;
        include_read?: boolean;
        date_from?: string;
        date_to?: string;
    }

}

declare namespace EscolaLms.Pages.Http.Requests {
    export interface PageCreateRequest {
        slug: string;
        title: string;
        content: string;
    }

    export interface PageDeleteRequest {
        id: number;
    }

    export interface PageUpdateRequest {
        id: number;
        slug?: string;
        title?: string;
        content?: string;
    }

    export interface PageFrontReadRequest {
        slug: string;
    }

    export interface PageListingRequest {}

    export interface PageReadRequest {
        id: number;
    }

    export interface PageFrontListingRequest {}

}

declare namespace EscolaLms.Payments.Http.Requests {
    export interface PaymentsSearchRequest {
        payable_id?: number;
        payable_type?: string;
        date_from?: string;
        date_to?: string;
        order_id?: string;
        per_page?: number;
    }

    export interface PaymentShowRequest {}

}

declare namespace EscolaLms.Payments.Http.Requests.Admin {
    export interface PaymentsSearchAdminRequest {
        payable_id?: number;
        payable_type?: string;
        billable_id?: number;
        billable_type?: string;
        date_from?: string;
        date_to?: string;
        order_id?: string;
        per_page?: number;
    }

    export interface PaymentsSearchAdminRequest {
        payable_id?: number;
        payable_type?: string;
        billable_id?: number;
        billable_type?: string;
        date_from?: string;
        date_to?: string;
        order_id?: string;
        per_page?: number;
    }

}

declare namespace EscolaLms.Permissions.Http.Requests {
    export interface RoleReadRequest {}

    export interface RoleListingRequest {}

    export interface RoleCreateRequest {
        name: string;
    }

    export interface RoleDeleteRequest {}

    export interface RoleUpdateRequest {
        permissions: Array<string>;
    }

}

declare namespace EscolaLms.Reports.Http.Requests.Admin {
    export interface ReportRequest {
        limit?: number;
        date?: string;
    }

    export interface CourseStatsRequest {
        course_id: number;
        stats?: Array<string>;
    }

    export interface ReportRequest {
        limit?: number;
        date?: string;
    }

    export interface CourseStatsRequest {
        course_id: number;
        stats?: Array<string>;
    }

}

declare namespace EscolaLms.Scorm.Http.Requests {
    export interface ScormReadRequest {}

    export interface GetScormTrackRequest {}

    export interface ScormListRequest {}

    export interface ScormDeleteRequest {}

    export interface ScormCreateRequest {
        zip: Blob | File;
    }

    export interface SetScormTrackRequest {}

}

declare namespace EscolaLms.Settings.Http.Requests.Admin {
    export interface SettingsDeleteRequest {}

    export interface SettingsCreateRequest {
        key: string;
        group: string;
        public?: boolean;
        enumerable?: boolean;
        sort?: number;
        value: string;
    }

    export interface SettingsReadRequest {}

    export interface SettingsUpdateRequest {
        key?: string;
        group?: string;
        public?: boolean;
        enumerable?: boolean;
        sort?: number;
        value?: string;
    }

    export interface ConfigListRequest {}

    export interface ConfigUpdateRequest {
        config: Array<{
            key: string;
            value?: any | null;
        }>;
    }

    export interface SettingsListRequest {}

}

declare namespace EscolaLms.StationaryEvents.Http.Requests {
    export interface CreateStationaryEventRequest {
        name: string;
        description: string;
        started_at: string;
        finished_at: string;
        base_price?: number | null;
        max_participants?: number | null;
        place?: string | null;
        program?: string | null;
        image?: Blob | File | null;
        authors?: Array<number> | null;
        categories?: Array<number>;
    }

    export interface DeleteStationaryEventRequest {}

    export interface ReadStationaryEventPublicRequest {}

    export interface UpdateStationaryEventRequest {
        name?: string | null;
        description?: string | null;
        started_at?: string | null;
        finished_at?: string | null;
        base_price?: number | null;
        max_participants?: number | null;
        place?: string | null;
        program?: string | null;
        image?: Blob | File | null;
        image_path?: string | null;
        authors?: Array<number> | null;
        categories?: Array<number>;
    }

    export interface ReadStationaryEventRequest {}

    export interface ListStationaryEventRequest {}

}

declare namespace EscolaLms.Tags.Http.Request {
    export interface TagRemoveRequest {
        tags: any;
    }

    export interface TagInsertRequest {
        model_type: string;
        model_id: number;
        tags: any;
    }

}

declare namespace EscolaLms.Templates.Http.Requests {
    export interface TemplateAssignRequest {}

    export interface TemplateListAssignableRequest {
        assignable_class?: string;
    }

    export interface TemplateAssignedRequest {
        assignable_class: string;
    }

    export interface TemplateListingRequest {
        event?: string;
        channel?: string;
    }

    export interface TemplateUpdateRequest {
        name?: string;
        channel?: string;
        event?: string;
        sections?: Array<{
            key?: string;
            content?: string;
        }>;
    }

    export interface TemplateCreateRequest {
        name: string;
        channel: string;
        event: string;
        sections: Array<{
            key?: string;
            content?: string;
        }>;
    }

    export interface TemplateDeleteRequest {}

    export interface TemplateReadRequest {}

}

declare namespace EscolaLms.TemplatesPdf.Http.Requests {
    export interface PdfReadRequest {}

    export interface PdfListingRequest {}

    export interface PdfListingAdminRequest {
        user_id?: number;
    }

}
