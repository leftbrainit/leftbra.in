interface ExternalUrl {
    url: string
    title: string
}

interface FooterCategory {
    name: string
    pages: string[]
    externalUrls: ExternalUrl[]
}

interface SocialLink {
    title: string
    url: string
    image: string
}

export interface SiteConfig {
    dashboardBaseURL: string
    googleMapsAPIKey: string
    topNavigationItems: string[]
    footerCategories: FooterCategory[]
    copyrightNotice: string
    socialLinks: SocialLink[]
}

interface TeamMember {
    name: string
    position: string
    image: string
}

export interface Team {
    members: TeamMember[]
}

interface Location {
    country: string
    city: string
    address: string
}

export interface Locations {
    locations: Location[]
}

export interface NiceRouteName {
    name: string
    niceName: string
}

interface Testimonial {
    authorName: string
    authorAvatarUrl: string
    authorJobTitle: string
    companyName: string
    companyLogoUrl: string
    body: string
    position: string
}

export interface Testimonials {
    testimonials: Testimonial[]
}