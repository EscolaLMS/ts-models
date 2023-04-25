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
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
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
    export interface AuthCode {
        id: string;
        user_id: number;
        client_id: number;
        scopes: string | null;
        revoked: boolean;
        expires_at: string | null;
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

    export interface PersonalAccessClient {
        id: number;
        client_id: number;
        created_at: string | null;
        updated_at: string | null;
        client?: Laravel.Passport.Client | null;
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
    export interface ScormModel {
        scos?: Array<Peopleaps.Scorm.Model.ScormScoModel> | null;
        scos_count?: number | null;
    }

    export interface ScormScoTrackingModel {
        sco?: Peopleaps.Scorm.Model.ScormScoModel | null;
    }

    export interface ScormScoModel {
        scorm?: Peopleaps.Scorm.Model.ScormModel | null;
        sco_trackings?: Array<Peopleaps.Scorm.Model.ScormScoTrackingModel> | null;
        sco_trackings_count?: number | null;
    }

}

declare namespace EscolaLms.AssignWithoutAccount.Models {
    export interface UserSubmission {
        id: number;
        email: string;
        status: string;
        created_at: string | null;
        updated_at: string | null;
        morphable_type: string;
        morphable_id: number;
        morphable?: any | null;
    }

}

declare namespace EscolaLms.Auth.Models {
    export interface PreUser {
        id: number;
        first_name: string | null;
        last_name: string | null;
        token: string;
        provider: string;
        provider_id: string;
        created_at: string | null;
        updated_at: string | null;
    }

    export interface UserSetting {
        user_id: number;
        key: string;
        value: string | null;
        user?: EscolaLms.Auth.Models.User | null;
    }

    export interface GroupUser {
        group_id: number;
        user_id: number;
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
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
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

    export interface SocialAccount {
        id: number;
        user_id: number;
        provider: string;
        provider_id: string;
        created_at: string | null;
        updated_at: string | null;
        user?: EscolaLms.Auth.Models.User | null;
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

    export interface ProductUser {
        id: number;
        product_id: number;
        user_id: number;
        created_at: string | null;
        updated_at: string | null;
        quantity: number;
        product?: EscolaLms.Cart.Models.Product | null;
        user?: EscolaLms.Cart.Models.User | null;
    }

    export interface ProductProductable {
        id: number;
        product_id: number;
        productable_type: string;
        productable_id: number;
        created_at: string | null;
        updated_at: string | null;
        quantity: number;
        product?: EscolaLms.Cart.Models.Product | null;
        productable?: any | null;
        readonly canonical_productable?: any | null;
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
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
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

    export interface CartItem {
        id: number;
        cart_id: number;
        buyable_type: string;
        buyable_id: number;
        quantity: number;
        options: string | null;
        created_at: string | null;
        updated_at: string | null;
        cart?: EscolaLms.Cart.Models.Cart | null;
        buyable?: any | null;
        readonly subtotal?: any;
        readonly total?: any;
        readonly description?: any;
        readonly price?: any;
        readonly extra_fees?: any;
        readonly identifier?: string;
    }

    export interface Cart {
        id: number;
        user_id: number | null;
        created_at: string | null;
        updated_at: string | null;
        coupon_id: number | null;
        user?: EscolaLms.Cart.Models.User | null;
        items?: Array<EscolaLms.Cart.Models.CartItem> | null;
        items_count?: number | null;
        readonly cart_manager?: any;
        readonly subtotal?: number;
        readonly total?: number;
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

    export interface Order {
        id: number;
        user_id: number | null;
        status: number;
        total: number;
        subtotal: number;
        tax: number;
        created_at: string | null;
        updated_at: string | null;
        coupon_id: number | null;
        discount: number;
        client_name: string | null;
        client_street: string | null;
        client_postal: string | null;
        client_city: string | null;
        client_country: string | null;
        client_company: string | null;
        client_taxid: string | null;
        client_email: string | null;
        client_street_number: string | null;
        items?: Array<EscolaLms.Cart.Models.OrderItem> | null;
        user?: EscolaLms.Core.Models.User | null;
        items_count?: number | null;
        readonly quantity?: number;
        readonly status_name?: string;
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
        related_products?: Array<EscolaLms.Cart.Models.Product> | null;
        productables_count?: number | null;
        users_count?: number | null;
        tags_count?: number | null;
        categories_count?: number | null;
        related_products_count?: number | null;
        readonly poster_url_or_productable_thumbnail?: string | null;
        readonly poster_absolute_url?: string | null;
        readonly authors?: any;
        readonly calculated_duration?: number;
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

declare namespace EscolaLms.Webinar.Models {
    export interface WebinarUserPivot {
        id: number;
        user_id: number;
        webinar_id: number;
        created_at: string | null;
        updated_at: string | null;
        user?: EscolaLms.Core.Models.User | null;
        webinar?: EscolaLms.Webinar.Models.Webinar | null;
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
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
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

    export interface Webinar {
        id: number;
        name: string;
        status: string;
        description: string;
        duration: string | null;
        active_from: string | null;
        active_to: string | null;
        created_at: string | null;
        updated_at: string | null;
        image_path: string | null;
        yt_id: string | null;
        yt_url: string | null;
        yt_stream_url: string | null;
        yt_stream_key: string | null;
        short_desc: string | null;
        agenda: string | null;
        reminder_status: string | null;
        logotype_path: string | null;
        yt_autostart_status: boolean | null;
        trainers?: Array<EscolaLms.Webinar.Models.User> | null;
        tags?: Array<EscolaLms.Tags.Models.Tag> | null;
        users?: Array<EscolaLms.Webinar.Models.User> | null;
        trainers_count?: number | null;
        tags_count?: number | null;
        users_count?: number | null;
        readonly image_url?: string;
        readonly logotype_url?: string;
    }

}

declare namespace EscolaLms.Consultations.Models {
    export interface Consultation {
        id: number;
        author_id: number | null;
        name: string;
        status: string;
        description: string;
        active_from: string | null;
        active_to: string | null;
        created_at: string | null;
        updated_at: string | null;
        duration: string | null;
        image_path: string | null;
        short_desc: string | null;
        logotype_path: string | null;
        author?: EscolaLms.Consultations.Models.User | null;
        users?: Array<EscolaLms.Consultations.Models.User> | null;
        proposed_terms?: Array<EscolaLms.Consultations.Models.ConsultationProposedTerm> | null;
        categories?: Array<EscolaLms.Categories.Models.Category> | null;
        terms?: Array<EscolaLms.Consultations.Models.ConsultationUserPivot> | null;
        users_count?: number | null;
        proposed_terms_count?: number | null;
        categories_count?: number | null;
        terms_count?: number | null;
        readonly image_url?: string;
        readonly logotype_url?: string;
    }

    export interface ConsultationProposedTerm {
        id: number;
        consultation_id: number;
        proposed_at: string;
        created_at: string | null;
        updated_at: string | null;
        consultation?: EscolaLms.Consultations.Models.Consultation | null;
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
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
        categories?: Array<EscolaLms.Categories.Models.Category> | null;
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
        categories_count?: number | null;
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

    export interface ConsultationUserPivot {
        id: number;
        user_id: number;
        consultation_id: number;
        created_at: string | null;
        updated_at: string | null;
        executed_at: string | null;
        executed_status: string | null;
        reminder_status: string | null;
        product_id: number | null;
        user?: EscolaLms.Consultations.Models.User | null;
        consultation?: EscolaLms.Consultations.Models.Consultation | null;
    }

}

declare namespace EscolaLms.ConsultationAccess.Models {
    export interface ConsultationAccessEnquiry {
        id: number;
        consultation_id: number;
        user_id: number;
        status: string;
        created_at: string | null;
        updated_at: string | null;
        description: string | null;
        consultation_user_id: number | null;
        meeting_link: string | null;
        related_type: string | null;
        related_id: number | null;
        title: string | null;
        consultation?: EscolaLms.ConsultationAccess.Models.Consultation | null;
        user?: EscolaLms.Auth.Models.User | null;
        consultation_user?: EscolaLms.Consultations.Models.ConsultationUserPivot | null;
        consultation_access_enquiry_proposed_terms?: Array<EscolaLms.ConsultationAccess.Models.ConsultationAccessEnquiryProposedTerm> | null;
        related?: any | null;
        consultation_access_enquiry_proposed_terms_count?: number | null;
    }

    export interface Consultation {
        id: number;
        author_id: number | null;
        name: string;
        status: string;
        description: string;
        active_from: string | null;
        active_to: string | null;
        created_at: string | null;
        updated_at: string | null;
        duration: string | null;
        image_path: string | null;
        short_desc: string | null;
        logotype_path: string | null;
        author?: EscolaLms.Consultations.Models.User | null;
        users?: Array<EscolaLms.Consultations.Models.User> | null;
        proposed_terms?: Array<EscolaLms.Consultations.Models.ConsultationProposedTerm> | null;
        categories?: Array<EscolaLms.Categories.Models.Category> | null;
        terms?: Array<EscolaLms.Consultations.Models.ConsultationUserPivot> | null;
        users_count?: number | null;
        proposed_terms_count?: number | null;
        categories_count?: number | null;
        terms_count?: number | null;
        readonly image_url?: string;
        readonly logotype_url?: string;
    }

    export interface ConsultationAccessEnquiryProposedTerm {
        id: number;
        consultation_access_enquiry_id: number;
        proposed_at: string;
        created_at: string | null;
        updated_at: string | null;
        consultation_access_enquiry?: EscolaLms.ConsultationAccess.Models.ConsultationAccessEnquiry | null;
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
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
    }

}

declare namespace EscolaLms.Courses.Models {
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
        parent_lesson_id: number | null;
        course?: EscolaLms.Courses.Models.Course | null;
        topics?: Array<EscolaLms.Courses.Models.Topic> | null;
        parent_lesson?: EscolaLms.Courses.Models.Lesson | null;
        lessons?: Array<EscolaLms.Courses.Models.Lesson> | null;
        topics_count?: number | null;
        lessons_count?: number | null;
    }

    export interface Course {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        title: string;
        summary: string | null;
        image_path: string | null;
        video_path: string | null;
        duration: string | null;
        subtitle: string | null;
        language: string | null;
        description: string | null;
        level: string | null;
        poster_path: string | null;
        active_from: string | null;
        active_to: string | null;
        hours_to_complete: number | null;
        findable: boolean;
        scorm_sco_id: number | null;
        target_group: string | null;
        status: string;
        teaser_url: string | null;
        public: boolean;
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
        readonly is_published?: boolean;
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
        json: string | null;
        can_skip: boolean;
        introduction: string | null;
        description: string | null;
        duration: string | null;
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
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
        categories?: Array<EscolaLms.Categories.Models.Category> | null;
        notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        read_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        unread_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        roles?: Array<Spatie.Permission.Models.Role> | null;
        permissions?: Array<Spatie.Permission.Models.Permission> | null;
        clients?: Array<Laravel.Passport.Client> | null;
        tokens?: Array<Laravel.Passport.Token> | null;
        interests?: Array<EscolaLms.Categories.Models.Category> | null;
        fields?: Array<EscolaLms.ModelFields.Models.Field> | null;
        categories_count?: number | null;
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

    export interface CourseAuthorPivot {
        id: number;
        author_id: number;
        course_id: number;
        created_at: string | null;
        updated_at: string | null;
        author?: EscolaLms.Core.Models.User | null;
        course?: EscolaLms.Courses.Models.Course | null;
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

    export interface CourseGroupPivot {
        course_id: number;
        group_id: number;
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
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
        categories?: Array<EscolaLms.Categories.Models.Category> | null;
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
        categories_count?: number | null;
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

declare namespace EscolaLms.CourseAccess.Models {
    export interface Course {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        title: string;
        summary: string | null;
        image_path: string | null;
        video_path: string | null;
        duration: string | null;
        subtitle: string | null;
        language: string | null;
        description: string | null;
        level: string | null;
        poster_path: string | null;
        active_from: string | null;
        active_to: string | null;
        hours_to_complete: number | null;
        findable: boolean;
        scorm_sco_id: number | null;
        target_group: string | null;
        status: string;
        teaser_url: string | null;
        public: boolean;
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
        readonly is_published?: boolean;
        readonly is_active?: boolean;
    }

    export interface CourseAccessEnquiry {
        id: number;
        course_id: number;
        user_id: number;
        status: string;
        data: string | null;
        created_at: string | null;
        updated_at: string | null;
        course?: EscolaLms.CourseAccess.Models.Course | null;
        user?: EscolaLms.Core.Models.User | null;
    }

}

declare namespace EscolaLms.Bookmarks.Models {
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
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
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

    export interface Bookmark {
        id: number;
        value: string | null;
        bookmarkable_type: string;
        bookmarkable_id: number;
        user_id: number;
        created_at: string | null;
        updated_at: string | null;
        user?: EscolaLms.Bookmarks.Models.User | null;
        bookmarkable?: any | null;
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
        duration: string | null;
        subtitle: string | null;
        language: string | null;
        description: string | null;
        level: string | null;
        poster_path: string | null;
        active_from: string | null;
        active_to: string | null;
        hours_to_complete: number | null;
        findable: boolean;
        scorm_sco_id: number | null;
        target_group: string | null;
        status: string;
        teaser_url: string | null;
        public: boolean;
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
        readonly is_published?: boolean;
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
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
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
        id: number;
        library?: EscolaLms.HeadlessH5P.Models.H5PLibrary | null;
        content?: EscolaLms.HeadlessH5P.Models.H5PContent | null;
    }

    export interface H5PLibraryLanguage {
        library_id: number;
        language_code: string;
        translation: string;
        id: number;
        library?: EscolaLms.HeadlessH5P.Models.H5PLibrary | null;
    }

    export interface H5PContent {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        user_id: number | null;
        library_id: number;
        parameters: Array<any> | any;
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
        uuid: string | null;
        user?: EscolaLms.Core.Models.User | null;
        library?: EscolaLms.HeadlessH5P.Models.H5PLibrary | null;
        libraries?: Array<EscolaLms.HeadlessH5P.Models.H5PContentLibrary> | null;
        libraries_count?: number | null;
        readonly title?: any;
        readonly params?: any;
        readonly metadata?: any;
    }

    export interface H5pLibrariesHubCache {
        id: number;
        machine_name: string;
        major_version: number;
        minor_version: number;
        patch_version: number;
        h5p_major_version: number | null;
        h5p_minor_version: number | null;
        title: string;
        summary: string;
        description: string;
        icon: string;
        created_at: number;
        updated_at: number;
        is_recommended: number;
        popularity: number;
        screenshots: string | null;
        license: string | null;
        example: string;
        tutorial: string | null;
        keywords: string | null;
        categories: string | null;
        owner: string | null;
    }

    export interface H5PLibraryDependency {
        library_id: number;
        required_library_id: number;
        dependency_type: string;
        id: number;
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
        add_to: string | null;
        dependencies?: Array<EscolaLms.HeadlessH5P.Models.H5PLibraryDependency> | null;
        required_libraries?: Array<EscolaLms.HeadlessH5P.Models.H5PLibraryDependency> | null;
        languages?: Array<EscolaLms.HeadlessH5P.Models.H5PLibraryLanguage> | null;
        contents?: Array<EscolaLms.HeadlessH5P.Models.H5PContent> | null;
        dependencies_count?: number | null;
        languages_count?: number | null;
        readonly library_id?: any;
        readonly machine_name?: string;
        readonly directory_name?: string;
        readonly main_version?: string;
        readonly version?: string;
        readonly uber_name?: string;
        readonly contents_count?: number;
        readonly required_libraries_count?: number;
    }

    export interface H5PTempFile {
        id: number;
        path: string;
        nonce: string | null;
        created_at: string | null;
        updated_at: string | null;
        content?: EscolaLms.HeadlessH5P.Models.H5PContent | null;
    }

}

declare namespace EscolaLms.ModelFields.Models {
    export interface Field {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        name: string;
        value: string;
        class_type: string;
        class_id: number;
    }

    export interface Metadata {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        name: string;
        type: string;
        rules: string | null;
        extra: string | null;
        default: string | null;
        class_type: string;
        visibility: number;
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
        notification_channels: string | null;
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
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
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
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
        user_id: number | null;
        driver: string | null;
        gateway_order_id: string | null;
        redirect_url: string | null;
        payable?: any | null;
        user?: EscolaLms.Payments.Models.User | null;
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
    export interface Setting {
        id: number;
        key: string;
        group: string;
        value: string;
        public: boolean;
        enumerable: boolean;
        sort: number;
        type: string | null;
        created_at: string | null;
        updated_at: string | null;
        readonly data?: any;
    }

    export interface Config {
        id: number;
        value: string;
    }

}

declare namespace EscolaLms.StationaryEvents.Models {
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
        short_desc: string | null;
        status: string | null;
        agenda: string | null;
        users?: Array<EscolaLms.Auth.Models.User> | null;
        authors?: Array<EscolaLms.Auth.Models.User> | null;
        categories?: Array<EscolaLms.Categories.Models.Category> | null;
        users_count?: number | null;
        authors_count?: number | null;
        categories_count?: number | null;
        readonly in_coming?: boolean;
        readonly is_ended?: boolean;
        readonly is_started?: boolean;
    }

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

declare namespace EscolaLms.Tasks.Models {
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
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
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

    export interface Task {
        id: number;
        title: string;
        due_date: string | null;
        completed_at: string | null;
        user_id: number;
        created_by_id: number;
        related_type: string | null;
        related_id: number | null;
        created_at: string | null;
        updated_at: string | null;
        description: string | null;
        type: string | null;
        user?: EscolaLms.Tasks.Models.User | null;
        created_by?: EscolaLms.Tasks.Models.User | null;
        related?: any | null;
        task_notes?: Array<EscolaLms.Tasks.Models.TaskNote> | null;
        task_notes_count?: number | null;
    }

    export interface TaskNote {
        id: number;
        task_id: number;
        user_id: number;
        note: string;
        created_at: string | null;
        updated_at: string | null;
        user?: EscolaLms.Tasks.Models.User | null;
        task?: EscolaLms.Tasks.Models.Task | null;
    }

}

declare namespace EscolaLms.Templates.Models {
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
        content: string;
        created_at: string | null;
        updated_at: string | null;
        title: string | null;
        vars: string | null;
        user?: EscolaLms.Core.Models.User | null;
        template?: EscolaLms.Templates.Models.Template | null;
    }

}

declare namespace EscolaLms.TopicTypes.Models.TopicContent {
    export interface Cmi5Au {
        id: number;
        value: string;
        created_at: string | null;
        updated_at: string | null;
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

    export interface H5P {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: number;
        topic?: EscolaLms.Courses.Models.Topic | null;
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

    export interface OEmbed {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: string;
        topic?: EscolaLms.Courses.Models.Topic | null;
    }

    export interface RichText {
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

}

declare namespace EscolaLms.TopicTypeGift.Models {
    export interface QuizAttempt {
        id: number;
        started_at: string;
        end_at: string | null;
        user_id: number;
        topic_gift_quiz_id: number;
        created_at: string | null;
        updated_at: string | null;
        gift_quiz?: EscolaLms.TopicTypeGift.Models.GiftQuiz | null;
        user?: EscolaLms.Auth.Models.User | null;
        answers?: Array<EscolaLms.TopicTypeGift.Models.AttemptAnswer> | null;
        answers_count?: number | null;
    }

    export interface AttemptAnswer {
        id: number;
        topic_gift_quiz_attempt_id: number;
        topic_gift_question_id: number;
        answer: string;
        feedback: string | null;
        score: number;
        created_at: string | null;
        updated_at: string | null;
        question?: EscolaLms.TopicTypeGift.Models.GiftQuestion | null;
        attempt?: EscolaLms.TopicTypeGift.Models.QuizAttempt | null;
    }

    export interface GiftQuestion {
        id: number;
        topic_gift_quiz_id: number;
        value: string;
        created_at: string | null;
        updated_at: string | null;
        type: string | null;
        score: number;
        order: number;
        gift_quiz?: EscolaLms.TopicTypeGift.Models.GiftQuiz | null;
    }

    export interface GiftQuiz {
        id: number;
        value: string;
        created_at: string | null;
        updated_at: string | null;
        max_attempts: number | null;
        max_execution_time: number | null;
        questions?: Array<EscolaLms.TopicTypeGift.Models.GiftQuestion> | null;
        topic?: EscolaLms.Courses.Models.Topic | null;
        questions_count?: number | null;
    }

}

declare namespace EscolaLms.TopicTypeProject.Models {
    export interface Project {
        id: number;
        created_at: string | null;
        updated_at: string | null;
        value: string;
        notify_users: string | null;
        topic?: EscolaLms.Courses.Models.Topic | null;
    }

    export interface ProjectSolution {
        id: number;
        topic_id: number;
        user_id: number;
        path: string;
        created_at: string | null;
        updated_at: string | null;
        topic?: EscolaLms.Courses.Models.Topic | null;
        user?: EscolaLms.Auth.Models.User | null;
    }

}

declare namespace EscolaLms.Questionnaire.Models {
    export interface QuestionnaireModelType {
        id: number;
        title: string;
        model_class: string;
        created_at: string | null;
        updated_at: string | null;
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
        public_answers: boolean;
        questionnaire?: EscolaLms.Questionnaire.Models.Questionnaire | null;
        answers?: Array<EscolaLms.Questionnaire.Models.QuestionAnswer> | null;
        answers_count?: number | null;
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
        visible_on_front: boolean;
        question?: EscolaLms.Questionnaire.Models.Question | null;
        user?: EscolaLms.Core.Models.User | null;
        questionnaire_model?: EscolaLms.Questionnaire.Models.QuestionnaireModel | null;
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

declare namespace EscolaLms.Vouchers.Models {
    export interface CouponCategory {
        id: number;
        coupon_id: number;
        category_id: number;
        excluded: boolean;
        created_at: string | null;
        updated_at: string | null;
        coupon?: EscolaLms.Vouchers.Models.Coupon | null;
        category?: EscolaLms.Vouchers.Models.Category | null;
    }

    export interface Coupon {
        id: number;
        name: string | null;
        code: string;
        active: boolean;
        type: string;
        active_from: string | null;
        active_to: string | null;
        limit_usage: number | null;
        limit_per_user: number | null;
        min_cart_price: number | null;
        max_cart_price: number | null;
        amount: number;
        created_at: string | null;
        updated_at: string | null;
        exclude_promotions: boolean;
        users?: Array<EscolaLms.Vouchers.Models.User> | null;
        products?: Array<EscolaLms.Vouchers.Models.Product> | null;
        included_products?: Array<EscolaLms.Vouchers.Models.Product> | null;
        excluded_products?: Array<EscolaLms.Vouchers.Models.Product> | null;
        categories?: Array<EscolaLms.Vouchers.Models.Category> | null;
        included_categories?: Array<EscolaLms.Vouchers.Models.Category> | null;
        excluded_categories?: Array<EscolaLms.Vouchers.Models.Category> | null;
        carts?: Array<EscolaLms.Vouchers.Models.Cart> | null;
        orders?: Array<EscolaLms.Vouchers.Models.Order> | null;
        users_count?: number | null;
        products_count?: number | null;
        included_products_count?: number | null;
        excluded_products_count?: number | null;
        categories_count?: number | null;
        included_categories_count?: number | null;
        excluded_categories_count?: number | null;
        carts_count?: number | null;
        orders_count?: number | null;
        readonly value_string?: string;
    }

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
        coupons?: Array<EscolaLms.Vouchers.Models.Coupon> | null;
        products?: Array<EscolaLms.Cart.Models.Product> | null;
        parent?: EscolaLms.Categories.Models.Category | null;
        children?: Array<EscolaLms.Categories.Models.Category> | null;
        users?: Array<App.Models.User> | null;
        courses?: Array<EscolaLms.Courses.Models.Course> | null;
        coupons_count?: number | null;
        products_count?: number | null;
        children_count?: number | null;
        users_count?: number | null;
        courses_count?: number | null;
        readonly name_with_breadcrumbs?: string;
    }

    export interface CouponProduct {
        id: number;
        coupon_id: number;
        excluded: boolean;
        created_at: string | null;
        updated_at: string | null;
        product_id: number;
        coupon?: EscolaLms.Vouchers.Models.Coupon | null;
        product?: EscolaLms.Cart.Models.Product | null;
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
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
        orders?: Array<EscolaLms.Vouchers.Models.Order> | null;
        cart?: EscolaLms.Vouchers.Models.Cart | null;
        products?: Array<EscolaLms.Vouchers.Models.Product> | null;
        coupons?: Array<EscolaLms.Vouchers.Models.Coupon> | null;
        notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        read_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        unread_notifications?: Array<Illuminate.Notifications.DatabaseNotification> | null;
        roles?: Array<Spatie.Permission.Models.Role> | null;
        permissions?: Array<Spatie.Permission.Models.Permission> | null;
        clients?: Array<Laravel.Passport.Client> | null;
        tokens?: Array<Laravel.Passport.Token> | null;
        payments?: Array<EscolaLms.Payments.Models.Payment> | null;
        orders_count?: number | null;
        products_count?: number | null;
        coupons_count?: number | null;
        notifications_count?: number | null;
        read_notifications_count?: number | null;
        unread_notifications_count?: number | null;
        roles_count?: number | null;
        permissions_count?: number | null;
        clients_count?: number | null;
        tokens_count?: number | null;
        payments_count?: number | null;
        readonly name?: any;
        readonly email_verified?: boolean;
        readonly avatar_url?: string | null;
    }

    export interface CartItem {
        id: number;
        cart_id: number;
        buyable_type: string;
        buyable_id: number;
        quantity: number;
        options: string | null;
        created_at: string | null;
        updated_at: string | null;
        cart?: EscolaLms.Vouchers.Models.Cart | null;
        buyable?: any | null;
        readonly subtotal?: any;
        readonly price?: any;
        readonly base_price?: any;
        readonly discount_subtotal?: number;
        readonly discount?: number;
        readonly total?: any;
        readonly description?: any;
        readonly extra_fees?: any;
        readonly identifier?: string;
    }

    export interface Cart {
        id: number;
        user_id: number | null;
        created_at: string | null;
        updated_at: string | null;
        coupon_id: number | null;
        coupon?: EscolaLms.Vouchers.Models.Coupon | null;
        items?: Array<EscolaLms.Vouchers.Models.CartItem> | null;
        user?: EscolaLms.Cart.Models.User | null;
        items_count?: number | null;
        readonly cart_manager?: any;
        readonly additional_discount?: number;
        readonly total_pre_discount?: number;
        readonly subtotal?: number;
        readonly total?: number;
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
        price: number | null;
        extra_fees: number;
        tax_rate: number;
        name: string | null;
        order?: EscolaLms.Vouchers.Models.Order | null;
        buyable?: any | null;
        readonly description?: string | null;
        readonly subtotal?: number;
        readonly total?: number;
        readonly tax?: number;
        readonly total_with_tax?: number;
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
        coupon_id: number | null;
        discount: number;
        client_name: string | null;
        client_street: string | null;
        client_postal: string | null;
        client_city: string | null;
        client_country: string | null;
        client_company: string | null;
        client_taxid: string | null;
        client_email: string | null;
        client_street_number: string | null;
        coupon?: EscolaLms.Vouchers.Models.Coupon | null;
        items?: Array<EscolaLms.Cart.Models.OrderItem> | null;
        user?: EscolaLms.Core.Models.User | null;
        payments?: Array<EscolaLms.Payments.Models.Payment> | null;
        items_count?: number | null;
        payments_count?: number | null;
        readonly quantity?: number;
        readonly status_name?: string;
    }

    export interface CouponUser {
        id: number;
        coupon_id: number;
        user_id: number;
        created_at: string | null;
        updated_at: string | null;
        coupon?: EscolaLms.Vouchers.Models.Coupon | null;
        user?: EscolaLms.Vouchers.Models.User | null;
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
        coupons?: Array<EscolaLms.Vouchers.Models.Coupon> | null;
        productables?: Array<EscolaLms.Cart.Models.ProductProductable> | null;
        users?: Array<EscolaLms.Cart.Models.User> | null;
        tags?: Array<EscolaLms.Tags.Models.Tag> | null;
        categories?: Array<EscolaLms.Cart.Models.Category> | null;
        related_products?: Array<EscolaLms.Cart.Models.Product> | null;
        coupons_count?: number | null;
        productables_count?: number | null;
        users_count?: number | null;
        tags_count?: number | null;
        categories_count?: number | null;
        related_products_count?: number | null;
        readonly poster_url_or_productable_thumbnail?: string | null;
        readonly poster_absolute_url?: string | null;
        readonly authors?: any;
        readonly calculated_duration?: number;
    }

}

declare namespace EscolaLms.Tracker.Models {
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
        access_to_directories: string | null;
        current_timezone: string | null;
        deleted_at: string | null;
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

    export interface TrackRoute {
        id: number;
        user_id: number | null;
        path: string | null;
        full_path: string | null;
        method: string | null;
        extra: string | null;
        created_at: string | null;
        updated_at: string | null;
        user?: EscolaLms.Core.Models.User | null;
    }

}

declare namespace EscolaLms.Auth.Http.Requests {
    export interface ResetPasswordRequest {
        email: string;
        token: string;
        password: string;
    }

    export interface UserSettingsUpdateRequest {}

    export interface LogoutRequest {}

    export interface UpdateInterests {
        interests: Array<number>;
    }

    export interface ProfileUpdatePasswordRequest {
        new_password: string;
    }

    export interface ProfileUpdateRequest {
        first_name?: string;
        last_name?: string;
        age?: number;
        gender?: any;
    }

    export interface ForgotPasswordRequest {
        email: string;
        return_url: string;
    }

    export interface RefreshTokenRequest {}

    export interface UploadAvatarRequest {
        avatar: Blob | File;
    }

    export interface SocialAuthRequest {
        provider: string;
        return_url?: string | null;
    }

    export interface ResendVerificationEmailRequest {
        email: string;
        return_url: string | null;
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

    export interface ProfileUpdateAuthDataRequest {
        email: string;
    }

    export interface MyProfileRequest {}

    export interface LoginRequest {
        email: string;
        password: string;
        remember_me?: boolean;
    }

    export interface CompleteSocialDataRequest {
        email: string;
        token: string;
        return_url?: string;
    }

}

declare namespace EscolaLms.Auth.Http.Requests.Admin {
    export interface UserInterestDeleteRequest {}

    export interface UserSettingsUpdateRequest {
        settings: Array<{
            key: string;
            value: string | null;
        }>;
    }

    export interface UserDeleteRequest {}

    export interface UserGroupGetRequest {}

    export interface UserInterestsListRequest {}

    export interface UserGroupListRequest {
        search?: string;
        parent_id?: number;
        order_by?: string;
        order?: string;
    }

    export interface UserAvatarUploadRequest {}

    export interface UserGroupUpdateRequest {
        name: string;
        parent_id?: number | null;
        registerable?: boolean;
    }

    export interface UserInterestsUpdateRequest {
        interests: Array<number>;
    }

    export interface UsersListRequest {
        from?: string | null;
        to?: string | null;
    }

    export interface UserGetRequest {}

    export interface UserSettingsListRequest {}

    export interface UserGroupMemberAddRequest {}

    export interface UserInterestAddRequest {}

    export interface UserGroupCreateRequest {
        name: string;
        parent_id?: number | null;
        registerable?: boolean;
    }

    export interface UserGroupMemberRemoveRequest {}

    export interface UserGroupDeleteRequest {}

    export interface UserAvatarDeleteRequest {}

    export interface UserCreateRequest {
        first_name: string;
        last_name: string;
        email: string;
        verified?: boolean;
        password: string;
        return_url: string;
        roles?: any;
        groups?: Array<number>;
        settings?: Array<{
            key: string;
            value: string | null;
        }>;
    }

    export interface UserUpdateRequest {
        first_name?: string;
        last_name?: string;
        email?: string;
        email_verified?: boolean;
        password?: string;
        roles?: any;
    }

    export interface UserInterestDeleteRequest {}

    export interface UserSettingsUpdateRequest {
        settings: Array<{
            key: string;
            value: string | null;
        }>;
    }

    export interface UserDeleteRequest {}

    export interface UserGroupGetRequest {}

    export interface UserInterestsListRequest {}

    export interface UserGroupListRequest {
        search?: string;
        parent_id?: number;
        order_by?: string;
        order?: string;
    }

    export interface UserAvatarUploadRequest {}

    export interface UserGroupUpdateRequest {
        name: string;
        parent_id?: number | null;
        registerable?: boolean;
    }

    export interface UserInterestsUpdateRequest {
        interests: Array<number>;
    }

    export interface UsersListRequest {
        from?: string | null;
        to?: string | null;
    }

    export interface UserGetRequest {}

    export interface UserSettingsListRequest {}

    export interface UserGroupMemberAddRequest {}

    export interface UserInterestAddRequest {}

    export interface UserGroupCreateRequest {
        name: string;
        parent_id?: number | null;
        registerable?: boolean;
    }

    export interface UserGroupMemberRemoveRequest {}

    export interface UserGroupDeleteRequest {}

    export interface UserAvatarDeleteRequest {}

    export interface UserCreateRequest {
        first_name: string;
        last_name: string;
        email: string;
        verified?: boolean;
        password: string;
        return_url: string;
        roles?: any;
        groups?: Array<number>;
        settings?: Array<{
            key: string;
            value: string | null;
        }>;
    }

    export interface UserUpdateRequest {
        first_name?: string;
        last_name?: string;
        email?: string;
        email_verified?: boolean;
        password?: string;
        roles?: any;
    }

}

declare namespace EscolaLms.Cart.Http.Requests {
    export interface ProductSearchRequest {
        productable_id?: number;
        productable_type?: string;
        name?: string;
        free?: boolean;
        per_page?: number;
        page?: number;
        tags?: Array<string>;
    }

    export interface PaymentRequest {
        client_name?: string;
        client_email?: string;
        client_street?: string;
        client_street_number?: string;
        client_postal?: string;
        client_city?: string;
        client_country?: string;
        client_company?: string;
        client_taxid?: string;
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

    export interface ProductableAddToCartRequest {
        productable_id: number;
        productable_type: string;
    }

    export interface ProductReadRequest {
        id: number;
    }

    export interface ProductRemoveFromCartRequest {
        id: number;
    }

    export interface ProductSetQuantityInCartRequest {
        id: number;
        quantity?: number;
    }

    export interface OrderViewRequest {
        id: number;
    }

    export interface CartItemRemoveFromCartRequest {
        id: number;
    }

    export interface AddMissingProductsRequest {
        products?: Array<number>;
    }

}

declare namespace EscolaLms.Cart.Http.Requests.Admin {
    export interface ProductSearchRequest {
        productable_id?: number;
        productable_type?: string;
        name?: string;
        free?: boolean;
        purchasable?: boolean;
        per_page?: number;
        page?: number;
        tags?: Array<string>;
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

    export interface ProductableRegisteredListRequest {}

    export interface ProductReadRequest {
        id: number;
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
        poster?: any;
        duration?: string | null;
        limit_per_user?: number | null;
        limit_total?: number | null;
        productables?: Array<{
            id?: number;
            class?: string;
            quantity?: number;
        }>;
        categories?: Array<number>;
        tags?: Array<string>;
        related_products?: Array<number>;
    }

    export interface ProductManuallyTriggerRequest {
        id: number;
    }

    export interface ProductableAttachRequest {
        productable_type: string;
        user_id: number;
    }

    export interface ProductableListRequest {}

    export interface ProductAttachRequest {
        user_id: number;
    }

    export interface ProductableProductRequest {
        productable_type: string;
    }

    export interface ProductDetachRequest {
        user_id: number;
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
            quantity?: number;
        }>;
        categories?: Array<number>;
        tags?: Array<string>;
        related_products?: Array<number>;
    }

    export interface ProductDeleteRequest {
        id: number;
    }

    export interface ProductSearchRequest {
        productable_id?: number;
        productable_type?: string;
        name?: string;
        free?: boolean;
        purchasable?: boolean;
        per_page?: number;
        page?: number;
        tags?: Array<string>;
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

    export interface ProductableRegisteredListRequest {}

    export interface ProductReadRequest {
        id: number;
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
        poster?: any;
        duration?: string | null;
        limit_per_user?: number | null;
        limit_total?: number | null;
        productables?: Array<{
            id?: number;
            class?: string;
            quantity?: number;
        }>;
        categories?: Array<number>;
        tags?: Array<string>;
        related_products?: Array<number>;
    }

    export interface ProductManuallyTriggerRequest {
        id: number;
    }

    export interface ProductableAttachRequest {
        productable_type: string;
        user_id: number;
    }

    export interface ProductableListRequest {}

    export interface ProductAttachRequest {
        user_id: number;
    }

    export interface ProductableProductRequest {
        productable_type: string;
    }

    export interface ProductDetachRequest {
        user_id: number;
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
            quantity?: number;
        }>;
        categories?: Array<number>;
        tags?: Array<string>;
        related_products?: Array<number>;
    }

    export interface ProductDeleteRequest {
        id: number;
    }

}

declare namespace EscolaLms.Categories.Http.Requests {
    export interface CategoryCreateRequest {
        name: string;
        icon?: Blob | File | null;
        icon_class?: string | null;
    }

    export interface CategoryDeleteRequest {}

    export interface CategoryListRequest {
        page?: number;
        per_page?: number;
    }

    export interface CategoryUpdateRequest {
        name?: string;
        icon?: any;
        icon_class?: string | null;
    }

    export interface CategoryReadRequest {}

}

declare namespace EscolaLms.Webinar.Http.Requests {
    export interface WebinarAssignableUserListRequest {}

    export interface UpdateWebinarRequest {
        name?: string;
        status?: string;
        description?: string;
        duration?: string | null;
        agenda?: string | null;
        short_desc?: string | null;
        active_from?: string;
        active_to?: string;
        image?: any;
        logotype?: any;
        trainers?: Array<number>;
        tags?: Array<string>;
    }

    export interface ListWebinarsRequest {
        name?: string;
        status?: Array<string>;
    }

    export interface StoreWebinarRequest {
        name: string;
        status: string;
        description: string;
        agenda?: string | null;
        short_desc?: string | null;
        duration?: string | null;
        active_from?: string;
        active_to?: string;
        image?: Blob | File | null;
        trainers?: Array<number>;
    }

}

declare namespace EscolaLms.Consultations.Http.Requests {
    export interface UpdateConsultationRequest {
        name?: string;
        status?: string;
        description?: string;
        duration?: string | null;
        image?: any;
        author_id?: number;
        active_from?: string;
        active_to?: string;
        proposed_dates?: Array<string>;
        categories?: Array<number>;
    }

    export interface ScheduleConsultationRequest {
        date_from?: string;
        date_to?: string;
        status?: string;
    }

    export interface ChangeTermConsultationRequest {
        executed_at?: string;
    }

    export interface ShowConsultationRequest {}

    export interface ListConsultationsRequest {
        name?: string;
        order_by?: string;
        status?: Array<string>;
    }

    export interface ScheduleConsultationAPIRequest {
        date_from?: string;
        date_to?: string;
        status?: string;
    }

    export interface StoreConsultationRequest {
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

    export interface ReportTermConsultationRequest {
        term: string;
    }

    export interface ShowAPIConsultationRequest {}

    export interface ListAPIConsultationsRequest {
        name?: string;
        status?: Array<string>;
    }

}

declare namespace EscolaLms.ConsultationAccess.Http.Requests {
    export interface DeleteConsultationAccessEnquiryRequest {}

    export interface ReadConsultationAccessEnquiryRequest {}

    export interface UpdateConsultationAccessEnquiryRequest {
        description?: string | null;
        related_type?: string | null;
        related_id?: number | null;
        title?: string | null;
        proposed_terms: Array<string>;
    }

    export interface CreateConsultationAccessEnquiryRequest {
        consultation_id: number;
        description?: string | null;
        related_type?: string | null;
        related_id?: number | null;
        title?: string | null;
        proposed_terms: Array<string>;
    }

    export interface ListConsultationAccessEnquiryRequest {}

}

declare namespace EscolaLms.ConsultationAccess.Http.Requests.Admin {
    export interface AdminApproveConsultationAccessEnquiryRequest {
        proposed_term_id: number;
        meeting_link?: string;
    }

    export interface AdminDisapproveConsultationAccessEnquiryRequest {
        message?: string | null;
    }

    export interface AdminListConsultationAccessEnquiryRequest {}

}

declare namespace EscolaLms.Courses.Http.Requests {
    export interface ListTopicResourceAPIRequest {}

    export interface DeleteTopicAPIRequest {}

    export interface DeleteCourseAPIRequest {}

    export interface CreateCourseAPIRequest {
        title: string;
        summary?: string | null;
        image_path?: string | null;
        video_path?: string | null;
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
        findable?: boolean;
        target_group?: string | null;
        teaser_url?: string | null;
        public?: boolean | null;
        authors?: Array<number> | null;
    }

    export interface ListCourseAPIRequest {
        category_id?: number;
        categories?: Array<number>;
    }

    export interface UpdateLessonAPIRequest {
        title: string;
        duration?: string | null;
        order: number;
        summary?: string | null;
        active?: boolean;
    }

    export interface DeleteLessonAPIRequest {}

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
        duration?: string | null;
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
        duration?: string | null;
    }

    export interface GetCourseCurriculumAPIRequest {}

    export interface CloneLessonAPIRequest {}

    export interface CourseProgressAPIRequest {
        progress?: Array<{
            topic_id?: number;
            status?: number;
        }>;
    }

    export interface GetLessonAPIRequest {}

    export interface CreateLessonAPIRequest {
        title: string;
        duration?: string | null;
        order: number;
        summary?: string | null;
        active?: boolean;
    }

    export interface AssignAuthorApiRequest {}

    export interface DeleteTopicResourceAPIRequest {}

    export interface UploadTopicResourceAPIRequest {}

    export interface GetTopicAPIRequest {}

    export interface SortAPIRequest {
        course_id: number;
        orders: Array<{
            0?: number;
            1?: number;
        }>;
    }

    export interface CourseAssignableUserListRequest {}

    export interface UpdateCourseAPIRequest {
        title?: string;
        summary?: string | null;
        image_path?: string | null;
        video_path?: string | null;
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
        findable?: boolean;
        target_group?: string | null;
        teaser_url?: string | null;
        public?: boolean | null;
        authors?: Array<number> | null;
    }

    export interface GetCourseAPIRequest {}

    export interface RenameTopicResourceAPIRequest {
        name: string;
    }

    export interface CloneTopicAPIRequest {}

}

declare namespace EscolaLms.CourseAccess.Http.Requests {
    export interface ListCourseAccessEnquiryRequest {}

    export interface DeleteCourseAccessEnquiryRequest {}

    export interface CreateCourseAccessEnquiryApiRequest {
        course_id: number;
        data?: any;
    }

}

declare namespace EscolaLms.CourseAccess.Http.Requests.Admin {
    export interface AddAccessAPIRequest {
        groups?: Array<number>;
        users?: Array<number>;
    }

    export interface AdminApproveCourseAccessEnquiry {}

    export interface RemoveAccessAPIRequest {
        groups?: Array<number>;
        users?: Array<number>;
    }

    export interface AdminListCourseAccessEnquiryRequest {}

    export interface SetAccessAPIRequest {
        groups?: Array<number>;
        users?: Array<number>;
    }

    export interface ListAccessAPIRequest {}

    export interface AdminDeleteCourseAccessEnquiryRequest {}

}

declare namespace EscolaLms.Bookmarks.Http.Requests {
    export interface AdminListBookmarkRequest {}

    export interface CreateBookmarkRequest {
        value?: string | null;
        bookmarkable_id: number;
        bookmarkable_type: string;
    }

    export interface UpdateBookmarkRequest {
        value?: string | null;
        bookmarkable_id: number;
        bookmarkable_type: string;
    }

    export interface DeleteBookmarkRequest {}

    export interface ListBookmarkRequest {}

}

declare namespace EscolaLms.CoursesImportExport.Http.Requests {
    export interface CloneCourseAPIRequest {}

    export interface CourseImportAPIRequest {
        file: Blob | File;
    }

    export interface GetCourseExportAPIRequest {}

}

declare namespace EscolaLms.CsvUsers.Http.Requests {
    export interface ExportUsersToCsvAPIRequest {
        from?: string | null;
        to?: string | null;
        format?: string;
    }

    export interface ImportUsersFromCsvAPIRequest {
        file: Blob | File;
        return_url: string;
    }

}

declare namespace EscolaLms.Files.Http.Requests {
    export interface FileUploadRequest {
        file: Array<Blob | File>;
    }

    export interface FileDeleteRequest {
        url: string;
    }

    export interface FileMoveRequest {
        source_url: string;
        destination_url: string;
    }

    export interface FileListingRequest {
        page?: number | null;
        perPage?: number | null;
    }

    export interface FileFindByNameRequest {
        page?: number | null;
        perPage?: number | null;
    }

}

declare namespace EscolaLms.HeadlessH5P.Http.Requests {
    export interface ContentDeleteRequest {}

    export interface LibraryUploadRequest {}

    export interface ContentReadRequest {}

    export interface FilesStoreRequest {
        field: string;
        contentId: string;
    }

    export interface AdminContentReadRequest {}

    export interface LibraryInstallRequest {}

    export interface ContentCreateRequest {
        library: string;
        params: string;
        nonce: string;
    }

    export interface ContentUpdateRequest {
        library: string;
        params: string;
        nonce: string;
    }

    export interface LibraryDeleteRequest {}

    export interface LibraryFilterRequest {}

    export interface ContentListRequest {
        title?: string | null;
        library_id?: number | null;
        order_by?: string | null;
        order?: string | null;
    }

    export interface LibraryListRequest {}

    export interface LibraryStoreRequest {}

}

declare namespace EscolaLms.ModelFields.Http.Requests {
    export interface MetadataListRequest {}

    export interface MetadataDeleteRequest {
        name: string;
        class_type: string;
    }

    export interface MetadataCreateOrUpdateRequest {
        name: string;
        rules?: string;
        extra?: string;
        default?: string | null;
        class_type: string;
    }

}

declare namespace EscolaLms.Notifications.Http.Requests {
    export interface NotificationEventsRequest {}

    export interface NotificationsRequest {
        event?: string | null;
        include_read?: boolean;
        date_from?: string;
        date_to?: string;
        order_by?: string;
        order?: string;
    }

    export interface NotificationsUserRequest {
        user: number;
        event?: string | null;
        include_read?: boolean;
        date_from?: string;
        date_to?: string;
        order_by?: string;
        order?: string;
    }

    export interface NotificationReadRequest {
        notification: string;
    }

    export interface NotificationReadAllRequest {}

}

declare namespace EscolaLms.Pages.Http.Requests {
    export interface PageFrontListingRequest {}

    export interface PageFrontReadRequest {
        slug: string;
    }

    export interface PageReadRequest {
        id: number;
    }

    export interface PageDeleteRequest {
        id: number;
    }

    export interface PageCreateRequest {
        slug: string;
        title: string;
        content: string;
    }

    export interface PageUpdateRequest {
        id: number;
        slug?: string;
        title?: string;
        content?: string;
    }

    export interface PageListingRequest {
        title?: string;
        slug?: string;
        author_id?: number;
        order_by?: string;
        order?: string;
    }

}

declare namespace EscolaLms.Payments.Http.Requests.Admin {
    export interface PaymentsSearchAdminRequest {
        payable_id?: number;
        payable_type?: string;
        user_id?: number;
        date_from?: string;
        date_to?: string;
        order_id?: string;
        per_page?: number;
    }

    export interface PaymentsSearchAdminRequest {
        payable_id?: number;
        payable_type?: string;
        user_id?: number;
        date_from?: string;
        date_to?: string;
        order_id?: string;
        per_page?: number;
    }

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

declare namespace EscolaLms.Permissions.Http.Requests {
    export interface RoleReadRequest {}

    export interface RoleListingRequest {
        name?: string | null;
        order_by?: string;
        order?: string;
    }

    export interface RoleUpdateRequest {
        permissions: Array<string>;
    }

    export interface RoleCreateRequest {
        name: string;
    }

    export interface RoleDeleteRequest {}

}

declare namespace EscolaLms.Questionnaire.Http.Requests {
    export interface QuestionUpdateRequest {
        id: number;
        title?: string;
        description?: string;
        questionnaire_id: number;
        position?: number;
        active?: boolean;
        type?: string;
        public_answers?: boolean;
    }

    export interface QuestionnaireDeleteRequest {
        id: number;
    }

    export interface QuestionnaireFrontAnswerRequest {
        id: number;
        model_type_title?: string;
        model_id?: number;
        question_id: number;
        rate?: number;
        note?: string | null;
    }

    export interface QuestionnaireAssignUnassignRequest {
        id: number;
        model_type_title?: string;
        model_id?: number;
    }

    export interface QuestionnaireListingRequest {
        title?: string;
        order_by?: string;
        order?: string;
    }

    export interface QuestionnaireFrontReadRequest {
        id: number;
        model_type_title?: string;
        model_id?: number;
    }

    export interface QuestionCreateRequest {
        title: string;
        description: string;
        questionnaire_id: number;
        position?: number;
        active?: boolean;
        type?: string;
        public_answers?: boolean;
    }

    export interface QuestionListingRequest {}

    export interface QuestionAnswersFrontStarsRequest {
        question_id: number;
        model_type_title?: string;
        model_id?: number;
    }

    export interface QuestionnaireStarsFrontRequest {
        model_type_title?: string;
        model_id?: number;
    }

    export interface QuestionnaireReportRequest {
        id: number;
        model_type_id?: number | null;
        model_id?: number | null;
    }

    export interface QuestionnaireUpdateRequest {
        id: number;
        title?: string;
        active?: boolean;
        models?: Array<{
            model_type_id?: number;
            model_id?: number;
        }>;
    }

    export interface QuestionnaireReadRequest {
        id: number;
    }

    export interface QuestionAnswersFrontReadRequest {
        question_id: number;
        model_type_title?: string;
        model_id?: number;
        type?: string;
        order_by?: string;
        order?: string;
    }

    export interface QuestionDeleteRequest {
        id: number;
    }

    export interface QuestionnaireFrontListingRequest {
        model_type_title?: string;
        model_id?: number;
        public_answers?: boolean;
    }

    export interface QuestionAnswerListingRequest {
        questionnaire_id: number;
        question_id?: number | null;
        questionnaire_model_id?: number | null;
    }

    export interface QuestionReadRequest {
        id: number;
    }

    export interface QuestionnaireCreateRequest {
        title: string;
        active?: boolean;
        models?: Array<{
            model_type_id?: number;
            model_id?: number;
        }>;
    }

}

declare namespace EscolaLms.Reports.Http.Requests.Admin {
    export interface CourseStatsRequest {
        course_id: number;
        stats?: Array<string>;
    }

    export interface CartStatsRequest {
        stats?: Array<string>;
    }

    export interface ReportRequest {
        limit?: number;
        date?: string;
    }

    export interface DateRangeStatsRequest {
        date_from?: string | null;
        date_to?: string | null;
        stats?: Array<string>;
    }

    export interface CourseStatsRequest {
        course_id: number;
        stats?: Array<string>;
    }

    export interface CartStatsRequest {
        stats?: Array<string>;
    }

    export interface ReportRequest {
        limit?: number;
        date?: string;
    }

    export interface DateRangeStatsRequest {
        date_from?: string | null;
        date_to?: string | null;
        stats?: Array<string>;
    }

}

declare namespace EscolaLms.Scorm.Http.Requests {
    export interface ScormDeleteRequest {}

    export interface GetScormTrackRequest {}

    export interface SetScormTrackRequest {}

    export interface ScormCreateRequest {
        zip: Blob | File;
    }

    export interface ScormListRequest {}

}

declare namespace EscolaLms.Settings.Http.Requests.Admin {
    export interface SettingsUpdateRequest {
        key?: string;
        group?: string;
        public?: boolean;
        enumerable?: boolean;
        sort?: number;
    }

    export interface SettingsCreateRequest {
        key: string;
        group: string;
        public?: boolean;
        enumerable?: boolean;
        sort?: number;
    }

    export interface SettingsListRequest {}

    export interface SettingsDeleteRequest {}

    export interface SettingsReadRequest {}

    export interface ConfigUpdateRequest {
        config: Array<{
            key: string;
            value?: any | null;
        }>;
    }

    export interface ConfigListRequest {}

}

declare namespace EscolaLms.StationaryEvents.Http.Requests {
    export interface DeleteStationaryEventRequest {}

    export interface ReadStationaryEventRequest {}

    export interface UpdateStationaryEventRequest {
        name?: string | null;
        status?: string;
        description?: string | null;
        short_desc?: string | null;
        started_at?: string | null;
        finished_at?: string | null;
        base_price?: number | null;
        max_participants?: number | null;
        place?: string | null;
        program?: string | null;
        image?: any;
        image_path?: string | null;
        agenda?: string | null;
        authors?: Array<number> | null;
        categories?: Array<number>;
    }

    export interface ListStationaryEventForCurrentUserRequest {
        name?: string;
    }

    export interface ListStationaryEventRequest {}

    export interface CreateStationaryEventRequest {
        name: string;
        status: string;
        description: string;
        short_desc?: string | null;
        started_at: string;
        finished_at: string;
        base_price?: number | null;
        max_participants?: number | null;
        place?: string | null;
        program?: string | null;
        image?: Blob | File | null;
        agenda?: string | null;
        authors?: Array<number> | null;
        categories?: Array<number>;
    }

    export interface ReadStationaryEventPublicRequest {}

}

declare namespace EscolaLms.Tags.Http.Request {
    export interface TagInsertRequest {
        model_type: string;
        model_id: number;
        tags: any;
    }

    export interface TagRemoveRequest {
        tags: any;
    }

}

declare namespace EscolaLms.Tasks.Http.Requests {
    export interface DeleteTaskNoteRequest {}

    export interface DetailsTaskRequest {}

    export interface DeleteTaskRequest {}

    export interface IncompleteTaskRequest {}

    export interface CompleteTaskRequest {}

    export interface UpdateTaskNoteRequest {
        task_id: number;
        note: string;
    }

    export interface CreateTaskNoteRequest {
        task_id: number;
        note: string;
    }

    export interface UpdateTaskRequest {
        title: string;
        description?: string | null;
        type?: string | null;
        related_type?: string | null;
        related_id?: number | null;
        due_date?: string;
    }

    export interface ListTaskRequest {}

    export interface CreateTaskRequest {
        title: string;
        description?: string | null;
        type?: string | null;
        related_type?: string | null;
        related_id?: number | null;
        due_date?: string;
    }

}

declare namespace EscolaLms.Tasks.Http.Requests.Admin {
    export interface AdminUpdateTaskRequest {
        title: string;
        description?: string | null;
        type?: string | null;
        related_type?: string | null;
        related_id?: number | null;
        user_id: number;
        due_date?: string;
    }

    export interface AdminDeleteTaskNoteRequest {}

    export interface AdminUpdateTaskNoteRequest {
        task_id: number;
        note: string;
    }

    export interface AdminCreateTaskNoteRequest {
        task_id: number;
        note: string;
    }

    export interface AdminCreateTaskRequest {
        title: string;
        description?: string | null;
        type?: string | null;
        related_type?: string | null;
        related_id?: number | null;
        user_id: number;
        due_date?: string;
    }

    export interface AdminListTaskRequest {}

    export interface AdminCompleteTaskRequest {}

    export interface AdminDeleteTaskRequest {}

    export interface AdminIncompleteTaskRequest {}

    export interface AdminDetailsTaskRequest {}

}

declare namespace EscolaLms.Templates.Http.Requests {
    export interface TemplateAssignedRequest {
        assignable_class: string;
    }

    export interface EventTriggerRequest {
        users: Array<number>;
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

    export interface TemplateUpdateRequest {
        name?: string;
        channel?: string;
        event?: string;
        sections?: Array<{
            key?: string;
            content?: string;
        }>;
    }

    export interface TemplateListAssignableRequest {
        assignable_class?: string;
        event?: string;
        channel?: string;
    }

    export interface TemplateReadRequest {}

    export interface TemplateAssignRequest {}

    export interface TemplateListingRequest {
        event?: string;
        channel?: string;
        name?: string;
        per_page?: number | null;
        order_by?: string | null;
    }

    export interface TemplateDeleteRequest {}

}

declare namespace EscolaLms.TemplatesPdf.Http.Requests {
    export interface PdfListingRequest {}

    export interface PdfListingAdminRequest {
        user_id?: number;
        template_id?: number;
    }

    export interface PdfReadRequest {}

}

declare namespace EscolaLms.TopicTypeGift.Http.Requests {
    export interface ReadQuizAttemptRequest {}

    export interface SaveAllAttemptAnswersRequest {
        topic_gift_quiz_attempt_id: number;
        answers: Array<{
            answer: {
                text?: string;
                matching?: any;
                multiple?: any;
                bool?: boolean;
                numeric?: number;
            };
        }>;
    }

    export interface SaveAttemptAnswerRequest {
        topic_gift_quiz_attempt_id: number;
        topic_gift_question_id: number;
        answer?: {
            text?: string;
            matching?: any;
            multiple?: any;
            bool?: boolean;
            numeric?: number;
        };
    }

    export interface ListQuizAttemptRequest {
        order_by?: string;
        order?: string;
    }

    export interface EndQuizAttemptRequest {}

    export interface GetActiveAttemptRequest {
        topic_gift_quiz_id: number;
    }

}

declare namespace EscolaLms.TopicTypeGift.Http.Requests.Admin {
    export interface AdminReadQuizAttemptRequest {}

    export interface AdminGiftQuestionRequest {
        topic_gift_quiz_id: number;
        value: string;
        score: number;
        order?: number | null;
    }

    export interface AdminCreateGiftQuestionRequest {
        topic_gift_quiz_id: number;
        value: string;
        score: number;
        order?: number | null;
    }

    export interface AdminUpdateGiftQuestionRequest {
        topic_gift_quiz_id: number;
        value: string;
        score: number;
        order?: number | null;
    }

    export interface AdminDeleteGiftQuestionRequest {}

    export interface AdminSortGiftQuestionRequest {
        orders: Array<{
            id: number;
            order: number;
        }>;
    }

    export interface AdminUpdateAttemptAnswerRequest {
        score: number;
        feedback?: string | null;
    }

    export interface AdminListQuizAttemptRequest {
        order_by?: string;
        order?: string;
    }

}

declare namespace EscolaLms.TopicTypeProject.Http.Requests {
    export interface DeleteProjectSolutionRequest {}

    export interface ListProjectSolutionRequest {}

    export interface CreateProjectSolutionRequest {
        topic_id: number;
        file: Blob | File;
    }

}

declare namespace EscolaLms.TopicTypeProject.Http.Requests.Admin {
    export interface AdminListProjectSolutionRequest {}

    export interface AdminDeleteProjectSolutionRequest {}

}

declare namespace EscolaLms.Vouchers.Http.Requests {
    export interface UpdateCouponRequest {
        name?: string | null;
        code?: string;
        active?: boolean;
        active_from?: string | null;
        active_to?: string | null;
        limit_usage?: number | null;
        limit_per_user?: number | null;
        min_cart_price?: number | null;
        max_cart_price?: number | null;
        amount?: number;
        exclude_promotions?: boolean;
        included_products?: Array<number>;
        excluded_products?: Array<number>;
        users?: Array<number>;
        included_categories?: Array<number>;
        excluded_categories?: Array<number>;
    }

    export interface DeleteCouponRequest {}

    export interface ApplyCouponRequest {
        code?: string;
    }

    export interface ListCouponsRequest {
        name?: string;
        code?: string;
        type?: string;
        active_from?: string;
        active_to?: string;
        page?: number;
        per_page?: number;
    }

    export interface UnapplyCouponRequest {}

    export interface CreateCouponRequest {
        name?: string | null;
        code: string;
        active?: boolean;
        active_from?: string | null;
        active_to?: string | null;
        limit_usage?: number | null;
        limit_per_user?: number | null;
        min_cart_price?: number | null;
        max_cart_price?: number | null;
        amount: number;
        exclude_promotions?: boolean;
        included_products?: Array<number>;
        excluded_products?: Array<number>;
        users?: Array<number>;
        included_categories?: Array<number>;
        excluded_categories?: Array<number>;
    }

    export interface ReadCouponRequest {}

}

declare namespace EscolaLms.Translations.Http.Requests {
    export interface DeleteLanguageLineRequest {}

    export interface ListLanguageLineRequest {}

    export interface RetrieveTranslationRequest {
        key: string;
        replace?: any;
    }

    export interface UpdateLanguageLineRequest {
        group?: string;
        key?: string;
        public?: boolean;
        text?: Array<string>;
    }

    export interface ReadLanguageLineRequest {}

    export interface PublicListLanguageLineRequest {}

    export interface CreateLanguageLineRequest {
        group: string;
        key: string;
        public?: boolean;
        text: Array<string>;
    }

}
