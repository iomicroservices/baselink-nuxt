<script lang="ts" setup>
import { Title } from '#components';

useHead({
  title: 'eLandline | Virtual Landline Services for UK Small Businesses',
  meta: [
    {
      name: 'description',
      content:
        'eLandline specialises in virtual landlines and call management solutions, designed for the evolving needs of UK\'s small businesses. Effortless setup, superior service.',
    },
  ],
  titleTemplate: '%s | BaseLink',
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
  <div class="page-container">

    <MainHeroStandard badge="Get a quote instantly" title="Brilliant local cleaners"
      description="5* service. Vetted cleaners. All managed online. This is housework that works."
      alt="Get a virtual landline number for your business in the UK"
      ogImage="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
      button1="Get connected 🚀" button2="Find out more 👇" path1="/" path2="/" />

    <ContactItem />

    <MainBenefits />

    <MainSubcategory title="Commercial cleaning services" category="commercial-cleaning" />


    <MainCategory title="Handy services near me" />


    <MainFaqside>
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
    </MainFaqside>


    <MainProcess title="How to book a trusted handyman">
      <ProcessItem name="Give us the details" :stepNumber="1"
        description="Tell us about the job & when you'd like the handyman to come. We've got handymen available same-day" />
      <ProcessItem name="Complete payment" :stepNumber="2"
        description="Pay with confidence through our secure payment portal to subscribe." />
      <ProcessItem name="Start taking calls" :stepNumber="3"
        description="You're all set up and ready to connect with customers wherever you are." />
    </MainProcess>


    <MainCta title="What are you waiting for?" button="Get a quote" path="/" />


    <MainContact title="Want to get in touch?"
      description="We're here for you, Monday-Friday from 08:00 to 18:00, and on weekends from 08:00 to 17:00.">
    </MainContact>


    <MainRecent />
    

  </div>
</template>
