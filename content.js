(() => {
  function getProfileData() {
    const fullName = document.querySelector(".pv-text-details__left-panel h1")?.innerText.trim() || "";
    const designation = document.querySelector(".pv-text-details__left-panel .text-body-medium")?.innerText.trim() || "";
    const organisation = document.querySelector(".pv-entity__secondary-title")?.innerText.trim() ||
                         document.querySelector(".pv-text-details__right-panel div")?.innerText.trim() || "";

    const linkedin_handle = window.location.pathname.replace("/in/", "").replace("/", "");

    return { fullName, designation, organisation, linkedin_handle };
  }

  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "getProfile") {
      sendResponse(getProfileData());
    }
  });
})();
