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

  <HeroTemplate />

  <MainHero badge="Only £11/month • Unlimited minutes"
    title="Handle customer calls like a pro with your virtual business number"
    description="It takes a couple of clicks to get connected, just like magic! We'll shoot across your new business number by email, professionally configured and ready to take calls. Plus, enjoy free call features for superior customer engagement."
    alt="Get a virtual landline number for your business in the UK"
    og-image="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png" button1="/" button2="/" />


  <FaqTemplateSide>
    <!--Below is content for named slot Title; default value if not included-->
    <template #title>
      Frequently Asked Questions
    </template>
    <!--Below is default slot content-->
    <FaqItem order="0" question="1" answer="It's only £11 a month. It comes with lots of free features." />
    <FaqItem order="0" question="2" answer="It's only £11 a month. It comes with lots of free features." />
    <FaqItem order="0" question="3" answer="It's only £11 a month. It comes with lots of free features." />
    <FaqItem order="0" question="4" answer="It's only £11 a month. It comes with lots of free features." />
    <FaqItem order="0" question="5" answer="It's only £11 a month. It comes with lots of free features." />
    <FaqItem order="0" question="6" answer="It's only £11 a month. It comes with lots of free features." />
    <FaqItem order="0" question="7" answer="It's only £11 a month. It comes with lots of free features." />
    <FaqItem order="0" question="8" answer="It's only £11 a month. It comes with lots of free features." />
    <FaqItem order="0" question="9" answer="It's only £11 a month. It comes with lots of free features." />
    <FaqItem order="0" question="10" answer="It's only £11 a month. It comes with lots of free features." />
    <FaqItem order="0" question="11" answer="It's only £11 a month. It comes with lots of free features." />
  </FaqTemplateSide>


  <ProcessHowto title="How to book a trusted handyman">
    <ProcessItem name="Give us the details" stepNumber="1"
      description="Tell us about the job & when you'd like the handyman to come. We've got handymen available same-day" />
    <ProcessItem name="Complete payment" stepNumber="2"
      description="Pay with confidence through our secure payment portal to subscribe." />
    <ProcessItem name="Start taking calls" stepNumber="3"
      description="You're all set up and ready to connect with customers wherever you are." />
  </ProcessHowto>

  <CtaSimple title="What are you waiting for?" button="Get a quote" path="/" />

  <CtaContact title="Want to get in touch?"
    description="We're here for you, Monday-Friday from 08:00 to 18:00, and on weekends from 08:00 to 17:00.">
  </CtaContact>

  <MainBenefits />

  <MainServices />

  <MainContact title="Looking for more info?"
    image="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png"
    og-image="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png"
    alt="Get a virtual landline number for your business in the UK" link1="/" contact1="Visit the Help Centre"
    desc1="Find answers and support quickly"
    link2="https://wa.me/447919191791?text=Hello%20I%20would%20like%20more%20information%20about%20eLandline"
    contact2="WhatsApp messenger" desc2="Chat with a member of the team" link3="mailto: info@elandline.co.uk"
    contact3="Email us" desc3="Reach us at info@elandline.co.uk" />

  <MainRecent />

</template>
