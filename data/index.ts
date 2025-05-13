export const navbarData = {
    homeTitle: "BaseLink",
}

export const footerData = {
    companyName: 'Mohana Ltd',
    companyReg: '',
    author: 'Mohana Ltd',
    brand: 'BaseLink',
    aboutAuthor:
        'BaseLink connects residential and commercial customers with reliable cleaners, tradespeople, and property service professionals. From plumbing and electrical work to expert cleaning and maintenance, we deliver trusted, local services at competitive prices.',
    authorInterest:
        "We're committed to making property services simpler and more accessible through digital-first solutions. Whether you're a homeowner, landlord or business, BaseLink is here to help.",
    aboutTheSite:
        "This is the official website of BaseLink, a digital-first UK property services provider. We offer trusted tradespeople and cleaners across residential and commercial sectors. Built with Nuxt3 and deployed via Vercel.",
    services: [
        { name: 'Home cleaning', link: '/services/home-cleaning' },
        { name: 'Commercial cleaning', link: '/services/commercial-cleaning' },
        { name: 'Mobile car wash', link: '/services/mobile-car-wash' },
        { name: 'Tradespeople', link: '/services/tradespeople' },
        { name: 'Carpenter', link: '/services/tradespeople/carpenter' },
        { name: 'Gardener', link: '/services/tradespeople/gardener' },
        { name: 'Gas & heating engineer', link: '/services/tradespeople/gas-heating-engineer' },
        { name: 'Boiler installation', link: '/services/tradespeople/gas-heating-engineer/boiler-installation' },
        { name: 'Handyman', link: '/services/tradespeople/handyman' },
        { name: 'TV wall mounting', link: '/services/tradespeople/handyman/tv-wall-mounting' },
        { name: 'Locksmith', link: '/services/tradespeople/locksmith' },
        { name: 'Network engineer', link: '/services/tradespeople/network-engineer' },
        { name: 'CCTV installation', link: '/services/tradespeople/network-engineer' },
        { name: 'Painter & decorator', link: '/services/tradespeople/painter-decorator' },
        { name: 'Plumber', link: '/services/tradespeople/plumber' },
        { name: 'Removals', link: '/services/tradespeople/removals' },
    ],
    company: [
        { name: 'About us', link: '/about' },
        { name: 'Reviews', link: '/' },
        { name: 'Contact', link: '/' },
        { name: 'Recruitment', link: '/' },
        { name: 'Legal', link: '/legal' },
        { name: 'Sitemap', link: '/sitemap.xml' },
    ],
    locations: [
        { name: 'London', link: '/' },
    ],
    resources: [
        { name: 'FAQs', link: '/' },
        { name: 'Blog', link: '/blog' },
        { name: 'How to guides', link: '/' },
        { name: 'Pricing guides', link: '/' },
        { name: 'Vendor guides', link: '/' },
    ],
    sectors: [
        { name: 'Residential', link: '/' },
        { name: 'Estate agents', link: '/' },
        { name: 'Restaurants', link: '/' },
        { name: 'Pubs & bars', link: '/' },
        { name: 'Retail & shops', link: '/' },
        { name: 'Shopping centres', link: '/' },
        { name: 'Warehouses', link: '/' },
        { name: 'Light industrial', link: '/' },
        { name: 'Hotels', link: '/' },
        { name: 'Serviced apartments', link: '/' },
        { name: 'Small business', link: '/' },
        { name: 'Property management', link: '/' },
        { name: 'Public sector', link: '/' },
        { name: 'Lawyers & Solicitors', link: '/' },
    ],
}

export const homePage = {
    title: "Property Services for Home and Business | BaseLink",
    description:
        "Book trusted cleaners, handymen, plumbers, electricians, and more — all through BaseLink, the UK's digital-first platform for home and commercial services.",
}

export const blogsPage = {
    title: 'BaseLink Blog',
    description: 'Read the latest property tips, service guides, and expert insights from BaseLink.',
}

export const categoryPage = {
    title: 'Blog Categories',
    description:
        'Explore topics across cleaning, repairs, home maintenance, and commercial property services on the BaseLink Blog.',
}

export const aboutPage = {
    title: 'About BaseLink',
    description: 'Trusted Property Services Across the UK',
    aboutMe:
        "BaseLink is a digital-first property services platform connecting you with vetted local professionals across the UK. Whether it's a leaky tap or a deep clean, we make booking services easy, reliable and affordable.",
}

export const seoData = {
    title: `BaseLink | Property Services for Home & Business`,
    ogTitle: `Book Cleaners, Tradespeople & Maintenance Services | BaseLink UK`,
    description: `BaseLink is the UK's trusted digital-first platform for residential and commercial property services — including cleaners, handymen, electricians, plumbers, and more.`,
    twitterDescription: `Book reliable cleaners and tradespeople through BaseLink — the UK's digital-first platform for trusted property services.`,
    image:
        'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp', // Replace with a branded BaseLink image if available
    mySite: 'https://baselink.uk',
    twitterHandle: '@hellobaselink',
    mailAddress: 'hello@baselink.uk',
}

export const socialLinks = [
    { name: 'Instagram', link: 'https://instagram.com/hellobaselink', icon: 'fa:instagram' },
    { name: 'Facebook', link: 'https://facebook.com/hellobaselink', icon: 'fa:facebook-square' },
]

export const siteMetaData = [
    {
        name: 'description',
        content: seoData.description,
    },
    { property: 'og:site_name', content: seoData.mySite },
    { property: 'og:type', content: 'website' },
    {
        property: 'og:url',
        content: seoData.mySite,
    },
    {
        property: 'og:title',
        content: seoData.ogTitle,
    },
    {
        property: 'og:description',
        content: seoData.description,
    },
    {
        property: 'og:image',
        content: seoData.image,
    },
    { name: 'twitter:site', content: seoData.twitterHandle },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
        name: 'twitter:url',
        content: seoData.mySite,
    },
    {
        name: 'twitter:title',
        content: seoData.ogTitle,
    },
    {
        name: 'twitter:description',
        content: seoData.twitterDescription,
    },
    {
        name: 'twitter:image',
        content: seoData.image,
    },
]