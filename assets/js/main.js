$(document).ready(function () {
  fetch("../../src/data/data.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      return appendData(data);
    });
  function appendData(data) {
    for (let i = 0; i < data.length; i++) {
      $(".product").append(`
        <div
          class="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg  bg-[#03161e] shadow-md hover:shadow-[0_0_5px_1px_#aa2116]"
        >
          <a
            class="relative mx-3 mt-3 flex  overflow-hidden rounded-xl"
            href="#"
          >
            <img
              class="h-20 w-full object-contain object-center"
              src="${data[i].image}"
              alt="product image"
            />
          </a>
              <div class="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl tracking-tight text-white">
                  ${data[i].title}
                  </h5>
                </a>
                
              <form class="max-w-xs mx-auto">
              <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
              <div class="relative flex items-center">
                  <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                      <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                      </svg>
                  </button>
                  <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value="${data[i].quantity}" required />
                  <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                      <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                      </svg>
                  </button>
              </div>
              </form>
                <div class="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span class="text-3xl font-bold text-white">${data[i].price}</span>
                  </p>
                </div>
            <a
              href="#"
              class="hover:border-white/40 hover:text-white hover:no-underline flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Mua ngay</a
            >
            <a
              href="#"
              class="hover:border-white/40 hover:text-white flex hover:no-underline items-center justify-center rounded-md border mt-2 border-transparent bg-orange-900 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Thêm vào giỏ</a
            >
          </div>
        </div>
        `);
    }
  }
});
