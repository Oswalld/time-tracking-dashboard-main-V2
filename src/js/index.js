fetch("/time-tracking-dashboard-main-V2/data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Oops! Something went wrong.");
    }
    return response.json();
  })
  .then((data) => {
    const container = document.querySelector(".containerr");
    const daily = document.querySelector(".daily");
    const weekly = document.querySelector(".weekly");
    const monthly = document.querySelector(".monthly");

    function updateData(timeframe) {
      container.innerHTML = ""; // Clear existing content
      data.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("rounded-2xl");
        div.innerHTML = `
          <div style="background-image: url(./src/images/icon-${item.title
            .replace(" ", "-")
            .toLowerCase()}.svg)"
            class="bg-${item.title
              .replace(" ", "")
              .toLowerCase()} rounded-t-2xl h-16 lg:h-[70px] bg-[calc(100%_-_20px)_center] lg:bg-[length:100px] bg-no-repeat"></div>
          <div class="rounded-2xl bg-Dark-blue -mt-5 z-20 p-6 lg:p-10 space-y-2 lg:space-y-8">
            <div class="flex justify-between items-center">
              <div class="font-bold text-White lg:text-xl lg:font-medium">${
                item.title
              }</div>
              <svg class="group cursor-pointer" width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                <path class="group-hover:fill-White" d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/>
              </svg>
            </div>
            <div class="flex justify-between items-center lg:flex-col lg:items-start lg:gap-6">
              <div class="text-2xl lg:text-7xl text-White font-thin">${
                item.timeframes[timeframe].current
              }hrs</div>
              <div class="text-Pale-Blue">Last ${timeframe} - ${
          item.timeframes[timeframe].previous
        }hrs</div>
            </div>
          </div>
        `;
        container.appendChild(div);
      });
    }

    const removeFocus = () => {
      daily.classList.remove("!text-White");
      weekly.classList.remove("!text-White");
      monthly.classList.remove("!text-White");
    };

    daily.addEventListener("click", () => {
      updateData("daily");
      removeFocus();
      daily.classList.add("!text-White");
    });

    weekly.addEventListener("click", () => {
      updateData("weekly");
      removeFocus();
      weekly.classList.add("!text-White");
    });
    monthly.addEventListener("click", () => {
      updateData("monthly");
      removeFocus();
      monthly.classList.add("!text-White");
    });

    // Initialize with weekly data
    updateData("weekly");
    weekly.classList.add("!text-White");
  })
  .catch((error) => {
    console.error(error);
  });
