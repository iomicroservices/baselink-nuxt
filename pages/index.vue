<script lang="ts" setup>
useHead({
  title: 'eLandline | Virtual Landline Services for UK Small Businesses',
  meta: [
    {
      name: 'description',
      content:
        'eLandline specialises in virtual landlines and call management solutions, designed for the evolving needs of UK\'s small businesses. Effortless setup, superior service.',
    },
  ],
  titleTemplate: 'eLandline | %s',
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'eLandline | UK Local & National Telephone Numbers for Businesses',
  description: 'eLandline delivers flexible UK local and national telephone numbers to enhance your business presence. Join and enjoy bespoke virtual landline services with easy management.',
  link: '/elandline-logo-full.png',
})
</script>

<template>
  <main class="container max-w-6xl mx-auto text-zinc-600">
    
    <MainHero
      badge="Only £11/month • Unlimited minutes"
      title="Handle customer calls like a pro with your virtual business number"
      description="It takes a couple of clicks to get connected, just like magic! We'll shoot across your new business number by email, professionally configured and ready to take calls. Plus, enjoy free call features for superior customer engagement."
      alt="Get a virtual landline number for your business in the UK"
      og-image="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png"
      button1="/"
      button2="/"
    />

    <MainProcess
      title="Get connected and give your business superpowers"
      step1="Select your number"
      step1text="Choose your ideal area code and provide us with a forwarding number."
      step2="Complete payment"
      step2text="Pay with confidence through our secure payment portal to subscribe."
      step3="Start taking calls"
      step3text="You're all set up and ready to connect with customers wherever you are."
    />

    <MainPricing
      title="The ideal plan for small business"
      description="Choose from Local, National or Freephone numbers, and easily direct calls to your existing phone. Enjoy tonnes of call features included as standard that deliver the bang for your buck."
      feature1="Made for small business"
      feature2="12+ free features"
      feature3="Smart call divert"
      feature4="Self-service console"
      plan="Unlimited Minutes"
      amount="11"
      benefit1="Monthly rolling plan"
      benefit2="Cancel at any time"
      benefit3="Competitive pricing"
      benefit4="Satisfaction guarantee"
      button="Subscribe now"
      path="/"
    />

    <MainBenefits />

    <MainFeatures2 />

    <MainContact
      title="Looking for more info?"
      image="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png"
      og-image="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png"
      alt="Get a virtual landline number for your business in the UK"
      link1="/"
      contact1="Visit the Help Centre"
      desc1="Find answers and support quickly"
      link2="https://wa.me/447919191791?text=Hello%20I%20would%20like%20more%20information%20about%20eLandline"
      contact2="WhatsApp messenger"
      desc2="Chat with a member of the team"
      link3="mailto: info@elandline.co.uk"
      contact3="Email us"
      desc3="Reach us at info@elandline.co.uk"
    />

    <MainFaq />
    <MainRecent />
  </main>
</template>
