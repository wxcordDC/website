export function ComingSoon() {
  return (
    <section class="h-[40vh] relative lg:top-[30vh] top-[22vh]">
      <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 class="text-5xl font-bold tracking-tight text-gray-600 dark:text-white">
          wxCord - Coming soon!
        </h2>

        <p class="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
          Prepare for a change in Discord Networks! <br/> Equipped with a cheeky, not too intrusive aesthetic and a primary focus on community, a new time for Discord servers lies ahead of us!
        </p>

        <div class="mt-6">
          <div class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3">
            <a
              href="rules"
              class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto"
            >
              <span class="mx-2">
                Rules and Guidelines
              </span>
            </a>
          </div>

          <div class="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3 sm:mt-0">
            <a
              href="#"
              class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600"
            >
              <span class="mx-2">
                Join our first server!
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
