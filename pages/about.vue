<script setup lang="ts">
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'About eLandline - Your Trusted UK Virtual Landline Provider',
  description: 'Learn about eLandline, the UK\'s dedicated provider of virtual landlines and business phone solutions. Discover how we support small businesses with our innovative services',
  link: '/elandline-logo-full.png',
})
</script>

<template>
  <div class="px-6 py-5 sm:py-9 gap-5 container max-w-6xl  mx-auto">
    <div class="col-span-5">
      <div class="flex justify-between">
        <div>
          <h1 class="text-xl sm:text-4xl  pb-2 font-bold ">
            About eLandline
          </h1>

          <div class="my-3 space-x-2 md:space-x-3 pb-10">
            <NuxtLink
              to="https://facebook.com/elandlineuk"
              target="_blank"
              class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
              aria-label="Facebook"
            >
              <Icon name="fa:facebook" size="1em" />
            </NuxtLink>
            <NuxtLink
              to="https://www.instagram.com/elandlineuk/"
              target="_blank"
              class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
              aria-label="Instagram"
            >
              <Icon name="fa:instagram" size="1em" />
            </NuxtLink>
            <NuxtLink
              to="https://twitter.com/elandlineuk"
              target="_blank"
              class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
              aria-label="Twitter"
            >
              <Icon name="fa:twitter-square" size="1em" />
            </NuxtLink>
          </div>
        </div>
        <div class="pr-32">
          <NuxtImg src="/elandline-logo-full.png" width="250" />
        </div>
      </div>
      <h3 class="text-base sm:text-3xl font-semibold pb-7 sm:pb-12">
        Communication Innovator, Small Business Ally, Telephony Specialist.
      </h3>
      <p>Our mission is to empower small businesses across the UK with telecommunication solutions that are not only easy to use but also help them grow. We aim to transform how small businesses communicate with their customers, making advanced telephony features accessible to every entrepreneur.</p>
      <br>
      <p>Based in London and serving the UK, we offer comprehensive area code coverage, ensuring you have the local or national landline number your business needs.</p>
      <br>
      <p>Since our inception five years ago, we've been at the forefront of telecom solutions, specifically tailored for small businesses. Our virtual landline and call handling services are designed for simplicity and efficiency, offering hassle-free connectivity at affordable prices.</p>
      <br>
      <p>We recognise the challenges small businesses face, which is why our services are flexible and customizable. Whether you need to scale up or down, our pay-as-you-go solutions and custom integrations are designed to meet your unique business needs.</p>
      <br>
      <p>At our core, we're more than just a provider; we're a partner in your success, dedicated to ensuring your business flourishes in the digital world. With us, communication becomes effortless, allowing you to focus on growing your business and enjoying life.</p>
    </div>
  </div>
</template>
